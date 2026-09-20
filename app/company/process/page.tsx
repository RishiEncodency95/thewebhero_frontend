import React from 'react';
import { Metadata } from 'next';
import { getProcessSteps } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import ProcessTimeline from '../../components/company/ProcessTimeline';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Our 8-Step Software Development Process | TheWebHero',
    description: 'Explore TheWebHero 8-step agile software development lifecycle from discovery and architecture to QA, deployment, and SLA maintenance.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/process',
    },
};

export default function ProcessPage() {
    const steps = getProcessSteps();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Our Software Engineering Process"
                subtitle="Transparent Agile SDLC • Scoping to SLA Maintenance"
                description="We follow a disciplined 8-step engineering lifecycle designed to ensure predictable delivery milestones, code quality, and production reliability."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Our Process' },
                ]}
            />

            <ProcessTimeline steps={steps} />

            <CompanyCTA title="Ready to Start Your Project Scoping?" />
        </main>
    );
}
