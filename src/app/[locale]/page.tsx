import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { MenuSection } from '@/components/sections/MenuSection';
import { Container } from '@/components/layout/Grid';
import { Section } from '@/components/ui/Section';
import { FeatureCard } from '@/components/features/Cards';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { DietaryType } from '@/components/ui/Badge';

export function generateStaticParams() {
  return [{ locale: 'it' }, { locale: 'en' }];
}

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params }: Props) {
  const { locale } = params;
  setRequestLocale(locale);
  
  const [nav, hero, menu, features, footer] = await Promise.all([
    getTranslations('Nav'),
    getTranslations('Hero'),
    getTranslations('Menu'),
    getTranslations('Features'),
    getTranslations('Footer'),
  ]);

  const navItems = [
    { label: nav('menu'), href: '/menu' },
    { label: nav('about'), href: '/chi-siamo' },
    { label: nav('contact'), href: '/contatti' },
  ];

  const featureItems = features.raw('items') as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  // Convert dishes object to array
  const dishesObj = menu.raw('dishes') as Record<string, {
    name: string;
    description: string;
  }>;
  
  const dishList = Object.entries(dishesObj).map(([key, value]) => ({
    id: key,
    name: value.name,
    description: value.description,
    price: '€12',
    category: key === 'carbonara' || key === 'spaghetti' ? 'primi' : key === 'tiramisu' ? 'dolci' : key,
    image: `/images/${key}.jpg`,
    badges: (key === 'carbonara' ? ['special'] : key === 'spaghetti' ? ['gluten-free'] : key === 'tiramisu' ? ['vegetarian'] : []) as DietaryType[],
  }));

  return (
    <>
      <NavBar 
        items={navItems} 
        ctaPrimary={{ label: nav('reserve'), href: '/prenota' }} 
        ctaSecondary={{ label: nav('menu'), href: '/menu' }}
      />
      
      <Hero
        title={hero('title')}
        subtitle={hero('subtitle')}
        description={hero('description')}
        ctaPrimary={{ label: hero('ctaPrimary'), href: '/menu' }}
        ctaSecondary={{ label: hero('ctaSecondary'), href: '/contatti' }}
      />

      <section id="features" className="py-20 bg-gradient-to-br from-brand-ocean-50 via-white to-brand-terracotta-50">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureItems.map((feature, i) => (
              <FeatureCard
                key={i}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </Container>
      </section>

      <MenuSection
        title={menu('sectionTitle')}
        subtitle={menu('sectionSubtitle')}
        categories={menu.raw('categories') as string[]}
        dishes={dishList}
      />

      <Section variant="gradient-mesh">
        <Container>
          <div className="text-center py-12">
            <h3 className="text-3xl font-bold font-display text-white mb-4">
              Vieni a Trovarci
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ti aspettiamo per un'esperienza culinaria indimenticabile
            </p>
            <a
              href="/contatti"
              className="inline-flex items-center gap-2 bg-white text-brand-terracotta-600 px-8 py-4 rounded-full font-semibold hover:bg-brand-cream-100 transition-all shadow-lg hover:shadow-xl"
            >
              Prenota un Tavolo
            </a>
          </div>
        </Container>
      </Section>



      <Footer
        tagline={footer('tagline')}
        address={{
          street: footer('addressValue'),
          city: 'Cerveteri RM',
        }}
        contact={{
          phone: '+39 06 1234567',
          email: 'info@damassy.it',
        }}
        hours={footer('hoursValue')}
        social={[
          { name: 'Facebook', href: '#', icon: 'facebook' },
          { name: 'Instagram', href: '#', icon: 'instagram' },
        ]}
        copyright={footer('copyright')}
      />
    </>
  );
}
