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
    "/about-us": "/",
    "/contact-us": "/",
    "/our-cars": "/cars",
    "/team-members": "/team",
    "/2016-car": "/cars/2016",
    "/2017-car": "/cars/2017",
    "/2018-car": "/cars/2018",
    "/2019-car": "/cars/2019",
    "/2020-car": "/cars/2020",
    "/2021-car": "/cars/2021",
    "/2022-car": "/cars/2022",
    "/2023-car": "/cars/2023",
    "/2024-car": "/cars/2024",
    "/2025-car": "/cars/2025",
    "/2026-car": "/cars/2026",
  },
});
