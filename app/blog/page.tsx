import React from 'react';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { getResourcesByType } from '../lib/resources';
import ResourcesBreadcrumb from '../components/resources/ResourcesBreadcrumb';
import BlogCard from '../components/blog/BlogCard';

export const metadata: Metadata = {
    title: 'Blog | TheWebHero',
    description:
        'Technical insights, engineering best practices, web architecture and mobile development articles from the TheWebHero team.',
    alternates: { canonical: 'https://thewebhero.ai/blog' },
};

export default function BlogPage() {
    // Newest first.
    const posts = [...getResourcesByType('blog')].sort((a, b) =>
        (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '')
    );

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff] pb-10 pt-8 lg:pb-12">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_40%,transparent_100%)]"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

                <div className="relative w-full px-4 lg:px-10">
                    <ResourcesBreadcrumb items={[{ label: 'Blog' }]} />

                    <div className="mt-2 max-w-3xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1.5 shadow-sm">
                            <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">TheWebHero Blog</span>
                        </div>
                        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                            Insights from our{' '}
                            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                engineering team
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Practical articles on web architecture, mobile development, APIs and security — lessons
                            from the products we build.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section className="w-full px-4 pb-16 lg:px-10 lg:pb-20">
                <div className="mb-6 flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Latest articles</h2>
                    <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                        {posts.length} article{posts.length !== 1 ? 's' : ''}
                    </span>
                </div>

                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
