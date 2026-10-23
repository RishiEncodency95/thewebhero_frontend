import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, BookOpen, Briefcase, Smile, Users } from 'lucide-react';
import { getCulturePrinciples, getJobPositions } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import CompanyFeatureGrid from '../../components/company/CompanyFeatureGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/soft-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/culture', {
        title: 'Company Culture & Engineering Principles | TheWebHero',
        description: 'Learn about working culture, deep work principles, continuous learning, and software craftsmanship at TheWebHero.',
    });
}

const iconMap: Record<string, React.ElementType> = { Award, BookOpen, Users, Smile };

export default async function CulturePage() {
    const principles = (await getCulturePrinciples());
    const openRoles = (await getJobPositions()).length;

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/culture" />
            <CompanyHero
                eyebrow="Culture"
                title="How we work"
                highlight="together"
                description="Deep technical focus, continuous learning, shared ownership of quality and a sustainable pace — the habits behind software we're proud of."
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'Culture' }]}
                image={heroArt}
                imageAlt="Developer desk with code on screen"
            />

            <section className="w-full px-4 py-12 lg:px-20 lg:py-16">
                <CompanySectionHeader eyebrow="Working principles" title="What we" highlight="believe in" />
                <CompanyFeatureGrid
                    items={principles.map((p) => ({
                        title: p.title,
                        description: p.description,
                        Icon: (p.iconName && iconMap[p.iconName]) || Users,
                    }))}
                />
            </section>

            {/* Careers band */}
            <section className="w-full px-4 pb-12 lg:px-20 lg:pb-16">
                <div className="flex flex-col gap-6 rounded-[28px] border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-blue-50 p-6 sm:p-10 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg">
                            <Briefcase className="h-5 w-5" />
                        </span>
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Like how we work?</h2>
                            <p className="mt-1 text-[15px] text-slate-600">
                                {openRoles > 0
                                    ? `We have ${openRoles} open position${openRoles !== 1 ? 's' : ''} — come build with us.`
                                    : 'We are always happy to hear from great engineers.'}
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/company/careers"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
                    >
                        View careers
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>

            <CompanyCTA />
        </main>
    );
}
