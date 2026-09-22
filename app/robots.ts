import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';

// output: 'export' ke saath ye zaroori hai — warna build fail hota hai
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                // Search results page index mat karo — thin/duplicate content
                disallow: ['/api/', '/resources/search'],
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
