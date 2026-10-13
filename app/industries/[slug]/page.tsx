import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { StaticImageData } from 'next/image';
import {
    Award, BarChart3, Building2, ClipboardList, Cloud, Code2, Cpu, Handshake, LayoutDashboard, Layers,
    Lightbulb, Lock, Rocket, Search, Settings, ShieldCheck, Smartphone, TrendingUp, Users, Workflow,
} from 'lucide-react';

import { getIndustryBySlug, getAllIndustrySlugs } from '../../lib/cms/content';
import { buildMetadata, JsonLd } from '../../lib/cms/seo';
import { SITE_URL } from '../../lib/site';
import { splitTitle } from '../../components/detail/SectionHeading';
import {
    SolutionPageHero, SolutionOverview, KeyAreas, ProcessRow, ImpactRow, ChecklistColumns, ChallengeSolution, FaqCta,
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

type IndustryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = await getAllIndustrySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = await getIndustryBySlug(slug);
    if (!industry) return { title: 'Not found', robots: { index: false } };
    return buildMetadata({
        path: `/industries/${industry.slug}`,
        seo: industry.seo,
        title: industry.keyword || industry.name,
        description: industry.shortDescription,
        image: industry.heroImage,
    });
}

/** Hero + overview pictures per industry category (by category slug). */
const CATEGORY_IMAGES: Record<string, [StaticImageData, StaticImageData]> = {
    healthcare: [appDev, softDev],
    education: [webDev, uiux],
    fintech: [backendDev, cloudDev],
    'ecommerce-retail': [ecommerce, webDev],
    'real-estate': [webDev, seoGrowth],
    'logistics-transportation': [appDev, cloudDev],
    'travel-hospitality': [uiux, webDev],
    'food-restaurant': [appDev, ecommerce],
    'fitness-wellness': [appDev, uiux],
    'entertainment-media': [cloudDev, webDev],
    gaming: [appDev, backendDev],
    automotive: [softDev, appDev],
    manufacturing: [softDev, itSupport],
    retail: [ecommerce, softDev],
    sports: [appDev, webDev],
    legal: [softDev, webDev],
    insurance: [backendDev, softDev],
    agriculture: [appDev, aiSolu],
    construction: [softDev, cloudDev],
    saas: [cloudDev, webDev],
    enterprise: [softDev, itSupport],
};

const TRUST = [
    { label: 'Industry', sub: 'Expertise', Icon: Award },
    { label: 'Secure &', sub: 'Compliant', Icon: ShieldCheck },
    { label: 'Scalable', sub: 'Architecture', Icon: Layers },
    { label: 'Dedicated', sub: 'Support', Icon: Handshake },
];

const OVERVIEW_ICONS = [Award, Smartphone, Workflow, Lock];
const MODULE_ICONS = [LayoutDashboard, Users, Workflow, BarChart3];
const STEP_ICONS = [Search, ClipboardList, Code2, Rocket];

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
    const { slug } = await params;
    const industry = await getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    // H1 carries the search keyword, e.g. "Healthcare Software Solutions".
    const [lead, accent] = splitTitle(industry.keyword);
    const [heroImage, overviewImage] = CATEGORY_IMAGES[industry.categorySlug] ?? [softDev, cloudDev];
    const isCategory = industry.slug === industry.categorySlug;
    const sector = industry.category;

    const crumbs = [
        { label: 'Home', href: '/' },
        { label: 'Industries', href: '/industries' },
        ...(!isCategory ? [{ label: sector, href: `/industries/${industry.categorySlug}` }] : []),
        { label: industry.name },
    ];

    const related = [
        ...industry.relatedServices.map((r) => ({ title: r.title, description: r.shortDescription, href: `/services/${r.slug}`, meta: 'Service', Icon: Settings })),
        ...industry.relatedSolutions.map((r) => ({ title: r.title, description: r.shortDescription, href: `/solutions/${r.slug}`, meta: 'Solution', Icon: Lightbulb })),
        ...industry.relatedTechnologies.map((r) => ({ title: r.name, description: r.shortDescription, href: `/technologies/${r.slug}`, meta: 'Technology', Icon: Cpu })),
    ];

    const relatedIndustries = industry.relatedIndustries.map((r) => ({
        title: r.name, description: r.shortDescription, href: `/industries/${r.slug}`, meta: sector, Icon: Building2,
    }));

    const pageUrl = `${SITE_URL}/industries/${industry.slug}`;
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
            name: industry.keyword,
            serviceType: industry.keyword,
            description: industry.seoDescription,
            url: pageUrl,
            areaServed: 'IN',
            audience: { '@type': 'BusinessAudience', audienceType: sector },
            provider: { '@type': 'Organization', name: 'TheWebHero', url: SITE_URL },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: industry.faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
        },
    ].filter((schema) => schema['@type'] !== 'FAQPage' || (schema as { mainEntity: unknown[] }).mainEntity.length > 0);

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            <JsonLd data={industry.seo?.structuredData} />

            {/* 1. Hero */}
            <SolutionPageHero
                crumbs={crumbs}
                eyebrow={isCategory ? 'Industries' : sector}
                lead={lead}
                accent={accent}
                description={industry.description}
                trust={TRUST}
                image={heroImage}
                imageAlt={`${industry.keyword} by TheWebHero`}
                chips={[
                    { label: 'Domain-Driven Design', Icon: Lightbulb },
                    { label: 'Built to Scale', Icon: TrendingUp },
                ]}
            />

            {/* 2. Overview */}
            <SolutionOverview
                eyebrow="Overview"
                lead="Why Choose TheWebHero for"
                accent={industry.keyword}
                text={`${industry.shortDescription} ${industry.overview}`}
                image={overviewImage}
                imageAlt={`${industry.name} software overview`}
                chips={[
                    { label: 'Cloud-Ready Platforms', Icon: Cloud },
                    { label: 'Workflow Automation', Icon: Workflow },
                    { label: 'Real-Time Insights', Icon: BarChart3 },
                ]}
                features={industry.capabilities.map((c, i) => ({ ...c, Icon: OVERVIEW_ICONS[i % OVERVIEW_ICONS.length] }))}
            />

            {/* 3. Challenges → solutions */}
            <ChallengeSolution
                eyebrow="Challenges We Solve"
                lead={`${sector} Challenges,`}
                accent="Solved with Technology"
                text={`Common problems ${sector.toLowerCase()} businesses face, and how our software fixes them.`}
                items={industry.challenges.map((c) => ({ title: c.title, description: c.description, solution: c.techNeed }))}
            />

            {/* 4. Key modules */}
            <KeyAreas
                eyebrow="Key Features"
                lead="Powerful Modules for"
                accent={`${industry.name} Software`}
                text="Everything your team and customers need, built around your workflows."
                items={industry.features.map((f, i) => ({ ...f, Icon: MODULE_ICONS[i % MODULE_ICONS.length] }))}
            />

            {/* 5. Why us */}
            <ImpactRow
                eyebrow="Why TheWebHero"
                lead="Built for"
                accent="Real Business Results"
                items={[
                    { title: 'Faster Operations', description: 'Automate repetitive work and free up your team.', Icon: TrendingUp },
                    { title: 'Better Customer Experience', description: 'Fast, easy web and mobile apps your customers love.', Icon: Users },
                    { title: 'Data-Driven Decisions', description: 'Live dashboards and reports for every department.', Icon: BarChart3 },
                    { title: 'Lower Long-Term Costs', description: 'Scalable software that grows without re-building.', Icon: ShieldCheck },
                ]}
            />

            {/* 6. Security, compliance & scalability */}
            <ChecklistColumns
                eyebrow="Trust & Compliance"
                lead="Secure, Compliant &"
                accent="Scalable Software"
                text={`Production-grade safeguards designed for the ${sector.toLowerCase()} sector.`}
                columns={[
                    { title: 'Security', points: industry.security, Icon: Lock },
                    { title: 'Compliance', points: industry.compliance, Icon: ShieldCheck },
                    { title: 'Scalability', points: industry.scalability, Icon: Layers },
                ]}
            />

            {/* 7. Process */}
            <ProcessRow
                eyebrow="Our Process"
                lead="How We Build"
                accent={`${industry.name} Software`}
                text="A proven, transparent process from first call to launch and beyond."
                steps={industry.process.map((p, i) => ({ title: p.title, description: p.description, Icon: STEP_ICONS[i % STEP_ICONS.length] }))}
            />

            {/* 8. Related services, solutions & technologies */}
            {related.length > 0 && (
                <KeyAreas
                    eyebrow="Explore More"
                    lead="Related"
                    accent="Services & Solutions"
                    text={`Services, solutions and technologies we use for ${sector.toLowerCase()} projects.`}
                    items={related}
                />
            )}

            {/* 9. Related industries */}
            {relatedIndustries.length > 0 && (
                <KeyAreas
                    eyebrow={sector}
                    lead="More"
                    accent={`${sector} Solutions`}
                    text={`Explore other software we build for the ${sector.toLowerCase()} sector.`}
                    items={relatedIndustries}
                />
            )}

            {/* 10. FAQ + CTA */}
            <FaqCta
                faq={{ eyebrow: 'FAQ', lead: industry.keyword, accent: 'FAQs', faqs: industry.faqs }}
                cta={{
                    eyebrow: 'Start Your Project',
                    lead: `Let's Build Your`,
                    accent: `${industry.name} Software`,
                    text: `Partner with TheWebHero to build secure, scalable and future-ready ${industry.name.toLowerCase()} software for your business.`,
                    checklist: ['Free Consultation', 'Industry Experts', 'Full Code Ownership'],
                }}
            />
        </main>
    );
}
