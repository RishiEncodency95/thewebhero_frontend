'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import faqArt from '@/app/assets/home/Resources/resources.webp';
import BlogCover from '../blog/BlogCover';
import type { ResourceItem } from '../../types/resource';
import type { FaqEntry } from '../../lib/cms/content';
import {
    ArrowRight, ArrowLeft, ChevronDown,
    Calendar, Clock, BookOpen, HelpCircle,
} from 'lucide-react';

/* ------------------------------------------------------------------ data -- */

const ARTICLE_STYLES = [
    { chip: 'bg-blue-50 text-blue-700', dot: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white' },
    { chip: 'bg-fuchsia-50 text-fuchsia-700', dot: 'bg-fuchsia-50 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white' },
    { chip: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white' },
];

const formatDate = (iso?: string) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';

interface HomeArticlesFaqProps {
    posts: ResourceItem[];
    faqs: FaqEntry[];
}

/* --------------------------------------------------------------- section -- */

/** Latest blog posts + home FAQs, both from the CMS. */
export default function HomeArticlesFaqPartners({ posts, faqs: faqEntries }: HomeArticlesFaqProps) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const articles = posts.slice(0, 3).map((p, i) => ({
        post: p,
        title: p.title,
        excerpt: p.excerpt ?? p.description ?? '',
        category: p.category,
        date: formatDate(p.publishedAt),
        readTime: p.readingTime ?? '',
        image: p.coverImage,
        href: `/blog/${p.slug}`,
        ...ARTICLE_STYLES[i % ARTICLE_STYLES.length],
    }));
    const faqs = faqEntries.map((f) => ({ q: f.question, a: f.answer }));

    return (
        <section className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-br from-white via-slate-50/70 to-blue-50/40 py-2 lg:py-6 text-slate-900">
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

                    {/* ================= LEFT — Articles ================= */}
                    <div className="lg:col-span-6">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-blue-700">
                                    <BookOpen className="h-4 w-4" aria-hidden="true" />
                                    Resources
                                </div>

                                <h2 className="mt-3 text-lg lg:text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#0b1020] sm:text-[34px]">
                                    Latest Insights &amp;{' '}
                                    <span className="relative inline-block text-[#2563eb]">
                                        Resources
                                        <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#2563eb]/70" />
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-slate-600">
                                    Explore expert insights, industry trends, tutorials, and resources
                                    to help you stay ahead in the digital world.
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                <Link
                                    href="/blog"
                                    className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2563eb] hover:text-blue-700"
                                >
                                    View All Articles
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                </Link>

                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        aria-label="Previous articles"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-[#2563eb]"
                                    >
                                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        aria-label="Next articles"
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-[#2563eb]"
                                    >
                                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* One panel, split by hairlines — matches the reference */}
                        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-14px_rgba(20,40,90,0.18)]">
                            <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                                {articles.map((art) => (
                                    <article key={art.title} className="group relative flex h-full flex-col p-4">
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                                            {art.image ? (
                                                <Image
                                                    src={art.image}
                                                    alt=""
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, 18vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            ) : (
                                                <BlogCover post={art.post} className="h-full w-full" />
                                            )}
                                        </div>

                                        <span className={`mt-3 w-fit max-w-full whitespace-nowrap rounded-full px-3 py-1 text-[12px] font-semibold ${art.chip}`}>
                                            {art.category}
                                        </span>

                                        <h3 className="mt-3 text-[16px] font-bold leading-snug text-[#0b1020]">
                                            <Link href={art.href} className="after:absolute after:inset-0 group-hover:text-[#2563eb]">
                                                {art.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-2.5 text-[14px] leading-[1.6] text-slate-500">
                                            {art.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 pt-5 text-[12px] font-medium text-slate-500">
                                            <span className="inline-flex items-center gap-1">
                                                <Calendar className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                                                {art.date}
                                            </span>
                                            <span className="text-slate-300">|</span>
                                            <span className="inline-flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                                                {art.readTime}
                                            </span>
                                            <span className={`ml-auto flex h-8 w-8 items-center justify-center rounded-full transition-colors ${art.dot}`}>
                                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ================= RIGHT — FAQ ================= */}
                    <div className="lg:col-span-6">
                        <div className="flex gap-6">
                            <div className="min-w-0 flex-1">
                                <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-fuchsia-700">
                                    <HelpCircle className="h-4 w-4" aria-hidden="true" />
                                    FAQ
                                </div>

                                <h2 className="mt-3 text-lg lg:text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#0b1020] sm:text-[34px]">
                                    Frequently Asked{' '}
                                    <span className="relative inline-block text-[#8b3dff]">
                                        Questions
                                        <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-[#8b3dff]/70" />
                                    </span>
                                </h2>

                                <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-slate-600">
                                    Find quick answers to common questions about our services,
                                    process, and support.
                                </p>

                                <div className="mt-6 space-y-2.5">
                                    {faqs.map((faq, idx) => {
                                        const isOpen = openFaq === idx;
                                        const num = String(idx + 1).padStart(2, '0');

                                        return (
                                            <div
                                                key={faq.q}
                                                className="overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_-10px_rgba(20,40,90,0.25)]"
                                            >
                                                <h3>
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                                        aria-expanded={isOpen}
                                                        aria-controls={`faq-panel-${idx}`}
                                                        className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
                                                    >
                                                        <span
                                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold transition-colors ${isOpen ? 'bg-[#2563eb] text-white' : 'bg-blue-50 text-blue-600'
                                                                }`}
                                                            aria-hidden="true"
                                                        >
                                                            {num}
                                                        </span>

                                                        <span className="flex-1 text-[15px] font-semibold text-[#0b1020]">
                                                            {faq.q}
                                                        </span>

                                                        <ChevronDown
                                                            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#2563eb]' : ''}`}
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </h3>

                                                {isOpen && (
                                                    <div id={`faq-panel-${idx}`} className="px-4 pb-4">
                                                        <p className="rounded-lg bg-blue-50/70 px-4 py-3 text-[14px] leading-[1.6] text-slate-600">
                                                            {faq.a}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Decorative aside — 3D "have a question?" artwork */}
                            <div className="relative hidden w-44 shrink-0 items-end xl:flex" aria-hidden="true">
                                <Image
                                    src={faqArt}
                                    alt=""
                                    sizes="176px"
                                    className="h-auto max-h-full w-full object-contain object-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
