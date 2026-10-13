import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getTeamMembers } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import TeamGrid from '../../components/company/TeamGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/it-support.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/team', {
        title: 'Our Team | TheWebHero Engineers & Leadership',
        description: 'Meet the technical leadership driving software craftsmanship, code quality, and application development at TheWebHero.',
    });
}

export default async function TeamListingPage() {
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
            />

            <section className="w-full px-4 py-12 lg:px-10 lg:py-16">
                <CompanySectionHeader eyebrow="Leadership" title="Meet" highlight="the team" />
                <TeamGrid members={team} />

                <Link
                    href="/company/careers"
                    className="group mt-8 flex flex-col gap-4 rounded-[24px] border border-dashed border-purple-200 bg-white/70 p-6 transition-colors hover:border-purple-300 hover:bg-white sm:flex-row sm:items-center sm:justify-between"
                >
                    <span className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <span>
                            <span className="block text-[16px] font-semibold text-slate-900">Want to be on this page?</span>
                            <span className="block text-[14px] text-slate-500">We&apos;re growing the team — see our open roles.</span>
                        </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700">
                        View careers
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                </Link>
            </section>

            <CompanyCTA />
        </main>
    );
}
