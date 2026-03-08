import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { playfair, inter } from '../fonts';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { StickyMobileCTA } from '@/components/features/StickyMobileCTA';
import { BottomNav } from '@/components/layout/BottomNav';

export const metadata: Metadata = {
  metadataBase: new URL('https://damassy.it'),
  title: 'Da Massy In Rosticceria | Pizzeria e Tavola Calda a Cerveteri',
  description: 'Pizzeria e tavola calda a Cerveteri. Menu variabile ogni giorno, pizza sempre disponibile. Pranzo 12-14 con banco completo, cena focus sulla pizza.',
  keywords: ['pizzeria', 'tavola calda', 'cerveteri', 'ristorante', 'pizza al taglio', 'pranzo', 'cena', 'da massy'],
  authors: [{ name: 'Da Massy In Rosticceria' }],
  openGraph: {
    title: 'Da Massy In Rosticceria | Pizzeria e Tavola Calda',
    description: 'Pizzeria e tavola calda a Cerveteri. Menu variabile ogni giorno, pizza sempre disponibile.',
    url: 'https://damassy.it',
    siteName: 'Da Massy In Rosticceria',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Da Massy In Rosticceria - Pizzeria e Tavola Calda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Da Massy In Rosticceria',
    description: 'Pizzeria e tavola calda a Cerveteri',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  if (!routing.locales.includes(locale as 'it' | 'en')) {
    return null;
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <StickyMobileCTA />
          <BottomNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
