import { IndustryCategoryGroup, IndustryItem } from '../types/industry';
import { getServiceBySlug } from './services';
import { getSolutionBySlug } from './solutions';
import { getTechnologyBySlug } from './technologies';

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

/* ------------------------------------------------------------------ SEO copy --- */

/** Search keyword overrides. Others are derived from the name (see keywordFor). */
const KEYWORDS: Record<string, string> = {
    'logistics-transportation': 'Logistics Software Solutions',
    'travel-hospitality': 'Travel Software Development',
    'food-restaurant': 'Restaurant Software Development',
    'fitness-wellness': 'Fitness & Wellness Software',
    'entertainment-media': 'Media Software Development',
    insurtech: 'InsurTech Software Development',
    'ecommerce-retail': 'eCommerce Software Development',
    'retail-technology': 'Retail Technology Solutions',
    'online-marketplace': 'Online Marketplace Development',
    'multi-vendor-commerce': 'Multi-Vendor Marketplace Development',
    'booking-appointment-platform': 'Booking Platform Development',
    'hospitality-automation': 'Hospitality Automation Software',
    'appointment-membership-systems': 'Membership Management Software',
    'event-ticketing': 'Event Ticketing Software Development',
    gaming: 'Gaming Software Development',
    'game-development-solutions': 'Game Development',
    'multiplayer-systems': 'Multiplayer Game Development',
    'gaming-backend': 'Gaming Backend Development',
    'fleet-mobility': 'Fleet & Mobility Software Development',
    'inventory-operations': 'Manufacturing Inventory Software',
    'industrial-automation': 'Industrial Automation Software',
    'point-of-sale': 'POS Software Development',
    'restaurant-pos-solutions': 'Restaurant POS Software Development',
    'omnichannel-retail': 'Omnichannel Retail Software',
    'legal-client-portals': 'Legal Client Portal Development',
    'agriculture-supply-chain': 'Agriculture Supply Chain Software',
    'construction-project-management': 'Construction Project Management Software',
    saas: 'SaaS Development',
    'saas-product-development': 'SaaS Product Development',
    'saas-platform-engineering': 'SaaS Platform Development',
    'multi-tenant-saas': 'Multi-Tenant SaaS Development',
    'saas-automation': 'SaaS Automation Software',
    'enterprise-automation': 'Enterprise Automation Software',
    'enterprise-integration': 'Enterprise Integration Services',
    'enterprise-it-solutions': 'Enterprise IT Solutions',
};

function keywordFor(slug: string, name: string, isCategory: boolean): string {
    if (KEYWORDS[slug]) return KEYWORDS[slug];
    // Category hubs target the broader term so they don't compete with "<X> Software" pages.
    if (isCategory) return `${name} Software Solutions`;
    if (/ Software$/.test(name)) return `${name} Development`;
    // "Gym Management Software" is what people search, not "... Software Development".
    if (/ Management$/.test(name)) return `${name} Software`;
    if (/ (Systems|Platforms|Applications|Portals|Marketplace|CRM|ERP)$/.test(name)) {
        return `${name.replace(/Systems$/, 'System').replace(/Platforms$/, 'Platform').replace(/Applications$/, 'App').replace(/Portals$/, 'Portal')} Development`;
    }
    return `${name.replace(/ Solutions$/, '')} Software Development`;
}

type CategoryCopy = {
    /** Who we build for, e.g. "hospitals, clinics and healthcare startups". */
    audience: string;
    /** What we build, e.g. "hospital management systems and telemedicine apps". */
    builds: string;
    challenges: [string, string, string][];
    modules: [string, string][];
    compliance: string[];
    services: string[];
    solutions: string[];
    technologies: string[];
};

const GENERAL_COMPLIANCE = ['Digital Personal Data Protection (DPDP) Act, 2023 aligned data handling', 'GDPR-ready consent, data export and deletion workflows'];

const CATEGORY_COPY: Record<string, CategoryCopy> = {
    healthcare: {
        audience: 'hospitals, clinics, diagnostic labs and healthcare startups',
        builds: 'hospital management systems, telemedicine apps, EHR/EMR software and patient portals',
        challenges: [
            ['Paper-Based Patient Records', 'Scattered files slow down diagnosis, billing and follow-ups.', 'Secure EHR/EMR software with instant, role-based record access.'],
            ['Long Waiting Times', 'Manual appointment booking frustrates patients and overloads front desks.', 'Online booking, token queues and automated SMS/WhatsApp reminders.'],
            ['Sensitive Data Protection', 'Medical data needs strict privacy and access control.', 'Encrypted storage, audit logs and consent-based data sharing.'],
            ['Limited Remote Care', 'Patients cannot consult doctors without visiting in person.', 'HD video consultations, e-prescriptions and remote monitoring.'],
        ],
        modules: [
            ['Patient Registration & EHR', 'Digital patient profiles, medical history and lab reports in one place.'],
            ['Appointment & OPD Management', 'Online booking, doctor schedules and queue management.'],
            ['Telemedicine & e-Prescription', 'Secure video calls, digital prescriptions and follow-up reminders.'],
            ['Billing, Pharmacy & Insurance', 'GST billing, pharmacy stock and TPA/insurance claim tracking.'],
        ],
        compliance: ['HIPAA-aligned security controls for patient health information', 'ABDM (Ayushman Bharat Digital Mission) integration readiness', 'DPDP Act, 2023 aligned consent and data handling'],
        services: ['custom-software-development', 'mobile-app-development', 'web-application-development'],
        solutions: ['booking-appointment-platform', 'custom-crm', 'process-automation'],
        technologies: ['react', 'nodejs', 'flutter'],
    },
    education: {
        audience: 'schools, colleges, coaching institutes and EdTech startups',
        builds: 'learning management systems, school ERP software and online course platforms',
        challenges: [
            ['Manual Administration', 'Admissions, attendance and fee collection consume staff time.', 'School ERP with automated attendance, fees and report cards.'],
            ['Low Student Engagement', 'Static content fails to keep learners motivated.', 'Interactive lessons, quizzes, gamification and progress tracking.'],
            ['Scaling Online Classes', 'Live classes and video content crash under heavy load.', 'Scalable video streaming and cloud-hosted learning platforms.'],
            ['Parent Communication Gaps', 'Parents lack visibility into performance and attendance.', 'Parent apps with real-time notices, results and fee alerts.'],
        ],
        modules: [
            ['Learning Management System (LMS)', 'Courses, video lessons, assignments and certificates.'],
            ['Live Classes & Assessments', 'Virtual classrooms, online tests and auto-graded quizzes.'],
            ['Student & Fee Management', 'Admissions, attendance, timetables and online fee payments.'],
            ['Parent & Teacher Apps', 'Mobile apps for notices, homework, results and messaging.'],
        ],
        compliance: ['Secure handling of student and minor data', ...GENERAL_COMPLIANCE],
        services: ['web-application-development', 'mobile-app-development', 'custom-software-development'],
        solutions: ['saas-product-development', 'startup-product-development', 'workflow-automation'],
        technologies: ['nextjs', 'nodejs', 'react-native'],
    },
    fintech: {
        audience: 'banks, NBFCs, payment companies and FinTech startups',
        builds: 'digital banking apps, payment platforms, lending software and wallets',
        challenges: [
            ['Security & Fraud Risk', 'Financial platforms are prime targets for fraud and attacks.', 'Multi-factor auth, encryption, fraud rules and real-time alerts.'],
            ['Regulatory Compliance', 'KYC, AML and RBI guidelines add complexity to every feature.', 'Built-in eKYC, audit trails and compliance-ready reporting.'],
            ['Slow Legacy Banking Systems', 'Old core systems slow down new digital products.', 'API-first microservices that integrate with existing cores.'],
            ['High Transaction Volumes', 'Peak loads cause failures and payment delays.', 'Fault-tolerant, horizontally scalable transaction processing.'],
        ],
        modules: [
            ['Digital Onboarding & eKYC', 'Aadhaar, PAN and video KYC with automated verification.'],
            ['Payments & Wallets', 'UPI, cards, net banking and wallet integrations.'],
            ['Lending & Loan Management', 'Loan origination, credit scoring, EMIs and collections.'],
            ['Dashboards & Reporting', 'Real-time analytics, statements and regulatory reports.'],
        ],
        compliance: ['PCI-DSS aligned payment data handling', 'RBI guidelines and KYC/AML-ready workflows', 'DPDP Act, 2023 aligned data protection'],
        services: ['custom-software-development', 'api-integration', 'mobile-app-development'],
        solutions: ['enterprise-integration', 'enterprise-application-development', 'saas-development'],
        technologies: ['nodejs', 'postgresql', 'aws'],
    },
    'ecommerce-retail': {
        audience: 'D2C brands, retailers, wholesalers and marketplace startups',
        builds: 'online stores, multi-vendor marketplaces and shopping apps',
        challenges: [
            ['Low Conversion Rates', 'Slow pages and complex checkout cause abandoned carts.', 'Fast, mobile-first stores with one-page checkout.'],
            ['Inventory Mismatch', 'Stock levels differ across website, marketplaces and stores.', 'Centralised, real-time inventory sync across channels.'],
            ['Manual Order Processing', 'Orders, invoices and shipping labels take hours daily.', 'Automated order, invoice and courier workflows.'],
            ['Poor Customer Retention', 'One-time buyers rarely come back.', 'Loyalty programs, personalised offers and abandoned-cart reminders.'],
        ],
        modules: [
            ['Product Catalog & Search', 'Fast product pages, filters, variants and smart search.'],
            ['Cart, Checkout & Payments', 'UPI, cards, COD, wallets and EMI options.'],
            ['Order & Shipping Management', 'Courier integrations, tracking and returns.'],
            ['Marketing & Loyalty Tools', 'Coupons, reviews, referral and loyalty programs.'],
        ],
        compliance: ['PCI-DSS aligned checkout and payment security', 'GST-compliant invoicing', 'DPDP Act, 2023 aligned customer data handling'],
        services: ['ecommerce-development', 'shopify-development', 'mobile-app-development'],
        solutions: ['ecommerce-solutions', 'multi-vendor-marketplace', 'headless-ecommerce'],
        technologies: ['nextjs', 'shopify', 'nodejs'],
    },
    'real-estate': {
        audience: 'real estate developers, brokers, agencies and property managers',
        builds: 'property listing portals, real estate CRMs and property management software',
        challenges: [
            ['Scattered Lead Management', 'Leads from portals, ads and calls get lost in spreadsheets.', 'Real estate CRM with automatic lead capture and follow-ups.'],
            ['Manual Property Listings', 'Updating listings across channels is slow and error-prone.', 'Central listing management with portal and website sync.'],
            ['Rent & Maintenance Tracking', 'Rent collection and tenant requests are hard to track.', 'Property management software with online rent and ticketing.'],
            ['Limited Buyer Experience', 'Buyers expect virtual tours and instant information.', 'Rich listing pages, virtual tours, maps and EMI calculators.'],
        ],
        modules: [
            ['Property Listings & Search', 'Advanced filters, maps, photos, videos and virtual tours.'],
            ['Real Estate CRM', 'Lead capture, site-visit scheduling and sales pipeline.'],
            ['Tenant & Rent Management', 'Online rent, agreements, reminders and maintenance requests.'],
            ['Agent & Broker Portals', 'Inventory sharing, commissions and performance dashboards.'],
        ],
        compliance: ['RERA-ready project and listing information', ...GENERAL_COMPLIANCE],
        services: ['web-application-development', 'crm-development', 'mobile-app-development'],
        solutions: ['marketplace-development', 'custom-crm', 'crm-automation'],
        technologies: ['nextjs', 'nodejs', 'mongodb'],
    },
    'logistics-transportation': {
        audience: 'logistics companies, transporters, couriers and fleet operators',
        builds: 'logistics software, fleet management systems and delivery tracking apps',
        challenges: [
            ['No Real-Time Visibility', 'Customers and managers cannot see where shipments are.', 'Live GPS tracking with ETA updates and customer notifications.'],
            ['Inefficient Routing', 'Poor route planning wastes fuel and delays deliveries.', 'Route optimisation and smart dispatch algorithms.'],
            ['Manual Paperwork', 'Proof of delivery, invoices and e-way bills are paper-based.', 'Driver apps with digital POD, e-signatures and auto invoicing.'],
            ['Fleet Maintenance Costs', 'Unplanned breakdowns increase costs and downtime.', 'Maintenance schedules, fuel logs and vehicle health alerts.'],
        ],
        modules: [
            ['Shipment Tracking', 'Real-time GPS tracking with customer tracking links.'],
            ['Dispatch & Route Planning', 'Automated assignment and optimised multi-stop routes.'],
            ['Driver Mobile App', 'Trip details, navigation, POD photos and e-signatures.'],
            ['Fleet & Warehouse Management', 'Vehicles, drivers, fuel, maintenance and stock.'],
        ],
        compliance: ['E-way bill and GST-ready documentation', ...GENERAL_COMPLIANCE],
        services: ['custom-software-development', 'mobile-app-development', 'api-integration'],
        solutions: ['on-demand-delivery', 'erp-development', 'process-automation'],
        technologies: ['flutter', 'nodejs', 'google-cloud'],
    },
    'travel-hospitality': {
        audience: 'hotels, resorts, travel agencies and tour operators',
        builds: 'hotel management systems, travel booking platforms and guest apps',
        challenges: [
            ['High OTA Commissions', 'Dependence on OTAs eats into every booking’s margin.', 'Direct booking engines with secure online payments.'],
            ['Overbooking & Rate Errors', 'Manual updates across channels lead to overbookings.', 'Channel manager sync for real-time rates and availability.'],
            ['Manual Front-Desk Work', 'Check-ins, invoices and housekeeping run on paper.', 'Property management system with digital check-in.'],
            ['Inconsistent Guest Experience', 'Guests expect instant service and personalisation.', 'Guest apps for requests, offers and loyalty rewards.'],
        ],
        modules: [
            ['Booking Engine', 'Direct room, package and tour bookings with payments.'],
            ['Hotel Property Management (PMS)', 'Reservations, check-in/out, housekeeping and billing.'],
            ['Channel & Rate Management', 'Sync rates and inventory with OTAs in real time.'],
            ['Guest Experience App', 'Digital keys, requests, offers and reviews.'],
        ],
        compliance: ['PCI-DSS aligned payment handling', ...GENERAL_COMPLIANCE],
        services: ['web-application-development', 'mobile-app-development', 'api-integration'],
        solutions: ['booking-appointment-platform', 'marketplace-development', 'workflow-automation'],
        technologies: ['nextjs', 'nodejs', 'react-native'],
    },
    'food-restaurant': {
        audience: 'restaurants, cloud kitchens, cafés and food delivery startups',
        builds: 'online ordering systems, restaurant POS software and food delivery apps',
        challenges: [
            ['High Aggregator Commissions', 'Delivery apps take a large share of every order.', 'Own branded ordering website and app with direct payments.'],
            ['Kitchen Order Confusion', 'Paper KOTs cause wrong or delayed orders.', 'Kitchen display system with real-time order routing.'],
            ['Inventory Wastage', 'Untracked stock leads to wastage and theft.', 'Recipe-level inventory and automatic low-stock alerts.'],
            ['Low Repeat Orders', 'Customers order once and forget the brand.', 'Loyalty points, offers and WhatsApp/SMS campaigns.'],
        ],
        modules: [
            ['Online Ordering & Delivery', 'Branded website and app with live order tracking.'],
            ['Restaurant POS & Billing', 'Fast GST billing, table management and split bills.'],
            ['Kitchen Display System', 'Digital KOTs, prep timers and order status.'],
            ['Inventory & Loyalty', 'Stock control, purchase orders, rewards and offers.'],
        ],
        compliance: ['GST-compliant billing and reports', 'FSSAI licence details on menus and receipts', 'DPDP Act, 2023 aligned customer data handling'],
        services: ['mobile-app-development', 'web-application-development', 'custom-software-development'],
        solutions: ['on-demand-delivery', 'on-demand-solutions', 'business-automation'],
        technologies: ['flutter', 'nodejs', 'firebase'],
    },
    'fitness-wellness': {
        audience: 'gyms, fitness studios, yoga centres, trainers and wellness brands',
        builds: 'gym management software, fitness apps and wellness booking platforms',
        challenges: [
            ['Membership Renewals Missed', 'Expired memberships go unnoticed and revenue is lost.', 'Automatic renewal reminders and online payments.'],
            ['Class Overbooking', 'Manual class bookings lead to crowding and no-shows.', 'Slot-based booking with waitlists and reminders.'],
            ['Low Member Engagement', 'Members drop out without progress tracking.', 'Workout plans, progress tracking and challenges in-app.'],
            ['Manual Staff & Trainer Management', 'Trainer schedules and payouts are tracked by hand.', 'Staff scheduling, attendance and commission tracking.'],
        ],
        modules: [
            ['Membership & Billing', 'Plans, renewals, invoices and online payments.'],
            ['Class & Trainer Booking', 'Slot booking, waitlists and personal training sessions.'],
            ['Fitness & Diet Tracking', 'Workouts, diet plans, progress photos and wearables.'],
            ['Member Mobile App', 'Check-in, bookings, offers and push notifications.'],
        ],
        compliance: ['Secure handling of health and body-metric data', ...GENERAL_COMPLIANCE],
        services: ['mobile-app-development', 'flutter-app-development', 'web-application-development'],
        solutions: ['booking-appointment-platform', 'saas-product-development', 'crm-automation'],
        technologies: ['flutter', 'nodejs', 'firebase'],
    },
    'entertainment-media': {
        audience: 'media houses, OTT platforms, publishers, creators and event organisers',
        builds: 'OTT streaming platforms, content portals and event ticketing systems',
        challenges: [
            ['Buffering & Playback Issues', 'Viewers leave when videos buffer or fail to load.', 'Adaptive bitrate streaming over a global CDN.'],
            ['Content Piracy', 'Premium content gets copied and shared illegally.', 'DRM protection, watermarking and secure playback.'],
            ['Monetisation Gaps', 'Content is popular but revenue stays low.', 'Subscriptions, pay-per-view, ads and ticketing.'],
            ['Managing Large Content Libraries', 'Publishing and organising thousands of assets is slow.', 'Headless CMS with workflows, scheduling and metadata.'],
        ],
        modules: [
            ['Video Streaming (OTT)', 'Live and on-demand video for web, mobile and smart TVs.'],
            ['Subscriptions & Payments', 'Plans, coupons, pay-per-view and recurring billing.'],
            ['Content Management', 'Upload, tag, schedule and publish content at scale.'],
            ['Event & Ticketing', 'Ticket sales, QR entry passes and attendee management.'],
        ],
        compliance: ['DRM-protected content delivery', ...GENERAL_COMPLIANCE],
        services: ['web-application-development', 'mobile-app-development', 'cloud-devops'],
        solutions: ['saas-product-development', 'marketplace-development', 'digital-experience'],
        technologies: ['nextjs', 'nodejs', 'aws'],
    },
    gaming: {
        audience: 'game studios, gaming startups and esports platforms',
        builds: 'mobile and web games, multiplayer game backends and gaming platforms',
        challenges: [
            ['Lag in Multiplayer Games', 'High latency ruins real-time gameplay.', 'Low-latency, real-time multiplayer servers.'],
            ['Server Crashes at Launch', 'Player spikes overwhelm game servers.', 'Auto-scaling cloud backends built for peak traffic.'],
            ['Cheating & Fraud', 'Cheaters damage trust and player retention.', 'Server-side validation and anti-cheat logic.'],
            ['Poor Monetisation', 'Players enjoy the game but rarely pay.', 'In-app purchases, rewards and live-ops events.'],
        ],
        modules: [
            ['Game Development', 'Engaging 2D/3D mobile and web games.'],
            ['Multiplayer & Matchmaking', 'Real-time rooms, lobbies and skill-based matching.'],
            ['Player Accounts & Leaderboards', 'Profiles, achievements, rankings and tournaments.'],
            ['In-App Purchases & Analytics', 'Store, virtual currency and player analytics.'],
        ],
        compliance: ['Secure payments and fair-play controls', ...GENERAL_COMPLIANCE],
        services: ['game-development', 'mobile-app-development', 'backend-development'],
        solutions: ['startup-product-development', 'saas-development', 'mvp-development'],
        technologies: ['nodejs', 'redis', 'aws'],
    },
    automotive: {
        audience: 'car dealers, service centres, OEMs and mobility startups',
        builds: 'dealer management systems, vehicle service apps and fleet mobility software',
        challenges: [
            ['Manual Dealer Operations', 'Inventory, bookings and sales run on spreadsheets.', 'Dealer management system with stock and sales tracking.'],
            ['Service Booking Hassles', 'Customers call repeatedly to book or check service status.', 'Online service booking with live job-card updates.'],
            ['Lead Leakage', 'Test-drive and enquiry leads are not followed up.', 'Automotive CRM with automated follow-ups.'],
            ['No Vehicle Data Insights', 'Vehicle and fleet data is unused.', 'Telematics dashboards and predictive maintenance.'],
        ],
        modules: [
            ['Dealer Management System', 'Vehicle inventory, bookings, invoicing and finance.'],
            ['Service & Workshop Management', 'Job cards, parts, technicians and service history.'],
            ['Customer App', 'Service booking, reminders, offers and payments.'],
            ['Fleet & Telematics', 'GPS tracking, fuel monitoring and maintenance alerts.'],
        ],
        compliance: GENERAL_COMPLIANCE,
        services: ['custom-software-development', 'crm-development', 'mobile-app-development'],
        solutions: ['custom-crm', 'erp-development', 'booking-appointment-platform'],
        technologies: ['react', 'nodejs', 'flutter'],
    },
    manufacturing: {
        audience: 'manufacturers, factories, MSMEs and industrial businesses',
        builds: 'manufacturing ERP, production planning software and inventory systems',
        challenges: [
            ['No Production Visibility', 'Managers cannot see real-time shop-floor status.', 'Live production dashboards and machine monitoring.'],
            ['Inventory & Material Shortages', 'Stock-outs stop production lines.', 'Material planning (MRP) with reorder alerts.'],
            ['Quality Issues', 'Defects are found too late in the process.', 'Digital quality checks and batch traceability.'],
            ['Disconnected Systems', 'Sales, production and accounts use separate tools.', 'Integrated manufacturing ERP across departments.'],
        ],
        modules: [
            ['Production Planning & Control', 'Work orders, BOMs, scheduling and capacity planning.'],
            ['Inventory & Warehouse', 'Raw material, WIP and finished goods tracking.'],
            ['Quality Management', 'Inspections, batch tracking and defect reports.'],
            ['Machine & IoT Monitoring', 'Machine status, downtime and OEE dashboards.'],
        ],
        compliance: ['ISO 9001-ready quality records and traceability', 'GST e-invoicing and e-way bill support', 'Role-based access to production data'],
        services: ['custom-software-development', 'erp-development', 'enterprise-software-development'],
        solutions: ['custom-erp', 'erp-automation', 'process-automation'],
        technologies: ['react', 'nodejs', 'postgresql'],
    },
    retail: {
        audience: 'retail stores, supermarkets, chains and franchise businesses',
        builds: 'POS software, retail management systems and omnichannel commerce platforms',
        challenges: [
            ['Slow Billing Counters', 'Long queues at checkout drive customers away.', 'Fast POS billing with barcode scanning and UPI.'],
            ['Inventory Inaccuracy', 'Stock records don’t match what is on shelves.', 'Real-time, multi-store inventory management.'],
            ['Disconnected Online & Offline Sales', 'Online and store sales are managed separately.', 'Omnichannel platform with unified stock and orders.'],
            ['No Customer Insights', 'Retailers don’t know who their best customers are.', 'Customer profiles, loyalty programs and sales analytics.'],
        ],
        modules: [
            ['Point of Sale (POS)', 'Fast GST billing, barcodes, returns and multiple payment modes.'],
            ['Multi-Store Inventory', 'Stock transfers, purchase orders and reorder alerts.'],
            ['Omnichannel Commerce', 'Website, app and store connected in one system.'],
            ['Loyalty & Analytics', 'Rewards, offers and branch-wise sales reports.'],
        ],
        compliance: ['GST-compliant billing and e-invoicing', 'PCI-DSS aligned card payments', 'DPDP Act, 2023 aligned customer data handling'],
        services: ['custom-software-development', 'ecommerce-development', 'web-application-development'],
        solutions: ['ecommerce-solutions', 'erp-development', 'business-automation'],
        technologies: ['react', 'nodejs', 'mysql'],
    },
    sports: {
        audience: 'sports clubs, academies, leagues and venue owners',
        builds: 'sports club management software, tournament platforms and venue booking apps',
        challenges: [
            ['Manual Member & Fee Tracking', 'Registrations and fees are tracked in registers.', 'Club management software with online payments.'],
            ['Complex Tournament Scheduling', 'Fixtures and results take days to manage.', 'Automatic fixtures, live scores and standings.'],
            ['Underused Venues', 'Courts and grounds sit empty due to offline booking.', 'Online venue and slot booking with payments.'],
            ['Low Fan Engagement', 'Fans have no single place to follow the team.', 'Apps with live updates, news and merchandise.'],
        ],
        modules: [
            ['Club & Academy Management', 'Members, coaches, batches, attendance and fees.'],
            ['Tournament Management', 'Registrations, fixtures, live scoring and leaderboards.'],
            ['Venue & Court Booking', 'Slot booking, pricing, payments and reminders.'],
            ['Fan & Player App', 'Profiles, stats, news and notifications.'],
        ],
        compliance: ['Secure handling of player and minor data', ...GENERAL_COMPLIANCE],
        services: ['mobile-app-development', 'web-application-development', 'custom-software-development'],
        solutions: ['booking-appointment-platform', 'saas-product-development', 'marketplace-development'],
        technologies: ['flutter', 'nodejs', 'firebase'],
    },
    legal: {
        audience: 'law firms, legal departments, advocates and legal-tech startups',
        builds: 'legal practice management software, case management systems and client portals',
        challenges: [
            ['Missed Hearing Dates', 'Manual diaries risk missing hearings and deadlines.', 'Case calendars with automatic hearing reminders.'],
            ['Document Overload', 'Finding the right document takes too long.', 'Secure document management with search and versioning.'],
            ['Unbilled Hours', 'Time spent on cases is not tracked accurately.', 'Time tracking and automated client invoicing.'],
            ['Client Communication', 'Clients call repeatedly for case updates.', 'Secure client portals with case status and documents.'],
        ],
        modules: [
            ['Case & Matter Management', 'Cases, parties, hearings, notes and tasks.'],
            ['Legal Document Management', 'Templates, drafting, e-signatures and secure storage.'],
            ['Time Tracking & Billing', 'Billable hours, retainers and invoices.'],
            ['Client Portal', 'Case updates, documents and secure messaging.'],
        ],
        compliance: ['Attorney–client confidentiality with encrypted storage', 'Detailed audit logs and access controls', 'DPDP Act, 2023 aligned data handling'],
        services: ['custom-software-development', 'web-application-development', 'crm-development'],
        solutions: ['document-automation', 'custom-crm', 'workflow-automation'],
        technologies: ['nextjs', 'nodejs', 'postgresql'],
    },
    insurance: {
        audience: 'insurance companies, brokers, agents and InsurTech startups',
        builds: 'policy management systems, claims management software and insurance CRMs',
        challenges: [
            ['Slow Policy Issuance', 'Manual quotes and paperwork delay new policies.', 'Instant online quotes and digital policy issuance.'],
            ['Lengthy Claims Process', 'Claims take weeks and frustrate customers.', 'Digital claim filing, document upload and tracking.'],
            ['Missed Renewals', 'Expiring policies are not followed up in time.', 'Automated renewal reminders and online payments.'],
            ['Agent Productivity', 'Agents juggle leads in notebooks and spreadsheets.', 'Insurance CRM with lead tracking and commissions.'],
        ],
        modules: [
            ['Quote & Policy Management', 'Quotes, proposals, issuance and endorsements.'],
            ['Claims Management', 'Claim intake, surveys, approvals and settlements.'],
            ['Insurance CRM & Agent Portal', 'Leads, renewals, commissions and performance.'],
            ['Customer Self-Service', 'Policy documents, payments and claim tracking.'],
        ],
        compliance: ['IRDAI guideline-aware workflows and records', 'KYC-ready customer onboarding', 'DPDP Act, 2023 aligned data protection'],
        services: ['custom-software-development', 'crm-development', 'api-integration'],
        solutions: ['custom-crm', 'document-automation', 'enterprise-integration'],
        technologies: ['react', 'nodejs', 'postgresql'],
    },
    agriculture: {
        audience: 'farmers, agri-businesses, FPOs, cooperatives and AgriTech startups',
        builds: 'farm management software, agri marketplaces and supply chain platforms',
        challenges: [
            ['Unfair Market Prices', 'Farmers depend on middlemen for price discovery.', 'Direct agri marketplaces connecting farmers and buyers.'],
            ['Poor Crop Planning', 'Decisions are made without data on soil or weather.', 'Crop planning tools with weather and advisory alerts.'],
            ['Supply Chain Losses', 'Produce spoils due to poor tracking and storage.', 'Farm-to-market traceability and cold-chain tracking.'],
            ['Limited Digital Access', 'Rural users need simple, local-language apps.', 'Lightweight, multilingual apps that work on low bandwidth.'],
        ],
        modules: [
            ['Farm Management', 'Crops, fields, inputs, labour and yields.'],
            ['Agri Marketplace', 'Buy and sell produce, inputs and equipment online.'],
            ['Supply Chain & Traceability', 'Procurement, warehousing and logistics tracking.'],
            ['Advisory & Weather Alerts', 'Crop advisories and weather notifications in local languages.'],
        ],
        compliance: GENERAL_COMPLIANCE,
        services: ['mobile-app-development', 'custom-software-development', 'web-application-development'],
        solutions: ['marketplace-development', 'b2b-marketplace', 'process-automation'],
        technologies: ['flutter', 'nodejs', 'firebase'],
    },
    construction: {
        audience: 'construction companies, contractors, builders and infrastructure firms',
        builds: 'construction project management software, contractor portals and construction ERP',
        challenges: [
            ['Project Delays', 'Teams lack a shared view of schedules and progress.', 'Project schedules, milestones and daily progress reports.'],
            ['Cost Overruns', 'Material and labour costs exceed the budget unnoticed.', 'Real-time budgeting, BOQ and cost tracking.'],
            ['Site Communication Gaps', 'Site updates reach the office late or not at all.', 'Mobile site apps with photos, issues and approvals.'],
            ['Contractor & Labour Management', 'Attendance and contractor bills are hard to verify.', 'Labour attendance, contractor billing and payments.'],
        ],
        modules: [
            ['Project & Task Management', 'Schedules, Gantt charts, milestones and tasks.'],
            ['BOQ, Budget & Procurement', 'Estimates, purchase orders and material tracking.'],
            ['Site Management App', 'Daily reports, photos, snags and approvals.'],
            ['Contractor & Labour Portal', 'Attendance, work orders, bills and payments.'],
        ],
        compliance: ['RERA-ready project documentation', 'Role-based access to project and financial data', 'DPDP Act, 2023 aligned data handling'],
        services: ['custom-software-development', 'erp-development', 'mobile-app-development'],
        solutions: ['custom-erp', 'erp-automation', 'workflow-automation'],
        technologies: ['react', 'nodejs', 'flutter'],
    },
    saas: {
        audience: 'SaaS founders, startups and software companies',
        builds: 'multi-tenant SaaS platforms, subscription software and B2B SaaS products',
        challenges: [
            ['Slow Time to Market', 'Building the MVP takes too long and burns runway.', 'Rapid MVP development with a scalable foundation.'],
            ['Multi-Tenant Complexity', 'Isolating customer data and settings is hard.', 'Secure multi-tenant architecture with role-based access.'],
            ['Subscription Billing', 'Plans, trials and upgrades are messy to manage.', 'Automated subscription billing with Stripe/Razorpay.'],
            ['Scaling Performance', 'The product slows down as customers grow.', 'Cloud-native, auto-scaling infrastructure.'],
        ],
        modules: [
            ['Multi-Tenant Architecture', 'Workspaces, data isolation and custom domains.'],
            ['Subscription & Billing', 'Plans, trials, invoices and usage-based pricing.'],
            ['Admin & Analytics Dashboard', 'Customer management, usage metrics and MRR.'],
            ['Integrations & APIs', 'Public APIs, webhooks and third-party integrations.'],
        ],
        compliance: ['SOC 2-ready security practices', ...GENERAL_COMPLIANCE],
        services: ['custom-software-development', 'web-application-development', 'cloud-devops'],
        solutions: ['saas-development', 'multi-tenant-saas', 'mvp-development'],
        technologies: ['nextjs', 'nodejs', 'aws'],
    },
    enterprise: {
        audience: 'large enterprises, corporates and growing mid-size businesses',
        builds: 'enterprise software, ERP/CRM integrations and workflow automation systems',
        challenges: [
            ['Siloed Departments & Data', 'Teams work in disconnected systems.', 'Enterprise integration with a single source of truth.'],
            ['Legacy System Limitations', 'Old software is costly to maintain and hard to extend.', 'Phased legacy modernisation to cloud-native systems.'],
            ['Manual Approval Workflows', 'Approvals and reports depend on email and Excel.', 'Workflow automation with approvals and audit trails.'],
            ['Security & Governance', 'Large teams need strict access control.', 'SSO, role-based access and centralised audit logs.'],
        ],
        modules: [
            ['Enterprise Portals & Dashboards', 'Employee, partner and management portals.'],
            ['ERP & CRM Integration', 'SAP, Oracle, Salesforce, Zoho and Tally integration.'],
            ['Workflow & Approval Automation', 'Rule-based approvals, notifications and reports.'],
            ['Business Intelligence', 'Real-time KPIs, reports and data visualisation.'],
        ],
        compliance: ['ISO 27001-aligned security practices', 'SSO, RBAC and detailed audit logging', 'DPDP Act, 2023 aligned data governance'],
        services: ['enterprise-software-development', 'custom-software-development', 'api-integration'],
        solutions: ['enterprise-solutions', 'enterprise-integration', 'legacy-system-modernization'],
        technologies: ['react', 'nodejs', 'azure'],
    },
};

function refs<T extends { slug: string }, R>(slugs: string[], get: (slug: string) => T | undefined, map: (item: T) => R): R[] {
    return slugs.map(get).filter((x): x is T => Boolean(x)).map(map);
}

function generateDefaultIndustry(
    slug: string, name: string, categoryName: string, categorySlug: string, shortDesc: string,
    siblings: { name: string; slug: string; shortDescription: string }[],
): IndustryItem {
    const copy = CATEGORY_COPY[categorySlug] ?? CATEGORY_COPY.enterprise;
    const keyword = keywordFor(slug, name, slug === categorySlug);
    const kw = keyword.toLowerCase();
    const isCompany = /development$/i.test(keyword);
    // Longest title that still fits Google's ~60 character limit.
    const seoTitle = [
        isCompany ? `${keyword} Company in India | TheWebHero` : '',
        `${keyword} in India | TheWebHero`,
        `${keyword} | TheWebHero`,
    ].find((t) => t && t.length <= 60) ?? keyword;

    return {
        slug,
        name,
        keyword,
        category: categoryName,
        categorySlug,
        shortDescription: shortDesc,
        description: `TheWebHero is a trusted ${kw} company in India. We build ${copy.builds} for ${copy.audience}, designed to cut manual work and grow revenue.`,
        overview: `We understand how ${categoryName.toLowerCase()} businesses work. From discovery and UI/UX to development, launch and support, our in-house team builds secure, scalable software around your workflows. Based in Ghaziabad (Delhi NCR), we work with clients across India and worldwide, with transparent pricing, weekly demos and full code ownership.`,
        iconName: 'Building2',
        challenges: copy.challenges.map(([title, description, techNeed]) => ({ title, description, techNeed })),
        capabilities: [
            { title: `${categoryName} Domain Expertise`, description: `Software designed around real ${categoryName.toLowerCase()} workflows and users.` },
            { title: 'Web, Mobile & Cloud', description: 'Responsive web apps, Android/iOS apps and cloud backends from one team.' },
            { title: 'Seamless Integrations', description: 'Payments, CRM, ERP, WhatsApp, SMS and third-party APIs.' },
            { title: 'Security & Compliance First', description: 'Encryption, access control and industry-specific compliance built in.' },
        ],
        features: copy.modules.map(([title, description]) => ({ title, description })),
        integrations: [
            { name: 'Payment Gateways', type: 'Payments', description: 'Razorpay, Stripe, PayPal and UPI.' },
            { name: 'WhatsApp, SMS & Email', type: 'Messaging', description: 'Automated notifications, reminders and OTPs.' },
            { name: 'CRM, ERP & Accounting', type: 'Business', description: 'Zoho, Salesforce, Tally and SAP integrations.' },
        ],
        process: [
            { step: 1, title: 'Discovery & Consultation', description: `Understanding your ${categoryName.toLowerCase()} workflows, users and goals.` },
            { step: 2, title: 'UI/UX & Architecture', description: 'Wireframes, clickable prototypes and a clear technical plan.' },
            { step: 3, title: 'Agile Development', description: 'Two-week sprints with weekly demos and continuous testing.' },
            { step: 4, title: 'Launch & Support', description: 'Secure deployment, staff training and ongoing maintenance.' },
        ],
        security: [
            'End-to-end encryption for data in transit and at rest',
            'Role-based access control and multi-factor authentication',
            'Regular security audits and OWASP Top 10 protection',
        ],
        compliance: copy.compliance,
        scalability: [
            'Cloud-native architecture that grows with your users',
            'Automated backups, monitoring and 99.9% uptime design',
            'Performance-optimised for fast load times on any device',
        ],
        relatedServices: refs(copy.services, getServiceBySlug, (s) => ({ title: s.title, slug: s.slug, shortDescription: s.shortDescription })),
        relatedSolutions: refs(copy.solutions, getSolutionBySlug, (s) => ({ title: s.title, slug: s.slug, shortDescription: s.shortDescription })),
        relatedTechnologies: refs(copy.technologies, getTechnologyBySlug, (t) => ({ name: t.name, slug: t.slug, shortDescription: t.shortDescription })),
        relatedIndustries: siblings.filter((i) => i.slug !== slug && i.slug !== categorySlug).slice(0, 3),
        faqs: [
            {
                question: `What ${kw} services does TheWebHero offer?`,
                answer: `We build ${copy.builds}, including ${copy.modules.map(([t]) => t.toLowerCase()).slice(0, 3).join(', ')}. We handle consulting, design, development, integrations, launch and support.`,
            },
            {
                question: `How much does ${kw} cost in India?`,
                answer: `The cost depends on features, users, integrations and platforms (web, Android, iOS). We offer fixed-price projects and dedicated teams. Share your requirements for a free, detailed estimate.`,
            },
            {
                question: `How long does it take to build ${name.toLowerCase()} software?`,
                answer: 'An MVP usually takes 6–10 weeks, while a complete custom platform can take 3–6 months. We share a clear timeline and weekly milestones after a short discovery call.',
            },
            {
                question: 'Is our data secure and compliant?',
                answer: `Yes. We use encryption, role-based access and audit logs, and design every system around industry requirements such as ${copy.compliance[0].replace(/\.$/, '')}.`,
            },
            {
                question: 'Can you integrate with our existing software?',
                answer: 'Yes. We integrate with your existing CRM, ERP, accounting software, payment gateways and third-party APIs, so your team does not have to switch everything at once.',
            },
            {
                question: 'Do you provide support after launch?',
                answer: 'Yes. Our maintenance plans cover bug fixes, security updates, server monitoring, backups and new features as your business grows.',
            },
        ],
        seoTitle,
        seoDescription: `${isCompany ? `Leading ${kw} company in India.` : `${keyword} in India.`} Secure, scalable web & mobile software built by TheWebHero. Get a free quote.`,
        status: 'active',
        featured: true,
    };
}

const ALL_INDUSTRY_MAP: Record<string, IndustryItem> = {};

INDUSTRY_CATEGORIES.forEach((cat) => {
    // Category level main industry record
    ALL_INDUSTRY_MAP[cat.slug] = generateDefaultIndustry(cat.slug, cat.name, cat.name, cat.slug, cat.description, cat.industries);

    // Individual sub-industry records
    cat.industries.forEach((sub) => {
        ALL_INDUSTRY_MAP[sub.slug] = generateDefaultIndustry(sub.slug, sub.name, cat.name, cat.slug, sub.shortDescription, cat.industries);
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
