import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  ctaPrimary?: {
    label: string
    href: string
  }
  ctaSecondary?: {
    label: string
    href: string
  }
  backgroundImage?: string
  overlay?: 'dark' | 'light' | 'none'
  className?: string
}

export function Hero({
  title,
  subtitle,
  description,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  overlay = 'dark',
  className,
}: HeroProps) {
  const hasBackground = backgroundImage || overlay !== 'none'
  
  return (
    <section className={cn('relative min-h-[90vh] flex items-center', className)}>
      {/* Background layer */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div
            className={cn(
              'absolute inset-0',
              overlay === 'dark' && 'bg-gradient-to-b from-black/70 via-black/50 to-black/70',
              overlay === 'light' && 'bg-gradient-to-b from-white/70 via-white/50 to-white/70',
              overlay === 'none' && 'bg-transparent'
            )}
          />
        </>
      ) : overlay !== 'none' ? (
        /* Fallback gradient background when no image provided */
        <div
          className={cn(
            'absolute inset-0',
            overlay === 'dark' && 'bg-gradient-to-br from-brand-ocean-900 via-brand-ocean-700 to-brand-terracotta-700',
            overlay === 'light' && 'bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-white'
          )}
        />
      ) : null}

      <div className={cn(
        'relative z-10 container mx-auto px-4 md:px-6 py-20',
        !hasBackground && 'bg-gradient-to-br from-brand-ocean-900 via-brand-ocean-700 to-brand-terracotta-700 min-h-[90vh] flex items-center'
      )}>
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p className={cn(
              "font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in",
              hasBackground ? 'text-brand-terracotta-400' : 'text-brand-terracotta-300'
            )}>
              {subtitle}
            </p>
          )}

          <h1 className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-6 animate-slide-up",
            hasBackground ? 'text-white' : 'text-white'
          )}>
            {title}
          </h1>

          {description && (
            <p className={cn(
              "text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-200",
              hasBackground ? 'text-gray-200' : 'text-brand-cream-200'
            )}>
              {description}
            </p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-terracotta-500 text-white font-semibold rounded-lg hover:bg-brand-terracotta-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={cn(
                    "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all border-2",
                    hasBackground 
                      ? 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/30'
                      : 'bg-brand-cream-100 text-brand-ocean-900 hover:bg-brand-cream-200 border-brand-cream-300'
                  )}
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className={cn("w-6 h-6", hasBackground ? 'text-white/60' : 'text-brand-cream-400/60')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
