import React from 'react';
import { Metadata } from 'next';
import { Check, Eye, Target } from 'lucide-react';
import { getCompanyInfo, getTeamMembers } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import CompanyValues from '../../components/company/CompanyValues';
import TeamGrid from '../../components/company/TeamGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/ui-ux-des.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/about', {
        title: 'About Us | TheWebHero Story, Mission & Engineering Values',
        description: 'Learn about TheWebHero company background, software engineering mission, core values, and development capabilities.',
    });
}

export default async function AboutUsPage() {
    const company = (await getCompanyInfo());
    const team = (await getTeamMembers());

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/about" />
            <CompanyHero
                eyebrow="About us"
                title="Built by engineers who"
                highlight="care about the details"
                description="We started TheWebHero to close the gap between ambitious ideas and software that actually performs — fast, reliable and easy to grow."
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'About Us' }]}
                image={heroArt}
                imageAlt="Designer workspace with app screens"
            />

            {/* Story + capabilities */}
            <section className="w-full px-4 pt-12 lg:px-20 lg:pt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-7">
                        <CompanySectionHeader eyebrow="Our story" title="Why" highlight="TheWebHero exists" />
                        <p className="-mt-2 text-[15px] leading-[1.8] text-slate-600 sm:text-[17px]">{company.story}</p>
                        <p className="mt-4 text-[15px] leading-[1.8] text-slate-600 sm:text-[17px]">
                            Every project gets the same attention: clear scoping before code, honest technical advice, and
                            software engineered to production standards so it keeps working long after launch.
                        </p>
                    </div>

                    <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-8 lg:col-span-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">What we do</p>
                        <ul className="mt-4 divide-y divide-slate-100">
                            {company.capabilities.map((cap) => (
                                <li key={cap} className="flex items-start gap-3 py-3 text-[14.5px] font-medium text-slate-700">
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                                        <Check className="h-3 w-3" />
                                    </span>
                                    {cap}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Mission & vision */}
            <section className="w-full px-4 pt-12 lg:px-20 lg:pt-16">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {[
                        { label: 'Our mission', title: 'Empowering growth through software', text: company.mission, Icon: Target, tone: 'from-pink-500 to-purple-600', bg: 'from-pink-50 via-white to-purple-50' },
                        { label: 'Our vision', title: 'The partner ambitious teams choose', text: company.vision, Icon: Eye, tone: 'from-blue-500 to-indigo-600', bg: 'from-blue-50 via-white to-indigo-50' },
                    ].map(({ label, title, text, Icon, tone, bg }) => (
                        <div key={label} className={`relative overflow-hidden rounded-[26px] border border-slate-200/80 bg-gradient-to-br ${bg} p-7 sm:p-8`}>
                            <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} text-white shadow-lg`}>
                                <Icon className="h-5 w-5" />
                            </span>
                            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">{title}</h3>
                            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <CompanyValues values={company.values} />

            <section className="w-full px-4 pb-12 lg:px-20 lg:pb-16">
                <CompanySectionHeader eyebrow="Leadership" title="The people" highlight="behind the work" action={{ label: 'Meet the team', href: '/company/team' }} />
                <TeamGrid members={team} />
            </section>

            <CompanyCTA />
        </main>
    );
}
