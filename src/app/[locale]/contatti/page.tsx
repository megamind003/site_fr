'use client'

import { useTranslations } from 'next-intl'
import { NavBar } from '@/components/layout/NavBar'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Container } from '@/components/layout/Grid'
import { ReservationForm } from '@/components/features/ReservationForm'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/chi-siamo', label: 'Chi Siamo' },
  { href: '/contatti', label: 'Contatti', active: true },
]

export default function ContattiPage() {
  const t = useTranslations('Contact')

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
          <div className="max-w-2xl mx-auto">
            <ReservationForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
