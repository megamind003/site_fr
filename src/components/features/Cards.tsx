'use client'

import { cn } from '@/lib/utils'
import { ReactNode, useState } from 'react'
import { Utensils, Leaf, Heart, Wine, ArrowRight } from 'lucide-react'
import Link from 'next/link'
export { DietaryBadge } from '@/components/ui/Badge'
export type { DietaryType } from '@/components/ui/Badge'

export interface FeatureCardProps {
  icon?: ReactNode | string
  title: string
  description: string
  className?: string
}

const FeatureIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'utensils':
      return <Utensils className="w-full h-full" aria-label="Cucina Mista" />
    case 'leaf':
      return <Leaf className="w-full h-full" aria-label="Ingredienti Locali" />
    case 'heart':
      return <Heart className="w-full h-full" aria-label="Tradizione e Passione" />
    case 'wine':
      return <Wine className="w-full h-full" aria-label="Vini del Territorio" />
    default:
      return null
  }
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <div className={cn('p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow', className)}>
      {icon && (
        <div className="w-12 h-12 mb-4 text-brand-terracotta-500">
          {typeof icon === 'string' ? <FeatureIcon name={icon} /> : icon}
        </div>
      )}
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
  badges?: readonly DietaryType[]
  ctaText?: string
  ctaHref?: string
  className?: string
}

export function DishCard({ image, name, description, price, category, badges = [], ctaText, ctaHref, className }: DishCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className={cn('group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white h-full', className)}>
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
        {!imgError ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-terracotta/20 to-brand-sand/50">
            <span className="text-4xl opacity-50">🍽️</span>
          </div>
        )}
        {category && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-brand-terracotta-500 text-white text-xs font-medium rounded-full shadow-sm">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-lg font-bold font-display leading-tight">{name}</h3>
          {price && <span className="text-brand-terracotta-500 font-bold whitespace-nowrap">{price}</span>}
        </div>
        
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {badges.map((badge) => (
              <DietaryBadge key={badge} type={badge} />
            ))}
          </div>
        )}
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        
        {ctaText && ctaHref && (
          <Link 
            href={ctaHref}
            className="inline-flex items-center text-sm font-semibold text-brand-terracotta-500 hover:text-brand-terracotta-600 transition-colors mt-auto pt-2 border-t border-gray-100"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
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
