import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock, Cpu, Layers, RefreshCw } from 'lucide-react';
import { getResourceBySlug, getResourcesByType } from '../../lib/resources';
import { getTechnologyBySlug } from '../../lib/technologies';
import { getServiceBySlug } from '../../lib/services';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceCTA from '../../components/resources/ResourceCTA';
import BlogCover from '../../components/blog/BlogCover';
import BlogCard, { formatBlogDate } from '../../components/blog/BlogCard';
import ArticleBody from '../../components/blog/ArticleBody';
import AuthorAvatar from '../../components/blog/AuthorAvatar';
import BlogShare from '../../components/blog/BlogShare';
import BlogToc from '../../components/blog/BlogToc';
import ReadingProgress from '../../components/blog/ReadingProgress';

const SITE_URL = 'https://thewebhero.ai';

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
            url: `${SITE_URL}/blog/${article.slug}`,
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
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
            authors: article.author ? [article.author.name] : undefined,
            tags: article.topics,
        },
        alternates: {
            canonical: `${SITE_URL}/blog/${article.slug}`,
        },
    };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = getResourceBySlug(slug);

    if (!article || article.type !== 'blog') {
        notFound();
    }

    const url = `${SITE_URL}/blog/${article.slug}`;
    const authorName = article.author?.name ?? 'TheWebHero Team';

    // Newest first, for related + previous/next navigation.
    const allPosts = [...getResourcesByType('blog')].sort((a, b) =>
        (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')
    );
    const index = allPosts.findIndex((p) => p.slug === article.slug);
    const newer = index > 0 ? allPosts[index - 1] : undefined;
    const older = index < allPosts.length - 1 ? allPosts[index + 1] : undefined;

    // Posts sharing the most topics first.
    const sharedTopics = (topics: string[] = []) => topics.filter((t) => article.topics?.includes(t)).length;
    const relatedArticles = allPosts
        .filter((p) => p.slug !== article.slug)
        .sort((a, b) => sharedTopics(b.topics) - sharedTopics(a.topics))
        .slice(0, 3);

    // Some refs in the post data point at pages that don't exist; only link the ones that do.
    const services = (article.services ?? []).filter((s) => getServiceBySlug(s.slug));
    const technologies = (article.technologies ?? []).map((t) => ({ ...t, exists: !!getTechnologyBySlug(t.slug) }));

    const isUpdated = article.updatedAt && article.updatedAt !== article.publishedAt;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.seoDescription || article.excerpt,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        author: { '@type': 'Organization', name: authorName },
        publisher: { '@type': 'Organization', name: 'TheWebHero', url: SITE_URL },
        mainEntityOfPage: url,
        keywords: article.topics?.join(', '),
    };

    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <ReadingProgress targetId="article-content" />

            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white pt-8">
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Blog', href: '/blog' },
                            { label: article.title },
                        ]}
                    />

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            {article.category && (
                                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/70">
                                    {article.category}
                                </span>
                            )}
                            {article.readingTime && (
                                <span className="inline-flex items-center gap-1.5 font-medium text-slate-500">
                                    <Clock className="h-4 w-4" />
                                    {article.readingTime}
                                </span>
                            )}
                        </div>

                        <h1 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem]">
                            {article.title}
                        </h1>

                        {article.subtitle && (
                            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">{article.subtitle}</p>
                        )}
                    </div>

                    <div className="mt-8 flex flex-col gap-5 border-t border-slate-200/80 py-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3.5">
                            <AuthorAvatar name={authorName} />
                            <div className="min-w-0">
                                <p className="truncate text-sm font-semibold text-slate-900">{authorName}</p>
                                <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[13px] text-slate-500">
                                    <span className="inline-flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        <time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time>
                                    </span>
                                    {isUpdated && (
                                        <span className="inline-flex items-center gap-1">
                                            <RefreshCw className="h-3.5 w-3.5" />
                                            Updated <time dateTime={article.updatedAt}>{formatBlogDate(article.updatedAt)}</time>
                                        </span>
                                    )}
                                </p>
                            </div>
                        </div>
                        <BlogShare title={article.title} url={url} label />
                    </div>
                </div>
            </section>

            {/* Cover */}
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <BlogCover post={article} size="hero" className="aspect-[16/9] rounded-[28px] shadow-[0_24px_60px_-28px_rgba(35,75,125,0.45)] sm:aspect-[21/9]" />
            </div>

            {/* Body */}
            <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_272px] xl:gap-16">
                    <article id="article-content" className="min-w-0 max-w-3xl">
                        {article.excerpt && (
                            <p className="mb-10 border-l-4 border-purple-500 pl-5 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl">
                                {article.excerpt}
                            </p>
                        )}

                        {/* Mobile table of contents */}
                        {article.tableOfContents && article.tableOfContents.length > 0 && (
                            <details className="group mb-10 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 lg:hidden">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-900">
                                    Table of contents
                                    <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <ol className="mt-4 space-y-2 text-sm">
                                    {article.tableOfContents.map((item, i) => (
                                        <li key={item.id}>
                                            <a href={`#${item.id}`} className="flex gap-2 text-slate-600 hover:text-purple-700">
                                                <span className="font-semibold text-slate-400">{String(i + 1).padStart(2, '0')}</span>
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </details>
                        )}

                        {article.content ? (
                            <ArticleBody content={article.content} toc={article.tableOfContents} />
                        ) : (
                            <p className="text-[17px] leading-[1.85] text-slate-700 sm:text-[18px]">{article.description}</p>
                        )}

                        {/* Topics */}
                        {article.topics && article.topics.length > 0 && (
                            <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-8">
                                {article.topics.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Share */}
                        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-sm font-semibold text-slate-900">Found this useful? Share it with your team.</p>
                            <BlogShare title={article.title} url={url} />
                        </div>

                        {/* Author */}
                        <div className="mt-8 flex gap-4 rounded-2xl border border-slate-200 p-6 sm:gap-5">
                            <AuthorAvatar name={authorName} size="lg" />
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Written by</p>
                                <p className="mt-1 text-base font-semibold text-slate-900">{authorName}</p>
                                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                    {article.author?.role ??
                                        'Engineers, designers and product specialists at TheWebHero, sharing what we learn shipping web, mobile and cloud products.'}
                                </p>
                            </div>
                        </div>

                        {/* Previous / next */}
                        {(older || newer) && (
                            <nav aria-label="More articles" className="mt-8 grid gap-4 sm:grid-cols-2">
                                {older ? (
                                    <Link
                                        href={`/blog/${older.slug}`}
                                        className="group rounded-2xl border border-slate-200 p-5 transition-colors hover:border-purple-300 hover:bg-purple-50/40"
                                    >
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                                            Previous
                                        </span>
                                        <span className="mt-2 line-clamp-2 block text-sm font-semibold leading-snug text-slate-900 group-hover:text-purple-700">
                                            {older.title}
                                        </span>
                                    </Link>
                                ) : (
                                    <span className="hidden sm:block" />
                                )}
                                {newer && (
                                    <Link
                                        href={`/blog/${newer.slug}`}
                                        className="group rounded-2xl border border-slate-200 p-5 text-right transition-colors hover:border-purple-300 hover:bg-purple-50/40"
                                    >
                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Next
                                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                        </span>
                                        <span className="mt-2 line-clamp-2 block text-sm font-semibold leading-snug text-slate-900 group-hover:text-purple-700">
                                            {newer.title}
                                        </span>
                                    </Link>
                                )}
                            </nav>
                        )}
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <BlogToc items={article.tableOfContents} />

                            {technologies.length > 0 && (
                                <div>
                                    <p className="mb-3 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                        <Cpu className="h-3.5 w-3.5" />
                                        Tech stack
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech) =>
                                            tech.exists ? (
                                                <Link
                                                    key={tech.slug}
                                                    href={`/technologies/${tech.slug}`}
                                                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors hover:border-purple-300 hover:text-purple-700"
                                                >
                                                    {tech.name}
                                                </Link>
                                            ) : (
                                                <span
                                                    key={tech.slug}
                                                    className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700"
                                                >
                                                    {tech.name}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* CTA card */}
                            <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white">
                                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-purple-500/40 blur-3xl" aria-hidden="true" />
                                <div className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-pink-500/30 blur-3xl" aria-hidden="true" />
                                <div className="relative">
                                    <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-purple-300">
                                        <Layers className="h-3.5 w-3.5" />
                                        Work with us
                                    </p>
                                    <p className="mt-3 text-lg font-semibold leading-snug">
                                        Need help building something like this?
                                    </p>
                                    {services.length > 0 && (
                                        <ul className="mt-4 space-y-1.5">
                                            {services.map((service) => (
                                                <li key={service.slug}>
                                                    <Link
                                                        href={`/services/${service.slug}`}
                                                        className="group inline-flex items-center gap-1 text-sm text-slate-300 transition-colors hover:text-white"
                                                    >
                                                        {service.title}
                                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <Link
                                        href="/get-a-quote"
                                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/30 transition-transform hover:-translate-y-0.5"
                                    >
                                        Get a free quote
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Related */}
            {relatedArticles.length > 0 && (
                <section className="border-t border-slate-200/70 bg-[#f8fbff] py-16 lg:py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-purple-600">Keep reading</p>
                                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Related articles</h2>
                            </div>
                            <Link
                                href="/blog"
                                className="hidden shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-purple-300 hover:text-purple-700 sm:inline-flex"
                            >
                                View all articles
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {relatedArticles.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <ResourceCTA title="Need Engineering Expertise for Your Application?" />
        </main>
    );
}
