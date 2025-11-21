import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.aheads.in';
    const currentDate = new Date().toISOString();

    // Define all service pages
    const servicePages = [
        'cloud-computing',
        'consulting-advisory',
        'iot',
        'it-infrastructure',
        'professional-services',
        'surveillance',
        'system-integration',
        'unified-communications'
    ];

    // Main pages with high priority
    const mainPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/integrations`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/why-us`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Service detail pages
    const servicePageSitemaps: MetadataRoute.Sitemap = servicePages.map((page) => ({
        url: `${baseUrl}/services/${page}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...mainPages, ...servicePageSitemaps];
}
