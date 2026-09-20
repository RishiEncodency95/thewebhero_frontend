import React from 'react';
import { Metadata } from 'next';
import { getGlossaryTerms } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import GlossaryList from '../../components/resources/GlossaryList';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Software & Technology Terms Glossary | TheWebHero',
    description: 'A-Z glossary index of software development, web engineering, cloud, and mobile app technology terms.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/glossary',
    },
};

export default function GlossaryPage() {
    const terms = getGlossaryTerms();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Tech Term Glossary' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Software & Technology Glossary
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Definitions of essential tech terms, web frameworks, API concepts, and software development methodologies.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <GlossaryList terms={terms} />
            </section>

            <ResourceCTA />
        </main>
    );
}
