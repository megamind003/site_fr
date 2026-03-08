'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar } from 'lucide-react';

export function StickyMobileCTA() {
  const pathname = usePathname();
  
  const isContactPage = pathname.includes('/contatti');
  if (isContactPage) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-terracotta-600 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-between h-16 px-2">
        <a
          href="tel:+393331234567"
          className="flex-1 flex flex-col items-center justify-center h-full active:bg-brand-terracotta-700 transition-colors"
          aria-label="Chiama ora"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium uppercase tracking-wider">Chiama</span>
        </a>
        
        <div className="w-px h-8 bg-brand-terracotta-400/50" aria-hidden="true" />
        
        <Link
          href="/contatti"
          className="flex-1 flex flex-col items-center justify-center h-full active:bg-brand-terracotta-700 transition-colors"
          aria-label="Prenota un tavolo"
        >
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium uppercase tracking-wider">Prenota</span>
        </Link>
      </div>
    </div>
  );
}
