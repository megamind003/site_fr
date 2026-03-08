import { HTMLAttributes, forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'align'> {
  variant?: 'default' | 'alternate' | 'dark' | 'primary' | 'gradient-mesh'
  padding?: 'default' | 'large' | 'none'
  children?: ReactNode
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'default', padding = 'default', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full',
          padding === 'default' && 'py-16 md:py-24',
          padding === 'large' && 'py-24 md:py-32',
          padding === 'none' && 'py-0',
          variant === 'default' && 'bg-gradient-to-b from-cream-50 to-white',
          variant === 'alternate' && 'bg-gradient-to-b from-white to-cream-100',
          variant === 'dark' && 'bg-brand-ocean-900 text-white',
          variant === 'primary' && 'bg-brand-terracotta-500 text-white',
          variant === 'gradient-mesh' && 'bg-gradient-mesh relative',
          className
        )}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('max-w-3xl mx-auto text-center mb-12 md:mb-16', className)}
      {...props}
    >
      {children}
    </div>
  )
)

SectionHeader.displayName = 'SectionHeader'

const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4',
        'font-display',
        className
      )}
      {...props}
    />
  )
)

SectionTitle.displayName = 'SectionTitle'

const SectionSubtitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg md:text-xl text-gray-600 max-w-2xl mx-auto', className)}
      {...props}
    >
      {children}
    </p>
  )
)

SectionSubtitle.displayName = 'SectionSubtitle'

export { Section, SectionHeader, SectionTitle, SectionSubtitle }
