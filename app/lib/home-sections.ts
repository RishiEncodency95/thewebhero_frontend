/**
 * Text, links and images of every home page section. Admin → Website → Home page
 * edits these; the values below are the defaults used for anything left empty.
 *
 * Titles mark the coloured part with *stars*: "Transforming Ideas Into *Digital Reality.*".
 * Colours, icons and decorations stay in the components and follow the card order.
 */

export interface SectionHead {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
}

export interface TextItem {
    title: string;
    description: string;
}

export interface LinkItem extends TextItem {
    link: string;
    image?: string;
    tag?: string;
}

export interface HomeSections {
    about: SectionHead & { image: string; videoUrl: string; features: TextItem[] };
    services: SectionHead & { items: LinkItem[] };
    featured: SectionHead & { points: TextItem[] };
    solutions: SectionHead & { items: LinkItem[] };
    industries: SectionHead & { items: LinkItem[] };
    technologies: SectionHead;
    projects: SectionHead;
    process: SectionHead & { steps: (TextItem & { tag: string })[] };
    why: SectionHead & { items: TextItem[] };
    testimonials: SectionHead;
    insights: SectionHead;
    faq: SectionHead;
    cta: SectionHead & { secondaryLabel: string; secondaryHref: string };
}

const head = (eyebrow: string, title: string, description: string, buttonLabel = '', buttonHref = ''): SectionHead => ({
    eyebrow,
    title,
    description,
    buttonLabel,
    buttonHref,
});

export const HOME_SECTION_DEFAULTS: HomeSections = {
    about: {
        ...head(
            'About TheWebHero',
            'Technology That Turns Ideas *Into Impact*',
            'TheWebHero is a results-driven IT company focused on building innovative, scalable, and user-centric digital solutions. We help businesses transform their ideas into powerful digital products with the right strategy, technology, and creative execution.',
            'Know More About Us',
            '/company/about',
        ),
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41319-large.mp4',
        features: [
            { title: 'Client-Focused Approach', description: 'Your goals, Our priority.' },
            { title: 'Experienced Development Team', description: 'Skilled professionals.' },
            { title: 'Modern & Scalable Solutions', description: 'Future-ready technology.' },
            { title: 'Long Term Support', description: "We're with you always." },
        ],
    },
    services: {
        ...head(
            'Our Services',
            'Transforming Ideas Into *Digital Reality.*',
            'We deliver end-to-end IT solutions, enterprise software, and scalable digital products to help modern businesses innovate, accelerate growth, and lead in a competitive digital landscape with a creative & tech-forward approach.',
            'View All Services',
            '/services',
        ),
        items: [
            { title: 'Web Development', description: '', link: '/services/web-development', tag: 'Ideas into Websites' },
            { title: 'Mobile App Development', description: '', link: '/services/mobile-app-development', tag: 'Better Solutions Brighter Tomorrow' },
            { title: 'Software Development', description: '', link: '/services/custom-software-development', tag: '</>' },
            { title: 'UI/UX Design', description: '', link: '/services/ui-ux-design', tag: 'Design Beyond Expectations' },
            { title: 'AI Solutions', description: '', link: '/services/ai-automation', tag: 'Smarter Ideas Bigger Possibilities' },
            { title: 'eCommerce Development', description: '', link: '/services/ecommerce-development', tag: 'Global Online Stores' },
            { title: 'Cloud & DevOps', description: '', link: '/services/cloud-devops', tag: 'AWS • Azure • Cloud' },
            { title: 'IT Support', description: '', link: '/services/managed-it-support', tag: '24/7 Always Here' },
            { title: 'Backend & API Development', description: '', link: '/services/backend-development', tag: 'API Integration' },
            { title: 'SEO & Digital Growth', description: '', link: '/services/seo-digital-growth', tag: 'Higher Reach More Growth' },
            { title: 'QA & Testing', description: '', link: '/services/qa-testing', tag: 'Quality Builds Trust' },
        ],
    },
    featured: {
        ...head(
            'Featured Service',
            'Complete *IT Support* for Your Business',
            'From networking to data recovery, we keep your business running smoothly with proactive managed IT support and quick solutions.',
            'Explore IT Support',
            '/services/managed-it-support',
        ),
        points: [
            { title: 'Networking Setup & Management', description: 'Secure, high-speed & scalable network infrastructure for modern enterprises.' },
            { title: 'Server Handling & Implementation', description: 'Expert cloud & on-premise server deployment, configuration, and maintenance.' },
            { title: '24/7 Desktop & Endpoint Support', description: 'Fast, reliable remote & on-site technical user assistance guaranteed.' },
            { title: 'OS Issue Fixing & Optimization', description: 'Comprehensive maintenance for Windows, macOS, and Linux systems.' },
            { title: 'Hardware Installation & Upgrades', description: 'Certified technical setup for workstations, server racks, and network gear.' },
            { title: 'Data Recovery & Backup Solutions', description: 'Proactive disaster recovery & secure business data restoration.' },
        ],
    },
    solutions: {
        ...head(
            'Our Solutions',
            '*Custom Solutions* for Every Business Need',
            'We help businesses across industries with powerful and scalable solutions designed for real growth.',
            'View All Solutions',
            '/solutions',
        ),
        items: [
            { title: 'Business Management Systems', description: 'Streamline your operations with custom business management software.', link: '/solutions/business-automation' },
            { title: 'CRM Solutions', description: 'Build stronger customer relationships and boost productivity.', link: '/solutions/crm-development' },
            { title: 'ERP Systems', description: 'Integrated solutions to manage your core business processes efficiently.', link: '/solutions/erp-development' },
            { title: 'Admin Dashboards', description: 'Get powerful, data-driven dashboards for better decision making.', link: '/solutions/enterprise-application-development' },
            { title: 'Booking Platforms', description: 'Smart booking solutions for appointments, events, and services.', link: '/solutions/booking-appointment-platform' },
            { title: 'eCommerce Platforms', description: 'Scalable and secure eCommerce solutions to grow your online business.', link: '/solutions/ecommerce-solutions' },
            { title: 'SaaS Products', description: 'Custom SaaS products built for scalability and long-term success.', link: '/solutions/saas-product-development' },
            { title: 'Custom Software', description: 'Tailored software solutions designed to fit your unique business needs.', link: '/solutions/enterprise-solutions' },
        ],
    },
    industries: {
        ...head(
            'Industries We Serve',
            'Empowering Businesses *Across Industries.*',
            "We understand your industry's unique challenges and build tailored digital solutions to help you grow faster, work smarter, and achieve your goals.",
            'View All Industries',
            '/industries',
        ),
        items: [
            { title: 'Healthcare', description: 'Digital solutions for better patient care.', link: '/industries/healthcare', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80' },
            { title: 'Education', description: 'Smarter learning for a brighter future.', link: '/industries/education', image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80' },
            { title: 'Finance', description: 'Secure and scalable financial solutions.', link: '/industries/fintech', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80' },
            { title: 'eCommerce', description: 'Powering online business growth.', link: '/industries/retail', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80' },
            { title: 'Real Estate', description: 'Digital experiences for modern real estate.', link: '/industries/real-estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80' },
            { title: 'Travel', description: 'Seamless travel solutions for everyone.', link: '/industries/travel-hospitality', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80' },
            { title: 'Logistics', description: 'Efficient supply chain and delivery solutions.', link: '/industries/logistics-transportation', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80' },
            { title: 'Manufacturing', description: 'Streamline operations with smart technology.', link: '/industries/manufacturing', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
            { title: 'Startups', description: 'Turning ideas into successful businesses.', link: '/industries/saas', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80' },
            { title: 'Software', description: 'Custom software for unique needs.', link: '/industries/enterprise-software', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80' },
            { title: 'Corporate', description: 'Enterprise solutions for long-term growth.', link: '/industries/enterprise', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
            { title: 'NGOs & Social Impact', description: 'Technology for a better tomorrow.', link: '/industries', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80' },
        ],
    },
    technologies: head(
        'Technologies',
        'Technologies *We Work With*',
        'We use modern technologies to build fast, secure, and scalable solutions that help businesses grow in the digital world.',
        'View All Technologies',
        '/technologies',
    ),
    projects: head(
        'Our Work',
        'Featured *Projects*',
        'We build powerful digital solutions that solve real problems and create meaningful impact. Explore some of our latest work across web and mobile platforms.',
        'View All Projects',
        '/portfolio',
    ),
    process: {
        ...head(
            'Our Process',
            'A Transparent *Development Process*',
            'From idea to launch, we follow a clear, collaborative, and result-driven process to turn your vision into a successful digital product.',
            'Learn More About Our Process',
            '/company/process',
        ),
        steps: [
            { title: 'Discovery', description: 'Understand your vision, goals and needs.', tag: 'Ideas to Insights' },
            { title: 'Strategy', description: 'Plan the solution with a clear roadmap.', tag: 'Plan for Success' },
            { title: 'Design', description: 'Craft user-centric UI/UX that delights.', tag: 'Design with Purpose' },
            { title: 'Development', description: 'Build with modern, scalable technology.', tag: 'Build with Quality' },
            { title: 'Testing', description: 'Verify performance, security and speed.', tag: 'Test for Excellence' },
            { title: 'Deployment', description: 'Launch your product smoothly and safely.', tag: 'Go Live Confidently' },
            { title: 'Support', description: 'Ongoing maintenance and steady growth.', tag: 'Always Here for You' },
        ],
    },
    why: {
        ...head('Why Choose Us', 'Real Business *Impact*', "We don't just build software, we create solutions that drive measurable results for businesses."),
        items: [
            { title: 'Faster Operations', description: 'Automate seamless business workflows.' },
            { title: 'Better Customer Experience', description: 'Fast load times and engaging interfaces.' },
            { title: 'Reduced Manual Work', description: 'Save time with smart automated systems.' },
            { title: 'Scalable Growth', description: 'Built to grow along with your revenue.' },
        ],
    },
    testimonials: head('Testimonials', 'What Our Clients *Say*', 'Trusted by businesses worldwide for delivering quality, innovation and measurable results.'),
    insights: head(
        'Resources',
        'Latest Insights & *Resources*',
        'Explore expert insights, industry trends, tutorials, and resources to help you stay ahead in the digital world.',
        'View All Articles',
        '/blog',
    ),
    faq: head('FAQ', 'Frequently Asked *Questions*', 'Find quick answers to common questions about our services, process, and support.'),
    cta: {
        ...head(
            "Let's work together",
            "Have an idea? Let's make it *real.*",
            "Tell us what you're building. We'll help you turn your idea into a scalable digital solution.",
            'Start a Project',
            '/get-a-quote',
        ),
        secondaryLabel: 'Talk to an Expert',
        secondaryHref: '/contact',
    },
};

/** "Ideas Into *Impact*" -> [{ text: 'Ideas Into ', hl: false }, { text: 'Impact', hl: true }] */
export function splitHighlight(title: string): { text: string; hl: boolean }[] {
    return title
        .split(/(\*[^*]+\*)/g)
        .filter(Boolean)
        .map((part) => (part.startsWith('*') && part.endsWith('*') ? { text: part.slice(1, -1), hl: true } : { text: part, hl: false }));
}

/** The title without the *markers* (for alt text, aria labels and SEO). */
export const plainTitle = (title: string) => title.replace(/\*/g, '');

type Doc = Record<string, unknown>;

/** CMS values over the defaults: empty strings and empty lists fall back. */
export function mergeHomeSections(cms: Doc | null | undefined): HomeSections {
    const out = structuredClone(HOME_SECTION_DEFAULTS) as unknown as Record<string, Doc>;
    if (!cms) return out as unknown as HomeSections;
    for (const [key, section] of Object.entries(out)) {
        const from = cms[key] as Doc | undefined;
        if (!from) continue;
        for (const [field, value] of Object.entries(from)) {
            if (Array.isArray(value)) {
                const items = value.filter((v) => v && typeof v === 'object' && Object.values(v as Doc).some((x) => x !== '' && x != null));
                if (items.length) section[field] = items;
            } else if (typeof value === 'string' && value.trim()) {
                section[field] = value;
            }
        }
    }
    return out as unknown as HomeSections;
}
