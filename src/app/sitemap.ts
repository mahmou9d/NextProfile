import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://webvitas.com';

    return [
        {
            url: `${baseUrl}/en`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    ar: `${baseUrl}/ar`,
                },
            },
        },
        {
            url: `${baseUrl}/ar`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
            alternates: {
                languages: {
                    en: `${baseUrl}/en`,
                    ar: `${baseUrl}/ar`,
                },
            },
        },
    ];
}