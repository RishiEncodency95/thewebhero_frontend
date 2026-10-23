/*
 * Fixed choices for the quote wizard. This file is imported by client
 * components, so it must not import the service/industry catalogues: those
 * come from the server as a small QuoteCatalog (see cms/quote-catalog.ts).
 */

export interface QuoteCatalog {
    services: { slug: string; title: string }[];
    solutions: { slug: string; title: string }[];
    technologies: { slug: string; name: string }[];
    industries: { slug: string; name: string }[];
}

export const PROJECT_TYPES = [
    'Custom Web Application',
    'Mobile App (iOS / Android)',
    'Enterprise SaaS Platform',
    'E-Commerce Store / Portal',
    'API & Backend Infrastructure',
    'UI/UX Redesign & Modernization',
    'Cloud Migration & DevOps',
    'AI & Automation Integration',
    'Desktop Software',
    'Maintenance & Managed Support',
    'Other / Custom Scope'
];

export const PLATFORM_OPTIONS = [
    'Web Desktop',
    'Web Mobile (Responsive)',
    'iOS (Native App)',
    'Android (Native App)',
    'Cross-Platform Mobile (React Native / Flutter)',
    'Desktop (Windows / macOS / Linux)',
    'Cloud / Serverless Microservices'
];

export const TECH_PREFERENCES_OPTIONS = [
    'Next.js / React',
    'Node.js / Express',
    'TypeScript',
    'Tailwind CSS',
    'Python / Django / FastAPI',
    'React Native / Flutter',
    'PostgreSQL / MongoDB / MySQL',
    'AWS / Google Cloud / Vercel',
    'Docker / Kubernetes',
    'OpenAI / AI LLMs'
];

export const BUDGET_RANGES = [
    'Under ₹1 Lakh',
    '₹1–5 Lakh',
    '₹5–10 Lakh',
    '₹10–25 Lakh',
    '₹25 Lakh+',
    'Prefer to discuss'
];

export const TIMELINE_RANGES = [
    'Immediate (< 2 weeks)',
    '1 – 2 Months',
    '2 – 4 Months',
    '4 – 6 Months',
    '6+ Months',
    'Flexible / Undecided'
];

export const PRIORITY_OPTIONS: ('Standard' | 'Urgent' | 'Flexible')[] = [
    'Standard',
    'Urgent',
    'Flexible'
];

export const CONTACT_METHODS: ('Email' | 'Phone' | 'WhatsApp')[] = [
    'Email',
    'Phone',
    'WhatsApp'
];

export const ALLOWED_FILE_TYPES = [
    '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx',
    '.png', '.jpg', '.jpeg', '.webp', '.zip'
];

export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

/** Resolves ?service=, ?solution=, ?technology= and ?industry= into form values. */
export function getPreselectedQuoteOptions(
    params: { service?: string; solution?: string; technology?: string; industry?: string },
    catalog: QuoteCatalog,
) {
    const bySlug = <T extends { slug: string }>(list: T[], slug?: string) =>
        slug ? list.find((x) => x.slug.toLowerCase() === slug.toLowerCase()) : undefined;

    const service = bySlug(catalog.services, params.service)?.title ?? '';
    let summary = '';
    if (!service) {
        const solution = bySlug(catalog.solutions, params.solution);
        const tech = bySlug(catalog.technologies, params.technology);
        if (solution) summary = `Inquiry related to Solution: ${solution.title}`;
        if (tech) summary = `Inquiry involving Technology: ${tech.name}`;
    }
    return { service, industry: bySlug(catalog.industries, params.industry)?.name ?? '', summary };
}
