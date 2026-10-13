import React from 'react';
import { Metadata } from 'next';
import { Award, BookOpen, Smile, Users } from 'lucide-react';
import { getCulturePrinciples, getJobPositions } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import CompanyFeatureGrid from '../../components/company/CompanyFeatureGrid';
import CareerGrid from '../../components/company/CareerGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/backkend-api-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/careers', {
        title: 'Careers at TheWebHero | Software Engineering Jobs',
        description: 'Explore engineering job openings, remote work opportunities, and software developer roles at TheWebHero.',
    });
}

const iconMap: Record<string, React.ElementType> = { Award, BookOpen, Users, Smile };

export default async function CareersListingPage() {
    const jobs = (await getJobPositions());
    const principles = (await getCulturePrinciples());

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/careers" />
            <CompanyHero
                eyebrow="Careers"
                title="Build products that"
                highlight="people actually use"
                description="Join a small, focused engineering team working on real web and mobile products with modern tools."
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'Careers' }]}
                image={heroArt}
                imageAlt="Backend API development workspace"
                hideActions
            />

            <section id="open-positions" className="w-full scroll-mt-24 px-4 py-12 lg:px-10 lg:py-16">
                <CompanySectionHeader
                    eyebrow="Current opportunities"
                    title="Open"
                    highlight="positions"
                    description={jobs.length ? `${jobs.length} role${jobs.length !== 1 ? 's' : ''} open right now.` : undefined}
                />
                <CareerGrid jobs={jobs} />
            </section>

            <section className="w-full px-4 pb-12 lg:px-10 lg:pb-16">
                <CompanySectionHeader eyebrow="Why join us" title="What it's like to" highlight="work here" />
                <CompanyFeatureGrid
                    items={principles.map((p) => ({
                        title: p.title,
                        description: p.description,
                        Icon: (p.iconName && iconMap[p.iconName]) || Users,
                    }))}
                />
            </section>

            <CompanyCTA title="Don't see a matching role?" description="Tell us about yourself — we're always happy to hear from great engineers." />
        </main>
    );
}
