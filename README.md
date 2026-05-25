# Estro Website

Static site for **Estro** — a nomadic innovation hub. Built with [Astro](https://astro.build).

## Run locally

```bash
npm install
npm run dev       # http://localhost:4321
```

## Build for production

```bash
npm run build     # output → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro   # shared HTML shell, <head>, Nav + Footer
├── components/
│   ├── Nav.astro           # fixed header + full-screen overlay menu
│   └── Footer.astro        # site footer + no-JS nav fallback
├── pages/
│   ├── index.astro         # /
│   ├── about.astro         # /about
│   ├── what-we-do.astro    # /what-we-do
│   ├── projects.astro      # /projects
│   └── contact.astro       # /contact
└── styles/
    └── global.css          # design tokens + reset + shared utilities
public/
└── favicon.svg
```

## Add a new page

1. Create `src/pages/your-page.astro`.
2. Import and wrap with `BaseLayout`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---
<BaseLayout title="Your Page" description="…">
  <!-- content here -->
</BaseLayout>
```

3. Add a link to `navLinks` in `src/components/Nav.astro` and the no-JS list in `src/components/Footer.astro`.

## Drop in images

- Place images in `public/` (served as-is) or `src/assets/` (processed by Astro).
- All `<img>` tags should use `loading="lazy"` and `decoding="async"`.
- Wrap images in `<picture>` for future WebP/AVIF support:

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="…" loading="lazy" decoding="async"
       width="1200" height="800" />
</picture>
```

- Hero image: replace the placeholder in `src/pages/index.astro` inside `.hero__image-wrap`.

## Design tokens

All tokens (colours, type scale, spacing, layout) live in `src/styles/global.css` on `:root`.

| Token              | Value       | Purpose                       |
|--------------------|-------------|-------------------------------|
| `--color-bg`       | `#F2F0EA`   | Page background               |
| `--color-text`     | `#111`      | Primary text                  |
| `--color-accent`   | `#D8F26B`   | Menu overlay background       |
| `--color-rule`     | `#111`      | Divider lines                 |
| `--font-display`   | Georgia…    | Display / wordmark type       |
| `--font-body`      | System UI…  | Body text                     |

A comment in `global.css` marks exactly where to add a self-hosted webfont later.

## Add a self-hosted webfont

In `src/styles/global.css`, find the comment:

```css
/* TODO: self-hosted webfont — when ready, add @font-face rules here … */
```

Add your `@font-face` declarations there, then update `--font-display` and/or `--font-body`.

## Deploy to Netlify

1. Push to GitHub.
2. In Netlify: **Add new site → Import an existing project** → connect the repo.
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

Alternatively, drag and drop the `dist/` folder into [app.netlify.com/drop](https://app.netlify.com/drop) for a one-off deploy.

## Content placeholders

All placeholder sections are marked `<!-- TODO: content -->` and use the `.placeholder` CSS class. Run the following to find them all:

```bash
grep -r "TODO: content" src/
```
