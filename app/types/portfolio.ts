export type ProjectTechnology = {
    name: string;
    slug?: string;
    category?: string;
    iconName?: string;
};

export type ProjectServiceRef = {
    title: string;
    slug: string;
    category?: string;
};

export type ProjectIndustryRef = {
    title: string;
    slug: string;
};

export type ProjectSolutionRef = {
    title: string;
    slug: string;
};

export type ProjectFeature = {
    title: string;
    description: string;
    iconName?: string;
};

export type ProjectGalleryItem = {
    url: string;
    alt: string;
    caption?: string;
    category?: string;
};

export type ProjectChallenge = {
    title: string;
    description: string;
    keyPoints?: string[];
};

export type ProjectObjective = {
    title: string;
    items: string[];
};

export type ProjectSolutionDetail = {
    summary: string;
    deliverables: string[];
    architectureNote?: string;
};

export type ProjectProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type PortfolioItem = {
    slug: string;
    title: string;
    subtitle?: string;
    shortDescription: string;
    description: string;
    coverImage: string;
    coverImageAlt?: string;
    featured?: boolean;
    status: 'active' | 'draft';
    projectType: string;
    industry: string;
    industrySlug?: string;
    platforms: string[];
    liveUrl?: string;
    clientVisibility?: 'public' | 'confidential' | 'generic';
    clientName?: string;
    
    // Taxonomy references
    services: ProjectServiceRef[];
    technologies: ProjectTechnology[];
    solutions?: ProjectSolutionRef[];
    industries?: ProjectIndustryRef[];
    
    // Extended Details
    challenge?: ProjectChallenge;
    objectives?: ProjectObjective;
    solutionDetails?: ProjectSolutionDetail;
    features: ProjectFeature[];
    gallery?: ProjectGalleryItem[];
    process?: ProjectProcessStep[];
    integrations?: string[];
    
    // Related References
    relatedProjectSlugs?: string[];
    
    // SEO
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
    publishedAt?: string;
    sortOrder?: number;
};

export type PortfolioFilterState = {
    searchQuery: string;
    service: string;
    technology: string;
    industry: string;
    projectType: string;
};
