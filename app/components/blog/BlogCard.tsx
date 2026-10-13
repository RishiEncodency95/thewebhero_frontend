import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';
import BlogCover from './BlogCover';

/** "2024-06-15" -> "Jun 15, 2024". */
export function formatBlogDate(date?: string) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

const BADGE_COLORS = [
    'bg-blue-50 text-blue-700',
    'bg-purple-50 text-purple-700',
    'bg-sky-50 text-sky-700',
    'bg-pink-50 text-pink-700',
    'bg-amber-50 text-amber-700',
    'bg-emerald-50 text-emerald-700',
];

/** Stable badge colour per category name. */
export function categoryBadgeClass(category: string) {
    let hash = 0;
    for (const ch of category) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return BADGE_COLORS[hash % BADGE_COLORS.length];
}

interface BlogCardProps {
    post: ResourceItem;
}

/** Blog listing card. Opens the article in a new tab. */
export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_4px_20px_rgba(15,40,90,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(23,105,255,0.25)]">
            <BlogCover post={post} className="aspect-[16/9]" />

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center justify-between gap-3">
                    {post.category && (
                        <span className={`truncate rounded-full px-2.5 py-1 text-[11px] font-semibold ${categoryBadgeClass(post.category)}`}>
                            {post.category}
                        </span>
                    )}
                    <time dateTime={post.publishedAt} className="shrink-0 text-xs text-slate-500">
                        {formatBlogDate(post.publishedAt)}
                    </time>
                </div>

                <h3 className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                    {/* Stretched link: the whole card opens the article in a new tab. */}
                    <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="after:absolute after:inset-0 focus:outline-none"
                    >
                        {post.title}
                    </Link>
                </h3>

                {post.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue-600">
                    Read More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
            </div>
        </article>
    );
}
