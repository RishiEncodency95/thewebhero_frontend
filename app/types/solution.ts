export type SolutionChallenge = {
    title: string;
    description: string;
};

export type SolutionCapability = {
    title: string;
    description: string;
    iconName?: string;
};

export type SolutionFeature = {
    title: string;
    description: string;
};

export type SolutionAudienceItem = {
    title: string;
    description: string;
};

export type SolutionTechItem = {
    name: string;
    category?: string;
};

export type SolutionIntegrationItem = {
    name: string;
    type: string;
    description: string;
};

export type ProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type SolutionBenefit = {
    title: string;
    description: string;
};

export type SolutionFAQItem = {
    question: string;
    answer: string;
};

export type RelatedSolutionRef = {
    title: string;
    slug: string;
    shortDescription: string;
    category?: string;
};

export type SolutionItem = {
    slug: string;
    title: string;
    category: string;
    categorySlug: string;
    shortDescription: string;
    description: string;
    iconName: string;
    heroImage?: string;
    challenges: SolutionChallenge[];
    capabilities: SolutionCapability[];
    audience: SolutionAudienceItem[];
    features: SolutionFeature[];
    technologies: SolutionTechItem[];
    integrations: SolutionIntegrationItem[];
    process: ProcessStep[];
    benefits: SolutionBenefit[];
    security: string[];
    scalability: string[];
    relatedServices: { title: string; slug: string; shortDescription: string }[];
    relatedSolutions: RelatedSolutionRef[];
    faqs: SolutionFAQItem[];
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
    status: 'active' | 'draft';
    featured?: boolean;
};

export type SolutionCategoryGroup = {
    id: string;
    name: string;
    slug: string;
    description: string;
    iconName: string;
    solutions: {
        title: string;
        slug: string;
        shortDescription: string;
    }[];
};

export type BusinessNeedMapping = {
    needTitle: string;
    needDescription: string;
    iconName: string;
    solutions: {
        title: string;
        slug: string;
    }[];
};
