export type ResourceType =
    | 'blog'
    | 'guide'
    | 'tutorial'
    | 'faq'
    | 'whitepaper'
    | 'ebook'
    | 'webinar'
    | 'glossary';

export type CodeBlock = {
    language: string;
    code: string;
    filename?: string;
    caption?: string;
};

export type TableOfContentsItem = {
    id: string;
    title: string;
    level: number;
};

export type ResourceRef = {
    title: string;
    slug: string;
    type: ResourceType;
    category?: string;
};

export type ServiceRef = {
    title: string;
    slug: string;
};

export type TechnologyRef = {
    name: string;
    slug: string;
};

export type IndustryRef = {
    title: string;
    slug: string;
};

export type SolutionRef = {
    title: string;
    slug: string;
};

export type ResourceItem = {
    slug: string;
    type: ResourceType;
    title: string;
    subtitle?: string;
    excerpt?: string;
    description?: string;
    content?: string;
    coverImage?: string;
    coverImageAlt?: string;
    category: string;
    categorySlug: string;
    topics: string[];
    featured?: boolean;
    status: 'active' | 'draft';
    publishedAt: string;
    updatedAt?: string;
    readingTime?: string;
    author?: {
        name: string;
        role?: string;
        avatar?: string;
    };

    // Taxonomy cross-references
    services?: ServiceRef[];
    technologies?: TechnologyRef[];
    industries?: IndustryRef[];
    solutions?: SolutionRef[];
    relatedResources?: ResourceRef[];

    // Guide / Tutorial specific
    difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
    prerequisites?: string[];
    estimatedTime?: string;
    steps?: {
        number: number;
        title: string;
        description: string;
        code?: CodeBlock;
    }[];
    codeBlocks?: CodeBlock[];
    tableOfContents?: TableOfContentsItem[];

    // FAQ specific
    question?: string;
    answer?: string;

    // Whitepaper / eBook specific
    downloadUrl?: string;
    fileSize?: string;
    pageCount?: number;
    tableOfContentsList?: string[];

    // Webinar specific
    eventDate?: string;
    eventTime?: string;
    duration?: string;
    isUpcoming?: boolean;
    speaker?: {
        name: string;
        title?: string;
    };
    registrationUrl?: string;
    recordingUrl?: string;

    // Glossary specific
    term?: string;
    letter?: string;
    definition?: string;
    relatedTerms?: string[];

    // SEO Metadata
    seoTitle: string;
    seoDescription: string;
    ogImage?: string;
};

export type ResourceFilterState = {
    searchQuery: string;
    type: string;
    topic: string;
    technology: string;
    industry: string;
};
