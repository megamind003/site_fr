import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { playfair, inter } from '../fonts';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { StickyMobileCTA } from '@/components/features/StickyMobileCTA';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Da Massy Ristorante | Cucina di Terra e Mare a Cerveteri',
  description:
    'Ristorante Da Massy a Cerveteri - Cucina mista di terra e mare. Ingredienti locali, tradizione e innovazione. Prenota il tuo tavolo.',
  keywords: [
    'ristorante cerveteri',
    'cucina terra e mare',
    'da massy',
    'ristorante lazio',
    'cucina romana',
    'pesce fresco cerveteri',
    'necropoli banditaccia',
  ],
  authors: [{ name: 'Da Massy Ristorante' }],
  openGraph: {
    title: 'Da Massy Ristorante | Cerveteri',
    description: 'Cucina mista di terra e mare nel cuore di Cerveteri',
    locale: 'it_IT',
    type: 'website',
  },
};

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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
