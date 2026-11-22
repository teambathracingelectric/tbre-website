// Ko-fi webhook receiver and public state for the adopt-a-cell page.
// Kept free of Cloudflare imports so it can be unit tested with plain Node.
import { buildState, CURRENCY, cleanName, type Donation } from "./allocate.ts";

type Statement = {
  bind(...values: unknown[]): Statement;
  run(): Promise<unknown>;
  all<T>(): Promise<{ results: T[] }>;
};

/** The parts of the Worker environment this feature uses. */
export type AdoptEnv = {
  ADOPT_DB?: { prepare(sql: string): Statement };
  KOFI_VERIFICATION_TOKEN?: string;
  DONOR_SALT?: string;
};

type Row = {
  donor_key: string;
  name: string;
  is_public: number;
  amount_pence: number;
  ts: string;
};

// One row per Ko-fi payment. No emails or messages are stored.
const SCHEMA = `CREATE TABLE IF NOT EXISTS donations (
  txn_id TEXT PRIMARY KEY,
  ts TEXT NOT NULL,
  type TEXT NOT NULL,
  donor_key TEXT NOT NULL,
  name TEXT NOT NULL,
  is_public INTEGER NOT NULL,
  amount_pence INTEGER NOT NULL,
  currency TEXT NOT NULL
)`;

const ready = new WeakMap<object, Promise<unknown>>();
function database(env: AdoptEnv) {
  const db = env.ADOPT_DB;
  if (!db) return null;
  // Create the table on first use so a fresh database needs no manual setup.
  if (!ready.has(db)) ready.set(db, db.prepare(SCHEMA).run());
  return { db, ready: ready.get(db) as Promise<unknown> };
}

const encoder = new TextEncoder();
async function sha256(value: string) {
  const digest = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

/** Constant-time comparison. Hashing both sides hides the length too. */
async function same(a: string, b: string) {
  const [x, y] = await Promise.all([sha256(a), sha256(b)]);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x.charCodeAt(i) ^ y.charCodeAt(i);
  return diff === 0;
}

/** POST from Ko-fi: form-encoded, with the payload as JSON in the `data` field. */
export async function handleKofi(
  request: Request,
  env: AdoptEnv,
): Promise<Response> {
  const store = database(env);
  if (!store || !env.KOFI_VERIFICATION_TOKEN || !env.DONOR_SALT) {
    // Non-200 makes Ko-fi retry later, so nothing is lost while this is being set up.
    return new Response("Not configured", { status: 503 });
  }

  let payload: Record<string, unknown>;
  try {
    const form = await request.formData();
    payload = JSON.parse(String(form.get("data") ?? ""));
  } catch {
    return new Response("Bad payload", { status: 400 });
  }

  const token = String(payload.verification_token ?? "");
  if (!(await same(token, env.KOFI_VERIFICATION_TOKEN))) {
    return new Response("Forbidden", { status: 403 });
  }

  const txn = String(payload.kofi_transaction_id ?? payload.message_id ?? "");
  const amountPence = Math.round(
    Number.parseFloat(String(payload.amount ?? "0")) * 100,
  );
  const currency = String(payload.currency ?? "");
  // Acknowledge anything genuinely from Ko-fi so it stops retrying; only count GBP payments.
  if (
    !txn ||
    !Number.isFinite(amountPence) ||
    amountPence <= 0 ||
    currency !== CURRENCY
  ) {
    return new Response("Ignored");
  }

  const email = String(payload.email ?? "")
    .trim()
    .toLowerCase();
  const donorKey = await sha256(`${env.DONOR_SALT}:${email || txn}`);
  const time = new Date(String(payload.timestamp ?? "")).getTime();
  const ts = new Date(Number.isFinite(time) ? time : Date.now()).toISOString();

  await store.ready;
  await store.db
    .prepare(
      "INSERT OR IGNORE INTO donations (txn_id, ts, type, donor_key, name, is_public, amount_pence, currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    )
    .bind(
      txn,
      ts,
      String(payload.type ?? "Donation").slice(0, 32),
      donorKey,
      cleanName(String(payload.from_name ?? "")),
      payload.is_public === true ? 1 : 0,
      amountPence,
      currency,
    )
    .run();
  return new Response("OK");
}

/** GET: names, cell counts and totals. Never emails or donor keys. */
export async function handleState(env: AdoptEnv): Promise<Response> {
  const store = database(env);
  let rows: Row[] = [];
  if (store) {
    await store.ready;
    const query = await store.db
      .prepare(
        "SELECT donor_key, name, is_public, amount_pence, ts FROM donations ORDER BY ts",
      )
      .all<Row>();
    rows = query.results;
  }
  const donations: Donation[] = rows.map((row) => ({
    donorKey: row.donor_key,
    name: row.name,
    isPublic: row.is_public === 1,
    amountPence: row.amount_pence,
    ts: row.ts,
  }));
  // `updated` only changes when a donation arrives, so the page can skip re-rendering.
  const latest = rows.at(-1)?.ts ?? "none";
  return Response.json(buildState(donations, `${latest}#${rows.length}`), {
    headers: { "Cache-Control": "public, max-age=30" },
  });
}
