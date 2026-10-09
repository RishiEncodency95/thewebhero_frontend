export type TechUseCase = {
    title: string;
    description: string;
};

export type TechCapability = {
    title: string;
    description: string;
};

export type TechFeature = {
    title: string;
    description: string;
};

export type TechEcosystemItem = {
    name: string;
    category: string;
    description: string;
};

export type TechIntegrationItem = {
    name: string;
    type: string;
    description: string;
};

export type ProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type TechFAQItem = {
    question: string;
    answer: string;
};

export type RelatedTechRef = {
    name: string;
    slug: string;
    shortDescription: string;
    category?: string;
};

export type TechnologyItem = {
    slug: string;
    name: string;
    /** Primary search keyword, e.g. "React Development". Drives H1, title and copy. */
    keyword: string;
    /** Who a client hires, e.g. "React developers". */
    role: string;
    category: string;
    categorySlug: string;
    shortDescription: string;
    description: string;
    iconName: string;
    heroImage?: string;
    overview: string;
    useCases: TechUseCase[];
    capabilities: TechCapability[];
    features: TechFeature[];
    ecosystem: TechEcosystemItem[];
    integrations: TechIntegrationItem[];
    process: ProcessStep[];
    security: string[];
    scalability: string[];
    relatedServices: { title: string; slug: string; shortDescription: string }[];
    relatedSolutions: { title: string; slug: string; shortDescription: string }[];
    relatedTechnologies: RelatedTechRef[];
    faqs: TechFAQItem[];
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
    status: 'active' | 'draft';
    featured?: boolean;
};

export type TechnologyCategoryGroup = {
    id: string;
    name: string;
    slug: string;
    description: string;
    iconName: string;
    technologies: {
        name: string;
        slug: string;
        shortDescription: string;
    }[];
};
