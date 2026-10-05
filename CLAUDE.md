# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # Next.js dev server
npm run build   # production build (also type-checks)
npm run lint    # ESLint (flat config: next core-web-vitals + typescript)
```

There is no test suite. Deployed on Vercel.

## Stack

Next.js 16 (App Router) + React 19 + TypeScript (strict), Tailwind CSS v4, GSAP with ScrollTrigger. Path alias `@/*` → `src/*`. `framer-motion` is installed but not used anywhere; animation is done with GSAP.

## Architecture

Two routes: `/` (`src/app/page.tsx`, the single-page portfolio) and `/resume` (`src/app/resume/page.tsx`). Both are client components. Page content (projects, tech stack, timeline) is hardcoded inline in JSX, not loaded from data files.

**Intro animation gating.** `AnimationProvider` (`src/components/context/AnimationProvider.tsx`) holds an in-memory `hasVisited` flag wrapped around the whole app in `layout.tsx`. On first load, `page.tsx` runs the full intro (container blur-in, staggered hero entrance) inside a `gsap.context` and sets `hasVisited` when it completes. On later client-side navigations back to `/` (e.g. from `/resume`), the `hasVisited` branch skips the intro, sets hero elements to their final state with `gsap.set`, and only re-registers the scroll-triggered animations. Hero elements start with `opacity-0` in markup, so any new hero child needs to be handled by both branches. Scroll animations target elements by class (`.tech-section`/`.tech-column`, `.contact-text`, `.contact-btn`), and the scroll-trigger setup is duplicated across the two branches, so changes have to be made in both.

**Custom cursor.** `CustomCursor` (mounted in the layout) is a GSAP-driven follower that replaces the native cursor at `md`+ widths (`globals.css` sets `cursor: none`). It grows on hover over any element with the `clickable` class, so interactive elements (links, buttons) should carry `clickable`.

**Styling.** Design tokens live in `src/app/globals.css` under `@theme inline`: a Material-style dark color palette (`bg-background`, `text-primary`, `text-on-surface-variant`, `text-text-muted`, `border-border-subtle`, …), spacing tokens (`max-w-container-max`, `px-margin-mobile`, `px-gutter`), and custom text utilities (`text-display-lg`, `text-body-md`, `text-label-caps`, …). Fonts come from `next/font` in `layout.tsx` (Lora = display/serif, Inter = body, Geist Mono = labels/code) and are applied via `style={{ fontFamily: "var(--font-display-lg)" }}` and similar. Some code comments are in Serbian.

## Resume

The resume exists in three places that must be kept in sync by hand:
- `src/app/resume/page.tsx`: the `/resume` route, with print styles (`@media print`, `.no-print` hides the nav)
- `resume.html`: standalone copy using the Tailwind browser CDN (not part of the Next build)
- `public/Pavle Josic - Resume.pdf`: the downloadable PDF linked from `/resume`

Project descriptions are also duplicated between the resume and the `ProjectCard`s in `src/app/page.tsx`.

## SEO

Site metadata, OpenGraph/Twitter cards and keywords are in `src/app/layout.tsx`. `src/app/sitemap.ts` lists the routes; add new routes there. The production URL (`https://portfolio-opal-iota-10.vercel.app/`) is hardcoded in `layout.tsx`, `sitemap.ts`, and the resume.
