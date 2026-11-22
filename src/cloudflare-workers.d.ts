// Types for the Worker bindings the site reads at runtime. The generated
// worker-configuration.d.ts (`pnpm generate-types`) isn't committed or built in CI; if that
// changes, delete this file and use the generated types instead.
declare module "cloudflare:workers" {
  export const env: import("@/lib/adopt-a-cell/api").AdoptEnv;
}
