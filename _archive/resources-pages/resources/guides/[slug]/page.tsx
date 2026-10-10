import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, FileText, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { getResourceBySlug, getAllResources } from '../../../lib/resources';
import ResourcesBreadcrumb from '../../../components/resources/ResourcesBreadcrumb';
import ArticleTableOfContents from '../../../components/resources/ArticleTableOfContents';
import ArticleShare from '../../../components/resources/ArticleShare';
import ResourceCTA from '../../../components/resources/ResourceCTA';

interface GuideDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const guides = getAllResources().filter((r) => r.type === 'guide');
    return guides.map((g) => ({
        slug: g.slug,
    }));
}

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const guide = getResourceBySlug(slug);

    if (!guide || guide.type !== 'guide') {
        return {
            title: 'Guide Not Found | TheWebHero',
            description: 'The requested guide could not be found.',
        };
    }

    return {
        title: guide.seoTitle || `${guide.title} | TheWebHero Guides`,
        description: guide.seoDescription || guide.excerpt,
        openGraph: {
            title: guide.seoTitle || guide.title,
            description: guide.seoDescription || guide.excerpt,
            url: `https://thewebhero.ai/resources/guides/${guide.slug}`,
            siteName: 'TheWebHero',
            type: 'article',
        },
        alternates: {
            canonical: `https://thewebhero.ai/resources/guides/${guide.slug}`,
        },
    };
}

export default async function GuideDetailPage({ params }: GuideDetailPageProps) {
    const { slug } = await params;
    const guide = getResourceBySlug(slug);

    if (!guide || guide.type !== 'guide') {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Guides', href: '/resources/guides' },
                            { label: guide.title },
                        ]}
                    />

                    <div className="mt-6 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                                {guide.category}
                            </span>
                            {guide.difficulty && (
                                <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                                    Difficulty: {guide.difficulty}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {guide.title}
                        </h1>

                        {guide.subtitle && (
                            <p className="text-lg text-indigo-300 font-medium">
                                {guide.subtitle}
                            </p>
                        )}

                        <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {guide.publishedAt}
                            </span>
                            {guide.readingTime && (
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {guide.readingTime}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <article className="lg:col-span-8 space-y-8">
                        {guide.coverImage && (
                            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                                <Image
                                    src={guide.coverImage}
                                    alt={guide.coverImageAlt || guide.title}
                                    fill
                                    priority
                                    className="object-cover object-top"
                                />
                            </div>
                        )}

                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
                            <p>{guide.description}</p>

                            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 my-6">
                                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                                    <span>Executive Scoping Summary</span>
                                </h3>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    {guide.excerpt}
                                </p>
                            </div>
                        </div>

                        <ArticleShare title={guide.title} />

                        {guide.services && guide.services.length > 0 && (
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-indigo-600" />
                                    <span>Related Engineering Services</span>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {guide.services.map((s) => (
                                        <Link
                                            key={s.slug}
                                            href={`/services/${s.slug}`}
                                            className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-indigo-600 transition-colors shadow-sm"
                                        >
                                            {s.title} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    <aside className="lg:col-span-4 space-y-8">
                        <ArticleTableOfContents items={guide.tableOfContents} />
                    </aside>
                </div>
            </div>

            <ResourceCTA title="Need Scoping Support for Your Software Project?" />
        </main>
    );
}
