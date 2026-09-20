import React from 'react';
import { Metadata } from 'next';
import { getTeamMembers } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import TeamGrid from '../../components/company/TeamGrid';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Our Engineering Team | TheWebHero',
    description: 'Meet the software engineers, architects, and technical leaders building applications at TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/team',
    },
};

export default function TeamListingPage() {
    const team = getTeamMembers();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Our Engineering Team"
                subtitle="Software Architects, Developers & UI/UX Specialists"
                description="Meet the technical leadership driving software craftsmanship, code quality, and application development at TheWebHero."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Our Team' },
                ]}
            />

            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <TeamGrid members={team} />
            </section>

            <CompanyCTA />
        </main>
    );
}
