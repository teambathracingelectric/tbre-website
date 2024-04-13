import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // OLD
        // "tbre-yellow": "#D7B537",
        // "tbre-blue": "#005CAA",
        // NEW
        "tbre-yellow": "#FEB91D",
        "tbre-blue": "#094D9B",
      },
    },
  },
  plugins: [],
} satisfies Config;
