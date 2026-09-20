export type TechItem = {
    name: string;
    category?: string;
    iconName?: string;
};

export type ServiceCapability = {
    title: string;
    description: string;
    iconName?: string;
};

export type ProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type ServiceBenefit = {
    title: string;
    description: string;
};

export type ServiceFAQItem = {
    question: string;
    answer: string;
};

export type RelatedServiceRef = {
    title: string;
    slug: string;
    shortDescription: string;
    category?: string;
};

export type SubServiceItem = {
    title: string;
    slug: string;
    description: string;
};

export type ServiceItem = {
    slug: string;
    title: string;
    category: string;
    categorySlug: string;
    shortDescription: string;
    description: string;
    problemStatement?: string;
    iconName: string;
    heroImage?: string;
    capabilities: ServiceCapability[];
    subServices?: SubServiceItem[];
    technologies: TechItem[];
    deliverables: string[];
    process: ProcessStep[];
    benefits: ServiceBenefit[];
    faqs: ServiceFAQItem[];
    relatedServices: RelatedServiceRef[];
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
    status: 'active' | 'draft';
    featured?: boolean;
};

export type ServiceCategoryGroup = {
    id: string;
    name: string;
    slug: string;
    description: string;
    iconName: string;
    services: {
        title: string;
        slug: string;
        shortDescription: string;
    }[];
};
