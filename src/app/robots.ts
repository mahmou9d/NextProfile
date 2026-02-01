import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/en/', '/ar/'],
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://webvitas.com/sitemap.xml',
    };
}