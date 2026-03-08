'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Grid } from '../layout/Grid';
import { Wheat, Fish, Cake } from 'lucide-react';

interface SpecialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  day?: string;
}

const SpecialCard: React.FC<SpecialCardProps> = ({ icon, title, description, day }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-transparent hover:border-brand-terracotta-200 text-center">
      {day && (
        <div className="inline-block rounded-full bg-brand-terracotta-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide mb-4">
          {day}
        </div>
      )}
      <div className="w-16 h-16 mx-auto mb-6 text-brand-terracotta-500">{icon}</div>
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const WeeklySpecials: React.FC = () => {
  const t = useTranslations('WeeklySpecials');

  return (
    <Section variant="alternate">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <Grid cols={3} gap="lg">
        <SpecialCard
          icon={<Wheat className="w-full h-full" />}
          title={t('thursday.title')}
          description={t('thursday.description')}
          day="Giovedì"
        />
        <SpecialCard
          icon={<Fish className="w-full h-full" />}
          title={t('friday.title')}
          description={t('friday.description')}
          day="Venerdì"
        />
        <SpecialCard
          icon={<Cake className="w-full h-full" />}
          title={t('daily.title')}
          description={t('daily.description')}
          day="Ogni Giorno"
        />
      </Grid>
    </Section>
  );
};
