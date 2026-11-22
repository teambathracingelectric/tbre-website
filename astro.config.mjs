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
    // old website redirects
    "/about-us": "/",
    "/contact-us": "/",
    "/our-cars": "/cars",
    "/team-members": "/team",
  },
  adapter: cloudflare(),
  security: {
    // Ko-fi posts its webhook (a cross-origin form POST) to /api/adopt-a-cell/kofi, which
    // Astro's origin check would reject. That route authenticates with Ko-fi's verification
    // token instead, and it is the only POST route on the site.
    checkOrigin: false,
  },
});
