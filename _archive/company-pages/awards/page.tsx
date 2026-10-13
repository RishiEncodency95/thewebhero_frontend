import React from 'react';
import { Metadata } from 'next';
import { Award as AwardIcon } from 'lucide-react';
import { getAwards } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Awards & Industry Recognition | TheWebHero',
    description: 'Verified industry awards and technical recognition earned by TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/awards',
    },
};

export default function AwardsPage() {
    const awardList = getAwards();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Awards & Recognition"
                subtitle="Verified Engineering Honors & Recognition"
                description="Verified award disclosures and software engineering industry recognition."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Awards' },
                ]}
            />

            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {awardList.length === 0 ? (
                    <div className="py-16 px-6 text-center bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                            <AwardIcon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                            Verified Award Disclosures
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Official industry recognitions and award disclosures will be listed here as verified by awarding organizations.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {awardList.map((a) => (
                            <div key={a.id} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900">{a.name}</h4>
                                <p className="text-xs text-slate-500">{a.organization} • {a.year}</p>
                                <p className="text-xs text-slate-600 mt-2">{a.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <CompanyCTA />
        </main>
    );
}
