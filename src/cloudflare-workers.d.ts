// Types for the Worker runtime pieces the site uses. The generated
// worker-configuration.d.ts (`pnpm generate-types`) isn't committed or built in CI; if that
// changes, delete this file and use the generated types instead.
declare module "cloudflare:workers" {
  export const env: import("@/lib/adopt-a-cell/api").AdoptEnv;

  /** Just what the adopt-a-cell store (src/lib/adopt-a-cell/store.ts) uses. */
  interface SqlCursor {
    readonly rowsWritten: number;
    toArray(): Record<string, unknown>[];
  }
  interface DurableObjectState {
    storage: {
      sql: { exec(query: string, ...bindings: unknown[]): SqlCursor };
    };
  }
  export abstract class DurableObject {
    protected ctx: DurableObjectState;
    protected env: unknown;
    constructor(ctx: DurableObjectState, env: unknown);
  }
}
