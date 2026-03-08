import { getRequestConfig } from 'next-intl/server';
import it from '../messages/it';
import en from '../messages/en';

export default getRequestConfig(async ({ locale }) => {
  const localeValid = locale || 'it';
  
  const messages = localeValid === 'en' ? en : it;

  return {
    locale: localeValid,
    messages
  };
});
