import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock, Layers, ListOrdered, MessageSquareText, Sparkles } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '../../lib/cms/content';
import { buildMetadata, JsonLd } from '../../lib/cms/seo';
import { articleSchema, breadcrumbSchema } from '../../lib/cms/schema';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import BlogCover, { getBlogTheme } from '../../components/blog/BlogCover';
import { formatBlogDate } from '../../components/blog/BlogCard';
import ArticleBody from '../../components/blog/ArticleBody';
import BlogShare from '../../components/blog/BlogShare';
import ReadingProgress from '../../components/blog/ReadingProgress';

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return (await getBlogPosts()).map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = await getBlogPost(slug);
    if (!article) return { title: 'Article not found', robots: { index: false } };
    return buildMetadata({
        eyebrow: 'Blog',
        path: `/blog/${article.slug}`,
        seo: article.seo,
        title: article.title,
        description: article.excerpt ?? article.description,
        image: article.coverImage,
        type: 'article',
        publishedTime: article.publishedAt,
        modifiedTime: article.updatedAt,
    });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = await getBlogPost(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = (await getBlogPosts())
        .filter((r) => r.slug !== article.slug)
        .slice(0, 3);
    const toc = article.tableOfContents ?? [];

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <ReadingProgress />
            <JsonLd
                data={[
                    breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: article.title }]),
                    articleSchema({
                        title: article.title,
                        description: article.excerpt ?? article.description ?? '',
                        path: `/blog/${article.slug}`,
                        image: article.coverImage,
                        published: article.publishedAt,
                        modified: article.updatedAt,
                        author: article.author?.name,
                    }),
                ]}
            />
            <JsonLd data={article.seo?.structuredData} />

            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff]">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_40%,transparent_100%)]"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative w-full px-4 pb-10 pt-6 lg:px-10">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: article.title },
                        ]}
                    />

                    <div className="-mt-2 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                        <div className="lg:col-span-7">
                            <div className="flex flex-wrap items-center gap-2">
                                {article.category && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        {article.category}
                                    </span>
                                )}
                                {article.readingTime && (
                                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
                                        <Clock className="h-3.5 w-3.5" />
                                        {article.readingTime}
                                    </span>
                                )}
                            </div>

                            <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
                                {article.title}
                            </h1>

                            {article.subtitle && (
                                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{article.subtitle}</p>
                            )}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-sm font-bold text-white shadow-[0_8px_20px_rgba(168,85,247,0.35)]">
                                        TW
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">{article.author?.name ?? 'TheWebHero'}</p>
                                        <p className="text-[13px] text-slate-500">
                                            Published{' '}
                                            <time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time>
                                            {article.updatedAt && article.updatedAt !== article.publishedAt && (
                                                <> · Updated {formatBlogDate(article.updatedAt)}</>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <BlogShare title={article.title} />
                            </div>
                        </div>

                        <div className="relative hidden sm:block lg:col-span-5">
                            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-blue-200/60 via-purple-200/50 to-pink-200/60 blur-2xl" aria-hidden="true" />
                            <BlogCover
                                post={article}
                                size="hero"
                                className="relative aspect-[16/10] rounded-[26px] border-4 border-white shadow-[0_30px_60px_-20px_rgba(30,41,99,0.45)]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Body ─────────────────────────────────────────────── */}
            <div className="w-full px-4 py-10 lg:px-10 lg:py-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Left rail: contents + share */}
                    <aside className="hidden lg:col-span-3 lg:block">
                        <div className="sticky top-24 space-y-5">
                            {toc.length > 0 && (
                                <nav className="rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]" aria-label="Table of contents">
                                    <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                        <ListOrdered className="h-3.5 w-3.5 text-purple-600" />
                                        On this page
                                    </p>
                                    <ol className="space-y-1 border-l border-slate-200">
                                        {toc.map((item, i) => (
                                            <li key={item.id}>
                                                <a
                                                    href={`#${item.id}`}
                                                    className="-ml-px flex gap-2.5 border-l-2 border-transparent py-1.5 pl-3 text-[13.5px] leading-snug text-slate-600 transition-colors hover:border-purple-500 hover:text-purple-700"
                                                >
                                                    <span className="font-mono text-[12px] text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                                                    {item.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                            )}

                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 px-1 text-sm font-semibold text-slate-600 transition-colors hover:text-purple-700"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to all articles
                            </Link>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="min-w-0 lg:col-span-6">
                        <div className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-16px_rgba(35,75,125,0.12)] sm:p-10">
                            {article.excerpt && (
                                <p className="mb-8 border-l-4 border-purple-500 pl-5 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl">
                                    {article.excerpt}
                                </p>
                            )}

                            {article.content ? (
                                <ArticleBody content={article.content} toc={toc} />
                            ) : (
                                <p className="text-base leading-[1.8] text-slate-700 sm:text-[17px]">{article.description}</p>
                            )}

                            {/* Topics */}
                            {article.topics && article.topics.length > 0 && (
                                <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-6">
                                    {article.topics.map((t) => (
                                        <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                                            #{t}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Share (mobile + end of article) */}
                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-5 py-4">
                                <p className="text-sm font-semibold text-slate-800">Found this useful? Share it.</p>
                                <BlogShare title={article.title} />
                            </div>
                        </div>

                        {/* Related services */}
                        {article.services && article.services.length > 0 && (
                            <div className="mt-6 rounded-[22px] border border-purple-100 bg-gradient-to-br from-purple-50/80 via-white to-blue-50/60 p-6">
                                <h3 className="flex items-center gap-2 text-sm font-bold text-slate-900">
                                    <Layers className="h-4 w-4 text-purple-600" />
                                    Services related to this article
                                </h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {article.services.map((service) => (
                                        <Link
                                            key={service.slug}
                                            href={`/services/${service.slug}`}
                                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-semibold text-slate-800 shadow-sm transition-colors hover:border-purple-300 hover:text-purple-700"
                                        >
                                            {service.title}
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>

                    {/* Right rail: related + CTA */}
                    <aside className="space-y-5 lg:col-span-3">
                        <div className="lg:sticky lg:top-24 space-y-5">
                            {relatedArticles.length > 0 && (
                                <div className="rounded-[22px] border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                                    <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">More from the blog</p>
                                    <ul className="divide-y divide-slate-100">
                                        {relatedArticles.map((rel) => {
                                            const { gradient, Icon } = getBlogTheme(rel);
                                            return (
                                                <li key={rel.slug}>
                                                    <Link
                                                        href={`/blog/${rel.slug}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group flex items-start gap-3 py-3"
                                                    >
                                                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white`}>
                                                            <Icon className="h-5 w-5" />
                                                        </span>
                                                        <span className="min-w-0">
                                                            <span className="line-clamp-2 text-[13.5px] font-semibold leading-snug text-slate-900 transition-colors group-hover:text-purple-700">
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

                            <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-6 text-white">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/40 to-blue-500/40 blur-3xl" aria-hidden="true" />
                                <div className="relative">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500">
                                        <MessageSquareText className="h-5 w-5" />
                                    </span>
                                    <p className="mt-4 text-lg font-semibold leading-snug">Building something similar?</p>
                                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-300">
                                        Talk to the engineers who wrote this and plan the right approach for your product.
                                    </p>
                                    <Link
                                        href="/get-a-quote"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(168,85,247,0.4)] transition-transform hover:scale-[1.02]"
                                    >
                                        Get a Quote
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
