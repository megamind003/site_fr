import { cn } from '@/lib/utils'

export interface FooterProps {
  tagline?: string
  address?: {
    street: string
    city: string
  }
  contact?: {
    phone: string
    email: string
  }
  hours?: string
  social?: Array<{ name: string; href: string; icon: React.ReactNode }>
  copyright?: string
  className?: string
}

export function Footer({ tagline, address, contact, hours, social, copyright, className }: FooterProps) {
  return (
    <footer className={cn('bg-brand-ocean-600 text-white', className)}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {tagline && (
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-display font-bold mb-4">Da Massy</h3>
              <p className="text-brand-ocean-200 text-sm leading-relaxed">{tagline}</p>
            </div>
          )}

          {address && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-ocean-200">
                Indirizzo
              </h4>
              <p className="text-brand-ocean-200 text-sm">{address.street}</p>
              <p className="text-brand-ocean-200 text-sm">{address.city}</p>
            </div>
          )}

          {contact && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-ocean-200">
                Contatti
              </h4>
              <p className="text-brand-ocean-200 text-sm">{contact.phone}</p>
              <p className="text-brand-ocean-200 text-sm">{contact.email}</p>
            </div>
          )}

          {hours && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-ocean-200">
                Orari
              </h4>
              <p className="text-brand-ocean-200 text-sm whitespace-pre-line">{hours}</p>
            </div>
          )}
        </div>

        {social && social.length > 0 && (
          <div className="border-t border-brand-ocean-500 mt-8 pt-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-brand-ocean-200">
              Seguici
            </h4>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-brand-ocean-200 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        )}

        {copyright && (
          <div className="border-t border-brand-ocean-500 mt-8 pt-8 text-center text-brand-ocean-200 text-sm">
            <p>{copyright}</p>
          </div>
        )}
      </div>
    </footer>
  )
}
