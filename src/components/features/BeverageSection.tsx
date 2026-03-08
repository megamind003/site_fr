'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Grid } from '../layout/Grid';
import { Wine, Beer, WineOff } from 'lucide-react';

interface BeverageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: 'terracotta' | 'ocean' | 'cream';
}

const BeverageCard: React.FC<BeverageCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    terracotta: 'bg-brand-terracotta-100 text-brand-terracotta-700 border-brand-terracotta-200',
    ocean: 'bg-brand-ocean-100 text-brand-ocean-700 border-brand-ocean-200',
    cream: 'bg-brand-cream-100 text-brand-cream-700 border-brand-cream-200',
  };

  return (
    <div className={`rounded-2xl p-6 border-2 ${colorClasses[color]} transition-all duration-300 hover:shadow-lg`}>
      <div className="w-12 h-12 mb-4">{icon}</div>
      <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  );
};

export const BeverageSection: React.FC = () => {
  const t = useTranslations('Beverages');

  return (
    <Section variant="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <Grid cols={3} gap="lg">
        <BeverageCard
          icon={<Wine className="w-full h-full" />}
          title={t('wineDraft')}
          description="Vini rossi, bianchi e rosati disponibili al calice o alla spina."
          color="terracotta"
        />
        <BeverageCard
          icon={<Beer className="w-full h-full" />}
          title={t('beerDraft')}
          description="Birra alla spina e ampia selezione di birre in bottiglia."
          color="ocean"
        />
        <BeverageCard
          icon={<WineOff className="w-full h-full" />}
          title={t('bottled')}
          description="Acque, bibite gassate, succhi di frutta e analcolici vari."
          color="cream"
        />
      </Grid>
    </Section>
  );
};
