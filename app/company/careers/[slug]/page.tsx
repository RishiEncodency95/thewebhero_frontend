import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Building2, Check, Clock, MapPin, Send, Sparkles } from 'lucide-react';
import { getJobPositionBySlug, getJobPositions, getSiteSettings } from '../../../lib/cms/content';
import { buildMetadata, JsonLd } from '../../../lib/cms/seo';
import { breadcrumbSchema } from '../../../lib/cms/schema';
import { SITE_URL } from '../../../lib/site';
import CompanyBreadcrumb from '../../../components/company/CompanyBreadcrumb';
import CompanyCTA from '../../../components/company/CompanyCTA';

function CheckList({ items, tone = 'from-pink-500 to-purple-600' }: { items: string[]; tone?: string }) {
    return (
        <ul className="mt-4 space-y-3">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
                    <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white`}>
                        <Check className="h-3 w-3" />
                    </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

interface JobDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const jobs = await getJobPositions();
    return jobs.map((j) => ({
        slug: j.slug,
    }));
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const job = await getJobPositionBySlug(slug);
    if (!job) return { title: 'Job not found', robots: { index: false } };
    return buildMetadata({
        path: `/company/careers/${job.slug}`,
        seo: job.seo,
        title: `${job.title} | Careers`,
        description: job.description,
    });
}

const EMPLOYMENT_TYPE: Record<string, string> = {
    'Full-time': 'FULL_TIME',
    'Part-time': 'PART_TIME',
    Contract: 'CONTRACTOR',
    Internship: 'INTERN',
    Remote: 'FULL_TIME',
};

export default async function JobDetailPage({ params }: JobDetailPageProps) {
    const { slug } = await params;
    const job = await getJobPositionBySlug(slug);

    if (!job) {
        notFound();
    }

    const settings = await getSiteSettings();
    const applyEmail = (job as { applyEmail?: string }).applyEmail || settings.contact.email;
    const applyHref = `mailto:${applyEmail}?subject=${encodeURIComponent(`Application for ${job.title}`)}`;
    const isRemote = /remote/i.test(job.location) || job.employmentType === 'Remote';
    // Google for Jobs: https://developers.google.com/search/docs/appearance/structured-data/job-posting
    const jobPosting = job.status === 'closed' ? null : {
        '@context': 'https://schema.org',
        '@type': 'JobPosting',
        title: job.title,
        description: [job.description, ...job.responsibilities.map((r) => `• ${r}`)].join('\n'),
        datePosted: job.publishedAt || undefined,
        employmentType: EMPLOYMENT_TYPE[job.employmentType] ?? 'FULL_TIME',
        hiringOrganization: { '@type': 'Organization', name: settings.name, sameAs: SITE_URL },
        ...(isRemote
            ? { jobLocationType: 'TELECOMMUTE', applicantLocationRequirements: { '@type': 'Country', name: 'India' } }
            : {
                  jobLocation: {
                      '@type': 'Place',
                      address: {
                          '@type': 'PostalAddress',
                          addressLocality: job.location,
                          addressRegion: settings.contact.address.region,
                          addressCountry: settings.contact.address.country,
                      },
                  },
              }),
        directApply: false,
        url: `${SITE_URL}/company/careers/${job.slug}`,
    };
    const facts = [
        { label: 'Department', value: job.department, Icon: Building2 },
        { label: 'Location', value: job.location, Icon: MapPin },
        { label: 'Type', value: job.employmentType, Icon: Briefcase },
        { label: 'Experience', value: job.experience, Icon: Clock },
    ];
    const card = 'rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8';

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <JsonLd data={breadcrumbSchema([{ name: 'Company', path: '/company' }, { name: 'Careers', path: '/company/careers' }, { name: job.title }])} />
            <JsonLd data={jobPosting} />
            <JsonLd data={job.seo?.structuredData} />
            {/* Header */}
            <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff]">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative w-full px-4 pb-10 pt-6 lg:px-10">
                    <CompanyBreadcrumb
                        items={[
                            { label: 'Company', href: '/company' },
                            { label: 'Careers', href: '/company/careers' },
                            { label: job.title },
                        ]}
                    />

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                                <Sparkles className="h-3.5 w-3.5" />
                                We&apos;re hiring
                            </span>
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
                                {job.employmentType}
                            </span>
                        </div>

                        <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">{job.title}</h1>

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin className="h-4 w-4 text-purple-500" />
                                {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-purple-500" />
                                {job.experience} experience
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Building2 className="h-4 w-4 text-purple-500" />
                                {job.department}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <div className="w-full px-4 py-10 lg:px-10 lg:py-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="space-y-6 lg:col-span-8">
                        <div className={card}>
                            <p className="text-xs font-bold uppercase tracking-wider text-purple-600">About the role</p>
                            <p className="mt-3 text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">{job.description}</p>
                        </div>

                        {job.responsibilities && job.responsibilities.length > 0 && (
                            <div className={card}>
                                <h2 className="text-xl font-semibold tracking-tight text-slate-900">What you&apos;ll do</h2>
                                <CheckList items={job.responsibilities} />
                            </div>
                        )}

                        {job.requiredSkills && job.requiredSkills.length > 0 && (
                            <div className={card}>
                                <h2 className="text-xl font-semibold tracking-tight text-slate-900">What we&apos;re looking for</h2>
                                <CheckList items={job.requiredSkills} tone="from-blue-500 to-indigo-600" />
                            </div>
                        )}

                        {job.niceToHave && job.niceToHave.length > 0 && (
                            <div className={card}>
                                <h2 className="text-xl font-semibold tracking-tight text-slate-900">Nice to have</h2>
                                <CheckList items={job.niceToHave} tone="from-emerald-500 to-teal-600" />
                            </div>
                        )}
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="space-y-5 lg:sticky lg:top-24">
                            <div className={card}>
                                <dl className="grid grid-cols-2 gap-4">
                                    {facts.map(({ label, value, Icon }) => (
                                        <div key={label} className="rounded-2xl bg-slate-50 p-3.5 ring-1 ring-slate-200/70">
                                            <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                                <Icon className="h-3.5 w-3.5" />
                                                {label}
                                            </dt>
                                            <dd className="mt-1 text-[14px] font-semibold text-slate-900">{value}</dd>
                                        </div>
                                    ))}
                                </dl>

                                {job.benefits && job.benefits.length > 0 && (
                                    <div className="mt-6">
                                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">Perks</p>
                                        <ul className="mt-3 space-y-2">
                                            {job.benefits.map((b) => (
                                                <li key={b} className="flex items-center gap-2 text-[14px] text-slate-700">
                                                    <Check className="h-4 w-4 text-emerald-500" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <a
                                    href={applyHref}
                                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(168,85,247,0.4)] transition-transform hover:scale-[1.02]"
                                >
                                    <Send className="h-4 w-4" />
                                    Apply for this role
                                </a>
                                <p className="mt-3 text-center text-[12.5px] text-slate-500">Send your resume and portfolio links by email.</p>
                            </div>

                            <Link
                                href="/company/careers"
                                className="inline-flex items-center gap-2 px-1 text-sm font-semibold text-slate-600 transition-colors hover:text-purple-700"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                All open positions
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            <CompanyCTA title="Not quite the right fit?" description="Tell us about yourself — we're always happy to hear from great engineers." />
        </main>
    );
}
