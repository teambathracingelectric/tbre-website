// Turns a list of donations into the public "who owns which cell" state.
// Shared by the API routes (src/pages/api/adopt-a-cell) and the page script.

/** Cells the 2027 pack needs, spares included. This is the fundraising goal. */
export const GOAL_CELLS = 346;
/** Cells drawn on the page (cells.json, from the 2026 pack). Adoptions stop being placed here. */
export const TOTAL_CELLS = 408;
const CELL_PRICE_PENCE = 500;
export const CURRENCY = "GBP";

export interface Donation {
  /** Stable private key for merging repeat donors (salted hash, never published). */
  donorKey: string;
  name: string;
  isPublic: boolean;
  amountPence: number;
  /** ISO timestamp */
  ts: string;
}

interface Donor {
  name: string;
  cells: number;
  amountPence: number;
  latest: string;
}

export interface State {
  goal: {
    /** Fundraising goal, in cells. */
    cells: number;
    /** Cells on the map. */
    slots: number;
    pricePence: number;
    currency: string;
  };
  totals: { cells: number; amountPence: number; donors: number };
  /** Sorted by cells, then amount, then earliest. */
  donors: Donor[];
  /** owners[i] = index into donors for the i-th cell in fill order (cells.json order). */
  owners: number[];
  updated: string;
}

const ANON = "Anonymous";

export function cleanName(raw: string): string {
  const s = (raw ?? "")
    .replace(/\p{Cc}/gu, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
  return s || ANON;
}

export function buildState(
  donations: Donation[],
  now = new Date().toISOString(),
): State {
  const sorted = [...donations].sort((a, b) => a.ts.localeCompare(b.ts));
  const byKey = new Map<
    string,
    Donor & { first: string; claimed: number[]; hidden: boolean }
  >();
  let next = 0;
  let amountPence = 0;
  for (const d of sorted) {
    if (d.amountPence <= 0) continue;
    amountPence += d.amountPence;
    let donor = byKey.get(d.donorKey);
    if (!donor) {
      donor = {
        name: ANON,
        cells: 0,
        amountPence: 0,
        latest: d.ts,
        first: d.ts,
        claimed: [],
        hidden: false,
      };
      byKey.set(d.donorKey, donor);
    }
    donor.amountPence += d.amountPence;
    donor.latest = d.ts;
    // Latest name wins, but a donor who was ever private stays private.
    donor.hidden ||= !d.isPublic;
    donor.name = donor.hidden ? ANON : cleanName(d.name);
    // Whole cells are bought from the donor's running total, so 2 x £2.50 still adopts one.
    const want = Math.floor(donor.amountPence / CELL_PRICE_PENCE) - donor.cells;
    for (let i = 0; i < want; i++) {
      donor.cells++;
      if (next < TOTAL_CELLS) donor.claimed.push(next++);
    }
  }
  const list = [...byKey.values()].sort(
    (a, b) =>
      b.cells - a.cells ||
      b.amountPence - a.amountPence ||
      a.first.localeCompare(b.first),
  );
  const owners: number[] = new Array(next).fill(-1);
  list.forEach((d, i) => {
    for (const c of d.claimed) owners[c] = i;
  });
  return {
    goal: {
      cells: GOAL_CELLS,
      slots: TOTAL_CELLS,
      pricePence: CELL_PRICE_PENCE,
      currency: CURRENCY,
    },
    totals: { cells: next, amountPence, donors: list.length },
    donors: list.map(({ name, cells, amountPence, latest }) => ({
      name,
      cells,
      amountPence,
      latest,
    })),
    owners,
    updated: now,
  };
}
