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
    <section className={cn('relative min-h-[90vh] flex items-center overflow-hidden', className)}>
      {/* Background layer with visual depth - gradient mesh */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div
            className={cn(
              'absolute inset-0',
              overlay === 'dark' && 'bg-gradient-to-b from-black/80 via-black/60 to-black/80',
              overlay === 'light' && 'bg-gradient-to-b from-white/80 via-white/60 to-white/80',
              overlay === 'none' && 'bg-transparent'
            )}
          />
        </>
      ) : overlay !== 'none' ? (
        /* Enhanced gradient mesh background with depth */
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className={cn(
            'absolute inset-0',
            overlay === 'dark' && 'bg-gradient-to-br from-brand-ocean-950 via-brand-ocean-800 to-brand-terracotta-800',
            overlay === 'light' && 'bg-gradient-to-b from-brand-cream-200 via-brand-cream-100 to-white'
          )} />
          {/* Mesh overlay for depth */}
          <div className={cn(
            'absolute inset-0 opacity-30',
            overlay === 'dark' && 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-terracotta-500/40 via-transparent to-transparent',
          )} />
          <div className={cn(
            'absolute inset-0 opacity-20',
            overlay === 'dark' && 'bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-ocean-500/30 via-transparent to-transparent',
          )} />
        </div>
      ) : null}

      <div className={cn(
        'relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-20',
        !hasBackground && 'bg-gradient-to-br from-brand-ocean-950 via-brand-ocean-800 to-brand-terracotta-800 min-h-[90vh] flex items-center'
      )}>
        <div className="max-w-5xl mx-auto text-center">
          {subtitle && (
            <p className={cn(
              "font-semibold tracking-wider uppercase text-xs md:text-sm mb-4 animate-fade-in",
              hasBackground ? 'text-brand-terracotta-300' : 'text-brand-terracotta-300'
            )}>
              {subtitle}
            </p>
          )}

          <h1 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6 animate-slide-up leading-tight",
            hasBackground ? 'text-white' : 'text-white'
          )}>
            {title}
          </h1>

          {description && (
            <p className={cn(
              "text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-slide-up animation-delay-200 leading-relaxed",
              hasBackground ? 'text-gray-100' : 'text-brand-cream-100'
            )}>
              {description}
            </p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-terracotta-500 text-white font-semibold rounded-lg hover:bg-brand-terracotta-600 transition-all shadow-lg shadow-brand-terracotta-500/30 hover:shadow-xl hover:shadow-brand-terracotta-500/40 hover:-translate-y-0.5"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className={cn(
                    "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all border-2 backdrop-blur-sm",
                    hasBackground 
                      ? 'bg-white/15 text-white hover:bg-white/25 border-white/50 shadow-lg hover:-translate-y-0.5'
                      : 'bg-brand-cream-100/90 text-brand-ocean-900 hover:bg-brand-cream-200/90 border-brand-cream-300'
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
