# CONCERNS - Technical Debt, Known Issues, and Fragile Areas

## Scope and Method

- Reviewed `STRUTTURA.md` (including "Prossimi Step") and all files under `src/`.
- Searched for inline TODO/FIXME markers in project code (`src/`): none found.
- Ran production build (`npm run build`) to surface runtime/i18n/type/lint concerns.

## Confirmed Build and Runtime Issues

### 1) Build is not healthy due to missing i18n keys (High)

- `npm run build` reports repeated `MISSING_MESSAGE` errors during static generation.
- Pages reference keys that do not exist in message catalogs:
  - `src/app/[locale]/page.tsx:21`
  - `src/app/[locale]/menu/page.tsx:20`
  - `src/app/[locale]/chi-siamo/page.tsx:20`
  - `src/app/[locale]/contatti/page.tsx:26`
- Current dictionaries are missing those nested keys:
  - `src/messages/it/index.ts:53`
  - `src/messages/en/index.ts:53`

Impact:
- Locale pages fail at render/build time with untranslated keys.
- Production deployment risk is high until translation key contracts are aligned.

### 2) ESLint integration is broken in build pipeline (Medium)

- Build output reports: `ESLint must be installed in order to run during builds`.
- Config exists (`.eslintrc.json:1`) but `eslint` package is missing from `devDependencies` (`package.json:36`).

Impact:
- Lint gate is effectively absent in CI/build flow.
- Quality regressions can ship undetected.

## Architecture / Routing Fragility

### 3) Conflicting locale strategy (`localePrefix: 'never'` vs forced prefix redirects) (High)

- Routing config uses no locale prefix:
  - `src/i18n/routing.ts:9`
- Middleware force-redirects to prefixed URLs (`/it/...`, `/en/...`):
  - `src/middleware.ts:14`
- Internal links are mostly unprefixed (`/menu`, `/chi-siamo`, `/contatti`):
  - `src/app/[locale]/menu/page.tsx:11`
  - `src/app/[locale]/chi-siamo/page.tsx:12`
  - `src/app/[locale]/contatti/page.tsx:13`

Impact:
- High chance of inconsistent navigation, duplicate URL structures, and hard-to-debug i18n behavior.

### 4) Duplicate i18n config sources (Medium)

- Two separate request config files exist with different loading strategies:
  - `src/i18n.ts:1`
  - `src/i18n/request.ts:1`

Impact:
- Configuration drift risk; hard to know source of truth.
- Future edits are likely to fix one path while breaking the other.

### 5) Potential invalid App Router layout structure (Medium)

- Root layout defines `<html>/<body>`:
  - `src/app/layout.tsx:33`
- Localized nested layout also defines `<html>/<body>`:
  - `src/app/[locale]/layout.tsx:29`

Impact:
- Nested document shells are a fragile pattern in App Router and may cause hydration/metadata inconsistencies.

## Incomplete / Placeholder Implementations

### 6) Mobile menu UI is present but non-functional (Medium)

- Hamburger button renders with no state, no menu panel, no handlers:
  - `src/components/layout/NavBar.tsx:63`

Impact:
- Mobile navigation degrades to broken affordance.

### 7) Category filter buttons are visual-only (Medium)

- Category buttons render but do not filter dishes:
  - `src/components/sections/MenuSection.tsx:35`

Impact:
- UX mismatch (interactive affordance with no behavior).

### 8) Gallery component is client-stateful but not marked client (High if used)

- Uses `useState` but lacks `'use client'` directive:
  - `src/components/features/Gallery.tsx:1`

Impact:
- If mounted from a server component, this will fail/throw in Next.js RSC boundaries.

### 9) Placeholder social links and fallback content still present (Low)

- Footer social links use `'#'` placeholders:
  - `src/app/[locale]/page.tsx:105`

Impact:
- Production polish and trust issue; dead links hurt UX and SEO quality signals.

## Security Concerns

### 10) Reservation flow has no server-side validation boundary yet (High)

- Form collects personal data but no API route exists:
  - `src/components/features/ReservationForm.tsx:22`
  - no `src/app/**/route.ts` files found
- Current submit path depends on optional callback and has no persistence, anti-spam, auth, CSRF, rate limit, or sanitization layer.

Impact:
- Security posture is incomplete for production intake of user data.
- When backend is added, risk of unsafe default implementation is elevated without explicit validation contract.

### 11) Data typing bug in form updates (`guests` can become string) (Medium)

- `ReservationData.guests` is typed as `number`:
  - `src/components/features/ReservationForm.tsx:18`
- Generic `handleChange` writes raw string values to all fields:
  - `src/components/features/ReservationForm.tsx:47`

Impact:
- Runtime type drift; potential downstream validation and serialization bugs.

## Performance and SEO Concerns

### 12) Repeated usage of `<img>` instead of `next/image` (Medium)

- Examples:
  - `src/components/layout/NavBar.tsx:31`
  - `src/components/features/Cards.tsx:34`

Impact:
- Loses automatic optimization, responsive sizing, and lazy-loading benefits.
- Increases LCP/CLS risk on image-heavy pages.

### 13) SEO utility appears partially unused and inconsistent with routing (Medium)

- `generateSEO` and schema exports exist but are not wired across pages:
  - `src/lib/seo.ts:14`
- Alternate language URLs assume prefixed paths (`/it`, `/en`) regardless of `localePrefix: 'never'`:
  - `src/lib/seo.ts:48`
  - `src/i18n/routing.ts:9`

Impact:
- Canonical/alternate metadata may be inconsistent or stale.
- SEO intent exists but integration is incomplete.

## Styling / Design System Debt

### 14) Color token naming inconsistency likely breaks theme classes (High)

- Theme defines `terraccotta` (double `cc`):
  - `src/app/globals.css:9`
- Components use `brand-terracotta` / `terracotta` naming:
  - `src/components/ui/Button.tsx:11`
  - `src/components/layout/NavBar.tsx:34`
  - `src/components/features/StickyCTA.tsx:55`

Impact:
- High probability of missing classes and visual regressions.
- Design system tokens are not consistently consumable.

## STRUTTURA.md Gap Alignment (Known Planned Debt)

From `STRUTTURA.md:213`, several planned gaps remain and are material:

- Wave 3: backend prenotazioni, SEO meta tags completi, mobile sticky CTA, gallery, reviews/events.
- Wave 4: image optimization, real content load, maps, cross-browser testing.
- Wave 5: deploy + lighthouse + SEO audit + operational documentation.

These planned gaps align with current observed debt in security, performance, and production readiness.

## Fragility Hotspots to Prioritize First

1. i18n key contract mismatch blocking stable builds.
2. Routing strategy mismatch (`localePrefix` vs middleware redirects).
3. Design token inconsistency (`terraccotta` vs `terracotta/brand-*`).
4. Reservation form lacking backend validation boundary and anti-abuse controls.
5. Duplicate i18n config paths (`src/i18n.ts` and `src/i18n/request.ts`).
