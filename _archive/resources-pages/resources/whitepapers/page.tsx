import React from 'react';
import { Metadata } from 'next';
import { getResourcesByType } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Technical Whitepapers & eBooks | TheWebHero',
    description: 'Download PDF whitepapers, architectural blueprints, and cross-platform mobile guides.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/whitepapers',
    },
};

export default function WhitepapersPage() {
    const items = [...getResourcesByType('whitepaper'), ...getResourcesByType('ebook')];

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Whitepapers & eBooks' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Whitepapers & Enterprise eBooks
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        In-depth technical publications, architectural blueprints, and developer research guides.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={items} />
            </section>

            <ResourceCTA />
        </main>
    );
}
