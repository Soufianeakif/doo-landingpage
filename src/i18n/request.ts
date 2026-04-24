import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    // Resolve requestLocale if it's a Promise
    const resolvedLocale = await Promise.resolve(requestLocale);
    
    // Validate locale
    const locale: Locale = resolvedLocale && locales.includes(resolvedLocale as Locale) 
        ? (resolvedLocale as Locale)
        : defaultLocale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    };
});
