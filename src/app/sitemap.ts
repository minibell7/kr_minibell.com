import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mini-bell.com';

    // Static routes
    const routes = [
        '',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 1,
    }));

    // Project routes
    const projectRoutes = projects
        .filter((project) => project.url.startsWith('/'))
        .map((project) => ({
            url: `${baseUrl}${project.url}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }));

    return [...routes, ...projectRoutes];
}
