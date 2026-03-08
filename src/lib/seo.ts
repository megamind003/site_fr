import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  locale?: string;
  type?: 'website' | 'restaurant' | 'article';
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export function generateSEO({
  title,
  description,
  canonical,
  image = '/images/og-default.jpg',
  locale = 'it',
  type = 'restaurant',
}: SEOConfig): Metadata {
  const seo: Metadata = {
    title: {
      default: title,
      template: `%s | Da Massy`,
    },
    description,
    keywords: [
      'ristorante',
      'Cerveteri',
      'cucina italiana',
      'prenotazioni',
      'ristorante terra e mare',
      'Via Prato del Cavaliere',
    ],
    authors: [{ name: 'Da Massy Ristorante' }],
    creator: 'Da Massy Ristorante',
    publisher: 'Da Massy Ristorante',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonical || '/',
      languages: {
        'it': '/it' + (canonical || ''),
        'en': '/en' + (canonical || ''),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical ? `${BASE_URL}${canonical}` : BASE_URL,
      siteName: 'Da Massy Ristorante',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type,
    } as any,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@damassycerveteri',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };

  return seo;
}

export const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Da Massy',
  description: 'Ristorante di cucina mista terra e mare a Cerveteri',
  image: `${BASE_URL}/images/og-default.jpg`,
  url: BASE_URL,
  telephone: '+39061234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Prato del Cavaliere, 7',
    addressLocality: 'Cerveteri',
    addressRegion: 'RM',
    postalCode: '00052',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.0069,
    longitude: 12.1019,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
      opens: '09:30',
      closes: '22:00',
    },
  ],
  servesCuisine: ['Italian', 'Mediterranean', 'Seafood'],
  priceRange: '€€',
  acceptsReservations: true,
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Da Massy',
  image: `${BASE_URL}/images/og-default.jpg`,
  url: BASE_URL,
  telephone: '+39061234567',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Via Prato del Cavaliere, 7',
    addressLocality: 'Cerveteri',
    addressRegion: 'RM',
    postalCode: '00052',
    addressCountry: 'IT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.0069,
    longitude: 12.1019,
  },
  openingHours: 'We-Mo 09:30-22:00',
};
