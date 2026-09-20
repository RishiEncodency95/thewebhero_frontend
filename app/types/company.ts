export type CompanyValue = {
    title: string;
    description: string;
    iconName?: string;
};

export type CompanyInfo = {
    name: string;
    tagline: string;
    story: string;
    mission: string;
    vision: string;
    values: CompanyValue[];
    capabilities: string[];
    contactEmail: string;
    contactPhone?: string;
    address?: string;
    seoTitle: string;
    seoDescription: string;
};

export type TeamMember = {
    slug: string;
    name: string;
    role: string;
    photo: string;
    bio: string;
    expertise: string[];
    responsibilities?: string[];
    socialLinks?: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
    status: 'active' | 'draft';
    sortOrder?: number;
};

export type JobPosition = {
    slug: string;
    title: string;
    department: string;
    location: string;
    employmentType: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
    experience: string;
    description: string;
    responsibilities: string[];
    requiredSkills: string[];
    niceToHave?: string[];
    benefits?: string[];
    status: 'active' | 'closed' | 'draft';
    publishedAt: string;
};

export type Testimonial = {
    id: string;
    quote: string;
    authorName: string;
    authorRole?: string;
    companyName?: string;
    clientImage?: string;
    projectTitle?: string;
    rating?: number;
    approvalStatus: 'approved' | 'pending';
};

export type Partner = {
    id: string;
    name: string;
    logo?: string;
    category: string;
    description: string;
    websiteUrl?: string;
    approvalStatus: 'approved' | 'pending';
};

export type Award = {
    id: string;
    name: string;
    organization: string;
    year: number;
    category: string;
    description: string;
    verificationUrl?: string;
    approvalStatus: 'approved' | 'pending';
};

export type CompanyProcessStep = {
    step: number;
    title: string;
    description: string;
    keyActivities: string[];
    deliverables: string[];
};

export type CulturePrinciple = {
    title: string;
    description: string;
    iconName?: string;
};
