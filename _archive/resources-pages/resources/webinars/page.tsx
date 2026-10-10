import React from 'react';
import { Metadata } from 'next';
import { getResourcesByType } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Webinars & Engineering Sessions | TheWebHero',
    description: 'Watch recorded engineering sessions and video walkthroughs on Next.js 15, React, and web performance.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/webinars',
    },
};

export default function WebinarsPage() {
    const webinars = getResourcesByType('webinar');

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Webinars' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Webinars & Technical Workshops
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Recorded engineering sessions and technical workshops covering modern web frameworks and architecture.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={webinars} />
            </section>

            <ResourceCTA />
        </main>
    );
}
