import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn('p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow', className)}>
      {icon && <div className="w-12 h-12 mb-4 text-brand-terracotta">{icon}</div>}
      <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export interface DishCardProps {
  image: string
  name: string
  description: string
  price?: string
  category?: string
  className?: string
}

export function DishCard({ image, name, description, price, category, className }: DishCardProps) {
  return (
    <div className={cn('group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all', className)}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-brand-terracotta text-white text-xs font-medium rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 bg-white">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold font-display">{name}</h3>
          {price && <span className="text-brand-terracotta font-bold">{price}</span>}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}

export interface TestimonialCardProps {
  quote: string
  author: string
  rating?: number
  source?: string
  className?: string
}

export function TestimonialCard({ quote, author, rating = 5, source, className }: TestimonialCardProps) {
  return (
    <div className={cn('p-6 rounded-2xl bg-gradient-mesh shadow-lg', className)}>
      <div className="flex mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      <div className="flex items-center">
        <div className="font-semibold">{author}</div>
        {source && <span className="ml-2 text-sm text-gray-500">— {source}</span>}
      </div>
    </div>
  )
}

export interface StatCardProps {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn('p-6 rounded-2xl bg-brand-terracotta text-white text-center shadow-lg', className)}>
      <div className="text-4xl md:text-5xl font-bold font-display mb-2">{value}</div>
      <div className="text-sm md:text-base opacity-90">{label}</div>
    </div>
  )
}
