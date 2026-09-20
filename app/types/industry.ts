export type IndustryChallenge = {
    title: string;
    description: string;
    techNeed: string;
};

export type IndustryCapability = {
    title: string;
    description: string;
};

export type IndustryFeature = {
    title: string;
    description: string;
};

export type IndustryIntegrationItem = {
    name: string;
    type: string;
    description: string;
};

export type ProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type IndustryFAQItem = {
    question: string;
    answer: string;
};

export type RelatedIndustryRef = {
    name: string;
    slug: string;
    shortDescription: string;
    category?: string;
};

export type IndustryItem = {
    slug: string;
    name: string;
    category: string;
    categorySlug: string;
    shortDescription: string;
    description: string;
    iconName: string;
    heroImage?: string;
    overview: string;
    challenges: IndustryChallenge[];
    capabilities: IndustryCapability[];
    features: IndustryFeature[];
    integrations: IndustryIntegrationItem[];
    process: ProcessStep[];
    security: string[];
    compliance: string[];
    scalability: string[];
    relatedServices: { title: string; slug: string; shortDescription: string }[];
    relatedSolutions: { title: string; slug: string; shortDescription: string }[];
    relatedTechnologies: { name: string; slug: string; shortDescription: string }[];
    relatedIndustries: RelatedIndustryRef[];
    faqs: IndustryFAQItem[];
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
    status: 'active' | 'draft';
    featured?: boolean;
};

export type IndustryCategoryGroup = {
    id: string;
    name: string;
    slug: string;
    description: string;
    iconName: string;
    industries: {
        name: string;
        slug: string;
        shortDescription: string;
    }[];
};
