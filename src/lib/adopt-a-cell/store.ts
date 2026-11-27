// Where adopt-a-cell donations are kept: one SQLite-backed Durable Object.
//
// Not a D1 database: the website's deploy token has no D1 permission and nobody on the team
// has the Cloudflare login to add it, whereas a Durable Object is created by publishing the
// Worker itself (the "migrations" in wrangler.jsonc), with the permission the deploy already
// has. Same data and the same SQLite engine D1 uses underneath; it just lives inside the
// site's own Worker. One instance ("donations") holds every payment, so writes are ordered
// and a Ko-fi retry of the same payment is a no-op (txn_id is the primary key).
import { DurableObject } from "cloudflare:workers";
import type { AdoptStoreApi, DonationRow, Row } from "./api";

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

export class AdoptStore extends DurableObject implements AdoptStoreApi {
  constructor(
    ctx: ConstructorParameters<typeof DurableObject>[0],
    env: unknown,
  ) {
    super(ctx, env);
    // Runs before any call is delivered, so a fresh store needs no setup.
    ctx.storage.sql.exec(SCHEMA);
  }

  async add(row: DonationRow) {
    const cursor = this.ctx.storage.sql.exec(
      "INSERT OR IGNORE INTO donations (txn_id, ts, type, donor_key, name, is_public, amount_pence, currency) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      row.txn_id,
      row.ts,
      row.type,
      row.donor_key,
      row.name,
      row.is_public,
      row.amount_pence,
      row.currency,
    );
    return cursor.rowsWritten > 0;
  }

  async rows() {
    return this.ctx.storage.sql
      .exec(
        "SELECT donor_key, name, is_public, amount_pence, ts FROM donations ORDER BY ts",
      )
      .toArray() as Row[];
  }
}
