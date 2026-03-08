# Coding Conventions

## Baseline Tooling

- ESLint uses only `next/core-web-vitals` via `.eslintrc.json`.
- TypeScript is `strict: true` with `moduleResolution: "bundler"`, `jsx: "preserve"`, `noEmit: true`.
- Path alias `@/* -> ./src/*` is used consistently for internal imports.

## File and Folder Organization

- App Router structure under `src/app`, with locale-aware routes in `src/app/[locale]`.
- Components are grouped by role:
  - `src/components/ui` for reusable primitives (`Button`, `Card`, `Section`).
  - `src/components/layout` for layout wrappers (`NavBar`, `Footer`, `Grid`, `Container`).
  - `src/components/sections` for composed page sections (`Hero`, `MenuSection`).
  - `src/components/features` for domain-level widgets (`ReservationForm`, `Gallery`, `StickyCTA`).
- Shared utilities are minimal (`src/lib/utils.ts`, `src/lib/seo.ts`), and i18n config is isolated in `src/i18n*`.

## Naming Conventions

- React component files are PascalCase (`NavBar.tsx`, `ReservationForm.tsx`), and exported component names are PascalCase.
- Most prop/data interfaces use `*Props` or domain nouns (`NavBarProps`, `Dish`, `ReservationData`).
- Constants use camelCase (`featuredDishes`, `defaultImages`), with occasional UPPER_CASE for true constants (`BASE_URL`).
- Route segment names follow URL semantics (e.g. `chi-siamo`, `contatti`) while page components stay PascalCase (`ChiSiamoPage`, `ContattiPage`).

## Code Style Patterns

- Function components are preferred over class components.
- Shared UI components commonly use `forwardRef` and expose typed props that extend intrinsic element attributes.
- Tailwind utility classes are the dominant styling approach; `cn()` (clsx + tailwind-merge) is used for conditional class composition.
- Imports are usually grouped as: framework/library imports first, then internal `@/` imports.
- Most files use single quotes and no semicolons, but there is inconsistency:
  - Some files are semicolon-heavy (`src/app/[locale]/page.tsx`, `src/lib/seo.ts`, `src/components/features/Gallery.tsx`).
  - Others follow semicolon-free style (`src/components/ui/*`, `src/components/layout/*`).

## TypeScript Conventions

- Explicit interfaces are preferred for props and shape objects rather than inline anonymous types.
- Union literals are used for constrained props (`variant`, `size`, `overlay`, locale variants).
- Async server components and metadata helpers are typed explicitly when needed.
- A few intentional type loosenings exist (e.g. `openGraph` cast with `as any` in `src/lib/seo.ts`).

## Internationalization Patterns

- `next-intl` is used in both server and client modes:
  - Server: `getTranslations`, `getMessages`, `setRequestLocale`.
  - Client: `useTranslations`.
- Locale fallback behavior is defensive (`it` default) when locale is missing or invalid.
- Translation keys are hierarchical (`Meta.title`, `Menu.dishes.carbonara.name`).

## Error Handling and Defensive Patterns

- Error handling is lightweight and mostly local:
  - `ReservationForm` uses `try/finally` to always reset loading state.
  - No global error boundary or centralized error utility is present.
- Invalid locale handling avoids hard failures by returning `null` in localized layout.
- Middleware and i18n config apply safe defaults and redirect logic rather than throwing.
- In client-side scripts/utilities, soft-failure behavior is preferred (logging and fallback) over exceptions.

## Practical Conventions to Follow for New Code

- Keep components function-based, typed with explicit `Props` interfaces.
- Prefer `@/` absolute imports over long relative paths.
- Use Tailwind classes plus `cn()` for conditional class assembly.
- Keep i18n strings externalized in `src/messages/*/index.ts` and consume via `next-intl` helpers.
- Match existing file-level style in touched files (including semicolon choice) until formatting is standardized repo-wide.
