import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE_URL, socialRedirects } from "./src/config/site";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
  redirects: {
    ...socialRedirects,
    // old website redirects
    "/about-us": "/",
    "/contact-us": "/",
    "/our-cars": "/cars",
    "/team-members": "/team",
  },
});
