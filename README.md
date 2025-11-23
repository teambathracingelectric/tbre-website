# Team Bath Racing Electric - Website

The official website for Team Bath Racing Electric.

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```shell
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory.
Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents.
Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema.
See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm lint`            | Lint code                                        |
| `pnpm format`          | Format code                                      |
| `pnpm clean`           | Clean up                                         |

## Get Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v22) (recommended to use [nvm](https://github.com/nvm-sh/nvm))
- [pnpm](https://pnpm.io/installation)

### Set Node.js version

```shell
nvm install 22 # only needed if you don't have Node.js 22 installed
nvm use 22
```

### Installation

```shell
pnpm install
```

### Development

```shell
pnpm dev
```

### Production

```shell
pnpm build
pnpm preview
```

## Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
