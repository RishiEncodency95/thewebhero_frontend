import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BookOpen, PenLine } from 'lucide-react';
import { getBlogPosts } from '../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../lib/cms/seo';
import ResourcesBreadcrumb from '../components/resources/ResourcesBreadcrumb';
import BlogCard from '../components/blog/BlogCard';
import heroArt from '../assets/home/service/soft-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/blog', {
        title: 'Blog | TheWebHero',
        description: 'Technical insights, engineering best practices, web architecture and mobile development articles from the TheWebHero team.',
    });
}

export default async function BlogPage() {
    // Newest first.
    const posts = [...(await getBlogPosts())].sort((a, b) =>
        (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')
    );

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/blog" />
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff] pb-8 pt-6">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_40%,transparent_100%)]"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative w-full px-4 lg:px-10">
                    <ResourcesBreadcrumb items={[{ label: 'Blog' }]} />

                    <div className="-mt-2 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
                        <div className="max-w-3xl md:col-span-8 lg:col-span-8">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1 shadow-sm">
                                <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">TheWebHero Blog</span>
                            </div>
                            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[44px]">
                                Insights from our{' '}
                                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                    engineering team
                                </span>
                            </h1>
                            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                                Practical articles on web architecture, mobile development, APIs and security — lessons
                                from the products we build.
                            </p>
                        </div>

                        {/* Hero art */}
                        <div className="relative ml-auto mr-4 hidden w-full max-w-[300px] md:col-span-4 md:block">
                            <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-blue-200/60 via-purple-200/50 to-pink-200/60 blur-2xl" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-[22px] border-4 border-white shadow-[0_24px_50px_-18px_rgba(30,41,99,0.45)] lg:rotate-[1.5deg]">
                                <Image
                                    src={heroArt}
                                    alt="Developer workspace with code on screen"
                                    sizes="300px"
                                    className="h-auto w-full"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>

                            <div className="absolute -bottom-3 -left-10 flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-50 text-purple-600">
                                    <PenLine className="h-4 w-4" />
                                </span>
                                <span>
                                    <span className="block text-[12px] font-bold text-slate-900">Written by engineers</span>
                                    <span className="block text-[10.5px] font-medium text-slate-500">Lessons from real projects</span>
                                </span>
                            </div>
                            <div className="absolute -right-4 -top-3 flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
                                <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                                <span className="text-[12px] font-bold text-slate-900">Web · Mobile · APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="w-full px-4 pb-14 lg:px-10 lg:pb-16">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Latest articles</h2>
                    <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                        {posts.length} article{posts.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                ) : (
                    <p className="rounded-[24px] border border-dashed border-slate-300 bg-white px-4 py-16 text-center text-slate-500">
                        New articles are on the way. Check back soon.
                    </p>
                )}
            </section>
        </main>
    );
}
