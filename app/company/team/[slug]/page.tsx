import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { getTeamMemberBySlug, getTeamMembers } from '../../../lib/cms/content';
import { buildMetadata, JsonLd } from '../../../lib/cms/seo';
import { breadcrumbSchema } from '../../../lib/cms/schema';
import CompanyBreadcrumb from '../../../components/company/CompanyBreadcrumb';
import CompanyCTA from '../../../components/company/CompanyCTA';
import { isProfileUrl } from '../../../components/company/TeamCard';

interface TeamDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const team = await getTeamMembers();
    return team.map((m) => ({
        slug: m.slug,
    }));
}

export async function generateMetadata({ params }: TeamDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const member = await getTeamMemberBySlug(slug);
    if (!member) return { title: 'Team profile not found', robots: { index: false } };
    return buildMetadata({
        path: `/company/team/${member.slug}`,
        seo: member.seo,
        title: `${member.name} — ${member.role}`,
        description: member.bio,
        image: member.photo,
        type: 'profile',
    });
}

export default async function TeamDetailPage({ params }: TeamDetailPageProps) {
    const { slug } = await params;
    const member = await getTeamMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    const socials = [
        { url: member.socialLinks?.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
        { url: member.socialLinks?.github, label: 'GitHub', Icon: FaGithub },
    ].filter((s) => isProfileUrl(s.url));

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <JsonLd
                data={[
                    breadcrumbSchema([{ name: 'Company', path: '/company' }, { name: 'Team', path: '/company/team' }, { name: member.name }]),
                    { '@context': 'https://schema.org', '@type': 'Person', name: member.name, jobTitle: member.role, description: member.bio, worksFor: { '@type': 'Organization', name: 'TheWebHero' } },
                ]}
            />
            <JsonLd data={member.seo?.structuredData} />
            {/* Profile header */}
            <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff]">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative w-full px-4 pb-10 pt-6 lg:px-10">
                    <CompanyBreadcrumb
                        items={[
                            { label: 'Company', href: '/company' },
                            { label: 'Team', href: '/company/team' },
                            { label: member.name },
                        ]}
                    />

                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[28px] border-4 border-white bg-white shadow-[0_20px_40px_-15px_rgba(30,41,99,0.45)]">
                            <Image src={member.photo} alt={member.name} fill sizes="128px" className="object-contain p-3" priority />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wider text-purple-600">Team profile</p>
                            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{member.name}</h1>
                            <p className="mt-2 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-lg font-semibold text-transparent">
                                {member.role}
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-transform hover:scale-[1.02]"
                                >
                                    <Mail className="h-4 w-4" />
                                    Get in touch
                                </Link>
                                {socials.map(({ url, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${member.name} on ${label}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-900 hover:text-white"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <div className="w-full px-4 py-10 lg:px-10 lg:py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="space-y-6 lg:col-span-8">
                        <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
                            <p className="text-xs font-bold uppercase tracking-wider text-purple-600">About</p>
                            <p className="mt-3 text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">{member.bio}</p>
                        </div>

                        {member.responsibilities && member.responsibilities.length > 0 && (
                            <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-wider text-purple-600">Responsibilities</p>
                                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {member.responsibilities.map((resp) => (
                                        <li key={resp} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-[14.5px] font-medium text-slate-700 ring-1 ring-slate-200/70">
                                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                                                <Check className="h-3 w-3" />
                                            </span>
                                            {resp}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <aside className="space-y-6 lg:col-span-4">
                        {member.expertise && member.expertise.length > 0 && (
                            <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                                <p className="text-xs font-bold uppercase tracking-wider text-purple-600">Expertise</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {member.expertise.map((exp) => (
                                        <span key={exp} className="rounded-full bg-slate-50 px-3 py-1.5 text-[13px] font-semibold text-slate-700 ring-1 ring-slate-200/80">
                                            {exp}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <Link
                            href="/company/team"
                            className="group flex items-center justify-between rounded-[22px] border border-slate-200/80 bg-white p-5 text-sm font-semibold text-slate-800 transition-colors hover:border-purple-200 hover:text-purple-700"
                        >
                            Back to the team
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </aside>
                </div>
            </div>

            <CompanyCTA />
        </main>
    );
}
