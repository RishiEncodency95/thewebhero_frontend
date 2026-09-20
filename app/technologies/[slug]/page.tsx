import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTechnologyBySlug, getAllTechSlugs } from '../../lib/technologies';
import TechnologyHero from '../../components/technologies/TechnologyHero';
import TechnologyOverview from '../../components/technologies/TechnologyOverview';
import TechnologyCapabilities from '../../components/technologies/TechnologyCapabilities';
import TechnologyUseCases from '../../components/technologies/TechnologyUseCases';
import TechnologyEcosystem from '../../components/technologies/TechnologyEcosystem';
import TechnologyIntegrations from '../../components/technologies/TechnologyIntegrations';
import TechnologyProcess from '../../components/technologies/TechnologyProcess';
import TechnologyFAQ from '../../components/technologies/TechnologyFAQ';
import RelatedTechnologies from '../../components/technologies/RelatedTechnologies';
import RelatedServices from '../../components/services/RelatedServices';
import RelatedSolutions from '../../components/solutions/RelatedSolutions';
import TechnologyCTA from '../../components/technologies/TechnologyCTA';

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

export default async function TechnologyDetailPage({ params }: TechnologyPageProps) {
    const { slug } = await params;
    const tech = getTechnologyBySlug(slug);

    if (!tech) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Technology Hero */}
            <TechnologyHero
                name={tech.name}
                categoryName={tech.category}
                categorySlug={tech.categorySlug}
                shortDescription={tech.shortDescription}
                description={tech.description}
            />

            {/* 2. Technology Overview */}
            <TechnologyOverview
                name={tech.name}
                overview={tech.overview}
            />

            {/* 3. Use Cases (What it is used for) */}
            <TechnologyUseCases
                useCases={tech.useCases}
                name={tech.name}
            />

            {/* 4. Core Capabilities */}
            <TechnologyCapabilities
                capabilities={tech.capabilities}
                name={tech.name}
            />

            {/* 5. Ecosystem, Security & Scalability */}
            <TechnologyEcosystem
                ecosystem={tech.ecosystem}
                security={tech.security}
                scalability={tech.scalability}
                name={tech.name}
            />

            {/* 6. Integrations */}
            <TechnologyIntegrations
                integrations={tech.integrations}
                name={tech.name}
            />

            {/* 7. Development Process */}
            <TechnologyProcess
                process={tech.process}
                name={tech.name}
            />

            {/* 8. Related Services */}
            <RelatedServices
                relatedServices={tech.relatedServices}
            />

            {/* 9. Related Solutions */}
            <RelatedSolutions
                relatedSolutions={tech.relatedSolutions}
            />

            {/* 10. Related Technologies */}
            <RelatedTechnologies
                relatedTechnologies={tech.relatedTechnologies}
            />

            {/* 11. FAQ */}
            <TechnologyFAQ
                faqs={tech.faqs}
                name={tech.name}
            />

            {/* 12. Final CTA */}
            <TechnologyCTA name={tech.name} />
        </main>
    );
}
