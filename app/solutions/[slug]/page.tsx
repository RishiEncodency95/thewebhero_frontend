import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSolutionBySlug, getAllSolutionSlugs } from '../../lib/solutions';
import SolutionHero from '../../components/solutions/SolutionHero';
import SolutionChallenges from '../../components/solutions/SolutionChallenges';
import SolutionCapabilities from '../../components/solutions/SolutionCapabilities';
import SolutionFeatures from '../../components/solutions/SolutionFeatures';
import SolutionAudience from '../../components/solutions/SolutionAudience';
import SolutionTechnology from '../../components/solutions/SolutionTechnology';
import SolutionIntegrations from '../../components/solutions/SolutionIntegrations';
import SolutionProcess from '../../components/solutions/SolutionProcess';
import SolutionBenefits from '../../components/solutions/SolutionBenefits';
import SolutionFAQ from '../../components/solutions/SolutionFAQ';
import RelatedSolutions from '../../components/solutions/RelatedSolutions';
import RelatedServices from '../../components/services/RelatedServices';
import SolutionCTA from '../../components/solutions/SolutionCTA';

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

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
    const { slug } = await params;
    const solution = getSolutionBySlug(slug);

    if (!solution) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Solution Hero */}
            <SolutionHero
                title={solution.title}
                categoryName={solution.category}
                categorySlug={solution.categorySlug}
                shortDescription={solution.shortDescription}
                description={solution.description}
            />

            {/* 2. Business Challenges Solved */}
            <SolutionChallenges
                challenges={solution.challenges}
                title={solution.title}
            />

            {/* 3. Core Capabilities */}
            <SolutionCapabilities
                capabilities={solution.capabilities}
                title={solution.title}
            />

            {/* 4. Target Audience (Who this solution is for) */}
            <SolutionAudience
                audience={solution.audience}
                title={solution.title}
            />

            {/* 5. Key Functional Features & Modules */}
            <SolutionFeatures
                features={solution.features}
                title={solution.title}
            />

            {/* 6. Technology & Architecture */}
            <SolutionTechnology
                technologies={solution.technologies}
                security={solution.security}
                scalability={solution.scalability}
                title={solution.title}
            />

            {/* 7. Connected Integrations */}
            <SolutionIntegrations
                integrations={solution.integrations}
                title={solution.title}
            />

            {/* 8. Implementation Process */}
            <SolutionProcess
                process={solution.process}
                title={solution.title}
            />

            {/* 9. Benefits & Expected Business Outcomes */}
            <SolutionBenefits
                benefits={solution.benefits}
                title={solution.title}
            />

            {/* 10. Frequently Asked Questions */}
            <SolutionFAQ
                faqs={solution.faqs}
                title={solution.title}
            />

            {/* 11. Related Solutions */}
            <RelatedSolutions
                relatedSolutions={solution.relatedSolutions}
            />

            {/* 12. Related Technical Services */}
            <RelatedServices
                relatedServices={solution.relatedServices}
            />

            {/* 13. Final CTA */}
            <SolutionCTA title={solution.title} />
        </main>
    );
}
