'use client'

import { useTranslations } from 'next-intl'
import { NavBar } from '@/components/layout/NavBar'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Grid, Container } from '@/components/layout/Grid'
import { DishCard } from '@/components/features/Cards'
import { DietaryType } from '@/components/ui/Badge'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu', active: true },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti' },
]

export default function MenuPage() {
  const t = useTranslations('Menu')

  const dishes = [
    { 
      id: 1, 
      name: t('dishes.terra.name'), 
      description: t('dishes.terra.description'), 
      price: '€18', 
      image: 'https://images.unsplash.com/photo-1606850780554-b55ea40f0fe9?q=80&w=800&auto=format&fit=crop', 
      category: 'Antipasti',
      dietary: ['special'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
    { 
      id: 2, 
      name: t('dishes.mare.name'), 
      description: t('dishes.mare.description'), 
      price: '€24', 
      image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=800&auto=format&fit=crop', 
      category: 'Antipasti',
      dietary: ['gluten-free'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
    { 
      id: 3, 
      name: t('dishes.pizza.name'), 
      description: t('dishes.pizza.description'), 
      price: '€10', 
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', 
      category: 'Pizze',
      dietary: ['vegetarian'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
    { 
      id: 4, 
      name: t('dishes.carbonara.name'), 
      description: t('dishes.carbonara.description'), 
      price: '€14', 
      image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop', 
      category: 'Primi',
      dietary: ['special'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
    { 
      id: 5, 
      name: t('dishes.spaghetti.name'), 
      description: t('dishes.spaghetti.description'), 
      price: '€16', 
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop', 
      category: 'Primi',
      dietary: ['spicy'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
    { 
      id: 6, 
      name: t('dishes.tiramisu.name'), 
      description: t('dishes.tiramisu.description'), 
      price: '€6', 
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop', 
      category: 'Dolci',
      dietary: ['vegetarian'] as DietaryBadge[],
      ctaText: t('cta'),
      ctaHref: '/contatti'
    },
  ]

  return (
    <>
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: 'Prenota', href: '/contatti' }} 
        ctaSecondary={{ label: 'Menu', href: '/menu' }}
        ctaTertiary={{ label: 'Contatti', href: '/contatti' }}
      />
      
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
