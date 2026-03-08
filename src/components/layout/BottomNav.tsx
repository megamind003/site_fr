'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Home, Utensils, Info, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

export function BottomNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('Nav');
  
  const currentPath = pathname.replace(/^\/[a-z]{2}/, '') || '/';

  const navItems: NavItem[] = [
    { href: `/${locale}`, label: t('home'), icon: Home },
    { href: `/${locale}/menu`, label: t('menu'), icon: Utensils },
    { href: `/${locale}/chi-siamo`, label: t('about'), icon: Info },
    { href: `/${locale}/eventi`, label: t('events'), icon: Calendar },
    { href: `/${locale}/contatti`, label: t('contact'), icon: Phone },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-white/98 backdrop-blur-md border-t border-brand-ocean-100 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-5 gap-0">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href !== `/${locale}` && pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center py-3 px-1 min-h-[56px] transition-all',
                isActive 
                  ? 'text-brand-terracotta-600 bg-brand-terracotta-50' 
                  : 'text-brand-ocean-600 hover:text-brand-terracotta-500 hover:bg-brand-ocean-50'
              )}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className={cn(
                'w-5 h-5 mb-1',
                isActive ? 'fill-current' : ''
              )} />
              <span className="text-[9px] font-medium leading-tight text-center truncate w-full px-1">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
