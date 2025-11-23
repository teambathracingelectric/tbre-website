// @ts-check

/** @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions} */
const prettierConfig = {
  trailingComma: "all",
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  bracketSpacing: true,
  printWidth: 80,
  endOfLine: "lf",
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
    require.resolve("prettier-plugin-organize-imports"),
  ],
  tailwindStylesheet: "./src/styles/globals.css",
};

module.exports = prettierConfig;
