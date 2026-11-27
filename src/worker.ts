// The site's Worker entry (wrangler.jsonc "main"): every request goes to Astro, exactly as the
// adapter's default entry does, and the adopt-a-cell donations store is exported alongside so
// Cloudflare can run it as a Durable Object (src/lib/adopt-a-cell/store.ts).
import { handle } from "@astrojs/cloudflare/handler";

export { AdoptStore } from "./lib/adopt-a-cell/store";

export default { fetch: handle };
