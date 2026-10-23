import { getAllIndustries, getAllServices, getAllSolutions, getAllTechnologies } from './content';
import type { QuoteCatalog } from '../quote-options';

/** Just the names and slugs the quote form needs (keeps the full catalogue off the client). */
export async function getQuoteCatalog(): Promise<QuoteCatalog> {
    const [services, solutions, technologies, industries] = await Promise.all([
        getAllServices(),
        getAllSolutions(),
        getAllTechnologies(),
        getAllIndustries(),
    ]);
    const seen = new Set<string>();
    return {
        services: services.map(({ slug, title }) => ({ slug, title })),
        solutions: solutions.map(({ slug, title }) => ({ slug, title })),
        technologies: technologies.map(({ slug, name }) => ({ slug, name })),
        industries: industries
            .filter((i) => !seen.has(i.name) && seen.add(i.name))
            .map(({ slug, name }) => ({ slug, name })),
    };
}
