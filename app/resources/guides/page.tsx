import React from 'react';
import { Metadata } from 'next';
import { getResourcesByType } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Software Development & Buyer Guides | TheWebHero',
    description: 'In-depth software buyer guides, technology evaluation frameworks, and engineering blueprints.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/guides',
    },
};

export default function GuidesListingPage() {
    const guides = getResourcesByType('guide');

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Guides' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Developer & Buyer Guides
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Comprehensive guides designed to help tech leaders and business executives evaluate frameworks, scope projects, and build scalable software systems.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={guides} />
            </section>

            <ResourceCTA />
        </main>
    );
}
