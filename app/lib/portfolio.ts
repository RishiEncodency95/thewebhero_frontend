import { PortfolioItem, PortfolioFilterState } from '../types/portfolio';

export const portfolioProjects: PortfolioItem[] = [
    {
        slug: 'citycalls-multi-service-platform',
        title: 'CityCalls',
        subtitle: 'Multi-Service On-Demand Platform',
        shortDescription: 'A complete on-demand service platform connecting users with trusted service providers for everyday home and personal needs.',
        description: 'CityCalls is an end-to-end on-demand multi-service platform engineered to streamline local service discovery, booking, and management. Built with high performance and scalability in mind, it provides smooth user workflows for booking doorstep services, tracking service status, and managing vendor assignments.',
        coverImage: '/projects/citycalls.png',
        coverImageAlt: 'CityCalls platform web interface preview',
        featured: true,
        status: 'active',
        projectType: 'Web Application',
        industry: 'Services & Operations',
        industrySlug: 'it-software',
        platforms: ['Web Platform', 'Mobile Web'],
        liveUrl: 'https://citycalls.in/',
        clientVisibility: 'public',
        clientName: 'CityCalls',
        sortOrder: 1,
        publishedAt: '2024-01-15',

        services: [
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'Full Stack Web Apps', slug: 'full-stack-web-apps', category: 'Core Development' },
            { title: 'Custom API & Backend', slug: 'custom-api-backend-development', category: 'Backend' },
            { title: 'UI/UX Design', slug: 'ui-ux-design-services', category: 'Design' }
        ],
        technologies: [
            { name: 'React', slug: 'react-js-development', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'Express.js', slug: 'express-js-development', category: 'Backend', iconName: 'SiExpress' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Marketplace Platforms', slug: 'marketplace-platform-development' },
            { title: 'Custom Web Apps', slug: 'custom-web-application-development' }
        ],
        industries: [
            { title: 'IT & Software', slug: 'it-software' }
        ],

        challenge: {
            title: 'Business & Technical Requirement',
            description: 'Building a unified digital ecosystem capable of supporting simultaneous service requests, dynamic booking status, vendor availability checking, and multi-category service organization.',
            keyPoints: [
                'Handling real-time service category navigation without complex UI congestion',
                'Managing stateful booking flows across web and mobile web environments',
                'Designing high-throughput API endpoints for user authentication and location lookup'
            ]
        },
        objectives: {
            title: 'Project Goals',
            items: [
                'Deliver an intuitive customer booking interface for multi-category service selection',
                'Implement secure user authentication and profile management',
                'Optimize page loading speed and mobile responsiveness across devices',
                'Provide structured service categorization for seamless user navigation'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero engineered a custom full-stack MERN platform featuring clean UI components, modular REST APIs, scalable database schemas, and optimized front-end assets.',
            deliverables: [
                'Responsive multi-service customer web application',
                'RESTful API architecture built with Node.js and Express.js',
                'MongoDB schema design for services, users, and booking records',
                'Cross-browser mobile and desktop interface optimization'
            ],
            architectureNote: 'MERN stack architecture with modular service layers, state-managed React components, and secure JWT token authentication.'
        },

        features: [
            { title: 'Multi-Service Booking', description: 'Interactive service selector with transparent pricing and booking confirmation workflows.', iconName: 'Layers' },
            { title: 'User Account Dashboard', description: 'Centralized account portal to review past bookings, track active service requests, and update contact profiles.', iconName: 'Users' },
            { title: 'Location & Service Area Lookup', description: 'Integrated pin-code and city-based service validation for local coverage.', iconName: 'MapPin' },
            { title: 'Responsive Mobile UI', description: 'Fully optimized mobile web experience designed for easy tapping and quick access on mobile devices.', iconName: 'Smartphone' }
        ],

        gallery: [
            { url: '/projects/citycalls.png', alt: 'CityCalls website homepage preview', caption: 'CityCalls Web Portal Home Overview' }
        ],

        process: [
            { step: 1, title: 'Requirements & Architecture', description: 'Mapped out multi-service data models, user booking flows, and system architecture.' },
            { step: 2, title: 'UI/UX & Wireframing', description: 'Created user-centric web wireframes prioritizing rapid service search and checkout.' },
            { step: 3, title: 'API & Frontend Development', description: 'Developed React user interfaces and Express backend REST API microservices.' },
            { step: 4, title: 'Testing & Deployment', description: 'Performed cross-browser performance testing and production deployment.' }
        ],

        integrations: ['Payment Gateways', 'SMS Notification Gateway', 'Location API'],
        seoTitle: 'CityCalls Portfolio Project | On-Demand Service Web Platform - TheWebHero',
        seoDescription: 'Discover how TheWebHero built CityCalls, a full-stack MERN multi-service on-demand booking web platform with responsive UI and scalable REST APIs.'
    },

    {
        slug: 'helpnow-home-cleaning-services',
        title: 'HelpNow by CityCalls',
        subtitle: 'Dedicated Home Maid & Cleaning Booking Portal',
        shortDescription: 'A specialized web application for booking verified home maid, deep cleaning, and domestic assistance services.',
        description: 'HelpNow is a specialized home services booking platform operating under the CityCalls umbrella. Designed to address domestic cleaning, maid booking, and home maintenance needs, HelpNow features focused service packages, instant schedule selection, and trusted provider verification workflows.',
        coverImage: '/projects/helpnow.png',
        coverImageAlt: 'HelpNow maid and cleaning service booking portal preview',
        featured: true,
        status: 'active',
        projectType: 'Web Application',
        industry: 'Consumer & Home Services',
        industrySlug: 'it-software',
        platforms: ['Web Platform'],
        liveUrl: 'https://helpnow.citycalls.in/',
        clientVisibility: 'public',
        clientName: 'HelpNow / CityCalls',
        sortOrder: 2,
        publishedAt: '2024-02-10',

        services: [
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'UI/UX Design', slug: 'ui-ux-design-services', category: 'Design' },
            { title: 'Custom Backend API', slug: 'custom-api-backend-development', category: 'Backend' }
        ],
        technologies: [
            { name: 'React', slug: 'react-js-development', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'Express.js', slug: 'express-js-development', category: 'Backend', iconName: 'SiExpress' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Custom Web Apps', slug: 'custom-web-application-development' }
        ],

        challenge: {
            title: 'Domain Requirement',
            description: 'Designing a specialized booking flow for household cleaning services that simplifies package selection while building user trust through clear verification and transparent service checklists.',
            keyPoints: [
                'Creating clear service package breakdowns for deep cleaning vs recurring maid assistance',
                'Simplifying the step-by-step booking modal for mobile and desktop users alike',
                'Optimizing search engine indexing for localized cleaning service terms'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Build a high-conversion landing portal for home maid and cleaning inquiries',
                'Incorporate clear pricing, inclusions, and service assurance trust badges',
                'Provide direct booking and quick contact capabilities for users'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero created a dedicated web portal with clean visual typography, structured service feature cards, and streamlined backend request handling.',
            deliverables: [
                'Dedicated cleaning services web application',
                'Structured package pricing and service feature grid',
                'Backend lead & booking intake database integration',
                'Fast responsive layouts tailored for mobile browsers'
            ]
        },

        features: [
            { title: 'Service Package Selection', description: 'Structured options for daily maid service, kitchen cleaning, and full home deep cleaning.', iconName: 'CheckCircle' },
            { title: 'Instant Service Request', description: 'Minimal-step booking form capturing date, address, and special instructions.', iconName: 'Calendar' },
            { title: 'Trust & Verification Badges', description: 'Prominent safety and background check verification disclosures for user confidence.', iconName: 'ShieldCheck' }
        ],

        gallery: [
            { url: '/projects/helpnow.png', alt: 'HelpNow home cleaning application preview', caption: 'HelpNow Web Landing Page' }
        ],

        seoTitle: 'HelpNow Portfolio Project | Home Maid & Cleaning Services - TheWebHero',
        seoDescription: 'Explore HelpNow by CityCalls, a dedicated home cleaning and maid booking web application developed by TheWebHero using modern web technologies.'
    },

    {
        slug: 'citycalls-salon-beauty-booking',
        title: 'CityCalls Salon',
        subtitle: 'Salon & Beauty Booking Platform',
        shortDescription: 'A modern web platform connecting customers with professional salon and beauty service providers for home or center visits.',
        description: 'CityCalls Salon is an elegant beauty and salon service discovery platform. Built to cater to personal care, haircutting, styling, and spa bookings, the platform allows users to browse service menus, select preferred time slots, and book verified beauty experts.',
        coverImage: '/projects/citycalls-salon.png',
        coverImageAlt: 'CityCalls Salon service website preview',
        featured: true,
        status: 'active',
        projectType: 'Web Application',
        industry: 'Beauty & Wellness',
        industrySlug: 'healthcare',
        platforms: ['Web Platform'],
        liveUrl: 'https://salon.citycalls.in/',
        clientVisibility: 'public',
        clientName: 'CityCalls Salon',
        sortOrder: 3,
        publishedAt: '2024-03-05',

        services: [
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'UI/UX Design', slug: 'ui-ux-design-services', category: 'Design' },
            { title: 'Custom Backend API', slug: 'custom-api-backend-development', category: 'Backend' }
        ],
        technologies: [
            { name: 'React', slug: 'react-js-development', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'Express.js', slug: 'express-js-development', category: 'Backend', iconName: 'SiExpress' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Custom Web Apps', slug: 'custom-web-application-development' }
        ],

        challenge: {
            title: 'Design & Feature Requirements',
            description: 'Designing an aesthetically pleasing beauty catalog with interactive category filters for hair, skin, bridal, and massage treatments.',
            keyPoints: [
                'Creating an attractive visual experience matching the standards of premium beauty brands',
                'Organizing extensive service menus into clean expandable categories',
                'Ensuring effortless slot booking on mobile browsers'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Deliver a stylish, modern web design aligned with salon and wellness aesthetics',
                'Enable intuitive catalog browsing and service basket assembly',
                'Streamline appointment scheduling and vendor assignment backend requests'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero built a custom React web interface backed by scalable REST APIs and a structured MongoDB service catalog database.',
            deliverables: [
                'Interactive salon service catalog interface',
                'Multi-category service selector and cart workflow',
                'Mobile-first responsive design'
            ]
        },

        features: [
            { title: 'Interactive Service Menu', description: 'Categorized beauty offerings with detailed pricing, duration, and inclusions.', iconName: 'Sparkles' },
            { title: 'Time Slot Reservation', description: 'Flexible date and time slot picker for home visits or salon appointments.', iconName: 'Clock' },
            { title: 'Visual Gallery & Reviews', description: 'High-quality treatment imagery showcasing professional styling results.', iconName: 'Image' }
        ],

        gallery: [
            { url: '/projects/citycalls-salon.png', alt: 'CityCalls Salon web interface screenshot', caption: 'CityCalls Salon Portal Interface' }
        ],

        seoTitle: 'CityCalls Salon Portfolio Project | Beauty & Salon Web Portal - TheWebHero',
        seoDescription: 'Read how TheWebHero crafted CityCalls Salon, an elegant beauty and salon appointment booking web application.'
    },

    {
        slug: 'citycalls-admin-dashboard',
        title: 'CityCalls Admin Dashboard',
        subtitle: 'Comprehensive Operations & Administration Portal',
        shortDescription: 'A centralized administrative dashboard for monitoring users, service providers, orders, and platform metrics across CityCalls.',
        description: 'CityCalls Admin Dashboard serves as the central command center for the entire CityCalls ecosystem. It equips operations personnel with real-time tracking of incoming service requests, provider verification tools, system analytics, user management, and dynamic service catalog configuration.',
        coverImage: '/projects/citycalls-admin.png',
        coverImageAlt: 'CityCalls admin control panel interface',
        featured: false,
        status: 'active',
        projectType: 'Admin Panel / Internal Tool',
        industry: 'Operations & Enterprise Software',
        industrySlug: 'it-software',
        platforms: ['Web Application'],
        liveUrl: 'https://admin.citycalls.in/dashboard',
        clientVisibility: 'public',
        clientName: 'CityCalls Platform',
        sortOrder: 4,
        publishedAt: '2024-03-20',

        services: [
            { title: 'Custom Software Development', slug: 'custom-software-development', category: 'Software' },
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'Backend API Development', slug: 'custom-api-backend-development', category: 'Backend' },
            { title: 'Database Design', slug: 'database-design-development', category: 'Database' }
        ],
        technologies: [
            { name: 'React', slug: 'react-js-development', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'Express.js', slug: 'express-js-development', category: 'Backend', iconName: 'SiExpress' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Custom Software Solutions', slug: 'custom-software-solutions' }
        ],

        challenge: {
            title: 'Technical Requirements',
            description: 'Consolidating operational data from multiple customer apps, provider portals, and service modules into a secure role-based administrative portal.',
            keyPoints: [
                'Implementing strict role-based access control (RBAC) for admins and support staff',
                'Designing intuitive data tables for searching, filtering, and updating booking status',
                'Ensuring secure token management and audit logging for system modifications'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Provide full administrative control over user accounts and service provider profiles',
                'Deliver real-time booking status monitoring and manual dispatch capabilities',
                'Enable dynamic pricing and service category management without code deployments'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero engineered a custom React admin dashboard interface with secure JWT authorization, REST API data tables, and dynamic chart visualizations.',
            deliverables: [
                'Role-based administrative control panel',
                'User & Vendor management system module',
                'Service catalog CRUD management interface',
                'Booking audit & report export utilities'
            ]
        },

        features: [
            { title: 'Role-Based Access Control', description: 'Multi-tier admin credentials with specific operational permissions.', iconName: 'Shield' },
            { title: 'Booking Management Engine', description: 'Filterable data tables for reviewing, updating, or reassigning service requests.', iconName: 'ListCheck' },
            { title: 'Service & Pricing Control', description: 'Instant update system for service categories, base costs, and regional coverage.', iconName: 'Settings' }
        ],

        gallery: [
            { url: '/projects/citycalls-admin.png', alt: 'CityCalls Admin dashboard interface screenshot', caption: 'CityCalls Admin Dashboard Control Panel' }
        ],

        seoTitle: 'CityCalls Admin Dashboard Portfolio Project - TheWebHero',
        seoDescription: 'Check out the CityCalls Admin Dashboard, a custom administrative software panel developed by TheWebHero using React, Node.js, and MongoDB.'
    },

    {
        slug: 'citycalls-customer-mobile-app',
        title: 'CityCalls Customer Mobile App',
        subtitle: 'On-Demand Service Mobile Booking Application',
        shortDescription: 'A feature-packed cross-platform mobile application giving customers seamless access to book, track, and pay for services on the go.',
        description: 'CityCalls Customer Mobile App delivers a convenient native mobile experience for iOS and Android users. Built using Flutter, the application offers rapid service discovery, GPS location detection, real-time booking updates, and multi-payment option support.',
        coverImage: '/projects/citycalls-customer-app.png',
        coverImageAlt: 'CityCalls mobile customer application screens',
        featured: false,
        status: 'active',
        projectType: 'Mobile Application',
        industry: 'Services & Operations',
        industrySlug: 'it-software',
        platforms: ['Android App', 'iOS App'],
        clientVisibility: 'public',
        clientName: 'CityCalls',
        sortOrder: 5,
        publishedAt: '2024-04-12',

        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development', category: 'Mobile' },
            { title: 'Flutter App Development', slug: 'flutter-app-development', category: 'Mobile' },
            { title: 'Backend API Development', slug: 'custom-api-backend-development', category: 'Backend' }
        ],
        technologies: [
            { name: 'Flutter', slug: 'flutter-app-development', category: 'Mobile', iconName: 'SiFlutter' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Custom Software Solutions', slug: 'custom-software-solutions' }
        ],

        challenge: {
            title: 'Technical Requirements',
            description: 'Delivering a single high-performance cross-platform code base providing 60fps UI performance on both iOS and Android mobile platforms.',
            keyPoints: [
                'Maintaining clean Flutter state management across dynamic booking screens',
                'Integrating push notifications for real-time order status updates',
                'Optimizing image asset delivery and network payloads for mobile networks'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Build a high-performance Flutter mobile application for iOS and Android',
                'Implement one-touch location detection and booking workflows',
                'Ensure reliable push notification alerts for booking confirmations'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero developed a Flutter mobile application communicating with Node.js microservices via JSON REST APIs.',
            deliverables: [
                'Cross-platform Flutter iOS and Android user application',
                'Push notification gateway integration',
                'Secure mobile API communication layer'
            ]
        },

        features: [
            { title: 'Location Detection', description: 'Automated GPS location detection and local service coverage validation.', iconName: 'MapPin' },
            { title: 'Push Alerts & Tracking', description: 'Instant notification updates when vendor accepts and completes service.', iconName: 'Bell' },
            { title: 'In-App History & Favorites', description: 'Saved address management and easy one-tap rebooking of past services.', iconName: 'Heart' }
        ],

        gallery: [
            { url: '/projects/citycalls-customer-app.png', alt: 'CityCalls mobile customer app screens preview', caption: 'CityCalls Customer Mobile App Showcase' }
        ],

        seoTitle: 'CityCalls Customer Mobile App Portfolio Project - TheWebHero',
        seoDescription: 'Explore the CityCalls Customer Mobile App developed by TheWebHero using Flutter, Node.js, and MongoDB.'
    },

    {
        slug: 'citycalls-vendor-partner-app',
        title: 'CityCalls Vendor App',
        subtitle: 'Mobile App for Service Technicians & Partners',
        shortDescription: 'A specialized mobile partner application allowing service technicians to accept jobs, navigate to locations, and manage earnings.',
        description: 'CityCalls Vendor App provides service technicians, maids, and beauty professionals with a dedicated tool to manage their daily assignments. Service providers can toggle availability, accept incoming service calls, view client locations, and track completed tasks.',
        coverImage: '/projects/citycalls-vendor-app.png',
        coverImageAlt: 'CityCalls vendor mobile app interface screens',
        featured: false,
        status: 'active',
        projectType: 'Mobile Application',
        industry: 'Field Operations & Logistics',
        industrySlug: 'logistics',
        platforms: ['Android App', 'iOS App'],
        clientVisibility: 'public',
        clientName: 'CityCalls Partner Network',
        sortOrder: 6,
        publishedAt: '2024-04-28',

        services: [
            { title: 'Mobile App Development', slug: 'mobile-app-development', category: 'Mobile' },
            { title: 'Flutter App Development', slug: 'flutter-app-development', category: 'Mobile' },
            { title: 'Backend API Development', slug: 'custom-api-backend-development', category: 'Backend' }
        ],
        technologies: [
            { name: 'Flutter', slug: 'flutter-app-development', category: 'Mobile', iconName: 'SiFlutter' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' }
        ],
        solutions: [
            { title: 'Custom Software Solutions', slug: 'custom-software-solutions' }
        ],

        challenge: {
            title: 'Field Worker Usability Requirements',
            description: 'Designing an uncomplicated mobile interface suited for field technicians working on mobile network data with variable connectivity.',
            keyPoints: [
                'Simplifying order acceptance and status updates to single-tap controls',
                'Designing offline-resilient data synchronization for job details',
                'Implementing background location reporting for dispatch management'
            ]
        },
        objectives: {
            title: 'Key Objectives',
            items: [
                'Empower service partners with instant job notifications and location details',
                'Provide clear earnings summaries and task completion logs',
                'Minimize battery and network data usage for all-day field operation'
            ]
        },
        solutionDetails: {
            summary: 'TheWebHero built a optimized Flutter partner application tuned for reliable mobile execution and seamless API communications.',
            deliverables: [
                'Flutter Vendor Partner mobile application',
                'Job acceptance & status transition module',
                'Earnings & service log dashboard'
            ]
        },

        features: [
            { title: 'Job Dispatch & Acceptance', description: 'Instant modal alerts for nearby incoming service calls with accept/decline action.', iconName: 'Smartphone' },
            { title: 'Client Location Navigation', description: 'Direct integration with navigation apps for turn-by-turn directions to customer premises.', iconName: 'Map' },
            { title: 'Work Log & Earnings Summary', description: 'Transparent daily and weekly earnings breakdowns with completed job histories.', iconName: 'DollarSign' }
        ],

        gallery: [
            { url: '/projects/citycalls-vendor-app.png', alt: 'CityCalls Vendor mobile application showcase', caption: 'CityCalls Vendor Mobile Interface' }
        ],

        seoTitle: 'CityCalls Vendor Mobile App Portfolio Project - TheWebHero',
        seoDescription: 'Discover how TheWebHero engineered the CityCalls Vendor Partner mobile app using Flutter and Node.js backend services.'
    },

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
        industrySlug: 'it-software',
        platforms: ['Web Application'],
        liveUrl: 'https://wingame11.com/',
        clientVisibility: 'public',
        clientName: 'Wingame11',
        sortOrder: 7,
        publishedAt: '2024-05-15',

        services: [
            { title: 'Web Development', slug: 'web-development', category: 'Core Development' },
            { title: 'Full Stack Web Apps', slug: 'full-stack-web-apps', category: 'Core Development' },
            { title: 'Backend API Development', slug: 'custom-api-backend-development', category: 'Backend' },
            { title: 'Database Engineering', slug: 'database-design-development', category: 'Database' }
        ],
        technologies: [
            { name: 'React', slug: 'react-js-development', category: 'Frontend', iconName: 'SiReact' },
            { name: 'Node.js', slug: 'node-js-development', category: 'Backend', iconName: 'SiNodedotjs' },
            { name: 'MongoDB', slug: 'mongodb-database-solutions', category: 'Database', iconName: 'SiMongodb' },
            { name: 'MySQL', slug: 'mysql-database-solutions', category: 'Database', iconName: 'SiMysql' }
        ],
        solutions: [
            { title: 'Custom Web Apps', slug: 'custom-web-application-development' }
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
