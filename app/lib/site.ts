/**
 * Single source of truth for brand, domain and contact details.
 *
 * ⚠️ PEHLE YEH THEEK KARO — abhi site par teen alag domain chal rahe the
 * (thewebhero.ai canonical me, thewebhero.com emails me, thewebhero.in
 * JSON-LD me). Google ke liye yeh duplicate-content signal hai aur ranking
 * seedha girati hai. Neeche `SITE_URL` me apna asli domain daalo — poori
 * site (canonical, sitemap, OG tags, schema) automatically update ho jayegi.
 */
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://thewebhero.in'
).replace(/\/$/, '');

export const SITE = {
    name: 'TheWebHero',
    legalName: 'TheWebHero',
    url: SITE_URL,
    tagline: 'Ideas. Solutions. Real Impact.',
    description:
        'TheWebHero is an IT services company building custom web apps, mobile apps, AI solutions, cloud infrastructure and managed IT support for businesses that need to scale.',
    ogImage: `${SITE_URL}/og-image.jpg`,
    founded: '2017',
} as const;

/** ⚠️ +91 98765 43210 ek placeholder number hai — asli number daalo. */
export const CONTACT = {
    email: 'hello@thewebhero.in',
    salesEmail: 'hello@thewebhero.in',
    privacyEmail: 'privacy@thewebhero.in',
    legalEmail: 'legal@thewebhero.in',
    phone: '+91 98765 43210',
    phoneHref: 'tel:+919876543210',
    whatsapp: '919876543210',
    hours: 'Mon – Sat, 10:00 – 19:00 IST',
    address: {
        street: 'Govindpuram',
        locality: 'Ghaziabad',
        region: 'Uttar Pradesh',
        postalCode: '201013',
        country: 'IN',
    },
} as const;

/** ⚠️ Abhi ye sab `#` the (dead links). Asli profile URLs daalo. */
export const SOCIAL = {
    linkedin: 'https://www.linkedin.com/company/thewebhero',
    twitter: 'https://twitter.com/thewebhero',
    facebook: 'https://www.facebook.com/thewebhero',
    instagram: 'https://www.instagram.com/thewebhero',
    youtube: 'https://www.youtube.com/@thewebhero',
} as const;

export const SOCIAL_LIST = Object.values(SOCIAL);

/** Organization schema — har page par inject hota hai layout se. */
export function organizationSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo-schema.png`,
            width: 600,
            height: 200,
        },
        image: SITE.ogImage,
        description: SITE.description,
        foundingDate: SITE.founded,
        email: CONTACT.email,
        telephone: CONTACT.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: CONTACT.address.street,
            addressLocality: CONTACT.address.locality,
            addressRegion: CONTACT.address.region,
            postalCode: CONTACT.address.postalCode,
            addressCountry: CONTACT.address.country,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: CONTACT.phone,
            email: CONTACT.email,
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['en', 'hi'],
        },
        sameAs: SOCIAL_LIST,
    };
}

/** Homepage ke liye WebSite schema (sitelinks search box ke saath). */
export function websiteSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.name,
        description: SITE.description,
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/resources/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}
