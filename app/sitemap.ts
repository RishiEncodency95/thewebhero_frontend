import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/site';
import { getAllServiceSlugs } from './lib/services';
import { getAllSolutionSlugs } from './lib/solutions';
import { getAllIndustrySlugs } from './lib/industries';
import { getAllTechSlugs } from './lib/technologies';
import { getAllProjectSlugs } from './lib/portfolio';
import { getAllResources } from './lib/resources';
import { getTeamMembers, getJobPositions } from './lib/company';
import { TOP_CITIES, TOP_COUNTRIES } from './lib/locationsData';

type Entry = MetadataRoute.Sitemap[number];

const now = new Date();

const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry['changeFrequency'] = 'monthly'
): Entry => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
});

/**
 * Sitemap pehle site par tha hi nahi — 378 pages me se Google ko sirf wahi
 * milte the jo internal links se crawl ho paate. Ab sab listed hain,
 * priority ke hisaab se: paise wale pages (services/solutions) upar.
 */
// output: 'export' ke saath ye zaroori hai — warna build fail hota hai
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const resources = getAllResources();
    const bySlugType = (type: string) =>
        resources.filter((r) => r.type === type).map((r) => r.slug);

    return [
        // ── Core ──────────────────────────────────────────────────────
        entry('', 1.0, 'weekly'),
        entry('/services', 0.9, 'weekly'),
        entry('/solutions', 0.9, 'weekly'),
        entry('/industries', 0.9, 'weekly'),
        entry('/technologies', 0.9, 'weekly'),
        entry('/portfolio', 0.9, 'weekly'),
        entry('/get-a-quote', 0.9, 'monthly'),
        entry('/contact', 0.8, 'monthly'),

        // ── Money pages ───────────────────────────────────────────────
        ...getAllServiceSlugs().map((s) => entry(`/services/${s}`, 0.8)),
        ...getAllSolutionSlugs().map((s) => entry(`/solutions/${s}`, 0.8)),
        ...getAllIndustrySlugs().map((s) => entry(`/industries/${s}`, 0.7)),
        ...getAllTechSlugs().map((s) => entry(`/technologies/${s}`, 0.7)),
        ...getAllProjectSlugs().map((s) => entry(`/portfolio/${s}`, 0.7)),

        // ── Local SEO ─────────────────────────────────────────────────
        ...TOP_CITIES.map((c) => entry(`/locations/city/${c.slug}`, 0.7)),
        ...TOP_COUNTRIES.map((c) => entry(`/locations/country/${c.slug}`, 0.6)),

        // ── Company ───────────────────────────────────────────────────
        entry('/company', 0.7),
        entry('/company/about', 0.7),
        entry('/company/why-us', 0.6),
        entry('/company/process', 0.6),
        entry('/company/team', 0.6),
        entry('/company/culture', 0.5),
        entry('/company/careers', 0.6, 'weekly'),
        entry('/company/testimonials', 0.5),
        entry('/company/partners', 0.5),
        entry('/company/awards', 0.5),
        ...getTeamMembers().map((m) => entry(`/company/team/${m.slug}`, 0.4)),
        ...getJobPositions().map((j) => entry(`/company/careers/${j.slug}`, 0.5, 'weekly')),

        // ── Resources ─────────────────────────────────────────────────
        entry('/resources', 0.7, 'weekly'),
        entry('/resources/blog', 0.7, 'weekly'),
        entry('/resources/guides', 0.6, 'weekly'),
        entry('/resources/tutorials', 0.6, 'weekly'),
        entry('/resources/faqs', 0.6),
        entry('/resources/glossary', 0.5),
        entry('/resources/whitepapers', 0.5),
        entry('/resources/webinars', 0.5),
        entry('/resources/industry-insights', 0.5),
        entry('/resources/technology-insights', 0.5),
        entry('/resources/company-updates', 0.4),
        ...bySlugType('blog').map((s) => entry(`/resources/blog/${s}`, 0.6, 'weekly')),
        ...bySlugType('guide').map((s) => entry(`/resources/guides/${s}`, 0.6)),
        ...bySlugType('tutorial').map((s) => entry(`/resources/tutorials/${s}`, 0.6)),

        // ── Legal ─────────────────────────────────────────────────────
        entry('/privacy-policy', 0.3, 'yearly'),
        entry('/terms-and-conditions', 0.3, 'yearly'),
    ];
}
