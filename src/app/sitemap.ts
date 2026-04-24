import { MetadataRoute } from 'next';
import { siteDetails } from '@/data/siteDetails';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteDetails.siteUrl;
    
    // Generate sitemap entries for each locale
    const routes = ['', '#features', '#testimonials', '#faq', '#stats', '#ceo', '#cta'];
    
    const sitemapEntries: MetadataRoute.Sitemap = [];
    
    // Add entries for each locale
    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1.0 : 0.8,
            });
        });
    });
    
    return sitemapEntries;
}
