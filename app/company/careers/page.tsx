import React from 'react';
import { Metadata } from 'next';
import { getJobPositions } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CareerGrid from '../../components/company/CareerGrid';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Careers & Open Positions | TheWebHero',
    description: 'Explore engineering career opportunities, remote developer roles, and open job positions at TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/careers',
    },
};

export default function CareersListingPage() {
    const jobs = getJobPositions();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Careers at TheWebHero"
                subtitle="Build High-Performance Software Applications With Us"
                description="Explore engineering job openings, remote work opportunities, and software developer roles at TheWebHero."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Careers' },
                ]}
            />

            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        CURRENT OPPORTUNITIES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Open Positions
                    </h2>
                </div>

                <CareerGrid jobs={jobs} />
            </section>

            <CompanyCTA title="Don't See a Matching Role? Send Your Resume" />
        </main>
    );
}
