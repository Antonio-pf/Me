# Development Workflow

## Commands

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Lint | `npm run lint` |
| Start production server | `npm run start` |

Run `npm run build` after making changes to verify there are no build errors before considering a task done.

## Adding a New Section

1. Create the component in `components/portfolio/<section-name>.tsx` as a named export.
2. Import and render it inside `<main>` in `app/page.tsx`, in the correct visual order.
3. Add a navigation entry in `components/portfolio/header.tsx` (`navItems` array) with the matching `href` anchor and a Lucide icon.
4. Add any new analytics events to `ANALYTICS_EVENTS` in `lib/analytics.ts`.

## Adding shadcn/ui Components

Use the shadcn CLI to add new primitives — do not copy-paste them manually:

```bash
npx shadcn@latest add <component-name>
```

Components are added to `components/ui/` automatically.

## Theme / Colors

- CSS variables are defined in `app/globals.css` under `:root` (light) and `.dark` (dark).
- Colors use the **OKLCH** color space.
- The primary accent hue is `245` (blue). Keep new accent colors within the `235–255` hue range for consistency.
- Do not add `next-themes` or any other theme provider — theme is managed manually via `localStorage` in `components/portfolio/header.tsx`.

## Static Assets

- Place images in `public/` and reference them as `/filename.ext`.
- The CV is at `public/curriculo.pdf` — update this file when the CV changes.
- Favicon variants are at `public/icon.svg`, `public/icon-light-32x32.png`, `public/icon-dark-32x32.png`, and `public/apple-icon.png`.

## Deployment

The project is deployed on **Vercel**. Vercel Analytics and Speed Insights are already wired up in `app/layout.tsx` — no additional configuration needed.
