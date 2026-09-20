import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock, Briefcase, CheckCircle2, Send, ArrowRight } from 'lucide-react';
import { getJobPositionBySlug, getJobPositions } from '../../../lib/company';
import CompanyBreadcrumb from '../../../components/company/CompanyBreadcrumb';
import CompanyCTA from '../../../components/company/CompanyCTA';

interface JobDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const jobs = getJobPositions();
    return jobs.map((j) => ({
        slug: j.slug,
    }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const job = getJobPositionBySlug(slug);

    if (!job) {
        return {
            title: 'Job Position Not Found | TheWebHero Careers',
            description: 'The requested job position could not be found.',
        };
    }

    return {
        title: `${job.title} | Careers at TheWebHero`,
        description: job.description,
        openGraph: {
            title: `${job.title} | TheWebHero Careers`,
            description: job.description,
            url: `https://thewebhero.ai/company/careers/${job.slug}`,
            siteName: 'TheWebHero',
        },
        alternates: {
            canonical: `https://thewebhero.ai/company/careers/${job.slug}`,
        },
    };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
    const { slug } = await params;
    const job = getJobPositionBySlug(slug);

    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CompanyBreadcrumb
                        items={[
                            { label: 'Company', href: '/company' },
                            { label: 'Careers', href: '/company/careers' },
                            { label: job.title },
                        ]}
                    />

                    <div className="mt-6 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                                {job.department}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                                {job.employmentType}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {job.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-slate-800">
                            <span className="flex items-center gap-1 font-semibold">
                                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                                Location: {job.location}
                            </span>
                            <span className="flex items-center gap-1 font-semibold">
                                <Clock className="w-3.5 h-3.5 text-blue-400" />
                                Experience: {job.experience}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
                {/* Description */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900">
                        Position Summary
                    </h2>
                    <p className="text-slate-700 text-base leading-relaxed">
                        {job.description}
                    </p>
                </div>

                {/* Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                    <div className="space-y-3">
                        <h2 className="text-lg font-bold text-slate-900">
                            Key Responsibilities
                        </h2>
                        <ul className="space-y-2">
                            {job.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Required Skills */}
                {job.requiredSkills && job.requiredSkills.length > 0 && (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                            Required Technical Skills
                        </h2>
                        <ul className="space-y-2">
                            {job.requiredSkills.map((skill, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-[#1769FF] shrink-0 mt-0.5" />
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Apply Button */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h3 className="text-base font-bold text-slate-900">Interested in this Role?</h3>
                        <p className="text-xs text-slate-600">Send your resume and portfolio links directly to our hiring team.</p>
                    </div>

                    <a
                        href={`mailto:contact@thewebhero.ai?subject=Application for ${encodeURIComponent(job.title)}`}
                        className="w-full sm:w-auto px-6 py-3.5 bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        <span>Apply for This Position</span>
                    </a>
                </div>
            </div>

            <CompanyCTA />
        </main>
    );
}
