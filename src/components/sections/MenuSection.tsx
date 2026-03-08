import { cn } from '@/lib/utils'
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section'
import { Grid } from '@/components/layout/Grid'
import { DishCard } from '@/components/features/Cards'

export interface Dish {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
  featured?: boolean
}

export interface MenuSectionProps {
  title?: string
  subtitle?: string
  categories?: string[]
  dishes: Dish[]
  className?: string
}

export function MenuSection({ title, subtitle, categories, dishes, className }: MenuSectionProps) {
  return (
    <Section variant="alternate" className={className}>
      <SectionHeader>
        {title && <SectionTitle>{title}</SectionTitle>}
        {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
      </SectionHeader>

      {categories && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 font-medium text-sm hover:bg-brand-terracotta hover:text-white transition-all shadow-md"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <Grid cols={3} gap="lg">
        {dishes.map((dish) => (
          <DishCard key={dish.id} {...dish} />
        ))}
      </Grid>
    </Section>
  )
}
