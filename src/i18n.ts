import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !['it', 'en'].includes(locale)) {
    locale = 'it';
  }

  const messages = (await import(`./messages/${locale}/index`))[locale];

  return {
    locale,
    messages
  };
});