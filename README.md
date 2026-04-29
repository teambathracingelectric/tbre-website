# tbre-website

Team Bath Racing Electric website, built as a static Astro site.

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

## Vercel deployment

This project is a static Astro site. Per Astro's Vercel documentation, static Astro sites do not need the `@astrojs/vercel` adapter unless you add on-demand rendering, middleware, sessions, or other Vercel runtime features later.

For this repository, deploy from the repository root with these settings:

- Root Directory: `/`
- Framework Preset: `Astro`
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Output Directory: `dist`

The local toolchain is pinned for deployment consistency with Node 24 and pnpm 10.33.0.

## Editing Content

Most editable site content lives in `src/content`:

- `cars`: one Markdown file per car/year.
- `team`: one Markdown file per displayed team member assignment.
- `sponsors`: one Markdown file per sponsor.
- `recruitment`: one Markdown file per open role.
- `blog`: one Markdown file per blog post.
- `events` and `gallery`: small data entries for countdowns and gallery images.

If you want a browser-based editor for this content, you can also use Astro Editor: https://astroeditor.danny.is/. It is optional, but it can be a useful way to edit the Markdown content and frontmatter stored in `src/content`.

Operational constants such as the active team season, application form, prospectus, and crowdfunding links live in `src/config/site.ts`.

Content is maintained directly in Markdown/frontmatter now. The old import and migration scripts have been removed.
