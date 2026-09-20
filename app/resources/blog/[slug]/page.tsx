import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, BookOpen, Layers, Cpu } from 'lucide-react';
import { getResourceBySlug, getAllResources } from '../../../lib/resources';
import ResourcesBreadcrumb from '../../../components/resources/ResourcesBreadcrumb';
import ArticleTableOfContents from '../../../components/resources/ArticleTableOfContents';
import ArticleShare from '../../../components/resources/ArticleShare';
import ResourceCard from '../../../components/resources/ResourceCard';
import ResourceCTA from '../../../components/resources/ResourceCTA';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const resources = getAllResources().filter((r) => r.type === 'blog');
    return resources.map((r) => ({
        slug: r.slug,
    }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getResourceBySlug(slug);

    if (!article || article.type !== 'blog') {
        return {
            title: 'Article Not Found | TheWebHero',
            description: 'The requested blog article could not be found.',
        };
    }

    return {
        title: article.seoTitle || `${article.title} | TheWebHero Blog`,
        description: article.seoDescription || article.excerpt,
        openGraph: {
            title: article.seoTitle || article.title,
            description: article.seoDescription || article.excerpt,
            url: `https://thewebhero.ai/resources/blog/${article.slug}`,
            siteName: 'TheWebHero',
            images: [
                {
                    url: article.ogImage || article.coverImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: article.coverImageAlt || article.title,
                },
            ],
            type: 'article',
        },
        alternates: {
            canonical: `https://thewebhero.ai/resources/blog/${article.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = getResourceBySlug(slug);

    if (!article || article.type !== 'blog') {
        notFound();
    }

    const relatedArticles = getAllResources()
        .filter((r) => r.slug !== article.slug && r.type === 'blog')
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Header Hero */}
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-white/80">
                        <ResourcesBreadcrumb
                            items={[
                                { label: 'Resources', href: '/resources' },
                                { label: 'Blog', href: '/resources/blog' },
                                { label: article.title },
                            ]}
                        />
                    </div>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
                                {article.category}
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            {article.title}
                        </h1>

                        {article.subtitle && (
                            <p className="text-lg text-blue-300 font-medium">
                                {article.subtitle}
                            </p>
                        )}

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                            {article.author && (
                                <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                                    <User className="w-3.5 h-3.5 text-blue-400" />
                                    {article.author.name}
                                </span>
                            )}
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {article.publishedAt}
                            </span>
                            {article.readingTime && (
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" />
                                    {article.readingTime}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Article Content Column */}
                    <article className="lg:col-span-8 space-y-8">
                        {/* Cover Image */}
                        {article.coverImage && (
                            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                                <Image
                                    src={article.coverImage}
                                    alt={article.coverImageAlt || article.title}
                                    fill
                                    priority
                                    className="object-cover object-top"
                                />
                            </div>
                        )}

                        {/* Article Text Content */}
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
                            {article.content ? (
                                <div className="whitespace-pre-line">{article.content}</div>
                            ) : (
                                <p>{article.description}</p>
                            )}
                        </div>

                        {/* Social Share Controls */}
                        <ArticleShare title={article.title} />

                        {/* Topics & Tags */}
                        {article.topics && article.topics.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-4">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Topics:</span>
                                {article.topics.map((t) => (
                                    <span key={t} className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Related Services & Tech Links */}
                        {article.services && article.services.length > 0 && (
                            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
                                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <Layers className="w-4 h-4 text-[#1769FF]" />
                                    <span>Related Services</span>
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#1769FF] hover:border-blue-300 transition-colors shadow-sm"
                                        >
                                            {service.title} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Sidebar Column */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Table of Contents */}
                        <ArticleTableOfContents items={article.tableOfContents} />

                        {/* Related Articles Widget */}
                        {relatedArticles.length > 0 && (
                            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-[#1769FF]" />
                                    <span>Related Articles</span>
                                </h3>
                                <div className="space-y-4">
                                    {relatedArticles.map((rel) => (
                                        <ResourceCard key={rel.slug} resource={rel} variant="compact" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            {/* Final CTA */}
            <ResourceCTA title="Need Engineering Expertise for Your Application?" />
        </main>
    );
}
