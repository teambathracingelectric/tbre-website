import assert from "node:assert/strict";
import { test } from "node:test";
import { buildState, TOTAL_CELLS } from "./allocate.ts";

const d = (
  donorKey: string,
  amountPence: number,
  ts: string,
  name = donorKey,
  isPublic = true,
) => ({ donorKey, name, isPublic, amountPence, ts });

test("cells are handed out in donation order, £5 each", () => {
  const s = buildState([d("b", 1000, "2026-01-02"), d("a", 500, "2026-01-01")]);
  assert.deepEqual(s.totals, { cells: 3, amountPence: 1500, donors: 2 });
  assert.deepEqual(
    s.donors.map((x) => [x.name, x.cells]),
    [
      ["b", 2],
      ["a", 1],
    ],
  );
  assert.deepEqual(s.owners, [1, 0, 0]); // a donated first so owns cell 0
});

test("repeat donors merge and part-payments accumulate", () => {
  const s = buildState([
    d("a", 250, "2026-01-01"),
    d("a", 250, "2026-01-02"),
    d("a", 499, "2026-01-03"),
  ]);
  assert.deepEqual(s.donors[0].cells, 1);
  assert.deepEqual(s.donors[0].amountPence, 999);
});

test("private donations are anonymous and stay anonymous", () => {
  const s = buildState([
    d("a", 500, "2026-01-01", "Jo", false),
    d("a", 500, "2026-01-02", "Jo", true),
  ]);
  assert.deepEqual(s.donors[0].name, "Anonymous");
  assert.deepEqual(s.donors[0].cells, 2);
});

test("never allocates more cells than exist", () => {
  const s = buildState([d("whale", 500 * (TOTAL_CELLS + 10), "2026-01-01")]);
  assert.deepEqual(s.owners.length, TOTAL_CELLS);
  assert.deepEqual(s.totals.cells, TOTAL_CELLS);
  assert.deepEqual(s.donors[0].cells, TOTAL_CELLS + 10);
});

test("names are trimmed and control characters removed", () => {
  const s = buildState([
    d("a", 500, "2026-01-01", `  Jo\n\tBloggs  ${"x".repeat(80)}`),
  ]);
  assert.deepEqual(s.donors[0].name.length, 40);
  assert.deepEqual(s.donors[0].name.startsWith("Jo Bloggs"), true);
});
