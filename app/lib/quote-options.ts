import { getAllServices } from './services';
import { getAllSolutions } from './solutions';
import { getAllTechnologies } from './technologies';
import { getAllIndustries } from './industries';

const servicesData = getAllServices();
const solutionsData = getAllSolutions();
const technologiesData = getAllTechnologies();
const industriesData = getAllIndustries();

export const SERVICE_OPTIONS = servicesData.map(s => s.title);

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

export const INDUSTRY_OPTIONS = Array.from(new Set(industriesData.map(i => i.name)));

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

/**
 * Resolves preselected values from URL query parameters safely
 */
export function getPreselectedQuoteOptions(params: {
    service?: string;
    solution?: string;
    technology?: string;
    industry?: string;
}) {
    let preselectedService = '';
    let preselectedIndustry = '';
    let defaultSummary = '';

    if (params.service) {
        const found = servicesData.find(s => s.slug.toLowerCase() === params.service?.toLowerCase());
        if (found) preselectedService = found.title;
    }

    if (!preselectedService && params.solution) {
        const foundSol = solutionsData.find(s => s.slug.toLowerCase() === params.solution?.toLowerCase());
        if (foundSol) {
            defaultSummary = `Inquiry related to Solution: ${foundSol.title}`;
        }
    }

    if (!preselectedService && params.technology) {
        const foundTech = technologiesData.find(t => t.slug.toLowerCase() === params.technology?.toLowerCase());
        if (foundTech) {
            defaultSummary = `Inquiry involving Technology: ${foundTech.name}`;
        }
    }

    if (params.industry) {
        const foundInd = industriesData.find(i => i.slug.toLowerCase() === params.industry?.toLowerCase());
        if (foundInd) preselectedIndustry = foundInd.name;
    }

    return {
        service: preselectedService,
        industry: preselectedIndustry,
        summary: defaultSummary
    };
}
