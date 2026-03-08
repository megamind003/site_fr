# Da Massy Website - Struttura Componenti

## Panoramica

Sito web per **Da Massy Ristorante** - Via Prato del Cavaliere, 7, Cerveteri (RM)

**Stack Tecnologico:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (i18n)
- class-variance-authority (varianti componenti)

---

## Struttura Directory

```
src/
├── app/
│   ├── fonts.ts              # Configurazione font (Playfair Display + Inter)
│   ├── globals.css           # Design System completo
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Root page (redirect)
│   └── [locale]/
│       ├── layout.tsx        # Layout localizzato con NextIntlClientProvider
│       └── page.tsx          # Home page con traduzioni
│
├── components/
│   ├── ui/                   # Componenti UI base (riutilizzabili)
│   │   ├── Button.tsx        # Button con varianti (primary/secondary/outline/ghost/link)
│   │   ├── Card.tsx          # Card con Header/Content/Footer
│   │   └── Section.tsx       # Section wrapper con Header/Title/Subtitle
│   │
│   ├── layout/               # Componenti di layout
│   │   ├── NavBar.tsx        # Navigation bar responsive con mobile menu
│   │   ├── Footer.tsx        # Footer con social links e copyright
│   │   └── Grid.tsx          # Container + Grid system
│   │
│   ├── sections/             # Sezioni pagina complete
│   │   ├── Hero.tsx          # Hero section con background, CTA, animazioni
│   │   └── MenuSection.tsx   # Griglia piatti con filtri categorie
│   │
│   ├── features/             # Componenti feature-specifici
│   │   ├── Cards.tsx         # FeatureCard, DishCard, TestimonialCard
│   │   └── ReservationForm.tsx # Form prenotazioni
│   │
│   └── shared/               # Componenti condivisi (da implementare)
│
├── i18n/
│   ├── routing.ts            # Configurazione routing (locales: ['it', 'en'])
│   └── request.ts            # getRequestConfig per next-intl
│
├── i18n.ts                   # Export configurazione i18n
├── middleware.ts             # Middleware per routing locale
│
├── lib/
│   └── utils.ts              # Utility cn() per class merging
│
├── hooks/                    # Custom hooks (da implementare)
├── types/                    # TypeScript types (da implementare)
├── styles/                   # Additional styles (da implementare)
│
└── messages/
    ├── it/index.ts           # Traduzioni italiane
    └── en/index.ts           # Traduzioni inglesi
```

---

## Design System (5 Pillars)

### 1. Typography con Carattere
- **Display**: Playfair Display (Serif, elegante, memorabile)
- **Body**: Inter (Sans-Serif, leggibile, moderno)
- **Evitati**: Inter, Roboto, Arial, system-ui defaults

### 2. Colori Commitati
- **Terracotta** `#C15B3E` - Primario (calore, terra, tradizione)
- **Ocean** `#2C5F6F` - Secondario (mare, profondità, eleganza)
- **Cream** `#F5F1E8` - Sfondo (neutro, luminoso, accogliente)
- **Gradienti**: mesh, earth, sea per profondità visiva

### 3. Motion Purposeful
- `animate-fade-in` - Fade in ingresso
- `animate-slide-up` - Slide dal basso
- `animate-slide-down` - Slide dall'alto
- `animate-scale-in` - Zoom in
- `animation-delay-*` - Staggered reveals (50ms, 100ms, 150ms, 200ms)

### 4. Spatial Composition
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Grid: 1-4 colonne responsive
- Gap: sm (4), md (6), lg (8)
- Spaziatura generosa, non templated

### 5. Atmosphere & Depth
- Gradient overlays su immagini
- Backdrop blur per effetti vetro
- Ombre drammatiche (shadow-lg, shadow-xl)
- Texture e pattern sottili

---

## Componenti Riutilizzabili

### UI Components (< 300 righe ciascuno)

#### Button
```tsx
<Button variant="primary|secondary|outline|ghost|link" size="sm|md|lg">
  Click me
</Button>
```

#### Card
```tsx
<Card>
  <Card.Header>Titolo</Card.Header>
  <Card.Content>Contenuto</Card.Content>
  <Card.Footer>Footer</Card.Footer>
</Card>
```

#### Section
```tsx
<Section variant="light|dark|gradient">
  <Section.Header>
    <Section.Title>Titolo</Section.Title>
    <Section.Subtitle>Sottotitolo</Section.Subtitle>
  </Section.Header>
  <Section.Content>...</Section.Content>
</Section>
```

### Layout Components

#### NavBar
- Logo responsive
- Navigation items da configurazione
- CTA button opzionale
- Mobile hamburger menu

#### Footer
- Brand column
- Links columns (configurabili)
- Social icons
- Copyright

#### Grid
- `<Container>` - Wrapper centrato
- `<Grid cols={1|2|3|4} gap="sm|md|lg">` - Griglia responsive

### Feature Components

#### FeatureCard
- Icona
- Titolo
- Descrizione

#### DishCard
- Immagine piatto
- Nome
- Descrizione
- Prezzo
- Badge (opzionale: "Piccante", "Vegetariano", etc.)

#### TestimonialCard
- Rating (stelle)
- Testo recensione
- Autore
- Data

#### ReservationForm
- Nome, Email, Telefono
- Data, Orario, Numero ospiti
- Note speciali
- Submit handler con loading state

---

## Internazionalizzazione (i18n)

### Configurazione
- **Libreria**: next-intl
- **Locale**: `['it', 'en']`
- **Default**: `'it'`
- **Prefix**: `'never'` (es: `/it/home` → `/home`)

### Struttura Messaggi
```ts
// src/messages/it/index.ts
export const it = {
  Meta: { title: '...', description: '...' },
  Nav: { home: '...', menu: '...', about: '...', contact: '...' },
  Hero: { title: '...', subtitle: '...', description: '...' },
  // ...
}
```

### Utilizzo nei Componenti
```tsx
import { useTranslations } from 'next-intl'

export default function Component() {
  const t = useTranslations('Hero')
  return <h1>{t('title')}</h1>
}
```

---

## Prossimi Step

### Wave 3 - Funzionalità Avanzate
- [ ] Galleria foto componente
- [ ] Backend prenotazioni (API route)
- [ ] Recensioni integration (Google/Trustpilot)
- [ ] Eventi page
- [ ] SEO meta tags completi
- [ ] Mobile sticky CTA

### Wave 4 - Contenuti Finali
- [ ] Shooting fotografico
- [ ] Ottimizzazione immagini
- [ ] Caricamento contenuti reali
- [ ] Google Maps embed
- [ ] Cross-browser testing

### Wave 5 - Deploy & Audit
- [ ] Deploy Vercel/Netlify
- [ ] Lighthouse audit (≥90)
- [ ] SEO audit
- [ ] Documentazione gestione

---

## Comandi Utili

```bash
# Sviluppo
npm run dev

# Build produzione
npm run build

# Start server produzione
npm run start

# Lint
npm run lint
```

---

## File Chiave

| File | Scopo |
|------|-------|
| `tailwind.config.ts` | Configurazione Tailwind con colori brand, font, animazioni |
| `src/app/globals.css` | Design System CSS custom properties |
| `src/i18n/routing.ts` | Configurazione routing i18n |
| `src/messages/*/index.ts` | Traduzioni per ogni locale |
| `src/components/ui/*` | Componenti base riutilizzabili |

---

**Nota**: Tutti i componenti sono < 300 righe, tipizzati TypeScript, e progettati per essere estendibili senza duplicazione.
