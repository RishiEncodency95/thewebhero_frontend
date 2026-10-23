import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Clock, Code2, Cpu, Lock } from 'lucide-react';
import { getProcessSteps } from '../../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../../lib/cms/seo';
import CompanyHero from '../../components/company/CompanyHero';
import CompanySectionHeader from '../../components/company/CompanySectionHeader';
import CompanyFeatureGrid from '../../components/company/CompanyFeatureGrid';
import CompanyCTA from '../../components/company/CompanyCTA';
import heroArt from '../../assets/home/service/qa-testing.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/company/why-us', {
        title: 'Why Choose TheWebHero | Technical Differentiators & Quality Practices',
        description: 'Discover why ambitious companies partner with TheWebHero for custom web applications, Flutter mobile apps, and enterprise software engineering.',
    });
}

const differentiators = [
    {
        title: 'Modern Full-Stack Engineering',
        description: 'We specialize in Next.js 15, React, Node.js, and Flutter — avoiding outdated monolithic frameworks in favor of high-performance modern architectures.',
        Icon: Code2,
    },
    {
        title: 'Rigorous Code & Security Standards',
        description: 'Every pull request undergoes strict peer reviews, TypeScript type validation, API security checks, and OWASP vulnerability mitigations.',
        Icon: Lock,
    },
    {
        title: 'Predictable Sprint Delivery',
        description: 'We operate in clear agile sprints with transparent milestone demos, staging application deployments, and progress tracking.',
        Icon: Clock,
    },
    {
        title: 'Cross-Platform Ecosystem Support',
        description: 'Whether web portals, administrative control panels, or iOS/Android native mobile apps, we maintain unified data and API standards.',
        Icon: Cpu,
    },
];

export default async function WhyUsPage() {
    // What a client receives along the way, straight from the process data.
    const deliverables = (await getProcessSteps()).flatMap((s) => (s.deliverables ?? []).map((d) => ({ step: s.title, item: d })));

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/company/why-us" />
            <CompanyHero
                eyebrow="Why choose us"
                title="Quality you can see in"
                highlight="every release"
                description="Modern full-stack architecture, clear agile delivery, transparent scoping and production-tested code practices — on every project, whatever its size."
                breadcrumbItems={[{ label: 'Company', href: '/company' }, { label: 'Why Us' }]}
                image={heroArt}
                imageAlt="QA dashboard showing test results"
            />

            <section className="w-full px-4 py-12 lg:px-20 lg:py-16">
                <CompanySectionHeader eyebrow="What sets us apart" title="Four reasons teams" highlight="build with us" />
                <CompanyFeatureGrid items={differentiators} columns={2} />
            </section>

            {/* Deliverables */}
            <section className="w-full px-4 pb-12 lg:px-20 lg:pb-16">
                <div className="grid grid-cols-1 gap-8 rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] sm:p-10 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="text-xs font-bold uppercase tracking-wider text-purple-600">No black boxes</p>
                        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                            What you{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">receive</span>{' '}
                            along the way
                        </h2>
                        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                            Every stage of our process ends with something concrete you can review, so you always know where the project stands.
                        </p>
                        <Link
                            href="/company/process"
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-600"
                        >
                            See the full process
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7">
                        {deliverables.map(({ step, item }) => (
                            <li key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                                    <Check className="h-3.5 w-3.5" />
                                </span>
                                <span>
                                    <span className="block text-[14px] font-semibold text-slate-900">{item}</span>
                                    <span className="block text-[12px] text-slate-500">{step}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <CompanyCTA title="Experience the difference on your next project" />
        </main>
    );
}
