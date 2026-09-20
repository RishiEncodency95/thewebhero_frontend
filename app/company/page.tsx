import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, Users, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { getCompanyInfo, getTeamMembers, getProcessSteps, getJobPositions } from '../lib/company';
import CompanyHero from '../components/company/CompanyHero';
import CompanyValues from '../components/company/CompanyValues';
import ProcessTimeline from '../components/company/ProcessTimeline';
import TeamGrid from '../components/company/TeamGrid';
import CareerGrid from '../components/company/CareerGrid';
import CompanyCTA from '../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Company Hub | About TheWebHero, Team & Engineering Process',
    description: 'Learn about TheWebHero, our software engineering team, agile 8-step process, core values, culture, and career opportunities.',
    alternates: {
        canonical: 'https://thewebhero.ai/company',
    },
};

export default function CompanyHubPage() {
    const company = getCompanyInfo();
    const team = getTeamMembers();
    const process = getProcessSteps().slice(0, 4); // Preview first 4 steps
    const jobs = getJobPositions();

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Hero */}
            <CompanyHero />

            {/* Overview & Mission */}
            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block">
                                ABOUT THEWEBHERO
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                                Reliable Software Development & Engineering Services
                            </h2>
                            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                                {company.story}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
                                    <h3 className="text-sm font-bold text-slate-900 mb-1">Our Mission</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{company.mission}</p>
                                </div>
                                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
                                    <h3 className="text-sm font-bold text-slate-900 mb-1">Our Vision</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{company.vision}</p>
                                </div>
                            </div>
                        </div>

                        {/* Capabilities Card */}
                        <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
                            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Core Capabilities</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                Technical Engineering Focus
                            </h3>
                            <ul className="space-y-2.5 pt-2">
                                {company.capabilities.map((cap, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                        <span>{cap}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4 border-t border-slate-800">
                                <Link
                                    href="/company/about"
                                    className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300"
                                >
                                    <span>Learn More About Us</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <CompanyValues values={company.values} />

            {/* Team Section Preview */}
            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                                OUR PEOPLE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Engineering Leadership
                            </h2>
                        </div>
                        <Link
                            href="/company/team"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1769FF] hover:underline"
                        >
                            <span>View Full Team</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <TeamGrid members={team} />
                </div>
            </section>

            {/* Open Careers Section */}
            <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                                JOIN OUR TEAM
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Open Positions
                            </h2>
                        </div>
                        <Link
                            href="/company/careers"
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1769FF] hover:underline"
                        >
                            <span>Explore All Careers</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <CareerGrid jobs={jobs} />
                </div>
            </section>

            {/* Conversion CTA */}
            <CompanyCTA />
        </main>
    );
}
