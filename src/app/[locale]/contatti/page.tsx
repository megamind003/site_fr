'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { NavBar } from '@/components/layout/NavBar'
import { Footer } from '@/components/layout/Footer'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Container } from '@/components/layout/Grid'
import { ReservationForm } from '@/components/features/ReservationForm'

export default function ContattiPage() {
  const t = useTranslations('Contact')
  const tNav = useTranslations('Nav')
  const tFooter = useTranslations('Footer')
  const { locale } = useParams()

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/menu`, label: tNav('menu') },
    { href: `/${locale}/chi-siamo`, label: tNav('about') },
    { href: `/${locale}/eventi`, label: tNav('events') },
    { href: `/${locale}/contatti`, label: tNav('contact'), active: true },
  ]

  return (
    <>
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: tNav('reserve'), href: `/${locale}/contatti` }} 
        ctaSecondary={{ label: tNav('menu'), href: `/${locale}/menu` }}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.4736!2d12.0948113!3d42.0089776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f3f0c0c0c0c0d%3A0x1234567890abcdef!2sVia%20Prato%20del%20Cavaliere%207%2C%2000052%20Cerveteri%20RM!5e0!3m2!1sen!2sit!4v1234567890123!5m2!1sen!2sit"
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
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+Prato+del+Cavaliere+7+Cerveteri" 
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
                    <h3 className="text-xl font-bold mb-2">{t('address.title')}</h3>
                    <p className="text-gray-700">
                      {t('address.street')}<br />
                      {t('address.cap')} {t('address.city')}
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
                     <h3 className="text-xl font-bold">{t('title')}</h3>
                     <ul className="space-y-3">
                       <li className="flex items-center gap-3">
                         <span className="text-gray-600">{t('phone.label')}:</span>
                         <a href={`tel:${t('phone.value')}`} className="font-semibold text-brand-terracotta-500 hover:text-brand-terracotta-600 transition-colors">{t('phone.value')}</a>
                       </li>
                       <li className="flex items-center gap-3">
                         <span className="text-gray-600">{t('email.label')}:</span>
                         <a href={`mailto:${t('email.value')}`} className="font-semibold text-brand-ocean-500 hover:text-brand-ocean-600 transition-colors">{t('email.value')}</a>
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
                    <h3 className="text-xl font-bold mb-2">{tFooter('hoursTitle')}</h3>
                    <p className="text-gray-700 mb-3">
                      {tFooter('hoursValue')}
                    </p>
                    <p className="text-sm text-brand-terracotta-600 font-medium italic">
                      {tFooter('hoursDisclaimer')}
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

      <Footer
        tagline={tFooter('tagline')}
        address={{
          street: tFooter('addressValue'),
          city: 'Cerveteri RM',
        }}
        contact={{
          phone: tFooter('phoneValue'),
          email: tFooter('emailValue'),
        }}
        hours={tFooter('hoursValue')}
        social={[
          { name: 'Facebook', href: '#', icon: 'facebook' },
          { name: 'Instagram', href: '#', icon: 'instagram' },
        ]}
        copyright={tFooter('copyright')}
      />
    </>
  )
}
