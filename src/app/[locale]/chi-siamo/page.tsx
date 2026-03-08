'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { PranzoCenaInfo } from '@/components/features/PranzoCenaInfo';
import { WeeklySpecials } from '@/components/features/WeeklySpecials';
import { BeverageSection } from '@/components/features/BeverageSection';
import { Utensils, Users, Clock, MapPin } from 'lucide-react';

export default function ChiSiamoPage() {
  const t = useTranslations();
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');
  const { locale } = useParams();

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/menu`, label: tNav('menu') },
    { href: `/${locale}/chi-siamo`, label: tNav('about'), active: true },
    { href: `/${locale}/eventi`, label: tNav('events') },
    { href: `/${locale}/contatti`, label: tNav('contact') },
  ];

  return (
    <>
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: tNav('reserve'), href: `/${locale}/contatti` }} 
        ctaSecondary={{ label: tNav('menu'), href: `/${locale}/menu` }}
      />

      <Section variant="alternate" className="py-16 md:py-24 pt-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-ocean-900 mb-6">
              {t('About.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('About.description')}
            </p>
          </div>
        </div>
      </Section>

      <Section variant="default" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-brand-ocean-900 mb-12">
              {t('Identity.tagline')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Utensils className="w-12 h-12 mx-auto mb-4 text-brand-terracotta-500" />
                <h3 className="text-xl font-display font-semibold mb-2">Pizza al taglio</h3>
                <p className="text-gray-600">Sempre disponibile durante tutta la giornata</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-brand-ocean-500" />
                <h3 className="text-xl font-display font-semibold mb-2">Bancone contorni</h3>
                <p className="text-gray-600">Molto apprezzato dai nostri clienti</p>
              </Card>
              
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-brand-terracotta-500" />
                <h3 className="text-xl font-display font-semibold mb-2">Menu variabile</h3>
                <p className="text-gray-600">Ogni giorno proposte fresche e diverse</p>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <PranzoCenaInfo />

      <WeeklySpecials />

      <BeverageSection />

      <Section variant="primary" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Grid cols={3} gap="lg">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {t('About.stats.years')}
              </div>
              <div className="text-brand-terracotta-100">
                {t('About.stats.yearsLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {t('About.stats.dishes')}
              </div>
              <div className="text-brand-terracotta-100">
                {t('About.stats.dishesLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                {t('About.stats.customers')}
              </div>
              <div className="text-brand-terracotta-100">
                {t('About.stats.customersLabel')}
              </div>
            </div>
          </Grid>
        </div>
      </Section>

      <Section variant="alternate" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-brand-terracotta-500" />
            <h2 className="text-3xl font-display font-bold text-brand-ocean-900 mb-4">
              {t('Contact.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('Contact.address.street')}<br />
              {t('Contact.address.cap')} {t('Contact.address.city')} ({t('Contact.address.province')})
            </p>
            <a 
              href="https://maps.google.com/?q=Via+Prato+del+Cavaliere+7+Cerveteri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-brand-terracotta-500 text-white px-8 py-3 rounded-full font-medium hover:bg-brand-terracotta-600 transition-colors"
            >
              Come Arrivare
            </a>
          </div>
        </div>
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
  );
}
