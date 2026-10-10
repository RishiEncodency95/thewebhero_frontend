import React from 'react';
import { Metadata } from 'next';
import { getFAQs } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import FAQAccordion from '../../components/resources/FAQAccordion';
import ResourceCTA from '../../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Knowledge Base & FAQs | TheWebHero',
    description: 'Frequently asked questions regarding web development services, tech stacks, project timelines, and IT software practices.',
    alternates: {
        canonical: 'https://thewebhero.ai/resources/faqs',
    },
};

export default function FAQsPage() {
    const allFaqs = getFAQs();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'FAQs Knowledge Base' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Find answers to common questions about custom software development, mobile application builds, timelines, and technology stacks.
                    </p>
                </div>
            </section>

            <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <FAQAccordion faqs={allFaqs} />
            </section>

            <ResourceCTA title="Have More Questions? Contact Our Engineering Team" />
        </main>
    );
}
