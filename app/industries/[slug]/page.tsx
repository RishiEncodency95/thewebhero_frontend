import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryBySlug, getAllIndustrySlugs } from '../../lib/industries';
import IndustryHero from '../../components/industries/IndustryHero';
import IndustryOverview from '../../components/industries/IndustryOverview';
import IndustryChallenges from '../../components/industries/IndustryChallenges';
import IndustryCapabilities from '../../components/industries/IndustryCapabilities';
import IndustryFeatures from '../../components/industries/IndustryFeatures';
import IndustryIntegrations from '../../components/industries/IndustryIntegrations';
import IndustryProcess from '../../components/industries/IndustryProcess';
import IndustryFAQ from '../../components/industries/IndustryFAQ';
import RelatedIndustries from '../../components/industries/RelatedIndustries';
import RelatedServices from '../../components/services/RelatedServices';
import RelatedSolutions from '../../components/solutions/RelatedSolutions';
import RelatedTechnologies from '../../components/technologies/RelatedTechnologies';
import IndustryCTA from '../../components/industries/IndustryCTA';

type IndustryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = getAllIndustrySlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        return {
            title: 'Industry Not Found | TheWebHero',
        };
    }

    const canonicalUrl = `https://thewebhero.in/industries/${industry.slug}`;

    return {
        title: industry.seoTitle,
        description: industry.seoDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: industry.seoTitle,
            description: industry.seoDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: industry.ogImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: industry.name,
                },
            ],
        },
    };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Industry Hero */}
            <IndustryHero
                name={industry.name}
                categoryName={industry.category}
                categorySlug={industry.categorySlug}
                shortDescription={industry.shortDescription}
                description={industry.description}
            />

            {/* 2. Industry Overview */}
            <IndustryOverview
                name={industry.name}
                overview={industry.overview}
            />

            {/* 3. Industry Challenges & Technology Needs */}
            <IndustryChallenges
                challenges={industry.challenges}
                name={industry.name}
            />

            {/* 4. Core Capabilities */}
            <IndustryCapabilities
                capabilities={industry.capabilities}
                name={industry.name}
            />

            {/* 5. Key Functional Modules & Features */}
            <IndustryFeatures
                features={industry.features}
                name={industry.name}
            />

            {/* 6. Integrations, Security & Compliance */}
            <IndustryIntegrations
                integrations={industry.integrations}
                security={industry.security}
                compliance={industry.compliance}
                name={industry.name}
            />

            {/* 7. Implementation Roadmap */}
            <IndustryProcess
                process={industry.process}
                name={industry.name}
            />

            {/* 8. Related Services */}
            <RelatedServices
                relatedServices={industry.relatedServices}
            />

            {/* 9. Related Solutions */}
            <RelatedSolutions
                relatedSolutions={industry.relatedSolutions}
            />

            {/* 10. Related Technologies */}
            <RelatedTechnologies
                relatedTechnologies={industry.relatedTechnologies}
            />

            {/* 11. Related Industries */}
            <RelatedIndustries
                relatedIndustries={industry.relatedIndustries}
            />

            {/* 12. FAQ */}
            <IndustryFAQ
                faqs={industry.faqs}
                name={industry.name}
            />

            {/* 13. Final CTA */}
            <IndustryCTA name={industry.name} />
        </main>
    );
}
