import { TechnologyCategoryGroup, TechnologyItem } from '../types/technology';

export const TECH_CATEGORIES: TechnologyCategoryGroup[] = [
    {
        id: 'frontend',
        name: 'Frontend Technologies',
        slug: 'frontend',
        description: 'Modern user interface frameworks, component libraries, and browser client technologies.',
        iconName: 'Layout',
        technologies: [
            { name: 'Frontend Development', slug: 'frontend', shortDescription: 'Complete client-side architecture and interactive user interface development.' },
            { name: 'React', slug: 'react', shortDescription: 'Declarative component-based UI library for fast single-page web applications.' },
            { name: 'Next.js', slug: 'nextjs', shortDescription: 'React framework featuring server-side rendering (SSR), SSG, and App Router.' },
            { name: 'JavaScript', slug: 'javascript', shortDescription: 'Modern ES6+ dynamic scripting language powering client and server web logic.' },
            { name: 'TypeScript', slug: 'typescript', shortDescription: 'Typed superset of JavaScript bringing static type safety to web codebases.' },
            { name: 'HTML5', slug: 'html5', shortDescription: 'Semantic web markup standard for structural content and accessibility.' },
            { name: 'CSS3', slug: 'css3', shortDescription: 'Modern styling, flexbox/grid layouts, animations, and responsive web design.' },
            { name: 'Tailwind CSS', slug: 'tailwind-css', shortDescription: 'Utility-first CSS framework for rapid, custom UI styling.' },
        ],
    },
    {
        id: 'backend',
        name: 'Backend Technologies',
        slug: 'backend',
        description: 'Server-side frameworks, runtime environments, and REST/GraphQL API architectures.',
        iconName: 'Server',
        technologies: [
            { name: 'Backend Development', slug: 'backend', shortDescription: 'Scalable server systems, data pipelines, and business logic microservices.' },
            { name: 'Node.js', slug: 'nodejs', shortDescription: 'Event-driven, asynchronous JavaScript runtime environment for high-throughput APIs.' },
            { name: 'Express.js', slug: 'expressjs', shortDescription: 'Minimalist and fast web application framework for Node.js REST servers.' },
            { name: 'PHP', slug: 'php', shortDescription: 'Proven server-side scripting language powering web applications and CMS platforms.' },
            { name: 'Laravel', slug: 'laravel', shortDescription: 'Elegant PHP framework featuring MVC architecture, Eloquent ORM, and queue management.' },
            { name: 'REST API', slug: 'rest-api', shortDescription: 'Standardized HTTP microservices architecture for client-server integration.' },
            { name: 'API Integration', slug: 'api-integration', shortDescription: 'Connecting third-party web services, payment engines, and enterprise software.' },
        ],
    },
    {
        id: 'mobile-development',
        name: 'Mobile Technologies',
        slug: 'mobile-development',
        description: 'Cross-platform and native mobile app stacks for iOS and Android devices.',
        iconName: 'Smartphone',
        technologies: [
            { name: 'Mobile App Development', slug: 'mobile-development', shortDescription: 'End-to-end mobile engineering for iOS and Android smartphones.' },
            { name: 'Flutter', slug: 'flutter', shortDescription: 'Google cross-platform UI toolkit compiled to native ARM code with Dart.' },
            { name: 'React Native', slug: 'react-native', shortDescription: 'Meta cross-platform framework building native mobile UI from React code.' },
            { name: 'Android', slug: 'android', shortDescription: 'Native Google Android OS platform engineering using Android SDK.' },
            { name: 'Kotlin', slug: 'kotlin', shortDescription: 'Modern, concise, type-safe programming language for native Android apps.' },
            { name: 'Java', slug: 'java', shortDescription: 'Robust object-oriented language for enterprise Android software and backends.' },
            { name: 'iOS', slug: 'ios', shortDescription: 'Native Apple iOS ecosystem app development for iPhone and iPad.' },
            { name: 'Swift', slug: 'swift', shortDescription: 'Fast, modern compiled language engineered by Apple for native iOS apps.' },
        ],
    },
    {
        id: 'databases',
        name: 'Database Technologies',
        slug: 'databases',
        description: 'Relational SQL and NoSQL document databases, real-time stores, and memory caches.',
        iconName: 'Database',
        technologies: [
            { name: 'Database Solutions', slug: 'databases', shortDescription: 'Data modeling, schema architecture, query optimization, and storage solutions.' },
            { name: 'MongoDB', slug: 'mongodb', shortDescription: 'Flexible NoSQL document database engineered for JSON-like dynamic schemas.' },
            { name: 'MySQL', slug: 'mysql', shortDescription: 'Popular open-source relational database management system for web applications.' },
            { name: 'PostgreSQL', slug: 'postgresql', shortDescription: 'Advanced enterprise-class object-relational SQL database.' },
            { name: 'Firebase', slug: 'firebase', shortDescription: 'Google Backend-as-a-Service with real-time Firestore database and Auth.' },
            { name: 'Redis', slug: 'redis', shortDescription: 'In-memory key-value data store used for fast caching and session management.' },
        ],
    },
    {
        id: 'cloud',
        name: 'Cloud Technologies',
        slug: 'cloud',
        description: 'Global cloud platforms, serverless computing, virtual private clouds, and cloud architecture.',
        iconName: 'Cloud',
        technologies: [
            { name: 'Cloud Solutions', slug: 'cloud', shortDescription: 'Cloud infrastructure design, migration, auto-scaling, and hosting.' },
            { name: 'AWS', slug: 'aws', shortDescription: 'Amazon Web Services cloud computing suite including EC2, S3, RDS, and Lambda.' },
            { name: 'Microsoft Azure', slug: 'azure', shortDescription: 'Enterprise Microsoft cloud computing platform for hybrid infrastructure.' },
            { name: 'Google Cloud', slug: 'google-cloud', shortDescription: 'GCP infrastructure, Kubernetes engine, BigQuery, and AI services.' },
            { name: 'Cloud Architecture', slug: 'cloud-architecture', shortDescription: 'Designing resilient, multi-region, fault-tolerant cloud environments.' },
        ],
    },
    {
        id: 'devops',
        name: 'DevOps Technologies',
        slug: 'devops',
        description: 'Containerization, automated CI/CD deployment pipelines, version control, and Linux servers.',
        iconName: 'Cpu',
        technologies: [
            { name: 'DevOps', slug: 'devops', shortDescription: 'Automating software build, test, deployment, and infrastructure monitoring.' },
            { name: 'Docker', slug: 'docker', shortDescription: 'Containerization technology packaging applications with dependencies.' },
            { name: 'Kubernetes', slug: 'kubernetes', shortDescription: 'Container orchestration platform managing container clusters at scale.' },
            { name: 'CI/CD', slug: 'ci-cd', shortDescription: 'Continuous Integration and Continuous Deployment pipelines for fast releases.' },
            { name: 'GitHub Actions', slug: 'github-actions', shortDescription: 'Automated workflow scripts running directly inside GitHub repositories.' },
            { name: 'Git', slug: 'git', shortDescription: 'Distributed version control system tracking code changes and team branches.' },
            { name: 'Linux', slug: 'linux', shortDescription: 'Enterprise Linux operating system distributions powering production servers.' },
        ],
    },
    {
        id: 'ai',
        name: 'AI & Emerging Technologies',
        slug: 'ai',
        description: 'Machine learning, large language models (LLMs), computer vision, and intelligent automation.',
        iconName: 'Sparkles',
        technologies: [
            { name: 'AI Solutions', slug: 'ai', shortDescription: 'Custom artificial intelligence integration and smart software automation.' },
            { name: 'Machine Learning', slug: 'machine-learning', shortDescription: 'Predictive algorithms, data classification, and pattern recognition models.' },
            { name: 'Generative AI', slug: 'generative-ai', shortDescription: 'Integrating OpenAI, Claude, and LLM APIs for automated content & code generation.' },
            { name: 'AI Automation', slug: 'ai-automation', shortDescription: 'Combining AI logic with business workflows to eliminate manual overhead.' },
            { name: 'Chatbot Development', slug: 'chatbot-development', shortDescription: 'Conversational AI assistants for customer support and sales lead capture.' },
            { name: 'Computer Vision', slug: 'computer-vision', shortDescription: 'Image recognition, document OCR scanning, and visual inspection algorithms.' },
        ],
    },
    {
        id: 'ecommerce',
        name: 'eCommerce & CMS',
        slug: 'ecommerce',
        description: 'E-commerce platforms, content management systems, and headless content architectures.',
        iconName: 'Store',
        technologies: [
            { name: 'eCommerce Technologies', slug: 'ecommerce', shortDescription: 'Modern digital storefront platforms and CMS content management tools.' },
            { name: 'Shopify', slug: 'shopify', shortDescription: 'Leading e-commerce platform for custom online stores andLiquid themes.' },
            { name: 'WordPress', slug: 'wordpress', shortDescription: 'Popular open-source CMS powering content websites and custom blogs.' },
            { name: 'WooCommerce', slug: 'woocommerce', shortDescription: 'Flexible e-commerce plugin transforming WordPress into an online shop.' },
            { name: 'Headless CMS', slug: 'headless-cms', shortDescription: 'API-driven content repositories separating content from the frontend layer.' },
        ],
    },
];

function generateDefaultTech(slug: string, name: string, categoryName: string, categorySlug: string, shortDesc: string): TechnologyItem {
    return {
        slug,
        name,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `${name} is an integral part of modern digital engineering. We utilize ${name} to build scalable, high-performance software, robust APIs, and secure applications tailored to enterprise and startup demands.`,
        overview: `${name} provides a robust foundation for building reliable software solutions. Our development team leverages ${name} best practices to optimize performance, maintain code clarity, and ensure smooth deployment across environments.`,
        iconName: 'Code',
        useCases: [
            { title: 'Custom Product Engineering', description: `Building bespoke applications powered by ${name} for high reliability.` },
            { title: 'System Modernization', description: `Upgrading existing codebases and legacy infrastructure to modern ${name} standards.` },
            { title: 'API & Microservice Integration', description: `Connecting ${name} modules with cloud backends and third-party web services.` },
            { title: 'Scalable Infrastructure', description: `Architecting ${name} codebases to handle expanding traffic and user volumes.` },
        ],
        capabilities: [
            { title: 'Modular Architecture Design', description: `Clean, maintainable code structures utilizing ${name} industry patterns.` },
            { title: 'Performance Tuning & Optimization', description: 'Optimizing resource consumption, load speed, and runtime efficiency.' },
            { title: 'Enterprise Security Controls', description: 'Implementing data encryption, input validation, and security headers.' },
            { title: 'Automated Testing & CI/CD', description: 'Unit testing, integration testing, and automated deployment pipelines.' },
        ],
        features: [
            { title: 'High Performance & Speed', description: `Engineered for fast execution and minimal latency.` },
            { title: 'Cross-Platform Compatibility', description: 'Seamless execution across web, desktop, and cloud environments.' },
            { title: 'Extensive Ecosystem Support', description: 'Access to robust libraries, frameworks, and active open-source tools.' },
            { title: 'Future-Proof Maintainability', description: 'Structured code conventions making future enhancements straightforward.' },
        ],
        ecosystem: [
            { name: 'Core Framework', category: 'Library', description: 'Primary development framework and toolset.' },
            { name: 'Development Tools', category: 'Tooling', description: 'Build tools, package managers, and linters.' },
            { name: 'Deployment Pipelines', category: 'Infra', description: 'Automated CI/CD integration and cloud hosting.' },
        ],
        integrations: [
            { name: 'REST & GraphQL APIs', type: 'API', description: 'Connect seamlessly with cloud APIs and databases.' },
            { name: 'Cloud Infrastructure', type: 'Cloud', description: 'Host and scale on AWS, GCP, or Azure.' },
            { name: 'Database Connectors', type: 'Data', description: 'Sync with SQL and NoSQL database engines.' },
        ],
        process: [
            { step: 1, title: 'Requirements & Stack Evaluation', description: `Assessing technical requirements to confirm ${name} suitability.` },
            { step: 2, title: 'Architecture Blueprint', description: 'Designing data models, component hierarchies, and API endpoints.' },
            { step: 3, title: 'Sprint Implementation', description: `Writing clean, typed ${name} code following agile milestone sprints.` },
            { step: 4, title: 'QA & Deployment', description: 'End-to-end testing, vulnerability scanning, and production release.' },
        ],
        security: [
            'Input sanitization and OWASP vulnerability mitigation',
            'Secure token authentication and role-based access control',
            'Automated dependency security scanning in CI/CD pipelines',
        ],
        scalability: [
            'Stateless execution models supporting horizontal auto-scaling',
            'In-memory caching and optimized query execution',
            'Containerized deployment for cloud orchestration',
        ],
        relatedServices: [
            { title: 'Web Application Development', slug: 'web-application-development', shortDescription: 'Custom web apps built with modern frameworks.' },
            { title: 'Backend Development', slug: 'backend-development', shortDescription: 'Scalable server systems and APIs.' },
            { title: 'Cloud & DevOps', slug: 'cloud-devops', shortDescription: 'CI/CD automation and cloud architecture.' },
        ],
        relatedSolutions: [
            { title: 'SaaS Development', slug: 'saas-development', shortDescription: 'Multi-tenant cloud software platforms.' },
            { title: 'Digital Transformation', slug: 'digital-transformation', shortDescription: 'Modernizing tech systems and processes.' },
            { title: 'Business Automation', slug: 'business-automation', shortDescription: 'Automating operational workflows.' },
        ],
        relatedTechnologies: [
            { name: 'React', slug: 'react', shortDescription: 'UI component library.' },
            { name: 'Node.js', slug: 'nodejs', shortDescription: 'JavaScript runtime server.' },
            { name: 'TypeScript', slug: 'typescript', shortDescription: 'Typed JavaScript superset.' },
        ],
        faqs: [
            { question: `Why choose ${name} for software development?`, answer: `${name} offers proven stability, excellent performance, and a rich ecosystem of tools for modern software development.` },
            { question: `Can ${name} be integrated with our existing software stack?`, answer: `Yes. ${name} is designed for modular integration with REST/GraphQL APIs, existing databases, and cloud platforms.` },
            { question: `How do you ensure security in ${name} applications?`, answer: 'We follow strict security protocols including input validation, data encryption, dependency auditing, and regular security reviews.' },
            { question: 'Do you offer ongoing technical maintenance after launch?', answer: 'Yes, we provide SLA support retainers, version updates, performance tuning, and 24/7 monitoring.' },
        ],
        seoTitle: `${name} Technology & Development | TheWebHero Engineering`,
        seoDescription: `Expert ${name} software development services by TheWebHero. Building fast, scalable, and secure digital applications powered by ${name}.`,
        status: 'active',
        featured: true,
    };
}

const ALL_TECH_MAP: Record<string, TechnologyItem> = {};

TECH_CATEGORIES.forEach((cat) => {
    // Category main page tech record
    ALL_TECH_MAP[cat.slug] = generateDefaultTech(
        cat.slug,
        cat.name,
        cat.name,
        cat.slug,
        cat.description
    );

    // Individual tech records
    cat.technologies.forEach((sub) => {
        ALL_TECH_MAP[sub.slug] = generateDefaultTech(
            sub.slug,
            sub.name,
            cat.name,
            cat.slug,
            sub.shortDescription
        );
    });
});

export function getAllTechnologies(): TechnologyItem[] {
    return Object.values(ALL_TECH_MAP);
}

export function getTechnologyBySlug(slug: string): TechnologyItem | undefined {
    return ALL_TECH_MAP[slug];
}

export function getTechnologiesByCategory(categorySlug: string): TechnologyItem[] {
    return Object.values(ALL_TECH_MAP).filter((t) => t.categorySlug === categorySlug && t.slug !== categorySlug);
}

export function getAllTechCategories(): TechnologyCategoryGroup[] {
    return TECH_CATEGORIES;
}

export function getAllTechSlugs(): string[] {
    return Object.keys(ALL_TECH_MAP);
}
