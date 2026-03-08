'use client'

import { useTranslations } from 'next-intl'
import { NavBar } from '@/components/layout/NavBar'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Grid, Container } from '@/components/layout/Grid'
import { DishCard } from '@/components/features/Cards'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu', active: true },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
]

export default function MenuPage() {
  const t = useTranslations('Menu')

  const dishes = [
    { id: 1, name: t('dishes.terra.name'), description: t('dishes.terra.description'), price: '€14', image: '/images/terra.jpg', category: 'terra' },
    { id: 2, name: t('dishes.mare.name'), description: t('dishes.mare.description'), price: '€16', image: '/images/mare.jpg', category: 'mare' },
    { id: 3, name: t('dishes.pizza.name'), description: t('dishes.pizza.description'), price: '€12', image: '/images/pizza.jpg', category: 'pizza' },
  ]

  return (
    <>
      <NavBar items={navItems} cta={{ label: 'Prenota', href: '/contatti' }} />
      
      <Section variant="alternate" className="pt-24">
        <Container>
          <SectionHeader>
            <SectionTitle>{t('title')}</SectionTitle>
            <SectionSubtitle>{t('subtitle')}</SectionSubtitle>
          </SectionHeader>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={3} gap="lg">
            {dishes.map((dish) => (
              <DishCard key={dish.id} {...dish} />
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  )
}
