import assert from "node:assert/strict";
import { test } from "node:test";
import { type AdoptEnv, handleKofi, handleState } from "./api.ts";

// Minimal stand-in for D1: just enough for the statements the handlers use.
function fakeEnv(): Required<AdoptEnv> & { rows: Map<string, unknown[]> } {
  const rows = new Map<string, unknown[]>();
  return {
    rows,
    KOFI_VERIFICATION_TOKEN: "secret-token",
    DONOR_SALT: "salt",
    ADOPT_DB: {
      prepare(sql: string) {
        let args: unknown[] = [];
        const stmt = {
          bind(...v: unknown[]) {
            args = v;
            return stmt;
          },
          run() {
            if (sql.startsWith("INSERT") && !rows.has(String(args[0])))
              rows.set(String(args[0]), args);
            return Promise.resolve();
          },
          all<T>() {
            const results = [...rows.values()]
              .map((r) => ({
                ts: r[1],
                donor_key: r[3],
                name: r[4],
                is_public: r[5],
                amount_pence: r[6],
              }))
              .sort((a, b) => String(a.ts).localeCompare(String(b.ts)));
            return Promise.resolve({ results: results as T[] });
          },
        };
        return stmt;
      },
    },
  };
}
const hook = (over: Record<string, unknown> = {}) => {
  const data = {
    verification_token: "secret-token",
    message_id: "m1",
    timestamp: "2026-11-22T12:00:00Z",
    type: "Donation",
    is_public: true,
    from_name: "Jo Bloggs",
    message: "gl",
    amount: "15.00",
    url: "https://ko-fi.com/x",
    email: "jo@example.com",
    currency: "GBP",
    is_subscription_payment: false,
    is_first_subscription_payment: false,
    kofi_transaction_id: "t1",
    shop_items: null,
    tier_name: null,
    shipping: null,
    ...over,
  };
  return new Request("https://x.test/kofi", {
    method: "POST",
    body: new URLSearchParams({ data: JSON.stringify(data) }),
  });
};
const getState = async (env: AdoptEnv) => await (await handleState(env)).json();

test("a £15 donation adopts three cells", async () => {
  const env = fakeEnv();
  assert.deepEqual((await handleKofi(hook(), env)).status, 200);
  const s = await getState(env);
  assert.deepEqual(s.totals, { cells: 3, amountPence: 1500, donors: 1 });
  assert.deepEqual(s.donors[0].name, "Jo Bloggs");
  assert.deepEqual(JSON.stringify(s).includes("example.com"), false);
});

test("wrong token is rejected and nothing is stored", async () => {
  const env = fakeEnv();
  assert.deepEqual(
    (await handleKofi(hook({ verification_token: "nope" }), env)).status,
    403,
  );
  assert.deepEqual(env.rows.size, 0);
});

test("Ko-fi retries of the same transaction count once", async () => {
  const env = fakeEnv();
  await handleKofi(hook(), env);
  await handleKofi(hook(), env);
  assert.deepEqual((await getState(env)).totals.cells, 3);
});

test("same email merges; private donation hides the name", async () => {
  const env = fakeEnv();
  await handleKofi(hook(), env);
  await handleKofi(
    hook({
      kofi_transaction_id: "t2",
      amount: "5.00",
      is_public: false,
      timestamp: "2026-11-22T13:00:00Z",
    }),
    env,
  );
  const s = await getState(env);
  assert.deepEqual(s.donors.length, 1);
  assert.deepEqual([s.donors[0].name, s.donors[0].cells], ["Anonymous", 4]);
});

test("non-GBP payments are acknowledged but not counted", async () => {
  const env = fakeEnv();
  assert.deepEqual(
    (await handleKofi(hook({ currency: "USD" }), env)).status,
    200,
  );
  assert.deepEqual(env.rows.size, 0);
});

test("without a database or token the webhook asks Ko-fi to retry and state is empty", async () => {
  assert.deepEqual((await handleKofi(hook(), {})).status, 503);
  assert.deepEqual((await getState({})).totals.cells, 0);
});
