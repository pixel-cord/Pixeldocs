# Pixeldocs

The documentation site for [Pixelcord](https://github.com/pixel-cord/pixelcord) — installation guides, plugin tutorials, and FAQs.

Built with **Next.js** (App Router) + **Tailwind CSS**. Docs pages are plain Markdown rendered with `react-markdown` + `remark-gfm`.

## Development

```bash
npm install
npm run dev      # http://localhost:2312
```

## Build

```bash
npm run build
npm run start    # serves the production build on :2312
```

## Project layout

| Path                       | What it is                                                       |
| -------------------------- | --------------------------------------------------------------- |
| `content/*.md`             | The documentation pages (one Markdown file per page).           |
| `lib/docs.ts`              | The page registry — slug, title, description, and sidebar order.|
| `app/docs/[slug]/page.tsx` | Reads `content/<slug>.md` and renders it.                       |
| `app/docs/layout.tsx`      | Docs shell (header + sidebar).                                  |
| `app/page.tsx`             | Landing page.                                                   |
| `components/`              | `SiteHeader`, `DocsSidebar`.                                    |

## Adding a page

1. Create `content/my-page.md` (start with a single `# Title`).
2. Add an entry to the `DOCS` array in `lib/docs.ts` (`slug` must match the filename).

The route, sidebar link, and static generation are handled automatically.
