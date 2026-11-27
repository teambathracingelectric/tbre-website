// Ko-fi webhook receiver and public state for the adopt-a-cell page.
// Kept free of Cloudflare imports so it can be unit tested with plain Node.
import {
  buildState,
  CELL_PRICE_PENCE,
  CURRENCY,
  cleanName,
  type Donation,
} from "./allocate.ts";

/** One Ko-fi payment as stored. No emails or messages are kept. */
export type DonationRow = {
  txn_id: string;
  ts: string;
  type: string;
  donor_key: string;
  name: string;
  is_public: number;
  amount_pence: number;
  currency: string;
};

/** What the page reads back: no transaction ids, types or currencies. */
export type Row = Pick<
  DonationRow,
  "donor_key" | "name" | "is_public" | "amount_pence" | "ts"
>;

/** The donations store (the AdoptStore Durable Object in store.ts), as the handlers use it. */
export type AdoptStoreApi = {
  /** Adds a payment; a repeat of one already stored (same txn_id) is ignored. */
  add(row: DonationRow): Promise<unknown>;
  /** Every payment, oldest first. */
  rows(): Promise<Row[]>;
};

/** The parts of the Worker environment this feature uses. */
export type AdoptEnv = {
  /** Durable Object namespace for AdoptStore (wrangler.jsonc). One instance holds every donation. */
  ADOPT_STORE?: {
    idFromName(name: string): unknown;
    get(id: unknown): AdoptStoreApi;
  };
  KOFI_VERIFICATION_TOKEN?: string;
  DONOR_SALT?: string;
  /**
   * The Ko-fi shop product that sells cells: its link code (the part after ko-fi.com/s/) or the
   * whole link. When set, only shop orders for this product count, at one cell per unit bought.
   * When unset, every GBP payment counts by amount.
   */
  KOFI_CELL_PRODUCT?: string;
};

/** Accepts "abc123", "ko-fi.com/s/abc123" or "https://ko-fi.com/s/abc123/". */
export function productCode(value: string) {
  return (
    value
      .trim()
      .replace(/[?#].*$/, "")
      .replace(/\/+$/, "")
      .split("/")
      .at(-1)
      ?.toLowerCase() ?? ""
  );
}

/** Units of the cell product in a Shop Order payload; 0 if it isn't in the order. */
function cellsBought(payload: Record<string, unknown>, code: string) {
  if (payload.type !== "Shop Order" || !Array.isArray(payload.shop_items)) {
    return 0;
  }
  let units = 0;
  for (const item of payload.shop_items as Record<string, unknown>[]) {
    if (productCode(String(item?.direct_link_code ?? "")) !== code) continue;
    const quantity = Number(item.quantity ?? 1);
    units += Number.isInteger(quantity) && quantity > 0 ? quantity : 1;
  }
  return units;
}

/**
 * The one AdoptStore instance that holds every donation. A Durable Object rather than a D1
 * database because publishing the Worker creates it, with no extra Cloudflare permissions
 * (the deploy token can't create D1 databases).
 */
function database(env: AdoptEnv) {
  const ns = env.ADOPT_STORE;
  return ns ? ns.get(ns.idFromName("donations")) : null;
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
  let amountPence = Math.round(
    Number.parseFloat(String(payload.amount ?? "0")) * 100,
  );
  const product = productCode(env.KOFI_CELL_PRODUCT ?? "");
  if (product) {
    // Only the cell product counts, priced per unit so other items in the same order don't.
    amountPence = cellsBought(payload, product) * CELL_PRICE_PENCE;
  }
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

  await store.add({
    txn_id: txn,
    ts,
    type: String(payload.type ?? "Donation").slice(0, 32),
    donor_key: donorKey,
    name: cleanName(String(payload.from_name ?? "")),
    is_public: payload.is_public === true ? 1 : 0,
    amount_pence: amountPence,
    currency,
  });
  return new Response("OK");
}

/** GET: names, cell counts and totals. Never emails or donor keys. */
export async function handleState(env: AdoptEnv): Promise<Response> {
  const store = database(env);
  const rows: Row[] = store ? await store.rows() : [];
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
