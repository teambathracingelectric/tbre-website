# Team Bath Racing Electric

Team Bath Racing Electric's official website, built with Astro and Tailwind CSS.

## Getting Started

The local toolchain is pinned for consistency with Node 24 and pnpm 11.

Using Node Version Manager (NVM) is recommended to manage Node versions.

NVM can be installed from [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).

```shell
# Install Node 24
nvm install 24
# Use Node 24
nvm use 24
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

## Vercel Deployment

This project is a static Astro site.
Per [Astro's Vercel documentation](https://docs.astro.build/en/guides/integrations-guide/vercel/), static Astro sites do not need the `@astrojs/vercel` adapter unless adding on-demand rendering, middleware, sessions, or other Vercel runtime features.

For this repository, deploy from the repository root with these settings:

- Root Directory: `/`
- Framework Preset: `Astro`
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Output Directory: `dist`

The `vercel.json` file is configured to match these settings.

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

Non-code content and assets are not licensed under MIT and remain all rights reserved unless a separate notice says otherwise. This includes files under `public/`, `resources/`, and `src/content/`, plus logos, sponsor marks, photos, brochures, PDFs, 3D models, and written website content. See `NOTICE` for details.
