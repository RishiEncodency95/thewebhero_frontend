import React from 'react';
import { Metadata } from 'next';
import { Check } from 'lucide-react';
import { getTeamMembers, getSiteSettings } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import TeamGrid from '../../components/company/TeamGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroFallback from '../../assets/home/service/it-support.webp';
import { cmsImage } from '@/app/lib/cmsImage';

const HERO_POINTS = [
    'Web, mobile & backend under one roof',
    'Clear scope, fixed timelines',
    'Code reviews and testing on every release',
    'Ongoing support after launch',
];

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/team', {
        title: 'Our Team | TheWebHero Engineers & Leadership',
        description: 'Meet the technical leadership driving software craftsmanship, code quality, and application development at TheWebHero.',
    });
}

export default async function TeamListingPage() {
    const heroArt = cmsImage((await getSiteSettings()).pageImages.team, heroFallback);
    const team = (await getTeamMembers());

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/team" />
            <CompanyHero
                eyebrow="Our team"
                title="The people"
                highlight="behind the code"
                description="Architects, developers and designers who own the quality of every product we ship."
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'Our Team' }]}
                image={heroArt}
                imageAlt="Engineer working at a multi-monitor desk"
            >
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-500">
                    TheWebHero is a small, focused team based in Ghaziabad. We plan, design, build and support websites, web apps and mobile apps for
                    startups and growing businesses across India and abroad. No big agency layers: you work directly with the people doing the work.
                </p>

                <ul className="mt-5 grid max-w-2xl gap-x-6 gap-y-2 sm:grid-cols-2">
                    {HERO_POINTS.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-[14px] font-medium text-slate-700">
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            </CompanyHero>

            <section className="w-full px-4 pb-10 pt-7 lg:px-20 lg:pb-12 lg:pt-8">
                <div className="[&>div]:mb-4 sm:[&>div]:mb-5">
                    <CompanySectionHeader eyebrow="Leadership" title="Meet" highlight="the team" description="The people and skills behind every TheWebHero project." center />
                </div>
                <TeamGrid members={team} />
            </section>

            <CompanyCTA />
        </main>
    );
}
