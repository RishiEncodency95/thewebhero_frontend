import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { getCompanyInfo, getTeamMembers } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyValues from '../../components/company/CompanyValues';
import TeamGrid from '../../components/company/TeamGrid';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'About Us | TheWebHero Story, Mission & Engineering Values',
    description: 'Learn about TheWebHero company background, software engineering mission, core values, and development capabilities.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/about',
    },
};

export default function AboutUsPage() {
    const company = getCompanyInfo();
    const team = getTeamMembers();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="About TheWebHero"
                subtitle="Engineering Mission, Values & Technical Strategy"
                description={company.story}
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'About Us' },
                ]}
            />

            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-blue-50/60 border border-blue-100 space-y-4">
                            <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block">
                                OUR MISSION
                            </span>
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Empowering Growth Through Software
                            </h2>
                            <p className="text-slate-700 text-base leading-relaxed">
                                {company.mission}
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-indigo-50/60 border border-indigo-100 space-y-4">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                                OUR VISION
                            </span>
                            <h2 className="text-2xl font-extrabold text-slate-900">
                                Preferred Tech Engineering Partner
                            </h2>
                            <p className="text-slate-700 text-base leading-relaxed">
                                {company.vision}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CompanyValues values={company.values} />

            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                                LEADERSHIP
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Meet Our Team
                            </h2>
                        </div>
                    </div>

                    <TeamGrid members={team} />
                </div>
            </section>

            <CompanyCTA />
        </main>
    );
}
