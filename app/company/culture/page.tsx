import React from 'react';
import { Metadata } from 'next';
import { Award, BookOpen, Users, Smile, CheckCircle2 } from 'lucide-react';
import { getCulturePrinciples } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Company Culture & Engineering Principles | TheWebHero',
    description: 'Learn about working culture, deep work principles, continuous learning, and software craftsmanship at TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/culture',
    },
};

const iconMap: Record<string, React.ElementType> = {
    Award,
    BookOpen,
    Users,
    Smile,
};

export default function CulturePage() {
    const principles = getCulturePrinciples();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Company Culture & Principles"
                subtitle="Software Craftsmanship • Continuous Learning • Focused Collaboration"
                description="Our engineering culture prioritizes deep technical focus, continuous skill development, collaborative code ownership, and work-life balance."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Culture' },
                ]}
            />

            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                            WORKING PRINCIPLES
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                            How We Work Together
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {principles.map((p, index) => {
                            const Icon = (p.iconName && iconMap[p.iconName]) || Users;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1769FF] flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {p.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CompanyCTA title="Interested in Joining Our Engineering Culture?" />
        </main>
    );
}
