# Da Massy Ristorante - Site Map & Documentation

**Generated**: 2026-03-08  
**Project**: Pizzeria Website  
**Stack**: Next.js 14, TypeScript, Tailwind CSS v4, next-intl

---

##  Quick Start for Next Agent

### To Restart Development
```bash
# Install dependencies
npm install

# Fix build errors first (see Technical Debt section)
# Then start dev server
npm run dev

# Open browser
open http://localhost:3000/it
```

### Critical Files to Know
| File | Purpose |
|------|---------|
| `src/middleware.ts` | Locale enforcement - redirects to /it/ or /en/ |
| `src/app/[locale]/layout.tsx` | i18n boundary with NextIntlClientProvider |
| `src/messages/it/index.ts` | Italian translations dictionary |
| `src/messages/en/index.ts` | English translations dictionary |
| `src/app/globals.css` | Design tokens (@theme) + Tailwind v4 |
| `src/i18n/routing.ts` | Locale config ['it', 'en'], default 'it' |

---

##  Site Architecture

### Route Map
```
/ (redirects to /it)
├── /it (Home page)
│   ├── /menu (Menu page)
│   ├── /chi-siamo (About page)
│   ├── /contatti (Contact page)
│   └── /eventi (EXISTS - no page.tsx yet)
└── /en (English Home - same structure)
    ├── /en/menu
    ├── /en/chi-siamo
    ├── /en/contatti
    └── /en/eventi (EXISTS - no page.tsx yet)
```

### Page Components
| Route | File | Type | Key Components |
|-------|------|------|----------------|
| `/[locale]` | `src/app/[locale]/page.tsx` | Server | NavBar, Hero, FeatureCard×4, MenuSection, Footer |
| `/[locale]/menu` | `src/app/[locale]/menu/page.tsx` | Client | NavBar, MenuSection (full), Footer |
| `/[locale]/chi-siamo` | `src/app/[locale]/chi-siamo/page.tsx` | Client | NavBar, About section, Stats, Footer |
| `/[locale]/contatti` | `src/app/[locale]/contatti/page.tsx` | Client | NavBar, ReservationForm, Map placeholder, Footer |
| `/[locale]/eventi` | `src/app/[locale]/eventi/` | **MISSING** | Directory exists, needs page.tsx |

---

##  Design System

### Color Palette (Tailwind v4 @theme)

#### Terracotta (Primary)
| Scale | Hex | Usage |
|-------|-----|-------|
| 50 | #FDF3F1 | Backgrounds |
| 100 | #FAE5DE | Hover states |
| 200 | #F5C5B8 | Borders |
| 300 | #EF9F8A | Accents |
| 400 | #E9755C | Secondary buttons |
| **500** | **#BC4749** | **Primary buttons, CTAs** |
| 600 | #A33B3D | Hover primary |
| 700 | #853623 | Dark accents |
| 800 | #6A2D1F | Text on light |
| 900 | #58271D | Headings |
| 950 | #2F120E | Darkest |

#### Ocean (Secondary)
| Scale | Hex | Usage |
|-------|-----|-------|
| 50 | #F0F7F8 | Backgrounds |
| 100 | #DDEEF0 | Hover |
| 200 | #BFDCE1 | Borders |
| 300 | #96C3CB | Accents |
| 400 | #66A3AF | Secondary |
| **500** | **#2C5F6F** | **Secondary buttons** |
| 600 | #254F5C | Footer bg |
| 700 | #21424C | Dark sections |
| 800 | #1F363E | Text |
| 900 | #1D2F35 | Headings |
| 950 | #0F1A1F | Darkest |

#### Cream (Neutral)
| Scale | Hex | Usage |
|-------|-----|-------|
| 50 | #FDFCFB | Body bg |
| 100 | #FAF8F5 | Section alt |
| 200 | #F5F1E8 | Cards |
| 300 | #EDE6D6 | Borders |
| 400 | #E2D6BF | Accents |
| 500 | #D4C1A3 | Secondary text |
| 600 | #BCA37F | Muted |
| 700-950 | Various | Dark themes |

### Typography

| Element | Font | Weights | Sizes |
|---------|------|---------|-------|
| **Headings (h1-h6)** | Playfair Display | 700 (Bold) | 3xl-8xl responsive |
| **Body** | Inter | 400, 500, 600 | sm-lg |
| **Subtitle** | Inter | 600 (Semibold) | xs-sm, uppercase tracking-wider |

### Animations (defined in globals.css)

| Name | Duration | Effect | Usage |
|------|----------|--------|-------|
| `animate-fade-in` | 0.5s | Opacity 0→1 | All entrance |
| `animate-slide-up` | 0.6s | Y: 20px→0, Opacity 0→1 | Hero content |
| `animate-slide-down` | 0.4s | Y: -10px→0, Opacity 0→1 | Dropdowns |
| `animate-scale-in` | 0.3s | Scale: 0.95→1, Opacity 0→1 | Modals |

**Staggered Delays**: `.animation-delay-200`, `.animation-delay-400`, `.animation-delay-600`

---

##  Component Inventory

### UI Components (`src/components/ui/`)

#### Button.tsx (50 lines)
```tsx
// Variants: primary, secondary, outline, ghost, link
// Sizes: sm, md, lg
// Uses CVA (class-variance-authority)
<Button variant="primary" size="lg">Click me</Button>
```
**Key Styles**: 
- primary: bg-brand-terracotta-500, shadow-lg, hover:-translate-y-0.5
- secondary: bg-brand-ocean-500
- outline: border-2 border-brand-terracotta

#### Card.tsx (63 lines)
```tsx
// Props: interactive, hoverLift
// Subcomponents: Card.Header, Card.Content, Card.Footer
<Card interactive hoverLift>
  <Card.Header>Title</Card.Header>
  <Card.Content>Body</Card.Content>
</Card>
```

#### Section.tsx (81 lines)
```tsx
// Variants: default, alternate, dark, primary, gradient-mesh
// Padding: default, large, none
// Subcomponents: Section.Header, Section.Title, Section.Subtitle
<Section variant="dark">
  <Section.Header>
    <Section.Title>Heading</Section.Title>
    <Section.Subtitle>Subtitle</Section.Subtitle>
  </Section.Header>
</Section>
```

#### Badge.tsx (64 lines)
```tsx
// Dietary types: vegetarian, vegan, gluten-free, spicy, special
// Icons from lucide-react: Leaf, Vegan, WheatOff, Flame, Star
<DietaryBadge type="vegetarian" /> // Shows "Vegetariano" with leaf icon
```

### Layout Components (`src/components/layout/`)

#### NavBar.tsx (164 lines)
```tsx
// Client component with mobile menu state
// Props: items (NavItem[]), logo, ctaPrimary/Secondary/Tertiary
<NavBar 
  items={[{ href: '/menu', label: 'Menu' }]}
  ctaPrimary={{ label: 'Prenota', href: '/prenota' }}
/>
```
**Features**:
- Fixed top, z-50
- Glassmorphism: backdrop-blur-md, bg-gradient-to-r terracotta/98
- Mobile: hamburger menu with slide-down animation
- Filters CTAs from nav items

#### Footer.tsx (93 lines)
```tsx
// Props: tagline, address, contact, hours, social, copyright
<Footer
  tagline="Il sapore autentico..."
  address={{ street: 'Via...', city: 'Cerveteri RM' }}
  social={[{ name: 'Instagram', href: '#', icon: <InstagramIcon /> }]}
/>
```
**Layout**: 4-column grid (lg:grid-cols-4), bg-brand-ocean-600

#### Grid.tsx (44 lines)
```tsx
// Container: wrapper with mx-auto px-4 md:px-6
// Grid: responsive cols (1-4), gap (sm/md/lg)
<Container>
  <Grid cols={3} gap="lg">
    {/* Cards */}
  </Grid>
</Container>
```

### Section Components (`src/components/sections/`)

#### Hero.tsx (133 lines)
```tsx
// Props: title, subtitle, description, ctaPrimary/Secondary, backgroundImage, overlay
<Hero
  title="Il Sapore Autentico di Cerveteri"
  subtitle="Benvenuti da Da Massy"
  ctaPrimary={{ label: 'Prenota', href: '/prenota' }}
  overlay="dark"
/>
```
**Features**:
- min-h-[90vh]
- Gradient mesh background with radial overlays
- Animated typography (fade-in, slide-up with delays)

#### MenuSection.tsx (54 lines)
```tsx
// Props: title, subtitle, categories[], dishes[]
<MenuSection
  title="I Nostri Piatti"
  categories={['Terra', 'Mare', 'Primi', 'Secondi', 'Dolci']}
  dishes={dishArray}
/>
```
**Features**:
- Category filter buttons (rounded-full, backdrop-blur)
- Grid cols=3 gap=lg
- Uses DishCard

### Feature Components (`src/components/features/`)

#### Cards.tsx (157 lines)
**4 Card Types**:

1. **FeatureCard**: Icon (utensils/leaf/heart/wine), title, description
2. **DishCard**: Image with fallback, category badge, DietaryBadge[], price, CTA
3. **TestimonialCard**: Rating stars, quote, author, source
4. **StatCard**: Large value (text-4xl-5xl), label

#### ReservationForm.tsx (199 lines)
```tsx
// Client component with form state
// Fields: name, email, phone, guests (1-12), date, time (12:00-21:30), notes
<ReservationForm onSubmit={handleSubmit} />
```
**Features**:
- isLoading state
- bg-white/10 backdrop-blur on dark section
- No backend integration yet

#### Gallery.tsx (134 lines)
```tsx
// Client component with filter + lightbox
// Categories: all, food, interior, exterior, events
<Gallery 
  images={galleryImages}
  title="La Nostra Galleria"
/>
```
**Features**:
- Filter buttons (active state: bg-terracotta-600)
- Grid 2/3/4 cols responsive
- Lightbox modal with next/image

#### StickyCTA.tsx (65 lines)
```tsx
// Client component, mobile-only (md:hidden)
// Fixed bottom-0, z-40
<StickyCTA 
  phone="+39061234567"
  whatsapp="+39061234567"
  bookingUrl="/contatti"
/>
```
**Features**:
- 3-col grid: Chiama (tel:), WhatsApp (wa.me/), Prenota (Link)
- Hides on /contatti page (usePathname check)

---

##  Internationalization (i18n)

### Configuration
```typescript
// src/i18n/routing.ts
export const locales = ['it', 'en']
export const defaultLocale = 'it'
export const routing = {
  locales,
  defaultLocale,
  localePrefix: 'never' // URLs don't show locale prefix
}
```

### Middleware (`src/middleware.ts`)
- Enforces locale prefix on all routes
- Redirects `/` → `/${defaultLocale}`
- Excludes: API routes, static files, Next internals

### Translation Structure
```typescript
// src/messages/it/index.ts
export const it = {
  Meta: { title, description },
  Nav: { home, menu, about, events, contact, reserve },
  Hero: { subtitle, title, description, ctaPrimary, ctaSecondary },
  Features: { sectionTitle, sectionSubtitle, items: [...] },
  Menu: { sectionTitle, sectionSubtitle, categories, dishes: {...} },
  About: { sectionTitle, title, description, features, stats },
  Reservation: { sectionTitle, name, email, phone, guests, date, time, notes, submit },
  Footer: { tagline, quickLinks, contact, hours, address, phone, email, copyright },
  Contact: { sectionTitle, locationTitle, hoursTitle, contactTitle },
  Events: { hero, featuresTitle, types: {...}, capacity, galleryTitle, cta },
  Common: { learnMore, bookNow, callUs, scrollToTop }
}
```

### Usage in Components
```tsx
// Server Components
import { getTranslations } from 'next-intl/server'
const t = await getTranslations('Hero')
<h1>{t('title')}</h1>

// Client Components
import { useTranslations } from 'next-intl'
const t = useTranslations('Hero')
<h1>{t('title')}</h1>
```

---

##  File Structure

```
sito_pizzeria/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── chi-siamo/page.tsx
│   │   │   ├── contatti/page.tsx
│   │   │   ├── eventi/              # EMPTY - needs page.tsx
│   │   │   ├── menu/page.tsx
│   │   │   ├── layout.tsx           # i18n layout with NextIntlClientProvider
│   │   │   └── page.tsx             # Home page (Server Component)
│   │   ├── fonts.ts
│   │   ├── globals.css              # Design tokens (@theme)
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Root redirect
│   │
│   ├── components/
│   │   ├── features/
│   │   │   ├── Cards.tsx            # FeatureCard, DishCard, TestimonialCard, StatCard
│   │   │   ├── Gallery.tsx
│   │   │   ├── ReservationForm.tsx
│   │   │   └── StickyCTA.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Grid.tsx             # Container, Grid
│   │   │   └── NavBar.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   └── MenuSection.tsx
│   │   ├── shared/                  # EMPTY
│   │   └── ui/
│   │       ├── Badge.tsx            # Badge, DietaryBadge
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Section.tsx
│   │
│   ├── hooks/                       # EMPTY
│   ├── i18n/
│   │   ├── request.ts               # getRequestConfig for next-intl
│   │   └── routing.ts               # locales, defaultLocale
│   ├── lib/
│   │   ├── seo.ts                   # Metadata factory (UNUSED)
│   │   └── utils.ts                 # cn() helper
│   ├── messages/
│   │   ├── en/index.ts
│   │   └── it/index.ts
│   ├── styles/                      # EMPTY
│   ├── types/                       # EMPTY
│   ├── i18n.ts                      # i18n config export
│   └── middleware.ts                # Locale enforcement
│
├── .planning/codebase/              # Technical documentation
│   ├── ARCHITECTURE.md
│   ├── CONCERNS.md                  # Technical debt (14 items)
│   ├── CONVENTIONS.md
│   ├── INTEGRATIONS.md
│   ├── STACK.md
│   ├── STRUCTURE.md
│   └── TESTING.md
│
├── docs/plans/                      # Feature implementation plans
│   ├── 2026-03-08-eventi-page.md
│   └── 2026-03-08-google-map-integration.md
│
├── .sisyphus/plans/
│   └── da-massy-website.md          # Master project plan (5 waves)
│
├── bootstrap_lib/                   # Bootstrap 5.x (CSS + JS)
├── next.config.js
├── package.json
├── postcss.config.js
├── tsconfig.json
└── STRUTTURA.md                     # Italian documentation (268 lines)
```

---

##  Technical Debt (from CONCERNS.md)

### HIGH Priority

1. **Build Broken - Missing i18n Keys**
   - Pages reference nested keys not in dictionaries
   - Files: page.tsx:21, menu/page.tsx:20, chi-siamo/page.tsx:20, contatti/page.tsx:26
   - **Fix**: Add missing keys to src/messages/*/index.ts

2. **Routing Conflict**
   - `localePrefix: 'never'` but middleware forces `/it/`, `/en/`
   - **Fix**: Align routing config with middleware behavior

3. **Color Token Typo**
   - `--color-brand-terraccotta-*` (double-c) vs `brand-terracotta` in components
   - **Fix**: Standardize to single 'c' in globals.css

4. **Reservation Form No Backend**
   - Form submits to nowhere, no validation
   - **Fix**: Add API route + Zod validation

### MEDIUM Priority

5. ESLint package missing
6. Duplicate i18n configs (i18n.ts + i18n/request.ts)
7. Nested `<html>/<body>` in layouts
8. Mobile menu non-functional (state issues)
9. Category filter visual-only (no filtering logic)
10. Gallery missing 'use client' directive
11. Using `<img>` instead of next/image (SEO/performance)
12. seo.ts unused (should integrate with page metadata)

---

##  Development Commands

```bash
# Development
npm run dev              # Start dev server on :3000

# Production
npm run build            # Build (FIX i18n keys first!)
npm run start            # Start production server

# Quality
npm run lint             # ESLint (may fail if config missing)
```

---

##  Next Agent Tasks

### Immediate (Fix Build)
1. [ ] Add missing i18n keys to dictionaries
2. [ ] Fix color token typo in globals.css
3. [ ] Resolve routing conflict (localePrefix vs middleware)

### Wave 3 - Features
4. [ ] Create `/[locale]/eventi/page.tsx` (see docs/plans/2026-03-08-eventi-page.md)
5. [ ] Integrate Google Maps in contatti page (see docs/plans/2026-03-08-google-map-integration.md)
6. [ ] Add backend for ReservationForm (API route + email)
7. [ ] Implement category filtering in MenuSection
8. [ ] Add 'use client' to Gallery.tsx

### Wave 4 - Polish
9. [ ] Replace `<img>` with next/image
10. [ ] Integrate seo.ts with page metadata
11. [ ] Fix mobile menu state management
12. [ ] Add form validation to ReservationForm

### Wave 5 - Deploy
13. [ ] Deploy to Vercel
14. [ ] Lighthouse audit (target ≥90)
15. [ ] SEO audit
16. [ ] Cross-browser testing

---

##  Contact Info (from i18n)

**Da Massy Ristorante**  
Via Prato del Cavaliere, 7, 00052 Cerveteri RM  
Phone: +39 06 1234567  
Email: info@damassy.it  

**Hours**: Mer-Lun: 09:30-22:00 | Mar: Chiuso

---

##  Related Documentation

- **STRUTTURA.md**: Italian design system docs (5 Pillars)
- **.planning/codebase/ARCHITECTURE.md**: Layered architecture analysis
- **.planning/codebase/CONCERNS.md**: Technical debt details
- **.sisyphus/plans/da-massy-website.md**: Master project plan with 5 waves
- **docs/plans/**: Feature-specific implementation plans

---

**Last Updated**: 2026-03-08  
**Maintained By**: Prometheus Planning Agent
