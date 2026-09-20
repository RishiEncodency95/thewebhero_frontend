import {
    BusinessNeedMapping,
    SolutionCategoryGroup,
    SolutionItem,
} from '../types/solution';

export const SOLUTION_CATEGORIES: SolutionCategoryGroup[] = [
    {
        id: 'digital-transformation',
        name: 'Digital Transformation',
        slug: 'digital-transformation',
        description: 'Modernize legacy technology, digitize operations, and create seamless digital experiences.',
        iconName: 'RefreshCw',
        solutions: [
            { title: 'Digital Transformation', slug: 'digital-transformation', shortDescription: 'End-to-end digital strategy, tech modernization, and process digitalization.' },
            { title: 'Digital Modernization', slug: 'digital-modernization', shortDescription: 'Upgrade tech stacks, cloud infrastructure, and user touchpoints.' },
            { title: 'Legacy System Modernization', slug: 'legacy-system-modernization', shortDescription: 'Refactor monoliths into scalable microservices and modern APIs.' },
            { title: 'Digital Experience Solutions', slug: 'digital-experience', shortDescription: 'Engaging, customer-centric portals and digital web/mobile experiences.' },
        ],
    },
    {
        id: 'business-automation',
        name: 'Business Automation',
        slug: 'business-automation',
        description: 'Streamline repetitive manual tasks, automate data processing, and boost operational throughput.',
        iconName: 'Zap',
        solutions: [
            { title: 'Business Automation', slug: 'business-automation', shortDescription: 'Custom automated workflows for core operational efficiency.' },
            { title: 'Workflow Automation', slug: 'workflow-automation', shortDescription: 'Connect tools and automate multi-step approval and operational flows.' },
            { title: 'Process Automation', slug: 'process-automation', shortDescription: 'Eliminate manual bottlenecks with automated backend logic.' },
            { title: 'Document Automation', slug: 'document-automation', shortDescription: 'Automated invoice, contract, and record parsing & generation.' },
            { title: 'AI-Powered Automation', slug: 'ai-powered-automation', shortDescription: 'Intelligent automation leveraging LLMs, OCR, and predictive models.' },
        ],
    },
    {
        id: 'startup-solutions',
        name: 'Startup Solutions',
        slug: 'startup-solutions',
        description: 'Fast-track product launches, build scalable MVPs, and accelerate time-to-market for founders.',
        iconName: 'Rocket',
        solutions: [
            { title: 'Startup Solutions', slug: 'startup-solutions', shortDescription: 'Complete product engineering services tailored for high-growth startups.' },
            { title: 'MVP Development', slug: 'mvp-development', shortDescription: 'Rapid prototyping and production-ready Minimum Viable Products.' },
            { title: 'Startup Product Development', slug: 'startup-product-development', shortDescription: 'Full-lifecycle software engineering from concept to scale.' },
            { title: 'Startup Technology Consulting', slug: 'startup-technology-consulting', shortDescription: 'CTO-level architecture advice, stack selection, and tech roadmap.' },
            { title: 'Startup Scaling Solutions', slug: 'startup-scaling', shortDescription: 'Infrastructure optimization and code refactoring for high user growth.' },
        ],
    },
    {
        id: 'enterprise-solutions',
        name: 'Enterprise Solutions',
        slug: 'enterprise-solutions',
        description: 'Mission-critical software architectures, enterprise integration, and high-security IT platforms.',
        iconName: 'Building2',
        solutions: [
            { title: 'Enterprise Solutions', slug: 'enterprise-solutions', shortDescription: 'Scalable corporate systems engineered for security and high availability.' },
            { title: 'Enterprise Application Development', slug: 'enterprise-application-development', shortDescription: 'Robust custom platforms built for large organization workflows.' },
            { title: 'Enterprise Integration', slug: 'enterprise-integration', shortDescription: 'Connect SAP, Salesforce, legacy DBs, and modern cloud microservices.' },
            { title: 'Enterprise Modernization', slug: 'enterprise-modernization', shortDescription: 'Transform heavy legacy software into agile cloud architectures.' },
            { title: 'Enterprise IT Support', slug: 'enterprise-it-support', shortDescription: 'Dedicated SLA support, network monitoring, and cybersecurity.' },
        ],
    },
    {
        id: 'saas-solutions',
        name: 'SaaS Solutions',
        slug: 'saas-development',
        description: 'Cloud-native, multi-tenant software platforms with subscription billing and global scale.',
        iconName: 'Cloud',
        solutions: [
            { title: 'SaaS Development', slug: 'saas-development', shortDescription: 'Architecting end-to-end B2B and B2C software-as-a-service platforms.' },
            { title: 'SaaS Product Development', slug: 'saas-product-development', shortDescription: 'Turn software ideas into recurring revenue SaaS applications.' },
            { title: 'SaaS Platform Modernization', slug: 'saas-platform-modernization', shortDescription: 'Upgrade existing SaaS to multi-tenant cloud microservices.' },
            { title: 'Multi-Tenant SaaS', slug: 'multi-tenant-saas', shortDescription: 'Secure tenant data isolation, custom branding, and billing controls.' },
            { title: 'SaaS Maintenance & Support', slug: 'saas-maintenance-support', shortDescription: '24/7 uptime monitoring, security patches, and feature updates.' },
        ],
    },
    {
        id: 'marketplace-solutions',
        name: 'Marketplace Solutions',
        slug: 'marketplace-development',
        description: 'Feature-rich multi-vendor platforms connecting buyers, sellers, and service providers.',
        iconName: 'Store',
        solutions: [
            { title: 'Marketplace Development', slug: 'marketplace-development', shortDescription: 'Custom online marketplaces with split payments and vendor management.' },
            { title: 'B2B Marketplace', slug: 'b2b-marketplace', shortDescription: 'Wholesale, bulk order, and enterprise vendor trading platforms.' },
            { title: 'B2C Marketplace', slug: 'b2c-marketplace', shortDescription: 'High-conversion consumer marketplaces with seamless search & checkout.' },
            { title: 'Multi-Vendor Marketplace', slug: 'multi-vendor-marketplace', shortDescription: 'Empower third-party sellers with vendor dashboards and commission engines.' },
            { title: 'Marketplace Management Platform', slug: 'marketplace-management-platform', shortDescription: 'Centralized admin controls for listings, disputes, and payouts.' },
        ],
    },
    {
        id: 'crm-solutions',
        name: 'CRM Solutions',
        slug: 'crm-development',
        description: 'Custom relationship management platforms to track leads, automate sales, and support customers.',
        iconName: 'Users',
        solutions: [
            { title: 'CRM Development', slug: 'crm-development', shortDescription: 'Bespoke CRM software designed for your unique sales funnel and pipeline.' },
            { title: 'Custom CRM', slug: 'custom-crm', shortDescription: 'Tailored lead management, deal tracking, and analytics dashboards.' },
            { title: 'CRM Integration', slug: 'crm-integration', shortDescription: 'Seamlessly sync CRM with email, WhatsApp, ERP, and payment tools.' },
            { title: 'CRM Automation', slug: 'crm-automation', shortDescription: 'Automate follow-ups, lead assignment, and email nurture campaigns.' },
            { title: 'CRM Modernization', slug: 'crm-modernization', shortDescription: 'Migrate legacy customer databases to high-speed cloud CRMs.' },
        ],
    },
    {
        id: 'erp-solutions',
        name: 'ERP Solutions',
        slug: 'erp-development',
        description: 'Unified resource planning systems for inventory, finance, HR, and supply chain operations.',
        iconName: 'Layers',
        solutions: [
            { title: 'ERP Development', slug: 'erp-development', shortDescription: 'Centralized enterprise resource planning tailored to company operations.' },
            { title: 'Custom ERP', slug: 'custom-erp', shortDescription: 'Modular ERP software managing inventory, payroll, and logistics.' },
            { title: 'ERP Integration', slug: 'erp-integration', shortDescription: 'Bridge ERP with eCommerce storefronts, warehouses, and banking APIs.' },
            { title: 'ERP Modernization', slug: 'erp-modernization', shortDescription: 'Upgrade outdated desktop ERPs to secure web and mobile platforms.' },
            { title: 'ERP Automation', slug: 'erp-automation', shortDescription: 'Automate purchase orders, stock updates, and financial reporting.' },
        ],
    },
    {
        id: 'ecommerce-solutions',
        name: 'eCommerce Solutions',
        slug: 'ecommerce-solutions',
        description: 'High-performing online shopping platforms engineered for conversion, speed, and scale.',
        iconName: 'ShoppingCart',
        solutions: [
            { title: 'eCommerce Solutions', slug: 'ecommerce-solutions', shortDescription: 'Modern e-commerce platforms designed for global online selling.' },
            { title: 'B2B eCommerce', slug: 'b2b-ecommerce', shortDescription: 'Wholesale portals with custom pricing tiers, POs, and bulk orders.' },
            { title: 'B2C eCommerce', slug: 'b2c-ecommerce', shortDescription: 'Mobile-first online stores with fast checkout and payment gateways.' },
            { title: 'Headless eCommerce', slug: 'headless-ecommerce', shortDescription: 'Decoupled frontend & backend API architecture for extreme speed.' },
            { title: 'Multi-Vendor eCommerce', slug: 'multi-vendor-ecommerce', shortDescription: 'Scalable multi-merchant shopping portals with automatic commission.' },
            { title: 'eCommerce Migration', slug: 'ecommerce-migration', shortDescription: 'Zero-downtime migration of products, customers, and orders.' },
        ],
    },
    {
        id: 'on-demand-solutions',
        name: 'On-Demand Solutions',
        slug: 'on-demand-solutions',
        description: 'Real-time booking, dispatch, and service platforms connecting customers with providers instantly.',
        iconName: 'Smartphone',
        solutions: [
            { title: 'On-Demand Solutions', slug: 'on-demand-solutions', shortDescription: 'Custom mobile & web apps for real-time service matching and booking.' },
            { title: 'On-Demand Delivery', slug: 'on-demand-delivery', shortDescription: 'Live GPS tracking, order routing, and delivery partner apps.' },
            { title: 'On-Demand Service Marketplace', slug: 'on-demand-service-marketplace', shortDescription: 'Connect users with home services, healthcare, or logistics experts.' },
            { title: 'Booking & Appointment Platform', slug: 'booking-appointment-platform', shortDescription: 'Automated scheduling, slot management, and SMS/Email reminders.' },
            { title: 'On-Demand Business Automation', slug: 'on-demand-business-automation', shortDescription: 'Automate provider dispatch, invoicing, and payout calculations.' },
        ],
    },
];

export const BUSINESS_NEED_MAPPINGS: BusinessNeedMapping[] = [
    {
        needTitle: 'Build a New Digital Product',
        needDescription: 'Launch an innovative product or MVP quickly with scalable architecture.',
        iconName: 'Rocket',
        solutions: [
            { title: 'Startup Solutions', slug: 'startup-solutions' },
            { title: 'MVP Development', slug: 'mvp-development' },
            { title: 'SaaS Product Development', slug: 'saas-product-development' },
            { title: 'Custom Software', slug: 'custom-software-development' },
        ],
    },
    {
        needTitle: 'Automate Manual Operations',
        needDescription: 'Reduce operational drag and eliminate repetitive human errors with smart workflows.',
        iconName: 'Zap',
        solutions: [
            { title: 'Business Automation', slug: 'business-automation' },
            { title: 'Workflow Automation', slug: 'workflow-automation' },
            { title: 'Process Automation', slug: 'process-automation' },
            { title: 'AI-Powered Automation', slug: 'ai-powered-automation' },
        ],
    },
    {
        needTitle: 'Modernize an Old System',
        needDescription: 'Upgrade outdated legacy codebases, monolithic servers, and slow databases.',
        iconName: 'RefreshCw',
        solutions: [
            { title: 'Digital Transformation', slug: 'digital-transformation' },
            { title: 'Legacy System Modernization', slug: 'legacy-system-modernization' },
            { title: 'Enterprise Modernization', slug: 'enterprise-modernization' },
            { title: 'Platform Modernization', slug: 'saas-platform-modernization' },
        ],
    },
    {
        needTitle: 'Build a Multi-Vendor Marketplace',
        needDescription: 'Empower multiple merchants, vendors, or service providers on a unified portal.',
        iconName: 'Store',
        solutions: [
            { title: 'Marketplace Development', slug: 'marketplace-development' },
            { title: 'B2B Marketplace', slug: 'b2b-marketplace' },
            { title: 'B2C Marketplace', slug: 'b2c-marketplace' },
            { title: 'Multi-Vendor Marketplace', slug: 'multi-vendor-marketplace' },
        ],
    },
    {
        needTitle: 'Improve Customer Relationship & Sales',
        needDescription: 'Track leads, organize pipeline deals, and automate sales follow-ups seamlessly.',
        iconName: 'Users',
        solutions: [
            { title: 'CRM Development', slug: 'crm-development' },
            { title: 'Custom CRM', slug: 'custom-crm' },
            { title: 'CRM Integration', slug: 'crm-integration' },
            { title: 'CRM Automation', slug: 'crm-automation' },
        ],
    },
    {
        needTitle: 'Manage Enterprise Operations & ERP',
        needDescription: 'Integrate inventory, procurement, finances, and HR in a single dashboard.',
        iconName: 'Layers',
        solutions: [
            { title: 'ERP Development', slug: 'erp-development' },
            { title: 'Custom ERP', slug: 'custom-erp' },
            { title: 'ERP Integration', slug: 'erp-integration' },
            { title: 'ERP Automation', slug: 'erp-automation' },
        ],
    },
    {
        needTitle: 'Build an Online Commerce Store',
        needDescription: 'Create fast, conversion-focused e-commerce portals with secure payment gateways.',
        iconName: 'ShoppingCart',
        solutions: [
            { title: 'eCommerce Solutions', slug: 'ecommerce-solutions' },
            { title: 'B2B eCommerce', slug: 'b2b-ecommerce' },
            { title: 'B2C eCommerce', slug: 'b2c-ecommerce' },
            { title: 'Headless eCommerce', slug: 'headless-ecommerce' },
        ],
    },
    {
        needTitle: 'Build an On-Demand Platform',
        needDescription: 'Real-time customer booking, live delivery tracking, and provider dispatch.',
        iconName: 'Smartphone',
        solutions: [
            { title: 'On-Demand Solutions', slug: 'on-demand-solutions' },
            { title: 'On-Demand Delivery', slug: 'on-demand-delivery' },
            { title: 'On-Demand Service Marketplace', slug: 'on-demand-service-marketplace' },
            { title: 'Booking & Appointment Platform', slug: 'booking-appointment-platform' },
        ],
    },
];

function generateDefaultSolution(slug: string, title: string, categoryName: string, categorySlug: string, shortDesc: string): SolutionItem {
    return {
        slug,
        title,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `Our ${title} solution empowers organizations to overcome technical constraints, digitize operations, and drive sustainable growth. Engineered with modular architecture, robust API integrations, and enterprise-grade security.`,
        iconName: 'Layers',
        challenges: [
            { title: 'Fragmented Operational Systems', description: 'Siloed data and legacy tools cause communication gaps and slow operational turnaround.' },
            { title: 'Scaling Bottlenecks', description: 'Inability of existing infrastructure to handle increasing user volume and transaction loads.' },
            { title: 'Manual Data Overheads', description: 'Repetitive human tasks leading to higher operational costs and processing errors.' },
            { title: 'Security & Compliance Exposure', description: 'Outdated protocols risking data breaches and failing modern industry compliance standards.' },
        ],
        capabilities: [
            { title: 'Custom Solution Architecture', description: `Bespoke ${title} design aligned with your specific business goals and system environment.` },
            { title: 'High-Throughput Engineering', description: 'Optimized databases, cached microservices, and asynchronous event pipelines.' },
            { title: 'Enterprise Integration', description: 'Seamless connectivity with payment gateways, CRMs, ERPs, and third-party APIs.' },
            { title: 'Proactive Security & SLA Care', description: 'Role-based access controls, data encryption, automated backups, and 24/7 monitoring.' },
        ],
        audience: [
            { title: 'Growing Startups', description: 'Seeking rapid MVP launch, scalable foundation, and efficient product iteration.' },
            { title: 'Mid-Market Companies', description: 'Looking to automate workflows, upgrade legacy code, and expand digital touchpoints.' },
            { title: 'Enterprise Organizations', description: 'Requiring multi-tenant security, high availability, and complex system integrations.' },
        ],
        features: [
            { title: 'Centralized Management Dashboard', description: 'Real-time visibility into business metrics, user activities, and operational status.' },
            { title: 'Automated Workflow Engine', description: 'Trigger-based actions, automated notifications, and document processing.' },
            { title: 'Role-Based Access & Security', description: 'Granular permissions, multi-factor authentication, and audit log tracking.' },
            { title: 'Scalable Cloud Infrastructure', description: 'Auto-scaling server environments engineered to handle traffic spikes effortlessly.' },
        ],
        technologies: [
            { name: 'React / Next.js', category: 'Frontend' },
            { name: 'Node.js / Express', category: 'Backend' },
            { name: 'PostgreSQL / MongoDB', category: 'Database' },
            { name: 'AWS / Cloud Infrastructure', category: 'Cloud & DevOps' },
            { name: 'REST & GraphQL APIs', category: 'Integration' },
        ],
        integrations: [
            { name: 'Payment Gateways', type: 'Fintech', description: 'Stripe, Razorpay, PayPal, and multi-currency billing engines.' },
            { name: 'CRM & Marketing Tools', type: 'Sales', description: 'HubSpot, Salesforce, and automated email/SMS providers.' },
            { name: 'Cloud Storage & Backups', type: 'Infra', description: 'AWS S3, Google Cloud, and encrypted automated backup vaults.' },
        ],
        process: [
            { step: 1, title: 'Needs Analysis & Strategy', description: 'Detailed alignment on business goals, operational constraints, and technical roadmap.' },
            { step: 2, title: 'Architecture & UI Prototype', description: 'Creating modular system blueprints, database schemas, and interactive user flows.' },
            { step: 3, title: 'Sprint Implementation', description: 'Iterative agile development with continuous testing and transparent status reporting.' },
            { step: 4, title: 'Quality Assurance & Launch', description: 'Rigorous stress testing, security audits, production deployment, and SLA support.' },
        ],
        benefits: [
            { title: 'Accelerated Time-to-Market', description: 'Launch robust digital solutions quickly with proven engineering patterns.' },
            { title: 'Reduced Operational Friction', description: 'Automate manual processes to lower labor costs and eliminate human error.' },
            { title: 'Seamless User & Customer Experience', description: 'Deliver intuitive, lightning-fast interfaces that boost engagement and retention.' },
            { title: 'Future-Proof Scalability', description: 'Architecture built to support high transaction volumes without performance degradation.' },
        ],
        security: [
            'End-to-end data encryption in transit and at rest (AES-256 / TLS 1.3)',
            'OWASP-compliant code auditing and vulnerability protection',
            'Granular Role-Based Access Control (RBAC) and SSO integration',
            'Automated daily database snapshots and disaster recovery protocols',
        ],
        scalability: [
            'Microservices and modular architecture supporting horizontal scaling',
            'Stateless API instances with Redis caching for ultra-low latency',
            'Cloud auto-scaling server groups responding dynamically to load spikes',
        ],
        relatedServices: [
            { title: 'Web Application Development', slug: 'web-application-development', shortDescription: 'Scalable web apps built with Next.js & React.' },
            { title: 'Cloud & DevOps', slug: 'cloud-devops', shortDescription: 'Automated CI/CD pipelines & cloud infrastructure.' },
            { title: 'API Integration', slug: 'api-integration', shortDescription: 'Connect third-party web services and APIs.' },
        ],
        relatedSolutions: [
            { title: 'Business Automation', slug: 'business-automation', shortDescription: 'Streamline operational workflows.' },
            { title: 'Digital Transformation', slug: 'digital-transformation', shortDescription: 'Modernize tech systems and processes.' },
            { title: 'SaaS Development', slug: 'saas-development', shortDescription: 'Build scalable multi-tenant SaaS products.' },
        ],
        faqs: [
            { question: `What is included in your ${title} solution?`, answer: `Our ${title} solution includes end-to-end strategy, custom architecture, web/mobile development, integration with existing software, security testing, and ongoing SLA maintenance.` },
            { question: 'Can this solution integrate with our existing ERP/CRM software?', answer: 'Yes. We build custom API connectors and microservices designed to integrate seamlessly with your current technical stack.' },
            { question: 'How long does implementation typically take?', answer: 'Timelines depend on functional scope. MVP builds typically take 4 to 8 weeks, while full enterprise solutions range from 8 to 16 weeks.' },
            { question: 'Do you provide post-launch support and maintenance?', answer: 'Yes, we offer ongoing SLA retainer plans, server monitoring, security updates, and performance tuning.' },
        ],
        seoTitle: `${title} Solutions | TheWebHero Enterprise Engineering`,
        seoDescription: `Custom ${title} by TheWebHero. High-performance, scalable, and secure digital software solutions designed to transform your operations and drive growth.`,
        status: 'active',
        featured: true,
    };
}

const ALL_SOLUTIONS_MAP: Record<string, SolutionItem> = {};

SOLUTION_CATEGORIES.forEach((cat) => {
    // Add Category level main page solution record
    ALL_SOLUTIONS_MAP[cat.slug] = generateDefaultSolution(
        cat.slug,
        cat.name,
        cat.name,
        cat.slug,
        cat.description
    );

    // Add each child solution record
    cat.solutions.forEach((sub) => {
        ALL_SOLUTIONS_MAP[sub.slug] = generateDefaultSolution(
            sub.slug,
            sub.title,
            cat.name,
            cat.slug,
            sub.shortDescription
        );
    });
});

export function getAllSolutions(): SolutionItem[] {
    return Object.values(ALL_SOLUTIONS_MAP);
}

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
    return ALL_SOLUTIONS_MAP[slug];
}

export function getSolutionsByCategory(categorySlug: string): SolutionItem[] {
    return Object.values(ALL_SOLUTIONS_MAP).filter((s) => s.categorySlug === categorySlug && s.slug !== categorySlug);
}

export function getAllSolutionCategories(): SolutionCategoryGroup[] {
    return SOLUTION_CATEGORIES;
}

export function getAllSolutionSlugs(): string[] {
    return Object.keys(ALL_SOLUTIONS_MAP);
}

export function getBusinessNeedMappings(): BusinessNeedMapping[] {
    return BUSINESS_NEED_MAPPINGS;
}
