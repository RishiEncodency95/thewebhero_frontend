import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { User, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { getTeamMemberBySlug, getTeamMembers } from '../../../lib/company';
import CompanyBreadcrumb from '../../../components/company/CompanyBreadcrumb';
import CompanyCTA from '../../../components/company/CompanyCTA';

interface TeamDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const team = getTeamMembers();
    return team.map((m) => ({
        slug: m.slug,
    }));
}

export async function generateMetadata({ params }: TeamDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const member = getTeamMemberBySlug(slug);

    if (!member) {
        return {
            title: 'Team Profile Not Found | TheWebHero',
            description: 'The requested team member profile could not be found.',
        };
    }

    return {
        title: `${member.name} - ${member.role} | TheWebHero Team`,
        description: member.bio,
        openGraph: {
            title: `${member.name} - ${member.role} | TheWebHero`,
            description: member.bio,
            url: `https://thewebhero.ai/company/team/${member.slug}`,
            siteName: 'TheWebHero',
        },
        alternates: {
            canonical: `https://thewebhero.ai/company/team/${member.slug}`,
        },
    };
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
    const { slug } = await params;
    const member = getTeamMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CompanyBreadcrumb
                        items={[
                            { label: 'Company', href: '/company' },
                            { label: 'Team', href: '/company/team' },
                            { label: member.name },
                        ]}
                    />

                    <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-slate-800 border-2 border-slate-700 shrink-0">
                            <Image
                                src={member.photo}
                                alt={member.name}
                                fill
                                className="object-contain p-3 bg-slate-900"
                            />
                        </div>

                        <div className="space-y-2 text-center sm:text-left">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                                {member.name}
                            </h1>
                            <p className="text-lg font-bold text-blue-400">
                                {member.role}
                            </p>
                            {member.socialLinks?.linkedin && (
                                <a
                                    href={member.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white pt-1"
                                >
                                    <span>LinkedIn Profile</span>
                                    <ArrowRight className="w-3 h-3" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-900">
                        About {member.name}
                    </h2>
                    <p className="text-slate-700 text-base leading-relaxed">
                        {member.bio}
                    </p>
                </div>

                {member.expertise && member.expertise.length > 0 && (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#1769FF]" />
                            <span>Technical Expertise</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {member.expertise.map((exp) => (
                                <span key={exp} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                                    {exp}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {member.responsibilities && member.responsibilities.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="text-lg font-bold text-slate-900">
                            Key Responsibilities
                        </h3>
                        <ul className="space-y-2">
                            {member.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <CompanyCTA />
        </main>
    );
}
