import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Building2, Check, HeartHandshake, Route, Sparkles, Trophy, Users, Briefcase } from 'lucide-react';
import { getCompanyInfo, getTeamMembers, getProcessSteps, getJobPositions } from '../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../lib/cms/seo';
import CompanyHero from '../components/company/CompanyHero';
import CompanySectionHeader from '../components/company/CompanySectionHeader';
import CompanyValues from '../components/company/CompanyValues';
import ProcessTimeline from '../components/company/ProcessTimeline';
import TeamCard from '../components/company/TeamCard';
import CareerCard from '../components/company/CareerCard';
import CompanyCTA from '../components/company/CompanyCTA';
import heroArt from '../assets/home/service/web-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company', {
        title: 'Company | About TheWebHero, Team & Engineering Process',
        description: 'Learn about TheWebHero, our software engineering team, delivery process, core values, culture, and career opportunities.',
    });
}

const EXPLORE = [
    { title: 'About Us', text: 'Our story, mission and vision.', href: '/company/about', Icon: Building2 },
    { title: 'Why Choose Us', text: 'What sets our engineering apart.', href: '/company/why-us', Icon: Trophy },
    { title: 'Our Process', text: 'How we take ideas to launch.', href: '/company/process', Icon: Route },
    { title: 'Culture', text: 'The principles we build by.', href: '/company/culture', Icon: HeartHandshake },
    { title: 'Our Team', text: 'The people behind the work.', href: '/company/team', Icon: Users },
    { title: 'Careers', text: 'Open roles — come build with us.', href: '/company/careers', Icon: Briefcase },
];

export default async function CompanyHubPage() {
    const company = (await getCompanyInfo());
    const team = (await getTeamMembers());
    const allSteps = await getProcessSteps();
    const steps = allSteps.slice(0, 4);
    const jobs = (await getJobPositions());

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company" />
            <CompanyHero
                eyebrow="About the company"
                title="We engineer software that"
                highlight="moves businesses forward"
                description="TheWebHero builds modern web applications, cross-platform mobile apps and custom business platforms — designed carefully, engineered properly and delivered on time."
                breadcrumbItems={[{ label: 'Company' }]}
                image={heroArt}
                imageAlt="Developer workspace building a web application"
            />

            {/* Intro */}
            <section className="w-full px-4 pt-12 lg:px-10 lg:pt-16">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8 lg:col-span-7">
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">Who we are</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                            A focused team for{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                serious products
                            </span>
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">{company.story}</p>

                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 p-5 ring-1 ring-purple-100">
                                <p className="text-xs font-bold uppercase tracking-wider text-pink-600">Mission</p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{company.mission}</p>
                            </div>
                            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5 ring-1 ring-blue-100">
                                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">Vision</p>
                                <p className="mt-2 text-[14px] leading-relaxed text-slate-700">{company.vision}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-6 text-white sm:p-8 lg:col-span-5">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-pink-500/40 to-blue-500/40 blur-3xl" aria-hidden="true" />
                        <div className="relative">
                            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
                                <Sparkles className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 text-xl font-semibold">What we build</h3>
                            <ul className="mt-4 space-y-3">
                                {company.capabilities.map((cap) => (
                                    <li key={cap} className="flex items-start gap-3 text-[14px] text-slate-200">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore */}
            <section className="w-full px-4 pt-12 lg:px-10 lg:pt-16">
                <CompanySectionHeader eyebrow="Explore" title="Get to know" highlight="TheWebHero" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {EXPLORE.map(({ title, text, href, Icon }) => (
                        <Link
                            key={href}
                            href={href}
                            className="group flex items-center gap-4 rounded-[20px] border border-slate-200/80 bg-white p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-[0_16px_36px_-16px_rgba(35,75,125,0.25)]"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-purple-600 ring-1 ring-slate-200/80 transition-colors group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white group-hover:ring-transparent">
                                <Icon className="h-5 w-5" />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-[15px] font-semibold text-slate-900">{title}</span>
                                <span className="block text-[13px] text-slate-500">{text}</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-600" />
                        </Link>
                    ))}
                </div>
            </section>

            <CompanyValues values={company.values} />

            {/* Process preview */}
            <section className="w-full px-4 pb-12 lg:px-10 lg:pb-16">
                <CompanySectionHeader
                    eyebrow="How we work"
                    title="A clear process,"
                    highlight="start to finish"
                    description={`The first ${steps.length} of our ${allSteps.length} delivery steps — every project follows the same transparent path.`}
                    action={{ label: 'Full process', href: '/company/process' }}
                />
                <ProcessTimeline steps={steps} />
            </section>

            {/* People */}
            <section className="w-full px-4 pb-12 lg:px-10 lg:pb-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <CompanySectionHeader eyebrow="Leadership" title="Meet" highlight="the team" action={{ label: 'All team', href: '/company/team' }} />
                        <div className="grid grid-cols-1 gap-5">
                            {team.slice(0, 1).map((m) => (
                                <TeamCard key={m.slug} member={m} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <CompanySectionHeader eyebrow="Careers" title="Open" highlight="positions" action={{ label: 'All roles', href: '/company/careers' }} />
                        <div className="grid grid-cols-1 gap-5">
                            {jobs.slice(0, 2).map((job) => (
                                <CareerCard key={job.slug} job={job} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CompanyCTA />
        </main>
    );
}
