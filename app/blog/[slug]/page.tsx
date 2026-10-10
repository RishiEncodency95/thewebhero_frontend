import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, User, BookOpen, Layers, ArrowUpRight } from 'lucide-react';
import { getResourceBySlug, getResourcesByType } from '../../lib/resources';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ArticleTableOfContents from '../../components/resources/ArticleTableOfContents';
import ArticleShare from '../../components/resources/ArticleShare';
import ResourceCTA from '../../components/resources/ResourceCTA';
import BlogCover, { getBlogTheme } from '../../components/blog/BlogCover';
import { formatBlogDate } from '../../components/blog/BlogCard';
import ArticleBody from '../../components/blog/ArticleBody';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return getResourcesByType('blog').map((r) => ({ slug: r.slug }));
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
            url: `https://thewebhero.ai/blog/${article.slug}`,
            siteName: 'TheWebHero',
            images: [
                {
                    url: article.ogImage || '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: article.coverImageAlt || article.title,
                },
            ],
            type: 'article',
        },
        alternates: {
            canonical: `https://thewebhero.ai/blog/${article.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = getResourceBySlug(slug);

    if (!article || article.type !== 'blog') {
        notFound();
    }

    const relatedArticles = getResourcesByType('blog')
        .filter((r) => r.slug !== article.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white pb-10 pt-8">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: article.title },
                        ]}
                    />

                    <div className="mt-4 space-y-4">
                        {article.category && (
                            <span className="inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/70">
                                {article.category}
                            </span>
                        )}

                        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            {article.title}
                        </h1>

                        {article.subtitle && (
                            <p className="text-lg font-medium text-slate-600">{article.subtitle}</p>
                        )}

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-slate-200/80 pt-4 text-sm text-slate-500">
                            {article.author && (
                                <span className="flex items-center gap-1.5 font-semibold text-slate-800">
                                    <User className="h-4 w-4 text-purple-500" />
                                    {article.author.name}
                                </span>
                            )}
                            <span className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                {formatBlogDate(article.publishedAt)}
                            </span>
                            {article.readingTime && (
                                <span className="flex items-center gap-1.5">
                                    <Clock className="h-4 w-4" />
                                    {article.readingTime}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
                    <article className="space-y-8 lg:col-span-8">
                        <BlogCover post={article} size="hero" className="aspect-[16/7] rounded-[24px]" />

                        {article.content ? (
                            <ArticleBody content={article.content} toc={article.tableOfContents} />
                        ) : (
                            <p className="text-base leading-[1.8] text-slate-700 sm:text-[17px]">{article.description}</p>
                        )}

                        <ArticleShare title={article.title} />

                        {article.topics && article.topics.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-2">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Topics:</span>
                                {article.topics.map((t) => (
                                    <span key={t} className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}

                        {article.services && article.services.length > 0 && (
                            <div className="space-y-3 rounded-2xl border border-purple-100 bg-purple-50/50 p-6">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <Layers className="h-4 w-4 text-purple-600" />
                                    Related Services
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm transition-colors hover:border-purple-300 hover:text-purple-700"
                                        >
                                            {service.title} →
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    <aside className="space-y-8 lg:col-span-4">
                        <ArticleTableOfContents items={article.tableOfContents} />

                        {relatedArticles.length > 0 && (
                            <div className="space-y-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-6 lg:sticky lg:top-24">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <BookOpen className="h-4 w-4 text-purple-600" />
                                    More from the blog
                                </h3>
                                <ul className="space-y-3">
                                    {relatedArticles.map((rel) => {
                                        const { gradient, Icon } = getBlogTheme(rel);
                                        return (
                                            <li key={rel.slug}>
                                                <Link
                                                    href={`/blog/${rel.slug}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-start gap-3 rounded-xl bg-white p-3 ring-1 ring-slate-200/80 transition-shadow hover:shadow-md"
                                                >
                                                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-white`}>
                                                        <Icon className="h-5 w-5" />
                                                    </span>
                                                    <span className="min-w-0">
                                                        <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 group-hover:text-purple-700">
                                                            {rel.title}
                                                        </span>
                                                        <span className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                                                            {rel.readingTime}
                                                            <ArrowUpRight className="h-3 w-3" />
                                                        </span>
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            <ResourceCTA title="Need Engineering Expertise for Your Application?" />
        </main>
    );
}
