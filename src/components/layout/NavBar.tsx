'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'

export interface NavItem {
  href: string
  label: string
  active?: boolean
}

export interface NavBarProps {
  items: NavItem[]
  logo?: {
    src: string
    alt: string
    href?: string
  }
  ctaPrimary?: {
    label: string
    href: string
  }
  ctaSecondary?: {
    label: string
    href: string
  }
  ctaTertiary?: {
    label: string
    href: string
  }
  className?: string
}

export function NavBar({ items, logo, ctaPrimary, ctaSecondary, ctaTertiary, className }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const filteredItems = items.filter(item => 
    item.href !== ctaPrimary?.href && 
    item.href !== ctaSecondary?.href &&
    item.href !== ctaTertiary?.href
  )

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-terracotta/98 to-brand-terracotta/95 backdrop-blur-md shadow-lg border-b border-white/10', className)}>
      <nav className="container mx-auto px-4 md:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {logo ? (
            <Link href={logo.href || '/'} className="flex-shrink-0" aria-label="Home">
              <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-display font-bold text-white drop-shadow-lg" aria-label="Home">
              Da Massy
            </Link>
          )}

          <div className="hidden lg:flex items-center space-x-8">
            {filteredItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors text-white/90 hover:text-white',
                  item.active ? 'text-white' : 'text-white/90'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {ctaTertiary && (
              <Link
                href={ctaTertiary.href}
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
              >
                {ctaTertiary.label}
              </Link>
            )}
            {ctaSecondary && (
              <Link
                href={ctaSecondary.href}
                className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
              >
                {ctaSecondary.label}
              </Link>
            )}
            {ctaPrimary && (
              <Link
                href={ctaPrimary.href}
                className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
              >
                {ctaPrimary.label}
              </Link>
            )}
          </div>

          <button 
            className="lg:hidden p-2 text-white hover:text-white/80 transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-white/10 bg-gradient-to-b from-brand-terracotta/98 to-brand-terracotta animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              {filteredItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                    className={cn(
                    'text-base font-medium px-2 py-1 transition-colors text-white/90 hover:text-white',
                    item.active ? 'text-white' : 'text-white/90'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                {ctaTertiary && (
                  <Link
                    href={ctaTertiary.href}
                    className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full')}
                    onClick={() => setIsOpen(false)}
                  >
                    {ctaTertiary.label}
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondary.href}
                    className={cn(buttonVariants({ variant: 'secondary', size: 'md' }), 'w-full')}
                    onClick={() => setIsOpen(false)}
                  >
                    {ctaSecondary.label}
                  </Link>
                )}
                {ctaPrimary && (
                  <Link
                    href={ctaPrimary.href}
                    className={cn(buttonVariants({ variant: 'primary', size: 'md' }), 'w-full')}
                    onClick={() => setIsOpen(false)}
                  >
                    {ctaPrimary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
