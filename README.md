# Team Bath Racing Electric

Team Bath Racing Electric's official website, built with Astro and Tailwind CSS.

## Getting Started

The local toolchain is pinned for consistency with Node 26 and pnpm 11.

Using Node Version Manager (NVM) is recommended to manage Node versions.

NVM can be installed from [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).

```shell
# Install Node 26
nvm install 26
# Use Node 26
nvm use 26
```

## Development

```shell
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Preview the Cloudflare Worker build locally
pnpm cf:preview

# Lint code
pnpm lint

# Type-check Astro pages
pnpm check

# Validate content data and referenced public assets
pnpm validate:content

# Format code
pnpm format

# Clean up
pnpm clean
```

## Adopt a cell

`/crowdfunding` (adopt a cell) raises money for the cells in the 2027 accumulator. Each £7.50 "Buy a
Cell" donation on Ko-fi adopts one cell, towards a goal of 408, the whole pack. The pack drawn on
the page is the 2026 one; the 2027 design is not public, so keep its CAD and cell details out of
this repository.

- `src/pages/crowdfunding.astro` is the page; `src/lib/adopt-a-cell/` holds its
  logic (`allocate.ts` decides who owns which cell, `stage.ts` is the 3D exploded view).
- Ko-fi has no API for reading donations, only webhooks. `POST /api/adopt-a-cell/kofi` receives
  them and stores each payment in `AdoptStore`, a SQLite-backed Durable Object
  (`src/lib/adopt-a-cell/store.ts`, exported from the Worker entry `src/worker.ts`);
  `GET /api/adopt-a-cell/state` serves names, cell counts and totals to the page. Emails and
  messages are never stored or published, and donations marked private on Ko-fi show as
  "Anonymous". It's a Durable Object, not a D1 database, because publishing the Worker creates
  it with the permission the deploy token already has; the token can't create D1 databases and
  nobody on the team has the Cloudflare login. Never rename the class or drop its migration in
  `wrangler.jsonc`: that deletes the donations.
- Add `?demo` to the page URL to preview it with example supporters.
- `public/adopt-a-cell/pack.glb` and `src/lib/adopt-a-cell/cells.json` are generated from the
  Inventor export of the 2026 pack. The source CAD is not kept in this repository.

To switch it on (no Cloudflare login needed):

1. `KOFI_URL` in `src/config/site.ts` is where the page's buttons go, and `KOFI_CELL_PRODUCT` in
   `wrangler.jsonc` is the product whose orders count: both are the cell product,
   `https://ko-fi.com/s/5915de60c9`, at £7.50 a cell, one cell per unit bought. Donations and
   other shop sales are ignored. Ko-fi sends one webhook for the whole account, so this filter is
   how the page tells the cell product apart.
2. In this repository's GitHub settings (Settings → Secrets and variables → Actions), add
   `KOFI_VERIFICATION_TOKEN` (Ko-fi → Settings → API → Webhooks → Advanced) and `DONOR_SALT` (a
   long random string, e.g. `openssl rand -hex 32`; never change it, it groups each buyer's
   cells). The deploy job's "Set adopt-a-cell secrets" step copies them onto the Worker; re-run
   the latest Deploy (or push to `main`) after adding them.
3. In Ko-fi's webhook settings, set the URL to
   `https://teambathracingelectric.com/api/adopt-a-cell/kofi` and send a test. Until the
   secrets are set it answers 503, so Ko-fi retries later and nothing is lost.

For local testing, put the two secrets in `.dev.vars` and run `pnpm dev`; to test the built
Worker with `wrangler dev --config dist/server/wrangler.json`, put `.dev.vars` in `dist/server/`.

## Cloudflare Deployment

This project is deployed to Cloudflare using the Astro Cloudflare adapter and
Wrangler.

The deployment configuration lives in `wrangler.jsonc`:

- Worker name: `tbre-website`
- Worker entrypoint: `@astrojs/cloudflare/entrypoints/server`
- Static assets directory: `dist`
- Static assets binding: `ASSETS`

Useful commands:

```shell
# Generate Cloudflare environment types
pnpm generate-types

# Build and preview with Wrangler
pnpm cf:preview

# Build and deploy to Cloudflare
pnpm cf:deploy
```

## Editing Content

Most editable site content lives in `src/content`:

- `cars`: one Markdown file per car/year.
- `team`: one Markdown file per displayed team member assignment.
- `sponsors`: one Markdown file per sponsor.
- `recruitment`: one Markdown file per open role.
- `blog`: one Markdown file per blog post.
- `events` and `gallery`: small data entries for countdowns and gallery images.

If you want a desktop editor for this content you can use [Astro Editor](https://astroeditor.danny.is).
It is optional, but it can be a useful way to edit the Markdown content and frontmatter stored in `src/content`.

Operational constants such as the active team season, application form, prospectus, and crowdfunding links live in `src/config/site.ts`.

## License

Source code and configuration files are licensed under the MIT License. See `LICENSE`.

Non-code content and assets are not licensed under MIT and remain all rights reserved unless a separate notice says otherwise. This includes files under `public/` and `src/content/`, plus logos, sponsor marks, photos, brochures, PDFs, 3D models, and written website content. See `NOTICE` for details.
