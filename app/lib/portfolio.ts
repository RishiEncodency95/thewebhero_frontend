import { PortfolioItem, PortfolioFilterState } from '../types/portfolio';
import { archivedCitycallsProjects } from './portfolioCitycallsBackup';

const citycallsProjects: PortfolioItem[] = archivedCitycallsProjects.map((p) => ({
    ...p,
    status: 'active',
    noIndex: true,
    seoTitle: '',
    seoDescription: '',
}));

export const portfolioProjects: PortfolioItem[] = [
    ...citycallsProjects,
    {
        slug: 'wingame11-quiz-gaming-platform',
        title: 'Wingame11',
        subtitle: 'Interactive Quiz & Skill Gaming Web Application',
        shortDescription: 'A dynamic web platform built for interactive quizzes, real-time leaderboards, and user skill-gaming competitions.',
        description: 'Wingame11 is an interactive quiz and skill gaming web application designed for high engagement and competition. The application features rapid question timing, dynamic scoring algorithms, secure user profile management, and multi-relational database storage for leaderboard rankings.',
        coverImage: '/projects/wingame11.png',
        coverImageAlt: 'Wingame11 gaming platform web page screenshot',
        featured: false,
        status: 'active',
        projectType: 'Web Application',
        industry: 'Gaming & Entertainment',
        industrySlug: 'enterprise-software',
        platforms: ['Web Application'],
        liveUrl: 'https://wingame11.com/',
        clientVisibility: 'public',
        clientName: 'Wingame11',
        sortOrder: 7,
        publishedAt: '2024-05-15',

        services: [
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'Full Stack Web Apps', slug: 'web-application-development', category: 'Core Development' },
            { title: 'Backend API Development', slug: 'api-development', category: 'Backend' },
            { title: 'Database Engineering', slug: 'database-design', category: 'Database' }
        ],
        technologies: [
            { name: 'React', slug: 'react', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'nodejs', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'MongoDB', slug: 'mongodb', category: 'Database', iconName: 'SiMongodb' },
            { name: 'MySQL', slug: 'mysql', category: 'Database', iconName: 'SiMysql' }
        ],
        solutions: [
            { title: 'Custom Web Apps', slug: 'enterprise-application-development' }
        ],

        challenge: {
            title: 'Technical Requirements',
            description: 'Building a responsive frontend with low-latency quiz timers while managing relational player data and MongoDB session records reliably.',
            keyPoints: [
                'Handling accurate synchronized countdown timers across diverse user browser engines',
                'Integrating hybrid database architecture using MySQL for user scores and MongoDB for sessions',
                'Ensuring secure game state tracking to prevent client-side answer tampering'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Deliver an engaging, responsive gaming user interface',
                'Build robust backend logic for quiz verification and leaderboard calculation',
                'Implement stable user session management for contest participation'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero constructed a React web frontend connected to Node.js backend microservices utilizing both MySQL relational tables and MongoDB document collections.',
            deliverables: [
                'Interactive React quiz gaming user application',
                'Server-side answer validation & scoring engine',
                'Relational database architecture for leaderboards'
            ]
        },

        features: [
            { title: 'Real-Time Quiz Engine', description: 'Low-latency question delivery with synchronized client-side timer UI components.', iconName: 'Gamepad2' },
            { title: 'Dynamic Leaderboards', description: 'Automated ranking calculations updating score positions after quiz completions.', iconName: 'Trophy' },
            { title: 'Secure Player Accounts', description: 'Encrypted authentication and match record histories for users.', iconName: 'UserCheck' }
        ],

        gallery: [
            { url: '/projects/wingame11.png', alt: 'Wingame11 gaming platform interface preview', caption: 'Wingame11 Web Portal Homepage' }
        ],

        seoTitle: 'Wingame11 Portfolio Project | Quiz & Gaming Web Platform - TheWebHero',
        seoDescription: 'Learn how TheWebHero created Wingame11, an interactive quiz and gaming web application built with React, Node.js, MongoDB, and MySQL.'
    }
];

// Helper Functions

export function getAllProjects(): PortfolioItem[] {
    return portfolioProjects
        .filter((project) => project.status === 'active')
        .sort((a, b) => (a.sortOrder || 99) - (b.sortOrder || 99));
}

export function getFeaturedProjects(): PortfolioItem[] {
    return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): PortfolioItem | undefined {
    return portfolioProjects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return portfolioProjects.map((project) => project.slug);
}

export function getIndexableProjectSlugs(): string[] {
    return portfolioProjects
        .filter((project) => project.status === 'active' && !project.noIndex)
        .map((project) => project.slug);
}

export function getFilteredProjects(filters: PortfolioFilterState): PortfolioItem[] {
    let projects = getAllProjects();

    // 1. Search Query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        projects = projects.filter((project) => {
            const matchTitle = project.title.toLowerCase().includes(query);
            const matchDesc = project.shortDescription.toLowerCase().includes(query) || project.description.toLowerCase().includes(query);
            const matchIndustry = project.industry.toLowerCase().includes(query);
            const matchProjectType = project.projectType.toLowerCase().includes(query);
            const matchTech = project.technologies.some((t) => t.name.toLowerCase().includes(query));
            const matchService = project.services.some((s) => s.title.toLowerCase().includes(query));

            return matchTitle || matchDesc || matchIndustry || matchProjectType || matchTech || matchService;
        });
    }

    // 2. Service Filter
    if (filters.service && filters.service !== 'All') {
        const targetService = filters.service.toLowerCase();
        projects = projects.filter((project) =>
            project.services.some(
                (s) => s.title.toLowerCase() === targetService || s.slug.toLowerCase() === targetService
            )
        );
    }

    // 3. Technology Filter
    if (filters.technology && filters.technology !== 'All') {
        const targetTech = filters.technology.toLowerCase();
        projects = projects.filter((project) =>
            project.technologies.some(
                (t) => t.name.toLowerCase() === targetTech || (t.slug && t.slug.toLowerCase() === targetTech)
            )
        );
    }

    // 4. Industry Filter
    if (filters.industry && filters.industry !== 'All') {
        const targetIndustry = filters.industry.toLowerCase();
        projects = projects.filter((project) =>
            project.industry.toLowerCase() === targetIndustry ||
            (project.industrySlug && project.industrySlug.toLowerCase() === targetIndustry)
        );
    }

    // 5. Project Type Filter
    if (filters.projectType && filters.projectType !== 'All') {
        const targetType = filters.projectType.toLowerCase();
        projects = projects.filter((project) => project.projectType.toLowerCase() === targetType);
    }

    return projects;
}

export function getAvailableFilters() {
    const projects = getAllProjects();

    const servicesSet = new Set<string>();
    const techSet = new Set<string>();
    const industrySet = new Set<string>();
    const projectTypeSet = new Set<string>();

    projects.forEach((p) => {
        p.services.forEach((s) => servicesSet.add(s.title));
        p.technologies.forEach((t) => techSet.add(t.name));
        industrySet.add(p.industry);
        projectTypeSet.add(p.projectType);
    });

    return {
        services: Array.from(servicesSet).sort(),
        technologies: Array.from(techSet).sort(),
        industries: Array.from(industrySet).sort(),
        projectTypes: Array.from(projectTypeSet).sort()
    };
}
