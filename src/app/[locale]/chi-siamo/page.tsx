import { getTranslations } from 'next-intl/server'
import { NavBar } from '@/components/layout/NavBar'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Grid, Container } from '@/components/layout/Grid'
import { FeatureCard, StatCard } from '@/components/features/Cards'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/chi-siamo', label: 'Chi Siamo', active: true },
  { href: '/contatti', label: 'Contatti' },
]

export default async function ChiSiamoPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('About')

  const features = [
    { icon: '🍽️', title: t('features.tradition.title'), description: t('features.tradition.description') },
    { icon: '🌊', title: t('features.sea.title'), description: t('features.sea.description') },
    { icon: '🏛️', title: t('features.territory.title'), description: t('features.territory.description') },
  ]

  const stats = t.raw('stats')

  return (
    <>
      <NavBar items={navItems} ctaPrimary={{ label: 'Prenota', href: '/contatti' }} />
      
      <Section variant="alternate" className="pt-24">
        <Container>
          <SectionHeader>
            <SectionTitle>{t('sectionTitle')}</SectionTitle>
            <SectionSubtitle>{t('sectionSubtitle')}</SectionSubtitle>
          </SectionHeader>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">{t('title')}</p>
            <p className="text-gray-600">{t('description')}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={3} gap="lg">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section variant="primary">
        <Container>
          <Grid cols={3} gap="lg">
            {stats.map((stat: { value: string; label: string }, i: number) => (
              <StatCard key={i} value={stat.value} label={stat.label} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}
