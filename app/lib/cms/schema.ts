// schema.org JSON-LD builders, fed by Admin → Site settings.
import { SITE_URL } from '../site';
import type { SiteSettings } from './content';

const abs = (url?: string) => (!url ? undefined : /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`);

export function organizationSchema(s: SiteSettings) {
    const sameAs = Object.values(s.social).filter((u): u is string => Boolean(u && /^https?:\/\//.test(u)));
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: s.name,
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
        sameAs: sameAs.length ? sameAs : undefined,
    };
}

export function websiteSchema(s: SiteSettings) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: s.name,
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

export function articleSchema(input: { title: string; description: string; path: string; image?: string; published?: string; modified?: string; author?: string }) {
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
        author: input.author ? { '@type': 'Organization', name: input.author } : { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
    };
}
