# RouteFlow London (DEV)

RouteFlow London is a modern, responsive transport tracking platform for London buses. This repository provides the project
scaffolding, design tokens, and baseline UI/UX patterns used to build forthcoming feature pages such as real-time tracking,
community interactions, fleet databases, analytics, and admin tooling.

## Tech stack
- [Next.js 14](https://nextjs.org/) with the App Router and React Server Components
- TypeScript with strict settings
- Tailwind CSS design tokens and utility-first styling
- ESLint (core web vitals) for code quality

## Getting started
```bash
npm install
npm run dev
```

Then open `http://localhost:3000` to view the foundation page describing RouteFlow London’s vision and stack.

## Project layout
- `app/` – Next.js routes, including `app/page.tsx` for the landing page and `app/api/health/route.ts` for health checks.
- `components/` – shared, reusable UI building blocks (to be populated as pages are implemented).
- `layouts/` – layout primitives for dashboards, marketing, and admin views.
- `lib/` – shared utilities, data access layers, and configuration.
- `styles/` – future global styling helpers beyond Tailwind utilities.

## Accessibility & performance
- Mobile-first, responsive components with keyboard focus styling enabled by default.
- Semantic HTML and design tokens to ensure consistent contrast and legibility.
- Caching-friendly architecture with an `api/health` endpoint to support uptime monitoring.
