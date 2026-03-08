'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Grid } from '@/components/layout/Grid';
import { DishCard } from '@/components/features/Cards';
import { useState } from 'react';

const exampleDishes = [
  {
    id: 'antipasto',
    name: 'Antipasto della Casa',
    description: 'Selezione di antipasti misti del giorno',
    price: null,
    category: 'antipasti',
    image: '/images/antipasto.jpg',
    badges: []
  },
  {
    id: 'primo',
    name: 'Primo del Giorno',
    description: 'Pasta fresca preparata quotidianamente',
    price: '6',
    category: 'primi',
    image: '/images/primo.jpg',
    badges: ['special']
  },
  {
    id: 'secondo',
    name: 'Secondo di Terra',
    description: 'Carne alla griglia con contorni',
    price: null,
    category: 'secondi',
    image: '/images/secondo.jpg',
    badges: []
  },
  {
    id: 'pizza',
    name: 'Pizza al Taglio',
    description: 'Sempre disponibile - bancone attivo tutto il giorno',
    price: null,
    category: 'pizza',
    image: '/images/pizza.jpg',
    badges: ['always-available']
  },
  {
    id: 'contorno',
    name: 'Contorni Misti',
    description: 'Verdure di stagione dal bancone',
    price: null,
    category: 'contorni',
    image: '/images/contorni.jpg',
    badges: []
  },
  {
    id: 'dolce',
    name: 'Dolce del Giorno',
    description: 'Dolce fatto in casa diverso ogni giorno',
    price: null,
    category: 'dolci',
    image: '/images/dolce.jpg',
    badges: ['special']
  }
];

const categories = [
  { id: 'all', label: 'Tutto' },
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'contorni', label: 'Contorni' },
  { id: 'dolci', label: 'Dolci' }
];

export default function MenuPage() {
  const t = useTranslations('Menu');
  const tNav = useTranslations('Nav');
  const tFooter = useTranslations('Footer');
  const notice = useTranslations('MenuNotice');
  const { locale } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');

  const navItems = [
    { href: `/${locale}`, label: tNav('home') },
    { href: `/${locale}/menu`, label: tNav('menu'), active: true },
    { href: `/${locale}/chi-siamo`, label: tNav('about') },
    { href: `/${locale}/eventi`, label: tNav('events') },
    { href: `/${locale}/contatti`, label: tNav('contact') },
  ];

  const filteredDishes = activeCategory === 'all'
    ? exampleDishes
    : exampleDishes.filter(dish => dish.category === activeCategory);

  return (
    <>
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: tNav('reserve'), href: `/${locale}/contatti` }} 
        ctaSecondary={{ label: tNav('menu'), href: `/${locale}/menu` }}
      />

      <Section variant="default" className="pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {t('subtitle')}
          </p>
          
          <div className="bg-brand-cream-100 border-l-4 border-brand-terracotta-500 p-6 rounded-r-lg text-left">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
              {notice('title')}
            </h3>
            <p className="text-gray-700 mb-3">
              {notice('description')}
            </p>
            <p className="text-sm text-gray-600 italic">
              {notice('disclaimer')}
            </p>
          </div>
        </div>
      </Section>

      <Section variant="alternate" padding="none">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === cat.id
                    ? 'bg-brand-terracotta-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur text-gray-700 hover:bg-brand-terracotta-100'
                  }
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="alternate">
        <Grid cols={3} gap="lg">
          {filteredDishes.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price ?? undefined}
              image={dish.image}
              category={dish.category}
              badges={dish.badges as readonly any[]}
            />
          ))}
        </Grid>
      </Section>

      <Section variant="default">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-brand-ocean-50 border border-brand-ocean-200 rounded-2xl p-6">
            <p className="text-gray-700 mb-2">
              {useTranslations('Prices')('disclaimer')}
            </p>
            <p className="text-sm text-gray-600">
              {useTranslations('Prices')('byWeight')}
            </p>
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
