# Architecture Analysis

## Pattern Overview

- **Framework pattern:** Next.js 14 App Router (`src/app`) with mixed Server and Client Components.
- **I18n pattern:** Locale-first routing using `next-intl` and URL segment `[locale]` under `src/app/[locale]`.
- **UI pattern:** Component-driven composition with reusable primitives in `src/components/ui`, layout scaffolds in `src/components/layout`, and feature blocks in `src/components/features` and `src/components/sections`.
- **Styling pattern:** Tailwind CSS v4 + design tokens in `src/app/globals.css` (`@theme` custom properties + utility/component layers).
- **Utility pattern:** Shared helpers in `src/lib` (`cn` class merge helper, SEO metadata factory/schema objects).

## Layered Architecture

### 1) Platform and Runtime Layer

- `next.config.js` enables `next-intl` plugin wrapping base Next config.
- `tsconfig.json` defines strict TypeScript and path alias `@/* -> src/*`.
- `src/middleware.ts` enforces locale-prefixed routing for all non-static/non-internal paths.

### 2) Routing and App Shell Layer

- `src/app/layout.tsx`: global root layout, base metadata, global CSS, font variables.
- `src/app/[locale]/layout.tsx`: locale-aware layout, static locale params, message provisioning with `NextIntlClientProvider`.
- `src/app/[locale]/*/page.tsx`: localized route entry points for home, menu, about, contacts.

### 3) View Composition Layer

- Route pages compose larger sections (Hero, MenuSection, ReservationForm, etc.).
- Layout components (`NavBar`, `Footer`, `Grid`, `Container`) provide page scaffolding.
- UI primitives (`Button`, `Card`, `Section`) standardize visual building blocks.

### 4) Content and Configuration Layer

- `src/messages/it/index.ts` and `src/messages/en/index.ts` store translation dictionaries.
- `src/i18n/routing.ts` centralizes locale list and default locale.
- `src/i18n.ts` and `src/i18n/request.ts` both define request config (duplicated concern; only one should be canonical).

### 5) Cross-Cutting Utilities Layer

- `src/lib/utils.ts`: `cn()` merges class names (`clsx` + `tailwind-merge`).
- `src/lib/seo.ts`: metadata builder and JSON-LD schema objects (currently not wired into route pages).

## Entry Points

## Runtime Entry Points

- `src/middleware.ts`
  - First hop for matching requests.
  - Redirects non-localized paths to `/${defaultLocale}${pathname}`.
  - Matcher excludes API, Next internals, Vercel internals, and files with extensions.

- `src/app/layout.tsx`
  - Global HTML/body shell and base metadata.

- `src/app/[locale]/layout.tsx`
  - Locale-aware shell.
  - Calls `setRequestLocale(locale)` and loads locale messages.

## Route Entry Points

- `src/app/page.tsx` (non-localized placeholder route).
- `src/app/[locale]/page.tsx` (localized home page, server-rendered, dynamic metadata via `getTranslations`).
- `src/app/[locale]/menu/page.tsx` (`'use client'` route).
- `src/app/[locale]/chi-siamo/page.tsx` (`'use client'` route).
- `src/app/[locale]/contatti/page.tsx` (`'use client'` route).

## Data Flow

## Request and Routing Flow

1. Request enters `src/middleware.ts`.
2. Middleware checks whether path already contains a supported locale.
3. If missing, middleware redirects to default locale (`it`).
4. Next.js resolves localized route under `src/app/[locale]`.

## Locale and Message Flow

1. Locale route param is read in `src/app/[locale]/layout.tsx`.
2. `setRequestLocale(locale)` sets request context.
3. `getMessages()` loads dictionary for that locale.
4. `NextIntlClientProvider` injects messages to component tree.
5. Server pages use `getTranslations(...)`; client pages use `useTranslations(...)`.

## UI Composition Flow

1. Route page assembles section/layout components.
2. Section/layout components assemble UI primitives.
3. UI primitives consume Tailwind classes and theme tokens from `globals.css`.

## Content Flow

- Translation keys are resolved at render time from locale dictionaries.
- In this codebase, many page-level data objects (dish lists, nav arrays, CTA props) are assembled in-page, not via API or external data services.

## Main Abstractions

## Routing and I18n Abstractions

- `routing` object (`src/i18n/routing.ts`) defines supported locales and default locale.
- Locale wrapper layout (`src/app/[locale]/layout.tsx`) acts as the i18n boundary for all localized routes.
- Middleware acts as locale enforcement gateway.

## UI and Design System Abstractions

- `Section`, `Card`, `Button`, `Grid`, `Container` encapsulate recurring layout/visual patterns.
- `cn()` abstracts class-name composition and conflict resolution.
- Design tokens in CSS (`@theme`) abstract palette/typography/animations from component code.

## Feature Abstractions

- `Hero`, `MenuSection`, `ReservationForm`, `FeatureCard`, `DishCard` represent reusable domain-focused blocks.
- Props interfaces in component files define contract-based reuse.

## Observed Architectural Characteristics

- **Strong points**
  - Clear App Router organization and locale route boundary.
  - Good component stratification (`ui` vs `layout` vs `features`/`sections`).
  - Centralized theme tokens and consistent utility usage (`cn`).

- **Inconsistencies / technical debt to track**
  - Duplicate i18n request config files (`src/i18n.ts`, `src/i18n/request.ts`).
  - Some client pages use hard-coded non-locale-prefixed links (e.g., `/menu`, `/contatti`), while routing model is locale-prefixed.
  - `src/app/[locale]/layout.tsx` introduces a second `<html>/<body>` shell despite root layout already defining them.
  - `src/lib/seo.ts` provides SEO abstraction but is not yet integrated into route metadata generation.
  - `src/app/[locale]/eventi/` directory exists without a page entry file.
