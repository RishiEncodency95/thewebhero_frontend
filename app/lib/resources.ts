import { ResourceItem, ResourceFilterState, ResourceType } from '../types/resource';

export const resourcesData: ResourceItem[] = [
    // -------------------------------------------------------------
    // BLOG ARTICLES
    // -------------------------------------------------------------
    {
        slug: 'nextjs-15-app-router-architecture-guide',
        type: 'blog',
        title: 'Architecting Scalable Web Applications with Next.js 15 App Router',
        subtitle: 'Best practices for Server Components, Data Caching, and Streaming UI',
        excerpt: 'Explore architectural patterns for building high-performance web applications using Next.js 15 App Router, React Server Components, and optimized server state.',
        description: 'Next.js 15 introduces powerful enhancements to Server Components, async request handling, and Turbopack bundler workflows. In this technical deep dive, we examine modern patterns for structuring Next.js App Router applications for enterprise scale.',
        coverImage: '/projects/citycalls.png',
        coverImageAlt: 'Next.js 15 App Router Architecture Diagram',
        category: 'Technology Insights',
        categorySlug: 'technology-insights',
        topics: ['Next.js', 'React', 'Web Development', 'Architecture'],
        featured: true,
        status: 'active',
        publishedAt: '2024-06-15',
        updatedAt: '2024-06-20',
        readingTime: '8 min read',
        author: {
            name: 'TheWebHero Engineering Team'
        },
        services: [
            { title: 'Web Development', slug: 'web-development' },
            { title: 'Full Stack Web Apps', slug: 'full-stack-web-apps' }
        ],
        technologies: [
            { name: 'Next.js', slug: 'nextjs-development' },
            { name: 'React', slug: 'react-js-development' },
            { name: 'TypeScript', slug: 'typescript-development' }
        ],
        tableOfContents: [
            { id: 'introduction', title: 'Introduction to Next.js 15 App Router', level: 2 },
            { id: 'server-components', title: 'Leveraging React Server Components', level: 2 },
            { id: 'caching-strategies', title: 'Data Caching & Revalidation', level: 2 },
            { id: 'performance-tuning', title: 'Performance Tuning & Bundle Optimization', level: 2 }
        ],
        content: `
## Introduction to Next.js 15 App Router

Modern web engineering demands high performance, rapid page load speeds, and efficient search engine indexing. Next.js 15's App Router architecture provides a paradigm shift by shifting initial component rendering to the server by default.

### Key Benefits of App Router:
- **Zero Bundle Size Impact**: Server Components render HTML without adding JavaScript bytes to client downloads.
- **Granular Streaming**: Layouts and nested pages stream content progressively using React Suspense boundaries.
- **Unified Routing**: File-system based routing with parallel routes and intercepting routes.

## Leveraging React Server Components

By default, every component inside the \`app\` directory is a Server Component unless explicitly designated with the \`'use client'\` directive.

\`\`\`tsx
// Example Server Component fetching data directly
import { getProjectBySlug } from '@/lib/portfolio';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  
  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-slate-600">{project.description}</p>
    </article>
  );
}
\`\`\`

## Data Caching & Revalidation

Next.js 15 refined caching behavior to give developers explicit control over dynamic vs cached data fetching. Using time-based revalidation (\`revalidate\`) or tag-based revalidation (\`revalidateTag\`) ensures optimal freshness without unnecessary database strain.

## Performance Tuning & Bundle Optimization

To ensure optimal performance, keep client components leaf-level in the component tree, utilize font optimization with \`next/font\`, and leverage \`next/image\` for responsive image sizing and automatic WebP conversion.
        `,
        seoTitle: 'Next.js 15 App Router Architecture Guide | TheWebHero Insights',
        seoDescription: 'Learn proven architectural patterns for building scalable Next.js 15 App Router web applications with React Server Components.'
    },

    {
        slug: 'building-resilient-flutter-mobile-apps',
        type: 'blog',
        title: 'Building Resilient Cross-Platform Mobile Apps with Flutter & Node.js',
        subtitle: 'Cross-platform mobile state management, API integration, and offline caching',
        excerpt: 'How to build high-performance iOS and Android apps using Flutter frontend and Node.js REST API backend.',
        description: 'Flutter empowers teams to deliver native mobile user interfaces for both iOS and Android from a unified codebase. Discover strategies for state management, offline synchronization, and secure REST API communications.',
        coverImage: '/projects/citycalls-customer-app.png',
        coverImageAlt: 'Flutter Cross-Platform Mobile Application Development',
        category: 'Technology Insights',
        categorySlug: 'technology-insights',
        topics: ['Flutter', 'Mobile Apps', 'Node.js', 'Cross-Platform'],
        featured: false,
        status: 'active',
        publishedAt: '2024-05-20',
        readingTime: '6 min read',
        author: {
            name: 'TheWebHero Mobile Engineering Team'
        },
        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development' },
            { title: 'Flutter App Development', slug: 'flutter-app-development' }
        ],
        technologies: [
            { name: 'Flutter', slug: 'flutter-app-development' },
            { name: 'Node.js', slug: 'node-js-development' }
        ],
        seoTitle: 'Building Resilient Flutter Mobile Apps | TheWebHero Blog',
        seoDescription: 'Discover best practices for building cross-platform Flutter mobile applications integrated with Node.js REST API microservices.'
    },

    {
        slug: 'modern-web-security-best-practices',
        type: 'blog',
        title: 'Essential Security Best Practices for Web & API Applications',
        subtitle: 'Protecting user authentication, JWT tokens, and REST API endpoints',
        excerpt: 'A comprehensive checklist for securing web applications against OWASP Top 10 vulnerabilities, unauthorized API access, and data leaks.',
        description: 'Web security must be engineered into every layer of software development. Explore essential techniques for authentication token management, SQL/NoSQL injection protection, CORS configuration, and HTTPS security headers.',
        coverImage: '/projects/citycalls-admin.png',
        coverImageAlt: 'Web Security and API Authentication Best Practices',
        category: 'Industry Insights',
        categorySlug: 'industry-insights',
        topics: ['Security', 'API', 'Web Development', 'Backend'],
        featured: false,
        status: 'active',
        publishedAt: '2024-04-10',
        readingTime: '7 min read',
        author: {
            name: 'TheWebHero Security Group'
        },
        services: [
            { title: 'Custom Backend API', slug: 'custom-api-backend-development' }
        ],
        technologies: [
            { name: 'Node.js', slug: 'node-js-development' },
            { name: 'Express.js', slug: 'express-js-development' }
        ],
        seoTitle: 'Web Application Security Best Practices | TheWebHero',
        seoDescription: 'Explore key web and REST API security practices to protect software applications from vulnerabilities and unauthorized access.'
    },

    // -------------------------------------------------------------
    // GUIDES
    // -------------------------------------------------------------
    {
        slug: 'web-development-buyers-guide-2025',
        type: 'guide',
        title: 'The Enterprise Web Development Buyer Guide',
        subtitle: 'How to evaluate tech stacks, scoping, timeline estimation, and developer selection',
        excerpt: 'A comprehensive guide for decision-makers planning custom web application development, platform modernization, or digital portal builds.',
        description: 'Planning a major web development project requires understanding tech choices, architecture tradeoffs, security standards, and implementation methodologies. This guide helps business leaders evaluate technology choices and select optimal development paths.',
        coverImage: '/projects/helpnow.png',
        coverImageAlt: 'Web Development Buyer Guide',
        category: 'Web Development',
        categorySlug: 'web-development',
        topics: ['Web Development', 'Enterprise Software', 'Technology Planning'],
        difficulty: 'Intermediate',
        readingTime: '12 min read',
        status: 'active',
        publishedAt: '2024-05-01',
        services: [
            { title: 'Web Development', slug: 'web-development' },
            { title: 'Full Stack Web Apps', slug: 'full-stack-web-apps' }
        ],
        tableOfContents: [
            { id: 'scoping', title: '1. Scoping & Requirement Gathering', level: 2 },
            { id: 'tech-stack', title: '2. Selecting the Right Tech Stack', level: 2 },
            { id: 'architecture', title: '3. Monolith vs Microservices vs Serverless', level: 2 },
            { id: 'budgeting', title: '4. Estimating Budgets & Timeline Milestones', level: 2 }
        ],
        seoTitle: 'Enterprise Web Development Buyers Guide | TheWebHero Guides',
        seoDescription: 'Learn how to plan, scope, and select technology stacks for custom web development and enterprise web applications.'
    },

    {
        slug: 'mobile-app-development-frameworks-comparison',
        type: 'guide',
        title: 'Cross-Platform vs Native Mobile App Development Guide',
        subtitle: 'Comparing Flutter, React Native, iOS Swift, and Android Kotlin',
        excerpt: 'An objective guide to choosing between Flutter, React Native, and native mobile development for iOS and Android apps.',
        description: 'Selecting the right mobile development framework impacts time-to-market, budget, maintenance, and app performance. This guide compares native iOS/Android development with Flutter and React Native cross-platform frameworks.',
        coverImage: '/projects/citycalls-vendor-app.png',
        category: 'Mobile App Development',
        categorySlug: 'mobile-app-development',
        topics: ['Mobile Apps', 'Flutter', 'React Native', 'iOS', 'Android'],
        difficulty: 'Beginner',
        readingTime: '10 min read',
        status: 'active',
        publishedAt: '2024-04-15',
        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development' },
            { title: 'Flutter App Development', slug: 'flutter-app-development' }
        ],
        seoTitle: 'Cross-Platform vs Native Mobile App Development Guide | TheWebHero',
        seoDescription: 'Compare Flutter, React Native, and native mobile development to make informed choices for your mobile app project.'
    },

    // -------------------------------------------------------------
    // TUTORIALS
    // -------------------------------------------------------------
    {
        slug: 'nextjs-typescript-tailwind-setup-tutorial',
        type: 'tutorial',
        title: 'Setting Up a Next.js 15 Project with TypeScript & Tailwind CSS',
        subtitle: 'Step-by-step setup tutorial for modern web projects',
        excerpt: 'Learn how to create a production-ready Next.js 15 project with TypeScript, Tailwind CSS, ESLint, and Lucide React icons.',
        description: 'Follow this step-by-step tutorial to configure a new Next.js 15 web application with strict TypeScript type checking, Tailwind CSS utility styling, and clean component structure.',
        category: 'Next.js',
        categorySlug: 'nextjs',
        topics: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
        difficulty: 'Beginner',
        estimatedTime: '15 minutes',
        status: 'active',
        publishedAt: '2024-06-01',
        technologies: [
            { name: 'Next.js', slug: 'nextjs-development' },
            { name: 'React', slug: 'react-js-development' },
            { name: 'TypeScript', slug: 'typescript-development' }
        ],
        prerequisites: ['Node.js v18.17 or higher installed', 'Basic familiarity with Terminal and React'],
        steps: [
            {
                number: 1,
                title: 'Initialize Next.js Project',
                description: 'Run create-next-app with TypeScript and Tailwind CSS enabled in non-interactive mode.',
                code: {
                    language: 'bash',
                    code: 'npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir=false --use-npm'
                }
            },
            {
                number: 2,
                title: 'Install Lucide React Icons',
                description: 'Add icon dependencies for clean UI icon rendering.',
                code: {
                    language: 'bash',
                    code: 'npm install lucide-react'
                }
            },
            {
                number: 3,
                title: 'Configure Tailwind & Run Development Server',
                description: 'Start your development server and verify hot module reloading.',
                code: {
                    language: 'bash',
                    code: 'npm run dev'
                }
            }
        ],
        seoTitle: 'Next.js 15 + TypeScript + Tailwind Setup Tutorial | TheWebHero',
        seoDescription: 'Step-by-step tutorial to quickly set up a production Next.js 15 application with TypeScript and Tailwind CSS.'
    },

    {
        slug: 'express-mongodb-rest-api-tutorial',
        type: 'tutorial',
        title: 'Building a Secure REST API with Node.js, Express, and MongoDB',
        subtitle: 'Creating CRUD endpoints, Mongoose models, and JWT authentication',
        excerpt: 'Learn how to build, structure, and secure a RESTful API backend using Node.js, Express.js, and MongoDB Mongoose ORM.',
        description: 'Step-by-step guide to building a modular REST API backend with user authentication, route handlers, error handling middleware, and MongoDB database models.',
        category: 'Node.js',
        categorySlug: 'nodejs',
        topics: ['Node.js', 'Express', 'MongoDB', 'REST API'],
        difficulty: 'Intermediate',
        estimatedTime: '30 minutes',
        status: 'active',
        publishedAt: '2024-05-10',
        technologies: [
            { name: 'Node.js', slug: 'node-js-development' },
            { name: 'Express.js', slug: 'express-js-development' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions' }
        ],
        seoTitle: 'Build a REST API with Node.js & MongoDB Tutorial | TheWebHero',
        seoDescription: 'Learn how to build a production REST API with Node.js, Express, and MongoDB Mongoose step by step.'
    },

    // -------------------------------------------------------------
    // FAQS
    // -------------------------------------------------------------
    {
        slug: 'what-services-does-thewebhero-provide',
        type: 'faq',
        title: 'What software development services does TheWebHero provide?',
        category: 'Services FAQs',
        categorySlug: 'services',
        question: 'What software development services does TheWebHero provide?',
        answer: 'TheWebHero delivers end-to-end IT software services including Web Development (React, Next.js, Node.js), Mobile App Development (Flutter, React Native), Custom Software Engineering, UI/UX Design, Cloud & DevOps Infrastructure, and Backend REST API Development.',
        topics: ['Services', 'Web Development', 'Mobile Apps'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What Services Does TheWebHero Provide? | FAQ',
        seoDescription: 'Learn about the full-stack web, mobile, custom software, and API services provided by TheWebHero.'
    },

    {
        slug: 'what-technologies-do-you-use-for-web-development',
        type: 'faq',
        title: 'What technology stack does TheWebHero use for web projects?',
        category: 'Technology FAQs',
        categorySlug: 'technology',
        question: 'What technology stack does TheWebHero use for web projects?',
        answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. We pick the optimal stack based on performance, scalability, security, and project requirements.',
        topics: ['Technology', 'React', 'Next.js', 'Node.js'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'Technology Stack FAQ | TheWebHero',
        seoDescription: 'Discover the tech stack and frameworks used by TheWebHero for web and mobile development projects.'
    },

    {
        slug: 'how-long-does-it-take-to-build-a-custom-web-application',
        type: 'faq',
        title: 'How long does custom web application development take?',
        category: 'General FAQs',
        categorySlug: 'general',
        question: 'How long does custom web application development take?',
        answer: 'Project timelines vary depending on scope and complexity. Standard web MVP applications typically require 4 to 8 weeks, while complex multi-role platforms or mobile ecosystems range from 10 to 16 weeks with clear sprint milestones.',
        topics: ['General', 'Timeline', 'Web Development'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'Development Timeline FAQ | TheWebHero',
        seoDescription: 'Find out how long custom web and mobile software development projects take from scoping to deployment.'
    },

    // -------------------------------------------------------------
    // WHITEPAPERS & EBOOKS
    // -------------------------------------------------------------
    {
        slug: 'modern-web-architecture-whitepaper',
        type: 'whitepaper',
        title: 'Modernizing Legacy Web Applications for High Scalability',
        subtitle: 'Architectural blueprints for transitioning monolithic web code bases to modular Next.js and REST microservices',
        excerpt: 'A technical whitepaper examining migration pathways, performance benchmarks, and API architecture for enterprise web modernization.',
        description: 'This whitepaper provides an engineering blueprint for technical leaders planning to modernize monolithic web applications using Next.js App Router, microservices, and modern database architectures.',
        category: 'Whitepapers',
        categorySlug: 'whitepapers',
        topics: ['Architecture', 'Web Modernization', 'Next.js', 'Microservices'],
        fileSize: '2.4 MB',
        pageCount: 16,
        status: 'active',
        publishedAt: '2024-05-15',
        seoTitle: 'Modernizing Legacy Web Applications Whitepaper | TheWebHero',
        seoDescription: 'Download our technical whitepaper on modernizing legacy web codebases with Next.js and REST microservices.'
    },

    {
        slug: 'cross-platform-mobile-development-ebook',
        type: 'ebook',
        title: 'The Ultimate Guide to Cross-Platform Mobile Architecture',
        subtitle: 'Building iOS and Android apps with Flutter and Node.js',
        excerpt: 'An actionable eBook covering Flutter UI patterns, state management, API design, and app store deployment workflows.',
        description: 'Learn how to build and maintain cross-platform mobile apps for iOS and Android using Flutter, Node.js backend services, and scalable state management.',
        category: 'eBooks',
        categorySlug: 'ebooks',
        topics: ['Mobile Apps', 'Flutter', 'iOS', 'Android'],
        fileSize: '3.8 MB',
        pageCount: 24,
        status: 'active',
        publishedAt: '2024-04-20',
        seoTitle: 'Cross-Platform Mobile Development eBook | TheWebHero',
        seoDescription: 'Download our comprehensive eBook guide to building cross-platform mobile apps with Flutter.'
    },

    // -------------------------------------------------------------
    // WEBINARS
    // -------------------------------------------------------------
    {
        slug: 'nextjs-15-performance-optimization-webinar',
        type: 'webinar',
        title: 'Mastering Next.js 15 App Router & Server Performance',
        subtitle: 'Live engineering webinar and technical Q&A',
        excerpt: 'Watch our recorded engineering session on tuning Next.js 15 App Router performance, Server Components, and bundle optimization.',
        description: 'In this technical webinar recording, our lead engineers walk through real-world Next.js 15 performance optimization techniques, React Server Component patterns, and streaming server responses.',
        category: 'Webinar Recordings',
        categorySlug: 'recordings',
        topics: ['Next.js', 'React', 'Performance', 'Web Development'],
        duration: '45 mins',
        isUpcoming: false,
        eventDate: '2024-06-10',
        recordingUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        status: 'active',
        publishedAt: '2024-06-10',
        seoTitle: 'Next.js 15 Performance Webinar Recording | TheWebHero',
        seoDescription: 'Watch our technical engineering webinar recording on optimizing Next.js 15 App Router performance.'
    },

    // -------------------------------------------------------------
    // GLOSSARY TERMS
    // -------------------------------------------------------------
    {
        slug: 'react-server-components-rsc',
        type: 'glossary',
        title: 'React Server Components (RSC)',
        term: 'React Server Components (RSC)',
        letter: 'R',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'React components rendered exclusively on the server, outputting HTML without bundling JavaScript to the browser.',
        description: 'React Server Components (RSC) are a feature in React 18+ and Next.js App Router that allows developers to write components that execute exclusively on the server. Because their code does not run on the client, RSCs do not increase the JavaScript bundle size shipped to user devices.',
        definition: 'React Server Components (RSC) are React components that render exclusively on the server side, allowing direct database access and zero client-side JavaScript bundle overhead for data rendering.',
        relatedTerms: ['Next.js App Router', 'Server-Side Rendering (SSR)', 'Hydration'],
        topics: ['React', 'Next.js', 'Web Development'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What are React Server Components (RSC)? | Glossary',
        seoDescription: 'Learn what React Server Components (RSC) are, how they work in Next.js, and why they improve web app performance.'
    },

    {
        slug: 'rest-api',
        type: 'glossary',
        title: 'REST API (Representational State Transfer)',
        term: 'REST API',
        letter: 'R',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'An architectural style for network applications using HTTP requests to GET, POST, PUT, and DELETE data.',
        description: 'A REST API (Representational State Transfer Application Programming Interface) is an architectural style for network communication between client applications (web/mobile) and server backend databases using standard HTTP methods.',
        definition: 'A REST API is a standardized HTTP-based architectural pattern allowing web and mobile applications to exchange structured JSON data with server backends safely and efficiently.',
        relatedTerms: ['Node.js', 'Express.js', 'JSON', 'Endpoints'],
        topics: ['Backend', 'API', 'Node.js'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What is a REST API? | Software Glossary - TheWebHero',
        seoDescription: 'Understand the definition and function of REST APIs in modern web and mobile software development.'
    },

    {
        slug: 'cross-platform-development',
        type: 'glossary',
        title: 'Cross-Platform App Development',
        term: 'Cross-Platform Development',
        letter: 'C',
        category: 'Glossary',
        categorySlug: 'glossary',
        excerpt: 'The process of writing software applications that run on multiple operating systems (iOS & Android) from a single shared codebase.',
        description: 'Cross-platform app development allows engineers to build mobile applications for iOS and Android using unified frameworks like Flutter or React Native, reducing duplicate codebase maintenance.',
        definition: 'Cross-platform development is the practice of building software applications that target multiple operating systems (such as iOS, Android, and Web) using a single codebase.',
        relatedTerms: ['Flutter', 'React Native', 'Mobile App Development'],
        topics: ['Mobile Apps', 'Flutter', 'Cross-Platform'],
        status: 'active',
        publishedAt: '2024-01-01',
        seoTitle: 'What is Cross-Platform App Development? | Glossary',
        seoDescription: 'Definition and benefits of cross-platform mobile application development using frameworks like Flutter.'
    }
];

// Helper Query Functions

export function getAllResources(): ResourceItem[] {
    return resourcesData
        .filter((res) => res.status === 'active')
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getResourcesByType(type: ResourceType): ResourceItem[] {
    return getAllResources().filter((res) => res.type === type);
}

export function getFeaturedResources(): ResourceItem[] {
    return getAllResources().filter((res) => res.featured);
}

export function getResourceBySlug(slug: string): ResourceItem | undefined {
    return resourcesData.find((res) => res.slug === slug);
}

export function getAllResourceSlugs(): string[] {
    return resourcesData.map((res) => res.slug);
}

export function getFAQs(categorySlug?: string): ResourceItem[] {
    const faqs = getResourcesByType('faq');
    if (!categorySlug || categorySlug === 'all') return faqs;
    return faqs.filter((faq) => faq.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

export function getGlossaryTerms(letter?: string): ResourceItem[] {
    const terms = getResourcesByType('glossary');
    if (!letter || letter === 'All') return terms;
    return terms.filter((item) => (item.letter || item.term?.[0])?.toUpperCase() === letter.toUpperCase());
}

export function searchResources(filters: ResourceFilterState): ResourceItem[] {
    let list = getAllResources();

    // 1. Text Search Query
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
        const query = filters.searchQuery.toLowerCase().trim();
        list = list.filter((res) => {
            const matchTitle = res.title.toLowerCase().includes(query);
            const matchExcerpt = res.excerpt ? res.excerpt.toLowerCase().includes(query) : false;
            const matchDesc = res.description ? res.description.toLowerCase().includes(query) : false;
            const matchTopics = res.topics.some((t) => t.toLowerCase().includes(query));
            const matchCat = res.category.toLowerCase().includes(query);

            return matchTitle || matchExcerpt || matchDesc || matchTopics || matchCat;
        });
    }

    // 2. Type Filter
    if (filters.type && filters.type !== 'All') {
        const targetType = filters.type.toLowerCase();
        list = list.filter((res) => res.type.toLowerCase() === targetType);
    }

    // 3. Topic Filter
    if (filters.topic && filters.topic !== 'All') {
        const targetTopic = filters.topic.toLowerCase();
        list = list.filter((res) => res.topics.some((t) => t.toLowerCase() === targetTopic));
    }

    // 4. Technology Filter
    if (filters.technology && filters.technology !== 'All') {
        const targetTech = filters.technology.toLowerCase();
        list = list.filter((res) =>
            res.technologies?.some((t) => t.name.toLowerCase() === targetTech || t.slug.toLowerCase() === targetTech)
        );
    }

    // 5. Industry Filter
    if (filters.industry && filters.industry !== 'All') {
        const targetInd = filters.industry.toLowerCase();
        list = list.filter((res) =>
            res.industries?.some((ind) => ind.title.toLowerCase() === targetInd || ind.slug.toLowerCase() === targetInd)
        );
    }

    return list;
}
