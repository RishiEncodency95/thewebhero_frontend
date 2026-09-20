import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, GraduationCap, CheckCircle2, Cpu, Code } from 'lucide-react';
import { getResourceBySlug, getAllResources } from '../../../lib/resources';
import ResourcesBreadcrumb from '../../../components/resources/ResourcesBreadcrumb';
import ArticleShare from '../../../components/resources/ArticleShare';
import ResourceCTA from '../../../components/resources/ResourceCTA';

interface TutorialDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const tutorials = getAllResources().filter((r) => r.type === 'tutorial');
    return tutorials.map((t) => ({
        slug: t.slug,
    }));
}

export async function generateMetadata({ params }: TutorialDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const tutorial = getResourceBySlug(slug);

    if (!tutorial || tutorial.type !== 'tutorial') {
        return {
            title: 'Tutorial Not Found | TheWebHero',
            description: 'The requested tutorial could not be found.',
        };
    }

    return {
        title: tutorial.seoTitle || `${tutorial.title} | TheWebHero Tutorials`,
        description: tutorial.seoDescription || tutorial.excerpt,
        openGraph: {
            title: tutorial.seoTitle || tutorial.title,
            description: tutorial.seoDescription || tutorial.excerpt,
            url: `https://thewebhero.ai/resources/tutorials/${tutorial.slug}`,
            siteName: 'TheWebHero',
            type: 'article',
        },
        alternates: {
            canonical: `https://thewebhero.ai/resources/tutorials/${tutorial.slug}`,
        },
    };
}

export default async function TutorialDetailPage({ params }: TutorialDetailPageProps) {
    const { slug } = await params;
    const tutorial = getResourceBySlug(slug);

    if (!tutorial || tutorial.type !== 'tutorial') {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Tutorials', href: '/resources/tutorials' },
                            { label: tutorial.title },
                        ]}
                    />

                    <div className="mt-6 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                                {tutorial.category}
                            </span>
                            {tutorial.difficulty && (
                                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                                    Difficulty: {tutorial.difficulty}
                                </span>
                            )}
                            {tutorial.estimatedTime && (
                                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                                    Time: {tutorial.estimatedTime}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {tutorial.title}
                        </h1>

                        {tutorial.subtitle && (
                            <p className="text-lg text-emerald-300 font-medium">
                                {tutorial.subtitle}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
                {/* Prerequisites Box */}
                {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
                    <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-emerald-600" />
                            <span>Prerequisites</span>
                        </h3>
                        <ul className="space-y-2">
                            {tutorial.prerequisites.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Steps Section */}
                {tutorial.steps && tutorial.steps.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="text-2xl font-extrabold text-slate-900">
                            Step-by-Step Implementation
                        </h2>

                        {tutorial.steps.map((step) => (
                            <div key={step.number} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
                                        0{step.number}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                                {step.code && (
                                    <div className="rounded-xl bg-slate-900 text-slate-200 p-4 font-mono text-xs overflow-x-auto border border-slate-800">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {step.code.language}
                                        </div>
                                        <pre>{step.code.code}</pre>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <ArticleShare title={tutorial.title} />

                {tutorial.technologies && tutorial.technologies.length > 0 && (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-emerald-600" />
                            <span>Related Technologies</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {tutorial.technologies.map((t) => (
                                <Link
                                    key={t.slug}
                                    href={`/technologies/${t.slug}`}
                                    className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-emerald-600 transition-colors shadow-sm"
                                >
                                    {t.name} →
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <ResourceCTA title="Need Dedicated Software Developers for Your Project?" />
        </main>
    );
}
