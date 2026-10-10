import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';
import BlogCover from './BlogCover';

/** "2024-06-15" -> "Jun 15, 2024". */
export function formatBlogDate(date?: string) {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

interface BlogCardProps {
    post: ResourceItem;
}

/** Blog listing card. Opens the article in a new tab. */
export default function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(35,75,125,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_22px_48px_-16px_rgba(35,75,125,0.25)]">
            <BlogCover post={post} className="aspect-[16/9] transition-transform duration-500" />

            <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-medium text-slate-500">
                    {post.category && (
                        <span className="font-semibold uppercase tracking-wider text-purple-600">{post.category}</span>
                    )}
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatBlogDate(post.publishedAt)}
                    </span>
                    {post.readingTime && (
                        <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readingTime}
                        </span>
                    )}
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-purple-700">
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
                    <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-slate-600">{post.excerpt}</p>
                )}

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-6">
                    <span className="truncate text-[13px] font-medium text-slate-500">
                        {post.author?.name ?? 'TheWebHero'}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-slate-900 transition-colors group-hover:text-purple-600">
                        Read article
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                </div>
            </div>
        </article>
    );
}
