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
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: 'Prenota', href: '/contatti' }} 
        ctaSecondary={{ label: 'Menu', href: '/menu' }}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.4736!2d12.0948113!3d42.0089776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f3f0c0c0c0c0d%3A0x1234567890abcdef!2sCerveteri%20RM%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890123!5m2!1sen!2sit"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[250px] lg:h-[400px]"
                  title="Google Maps - Ristorante Damassy, Cerveteri"
                  aria-label="Mappa Google che mostra la posizione del ristorante a Cerveteri"
                ></iframe>
              </div>
              <div className="text-center lg:text-left">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=42.009,12.097" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Dove Siamo</h3>
                <p className="text-lg text-gray-600">
                  Via Prato del Cavaliere, 7<br />
                  00052 Cerveteri (RM)
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contatti</h3>
                <ul className="space-y-4 text-lg text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Telefono:</span>
                    <a href="tel:+39069953303" className="hover:text-primary">+39 06 995 3303</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:info@damassy.it" className="hover:text-primary">info@damassy.it</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section variant="alternate">
        <Container>
          <div className="max-w-2xl mx-auto">
            <SectionHeader>
              <SectionTitle>Prenota un Tavolo</SectionTitle>
            </SectionHeader>
            <ReservationForm />
          </div>
        </Container>
      </Section>
    </>
  )
}
