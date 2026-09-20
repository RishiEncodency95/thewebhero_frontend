import React from 'react';
import { Metadata } from 'next';
import { getAllResources } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Industry Insights & Market Tech Trends | TheWebHero',
    description: 'Industry-specific software trends, digital transformation analysis, and IT solutions overview.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/industry-insights',
    },
};

export default function IndustryInsightsPage() {
    const articles = getAllResources().filter(
        (r) => r.categorySlug === 'industry-insights' || r.type === 'blog'
    );

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Blog', href: '/resources/blog' },
                            { label: 'Industry Insights' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Industry Insights
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Analysis of technology trends, security best practices, and enterprise digital transformation across industries.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={articles} />
            </section>

            <ResourceCTA />
        </main>
    );
}
