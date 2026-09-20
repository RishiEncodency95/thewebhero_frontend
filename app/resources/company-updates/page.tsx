import React from 'react';
import { Metadata } from 'next';
import { getAllResources } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Company Updates & Engineering News | TheWebHero',
    description: 'Stay informed with news, company announcements, service expansions, and tech developments at TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/company-updates',
    },
};

export default function CompanyUpdatesPage() {
    const articles = getAllResources().filter(
        (r) => r.categorySlug === 'company-updates' || r.type === 'blog'
    );

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Blog', href: '/resources/blog' },
                            { label: 'Company Updates' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Company Updates
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        News, company milestones, software releases, and engineering highlights from TheWebHero.
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
