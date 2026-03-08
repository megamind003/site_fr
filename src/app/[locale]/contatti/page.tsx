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

      <Section variant="gradient-mesh">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-terracotta-500 hover:bg-brand-terracotta-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ottieni Indicazioni
                </a>
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-terracotta-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dove Siamo</h3>
                    <p className="text-gray-700">
                      Via Prato del Cavaliere, 7<br />
                      00052 Cerveteri (RM)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-ocean-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Contatti</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="text-gray-600">Telefono:</span>
                        <a href="tel:+39069953303" className="font-semibold text-brand-terracotta-500 hover:text-brand-terracotta-600 transition-colors">+39 06 995 3303</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-gray-600">Email:</span>
                        <a href="mailto:info@damassy.it" className="font-semibold text-brand-ocean-500 hover:text-brand-ocean-600 transition-colors">info@damassy.it</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cream-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Orari di Apertura</h3>
                    <p className="text-gray-700">
                      Mar - Dom: 12:00 - 15:00 / 19:00 - 23:00<br />
                      Lunedì: Chiuso
                    </p>
                  </div>
                </div>
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
