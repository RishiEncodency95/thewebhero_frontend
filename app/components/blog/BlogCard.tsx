import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
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
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(35,75,125,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_1px_2px_rgba(15,23,42,0.04),0_22px_44px_-16px_rgba(35,75,125,0.28)]">
            <div className="relative">
                <BlogCover post={post} className="aspect-[2/1] rounded-[16px]" />
                {post.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur-md">
                        {post.category}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
                <div className="flex items-center gap-2 text-[12.5px] text-slate-500">
                    <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    {post.readingTime && (
                        <>
                            <span className="h-1 w-1 rounded-full bg-slate-300" />
                            <span>{post.readingTime}</span>
                        </>
                    )}
                </div>

                <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-purple-700">
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
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-slate-500">{post.excerpt}</p>
                )}

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                    <div className="flex min-w-0 items-center gap-2.5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-[10.5px] font-bold text-white">
                            TW
                        </span>
                        <span className="truncate text-[13px] font-medium text-slate-700">
                            {post.author?.name ?? 'TheWebHero'}
                        </span>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-all duration-300 group-hover:border-transparent group-hover:bg-slate-900 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                </div>
            </div>
        </article>
    );
}
