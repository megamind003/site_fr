import Link from 'next/link'
import { cn } from '@/lib/utils'

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
  cta?: {
    label: string
    href: string
  }
  className?: string
}

export function NavBar({ items, logo, cta, className }: NavBarProps) {
  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm', className)}>
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {logo ? (
            <Link href={logo.href || '/'} className="flex-shrink-0">
              <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-display font-bold text-brand-terracotta">
              Da Massy
            </Link>
          )}

          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-terracotta',
                  item.active ? 'text-brand-terracotta' : 'text-gray-700'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center px-5 py-2.5 bg-brand-terracotta text-white text-sm font-medium rounded-lg hover:bg-brand-terracotta-600 transition-colors shadow-md"
            >
              {cta.label}
            </Link>
          )}

          <button className="md:hidden p-2 text-gray-600" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
