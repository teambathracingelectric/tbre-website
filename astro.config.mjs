import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://teambathracingelectric.com",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: false,
  }),
  redirects: {
    "/linkedin": "https://linkedin.com/company/team-bath-racing-electric",
    "/instagram": "https://instagram.com/teambathracingelectric",
    "/facebook": "https://facebook.com/TeamBathRacingElectric",
    "/twitter": "https://twitter.com/TeamBathRacingE",
    "/x": "https://x.com/TeamBathRacingE",
    "/youtube": "https://youtube.com/@TeamBathRacingElectric",
    "/tiktok": "https://tiktok.com/@teambathracingelectric",
    "/newsletter":
      "https://share-eu1.hsforms.com/1ukabeofkRfmlDApsM4k01A2dfx7i",
    // old website redirects
    "/about-us": "/",
    // "/about-us": "/about",
    "/contact-us": "/",
    // "/contact-us": "/contact",
    "/our-cars": "/cars",
    "/:year": "/cars",
    // "/:year-car": "/cars/:year",
    "/team-members": "/team",
  },
});
