'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Grid } from '../layout/Grid';
import { Utensils, Pizza, ChefHat, Salad } from 'lucide-react';

interface CategoryCardProps {
  icon: React.ReactNode;
  category: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, category, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="w-12 h-12 mb-4 text-brand-terracotta-500">{icon}</div>
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{category}</h3>
      <div className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-brand-terracotta-100 text-brand-terracotta-700 mb-3">
        Disponibile oggi
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export const DailyMenuBoard: React.FC = () => {
  const t = useTranslations('MenuNotice');

  return (
    <Section variant="alternate">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>

      <Grid cols={4} gap="lg">
        <CategoryCard
          icon={<Salad className="w-full h-full" />}
          category="Antipasti"
          description="Bruschette, affettati, verdure grigliate e stuzzichini della casa."
        />
        <CategoryCard
          icon={<Utensils className="w-full h-full" />}
          category="Primi"
          description="Pasta fresca, risotti e zuppe preparati al momento."
        />
        <CategoryCard
          icon={<ChefHat className="w-full h-full" />}
          category="Secondi"
          description="Carne e pesce alla griglia, arrosto e in umido."
        />
        <CategoryCard
          icon={<Pizza className="w-full h-full" />}
          category="Pizza"
          description="Pizza al taglio sempre disponibile, varietà classiche e speciali."
        />
      </Grid>

      <div className="mt-12 bg-brand-cream-100 border-l-4 border-brand-terracotta-500 p-6 rounded-r-lg">
        <p className="text-sm text-gray-700">
          <strong>Nota:</strong> {t('disclaimer')}
        </p>
      </div>
    </Section>
  );
};
