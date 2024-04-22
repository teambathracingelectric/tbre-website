import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // CLASSIC
        "tbre-blue": "#105BAB",
        "tbre-yellow": "#FFC423",
        // COOL
        // "tbre-blue": "#1F2B46",
        // "tbre-yellow": "#F0B323",
      },
    },
  },
  plugins: [],
} satisfies Config;
