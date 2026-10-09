import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { StaticImageData } from 'next/image';
import {
    BarChart3, ClipboardList, Cloud, Code2, Layers, Lightbulb, Rocket, Search, Server, Settings,
    ShieldCheck, Target, TrendingUp, UserRound, Workflow,
} from 'lucide-react';

import { getSolutionBySlug, getAllSolutionSlugs } from '../../lib/solutions';
import { SITE_URL } from '../../lib/site';
import { splitTitle } from '../../components/detail/SectionHeading';
import {
    SolutionPageHero, SolutionOverview, KeyAreas, ProcessRow, ImpactRow, FaqCta,
} from '../../components/solutions/SolutionSections';

import aiSolu from '@/app/assets/home/service/ai-solu.webp';
import appDev from '@/app/assets/home/service/app-dev.webp';
import backendDev from '@/app/assets/home/service/backkend-api-dev.webp';
import cloudDev from '@/app/assets/home/service/cloud-dev.webp';
import ecommerce from '@/app/assets/home/service/e-commerce.webp';
import itSupport from '@/app/assets/home/service/it-support.webp';
import seoGrowth from '@/app/assets/home/service/seo-growth.webp';
import softDev from '@/app/assets/home/service/soft-dev.webp';
import uiux from '@/app/assets/home/service/ui-ux-des.webp';
import webDev from '@/app/assets/home/service/web-dev.webp';

type SolutionPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = getAllSolutionSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
    const { slug } = await params;
    const solution = getSolutionBySlug(slug);

    if (!solution) {
        return {
            title: 'Solution Not Found | TheWebHero',
        };
    }

    const canonicalUrl = `https://thewebhero.in/solutions/${solution.slug}`;

    return {
        title: solution.seoTitle,
        description: solution.seoDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: solution.seoTitle,
            description: solution.seoDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: solution.ogImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: solution.title,
                },
            ],
        },
    };
}

/** Hero + overview pictures per solution category (by category slug). */
const CATEGORY_IMAGES: Record<string, [StaticImageData, StaticImageData]> = {
    'digital-transformation': [cloudDev, softDev],
    'business-automation': [aiSolu, backendDev],
    'startup-solutions': [appDev, uiux],
    'enterprise-solutions': [softDev, itSupport],
    'saas-development': [cloudDev, webDev],
    'marketplace-development': [ecommerce, appDev],
    'crm-development': [seoGrowth, softDev],
    'erp-development': [backendDev, cloudDev],
    'ecommerce-solutions': [ecommerce, webDev],
    'on-demand-solutions': [appDev, cloudDev],
};

const TRUST = [
    { label: 'Strategy Led', sub: 'Approach', Icon: Target },
    { label: 'Modern', sub: 'Technologies', Icon: Layers },
    { label: 'Business', sub: 'Growth', Icon: BarChart3 },
    { label: 'Long-term', sub: 'Value', Icon: ShieldCheck },
];

const OVERVIEW_FEATURES = [
    { title: 'Customer-Centric', description: 'Build seamless and personalized experiences.', Icon: Settings },
    { title: 'Data-Driven', description: 'Make smarter decisions with real-time insights.', Icon: BarChart3 },
    { title: 'Secure & Reliable', description: 'Enterprise-grade security and compliance.', Icon: ShieldCheck },
    { title: 'Scalable Solutions', description: 'Future-ready architecture for continuous growth.', Icon: Layers },
];

const AREA_ICONS = [Settings, UserRound, BarChart3, Cloud];
const STEP_ICONS = [Search, ClipboardList, Code2, Rocket];
const IMPACT_ICONS = [BarChart3, UserRound, TrendingUp, ShieldCheck];

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
    const { slug } = await params;
    const solution = getSolutionBySlug(slug);

    if (!solution) {
        notFound();
    }

    const [lead, accent] = splitTitle(solution.title);
    const [heroImage, overviewImage] = CATEGORY_IMAGES[solution.categorySlug] ?? [softDev, cloudDev];
    const isCategory = solution.slug === solution.categorySlug;

    const crumbs = [
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        ...(!isCategory ? [{ label: solution.category, href: `/solutions/${solution.categorySlug}` }] : []),
        { label: solution.title },
    ];

    const pageUrl = `${SITE_URL}/solutions/${solution.slug}`;
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
            '@type': 'FAQPage',
            mainEntity: solution.faqs.map((f) => ({
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
                eyebrow="Solutions"
                lead={lead}
                accent={accent}
                description={solution.shortDescription}
                trust={TRUST}
                image={heroImage}
                imageAlt={`${solution.title} by TheWebHero`}
                chips={[
                    { label: 'Digital Innovation', Icon: Lightbulb },
                    { label: 'Scalable Solutions', Icon: TrendingUp },
                ]}
            />

            {/* 2. Overview */}
            <SolutionOverview
                eyebrow="Overview"
                lead="Driving Business Growth"
                accent={`with ${solution.title}`}
                text={solution.description}
                image={overviewImage}
                imageAlt={`${solution.title} overview`}
                chips={[
                    { label: 'Modern Infrastructure', Icon: Server },
                    { label: 'Process Automation', Icon: Workflow },
                    { label: 'Data-Driven Decisions', Icon: BarChart3 },
                ]}
                features={OVERVIEW_FEATURES}
            />

            {/* 3. Key areas */}
            <KeyAreas
                eyebrow="Our Services"
                lead="Key Areas of"
                accent={solution.title}
                text="End-to-end solutions to modernize your business and unlock new opportunities."
                items={solution.capabilities.map((c, i) => ({ ...c, Icon: AREA_ICONS[i % AREA_ICONS.length] }))}
            />

            {/* 4. Process */}
            <ProcessRow
                eyebrow="Our Process"
                lead="Our"
                accent={solution.title}
                tail="Process"
                text="A structured and collaborative approach to ensure measurable results."
                steps={solution.process.map((p, i) => ({ ...p, Icon: STEP_ICONS[i % STEP_ICONS.length] }))}
            />

            {/* 5. Why choose us */}
            <ImpactRow
                eyebrow="Why Choose Us"
                lead="Real"
                accent="Business Impact"
                items={solution.benefits.map((b, i) => ({ ...b, Icon: IMPACT_ICONS[i % IMPACT_ICONS.length] }))}
            />

            {/* 6. FAQ + CTA */}
            <FaqCta
                faq={{ eyebrow: 'FAQ', lead: 'Frequently Asked', accent: 'Questions', faqs: solution.faqs }}
                cta={{
                    eyebrow: 'Ready to Transform',
                    lead: "Let's Build Your",
                    accent: 'Digital Future',
                    text: 'Partner with our expert team to create innovative, scalable and future-ready solutions for your business.',
                    checklist: ['Strategic Guidance', 'Expert Team', 'Scalable Solutions'],
                }}
            />
        </main>
    );
}
