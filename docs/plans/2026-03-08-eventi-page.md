# Eventi Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a complete Eventi (Events) page showcasing the restaurant's event hosting capabilities.

**Architecture:** The page will follow the established pattern of the `chi-siamo` page, using existing UI components (`Hero`, `Section`, `Grid`, `FeatureCard`, `Gallery`). It will be a server component using `next-intl` for translations.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, next-intl.

---

### Task 1: Create Eventi Page Structure

**Files:**
- Create: `src/app/[locale]/eventi/page.tsx`

**Step 1: Write the page implementation**

```tsx
import { getTranslations } from 'next-intl/server'
import { NavBar } from '@/components/layout/NavBar'
import { Hero } from '@/components/sections/Hero'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Grid, Container } from '@/components/layout/Grid'
import { FeatureCard, StatCard } from '@/components/features/Cards'
import { Gallery } from '@/components/features/Gallery'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/eventi', label: 'Eventi', active: true },
  { href: '/contatti', label: 'Contatti' },
]

export default async function EventiPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('Events')

  const eventTypes = [
    { 
      icon: '🎂', 
      title: t('types.birthday.title'), 
      description: t('types.birthday.description') 
    },
    { 
      icon: '🥂', 
      title: t('types.wedding.title'), 
      description: t('types.wedding.description') 
    },
    { 
      icon: '💼', 
      title: t('types.business.title'), 
      description: t('types.business.description') 
    },
    { 
      icon: '🎉', 
      title: t('types.special.title'), 
      description: t('types.special.description') 
    },
  ]

  return (
    <>
      <NavBar items={navItems} cta={{ label: t('navCta'), href: '/contatti' }} />
      
      <Hero 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        ctaPrimary={{ label: t('hero.cta'), href: '/contatti' }}
        overlay="dark"
      />

      <Section variant="alternate">
        <Container>
          <SectionHeader>
            <SectionTitle>{t('featuresTitle')}</SectionTitle>
            <SectionSubtitle>{t('featuresSubtitle')}</SectionSubtitle>
          </SectionHeader>
          
          <Grid cols={2} gap="lg" className="md:grid-cols-4">
            {eventTypes.map((type, i) => (
              <FeatureCard key={i} {...type} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section variant="dark">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold font-display mb-6">{t('capacity.title')}</h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('capacity.description')}
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-brand-terracotta mb-1">20-80</div>
                  <div className="text-sm uppercase tracking-wider text-gray-400">{t('capacity.label')}</div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-brand-ocean-800 rounded-2xl flex items-center justify-center border border-brand-ocean-700">
               <span className="text-brand-ocean-400 italic">{t('capacity.imagePlaceholder')}</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>{t('galleryTitle')}</SectionTitle>
          </SectionHeader>
          <Gallery />
        </Container>
      </Section>

      <Section variant="primary" className="text-center">
        <Container>
          <h2 className="text-4xl font-bold font-display mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            {t('cta.description')}
          </p>
          <a 
            href="/contatti" 
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-brand-terracotta font-bold rounded-lg hover:bg-brand-cream-100 transition-all shadow-xl hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
        </Container>
      </Section>
    </>
  )
}
```

**Step 2: Verify with lsp_diagnostics**

Run: `lsp_diagnostics src/app/[locale]/eventi/page.tsx`
Expected: No errors.

**Step 3: Commit**

```bash
git add src/app/[locale]/eventi/page.tsx
git commit -m "feat: add Eventi page structure and content"
```

---

### Task 2: Add Translations (Mock/Check)

**Files:**
- Modify: `messages/it.json` (or equivalent)

**Step 1: Add translation keys**

Ensure the following keys exist in the translation file (or add them if missing):

```json
{
  "Events": {
    "navCta": "Prenota",
    "hero": {
      "title": "Eventi Privati & Celebrazioni",
      "subtitle": "Momenti Indimenticabili",
      "description": "Dalle cene aziendali ai compleanni, rendiamo ogni tua occasione speciale un'esperienza gastronomica unica.",
      "cta": "Richiedi Preventivo"
    },
    "featuresTitle": "Le Nostre Proposte",
    "featuresSubtitle": "Soluzioni su misura per ogni tipo di evento",
    "types": {
      "birthday": {
        "title": "Compleanni",
        "description": "Festeggia il tuo giorno speciale con la vera pizza napoletana e un'atmosfera accogliente."
      },
      "wedding": {
        "title": "Matrimoni",
        "description": "Ricevimenti intimi e raffinati con menu personalizzati per il tuo giorno più bello."
      },
      "business": {
        "title": "Cene Aziendali",
        "description": "L'ambiente ideale per team building e cene di lavoro in un clima rilassato."
      },
      "special": {
        "title": "Occasioni Speciali",
        "description": "Anniversari, lauree o semplici ritrovi tra amici: ogni scusa è buona per festeggiare."
      }
    },
    "capacity": {
      "title": "Spazio & Versatilità",
      "description": "La nostra sala può essere configurata per ospitare gruppi di diverse dimensioni, garantendo sempre comfort e privacy.",
      "label": "Persone",
      "imagePlaceholder": "Foto della sala allestita"
    },
    "galleryTitle": "I Nostri Eventi",
    "cta": {
      "title": "Contattaci per il tuo evento",
      "description": "Siamo a tua disposizione per creare un menu personalizzato e organizzare ogni dettaglio.",
      "button": "Parla con noi"
    }
  }
}
```

**Step 2: Commit**

```bash
git add messages/it.json
git commit -m "locales: add translations for Eventi page"
```
