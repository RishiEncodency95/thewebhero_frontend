'use client';

import React, { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';
import BlogCard, { formatBlogDate } from './BlogCard';
import BlogCover from './BlogCover';
import NewsletterSignup from './NewsletterSignup';

interface BlogExplorerProps {
    posts: ResourceItem[];
    popular: ResourceItem[];
}

const ALL = 'All Posts';
const PAGE_SIZE = 6;

/** Blog listing: category pills, search, paginated grid and sidebar. */
export default function BlogExplorer({ posts, popular }: BlogExplorerProps) {
    const [category, setCategory] = useState(ALL);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const gridTop = useRef<HTMLDivElement>(null);

    const categories = useMemo(() => {
        const counts = new Map<string, number>();
        posts.forEach((p) => p.category && counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
        return [{ name: ALL, count: posts.length }, ...Array.from(counts, ([name, count]) => ({ name, count }))];
    }, [posts]);

    const q = query.trim().toLowerCase();
    const filtered = posts.filter((post) => {
        if (category !== ALL && post.category !== category) return false;
        if (!q) return true;
        return [post.title, post.excerpt, post.category, ...(post.topics ?? [])]
            .filter(Boolean)
            .some((field) => field!.toLowerCase().includes(q));
    });

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const current = Math.min(page, totalPages);
    const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

    const selectCategory = (name: string) => {
        setCategory(name);
        setPage(1);
    };
    const search = (value: string) => {
        setQuery(value);
        setPage(1);
    };
    const goTo = (n: number) => {
        setPage(n);
        gridTop.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const searchBox = (
        <label className="relative block">
            <span className="sr-only">Search articles</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
                type="search"
                value={query}
                onChange={(e) => search(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-10 text-sm text-slate-900 shadow-[0_4px_20px_rgba(15,40,90,0.04)] outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            />
            {query && (
                <button
                    type="button"
                    onClick={() => search('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                    <X className="h-3.5 w-3.5" />
                </button>
            )}
        </label>
    );

    const pageBtn = 'flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-sm font-semibold transition-colors';

    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main column */}
            <div ref={gridTop} className="min-w-0 scroll-mt-24">
                <div className="mb-4 lg:hidden">{searchBox}</div>

                <div className="-mx-1 mb-6 flex gap-2.5 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Filter by category">
                    {categories.map(({ name }) => {
                        const active = name === category;
                        return (
                            <button
                                key={name}
                                type="button"
                                role="tab"
                                aria-selected={active}
                                onClick={() => selectCategory(name)}
                                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                                    active
                                        ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25'
                                        : 'border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:text-blue-600'
                                }`}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>

                {visible.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {visible.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                        <p className="text-base font-semibold text-slate-900">No articles found.</p>
                        <p className="mt-1 text-sm text-slate-500">Try a different keyword or category.</p>
                        <button
                            type="button"
                            onClick={() => {
                                selectCategory(ALL);
                                setQuery('');
                            }}
                            className="mt-5 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-600"
                        >
                            Clear filters
                        </button>
                    </div>
                )}

                {totalPages > 1 && (
                    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
                        <button
                            type="button"
                            onClick={() => goTo(current - 1)}
                            disabled={current === 1}
                            aria-label="Previous page"
                            className={`${pageBtn} border-slate-200 bg-white text-slate-700 hover:border-blue-300 disabled:cursor-not-allowed disabled:opacity-40`}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                            <button
                                key={n}
                                type="button"
                                onClick={() => goTo(n)}
                                aria-current={n === current ? 'page' : undefined}
                                className={`${pageBtn} ${
                                    n === current
                                        ? 'border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/25'
                                        : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600'
                                }`}
                            >
                                {n}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => goTo(current + 1)}
                            disabled={current === totalPages}
                            aria-label="Next page"
                            className={`${pageBtn} border-slate-200 bg-white text-slate-700 hover:border-blue-300 disabled:cursor-not-allowed disabled:opacity-40`}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </nav>
                )}

                {/* Project CTA */}
                <div className="relative mt-10 overflow-hidden rounded-2xl bg-[radial-gradient(ellipse_at_80%_120%,#2563eb_0%,#0c1a42_55%,#060c1f_100%)] p-7 sm:p-9">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_80%_80%,#000_15%,transparent_70%)]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" aria-hidden="true" />
                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-lg">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-300">Work with TheWebHero</p>
                            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                                Have a project in mind?
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                From web apps to mobile and cloud — our engineers can help you plan, build and scale it.
                            </p>
                        </div>
                        <div className="flex shrink-0 flex-wrap gap-3">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 transition-colors hover:bg-blue-500"
                            >
                                Get a Free Quote
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
                <div className="hidden lg:block">{searchBox}</div>

                <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,40,90,0.04)]">
                    <h3 className="mb-3 text-lg font-semibold text-slate-900">Categories</h3>
                    <ul className="space-y-1">
                        {categories.map(({ name, count }) => {
                            const active = name === category;
                            return (
                                <li key={name}>
                                    <button
                                        type="button"
                                        onClick={() => selectCategory(name)}
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                                            active ? 'bg-blue-50 font-semibold text-blue-700' : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        {name}
                                        <span
                                            className={`min-w-6 rounded-full px-1.5 py-0.5 text-center text-[11px] font-semibold ${
                                                active ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                                            }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {popular.length > 0 && (
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,40,90,0.04)]">
                        <h3 className="mb-4 text-lg font-semibold text-slate-900">Popular Posts</h3>
                        <ul className="space-y-4">
                            {popular.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3.5"
                                    >
                                        <BlogCover post={post} size="thumb" className="h-14 w-[70px] shrink-0 rounded-lg" />
                                        <span className="min-w-0">
                                            <span className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-blue-600">
                                                {post.title}
                                            </span>
                                            <time dateTime={post.publishedAt} className="mt-1 block text-xs text-slate-500">
                                                {formatBlogDate(post.publishedAt)}
                                            </time>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <NewsletterSignup />
            </aside>
        </div>
    );
}
