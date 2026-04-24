export const locales = ['en', 'fr', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, { label: string; flag: string; dir: 'ltr' | 'rtl' }> = {
    en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
    fr: { label: 'Français', flag: '🇫🇷', dir: 'ltr' },
    ar: { label: 'العربية', flag: '🇲🇦', dir: 'rtl' },
};
