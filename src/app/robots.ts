import { MetadataRoute } from 'next';
import { siteDetails } from '@/data/siteDetails';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/', '/private/'],
        },
        sitemap: `${siteDetails.siteUrl}/sitemap.xml`,
    };
}
