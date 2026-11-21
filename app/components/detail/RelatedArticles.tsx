import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';
import BlogCard from '../blog/BlogCard';
import { SectionHeading } from './SectionHeading';

/** Blog posts linked to the current page, so readers (and search engines) can reach the guides from it. */
export default function RelatedArticles({ accent, posts }: { accent: string; posts: ResourceItem[] }) {
    if (!posts.length) return null;
    return (
        <section className="bg-white py-8 lg:py-12">
            <div className="relative w-full px-4 sm:px-6 lg:px-20">
                <SectionHeading eyebrow="Guides & Insights" lead="Helpful Articles on" accent={accent} center />
                <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <BlogCard post={post} />
                        </li>
                    ))}
                </ul>
                <div className="mt-8 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-700 hover:text-purple-900">
                        View all articles <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
