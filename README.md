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
