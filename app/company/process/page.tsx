import React from 'react';
import { Metadata } from 'next';
import { getProcessSteps } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import ProcessTimeline from '../../components/company/ProcessTimeline';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/cloud-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/process', {
        title: 'Our Software Development Process | TheWebHero',
        description: 'A transparent 8-step software engineering process — from discovery and design to development, QA, deployment and ongoing support.',
    });
}

export default async function ProcessPage() {
    const steps = (await getProcessSteps());

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/process" />
            <CompanyHero
                eyebrow="Our process"
                title="From first idea to"
                highlight="live product"
                description={`A disciplined ${steps.length}-step lifecycle built for predictable milestones, high code quality and reliable production releases.`}
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'Our Process' }]}
                image={heroArt}
                imageAlt="Cloud infrastructure and deployment dashboard"
            />

            <section className="w-full px-4 py-12 lg:px-10 lg:py-16">
                <CompanySectionHeader
                    eyebrow="Software development lifecycle"
                    title={`Our ${steps.length}-step`}
                    highlight="engineering process"
                    description="Each step has clear activities and a concrete deliverable, so you always know what's happening and what comes next."
                />
                <ProcessTimeline steps={steps} />
            </section>

            <CompanyCTA title="Ready to start your project scoping?" />
        </main>
    );
}
