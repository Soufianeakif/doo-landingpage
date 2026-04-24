import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'as-needed'
});

export const config = {
    matcher: [
        // Skip all internal paths
        '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$).*)',
    ],
};
