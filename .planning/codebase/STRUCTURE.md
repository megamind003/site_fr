# Directory Structure Analysis

## Repository Layout

```text
.
|- src/
|  |- app/
|  |  |- [locale]/
|  |  |  |- chi-siamo/page.tsx
|  |  |  |- contatti/page.tsx
|  |  |  |- eventi/                (directory present, no page.tsx)
|  |  |  |- menu/page.tsx
|  |  |  |- layout.tsx
|  |  |  `- page.tsx
|  |  |- fonts.ts
|  |  |- globals.css
|  |  |- layout.tsx
|  |  `- page.tsx
|  |- components/
|  |  |- features/
|  |  |  |- Cards.tsx
|  |  |  |- Gallery.tsx
|  |  |  |- ReservationForm.tsx
|  |  |  `- StickyCTA.tsx
|  |  |- layout/
|  |  |  |- Footer.tsx
|  |  |  |- Grid.tsx
|  |  |  `- NavBar.tsx
|  |  |- sections/
|  |  |  |- Hero.tsx
|  |  |  `- MenuSection.tsx
|  |  |- shared/                   (currently empty)
|  |  `- ui/
|  |     |- Button.tsx
|  |     |- Card.tsx
|  |     `- Section.tsx
|  |- hooks/                        (currently empty)
|  |- i18n/
|  |  |- request.ts
|  |  `- routing.ts
|  |- lib/
|  |  |- seo.ts
|  |  `- utils.ts
|  |- messages/
|  |  |- en/index.ts
|  |  `- it/index.ts
|  |- styles/                       (currently empty)
|  |- types/                        (currently empty)
|  |- i18n.ts
|  `- middleware.ts
|- .planning/
|  `- codebase/
|- next.config.js
|- package.json
`- tsconfig.json
```

## Key Locations

- `src/app/`
  - App Router route tree and layout chain.
  - Global shell in `src/app/layout.tsx`.
  - Localized route subtree in `src/app/[locale]/`.

- `src/middleware.ts`
  - Global routing guard for locale prefix enforcement.

- `src/components/`
  - `ui/`: low-level primitives.
  - `layout/`: page scaffolding and shared structure.
  - `sections/`: home/landing content sections.
  - `features/`: domain-specific blocks and richer behavior.

- `src/messages/`
  - Translation dictionaries by locale.

- `src/i18n/` + `src/i18n.ts`
  - Routing + request-level localization configuration.

- `src/lib/`
  - Shared helpers (`cn`) and SEO-related metadata/schema logic.

- `src/app/globals.css`
  - Tailwind v4 entrypoint and design tokens (`@theme`).

## Naming Conventions (Observed)

- **Files / Components**
  - React component files use `PascalCase` (e.g., `NavBar.tsx`, `ReservationForm.tsx`).
  - Utility/config files use `camelCase` or lowercase names (e.g., `utils.ts`, `routing.ts`, `middleware.ts`).
  - Route entry files follow Next.js conventions: `layout.tsx`, `page.tsx`.

- **Directories**
  - Route segments use lowercase and kebab-case where needed (`chi-siamo`, `contatti`).
  - Shared code grouping is semantic by role (`components/ui`, `components/layout`, `components/features`).

- **Imports**
  - Internal imports predominantly use alias `@/...` (configured in `tsconfig.json`).
  - Relative imports are mainly used inside i18n/config areas.

- **Type Definitions**
  - Co-located with components via exported interfaces (`*Props`, domain interfaces like `Dish`).
  - Dedicated `src/types` directory exists but is currently unused.

## Structural Notes

- `src/hooks`, `src/types`, `src/styles`, and `src/components/shared` are present as extension points but currently empty.
- `src/app/[locale]/eventi/` exists without a route file; this is a planned or incomplete route area.
- Localization config is split between `src/i18n.ts` and `src/i18n/request.ts`, which should be unified to reduce ambiguity.
