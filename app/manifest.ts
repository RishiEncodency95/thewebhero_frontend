import type { MetadataRoute } from 'next';

/** Web app manifest: lets visitors install the site to their home screen. */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TheWebHero - IT Services Company',
        short_name: 'TheWebHero',
        description: 'Web, mobile app, AI and IT solutions for growing businesses.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        categories: ['business', 'productivity'],
        icons: [
            { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
            { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        shortcuts: [
            { name: 'Get a Quote', url: '/get-a-quote' },
            { name: 'Services', url: '/services' },
            { name: 'Contact', url: '/contact' },
        ],
    };
}
