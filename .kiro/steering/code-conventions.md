# Code Conventions

## TypeScript

- All files use `.tsx` for React components and `.ts` for utilities/hooks.
- Prefer explicit types for function parameters and return values.
- Avoid `any` — use `unknown` or proper types instead.
- `next.config.mjs` has `ignoreBuildErrors: true` for TypeScript, but this is not a license to write sloppy types.

## React & Next.js

- Use `"use client"` at the top of any component that uses browser APIs, state, or effects.
- Server Components are the default in the App Router — only add `"use client"` when necessary.
- Do not instantiate fonts inside individual components (e.g., `hero.tsx` duplicates font setup from `layout.tsx` — avoid this pattern). Fonts are configured once in `app/layout.tsx` via CSS variables (`--font-inter`, `--font-newsreader`).
- Use `next/image` for all images with `fill`, `priority`, and `onError` fallback where appropriate.
- Path alias `@/` maps to the project root (e.g., `@/components/ui/button`).

## Styling

- Use **Tailwind CSS utility classes** exclusively. Do not write custom CSS unless adding CSS variables or global base styles in `app/globals.css`.
- Color tokens come from CSS variables — always use semantic tokens (`bg-background`, `text-foreground`, `text-primary`, `border-border`, etc.) rather than hardcoded colors.
- Dark mode is toggled via the `.dark` class on `<html>`. Use `dark:` variants in Tailwind when needed.
- Responsive design uses Tailwind breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).
- Animations use Framer Motion (`motion.div`, `motion.button`, etc.) with `initial`, `animate`, and `transition` props.

## Component Structure

- Portfolio section components live in `components/portfolio/` and are named exports (e.g., `export function Hero()`).
- shadcn/ui primitives live in `components/ui/` — do not modify them directly; extend via wrapper components if needed.
- Keep components focused on a single section or concern. Do not merge multiple sections into one component.

## Analytics

- All user interactions that should be tracked must use `trackEvent` from `@/lib/analytics`.
- Add new event name constants to `ANALYTICS_EVENTS` in `lib/analytics.ts` before using them.
- Event names follow `snake_case` (e.g., `clicked_github`, `clicked_nav_about`).

## Imports

- Use absolute imports with the `@/` alias — avoid relative paths like `../../`.
- Group imports: external libraries first, then internal `@/` imports.
