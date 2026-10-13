import type { PortfolioFilterState, PortfolioItem } from '../types/portfolio';

const lc = (v: unknown) => String(v ?? '').toLowerCase();

/** Applies the portfolio page's search box and dropdown filters to a project list. */
export function filterProjects(projects: PortfolioItem[], filters: PortfolioFilterState): PortfolioItem[] {
    const query = filters.searchQuery.trim().toLowerCase();

    return projects.filter((p) => {
        if (
            query &&
            ![p.title, p.shortDescription, p.description, p.industry, p.projectType].some((v) => lc(v).includes(query)) &&
            !p.technologies.some((t) => lc(t.name).includes(query)) &&
            !p.services.some((s) => lc(s.title).includes(query))
        ) {
            return false;
        }
        if (filters.service !== 'All') {
            const target = lc(filters.service);
            if (!p.services.some((s) => lc(s.title) === target || lc(s.slug) === target)) return false;
        }
        if (filters.technology !== 'All') {
            const target = lc(filters.technology);
            if (!p.technologies.some((t) => lc(t.name) === target || lc(t.slug) === target)) return false;
        }
        if (filters.industry !== 'All') {
            const target = lc(filters.industry);
            if (lc(p.industry) !== target && lc(p.industrySlug) !== target) return false;
        }
        if (filters.projectType !== 'All' && lc(p.projectType) !== lc(filters.projectType)) return false;
        return true;
    });
}

/** Distinct values for each filter dropdown, taken from the projects themselves. */
export function availableFilters(projects: PortfolioItem[]) {
    const sorted = (set: Set<string>) => [...set].filter(Boolean).sort();
    return {
        services: sorted(new Set(projects.flatMap((p) => p.services.map((s) => s.title)))),
        technologies: sorted(new Set(projects.flatMap((p) => p.technologies.map((t) => t.name)))),
        industries: sorted(new Set(projects.map((p) => p.industry))),
        projectTypes: sorted(new Set(projects.map((p) => p.projectType))),
    };
}
