import { TechnologyCategoryGroup, TechnologyItem } from '../types/technology';
import { getServiceBySlug } from './services';
import { getSolutionBySlug } from './solutions';

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
            { name: 'Shopify', slug: 'shopify', shortDescription: 'Leading e-commerce platform for custom online stores and Liquid themes.' },
            { name: 'WordPress', slug: 'wordpress', shortDescription: 'Popular open-source CMS powering content websites and custom blogs.' },
            { name: 'WooCommerce', slug: 'woocommerce', shortDescription: 'Flexible e-commerce plugin transforming WordPress into an online shop.' },
            { name: 'Headless CMS', slug: 'headless-cms', shortDescription: 'API-driven content repositories separating content from the frontend layer.' },
        ],
    },
];

/* ------------------------------------------------------------------ SEO copy --- */

/**
 * Search keyword per technology. Anything not listed becomes "<Name> Development".
 * Keep these matching what people actually type into Google.
 */
const KEYWORDS: Record<string, string> = {
    databases: 'Database Development',
    cloud: 'Cloud Development',
    devops: 'DevOps Services',
    ai: 'AI Development',
    ecommerce: 'eCommerce Development',
    'rest-api': 'REST API Development',
    'api-integration': 'API Integration Services',
    'cloud-architecture': 'Cloud Architecture Consulting',
    aws: 'AWS Cloud Services',
    azure: 'Microsoft Azure Services',
    'google-cloud': 'Google Cloud Services',
    docker: 'Docker Consulting Services',
    kubernetes: 'Kubernetes Consulting Services',
    'ci-cd': 'CI/CD Pipeline Services',
    'github-actions': 'GitHub Actions CI/CD Services',
    git: 'Git Version Control Services',
    linux: 'Linux Server Management',
    'ai-automation': 'AI Automation Services',
    redis: 'Redis Development',
};

/** "Hire <role>" phrasing. Anything not listed becomes "<Name> developers". */
const ROLES: Record<string, string> = {
    frontend: 'frontend developers',
    backend: 'backend developers',
    'mobile-development': 'mobile app developers',
    databases: 'database engineers',
    cloud: 'cloud engineers',
    devops: 'DevOps engineers',
    ai: 'AI engineers',
    ecommerce: 'eCommerce developers',
    'rest-api': 'REST API developers',
    'api-integration': 'API integration developers',
    'cloud-architecture': 'cloud architects',
    docker: 'DevOps engineers',
    kubernetes: 'Kubernetes engineers',
    'ci-cd': 'DevOps engineers',
    'github-actions': 'DevOps engineers',
    git: 'DevOps engineers',
    linux: 'Linux system administrators',
    'machine-learning': 'machine learning engineers',
    'generative-ai': 'generative AI developers',
    'ai-automation': 'AI automation experts',
    'chatbot-development': 'chatbot developers',
    'computer-vision': 'computer vision engineers',
    'headless-cms': 'headless CMS developers',
};

/** Dedicated service page per technology, linked first under "Explore More". */
const TECH_SERVICE: Record<string, string> = {
    frontend: 'web-development',
    react: 'react-development',
    nextjs: 'nextjs-development',
    javascript: 'javascript-development',
    typescript: 'typescript-development',
    html5: 'html-css-development',
    css3: 'html-css-development',
    backend: 'backend-development',
    nodejs: 'nodejs-development',
    expressjs: 'expressjs-development',
    php: 'php-development',
    laravel: 'laravel-development',
    'rest-api': 'api-development',
    'api-integration': 'api-integration',
    'mobile-development': 'mobile-app-development',
    flutter: 'flutter-app-development',
    'react-native': 'react-native-development',
    android: 'android-app-development',
    kotlin: 'kotlin-development',
    java: 'java-app-development',
    ios: 'ios-app-development',
    swift: 'swift-development',
    databases: 'database-solutions',
    mongodb: 'mongodb-development',
    mysql: 'mysql-development',
    postgresql: 'postgresql-development',
    firebase: 'firebase-development',
    redis: 'redis-solutions',
    linux: 'server-management',
    'ai-automation': 'ai-automation',
    ecommerce: 'ecommerce-development',
    shopify: 'shopify-development',
    wordpress: 'wordpress-development',
    woocommerce: 'wordpress-development',
};

type CategoryCopy = {
    /** What gets built, e.g. "web applications". */
    output: string;
    benefit: string;
    useCases: [string, string][];
    capabilities: [string, string][];
    services: string[];
    solutions: string[];
};

const CATEGORY_COPY: Record<string, CategoryCopy> = {
    frontend: {
        output: 'fast, SEO-friendly websites and web applications',
        benefit: 'pages that load quickly, rank well on Google and convert visitors into customers',
        useCases: [
            ['Business Websites & Landing Pages', 'Responsive, SEO-optimised websites with {name} that load fast and generate leads.'],
            ['Web Applications & Dashboards', 'Interactive admin panels, portals and SaaS dashboards built with {name}.'],
            ['eCommerce Storefronts', 'High-converting product, cart and checkout experiences powered by {name}.'],
            ['UI Modernisation', 'Redesigning legacy front ends with {name} for better speed, UX and Core Web Vitals.'],
        ],
        capabilities: [
            ['Pixel-Perfect UI Development', 'Converting Figma and Adobe XD designs into clean, reusable {name} components.'],
            ['Core Web Vitals Optimisation', 'Code splitting, lazy loading and image optimisation for top PageSpeed scores.'],
            ['Accessibility & Responsive Design', 'WCAG-compliant interfaces that work on every screen size and browser.'],
            ['Technical SEO Built In', 'Semantic markup, structured data and fast rendering that search engines love.'],
        ],
        services: ['web-application-development', 'website-development', 'ui-ux-design'],
        solutions: ['saas-development', 'digital-experience', 'ecommerce-solutions'],
    },
    backend: {
        output: 'secure APIs, server applications and backend systems',
        benefit: 'reliable APIs and business logic that stay fast as your users grow',
        useCases: [
            ['REST & GraphQL APIs', 'Secure, well-documented APIs built with {name} for web and mobile apps.'],
            ['SaaS Platform Backends', 'Multi-tenant {name} backends with authentication, billing and role-based access.'],
            ['Third-Party Integrations', 'Connecting payment gateways, CRMs, ERPs and SMS/email services through {name}.'],
            ['Legacy System Modernisation', 'Migrating old monoliths to clean, maintainable {name} services.'],
        ],
        capabilities: [
            ['Scalable API Architecture', 'Modular {name} services designed for high traffic and easy maintenance.'],
            ['Database Design & Optimisation', 'Efficient schemas, indexing and query tuning for fast responses.'],
            ['Authentication & Security', 'JWT/OAuth login, encryption, rate limiting and OWASP best practices.'],
            ['Automated Testing & CI/CD', 'Unit and integration tests with automated, zero-downtime deployments.'],
        ],
        services: ['backend-development', 'api-development', 'custom-software-development'],
        solutions: ['saas-development', 'enterprise-integration', 'business-automation'],
    },
    'mobile-development': {
        output: 'high-performance Android and iOS mobile apps',
        benefit: 'smooth, crash-free apps that users love and keep coming back to',
        useCases: [
            ['Consumer Mobile Apps', 'Feature-rich Android and iOS apps built with {name} for startups and brands.'],
            ['On-Demand & Booking Apps', 'Delivery, taxi, service-booking and appointment apps powered by {name}.'],
            ['eCommerce Shopping Apps', 'Mobile stores with secure payments, push notifications and order tracking.'],
            ['Enterprise & Field Apps', 'Internal {name} apps for sales teams, inventory and workforce management.'],
        ],
        capabilities: [
            ['Native-Quality UI/UX', 'Smooth animations and platform-consistent design on every device.'],
            ['Offline Support & Sync', 'Local storage and background sync so the app works without internet.'],
            ['Payments & Push Notifications', 'Razorpay, Stripe, UPI, Firebase notifications and in-app purchases.'],
            ['App Store Launch & Support', 'Play Store and App Store submission, ASO and ongoing updates.'],
        ],
        services: ['mobile-app-development', 'cross-platform-app-development', 'mobile-app-maintenance'],
        solutions: ['on-demand-solutions', 'startup-product-development', 'mvp-development'],
    },
    databases: {
        output: 'fast, secure and well-structured databases',
        benefit: 'data that is always available, consistent and quick to query',
        useCases: [
            ['Database Design & Modelling', 'Normalised schemas and data models with {name} for new applications.'],
            ['Performance Tuning', 'Fixing slow queries, adding indexes and caching to speed up {name}.'],
            ['Data Migration', 'Zero-data-loss migration from legacy systems or other databases to {name}.'],
            ['Backup & High Availability', 'Replication, automated backups and disaster recovery for {name}.'],
        ],
        capabilities: [
            ['Schema & Index Design', 'Data structures planned for your queries, reports and growth.'],
            ['Query Optimisation', 'Profiling and rewriting slow queries for millisecond response times.'],
            ['Data Security & Compliance', 'Encryption, access control and audit logging for sensitive data.'],
            ['Monitoring & Maintenance', 'Proactive health checks, upgrades and capacity planning.'],
        ],
        services: ['database-design', 'database-optimization', 'database-migration'],
        solutions: ['enterprise-solutions', 'saas-development', 'digital-modernization'],
    },
    cloud: {
        output: 'secure, scalable and cost-efficient cloud infrastructure',
        benefit: 'infrastructure that scales automatically and lowers your monthly cloud bill',
        useCases: [
            ['Cloud Migration', 'Moving on-premise servers and applications to {name} with minimal downtime.'],
            ['Scalable Web Hosting', 'Auto-scaling, load-balanced hosting for websites, apps and APIs on {name}.'],
            ['Serverless Applications', 'Event-driven, pay-per-use backends built with {name} serverless services.'],
            ['Cloud Cost Optimisation', 'Right-sizing resources and reserved capacity to cut {name} costs.'],
        ],
        capabilities: [
            ['Infrastructure as Code', 'Repeatable Terraform and CloudFormation setups for every environment.'],
            ['High Availability Architecture', 'Multi-zone deployments, load balancing and automatic failover.'],
            ['Cloud Security', 'IAM policies, VPC isolation, encryption and compliance monitoring.'],
            ['24/7 Monitoring', 'Alerts, logging and performance dashboards for your cloud workloads.'],
        ],
        services: ['cloud-devops', 'server-management', 'it-infrastructure-support'],
        solutions: ['digital-transformation', 'enterprise-modernization', 'legacy-system-modernization'],
    },
    devops: {
        output: 'automated build, test and deployment pipelines',
        benefit: 'faster, safer releases with far less manual work',
        useCases: [
            ['CI/CD Pipeline Setup', 'Automated build, test and deploy workflows using {name}.'],
            ['Containerisation', 'Packaging applications into portable containers for consistent deployments.'],
            ['Infrastructure Automation', 'Scripted, version-controlled server and environment setup with {name}.'],
            ['Monitoring & Incident Response', 'Logging, alerting and uptime monitoring for production systems.'],
        ],
        capabilities: [
            ['Zero-Downtime Deployments', 'Blue-green and rolling releases so users never see an outage.'],
            ['Automated Testing Gates', 'Every change is tested and scanned before it reaches production.'],
            ['Environment Consistency', 'Identical development, staging and production environments.'],
            ['Security & Compliance (DevSecOps)', 'Secrets management, dependency scanning and access controls.'],
        ],
        services: ['cloud-devops', 'server-management', 'application-maintenance'],
        solutions: ['saas-maintenance-support', 'enterprise-modernization', 'digital-modernization'],
    },
    ai: {
        output: 'practical AI solutions that automate work and improve decisions',
        benefit: 'measurable time savings and smarter decisions from your own data',
        useCases: [
            ['AI Chatbots & Assistants', 'Customer support and sales assistants built with {name} that work 24/7.'],
            ['Process Automation', 'Using {name} to automate data entry, document processing and approvals.'],
            ['Predictive Analytics', 'Forecasting sales, demand and churn with {name} models on your data.'],
            ['AI Features in Your Product', 'Adding search, recommendations and content generation to existing apps.'],
        ],
        capabilities: [
            ['LLM & GPT Integration', 'Integrating OpenAI, Claude and Gemini APIs with your business data.'],
            ['Custom Model Training', 'Training and fine-tuning models for your specific use case.'],
            ['Data Privacy & Security', 'Private deployments, data masking and secure API handling.'],
            ['Accuracy Testing & Monitoring', 'Evaluating outputs and monitoring model performance in production.'],
        ],
        services: ['ai-automation', 'business-automation', 'custom-software-development'],
        solutions: ['ai-powered-automation', 'process-automation', 'workflow-automation'],
    },
    ecommerce: {
        output: 'online stores that sell more',
        benefit: 'fast, secure stores with higher conversion rates and repeat sales',
        useCases: [
            ['Custom Online Stores', 'Branded, mobile-first {name} stores built to convert visitors into buyers.'],
            ['Store Migration', 'Moving products, customers and orders to {name} without losing SEO rankings.'],
            ['Payment & Shipping Integration', 'Razorpay, Stripe, PayPal, COD and courier integrations on {name}.'],
            ['Multi-Vendor Marketplaces', 'Marketplaces with vendor dashboards, commissions and payouts.'],
        ],
        capabilities: [
            ['Custom Themes & Design', 'Unique, conversion-focused designs instead of generic templates.'],
            ['Plugin & App Development', 'Custom features and integrations built specifically for your store.'],
            ['Speed & SEO Optimisation', 'Fast product pages, schema markup and SEO-friendly URLs.'],
            ['Secure Checkout', 'PCI-compliant payments, SSL and fraud protection.'],
        ],
        services: ['ecommerce-development', 'shopify-development', 'wordpress-development'],
        solutions: ['ecommerce-solutions', 'multi-vendor-ecommerce', 'headless-ecommerce'],
    },
};

const fill = (text: string, name: string) => text.split('{name}').join(name);

function serviceRefs(slugs: string[]) {
    return slugs
        .map((slug) => getServiceBySlug(slug))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
        .map((s) => ({ title: s.title, slug: s.slug, shortDescription: s.shortDescription }));
}

function solutionRefs(slugs: string[]) {
    return slugs
        .map((slug) => getSolutionBySlug(slug))
        .filter((s): s is NonNullable<typeof s> => Boolean(s))
        .map((s) => ({ title: s.title, slug: s.slug, shortDescription: s.shortDescription }));
}

function generateDefaultTech(
    slug: string, name: string, categoryName: string, categorySlug: string, shortDesc: string,
    siblings: { name: string; slug: string; shortDescription: string }[],
): TechnologyItem {
    const copy = CATEGORY_COPY[categorySlug] ?? CATEGORY_COPY.backend;
    const keyword = KEYWORDS[slug] ?? (/development$/i.test(name) ? name : `${name} Development`);
    const role = ROLES[slug] ?? `${name} developers`;
    const kw = keyword.toLowerCase();
    const isService = /services|management|consulting$/i.test(keyword);
    const seoTitle = isService ? `${keyword} in India | TheWebHero` : `${keyword} Company in India | TheWebHero`;
    const dedicated = TECH_SERVICE[slug];

    return {
        slug,
        name,
        keyword,
        role,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `TheWebHero is a ${kw} company in India helping startups, SMEs and enterprises build ${copy.output} with ${name}. Our experienced ${role} deliver ${copy.benefit}.`,
        overview: `From planning and architecture to launch and long-term support, we handle every part of your ${name} project in-house. Based in Ghaziabad (Delhi NCR), we work with clients across India, the USA, the UK and the Middle East, with transparent pricing, weekly progress updates and complete code ownership.`,
        iconName: 'Code',
        useCases: copy.useCases.map(([title, description]) => ({ title, description: fill(description, name) })),
        capabilities: copy.capabilities.map(([title, description]) => ({ title, description: fill(description, name) })),
        features: [
            { title: `Experienced ${name} Team`, description: `Skilled ${role} who follow proven ${name} best practices.` },
            { title: 'Transparent Pricing', description: 'Fixed-price or dedicated-team models with no hidden costs.' },
            { title: 'Agile & On-Time Delivery', description: 'Weekly demos and clear milestones keep your project on track.' },
            { title: '100% Code Ownership', description: 'You own the source code, NDA-protected from day one.' },
        ],
        ecosystem: [
            { name: `${name} Core & Libraries`, category: 'Framework', description: `Official ${name} tooling and trusted, well-maintained libraries.` },
            { name: 'Developer Tooling', category: 'Tooling', description: 'Linters, formatters, package managers and code-quality checks.' },
            { name: 'Testing Frameworks', category: 'Quality', description: 'Automated unit, integration and end-to-end tests.' },
        ],
        integrations: [
            { name: 'Payment Gateways', type: 'Payments', description: 'Razorpay, Stripe, PayPal and UPI integrations.' },
            { name: 'Cloud Hosting', type: 'Cloud', description: 'Deployment on AWS, Google Cloud, Azure or Vercel.' },
            { name: 'CRM, ERP & Analytics', type: 'Business', description: 'Connect with HubSpot, Zoho, Salesforce and Google Analytics.' },
        ],
        process: [
            { step: 1, title: 'Discovery & Planning', description: `Understanding your goals and planning the right ${name} architecture.` },
            { step: 2, title: 'UI/UX & Architecture', description: 'Wireframes, technical design and a clear project roadmap.' },
            { step: 3, title: 'Agile Development', description: `Clean, tested ${name} code delivered in two-week sprints.` },
            { step: 4, title: 'Launch & Support', description: 'QA, secure deployment, monitoring and ongoing maintenance.' },
        ],
        security: [
            'OWASP Top 10 protection, input validation and secure coding standards',
            'Encrypted data, secure authentication and role-based access control',
            'Automated dependency and vulnerability scanning before every release',
        ],
        scalability: [
            'Architecture designed to handle growing traffic and data volume',
            'Caching, CDN and database optimisation for consistently fast performance',
            'Cloud-ready, containerised deployments that scale on demand',
        ],
        relatedServices: serviceRefs([...(dedicated ? [dedicated] : []), ...copy.services.filter((s) => s !== dedicated)].slice(0, 3)),
        relatedSolutions: solutionRefs(copy.solutions),
        relatedTechnologies: siblings.filter((t) => t.slug !== slug && t.slug !== categorySlug).slice(0, 3),
        faqs: [
            {
                question: `What ${kw} services does TheWebHero offer?`,
                answer: `We offer end-to-end ${kw}: consulting, UI/UX design, custom development, integrations, testing, deployment and ongoing maintenance. Typical projects include ${copy.useCases.map(([t]) => t.toLowerCase()).slice(0, 3).join(', ')}.`,
            },
            {
                question: `How much does ${kw} cost in India?`,
                answer: `The cost of ${kw} depends on features, integrations and timeline. We offer fixed-price projects and dedicated ${role} on a monthly basis. Share your requirements and we'll send a free, detailed estimate.`,
            },
            {
                question: `How long does a ${name} project take?`,
                answer: `A simple project or MVP usually takes 4–8 weeks, while larger custom platforms take 3–6 months. After a short discovery call we share a clear timeline with weekly milestones.`,
            },
            {
                question: `Why hire ${role} from TheWebHero?`,
                answer: `You get experienced ${role}, transparent communication, weekly demos, NDA protection and full ownership of your source code, at cost-effective rates compared with hiring in-house.`,
            },
            {
                question: `Can you integrate ${name} with our existing systems?`,
                answer: `Yes. We integrate ${name} with your existing software, databases, CRMs, ERPs, payment gateways and third-party APIs without disrupting your current operations.`,
            },
            {
                question: 'Do you provide support and maintenance after launch?',
                answer: 'Yes. We offer flexible maintenance plans covering bug fixes, security updates, performance monitoring and new feature development.',
            },
        ],
        seoTitle,
        seoDescription: `${isService ? `TheWebHero offers ${kw} in India.` : `TheWebHero is a trusted ${kw} company in India.`} Hire expert ${role} for fast, secure, scalable solutions. Free quote.`,
        status: 'active',
        featured: true,
    };
}

const ALL_TECH_MAP: Record<string, TechnologyItem> = {};

TECH_CATEGORIES.forEach((cat) => {
    // Category main page tech record
    ALL_TECH_MAP[cat.slug] = generateDefaultTech(cat.slug, cat.name, cat.name, cat.slug, cat.description, cat.technologies);

    // Individual tech records
    cat.technologies.forEach((sub) => {
        ALL_TECH_MAP[sub.slug] = generateDefaultTech(sub.slug, sub.name, cat.name, cat.slug, sub.shortDescription, cat.technologies);
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
