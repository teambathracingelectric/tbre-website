# Contributing

Thanks for helping improve the Team Bath Racing Electric website.

## Local Setup

Use Node 26 and pnpm 11, then run:

```shell
pnpm install
pnpm dev
```

Before opening a pull request, run:

```shell
pnpm lint:ci
pnpm validate:content
pnpm typecheck
pnpm build
```

## Cloudflare

Deployments use Cloudflare, the Astro Cloudflare adapter, and Wrangler. The
deployment configuration is in `wrangler.jsonc`.

Use `pnpm cf:preview` to build and run the Cloudflare Worker locally with
Wrangler. Use `pnpm cf:deploy` only when you intend to publish the site to
Cloudflare and have the required account access.

## Content Changes

Most editable content lives in `src/content`. Keep frontmatter consistent with
nearby entries and run `pnpm validate:content` before submitting changes.

Only add or update team member details, photos, sponsor information, and other
public-facing content when you have permission for it to be published.

## Asset Policy

The repository is public, but non-code content and assets are not open source.
See `NOTICE` for the license boundary. Do not add private source files,
credentials, personal contact details, unpublished sponsor materials, or assets
that the team does not have permission to publish.

## Pull Requests

Use pull requests for changes to `main`. Keep changes focused, include a short
summary, and mention the local checks you ran.
