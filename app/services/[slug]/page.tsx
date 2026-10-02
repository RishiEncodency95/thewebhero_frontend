import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Gauge, Layers, Plug, ShieldCheck } from 'lucide-react';

import { getServiceBySlug, getAllServiceSlugs, SERVICE_CATEGORIES } from '../../lib/services';
import { SITE_URL } from '../../lib/site';
import DetailHero, { type Crumb } from '../../components/detail/DetailHero';
import {
    WhySection, OfferingsGrid, ProcessSteps, TechStrip, ValueSection, type Offering,
} from '../../components/detail/DetailSections';
import { FaqSection, CtaBand } from '../../components/detail/DetailFaqCta';
import { CATEGORY_VISUALS, SERVICE_ICON, SERVICE_IMAGE } from '../../components/services/serviceVisuals';

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// Generate static params for all services so pages build fast
export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found | TheWebHero',
        };
    }

    const canonicalUrl = `${SITE_URL}/services/${service.slug}`;

    return {
        title: service.seoTitle,
        description: service.seoDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: service.seoTitle,
            description: service.seoDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: service.ogImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

/** Icons for the "What's included" cards on single-service pages. */
const CAPABILITY_ICONS = [
    { Icon: Layers, color: 'text-purple-600' },
    { Icon: Gauge, color: 'text-emerald-600' },
    { Icon: ShieldCheck, color: 'text-blue-600' },
    { Icon: Plug, color: 'text-pink-600' },
];

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    // A few category slugs are reused by one of their own child services, so
    // decide "category page" from the category list, not from the service map.
    const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);
    const parent = SERVICE_CATEGORIES.find((c) => c.slug === service.categorySlug);
    const isCategory = Boolean(category);

    const visual = CATEGORY_VISUALS[service.categorySlug] ?? CATEGORY_VISUALS['web-development'];
    const image = SERVICE_IMAGE[service.slug] ?? visual.image;

    const toOffering = (s: { title: string; slug: string; shortDescription: string }): Offering => {
        const icon = SERVICE_ICON[s.slug] ?? { Icon: visual.Icon, color: 'text-purple-600' };
        return { title: s.title, description: s.shortDescription, href: `/services/${s.slug}`, ...icon };
    };

    const children = (category?.services ?? []).filter((s) => s.slug !== slug).map(toOffering);
    const siblings = !isCategory && parent
        ? parent.services.filter((s) => s.slug !== slug).slice(0, 8).map(toOffering)
        : [];
    const capabilities: Offering[] = service.capabilities.map((c, i) => ({
        title: c.title,
        description: c.description,
        ...CAPABILITY_ICONS[i % CAPABILITY_ICONS.length],
    }));

    const crumbs: Crumb[] = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        ...(!isCategory && parent ? [{ label: parent.name, href: `/services/${parent.slug}` }] : []),
        { label: service.title },
    ];

    const pageUrl = `${SITE_URL}/services/${service.slug}`;
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: crumbs.map((c, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: c.label,
                item: c.href ? `${SITE_URL}${c.href === '/' ? '' : c.href}` : pageUrl,
            })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.title,
            serviceType: service.category,
            description: service.seoDescription,
            url: pageUrl,
            provider: { '@type': 'Organization', name: 'TheWebHero', url: SITE_URL },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        },
    ];

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />

            <DetailHero
                crumbs={crumbs}
                eyebrow={isCategory ? `${service.title} Services` : service.category}
                title={service.title}
                description={`${service.shortDescription} We design, build and optimise ${service.title.toLowerCase()} solutions that are fast, secure and built to scale with your business.`}
                image={image}
                imageAlt={`${service.title} by TheWebHero`}
                icons={visual.tech}
            />

            <WhySection
                eyebrow={`Why ${service.title}`}
                lead="Why Modern Businesses Choose"
                accent={service.title}
                text={service.problemStatement ?? service.description}
                linkHref="#offerings"
                cards={service.benefits}
            />

            {isCategory ? (
                <OfferingsGrid
                    id="offerings"
                    eyebrow={`Our ${service.title} Services`}
                    lead="Complete"
                    accent={service.title}
                    tail="Solutions"
                    text={`From focused builds to complex platforms, we provide end-to-end ${service.title.toLowerCase()} services using the latest technologies.`}
                    items={children}
                />
            ) : (
                <OfferingsGrid
                    id="offerings"
                    eyebrow="What's Included"
                    lead="Our"
                    accent={service.title}
                    tail="Capabilities"
                    text={service.description}
                    items={capabilities}
                />
            )}

            <ProcessSteps lead="Our" accent={`${service.title} Process`} steps={service.process} />

            <TechStrip lead="Modern Technologies for" accent={service.title} items={visual.tech} />

            <ValueSection
                accent={service.title}
                text={`We combine strategy, technology and creativity to build ${service.title.toLowerCase()} solutions that deliver measurable business results.`}
                checklist={service.deliverables}
            />

            {siblings.length > 0 && parent && (
                <OfferingsGrid
                    eyebrow="Related Services"
                    lead="More"
                    accent={parent.name}
                    tail="Services"
                    items={siblings}
                />
            )}

            <FaqSection accent={service.title} faqs={service.faqs} />

            <CtaBand lead="Let's Build Your Next" accent={`${service.title} Project`} />
        </main>
    );
}
