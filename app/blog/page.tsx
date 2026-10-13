import React from 'react';
import type { Metadata } from 'next';
import { getResourcesByType } from '../lib/resources';
import ResourcesBreadcrumb from '../components/resources/ResourcesBreadcrumb';
import BlogExplorer from '../components/blog/BlogExplorer';
import BlogHeroArt from '../components/blog/BlogHeroArt';

export const metadata: Metadata = {
    title: 'Blog | TheWebHero',
    description:
        'Latest articles, tutorials and industry insights on web development, mobile apps, technology and digital transformation from the TheWebHero team.',
    alternates: { canonical: 'https://thewebhero.ai/blog' },
};

export default function BlogPage() {
    // Newest first. The grid is client-side, so leave the article bodies out of its payload.
    const posts = [...getResourcesByType('blog')]
        .sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''))
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ content, tableOfContents, ...rest }) => rest);

    // No view stats yet: featured posts first, then newest.
    const popular = [...posts].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="relative overflow-hidden bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60">
                <div className="relative mx-auto grid max-w-7xl items-center px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-8 lg:py-6">
                    <div className="py-2 lg:py-6">
                        <ResourcesBreadcrumb items={[{ label: 'Blog' }]} />

                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-300 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                            <span className="flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-blue-600">
                                <span className="h-1 w-1 rounded-full bg-blue-600" />
                            </span>
                            Our Blog
                        </span>

                        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                            Latest{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Insights &amp; Resources
                            </span>
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                            Explore our latest articles, tutorials, and industry insights on web development, technology,
                            business growth, and digital transformation.
                        </p>
                    </div>

                    <div className="hidden h-[250px] lg:block">
                        <BlogHeroArt />
                    </div>
                </div>
            </section>

            {/* Listing */}
            <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
                <BlogExplorer posts={posts} popular={popular} />
            </section>
        </main>
    );
}
