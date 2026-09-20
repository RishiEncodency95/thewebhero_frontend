import {
    CompanyInfo,
    TeamMember,
    JobPosition,
    Testimonial,
    Partner,
    Award,
    CompanyProcessStep,
    CulturePrinciple,
} from '../types/company';

export const companyData: CompanyInfo = {
    name: 'TheWebHero',
    tagline: 'Engineering Modern Web Apps, Mobile Software & Custom Platforms',
    story: 'TheWebHero was founded to bridge the gap between complex software requirements and scalable, high-performance web engineering. We specialize in building custom full-stack web applications, cross-platform mobile software, and enterprise dashboards using modern stacks like Next.js, React, Node.js, and Flutter.',
    mission: 'To empower businesses with resilient, scalable, and beautifully engineered software solutions that drive real operational growth.',
    vision: 'To be the preferred software engineering partner for ambitious companies seeking high-quality web and mobile applications.',
    values: [
        {
            title: 'Technical Excellence',
            description: 'We write clean, well-tested, and maintainable code built to production standards.',
            iconName: 'Code'
        },
        {
            title: 'Transparent Communication',
            description: 'Clear project updates, sprint tracking, and honest technical guidance.',
            iconName: 'MessageSquare'
        },
        {
            title: 'User-Centric Design',
            description: 'Intuitive user interfaces built for speed, accessibility, and high conversion.',
            iconName: 'Layout'
        },
        {
            title: 'Reliable Delivery',
            description: 'On-time development milestones with comprehensive QA and deployment pipelines.',
            iconName: 'ShieldCheck'
        }
    ],
    capabilities: [
        'Full Stack Web Applications (React, Next.js, Node.js)',
        'Cross-Platform Mobile Apps (Flutter, React Native)',
        'Custom REST API & Backend Architecture',
        'Database Engineering (MongoDB, PostgreSQL, MySQL)',
        'Administrative Panels & Dashboards',
        'UI/UX Interface Design & Prototyping'
    ],
    contactEmail: 'contact@thewebhero.ai',
    contactPhone: '+1 (800) 555-HERO',
    address: 'Global Technology Services & Remote Engineering Hub',
    seoTitle: 'About TheWebHero | Software Engineering & Custom Web Development',
    seoDescription: 'Discover TheWebHero, a dedicated software development company specializing in Next.js web apps, Flutter mobile software, and custom backend platforms.'
};

export const teamMembers: TeamMember[] = [
    {
        slug: 'rohit-kumar-founder-lead-architect',
        name: 'Rohit Kumar',
        role: 'Founder & Lead Software Architect',
        photo: '/logo.png',
        bio: 'Rohit leads software engineering and product architecture at TheWebHero. With extensive experience in full-stack web platforms, Next.js, Node.js microservices, and mobile application engineering, he oversees project delivery across all technical domains.',
        expertise: ['Full-Stack Architecture', 'Next.js 15', 'Node.js & Express', 'MongoDB & MySQL', 'System Design'],
        responsibilities: [
            'Technical direction & architecture review',
            'Lead developer mentoring & code standards',
            'Client requirement scoping & strategy'
        ],
        socialLinks: {
            linkedin: 'https://linkedin.com/',
            github: 'https://github.com/'
        },
        status: 'active',
        sortOrder: 1
    }
];

export const processSteps: CompanyProcessStep[] = [
    {
        step: 1,
        title: 'Discovery & Consultation',
        description: 'We begin by understanding your business objectives, target audience, and key technical requirements.',
        keyActivities: ['Requirement gathering session', 'Technical feasibility check', 'Project scope definition'],
        deliverables: ['Scoping Document', 'Architecture Recommendation']
    },
    {
        step: 2,
        title: 'Requirement Analysis & Tech Stack Selection',
        description: 'Detailed analysis of functional requirements, system roles, database schemas, and framework selection.',
        keyActivities: ['Data flow mapping', 'Database schema modeling', 'API endpoint specification'],
        deliverables: ['Technical Specification Sheet', 'Project Roadmap']
    },
    {
        step: 3,
        title: 'Strategy & Wireframing',
        description: 'Designing user journeys, screen wireframes, and layout architecture for desktop and mobile devices.',
        keyActivities: ['UI layout sketching', 'User flow validation', 'Wireframe review'],
        deliverables: ['Interactive Wireframe Specs', 'User Flow Maps']
    },
    {
        step: 4,
        title: 'UI/UX Interface Design',
        description: 'Crafting modern, accessible, and high-conversion visual design components with Tailwind CSS styling.',
        keyActivities: ['Design token definition', 'Component styling', 'Responsive layout prototyping'],
        deliverables: ['High-Fidelity Screen Mockups', 'UI Component Guidelines']
    },
    {
        step: 5,
        title: 'Agile Full-Stack Development',
        description: 'Writing clean TypeScript code across frontend components, REST backend services, and database layers.',
        keyActivities: ['Sprint-based feature coding', 'REST API microservice integration', 'Database indexing'],
        deliverables: ['Staging Application Build', 'Clean Code Repository']
    },
    {
        step: 6,
        title: 'QA & Security Testing',
        description: 'Rigorous cross-browser testing, mobile responsiveness QA, performance tuning, and API security checks.',
        keyActivities: ['Cross-browser layout audit', 'Mobile device testing', 'API security header validation'],
        deliverables: ['QA Test Report', 'Performance Benchmark Summary']
    },
    {
        step: 7,
        title: 'Production Deployment',
        description: 'Deploying optimized builds to cloud hosting environments with SSL certificates, CDN routing, and monitoring.',
        keyActivities: ['Production build compilation', 'Domain & DNS setup', 'SSL & CDN configuration'],
        deliverables: ['Live Web Application', 'Production Server Setup']
    },
    {
        step: 8,
        title: 'Maintenance & Ongoing Support',
        description: 'Continuous monitoring, bug fixes, feature enhancements, and technical support following production release.',
        keyActivities: ['System uptime monitoring', 'Security updates', 'Iterative feature additions'],
        deliverables: ['Ongoing SLA Support', 'Maintenance Log']
    }
];

export const jobPositions: JobPosition[] = [
    {
        slug: 'full-stack-nextjs-developer',
        title: 'Full-Stack Next.js / Node.js Developer',
        department: 'Engineering',
        location: 'Remote',
        employmentType: 'Full-time',
        experience: '2+ years',
        description: 'We are seeking a skilled Full-Stack Developer proficient in Next.js App Router, React, TypeScript, Node.js, and MongoDB to build high-performance web applications.',
        responsibilities: [
            'Develop responsive frontend components using React, Next.js, and Tailwind CSS',
            'Build scalable REST API backend endpoints with Node.js and Express',
            'Optimize database schemas and queries in MongoDB and PostgreSQL',
            'Collaborate with UI/UX designers and technical leads on feature delivery'
        ],
        requiredSkills: [
            'Strong proficiency in TypeScript and JavaScript (ES6+)',
            'Hands-on experience with Next.js App Router and React Server Components',
            'Experience building REST APIs with Node.js & Express',
            'Familiarity with Tailwind CSS and Git version control'
        ],
        niceToHave: ['Experience with Flutter mobile development', 'Knowledge of Docker and AWS deployment'],
        benefits: ['Remote work flexibility', 'Competitive compensation', 'Continuous learning budget'],
        status: 'active',
        publishedAt: '2024-06-01'
    }
];

export const culturePrinciples: CulturePrinciple[] = [
    {
        title: 'Craftsmanship & Quality',
        description: 'We take pride in building software that is fast, resilient, and easy to maintain over time.',
        iconName: 'Award'
    },
    {
        title: 'Continuous Learning',
        description: 'Technology evolves rapidly. We constantly experiment with modern tools and frameworks.',
        iconName: 'BookOpen'
    },
    {
        title: 'Collaborative Ownership',
        description: 'Every team member has a voice and takes personal ownership of project quality.',
        iconName: 'Users'
    },
    {
        title: 'Work-Life Balance',
        description: 'Sustainable engineering requires focused deep work, rest, and mental clarity.',
        iconName: 'Smile'
    }
];

// Factual Trust Collections (Empty lists ready for approved records)
export const testimonials: Testimonial[] = [];
export const partners: Partner[] = [];
export const awards: Award[] = [];

// Helper Query Functions
export function getCompanyInfo(): CompanyInfo {
    return companyData;
}

export function getTeamMembers(): TeamMember[] {
    return teamMembers.filter((m) => m.status === 'active').sort((a, b) => (a.sortOrder || 99) - (b.sortOrder || 99));
}

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
    return teamMembers.find((m) => m.slug === slug);
}

export function getJobPositions(): JobPosition[] {
    return jobPositions.filter((j) => j.status === 'active');
}

export function getJobPositionBySlug(slug: string): JobPosition | undefined {
    return jobPositions.find((j) => j.slug === slug);
}

export function getProcessSteps(): CompanyProcessStep[] {
    return processSteps;
}

export function getCulturePrinciples(): CulturePrinciple[] {
    return culturePrinciples;
}

export function getTestimonials(): Testimonial[] {
    return testimonials.filter((t) => t.approvalStatus === 'approved');
}

export function getPartners(): Partner[] {
    return partners.filter((p) => p.approvalStatus === 'approved');
}

export function getAwards(): Award[] {
    return awards.filter((a) => a.approvalStatus === 'approved');
}
