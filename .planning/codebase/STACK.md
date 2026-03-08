# STACK

## Languages
- TypeScript is the primary language for application code (`.ts`/`.tsx` across `src/`).
- JavaScript is used for tooling/config (`next.config.js`, `postcss.config.js`, `test-playwright.js`).
- CSS is authored in `src/app/globals.css` with Tailwind CSS v4 directives.

## Runtime and Platform
- Node.js runtime is implied by Next.js 14 scripts in `package.json` (`dev`, `build`, `start`, `lint`).
- React 18.3.1 + Next.js 14.2.35 with App Router (`src/app/` structure, dynamic locale segment `src/app/[locale]/`).
- Server/edge request handling via Next middleware in `src/middleware.ts`.

## Frameworks and Libraries
- `next` + `react` + `react-dom` for the web app.
- `next-intl` for i18n, locale routing, and message loading (`src/i18n.ts`, `src/i18n/request.ts`, `src/i18n/routing.ts`, `src/messages/*`).
- Tailwind CSS v4 stack:
  - `tailwindcss` (core engine)
  - `@tailwindcss/postcss` (PostCSS plugin)
  - `autoprefixer`
- UI utility libs:
  - `class-variance-authority` for component variants (`src/components/ui/Button.tsx`)
  - `clsx` + `tailwind-merge` via `cn()` helper (`src/lib/utils.ts`)
- Font loading through `next/font/google` (`src/app/fonts.ts` and `src/app/[locale]/layout.tsx`).

## Dependency Inventory

### Application dependencies (`package.json`)
- `next`, `react`, `react-dom`
- `next-intl`
- `tailwindcss`, `postcss`, `autoprefixer`, `@tailwindcss/postcss` (plugin listed under devDependencies)
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`

### Tooling and quality
- ESLint baseline through `next/core-web-vitals` in `.eslintrc.json`.
- NPM lockfile present (`package-lock.json`).

## Project Configuration

### Next.js (`next.config.js`)
- Wraps config with `next-intl/plugin`.
- `reactStrictMode: true`.

### TypeScript (`tsconfig.json`)
- `strict: true`, `noEmit: true`, `moduleResolution: bundler`, `jsx: preserve`.
- Includes Next TypeScript plugin (`"plugins": [{"name": "next"}]`).
- Path alias `@/* -> ./src/*`.

### PostCSS (`postcss.config.js`)
- Plugins: `@tailwindcss/postcss`, `autoprefixer`.

### Tailwind
- No `tailwind.config.ts/js` file found.
- Tailwind v4 theme tokens and utilities are declared directly in `src/app/globals.css` using `@theme`, `@layer base/components/utilities`.

## Source Structure and Patterns
- `src/app/`: App Router root and locale-scoped pages.
- `src/components/`: feature/layout/ui components.
- `src/lib/`: utility functions and SEO metadata generators.
- `src/messages/`: localization message dictionaries (`it`, `en`).
- `src/middleware.ts`: locale redirect middleware for non-localized paths.

## Build and Scripts
- `npm run dev`: starts Next dev server.
- `npm run build`: production build (`next build`).
- `npm run start`: serve production app.
- `npm run lint`: Next.js lint command.
