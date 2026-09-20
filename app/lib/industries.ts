import { IndustryCategoryGroup, IndustryItem } from '../types/industry';

export const INDUSTRY_CATEGORIES: IndustryCategoryGroup[] = [
    {
        id: 'healthcare',
        name: 'Healthcare',
        slug: 'healthcare',
        description: 'HIPAA-aligned healthcare software, hospital systems, telemedicine platforms, and patient portals.',
        iconName: 'HeartPulse',
        industries: [
            { name: 'Healthcare', slug: 'healthcare', shortDescription: 'Comprehensive digital healthcare software and patient management platforms.' },
            { name: 'Healthcare Software', slug: 'healthcare-software', shortDescription: 'Custom clinical workflows, EHR integrations, and medical record systems.' },
            { name: 'Hospital & Clinic Solutions', slug: 'hospital-clinic-solutions', shortDescription: 'Hospital management, bed tracking, and outpatient scheduling portals.' },
            { name: 'Telemedicine Solutions', slug: 'telemedicine-solutions', shortDescription: 'Encrypted video consultations, remote patient monitoring, and e-prescriptions.' },
            { name: 'Healthcare Management Systems', slug: 'healthcare-management-systems', shortDescription: 'Administrative healthcare automation, billing, and lab report management.' },
        ],
    },
    {
        id: 'education',
        name: 'Education',
        slug: 'education',
        description: 'Learning management systems, online learning platforms, and school administration software.',
        iconName: 'GraduationCap',
        industries: [
            { name: 'Education', slug: 'education', shortDescription: 'EdTech digital learning products and virtual classroom software.' },
            { name: 'EdTech Solutions', slug: 'edtech-solutions', shortDescription: 'Interactive educational tools, student engagement apps, and grading engines.' },
            { name: 'Learning Management Systems', slug: 'learning-management-systems', shortDescription: 'Custom LMS platforms for course delivery, video streaming, and quizzes.' },
            { name: 'School Management Software', slug: 'school-management-software', shortDescription: 'School administrative portals, fee tracking, and parent communication.' },
            { name: 'Online Learning Platforms', slug: 'online-learning-platforms', shortDescription: 'Scalable web and mobile e-learning portals with subscription access.' },
        ],
    },
    {
        id: 'fintech',
        name: 'FinTech',
        slug: 'fintech',
        description: 'Secure digital banking portals, payment processing gateways, wealth tech, and insurtech.',
        iconName: 'Wallet',
        industries: [
            { name: 'FinTech', slug: 'fintech', shortDescription: 'Next-generation financial technology software and secure transaction engines.' },
            { name: 'Banking Solutions', slug: 'banking-solutions', shortDescription: 'Digital retail banking apps, account management, and fund transfer portals.' },
            { name: 'Payment Solutions', slug: 'payment-solutions', shortDescription: 'Multi-currency payment gateways, digital wallets, and payout engines.' },
            { name: 'Financial Management Software', slug: 'financial-management-software', shortDescription: 'Corporate accounting, ledger auditing, and automated financial reporting.' },
            { name: 'InsurTech', slug: 'insurtech', shortDescription: 'Insurance policy portals, automated claims processing, and risk assessment.' },
        ],
    },
    {
        id: 'ecommerce-retail',
        name: 'eCommerce & Retail',
        slug: 'ecommerce-retail',
        description: 'Online store platforms, B2B wholesale portals, and multi-vendor marketplaces.',
        iconName: 'ShoppingCart',
        industries: [
            { name: 'eCommerce & Retail', slug: 'ecommerce-retail', shortDescription: 'High-converting digital commerce portals and retail management systems.' },
            { name: 'Retail Technology', slug: 'retail-technology', shortDescription: 'Omnichannel retail software, inventory sync, and customer loyalty platforms.' },
            { name: 'Online Marketplace', slug: 'online-marketplace', shortDescription: 'B2C and B2B online marketplaces connecting buyers and merchants.' },
            { name: 'Multi-Vendor Commerce', slug: 'multi-vendor-commerce', shortDescription: 'Multi-merchant e-commerce stores with automated vendor payout rules.' },
            { name: 'Retail Management Systems', slug: 'retail-management-systems', shortDescription: 'Centralized inventory, point-of-sale, and store operations platforms.' },
        ],
    },
    {
        id: 'real-estate',
        name: 'Real Estate',
        slug: 'real-estate',
        description: 'Property listing portals, real estate CRM software, property management, and tenant apps.',
        iconName: 'Building',
        industries: [
            { name: 'Real Estate', slug: 'real-estate', shortDescription: 'Digital real estate platforms, property search engines, and broker tools.' },
            { name: 'Property Management', slug: 'property-management', shortDescription: 'Lease tracking, tenant portals, maintenance requests, and rent collection.' },
            { name: 'Real Estate Marketplace', slug: 'real-estate-marketplace', shortDescription: 'Property listing search portals with map integration and filter controls.' },
            { name: 'Property Booking Platforms', slug: 'property-booking-platforms', shortDescription: 'Short-term rental and commercial space booking platforms.' },
            { name: 'Real Estate CRM', slug: 'real-estate-crm', shortDescription: 'Lead management and deal pipeline software for real estate agents.' },
        ],
    },
    {
        id: 'logistics-transportation',
        name: 'Logistics & Transportation',
        slug: 'logistics-transportation',
        description: 'Fleet management, freight tracking, delivery dispatch systems, and warehouse logistics.',
        iconName: 'Truck',
        industries: [
            { name: 'Logistics & Transportation', slug: 'logistics-transportation', shortDescription: 'End-to-end supply chain software and fleet dispatch solutions.' },
            { name: 'Logistics Software', slug: 'logistics-software', shortDescription: 'Freight management, route optimization, and shipment tracking.' },
            { name: 'Fleet Management', slug: 'fleet-management', shortDescription: 'Vehicle telematics, maintenance scheduling, and driver management.' },
            { name: 'Delivery Management', slug: 'delivery-management', shortDescription: 'Last-mile delivery dispatch apps and real-time GPS package tracking.' },
            { name: 'Tracking & Dispatch Systems', slug: 'tracking-dispatch-systems', shortDescription: 'Automated order dispatch and live driver location tracking.' },
        ],
    },
    {
        id: 'travel-hospitality',
        name: 'Travel & Hospitality',
        slug: 'travel-hospitality',
        description: 'Hotel reservation engines, travel booking portals, itinerary planners, and guest management.',
        iconName: 'Compass',
        industries: [
            { name: 'Travel & Hospitality', slug: 'travel-hospitality', shortDescription: 'Digital travel booking software and hotel operational portals.' },
            { name: 'Travel Platforms', slug: 'travel-platforms', shortDescription: 'Flight, tour, and itinerary booking web and mobile applications.' },
            { name: 'Hotel Management', slug: 'hotel-management', shortDescription: 'Property management systems (PMS), room booking, and housekeeping.' },
            { name: 'Booking Platforms', slug: 'booking-appointment-platform', shortDescription: 'Online reservation and ticket booking software for hospitality.' },
            { name: 'Hospitality Automation', slug: 'hospitality-automation', shortDescription: 'Self check-in digital kiosks, keyless entry, and guest support bots.' },
        ],
    },
    {
        id: 'food-restaurant',
        name: 'Food & Restaurant',
        slug: 'food-restaurant',
        description: 'Online food delivery platforms, restaurant POS systems, and digital kitchen ordering.',
        iconName: 'Utensils',
        industries: [
            { name: 'Food & Restaurant', slug: 'food-restaurant', shortDescription: 'Digital restaurant ordering platforms and food delivery applications.' },
            { name: 'Restaurant Management', slug: 'restaurant-management', shortDescription: 'Table reservation, inventory control, and kitchen order display (KDS).' },
            { name: 'Food Delivery', slug: 'food-delivery', shortDescription: 'Multi-restaurant food delivery platforms with live GPS order tracking.' },
            { name: 'Online Ordering', slug: 'online-ordering', shortDescription: 'Direct restaurant web & mobile ordering portals with digital payments.' },
            { name: 'Restaurant POS Solutions', slug: 'restaurant-pos-solutions', shortDescription: 'Cloud-based Point-of-Sale systems for billing and menu management.' },
        ],
    },
    {
        id: 'fitness-wellness',
        name: 'Fitness & Wellness',
        slug: 'fitness-wellness',
        description: 'Gym management software, workout tracking apps, and wellness booking platforms.',
        iconName: 'Activity',
        industries: [
            { name: 'Fitness & Wellness', slug: 'fitness-wellness', shortDescription: 'Digital fitness applications, trainer portals, and gym platforms.' },
            { name: 'Fitness Applications', slug: 'fitness-applications', shortDescription: 'Mobile workout tracking, exercise video streaming, and nutrition plans.' },
            { name: 'Gym Management', slug: 'gym-management', shortDescription: 'Member check-in, subscription billing, and gym class scheduling.' },
            { name: 'Wellness Platforms', slug: 'wellness-platforms', shortDescription: 'Corporate wellness portals and mental well-being tracking apps.' },
            { name: 'Appointment & Membership Systems', slug: 'appointment-membership-systems', shortDescription: 'Automated membership renewals and trainer appointment booking.' },
        ],
    },
    {
        id: 'entertainment-media',
        name: 'Entertainment & Media',
        slug: 'entertainment-media',
        description: 'Video streaming platforms, digital content publishing, and event ticketing software.',
        iconName: 'Film',
        industries: [
            { name: 'Entertainment & Media', slug: 'entertainment-media', shortDescription: 'Digital media streaming applications and entertainment platforms.' },
            { name: 'Media Platforms', slug: 'media-platforms', shortDescription: 'Digital news publishing, podcast hosting, and content distribution.' },
            { name: 'Streaming Solutions', slug: 'streaming-solutions', shortDescription: 'OTT video streaming applications with subscription and DRM access.' },
            { name: 'Content Platforms', slug: 'content-platforms', shortDescription: 'Creator portals, video-on-demand (VOD), and digital asset libraries.' },
            { name: 'Event & Ticketing', slug: 'event-ticketing', shortDescription: 'Concert and event ticket booking portals with QR code entry.' },
        ],
    },
    {
        id: 'gaming',
        name: 'Gaming',
        slug: 'gaming',
        description: 'Multiplayer game backends, gaming portals, leaderboards, and game development engines.',
        iconName: 'Gamepad2',
        industries: [
            { name: 'Gaming', slug: 'gaming', shortDescription: 'Web and mobile gaming software, multiplayer backends, and game platforms.' },
            { name: 'Game Development Solutions', slug: 'game-development-solutions', shortDescription: 'Interactive 2D/3D game engineering using Unity and HTML5 engines.' },
            { name: 'Gaming Platforms', slug: 'gaming-platforms', shortDescription: 'Online gaming portals, tournament hubs, and player profiles.' },
            { name: 'Multiplayer Systems', slug: 'multiplayer-systems', shortDescription: 'Real-time WebSocket multiplayer servers and matchmaking logic.' },
            { name: 'Gaming Backend', slug: 'gaming-backend', shortDescription: 'Player inventory, leaderboards, in-game currency, and micro-transactions.' },
        ],
    },
    {
        id: 'automotive',
        name: 'Automotive',
        slug: 'automotive',
        description: 'Auto dealership software, vehicle service booking, and connected fleet mobility platforms.',
        iconName: 'Car',
        industries: [
            { name: 'Automotive', slug: 'automotive', shortDescription: 'Automotive software solutions and car dealership management systems.' },
            { name: 'Automotive Software', slug: 'automotive-software', shortDescription: 'Vehicle diagnostics tools, spare part inventory, and service software.' },
            { name: 'Dealer Management', slug: 'dealer-management', shortDescription: 'Car dealership CRM, vehicle inventory listings, and test-drive booking.' },
            { name: 'Vehicle Service Platforms', slug: 'vehicle-service-platforms', shortDescription: 'Auto repair shop scheduling, digital invoicing, and service history.' },
            { name: 'Fleet & Mobility', slug: 'fleet-mobility', shortDescription: 'Car sharing, rental vehicle booking, and connected car telematics.' },
        ],
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        slug: 'manufacturing',
        description: 'Production management software, inventory tracking, and industrial automation tools.',
        iconName: 'Factory',
        industries: [
            { name: 'Manufacturing', slug: 'manufacturing', shortDescription: 'Smart factory software, production tracking, and supply chain ERP.' },
            { name: 'Manufacturing Software', slug: 'manufacturing-software', shortDescription: 'Custom plant operational software and machine maintenance tracking.' },
            { name: 'Production Management', slug: 'production-management', shortDescription: 'Work order scheduling, assembly line tracking, and quality control.' },
            { name: 'Inventory & Operations', slug: 'inventory-operations', shortDescription: 'Raw material inventory management and warehouse tracking.' },
            { name: 'Industrial Automation', slug: 'industrial-automation', shortDescription: 'IoT sensor monitoring and automated operational alerts.' },
        ],
    },
    {
        id: 'retail',
        name: 'Retail',
        slug: 'retail',
        description: 'Point of sale (POS) systems, store inventory management, and omnichannel retail platforms.',
        iconName: 'Store',
        industries: [
            { name: 'Retail', slug: 'retail', shortDescription: 'Retail management software and store Point of Sale solutions.' },
            { name: 'Retail Management', slug: 'retail-management', shortDescription: 'Centralized store operations, barcode scanning, and sales analytics.' },
            { name: 'Point of Sale', slug: 'point-of-sale', shortDescription: 'Cloud POS software for retail stores with receipt printing and payment.' },
            { name: 'Inventory Management', slug: 'inventory-management', shortDescription: 'Stock level tracking, automatic purchase orders, and supplier sync.' },
            { name: 'Omnichannel Retail', slug: 'omnichannel-retail', shortDescription: 'Unified inventory and customer data across physical and online stores.' },
        ],
    },
    {
        id: 'sports',
        name: 'Sports',
        slug: 'sports',
        description: 'Sports club management portals, tournament platforms, and venue booking systems.',
        iconName: 'Trophy',
        industries: [
            { name: 'Sports', slug: 'sports', shortDescription: 'Sports league management, venue booking, and athlete tracking applications.' },
            { name: 'Sports Management', slug: 'sports-management', shortDescription: 'League scheduling, team roster tracking, and match scoring software.' },
            { name: 'Sports Club Platforms', slug: 'sports-club-platforms', shortDescription: 'Sports club membership portals, fee collection, and event notices.' },
            { name: 'Tournament Management', slug: 'tournament-management', shortDescription: 'Automated tournament bracket generation and live score publishing.' },
            { name: 'Sports Booking Platforms', slug: 'sports-booking-platforms', shortDescription: 'Turf and court reservation software with online payment processing.' },
        ],
    },
    {
        id: 'legal',
        name: 'Legal',
        slug: 'legal',
        description: 'Legal practice management, case management, document vaults, and client portals.',
        iconName: 'Scale',
        industries: [
            { name: 'Legal', slug: 'legal', shortDescription: 'Legal practice software, case tracking, and secure document portals.' },
            { name: 'Legal Practice Management', slug: 'legal-practice-management', shortDescription: 'Law firm time billing, matter tracking, and trust accounting.' },
            { name: 'Case Management', slug: 'case-management', shortDescription: 'Case file organization, court date scheduling, and client notes.' },
            { name: 'Legal Document Management', slug: 'legal-document-management', shortDescription: 'Encrypted legal document storage, e-signatures, and version control.' },
            { name: 'Client Portals', slug: 'legal-client-portals', shortDescription: 'Secure client communication portals for document sharing and updates.' },
        ],
    },
    {
        id: 'insurance',
        name: 'Insurance',
        slug: 'insurance',
        description: 'Policy management portals, claims processing, and insurance broker CRM software.',
        iconName: 'Shield',
        industries: [
            { name: 'Insurance', slug: 'insurance', shortDescription: 'Insurance software systems, digital policy distribution, and claims automation.' },
            { name: 'Insurance Software', slug: 'insurance-software', shortDescription: 'Underwriting workflows, premium calculation, and policy generation.' },
            { name: 'Policy Management', slug: 'policy-management', shortDescription: 'Policy lifecycle tracking, renewals, and customer document vaults.' },
            { name: 'Claims Management', slug: 'claims-management', shortDescription: 'Automated claim submission, document verification, and status tracking.' },
            { name: 'Insurance CRM', slug: 'insurance-crm', shortDescription: 'Lead tracking and policy renewal automation for insurance agents.' },
        ],
    },
    {
        id: 'agriculture',
        name: 'Agriculture',
        slug: 'agriculture',
        description: 'AgriTech solutions, farm management software, and agricultural supply chain portals.',
        iconName: 'Sprout',
        industries: [
            { name: 'Agriculture', slug: 'agriculture', shortDescription: 'AgriTech software, crop tracking, and agricultural trading portals.' },
            { name: 'AgriTech Solutions', slug: 'agritech-solutions', shortDescription: 'Smart farming portals, weather alerts, and crop yield planning tools.' },
            { name: 'Farm Management', slug: 'farm-management', shortDescription: 'Field activity tracking, machinery scheduling, and harvest records.' },
            { name: 'Supply Chain Solutions', slug: 'agriculture-supply-chain', shortDescription: 'Produce traceability, cold chain tracking, and distribution logistics.' },
            { name: 'Agricultural Marketplace', slug: 'agricultural-marketplace', shortDescription: 'Direct B2B marketplaces connecting farmers with produce buyers.' },
        ],
    },
    {
        id: 'construction',
        name: 'Construction',
        slug: 'construction',
        description: 'Construction project management, contractor portals, and building ERP software.',
        iconName: 'HardHat',
        industries: [
            { name: 'Construction', slug: 'construction', shortDescription: 'Construction software, jobsite tracking, and building project ERP.' },
            { name: 'Construction Management', slug: 'construction-management', shortDescription: 'Jobsite activity logs, safety reports, and material requisition.' },
            { name: 'Project Management', slug: 'construction-project-management', shortDescription: 'Construction milestone tracking, budget auditing, and blueprint sharing.' },
            { name: 'Contractor Management', slug: 'contractor-management', shortDescription: 'Subcontractor dispatch, daily attendance, and payout management.' },
            { name: 'Construction ERP', slug: 'construction-erp', shortDescription: 'Integrated equipment tracking, project accounting, and inventory.' },
        ],
    },
    {
        id: 'saas',
        name: 'SaaS',
        slug: 'saas',
        description: 'Cloud-native multi-tenant SaaS software engineering, tenant isolation, and billing.',
        iconName: 'CloudLightning',
        industries: [
            { name: 'SaaS', slug: 'saas', shortDescription: 'Complete B2B and B2C Software-as-a-Service product engineering.' },
            { name: 'SaaS Product Development', slug: 'saas-product-development', shortDescription: 'Turn software ideas into recurring revenue cloud applications.' },
            { name: 'SaaS Platform Engineering', slug: 'saas-platform-engineering', shortDescription: 'Microservices architecture, API gateways, and cloud deployment.' },
            { name: 'Multi-Tenant SaaS', slug: 'multi-tenant-saas', shortDescription: 'Secure tenant data isolation, custom branding, and billing controls.' },
            { name: 'SaaS Automation', slug: 'saas-automation', shortDescription: 'Automated user onboarding, subscription webhooks, and analytics.' },
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        slug: 'enterprise',
        description: 'Mission-critical enterprise platforms, system integrations, and corporate IT support.',
        iconName: 'Briefcase',
        industries: [
            { name: 'Enterprise', slug: 'enterprise', shortDescription: 'Corporate enterprise software engineering, legacy modernization, and IT.' },
            { name: 'Enterprise Software', slug: 'enterprise-software', shortDescription: 'Scalable corporate applications built for high security and volume.' },
            { name: 'Enterprise Automation', slug: 'enterprise-automation', shortDescription: 'Cross-department workflow automation and data pipeline processing.' },
            { name: 'Enterprise Integration', slug: 'enterprise-integration', shortDescription: 'Connecting legacy databases, SAP, Salesforce, and microservices.' },
            { name: 'Enterprise IT Solutions', slug: 'enterprise-it-solutions', shortDescription: 'Corporate infrastructure setup, network management, and SLA care.' },
        ],
    },
];

function generateDefaultIndustry(slug: string, name: string, categoryName: string, categorySlug: string, shortDesc: string): IndustryItem {
    return {
        slug,
        name,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `We deliver specialized digital software solutions tailored specifically for the ${name} sector. Our engineering team builds secure, scalable web and mobile systems designed to transform operations and customer engagement.`,
        overview: `The ${name} sector is undergoing rapid digital modernization. We help organizations in ${name} navigate technical challenges by designing custom software, automating operations, and integrating secure cloud infrastructure.`,
        iconName: 'Building2',
        challenges: [
            { title: 'Operational Friction', description: 'Manual workflows and siloed tools causing processing bottlenecks.', techNeed: 'Custom automated workflow software and unified dashboards.', },
            { title: 'Data Security & Compliance', description: 'Meeting strict data privacy guidelines and access controls.', techNeed: 'Role-based access control and encrypted database storage.', },
            { title: 'Legacy System Limitations', description: 'Outdated software struggling with user scale and API integration.', techNeed: 'Cloud microservices migration and modern API development.', },
            { title: 'Fragmented Customer Touchpoints', description: 'Inconsistent user experiences across web and mobile platforms.', techNeed: 'Responsive web apps and cross-platform mobile solutions.', },
        ],
        capabilities: [
            { title: 'Industry-Specific Architecture', description: `Bespoke software design engineered for ${name} operational standards.` },
            { title: 'Seamless API & System Integration', description: 'Connect third-party tools, payment gateways, and internal DBs.' },
            { title: 'Enterprise Data Security', description: 'Role-based access control, data encryption, and automated backups.' },
            { title: 'Scalable Cloud Infrastructure', description: 'Auto-scaling server setups designed to handle transaction spikes.' },
        ],
        features: [
            { title: 'Centralized Operational Dashboard', description: 'Real-time visibility into business metrics and activity logs.' },
            { title: 'Automated Workflow Engine', description: 'Trigger-based actions, document generation, and status updates.' },
            { title: 'Mobile & Web Client Portals', description: 'Responsive self-service portals for customers and staff.' },
            { title: 'Audit Trail & Reporting', description: 'Detailed logging of user actions and automated compliance reports.' },
        ],
        integrations: [
            { name: 'Payment Gateways', type: 'Fintech', description: 'Secure transaction processing and recurring billing.' },
            { name: 'CRM & ERP Systems', type: 'Enterprise', description: 'Bi-directional data sync with core operational systems.' },
            { name: 'Cloud Storage & Backups', type: 'Infra', description: 'Encrypted document vaults and cloud backups.' },
        ],
        process: [
            { step: 1, title: 'Discovery & Consultation', description: `In-depth analysis of ${name} requirements and operational constraints.` },
            { step: 2, title: 'Architecture Blueprint', description: 'Creating technical specifications, data models, and UI prototypes.' },
            { step: 3, title: 'Sprint Implementation', description: 'Iterative agile development with continuous quality assurance testing.' },
            { step: 4, title: 'Deployment & SLA Care', description: 'Production deployment, technical handoff, and ongoing maintenance.' },
        ],
        security: [
            'End-to-end data encryption in transit and at rest',
            'Granular role-based access controls (RBAC)',
            'OWASP-aligned security vulnerability audits',
        ],
        compliance: [
            'Standard data privacy and security practices',
            'Secure document storage and audit logging',
        ],
        scalability: [
            'Cloud auto-scaling server environments',
            'High-availability database read-replicas',
        ],
        relatedServices: [
            { title: 'Custom Software Development', slug: 'custom-software-development', shortDescription: 'Tailored business software.' },
            { title: 'Web Application Development', slug: 'web-application-development', shortDescription: 'Scalable web applications.' },
            { title: 'Mobile App Development', slug: 'mobile-app-development', shortDescription: 'iOS & Android mobile apps.' },
        ],
        relatedSolutions: [
            { title: 'Digital Transformation', slug: 'digital-transformation', shortDescription: 'Modernizing legacy tech.' },
            { title: 'Business Automation', slug: 'business-automation', shortDescription: 'Automating operational tasks.' },
            { title: 'Enterprise Solutions', slug: 'enterprise-solutions', shortDescription: 'Corporate software systems.' },
        ],
        relatedTechnologies: [
            { name: 'React / Next.js', slug: 'nextjs', shortDescription: 'Frontend web framework.' },
            { name: 'Node.js', slug: 'nodejs', shortDescription: 'Backend server environment.' },
            { name: 'AWS Cloud', slug: 'aws', shortDescription: 'Cloud infrastructure.' },
        ],
        relatedIndustries: [
            { name: 'SaaS', slug: 'saas', shortDescription: 'Cloud software platforms.' },
            { name: 'Enterprise', slug: 'enterprise', shortDescription: 'Corporate software systems.' },
            { name: 'eCommerce & Retail', slug: 'ecommerce-retail', shortDescription: 'Digital shopping portals.' },
        ],
        faqs: [
            { question: `What types of software solutions do you build for the ${name} industry?`, answer: `We build custom web platforms, mobile apps, CRM/ERP systems, automated workflow tools, and cloud integrations for ${name}.` },
            { question: 'Can your software integrate with our current systems?', answer: 'Yes. We construct custom REST/GraphQL APIs and microservices designed to sync seamlessly with your existing databases and third-party tools.' },
            { question: 'How do you ensure data security and reliability?', answer: 'We implement industry security practices including data encryption, role-based permissions, automated daily backups, and cloud auto-scaling.' },
            { question: 'Do you offer technical maintenance after deployment?', answer: 'Yes, we provide SLA retainer options, server monitoring, security updates, and feature enhancements.' },
        ],
        seoTitle: `${name} Software Development & Solutions | TheWebHero`,
        seoDescription: `Custom ${name} software solutions by TheWebHero. High-performance, scalable web and mobile software engineered for ${name} organizations.`,
        status: 'active',
        featured: true,
    };
}

const ALL_INDUSTRY_MAP: Record<string, IndustryItem> = {};

INDUSTRY_CATEGORIES.forEach((cat) => {
    // Category level main industry record
    ALL_INDUSTRY_MAP[cat.slug] = generateDefaultIndustry(
        cat.slug,
        cat.name,
        cat.name,
        cat.slug,
        cat.description
    );

    // Individual sub-industry records
    cat.industries.forEach((sub) => {
        ALL_INDUSTRY_MAP[sub.slug] = generateDefaultIndustry(
            sub.slug,
            sub.name,
            cat.name,
            cat.slug,
            sub.shortDescription
        );
    });
});

export function getAllIndustries(): IndustryItem[] {
    return Object.values(ALL_INDUSTRY_MAP);
}

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
    return ALL_INDUSTRY_MAP[slug];
}

export function getIndustriesByCategory(categorySlug: string): IndustryItem[] {
    return Object.values(ALL_INDUSTRY_MAP).filter((i) => i.categorySlug === categorySlug && i.slug !== categorySlug);
}

export function getAllIndustryCategories(): IndustryCategoryGroup[] {
    return INDUSTRY_CATEGORIES;
}

export function getAllIndustrySlugs(): string[] {
    return Object.keys(ALL_INDUSTRY_MAP);
}
