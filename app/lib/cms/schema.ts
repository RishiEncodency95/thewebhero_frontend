// schema.org JSON-LD builders, fed by Admin → Site settings.
import { SITE_URL } from '../site';
import type { SiteSettings } from './content';
import { mapLink } from '../contact';

const abs = (url?: string) => (!url ? undefined : /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`);

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

/** "Mon – Sat, 10:00 – 19:00 IST" -> schema.org opening hours (undefined when it can't be read). */
export function openingHours(hours?: string) {
    const m = hours?.match(/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\w*\s*[–-]\s*(Mon|Tue|Wed|Thu|Fri|Sat|Sun)\w*.*?(\d{1,2}:\d{2})\s*[–-]\s*(\d{1,2}:\d{2})/i);
    if (!m) return undefined;
    const from = DAYS.findIndex((d) => d.startsWith(m[1].slice(0, 3)));
    const to = DAYS.findIndex((d) => d.startsWith(m[2].slice(0, 3)));
    if (from < 0 || to < from) return undefined;
    const pad = (t: string) => t.padStart(5, '0');
    return [{ '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS.slice(from, to + 1), opens: pad(m[3]), closes: pad(m[4]) }];
}

/** Sitewide business entity: an Organization that is also a local ProfessionalService (local search). */
/** Other ways people type the brand: "The Web Hero", "thewebhero", "thewebhero.in". */
function brandAlternateNames(name: string) {
    const spaced = name.replace(/([a-z])([A-Z])/g, '$1 $2');
    const host = new URL(SITE_URL).hostname;
    return [...new Set([spaced, name.toLowerCase(), host])].filter((n) => n !== name);
}

export function organizationSchema(s: SiteSettings) {
    const sameAs = Object.values(s.social).filter((u): u is string => Boolean(u && /^https?:\/\//.test(u)));
    return {
        '@context': 'https://schema.org',
        '@type': ['Organization', 'ProfessionalService'],
        '@id': `${SITE_URL}/#organization`,
        name: s.name,
        alternateName: brandAlternateNames(s.name),
        legalName: s.organization.legalName || s.name,
        url: SITE_URL,
        logo: { '@type': 'ImageObject', url: abs(s.logo) ?? `${SITE_URL}/logo-schema.png` },
        image: abs(s.defaultOgImage),
        description: s.organization.description || s.defaultDescription,
        foundingDate: s.organization.founded || undefined,
        email: s.contact.email,
        telephone: s.contact.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: s.contact.address.street,
            addressLocality: s.contact.address.locality,
            addressRegion: s.contact.address.region,
            postalCode: s.contact.address.postalCode,
            addressCountry: s.contact.address.country,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: s.contact.phone,
            email: s.contact.salesEmail || s.contact.email,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi'],
        },
        hasMap: mapLink(s.contact),
        openingHoursSpecification: openingHours(s.contact.hours),
        priceRange: '₹₹',
        areaServed: [
            { '@type': 'City', name: s.contact.address.locality || 'Ghaziabad' },
            { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
            { '@type': 'Country', name: 'India' },
        ],
        knowsAbout: ['Website development', 'Mobile app development', 'Custom software development', 'UI/UX design', 'eCommerce development', 'SEO', 'AI solutions', 'Cloud and DevOps', 'IT support'],
        sameAs: sameAs.length ? sameAs : undefined,
    };
}

export function websiteSchema(s: SiteSettings) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: s.name,
        // Tells Google these spellings are the same brand (used for the site name in results).
        alternateName: brandAlternateNames(s.name),
        description: s.defaultDescription,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#organization` },
    };
}

/** BreadcrumbList from [{ name, path }] (Home is added automatically). */
export function breadcrumbSchema(items: { name: string; path?: string }[]) {
    const all = [{ name: 'Home', path: '/' }, ...items];
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: all.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            ...(item.path ? { item: `${SITE_URL}${item.path === '/' ? '' : item.path}` } : {}),
        })),
    };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
    if (!faqs.length) return null;
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    };
}

export function serviceSchema(input: { name: string; description: string; path: string; category?: string }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: input.name,
        description: input.description,
        url: `${SITE_URL}${input.path}`,
        serviceType: input.category,
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'IN',
    };
}

export function articleSchema(input: {
    title: string;
    description: string;
    path: string;
    image?: string;
    published?: string;
    modified?: string;
    author?: string;
    section?: string;
    keywords?: string[];
    wordCount?: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: input.title,
        description: input.description,
        url: `${SITE_URL}${input.path}`,
        mainEntityOfPage: `${SITE_URL}${input.path}`,
        image: abs(input.image),
        datePublished: input.published,
        dateModified: input.modified || input.published,
        author: input.author ? { '@type': 'Organization', name: input.author, url: SITE_URL } : { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        articleSection: input.section,
        keywords: input.keywords?.length ? input.keywords.join(', ') : undefined,
        wordCount: input.wordCount,
        inLanguage: 'en-IN',
    };
}
