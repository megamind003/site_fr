# INTEGRATIONS

## External APIs and Services

### Messaging and contact channels
- WhatsApp deep link integration via `https://wa.me/<number>` in `src/components/features/StickyCTA.tsx`.
- Telephone deep links (`tel:`) used in:
  - `src/components/features/StickyCTA.tsx`
  - `src/app/[locale]/page.tsx`
- Email deep links (`mailto:`) used in `src/app/[locale]/page.tsx`.

### SEO / search ecosystem touchpoints
- Google Search Console site verification token is read from `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `src/lib/seo.ts`.
- Site base URL is environment-driven (`NEXT_PUBLIC_SITE_URL`) in `src/lib/seo.ts` and used to construct canonical/Open Graph URLs.
- Structured data uses Schema.org JSON-LD object definitions (`Restaurant`, `LocalBusiness`) in `src/lib/seo.ts`.

### CDN/hosted assets and platform services
- Google Fonts are consumed through Next.js font optimization API (`next/font/google`) in:
  - `src/app/fonts.ts`
  - `src/app/[locale]/layout.tsx`

## Internationalization Integration
- `next-intl` is integrated for locale-aware routing and message provisioning:
  - Next config plugin wrapper in `next.config.js`
  - Request config in `src/i18n.ts` and `src/i18n/request.ts`
  - Locale routing config in `src/i18n/routing.ts`
  - Locale middleware behavior in `src/middleware.ts`
- Translation dictionaries are local files (`src/messages/it/index.ts`, `src/messages/en/index.ts`), not remote translation APIs.

## Databases
- No database client or ORM integration detected.
- No signs of Prisma, Drizzle, Sequelize, Mongoose, native SQL drivers, or hosted DB SDKs.
- No `src/app/api/*` route handlers found for DB-backed server operations.

## Authentication Providers
- No auth provider integration detected.
- No NextAuth/Auth.js, Clerk, Auth0, Firebase Auth, Supabase Auth, Cognito, or custom JWT/session backend files found.

## Webhooks and Event Ingestion
- No webhook endpoints detected (no route handlers named/structured for webhook intake).
- No event receiver signatures/verification logic found.

## External Payment/Commerce Integrations
- No Stripe, PayPal, Square, Adyen, or checkout SDK integration detected.

## Operational Notes
- Current integration profile is mostly client-side link-based contact channels + SEO metadata integrations.
- Reservation UX exists (`ReservationForm`) but no backend submission integration is wired in this codebase; it supports optional callback prop only.
