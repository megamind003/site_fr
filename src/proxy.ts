import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

export function proxy(request: Request) {
  const { pathname } = new URL(request.url);

  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = routing.defaultLocale;
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
  
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};