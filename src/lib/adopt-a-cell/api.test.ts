import assert from "node:assert/strict";
import { test } from "node:test";
import { type AdoptEnv, handleKofi, handleState, productCode } from "./api.ts";

// Minimal stand-in for D1: just enough for the statements the handlers use.
function fakeEnv(): Required<AdoptEnv> & { rows: Map<string, unknown[]> } {
  const rows = new Map<string, unknown[]>();
  return {
    rows,
    KOFI_VERIFICATION_TOKEN: "secret-token",
    DONOR_SALT: "salt",
    KOFI_CELL_PRODUCT: "",
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
    amount: "22.50",
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

test("a £22.50 donation adopts three cells", async () => {
  const env = fakeEnv();
  assert.deepEqual((await handleKofi(hook(), env)).status, 200);
  const s = await getState(env);
  assert.deepEqual(s.totals, { cells: 3, amountPence: 2250, donors: 1 });
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
      amount: "7.50",
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

const order = (items: unknown, over: Record<string, unknown> = {}) =>
  hook({ type: "Shop Order", amount: "30.00", shop_items: items, ...over });

test("with a cell product set, only that product counts, per unit", async () => {
  const env = { ...fakeEnv(), KOFI_CELL_PRODUCT: "https://ko-fi.com/s/AbC123" };
  await handleKofi(
    order([
      { direct_link_code: "abc123", variation_name: "", quantity: 2 },
      { direct_link_code: "sticker9", variation_name: "", quantity: 5 },
    ]),
    env,
  );
  const s = await getState(env);
  assert.deepEqual(s.totals, { cells: 2, amountPence: 1500, donors: 1 });
});

test("with a cell product set, donations and other products are ignored", async () => {
  const env = { ...fakeEnv(), KOFI_CELL_PRODUCT: "abc123" };
  assert.deepEqual(await (await handleKofi(hook(), env)).text(), "Ignored");
  await handleKofi(
    order([{ direct_link_code: "sticker9", quantity: 1 }], {
      kofi_transaction_id: "t2",
    }),
    env,
  );
  assert.deepEqual(env.rows.size, 0);
});

test("product codes are read from a code or a full link", () => {
  assert.deepEqual(productCode("abc123"), "abc123");
  assert.deepEqual(productCode("ko-fi.com/s/ABC123/"), "abc123");
  assert.deepEqual(productCode("https://ko-fi.com/s/abc123?ref=x"), "abc123");
});
