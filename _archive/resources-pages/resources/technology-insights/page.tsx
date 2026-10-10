import React from 'react';
import { Metadata } from 'next';
import { getAllResources } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Technology Insights & Architecture Articles | TheWebHero',
    description: 'Explore deep technical insights, Next.js architecture, Flutter mobile app practices, and web engineering updates.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/technology-insights',
    },
};

export default function TechnologyInsightsPage() {
    const techArticles = getAllResources().filter(
        (r) => r.categorySlug === 'technology-insights' || r.topics.includes('Technology') || r.topics.includes('Next.js')
    );

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Blog', href: '/resources/blog' },
                            { label: 'Technology Insights' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Technology Insights
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Technical articles on software architecture, frontend frameworks, backend APIs, and database engineering.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={techArticles} />
            </section>

            <ResourceCTA />
        </main>
    );
}
