import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, Locale, localeLabels } from '@/i18n/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    // Validate that the incoming locale parameter is valid
    if (!locales.includes(locale as Locale)) notFound();

    // Get direction for RTL support (Arabic)
    const dir = localeLabels[locale as Locale].dir;

    // Get messages for the current locale
    const messages = await getMessages();

    return (
        <html lang={locale} dir={dir}>
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
