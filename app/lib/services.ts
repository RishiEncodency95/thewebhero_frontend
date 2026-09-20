import { ServiceCategoryGroup, ServiceItem } from '../types/service';

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
    {
        id: 'web-development',
        name: 'Web Development',
        slug: 'web-development',
        description: 'Modern, high-performance websites and web applications built with cutting-edge tech.',
        iconName: 'Globe',
        services: [
            { title: 'Website Development', slug: 'website-development', shortDescription: 'Custom, responsive websites tailored for business growth.' },
            { title: 'Web Application Development', slug: 'web-application-development', shortDescription: 'Scalable, complex web applications with rich interactivity.' },
            { title: 'React Development', slug: 'react-development', shortDescription: 'Dynamic single-page applications built with React.js.' },
            { title: 'Next.js Development', slug: 'nextjs-development', shortDescription: 'SEO-optimized, lightning-fast SSR & SSG web solutions.' },
            { title: 'JavaScript Development', slug: 'javascript-development', shortDescription: 'Custom interactive web features powered by modern ES6+ JS.' },
            { title: 'TypeScript Development', slug: 'typescript-development', shortDescription: 'Type-safe, robust codebases for mission-critical web applications.' },
            { title: 'PHP Development', slug: 'php-development', shortDescription: 'Reliable server-side web development and custom backend solutions.' },
            { title: 'Laravel Development', slug: 'laravel-development', shortDescription: 'Elegant MVC architecture and robust web APIs powered by Laravel.' },
            { title: 'HTML/CSS Development', slug: 'html-css-development', shortDescription: 'Pixel-perfect, accessible semantic HTML5 & modern CSS3 layouts.' },
            { title: 'WordPress Development', slug: 'wordpress-development', shortDescription: 'Custom WordPress themes, plugins, and headless CMS integrations.' },
            { title: 'Shopify Development', slug: 'shopify-development', shortDescription: 'High-converting custom Shopify stores and e-commerce themes.' },
            { title: 'eCommerce Development', slug: 'ecommerce-development', shortDescription: 'Secure, scalable online store development with seamless checkout.' },
        ],
    },
    {
        id: 'mobile-app-development',
        name: 'Mobile App Development',
        slug: 'mobile-app-development',
        description: 'Native and cross-platform mobile apps for iOS and Android devices.',
        iconName: 'Smartphone',
        services: [
            { title: 'Android App Development', slug: 'android-app-development', shortDescription: 'Native Android applications built with Kotlin and Android SDK.' },
            { title: 'iOS App Development', slug: 'ios-app-development', shortDescription: 'High-performance native iOS apps crafted with Swift and SwiftUI.' },
            { title: 'React Native Development', slug: 'react-native-development', shortDescription: 'Cross-platform mobile apps built from a unified React codebase.' },
            { title: 'Flutter App Development', slug: 'flutter-app-development', shortDescription: 'Beautiful, fast multi-platform apps created with Dart & Flutter.' },
            { title: 'Kotlin Development', slug: 'kotlin-development', shortDescription: 'Modern, concise Kotlin code for robust Android mobile apps.' },
            { title: 'Java App Development', slug: 'java-app-development', shortDescription: 'Enterprise-grade mobile software built on proven Java frameworks.' },
            { title: 'Swift Development', slug: 'swift-development', shortDescription: 'Optimized Apple ecosystem applications engineered with Swift.' },
            { title: 'Cross-Platform App Development', slug: 'cross-platform-app-development', shortDescription: 'Cost-effective mobile solutions running seamlessly on iOS & Android.' },
        ],
    },
    {
        id: 'custom-software-development',
        name: 'Custom Software',
        slug: 'custom-software-development',
        description: 'Bespoke software systems designed to transform operational efficiency.',
        iconName: 'Code',
        services: [
            { title: 'Custom Software Development', slug: 'custom-software-development', shortDescription: 'Tailored software solutions built specifically for your business goals.' },
            { title: 'Enterprise Software Development', slug: 'enterprise-software-development', shortDescription: 'Mission-critical enterprise platforms engineered for scale and security.' },
            { title: 'SaaS Development', slug: 'saas-development', shortDescription: 'Cloud-native multi-tenant SaaS platforms with subscription engines.' },
            { title: 'CRM Development', slug: 'crm-development', shortDescription: 'Custom customer relationship tools to streamline sales & support.' },
            { title: 'ERP Development', slug: 'erp-development', shortDescription: 'Integrated resource planning systems for operations and supply chain.' },
            { title: 'Business Automation', slug: 'business-automation', shortDescription: 'Automate repetitive workflows to maximize team productivity.' },
        ],
    },
    {
        id: 'desktop-development',
        name: 'Desktop Development',
        slug: 'desktop-development',
        description: 'Robust desktop software for Windows, macOS, and Linux platforms.',
        iconName: 'Monitor',
        services: [
            { title: 'Windows App Development', slug: 'windows-app-development', shortDescription: 'Native Windows applications utilizing .NET, C#, or Electron.' },
            { title: 'macOS App Development', slug: 'macos-app-development', shortDescription: 'Sleek desktop tools designed natively for macOS environment.' },
            { title: 'Linux App Development', slug: 'linux-app-development', shortDescription: 'High-performance desktop and workstation utilities for Linux OS.' },
            { title: 'Cross-Platform Desktop Development', slug: 'cross-platform-desktop-development', shortDescription: 'Single-codebase desktop applications targeting Windows, Mac, & Linux.' },
        ],
    },
    {
        id: 'backend-development',
        name: 'Backend & API',
        slug: 'backend-development',
        description: 'High-throughput backend architectures, microservices, and REST/GraphQL APIs.',
        iconName: 'Server',
        services: [
            { title: 'Backend Development', slug: 'backend-development', shortDescription: 'Secure, scalable server-side systems powering web & mobile applications.' },
            { title: 'Node.js Development', slug: 'nodejs-development', shortDescription: 'Event-driven, asynchronous Node.js backends for real-time services.' },
            { title: 'Express.js Development', slug: 'expressjs-development', shortDescription: 'Lightweight and fast web API servers built with Express framework.' },
            { title: 'PHP/Laravel Backend', slug: 'php-laravel-backend', shortDescription: 'Structured, secure PHP backend systems built using Laravel.' },
            { title: 'API Development', slug: 'api-development', shortDescription: 'Custom RESTful and GraphQL APIs engineered for performance.' },
            { title: 'API Integration', slug: 'api-integration', shortDescription: 'Seamless integration with third-party web services and payment gateways.' },
        ],
    },
    {
        id: 'database-solutions',
        name: 'Database Solutions',
        slug: 'database-solutions',
        description: 'Database design, query optimization, data migration, and secure management.',
        iconName: 'Database',
        services: [
            { title: 'Database Design', slug: 'database-design', shortDescription: 'Normalized data models engineered for high speed and data integrity.' },
            { title: 'MongoDB Development', slug: 'mongodb-development', shortDescription: 'Flexible NoSQL document database solutions for dynamic schema apps.' },
            { title: 'MySQL Development', slug: 'mysql-development', shortDescription: 'Relational database architecture built on reliable MySQL engine.' },
            { title: 'PostgreSQL Development', slug: 'postgresql-development', shortDescription: 'Advanced relational database engineering for enterprise applications.' },
            { title: 'Firebase Development', slug: 'firebase-development', shortDescription: 'Real-time database, authentication, and cloud functions integration.' },
            { title: 'Redis Solutions', slug: 'redis-solutions', shortDescription: 'Ultra-fast in-memory caching and session management with Redis.' },
            { title: 'Database Migration', slug: 'database-migration', shortDescription: 'Zero-downtime data migration between legacy and modern databases.' },
            { title: 'Database Optimization', slug: 'database-optimization', shortDescription: 'Query tuning, indexing, and performance optimization for slow DBs.' },
            { title: 'Database Backup', slug: 'database-backup', shortDescription: 'Automated point-in-time backup and disaster recovery solutions.' },
        ],
    },
    {
        id: 'design-growth-quality',
        name: 'Design, Growth & Quality',
        slug: 'design-growth-quality',
        description: 'User-centered design, digital growth strategies, quality assurance, and AI.',
        iconName: 'Sparkles',
        services: [
            { title: 'UI/UX Design', slug: 'ui-ux-design', shortDescription: 'Intuitive interface design, wireframing, and user experience research.' },
            { title: 'SEO & Digital Growth', slug: 'seo-digital-growth', shortDescription: 'Technical SEO, search engine ranking, and organic traffic growth.' },
            { title: 'AI & Automation', slug: 'ai-automation', shortDescription: 'AI integration, LLM workflows, and intelligent business automation.' },
            { title: 'Cloud & DevOps', slug: 'cloud-devops', shortDescription: 'AWS/GCP infrastructure, CI/CD pipelines, Docker & Kubernetes.' },
            { title: 'QA & Testing', slug: 'qa-testing', shortDescription: 'Automated & manual testing ensuring zero-defect software releases.' },
            { title: 'Game Development', slug: 'game-development', shortDescription: 'Interactive 2D/3D games and gamified mobile & web experiences.' },
        ],
    },
    {
        id: 'it-infrastructure-support',
        name: 'IT Infrastructure & Support',
        slug: 'it-infrastructure-support',
        description: 'End-to-end IT setup, server management, network security, and technical support.',
        iconName: 'ShieldCheck',
        services: [
            { title: 'IT Infrastructure & Support', slug: 'it-infrastructure-support', shortDescription: 'Comprehensive corporate IT setup, hardware, and server management.' },
            { title: 'Networking Solutions', slug: 'networking-solutions', shortDescription: 'Enterprise Wi-Fi, LAN/WAN setup, routing, and firewall management.' },
            { title: 'Server Management', slug: 'server-management', shortDescription: 'Linux & Windows server monitoring, patching, and maintenance.' },
            { title: 'Desktop Support', slug: 'desktop-support', shortDescription: 'Prompt workstation troubleshooting, OS repair, and user assistance.' },
            { title: 'Hardware Installation', slug: 'hardware-installation', shortDescription: 'Workstation, server rack, and peripheral hardware setup.' },
            { title: 'Data Recovery', slug: 'data-recovery', shortDescription: 'Emergency recovery of lost files, storage drives, and corrupted systems.' },
            { title: 'IT Maintenance & Support', slug: 'it-maintenance-support', shortDescription: 'Routine preventive maintenance for company hardware and networks.' },
            { title: 'Backup Solutions', slug: 'backup-solutions', shortDescription: 'Cloud and local automated backup protocols for company data safety.' },
            { title: 'IT Security', slug: 'it-security', shortDescription: 'Cybersecurity audits, endpoint protection, and threat mitigation.' },
            { title: 'Remote IT Support', slug: 'remote-it-support', shortDescription: 'Fast 24/7 remote helpdesk assistance for software and system issues.' },
            { title: 'Onsite IT Support', slug: 'onsite-it-support', shortDescription: 'In-person technical support for hardware, office networking, and infrastructure.' },
        ],
    },
    {
        id: 'maintenance-managed-support',
        name: 'Maintenance & Managed Support',
        slug: 'maintenance-managed-support',
        description: 'Ongoing technical care, system monitoring, security updates, and SLA support.',
        iconName: 'Wrench',
        services: [
            { title: 'Website Maintenance', slug: 'website-maintenance', shortDescription: 'Regular website updates, security patches, backups, and uptime monitoring.' },
            { title: 'Application Maintenance', slug: 'application-maintenance', shortDescription: 'Bug fixes, version upgrades, and feature enhancements for custom software.' },
            { title: 'Mobile App Maintenance', slug: 'mobile-app-maintenance', shortDescription: 'OS compatibility updates, store updates, and app monitoring.' },
            { title: 'Managed IT Support', slug: 'managed-it-support', shortDescription: 'Proactive full-spectrum managed IT care for growing organizations.' },
            { title: 'Monthly Maintenance', slug: 'monthly-maintenance', shortDescription: 'Flexible monthly retainer support packages tailored to your requirements.' },
        ],
    },
];

// Master map generator for default service detail values
function generateDefaultService(slug: string, title: string, categoryName: string, categorySlug: string, shortDesc: string): ServiceItem {
    return {
        slug,
        title,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `We deliver specialized ${title} services engineered for modern digital demands. Our expert engineering team designs, builds, and optimizes your solution for maximum performance, security, and enterprise scalability.`,
        problemStatement: `Modern businesses frequently encounter technical bottlenecks, legacy system limitations, or performance inefficiencies. Our ${title} team eliminates operational drag by implementing modern architecture, robust security, and seamless workflow integration.`,
        iconName: 'Layers',
        capabilities: [
            { title: 'Custom Architecture & Engineering', description: `Tailored ${title} design aligned strictly with your operational objectives and technical standards.` },
            { title: 'Performance Optimization', description: 'Enhance speed, reduce resource consumption, and ensure minimal latency under peak loads.' },
            { title: 'Security & Compliance', description: 'Implement enterprise-grade encryption, vulnerability scanning, and security standards.' },
            { title: 'Scalable System Integration', description: 'Connect seamlessly with third-party tools, APIs, and existing software ecosystems.' },
        ],
        technologies: [
            { name: 'TypeScript / JS', category: 'Language' },
            { name: 'React / Next.js', category: 'Frontend' },
            { name: 'Node.js / Express', category: 'Backend' },
            { name: 'Cloud Infrastructure', category: 'DevOps' },
            { name: 'Modern Databases', category: 'Data' },
        ],
        deliverables: [
            'Fully tested, production-ready codebase or environment configuration',
            'Comprehensive technical documentation & API specification',
            'Automated testing suites and deployment scripts',
            'Security audit and compliance verification report',
            'Dedicated post-deployment technical handoff and SLA monitoring',
        ],
        process: [
            { step: 1, title: 'Discovery & Requirements', description: 'In-depth consultation to map business requirements, system constraints, and technical goals.' },
            { step: 2, title: 'Architecture & System Design', description: 'Creating robust structural blueprints, data models, and component workflows.' },
            { step: 3, title: 'Agile Implementation', description: 'Iterative development cycles with continuous integration and transparent progress reporting.' },
            { step: 4, title: 'Rigorous QA & Security Handoff', description: 'End-to-end stress testing, vulnerability checks, and seamless production deployment.' },
        ],
        benefits: [
            { title: 'Increased Efficiency', description: 'Streamline operations with high-performance software built specifically for your needs.' },
            { title: 'Enterprise Security', description: 'Protect critical data assets with modern security protocols and automated backups.' },
            { title: 'Future-Proof Scalability', description: 'Architecture engineered to expand effortlessly as your user base and data volume grow.' },
            { title: 'Dedicated Technical Support', description: 'Continuous SLA monitoring and rapid expert resolution for uninterrupted performance.' },
        ],
        faqs: [
            { question: `What is included in your ${title} service?`, answer: `Our ${title} service covers end-to-end planning, architecture, custom development, testing, deployment, and ongoing technical support.` },
            { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope complexity. Standard builds typically span 2 to 6 weeks, while large enterprise deployments follow agile milestones.' },
            { question: 'Can you integrate with our existing software infrastructure?', answer: 'Yes. We build with modular, API-first architecture designed to integrate seamlessly with your current technical stack and workflow tools.' },
            { question: 'Do you offer ongoing technical maintenance after launch?', answer: 'Absolutely. We provide flexible SLA retainers, system updates, performance tuning, and 24/7 technical monitoring.' },
        ],
        relatedServices: [
            { title: 'Web Application Development', slug: 'web-application-development', shortDescription: 'Scalable web apps with rich interactivity.' },
            { title: 'Cloud & DevOps Solutions', slug: 'cloud-devops', shortDescription: 'Automated CI/CD pipelines & cloud infrastructure.' },
            { title: 'API Integration', slug: 'api-integration', shortDescription: 'Connect third-party APIs and microservices.' },
        ],
        seoTitle: `${title} Services | TheWebHero Technical Solutions`,
        seoDescription: `Professional ${title} by TheWebHero. High-performance, scalable, and secure engineering solutions tailored to accelerate your business growth.`,
        status: 'active',
        featured: true,
    };
}

// Build all services index
const ALL_SERVICES_MAP: Record<string, ServiceItem> = {};

// Add Category level services so category URLs also render a dedicated Service page!
SERVICE_CATEGORIES.forEach((cat) => {
    // Add category main service page
    ALL_SERVICES_MAP[cat.slug] = generateDefaultService(
        cat.slug,
        cat.name,
        cat.name,
        cat.slug,
        cat.description
    );

    // Add each child service page
    cat.services.forEach((sub) => {
        ALL_SERVICES_MAP[sub.slug] = generateDefaultService(
            sub.slug,
            sub.title,
            cat.name,
            cat.slug,
            sub.shortDescription
        );
    });
});

// Helper Functions
export function getAllServices(): ServiceItem[] {
    return Object.values(ALL_SERVICES_MAP);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
    return ALL_SERVICES_MAP[slug];
}

export function getServicesByCategory(categorySlug: string): ServiceItem[] {
    return Object.values(ALL_SERVICES_MAP).filter((s) => s.categorySlug === categorySlug && s.slug !== categorySlug);
}

export function getAllCategories(): ServiceCategoryGroup[] {
    return SERVICE_CATEGORIES;
}

export function getAllServiceSlugs(): string[] {
    return Object.keys(ALL_SERVICES_MAP);
}
