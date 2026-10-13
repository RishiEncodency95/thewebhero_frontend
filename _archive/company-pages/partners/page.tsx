import React from 'react';
import { Metadata } from 'next';
import { HeartHandshake } from 'lucide-react';
import { getPartners } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Technology & Cloud Partners | TheWebHero',
    description: 'Approved technology ecosystem and cloud platform partners for TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/partners',
    },
};

export default function PartnersPage() {
    const partnerList = getPartners();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Technology & Business Partners"
                subtitle="Approved Platform Ecosystem Relationships"
                description="Explore verified technology partner disclosures and software ecosystem integrations."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Partners' },
                ]}
            />

            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {partnerList.length === 0 ? (
                    <div className="py-16 px-6 text-center bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                            <HeartHandshake className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                            Partner Program Disclosures
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Official technology partnership disclaimers and cloud integration records are updated in accordance with formal partner agreements.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {partnerList.map((p) => (
                            <div key={p.id} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900">{p.name}</h4>
                                <p className="text-xs text-slate-600 mt-1">{p.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <CompanyCTA />
        </main>
    );
}
