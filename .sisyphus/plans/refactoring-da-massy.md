# Da Massy In Rosticceria - Refactoring Plan

**Generated**: 2026-03-08  
**Priority**: CRITICAL - Business Model Alignment  
**Deployment Target**: Vercel  
**Focus**: Mobile-First + Operational Accuracy

---

##  Executive Summary

Il sito attuale presenta un **disallineamento critico** con il modello di business reale. Deve essere trasformato da "ristorante con menu fisso" a "**pizzeria + tavola calda con menu variabile**".

### Cambiamenti Chiave
1. **Menu**: Da fisso → variabile (giornaliero/settimanale)
2. **Struttura**: Aggiungere distinzione pranzo (12-14, banco completo) vs cena (solo pizza)
3. **Ricorrenze**: Giovedì gnocchi, Venerdì pesce, dolce quotidiano
4. **Bevande**: Nuova sezione (vino sfuso, birra alla spina, bottiglie)
5. **Orari**: Marcare come "provvisori - soggetti a variazione"
6. **Prezzi**: Rimuovere quelli non confermati, usare "a partire da" o "chiedi in negozio"
7. **Mobile**: Bottom nav, sticky CTAs, touch targets 44x44px minimo
8. **Vercel**: next/image, next/font, lazy loading, Core Web Vitals

---

##  Audit: Cosa Cambiare (Priorità Alta)

### 1. Hero Messaging - CRITICO
**File**: `src/messages/it/index.ts`, `src/messages/en/index.ts`  
**Attuale**:
```typescript
Hero: {
  subtitle: "Benvenuti da Da Massy",
  title: "Il Sapore Autentico di Cerveteri",
  description: "Dove la tradizione culinaria dell'entroterra etrusco incontra la freschezza del mare..."
}
```

**Problema**: Sembra un ristorante tradizionale, non comunica "pizzeria + tavola calda"

**Nuovo**:
```typescript
Hero: {
  subtitle: "Pizzeria & Tavola Calda",
  title: "Da Massy In Rosticceria",
  description: "Il punto di riferimento a Cerveteri per il pranzo veloce e la pizza serale. Banco pizza sempre disponibile.",
  dailyNote: "Il menu cambia ogni giorno",
  weeklyNote: "Ogni settimana nuove proposte"
}
```

**File da modificare**:
- `src/messages/it/index.ts` (righe 15-20)
- `src/messages/en/index.ts` (righe 15-20)
- `src/app/[locale]/page.tsx` (Hero component props)

---

### 2. Sezione Menu - CRITICO
**File**: `src/app/[locale]/menu/page.tsx`, `src/messages/*/index.ts`

**Attuale**: 6 piatti hardcoded con prezzi fissi (€10-24)

**Problema**: Presenta menu come permanente, nessun avviso di variabilità

**Nuova Struttura**:

#### A. Box Avviso Variabilità (in alto)
```tsx
<div className="bg-brand-terracotta-50 border-l-4 border-brand-terracotta-500 p-4 mb-8">
  <p className="font-semibold text-brand-terracotta-700">
    📅 Il menu cambia ogni giorno
  </p>
  <p className="text-sm text-brand-terracotta-600">
    Le nostre proposte variano in base alla giornata e alla disponibilità degli ingredienti freschi.
  </p>
</div>
```

#### B. Categorie Fisse + Proposte del Giorno
```typescript
Menu: {
  // NUOVO: Categorie sempre disponibili
  alwaysAvailable: {
    pizza: {
      title: "Pizza al Taglio",
      description: "Sempre disponibile durante tutto l'orario di apertura",
      items: ["Margherita", "Marinara", "Capricciosa", "Rossi", "Bianchi"]
    },
    fritti: {
      title: "Fritti",
      description: "Supplì, crocchè, olive all'ascolana",
    },
    bevande: {
      title: "Bevande",
      description: "Vino sfuso, birra alla spina, bottiglie e lattine",
    }
  },
  // NUOVO: Proposte variabili
  dailyProposal: {
    title: "Proposte del Giorno",
    description: "Piatti pronti che variano quotidianamente",
    categories: ["Primi", "Secondi", "Contorni", "Verdure"]
  },
  // NUOVO: Ricorrenze settimanali
  weeklySpecials: {
    thursday: "Giovedì Gnocchi",
    friday: "Venerdì Pesce",
    otherDays: "Prevalentemente proposte di terra"
  },
  // NUOVO: Dolce quotidiano
  dailyDessert: "Ogni giorno un dolcetto diverso fatto in casa"
}
```

**File da modificare**:
- `src/messages/it/index.ts` (sezioni Menu intera)
- `src/messages/en/index.ts` (sezioni Menu intera)
- `src/app/[locale]/menu/page.tsx` (completo refactoring)
- **NUOVO**: `src/components/features/DailyMenuBoard.tsx` (lavagna del giorno)

---

### 3. Distinzione Pranzo vs Cena - CRITICO
**File**: `src/messages/*/index.ts`, `src/app/[locale]/chi-siamo/page.tsx`

**Attuale**: Nessuna distinzione, sembra identico

**Nuova Struttura**:

```typescript
Service: {
  pranzo: {
    title: "Pranzo (Tavola Calda)",
    time: "12:00 - 14:00",
    description: "La nostra struttura si trasforma per offrirti un pranzo veloce ma curato",
    counters: [
      "Bancone Pizza al Taglio",
      "Bancone Contorni e Verdure",
      "Bancone Primi e Secondi"
    ],
    highlight: "Il nostro bancone verdure è molto apprezzato!"
  },
  cena: {
    title: "Cena (Pizzeria)",
    time: "19:00 - 21:30 (Ven-Sab)",
    description: "La sera il focus è sulla pizza al forno a legna",
    note: "Il banco completo di primi e secondi non è disponibile la sera",
    offerings: [
      "Pizza al forno a legna",
      "Pizze fritte",
      "Alcuni fritti e antipasti"
    ]
  }
}
```

**File da modificare**:
- `src/messages/it/index.ts` (nuova sezione Service)
- `src/messages/en/index.ts` (nuova sezione Service)
- `src/app/[locale]/chi-siamo/page.tsx` (aggiungere sezione Pranzo/Cena)
- **NUOVO**: `src/components/features/PranzoCenaInfo.tsx`

---

### 4. Sezione Bevande - NUOVA
**File**: **NUOVO** `src/components/features/BeverageSection.tsx`

**Contenuto**:
```typescript
Beverages: {
  title: "Dalla Cantina e Spina",
  wine: {
    draft: "Vino della Casa (sfuso)",
    description: "Bianco, Rosso e Rosato disponibili alla spina"
  },
  beer: {
    draft: "Birra alla Spina",
    bottled: "Selezione di Birre in Bottiglia"
  },
  soft: {
    bottled: "Bevande in Bottiglia",
    canned: "Bevande in Lattina",
    refrigerated: "Tutto ben fresco in frigo"
  },
  disclaimer: "Per l'elenco completo delle etichette, chiedi in negozio"
}
```

**File da creare**:
- `src/components/features/BeverageSection.tsx`
- Aggiungere key i18n in `src/messages/*/index.ts`

---

### 5. Ricorrenze Settimanali - NUOVA SEZIONE
**File**: **NUOVO** `src/components/features/WeeklySpecials.tsx`

**Contenuto**:
```tsx
// Componente con card per ogni ricorrenza
const specials = [
  {
    day: "Giovedì",
    title: "Gnocchi",
    description: "Come vuole la tradizione romana: gnocchi freschi con sugo di pomodoro e pecorino",
    icon: "🍝"
  },
  {
    day: "Venerdì",
    title: "Pesce",
    description: "Specialità di pesce fresco del Tirreno",
    icon: "🐟"
  },
  {
    day: "Tutti i Giorni",
    title: "Dolce Fatto in Casa",
    description: "Ogni giorno prepariamo un dolcetto diverso per chiudere il pasto in dolcezza",
    icon: "🍰"
  }
]
```

**File da creare**:
- `src/components/features/WeeklySpecials.tsx`
- Aggiungere in `src/app/[locale]/chi-siamo/page.tsx` o pagina dedicata

---

### 6. Orari Provvisori - CRITICO
**File**: `src/messages/*/index.ts`, `src/app/[locale]/contatti/page.tsx`

**Attuale**:
```typescript
Footer.hoursValue: "Mer-Lun: 09:30-22:00 | Mar: Chiuso"
```

**Problema**: Orari mostrati come definitivi, discordanti tra file diversi

**Nuovo**:
```typescript
Hours: {
  provisional: {
    weekday: "Lun-Ven: 8:30 - 15:30",
    weekend: "Ven-Sab: 8:30 - 21:30 (orario continuato)",
    sunday: "Domenica: Chiuso",
    disclaimer: "⚠️ Orari provvisori - soggetti a variazione"
  },
  note: "Gli orari possono variare. Per conferma aggiornata, contattaci direttamente.",
  lunch: "Pranzo: 12:00 - 14:00",
  dinner: "Cena: 19:00 - 21:30 (solo Venerdì e Sabato)"
}
```

**UI Pattern**:
```tsx
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
  <p className="text-sm text-yellow-700">
    ⚠️ <strong>Orari provvisori</strong> - Potrebbero subire variazioni. 
    Si consiglia di contattare il locale per conferma.
  </p>
</div>
```

**File da modificare**:
- `src/messages/it/index.ts` (sezioni Footer.hoursValue, nuovo Hours)
- `src/messages/en/index.ts` (sezioni Footer.hoursValue, nuovo Hours)
- `src/app/[locale]/contatti/page.tsx` (aggiungere disclaimer box)

---

### 7. Prezzi - DA GESTIRE CON CAUTELA
**File**: `src/app/[locale]/page.tsx`, `src/app/[locale]/menu/page.tsx`

**Attuale**: Prezzi fissi hardcoded (€10, €12, €14, €16, €18, €24)

**Problema**: Prezzi non confermati, rischio di mostrare informazioni errate

**Nuovo Approccio**:

#### Opzione A (Consigliata) - Rimuovere prezzi
```typescript
// Nel menu, rimuovere completamente il campo price
dishes: [
  { name: "Pasta del giorno", description: "...", price: null }
]
```

#### Opzione B - Prezzi indicativi
```typescript
// Solo se confermato dal cliente
dishes: [
  { 
    name: "Primi piatti", 
    priceLabel: "da €6",  // NON "€6" fisso
    disclaimer: "Prezzo indicativo"
  }
]
```

#### Opzione C - Formula "chiedi in negozio"
```tsx
<p className="text-sm text-gray-500 italic">
  Per prezzi aggiornati, chiedi in negozio o contattaci.
</p>
```

**File da modificare**:
- `src/app/[locale]/page.tsx` (rimuovere price: '€12')
- `src/app/[locale]/menu/page.tsx` (rimuovere prezzi hardcoded)
- `src/components/features/DishCard.tsx` (rendere price opzionale)

---

### 8. Identità Pizzeria - CRITICO
**File**: `src/messages/*/index.ts`, `src/app/[locale]/page.tsx`

**Attuale**: Nessuna menzione di "pizzeria" come identità primaria

**Nuovo**:
```typescript
Identity: {
  primary: "Pizzeria",
  secondary: "Tavola Calda / Rosticceria",
  tagline: "Pizza sempre disponibile + Tavola calda a pranzo",
  highlights: [
    "Bancone pizza attivo tutto il giorno",
    "Forno a legna per la sera",
    "Pizza al taglio e fritti"
  ]
}
```

**Aggiungere badge in Hero**:
```tsx
<div className="flex gap-2 justify-center mb-4">
  <span className="px-3 py-1 bg-brand-terracotta-500 text-white text-sm rounded-full">
    🍕 Pizzeria
  </span>
  <span className="px-3 py-1 bg-brand-ocean-500 text-white text-sm rounded-full">
    🥘 Tavola Calda
  </span>
</div>
```

---

##  Mobile Optimization (Vercel Deployment)

### 1. Bottom Navigation - NUOVO COMPONENTE
**File**: **NUOVO** `src/components/layout/BottomNav.tsx`

**Pattern**:
```tsx
// Fixed bottom nav per mobile (thumb zone)
<nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t border-gray-200 flex items-center justify-around md:hidden">
  <a href="/menu" className="flex flex-col items-center text-gray-600 hover:text-brand-terracotta-600">
    <MenuIcon className="w-6 h-6" />
    <span className="text-xs">Menu</span>
  </a>
  <a href="tel:+39069953303" className="flex flex-col items-center text-gray-600 hover:text-brand-terracotta-600">
    <PhoneIcon className="w-6 h-6" />
    <span className="text-xs">Chiama</span>
  </a>
  <a href="/contatti" className="flex flex-col items-center text-gray-600 hover:text-brand-terracotta-600">
    <LocationIcon className="w-6 h-6" />
    <span className="text-xs">Dove Siamo</span>
  </a>
</nav>
```

**Touch Targets**: Minimo 44x44px (line-height-16 + px-4)

---

### 2. Sticky CTA Mobile - MIGLIORARE
**File**: `src/components/features/StickyCTA.tsx`

**Attuale**: 3-col grid (Chiama, WhatsApp, Prenota)

**Miglioramenti**:
1. Aggiungere animazione slide-in dopo scroll
2. Nascondere in pagine specifiche (contatti, checkout)
3. Overlap con bottom nav (z-index management)

**Nuovo**:
```tsx
// Apparire solo dopo scroll, nascondersi in /contatti
const pathname = usePathname()
const [isVisible, setIsVisible] = useState(false)

useEffect(() => {
  const handleScroll = () => setIsVisible(window.scrollY > 300)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

if (pathname === '/contatti' || !isVisible) return null
```

---

### 3. Touch Targets - AUDIT
**File**: Tutti i componenti con bottoni/link

**Regola**: Minimo 44x44px (line-height-16 = 64px, o px-4 py-3)

**Da correggere**:
- `src/components/ui/Button.tsx`: size="sm" è troppo piccolo (px-4 py-2 text-sm)
- `src/components/features/Cards.tsx`: link interni alle card
- `src/components/layout/NavBar.tsx`: link mobile menu

**Fix**:
```tsx
// Button.tsx - size sm troppo piccolo
size: {
  sm: 'px-4 py-3 text-sm',  // PRIMA: py-2
  md: 'px-6 py-4 text-base',
  lg: 'px-8 py-5 text-lg',
}
```

---

### 4. Image Optimization - Vercel
**File**: Tutti i file con `<img>`

**Attuale**: Usa `<img>` standard

**Problema**: No lazy loading, no ottimizzazione Vercel

**Fix**:
```tsx
// Sostituire <img> con next/image
import Image from 'next/image'

<Image
  src="/images/dish.jpg"
  alt="Piatto del giorno"
  width={400}
  height={300}
  className="w-full h-48 object-cover"
  priority={true}  // Solo per hero image
  loading="lazy"   // Per altre immagini
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**File da modificare**:
- `src/components/features/Cards.tsx` (DishCard image)
- `src/components/features/Gallery.tsx` (già usa next/image )
- `src/components/sections/Hero.tsx` (backgroundImage)

---

### 5. Lazy Loading Componenti Pesanti
**File**: `src/app/[locale]/contatti/page.tsx`

**Componenti da lazy-loadare**:
- Google Maps embed
- ReservationForm (se complesso)

**Pattern**:
```tsx
import dynamic from 'next/dynamic'

const MapEmbed = dynamic(() => import('@/components/features/MapEmbed'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse" />,
  ssr: false
})

const ReservationForm = dynamic(() => import('@/components/features/ReservationForm'), {
  loading: () => <div className="space-y-4">{/* Skeleton */}</div>
})
```

---

### 6. Responsive Typography
**File**: `src/app/globals.css`

**Attuale**: Font sizes fisse (text-4xl, text-5xl)

**Miglioramento**: Fluid typography con clamp()

```css
@theme {
  --text-fluid-h1: clamp(2.5rem, 8vw, 4.5rem);
  --text-fluid-h2: clamp(2rem, 6vw, 3.5rem);
  --text-fluid-h3: clamp(1.5rem, 4vw, 2.5rem);
}
```

**Utilizzo**:
```tsx
<h1 className="text-[--text-fluid-h1] font-display">Titolo</h1>
```

---

### 7. Form Mobile Optimization
**File**: `src/components/features/ReservationForm.tsx`

**Miglioramenti**:
1. Input types corretti per mobile keyboard
2. Autocomplete attributes
3. Single column layout (già presente )
4. Visual feedback su focus

**Fix**:
```tsx
<input
  type="tel"           // Per telefono (mobile keyboard numerica)
  inputMode="numeric"  // Per numero ospiti
  autoComplete="name"  // Per nome
  className="focus:ring-2 focus:ring-brand-terracotta focus:outline-none"
/>
```

---

##  Vercel-Specific Optimizations

### 1. Core Web Vitals Targets
| Metric | Target | Come Raggiungere |
|--------|--------|------------------|
| LCP | <2.5s | `priority` su hero image, next/font |
| CLS | <0.1 | Reserve space per immagini, font swap |
| INP | <200ms | Lazy loading, code splitting |

### 2. next/font (già usato )
**File**: `src/app/fonts.ts`

Verificare che tutti i font usino `next/font/google`:
```tsx
import { Playfair_Display, Inter } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  preload: true,
  display: 'swap'
})

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
  display: 'swap'
})
```

### 3. Vercel Speed Insights
**File**: **NUOVO** `src/app/layout.tsx`

Aggiungere:
```tsx
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
```

**Install**:
```bash
npm install @vercel/speed-insights @vercel/analytics
```

---

##  Piano di Implementazione

### Wave 1 - Critical Content Fixes (1-2 giorni)
1. [ ] Aggiornare `src/messages/it/index.ts` con nuove key (Hero, Menu variabile, Service, Hours, Beverages)
2. [ ] Aggiornare `src/messages/en/index.ts` (traduzioni)
3. [ ] Modificare `src/app/[locale]/page.tsx` (Hero messaging, rimuovere prezzi, **aggiungere sezione Pranzo/Cena e Ricorrenze in Homepage**)
4. [ ] Modificare `src/app/[locale]/menu/page.tsx` (box variabilità, categorie fisse)
5. [ ] Aggiungere disclaimer orari in `src/app/[locale]/contatti/page.tsx`
6. [ ] **NUOVO**: Configurare OpenGraph metadata in `src/app/layout.tsx` e `src/app/[locale]/page.tsx` (title, description, image per social preview)

### Wave 2 - New Components (2-3 giorni)
6. [ ] Creare `src/components/features/DailyMenuBoard.tsx` (lavagna del giorno)
7. [ ] Creare `src/components/features/PranzoCenaInfo.tsx` (distinzione servizi)
8. [ ] Creare `src/components/features/BeverageSection.tsx` (bevande)
9. [ ] Creare `src/components/features/WeeklySpecials.tsx` (ricorrenze)
10. [ ] Creare `src/components/layout/BottomNav.tsx` (mobile nav)

### Wave 3 - Mobile Optimization (2 giorni)
11. [ ] Migliorare `src/components/features/StickyCTA.tsx` (scroll-based visibility)
12. [ ] Fix touch targets in `src/components/ui/Button.tsx` (size sm)
13. [ ] Sostituire `<img>` con `next/image` in tutti i componenti
14. [ ] Aggiungere lazy loading a Map e ReservationForm
15. [ ] Implementare fluid typography in `globals.css`

### Wave 4 - Vercel Deployment (1 giorno)
16. [ ] Installare `@vercel/speed-insights` e `@vercel/analytics`
17. [ ] Aggiungere SpeedInsights e Analytics a `layout.tsx`
18. [ ] Configurare Vercel dashboard (Speed Insights enabled)
19. [ ] Test Core Web Vitals su Vercel preview
20. [ ] Deploy production

### Wave 5 - Content Confirmation (da coordinare con cliente)
21. [ ] Confermare numero telefono ufficiale (06 995 3303?)
22. [ ] Confermare orari definitivi
23. [ ] Confermare prezzi (almeno primi da €6)
24. [ ] Confermare email ufficiale
25. [ ] Confermare servizio WhatsApp / asporto

---

##  File da Creare (Nuovi)

| File | Scopo | Priorità |
|------|-------|----------|
| `src/components/features/DailyMenuBoard.tsx` | Lavagna proposte del giorno | Alta |
| `src/components/features/PranzoCenaInfo.tsx` | Distinzione servizi | Alta |
| `src/components/features/BeverageSection.tsx` | Sezione bevande | Alta |
| `src/components/features/WeeklySpecials.tsx` | Ricorrenze settimanali | Alta |
| `src/components/layout/BottomNav.tsx` | Mobile bottom navigation | Media |
| `src/components/features/MapEmbed.tsx` | Google Maps lazy-loaded | Media |

---

##  File da Modificare (Riassunto)

| File | Modifiche | Priorità |
|------|-----------|----------|
| `src/messages/it/index.ts` | Hero, Menu, Service, Hours, Beverages, WeeklySpecials | Critica |
| `src/messages/en/index.ts` | Traduzioni stesse key | Critica |
| `src/app/[locale]/page.tsx` | Hero props, rimuovere prezzi | Critica |
| `src/app/[locale]/menu/page.tsx` | Refactoring completo | Critica |
| `src/app/[locale]/chi-siamo/page.tsx` | Aggiungere Pranzo/Cena, Ricorrenze | Alta |
| `src/app/[locale]/contatti/page.tsx` | Disclaimer orari, lazy Map | Alta |
| `src/components/features/StickyCTA.tsx` | Scroll visibility | Media |
| `src/components/ui/Button.tsx` | Touch targets size sm | Media |
| `src/components/features/Cards.tsx` | next/image, price opzionale | Media |
| `src/components/features/Gallery.tsx` | Verificare 'use client' | Bassa |
| `src/app/globals.css` | Fluid typography | Bassa |
| `src/app/layout.tsx` | Vercel SpeedInsights | Media |

---

##  Dati da Confermare con il Cliente

Questi dati sono **mockali** nel piano e vanno confermati prima del deploy:

| Dato | Attuale (provvisorio) | Da Confermare |
|------|------------------------|---------------|
| Telefono | +39 06 995 3303 (da directory) |  Confermare |
| Email | info@damassy.it |  Confermare |
| Orari | Lun-Ven 8:30-15:30, Ven-Sab 8:30-21:30 |  Confermare |
| Prezzi primi | "da €6" |  Confermare |
| Prezzi al kg | Non specificato |  Confermare |
| WhatsApp | Non specificato |  Confermare se attivo |
| Asporto | Non specificato |  Confermare se attivo |
| Consegna | Non specificato |  Confermare se attivo |

---

##  Acceptance Criteria

### Content Accuracy
- [ ] Hero comunica chiaramente "Pizzeria & Tavola Calda"
- [ ] Avviso "menu cambia ogni giorno" visibile in homepage e menu
- [ ] Distinzione pranzo (12-14, banco completo) vs cena (pizza) chiara
- [ ] Ricorrenze (giovedì gnocchi, venerdì pesce) presenti
- [ ] Sezione bevande (vino sfuso, birra spina) presente
- [ ] Orari marcati come "provvisori" con disclaimer
- [ ] Prezzi non confermati rimossi o marcati come indicativi

### Mobile UX
- [ ] Bottom navigation presente e funzionale
- [ ] Touch targets minimo 44x44px
- [ ] Sticky CTA appare dopo scroll, non sovrapposto a bottom nav
- [ ] Form prenotazione con input types corretti per mobile
- [ ] Typography leggibile su mobile (min 16px body)

### Vercel Performance
- [ ] next/image usato per tutte le immagini
- [ ] Lazy loading su Map e componenti pesanti
- [ ] next/font con display: swap
- [ ] SpeedInsights e Analytics installati
- [ ] LCP <2.5s, CLS <0.1, INP <200ms

### i18n
- [ ] Tutte le nuove key tradotte in IT e EN
- [ ] Nessun hardcoded text nei componenti
- [ ] Build passes senza errori di key mancanti

---

##  Rischi e Mitigazione

| Rischio | Impatto | Mitigazione |
|---------|---------|-------------|
| Orari cambiano dopo deploy | Medio | Disclaimer ben visibile, facile aggiornamento i18n |
| Prezzi non confermati | Alto | Rimuovere completamente, usare "chiedi in negozio" |
| Telefono errato | Alto | Confermare con cliente prima di pubblicare |
| Menu variabile non aggiornato | Medio | Spiegare al cliente che il sito mostra categorie, non piatti del giorno |
| Performance mobile scarsa | Alto | Test su dispositivi reali, usare Vercel Speed Insights |

---

##  Note per il Prossimo Agente

1. **Iniziare da i18n**: Tutte le modifiche partono dai dizionari `src/messages/*/index.ts`
2. **Non inventare contenuti**: Se un dato non è confermato, usare placeholder o rimuovere
3. **Test mobile-first**: Ogni componente va testato su viewport 375px prima di desktop
4. **Commit atomici**: Un componente/feature per commit
5. **Vercel preview**: Usare i deploy preview per validare prima del production

---

**Last Updated**: 2026-03-08  
**Plan Status**: Ready for Execution  
**Estimated Effort**: 8-10 giorni (5 waves)
