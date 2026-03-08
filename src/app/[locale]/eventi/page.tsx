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
      <NavBar items={navItems} ctaPrimary={{ label: t('navCta'), href: '/contatti' }} />
      
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
