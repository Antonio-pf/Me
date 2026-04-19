# Project Overview

This is a personal portfolio website for **Antônio Pires Felipe**, a Full Stack Developer. It is a single-page application built with Next.js and deployed on Vercel.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 with CSS variables (OKLCH color space)
- **UI Components**: shadcn/ui (New York style, neutral base color)
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Analytics**: Vercel Analytics + Vercel Speed Insights
- **Fonts**: Inter (sans) and Newsreader (serif) via `next/font/google`

## Project Structure

```
app/              # Next.js App Router (layout, page, globals.css)
components/
  portfolio/      # Page sections: header, hero, about, experience, skills, projects, contact, footer
  ui/             # shadcn/ui primitives (do not modify directly)
lib/
  analytics.ts    # Vercel Analytics wrapper and event constants
  utils.ts        # Tailwind cn() utility
hooks/            # Custom React hooks
public/           # Static assets (images, CV PDF, icons)
styles/           # Additional global styles
```

## Key Facts

- The site is a **single page** — all sections are rendered in `app/page.tsx` and navigated via smooth scroll.
- Theme (dark/light) is managed manually via `localStorage` and `document.documentElement.classList`, not via `next-themes`.
- The primary color is a blue accent (`oklch(0.55 0.18 245)` in light, `oklch(0.65 0.22 245)` in dark).
- The CV file is at `public/curriculo.pdf`.
- The owner's GitHub username is `Antonio-pf`.
- The site language is **Brazilian Portuguese (pt-BR)**.
