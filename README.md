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

`/crowdfunding/adopt-a-cell` raises money for the cells in the 2027 accumulator. Each £7.50 "Buy a
Cell" donation on Ko-fi adopts one cell, towards a goal of 408, the whole pack. The pack drawn on
the page is the 2026 one; the 2027 design is not public, so keep its CAD and cell details out of
this repository.

- `src/pages/crowdfunding/adopt-a-cell.astro` is the page; `src/lib/adopt-a-cell/` holds its
  logic (`allocate.ts` decides who owns which cell, `stage.ts` is the 3D exploded view).
- Ko-fi has no API for reading donations, only webhooks. `POST /api/adopt-a-cell/kofi` receives
  them and stores each payment in the `ADOPT_DB` D1 database; `GET /api/adopt-a-cell/state` serves
  names, cell counts and totals to the page. Emails and messages are never stored or published,
  and donations marked private on Ko-fi show as "Anonymous".
- Add `?demo` to the page URL to preview it with example supporters.
- `public/adopt-a-cell/pack.glb` and `src/lib/adopt-a-cell/cells.json` are generated from the
  Inventor export of the 2026 pack. The source CAD is not kept in this repository.

To switch it on after deploying:

1. `KOFI_URL` in `src/config/site.ts` is where the page's buttons go: the cell product
   (`https://ko-fi.com/s/5915de60c9`, £7.50 a cell). Publish the product on Ko-fi to launch.
2. `pnpm exec wrangler secret put KOFI_VERIFICATION_TOKEN` (from Ko-fi's webhook settings, under
   Advanced) and `pnpm exec wrangler secret put DONOR_SALT` (any long random string).
3. If cells are sold as a Ko-fi shop product, `pnpm exec wrangler secret put KOFI_CELL_PRODUCT`
   with the product's link (`https://ko-fi.com/s/<code>`) or just its code. Only orders for that
   product then count, at one cell per unit bought, and donations and other shop sales are
   ignored. Without it, every GBP payment counts at £7.50 a cell. Ko-fi sends one webhook for the
   whole account, so this filter is how the page tells the cell product apart.
4. In Ko-fi's webhook settings, set the URL to
   `https://teambathracingelectric.com/api/adopt-a-cell/kofi` and send a test.

For local testing, put the two secrets in `.dev.vars` and run `pnpm dev`.

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
