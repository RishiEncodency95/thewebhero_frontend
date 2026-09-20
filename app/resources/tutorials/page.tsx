import React from 'react';
import { Metadata } from 'next';
import { getResourcesByType } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Code Tutorials & Setup Guides | TheWebHero',
    description: 'Step-by-step developer tutorials for Next.js, React, Node.js, Express, MongoDB, and Flutter.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/tutorials',
    },
};

export default function TutorialsListingPage() {
    const tutorials = getResourcesByType('tutorial');

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Code Tutorials' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Code Tutorials & Setup Guides
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Step-by-step developer walkthroughs with code snippets, prerequisites, and project structure examples.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={tutorials} />
            </section>

            <ResourceCTA />
        </main>
    );
}
