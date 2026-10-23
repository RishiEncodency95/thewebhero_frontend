import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CalendarDays, ChevronRight, Clock, Hash, Layers, ListOrdered, } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '../../lib/cms/content';
import { buildMetadata, JsonLd, shareImage } from '../../lib/cms/seo';
import { articleSchema, breadcrumbSchema } from '../../lib/cms/schema';
import type { ResourceItem } from '../../types/resource';
import BlogCover from '../../components/blog/BlogCover';
import { formatBlogDate } from '../../components/blog/BlogCard';
import AuthorAvatar from '../../components/blog/AuthorAvatar';
import BlogToc from '../../components/blog/BlogToc';
import ArticleBody, { extractToc } from '../../components/blog/ArticleBody';
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

/** Uploaded cover when there is one, otherwise the illustrated gradient cover. */
function Cover({ post, className, sizes }: { post: ResourceItem; className: string; sizes: string }) {
    if (!post.coverImage) return <BlogCover post={post} size="hero" className={className} />;
    return (
        <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
            <Image src={post.coverImage} alt={post.coverImageAlt ?? post.title} fill loading="eager" fetchPriority="high" sizes={sizes} className="object-cover" />
        </div>
    );
}

const card = 'rounded-3xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-18px_rgba(35,75,125,0.18)]';

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = await getBlogPost(slug);

    if (!article) {
        notFound();
    }

    const allPosts = await getBlogPosts();
    const index = allPosts.findIndex((r) => r.slug === article.slug);
    const newer = index > 0 ? allPosts[index - 1] : undefined;
    const older = index >= 0 && index < allPosts.length - 1 ? allPosts[index + 1] : undefined;
    const relatedArticles = allPosts.filter((r) => r.slug !== article.slug).slice(0, 3);

    // Built from the article's headings, so it always matches what the admin wrote.
    const toc = article.content ? extractToc(article.content) : [];
    const sections = toc.filter((t) => t.level === 2);
    const authorName = article.author?.name ?? 'TheWebHero Team';
    const updated = article.updatedAt && article.updatedAt.slice(0, 10) !== article.publishedAt?.slice(0, 10);

    return (
        <main className="min-h-screen bg-white">
            <ReadingProgress />
            <JsonLd
                data={[
                    breadcrumbSchema([{ name: 'Blog', path: '/blog' }, { name: article.title }]),
                    articleSchema({
                        title: article.title,
                        description: article.excerpt ?? article.description ?? '',
                        path: `/blog/${article.slug}`,
                        image: shareImage({ seo: article.seo, image: article.coverImage, title: article.title, eyebrow: 'Blog' }),
                        published: article.publishedAt,
                        modified: article.updatedAt,
                        author: article.author?.name,
                        section: article.category,
                        keywords: [article.seo?.focusKeyword, ...(article.topics ?? [])].filter((k): k is string => Boolean(k)),
                        wordCount: article.content ? article.content.split(/\s+/).filter(Boolean).length : undefined,
                    }),
                ]}
            />
            <JsonLd data={article.seo?.structuredData} />

            {/* ── Hero: title on the left, cover on the right ─────────────── */}
            <header className="relative overflow-hidden border-b border-slate-200/70 bg-[#fafbff]">
                <div
                    className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,#e9ecf5_1px,transparent_1px),linear-gradient(to_bottom,#e9ecf5_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_80%_at_30%_30%,#000_30%,transparent_100%)]"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-purple-200/50 blur-[130px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -bottom-48 left-1/4 h-[380px] w-[380px] rounded-full bg-sky-200/50 blur-[130px]" aria-hidden="true" />

                <div className="w-full relative px-4 pb-8 pt-6 sm:px-6 lg:pb-10 lg:pt-7 lg:px-20">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500">
                        <Link href="/" className="hover:text-purple-700">Home</Link>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                        <Link href="/blog" className="hover:text-purple-700">Blog</Link>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                        <span className="line-clamp-1 max-w-[50vw] font-medium text-slate-700">{article.title}</span>
                    </nav>

                    <div className="mt-5 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-12">
                        <div>
                            <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-500">
                                {article.category && (
                                    <Link
                                        href="/blog"
                                        className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-purple-700 shadow-sm transition-colors hover:bg-purple-50"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600" />
                                        {article.category}
                                    </Link>
                                )}
                                {article.readingTime && (
                                    <span className="inline-flex items-center gap-1.5">
                                        <Clock className="h-4 w-4 text-slate-400" />
                                        {article.readingTime}
                                    </span>
                                )}
                            </div>

                            <h1 className="mt-4 text-[30px] font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-[38px] lg:text-[44px]">
                                {article.title}
                            </h1>

                            {article.subtitle && <p className="mt-3 max-w-xl text-[16.5px] leading-relaxed text-slate-600 sm:text-lg">{article.subtitle}</p>}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5">
                                <div className="flex items-center gap-3">
                                    <AuthorAvatar name={authorName} size="md" />
                                    <div className="leading-tight">
                                        <p className="text-[15px] font-semibold text-slate-900">{authorName}</p>
                                        <p className="mt-1 flex items-center gap-1.5 text-[13px] text-slate-500">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            <time dateTime={article.publishedAt}>{formatBlogDate(article.publishedAt)}</time>
                                            {updated && <span className="text-slate-400">· Updated {formatBlogDate(article.updatedAt)}</span>}
                                        </p>
                                    </div>
                                </div>
                                <BlogShare title={article.title} />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-pink-300/40 via-purple-300/30 to-sky-300/40 blur-2xl" aria-hidden="true" />
                            <Cover
                                post={article}
                                sizes="(min-width: 1024px) 560px, 100vw"
                                className="relative aspect-[16/9] rounded-[24px] shadow-[0_30px_60px_-28px_rgba(30,41,99,0.55)] ring-1 ring-slate-900/5"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* ── Body: reading column + sticky sidebar ───────────────────── */}
            <div className="w-full grid grid-cols-1 gap-8 px-4 pb-10 pt-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-10 lg:pt-10 lg:px-20">
                <article className="min-w-0">
                    <div className="mx-auto max-w-[760px]">

                        {/* Contents for small screens (sidebar is hidden) */}
                        {sections.length > 0 && (
                            <details className={`group mb-6 lg:hidden ${card}`}>
                                <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[15px] font-semibold text-slate-900">
                                    <span className="flex items-center gap-2">
                                        <ListOrdered className="h-4 w-4 text-purple-600" /> In this article
                                    </span>
                                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <ol className="space-y-1 border-t border-slate-100 px-4 py-3">
                                    {sections.map((s, i) => (
                                        <li key={s.id}>
                                            <a href={`#${s.id}`} className="flex gap-3 py-1 text-[14.5px] text-slate-600 hover:text-purple-700">
                                                <span className="w-5 shrink-0 font-semibold text-purple-500">{String(i + 1).padStart(2, '0')}</span>
                                                {s.title}
                                            </a>
                                        </li>
                                    ))}
                                </ol>
                            </details>
                        )}

                        <div>
                            {article.content ? (
                                <ArticleBody content={article.content} />
                            ) : (
                                <p className="text-[17px] leading-[1.85] text-slate-700 sm:text-[18px]">{article.description}</p>
                            )}
                        </div>

                        {/* Tags, related services and share in one compact block */}
                        <div className="mt-8 space-y-3 border-t border-slate-200 pt-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap gap-1.5">
                                    {(article.topics ?? []).map((t) => (
                                        <span key={t} className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[12.5px] font-medium text-slate-700">
                                            <Hash className="h-3 w-3 text-slate-400" />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <BlogShare title={article.title} />
                            </div>
                            {article.services && article.services.length > 0 && (
                                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-slate-500">
                                    <Layers className="h-4 w-4 text-purple-600" /> Related services:
                                    {article.services.map((service, i) => (
                                        <React.Fragment key={service.slug}>
                                            {i > 0 && <span className="text-slate-300">·</span>}
                                            <Link href={`/services/${service.slug}`} className="font-semibold text-purple-700 hover:underline">
                                                {service.title}
                                            </Link>
                                        </React.Fragment>
                                    ))}
                                </p>
                            )}
                        </div>
                        {/* Previous / next */}
                        {(newer || older) && (
                            <nav aria-label="More articles" className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {older ? (
                                    <Link href={`/blog/${older.slug}`} className={`group px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-purple-200 ${card}`}>
                                        <span className="flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-wider text-slate-400">
                                            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" /> Previous article
                                        </span>
                                        <span className="mt-1 line-clamp-2 block text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-purple-700">{older.title}</span>
                                    </Link>
                                ) : (
                                    <span className="hidden sm:block" />
                                )}
                                {newer && (
                                    <Link href={`/blog/${newer.slug}`} className={`group px-4 py-3 text-right transition-all hover:-translate-y-0.5 hover:border-purple-200 ${card}`}>
                                        <span className="flex items-center justify-end gap-1.5 text-[12px] font-bold uppercase tracking-wider text-slate-400">
                                            Next article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                        </span>
                                        <span className="mt-1 line-clamp-2 block text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-purple-700">{newer.title}</span>
                                    </Link>
                                )}
                            </nav>
                        )}
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="hidden lg:block">
                    <div className="sticky top-24 space-y-4">
                        {toc.length > 0 && (
                            <div className={`p-4 ${card}`}>
                                <BlogToc items={toc} />
                            </div>
                        )}

                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b1145] via-[#24135c] to-[#3a1670] p-5 text-white">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-pink-500/30 blur-3xl" aria-hidden="true" />
                            <p className="relative text-[17px] font-bold leading-snug">Planning a project like this?</p>
                            <p className="relative mt-1.5 text-[13px] leading-relaxed text-purple-100/80">
                                Get a free consultation and estimate from the engineers who wrote this guide.
                            </p>
                            <Link
                                href="/get-a-quote"
                                className="relative mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-[13.5px] font-bold text-slate-900 transition-transform hover:-translate-y-0.5"
                            >
                                Get a free quote <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        {relatedArticles.length > 0 && (
                            <div className={`p-4 ${card}`}>
                                <p className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
                                    <BookOpen className="h-3.5 w-3.5" /> Popular reads
                                </p>
                                <ul className="space-y-2.5">
                                    {relatedArticles.map((rel) => (
                                        <li key={rel.slug}>
                                            <Link href={`/blog/${rel.slug}`} className="group flex items-center gap-3">
                                                <BlogCover post={rel} size="thumb" className="h-12 w-14 shrink-0 rounded-lg" />
                                                <span className="min-w-0">
                                                    <span className="line-clamp-2 text-[13.5px] font-semibold leading-snug text-slate-800 group-hover:text-purple-700">{rel.title}</span>
                                                    <span className="mt-0.5 block text-[12px] text-slate-400">{rel.readingTime ?? formatBlogDate(rel.publishedAt)}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </aside>
            </div>

            {/* ── CTA band ────────────────────────────────────────────────── */}
            <section className="px-4 pb-10 sm:px-6 lg:px-20">
                <div className="w-full relative [perspective:1200px]">
                    {/* Back layer gives the card its stacked, raised depth */}
                    <div className="absolute inset-x-6 -bottom-3 top-3 rounded-[28px] bg-indigo-900/80 blur-[1px]" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 px-6 py-6 text-white shadow-[0_24px_50px_-20px_rgba(79,70,229,0.75),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-6px_16px_rgba(30,12,80,0.35)] transition-transform duration-500 [transform:rotateX(4deg)] hover:[transform:rotateX(0deg)] sm:px-10 lg:py-7">
                        {/* Gloss + dot texture */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent" aria-hidden="true" />
                        <div
                            className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
                            aria-hidden="true"
                        />
                        {/* 3D spheres */}
                        <span className="pointer-events-none absolute -left-6 -top-8 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#f9a8d4_25%,#db2777_70%)] opacity-70 shadow-[0_12px_30px_rgba(0,0,0,0.25)]" aria-hidden="true" />
                        <span className="pointer-events-none absolute -bottom-10 right-1/3 hidden h-20 w-20 lg:block rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0%,#a5b4fc_25%,#4338ca_70%)] opacity-60 shadow-[0_12px_30px_rgba(0,0,0,0.25)]" aria-hidden="true" />

                        <div className="relative flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
                            <div>
                                <h2 className="text-xl font-bold tracking-tight [text-shadow:0_2px_8px_rgba(30,12,80,0.35)] sm:text-[26px] sm:leading-tight">
                                    Have an idea? Let&apos;s build it the right way.
                                </h2>
                                <p className="mt-1.5 text-[14.5px] text-white/85">
                                    Get a clear plan, timeline and estimate within 24 hours.
                                </p>
                            </div>
                            <div className="flex shrink-0 flex-wrap justify-center gap-3">
                                <Link
                                    href="/get-a-quote"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-[14px] font-bold text-slate-900 shadow-[0_4px_0_#c7d2fe,0_10px_20px_-6px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_0_#c7d2fe,0_14px_24px_-6px_rgba(0,0,0,0.4)] active:translate-y-1 active:shadow-[0_1px_0_#c7d2fe]"
                                >
                                    Get a free quote <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-[14px] font-semibold text-white shadow-[0_4px_0_rgba(30,12,80,0.45)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/20 active:translate-y-1 active:shadow-none"
                                >
                                    See our work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </main>
    );
}
