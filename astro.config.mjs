import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { JOIN_URL, SITE_URL, socialRedirects } from "./src/config/site";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    ...socialRedirects,
    "/recruitment": JOIN_URL,
    // Adopt a cell used to live here, before it became the crowdfunding page.
    "/crowdfunding/adopt-a-cell": "/crowdfunding",
    // old website redirects
    "/about-us": "/",
    "/contact-us": "/",
    "/our-cars": "/cars",
    "/team-members": "/team",
  },
  adapter: cloudflare(),
  // No sessions: nothing on the site uses Astro.session. Left on, the Cloudflare adapter asks
  // for a "SESSION" KV namespace as soon as there's a server route (adopt-a-cell's API), and
  // provisioning it on deploy failed (the namespace already existed from an earlier, failed
  // deploy, but was never bound to the Worker).
  session: false,
  security: {
    // Ko-fi posts its webhook (a cross-origin form POST) to /api/adopt-a-cell/kofi, which
    // Astro's origin check would reject. That route authenticates with Ko-fi's verification
    // token instead, and it is the only POST route on the site.
    checkOrigin: false,
  },
});
