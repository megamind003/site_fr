'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Grid } from '../layout/Grid';
import { Sun, Moon, Clock, Pizza } from 'lucide-react';

interface MealPeriodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
  variant: 'pranzo' | 'cena';
}

const MealPeriodCard: React.FC<MealPeriodCardProps> = ({ icon, title, description, highlight, variant }) => {
  const isPranzo = variant === 'pranzo';
  
  return (
    <div className={`rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
      isPranzo 
        ? 'bg-gradient-to-br from-brand-terracotta-50 to-white border-2 border-brand-terracotta-200' 
        : 'bg-gradient-to-br from-brand-ocean-50 to-white border-2 border-brand-ocean-200'
    }`}>
      <div className={`w-16 h-16 mb-6 ${isPranzo ? 'text-brand-terracotta-500' : 'text-brand-ocean-500'}`}>
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      {highlight && (
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
          isPranzo 
            ? 'bg-brand-terracotta-500 text-white' 
            : 'bg-brand-ocean-500 text-white'
        }`}>
          <Clock className="w-4 h-4" />
          {highlight}
        </div>
      )}
    </div>
  );
};

export const PranzoCenaInfo: React.FC = () => {
  const t = useTranslations('PranzoCena');

  return (
    <Section variant="default">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
      </div>

      <Grid cols={2} gap="lg">
        <MealPeriodCard
          icon={<Sun className="w-full h-full" />}
          title={t('pranzoTitle')}
          description={t('pranzoDescription')}
          highlight="12:00 - 14:00"
          variant="pranzo"
        />
        <MealPeriodCard
          icon={<Moon className="w-full h-full" />}
          title={t('cenaTitle')}
          description={t('cenaDescription')}
          highlight="Focus Pizza"
          variant="cena"
        />
      </Grid>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-brand-terracotta-100 px-6 py-3 text-sm font-medium text-brand-terracotta-700">
          <Pizza className="w-5 h-5" />
          {t('alwaysAvailable')}
        </div>
      </div>
    </Section>
  );
};
