# TBRe Website

Team Bath Racing Electric's official website. It is a static Astro site using
Tailwind CSS and pnpm.

## Toolchain

- Use Node `26.x` and pnpm `11.x`.
- Install dependencies with `pnpm install`.
- Deployment uses Cloudflare through `@astrojs/cloudflare` and Wrangler.

## Common Commands

- `pnpm dev` - start the Astro development server.
- `pnpm build` - build the production site to `dist/`.
- `pnpm preview` - preview the production build.
- `pnpm cf:preview` - build and preview the Cloudflare Worker locally.
- `pnpm cf:deploy` - build and deploy to Cloudflare.
- `pnpm generate-types` - generate Cloudflare environment types.
- `pnpm lint` - run Biome checks.
- `pnpm check` - type-check Astro pages.
- `pnpm typecheck` - run Astro sync and TypeScript build checks.
- `pnpm validate:content` - validate content data and referenced public assets.
- `pnpm format` - format files with Biome.

Run the smallest relevant checks for the change. For content-only edits, prefer
`pnpm validate:content` and `pnpm check`; for code changes, include `pnpm lint`
and `pnpm build` when practical.

## Project Map

- `src/pages/` contains Astro routes.
- `src/components/` contains shared Astro components.
- `src/layouts/BaseLayout.astro` is the main page shell.
- `src/styles/globals.css` contains global styles.
- `src/config/site.ts` holds operational constants such as active season,
  application form, prospectus, and crowdfunding links.
- `src/content/` contains editable site content:
  - `cars`: one Markdown file per car/year.
  - `team`: one Markdown file per displayed team member assignment.
  - `sponsors`: one Markdown file per sponsor.
  - `recruitment`: one Markdown file per open role.
  - `blog`: one Markdown file per blog post.
  - `events` and `gallery`: data entries for countdowns and gallery images.

## Cloudflare Deployment

- `astro.config.mjs` uses the `@astrojs/cloudflare` adapter.
- `wrangler.jsonc` is the source of truth for Cloudflare deployment settings.
- The Worker entrypoint is `@astrojs/cloudflare/entrypoints/server`.
- Static assets are served from `dist/` through the `ASSETS` binding.
- Do not add deployment configuration for another platform unless the deployment
  target changes again.

## Content And Assets

Code and configuration are MIT licensed. Non-code content and assets are not
covered by MIT unless a separate notice says otherwise. Treat files under
`public/` and `src/content/`, including logos, sponsor marks, photos, brochures,
PDFs, 3D models, and written website content, as all rights reserved.
