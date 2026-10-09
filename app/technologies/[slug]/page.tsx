import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { StaticImageData } from 'next/image';
import {
    BarChart3, Blocks, Boxes, ClipboardList, Cloud, Code2, Cpu, Gauge, Layers, Lightbulb, Plug, Rocket,
    Search, Settings, ShieldCheck, Sparkles, TrendingUp, Wrench, Zap,
} from 'lucide-react';

import { getTechnologyBySlug, getAllTechSlugs } from '../../lib/technologies';
import { SITE_URL } from '../../lib/site';
import { splitTitle } from '../../components/detail/SectionHeading';
import {
    SolutionPageHero, SolutionOverview, KeyAreas, ProcessRow, ImpactRow, ChecklistColumns, FaqCta,
} from '../../components/solutions/SolutionSections';

import aiSolu from '@/app/assets/home/service/ai-solu.webp';
import appDev from '@/app/assets/home/service/app-dev.webp';
import backendDev from '@/app/assets/home/service/backkend-api-dev.webp';
import cloudDev from '@/app/assets/home/service/cloud-dev.webp';
import ecommerce from '@/app/assets/home/service/e-commerce.webp';
import itSupport from '@/app/assets/home/service/it-support.webp';
import softDev from '@/app/assets/home/service/soft-dev.webp';
import uiux from '@/app/assets/home/service/ui-ux-des.webp';
import webDev from '@/app/assets/home/service/web-dev.webp';

type TechnologyPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = getAllTechSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TechnologyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tech = getTechnologyBySlug(slug);

    if (!tech) {
        return {
            title: 'Technology Not Found | TheWebHero',
        };
    }

    const canonicalUrl = `https://thewebhero.in/technologies/${tech.slug}`;

    return {
        title: tech.seoTitle,
        description: tech.seoDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: tech.seoTitle,
            description: tech.seoDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: tech.ogImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: tech.name,
                },
            ],
        },
    };
}

/** Hero + overview pictures per technology category (by category slug). */
const CATEGORY_IMAGES: Record<string, [StaticImageData, StaticImageData]> = {
    frontend: [webDev, uiux],
    backend: [backendDev, cloudDev],
    'mobile-development': [appDev, uiux],
    databases: [backendDev, softDev],
    cloud: [cloudDev, itSupport],
    devops: [cloudDev, softDev],
    ai: [aiSolu, softDev],
    ecommerce: [ecommerce, webDev],
};

const TRUST = [
    { label: 'Certified', sub: 'Engineers', Icon: ShieldCheck },
    { label: 'Modern', sub: 'Best Practices', Icon: Layers },
    { label: 'High', sub: 'Performance', Icon: Gauge },
    { label: 'Long-term', sub: 'Support', Icon: Wrench },
];

const FEATURE_ICONS = [Zap, Layers, Blocks, Settings];
const USE_CASE_ICONS = [Code2, Rocket, Plug, Cloud];
const CAPABILITY_ICONS = [Boxes, Gauge, ShieldCheck, Cpu];
const STEP_ICONS = [Search, ClipboardList, Code2, Rocket];
const TOOL_ICONS = [Blocks, Wrench, Rocket, Plug, Cloud, BarChart3];

export default async function TechnologyDetailPage({ params }: TechnologyPageProps) {
    const { slug } = await params;
    const tech = getTechnologyBySlug(slug);

    if (!tech) {
        notFound();
    }

    // H1 carries the search keyword: "React Development Services", "DevOps Services".
    const heroTitle = /services$/i.test(tech.keyword) ? tech.keyword : `${tech.keyword} Services`;
    const [lead, accent] = splitTitle(heroTitle);
    const roleTitle = tech.role.replace(/\b[a-z]/g, (c) => c.toUpperCase());
    const [heroImage, overviewImage] = CATEGORY_IMAGES[tech.categorySlug] ?? [softDev, cloudDev];
    const isCategory = tech.slug === tech.categorySlug;

    const crumbs = [
        { label: 'Home', href: '/' },
        { label: 'Technologies', href: '/technologies' },
        ...(!isCategory ? [{ label: tech.category, href: `/technologies/${tech.categorySlug}` }] : []),
        { label: tech.name },
    ];

    const tools = [
        ...tech.ecosystem.map((e) => ({ title: e.name, description: e.description, meta: e.category })),
        ...tech.integrations.map((t) => ({ title: t.name, description: t.description, meta: t.type })),
    ];

    const related = [
        ...tech.relatedServices.map((r) => ({ title: r.title, description: r.shortDescription, href: `/services/${r.slug}`, meta: 'Service', Icon: Settings })),
        ...tech.relatedSolutions.map((r) => ({ title: r.title, description: r.shortDescription, href: `/solutions/${r.slug}`, meta: 'Solution', Icon: Lightbulb })),
        ...tech.relatedTechnologies
            .filter((r) => r.slug !== tech.slug)
            .map((r) => ({ title: r.name, description: r.shortDescription, href: `/technologies/${r.slug}`, meta: 'Technology', Icon: Cpu })),
    ];

    const pageUrl = `${SITE_URL}/technologies/${tech.slug}`;
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
            name: heroTitle,
            serviceType: tech.keyword,
            description: tech.seoDescription,
            url: pageUrl,
            areaServed: 'IN',
            provider: { '@type': 'Organization', name: 'TheWebHero', url: SITE_URL },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: tech.faqs.map((f) => ({
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

            {/* 1. Hero */}
            <SolutionPageHero
                crumbs={crumbs}
                eyebrow={isCategory ? 'Technologies' : tech.category}
                lead={lead}
                accent={accent}
                description={tech.description}
                trust={TRUST}
                image={heroImage}
                imageAlt={`${tech.name} development by TheWebHero`}
                chips={[
                    { label: 'Clean Architecture', Icon: Code2 },
                    { label: 'Built to Scale', Icon: TrendingUp },
                ]}
            />

            {/* 2. Overview */}
            <SolutionOverview
                eyebrow="Overview"
                lead="Why Choose TheWebHero for"
                accent={tech.keyword}
                text={`${tech.shortDescription} ${tech.overview}`}
                image={overviewImage}
                imageAlt={`${tech.name} overview`}
                chips={[
                    { label: 'Fast Performance', Icon: Zap },
                    { label: 'Secure by Design', Icon: ShieldCheck },
                    { label: 'AI-Ready Stack', Icon: Sparkles },
                ]}
                features={tech.features.map((f, i) => ({ ...f, Icon: FEATURE_ICONS[i % FEATURE_ICONS.length] }))}
            />

            {/* 3. Use cases */}
            <KeyAreas
                eyebrow="Use Cases"
                lead="What We Build with"
                accent={tech.name}
                text={`Business-ready ${tech.name} solutions for startups, SMEs and enterprises.`}
                items={tech.useCases.map((u, i) => ({ ...u, Icon: USE_CASE_ICONS[i % USE_CASE_ICONS.length] }))}
            />

            {/* 4. Capabilities */}
            <ImpactRow
                eyebrow="Capabilities"
                lead="Our"
                accent={`${tech.keyword} Expertise`}
                items={tech.capabilities.map((c, i) => ({ ...c, Icon: CAPABILITY_ICONS[i % CAPABILITY_ICONS.length] }))}
            />

            {/* 5. Ecosystem & integrations */}
            <KeyAreas
                eyebrow="Ecosystem"
                lead={`${tech.name} Tools &`}
                accent="Integrations"
                text={`The libraries, tooling and platforms we pair with ${tech.name}.`}
                items={tools.map((t, i) => ({ ...t, Icon: TOOL_ICONS[i % TOOL_ICONS.length] }))}
            />

            {/* 6. Security & scalability */}
            <ChecklistColumns
                eyebrow="Built Right"
                lead="Secure & Scalable"
                accent={`${tech.name} Solutions`}
                text="Every build ships with production-grade safeguards and room to grow."
                columns={[
                    { title: 'Security', points: tech.security, Icon: ShieldCheck },
                    { title: 'Scalability', points: tech.scalability, Icon: TrendingUp },
                ]}
            />

            {/* 7. Process */}
            <ProcessRow
                eyebrow="Our Process"
                lead="Our"
                accent={tech.keyword}
                tail="Process"
                text={`A proven, transparent process that takes your ${tech.name} project from idea to launch.`}
                steps={tech.process.map((p, i) => ({ title: p.title, description: p.description, Icon: STEP_ICONS[i % STEP_ICONS.length] }))}
            />

            {/* 8. Related services, solutions & technologies */}
            {related.length > 0 && (
                <KeyAreas
                    eyebrow="Explore More"
                    lead="Related"
                    accent="Services & Solutions"
                    text={`Services, solutions and technologies that pair well with ${tech.name}.`}
                    items={related}
                />
            )}

            {/* 9. FAQ + CTA */}
            <FaqCta
                faq={{ eyebrow: 'FAQ', lead: tech.keyword, accent: 'FAQs', faqs: tech.faqs }}
                cta={{
                    eyebrow: 'Start Your Project',
                    lead: 'Hire Expert',
                    accent: roleTitle,
                    text: `Partner with a trusted ${tech.keyword.toLowerCase()} company in India to build fast, secure and scalable software for your business.`,
                    checklist: ['Expert Engineers', 'Agile Delivery', 'Ongoing Support'],
                }}
            />
        </main>
    );
}
