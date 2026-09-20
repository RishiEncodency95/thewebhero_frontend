'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, BookOpen, GraduationCap, FileText, HelpCircle, Download, Video, Layers } from 'lucide-react';
import { ResourceItem } from '../../types/resource';

interface ResourceCardProps {
    resource: ResourceItem;
    variant?: 'standard' | 'featured' | 'compact' | 'search';
}

const typeIconMap = {
    blog: BookOpen,
    guide: FileText,
    tutorial: GraduationCap,
    faq: HelpCircle,
    whitepaper: Download,
    ebook: Download,
    webinar: Video,
    glossary: Layers,
};

const typeBadgeStyles = {
    blog: 'bg-blue-600 text-white',
    guide: 'bg-indigo-600 text-white',
    tutorial: 'bg-emerald-600 text-white',
    faq: 'bg-amber-600 text-white',
    whitepaper: 'bg-purple-600 text-white',
    ebook: 'bg-purple-600 text-white',
    webinar: 'bg-rose-600 text-white',
    glossary: 'bg-slate-800 text-white',
};

export default function ResourceCard({ resource, variant = 'standard' }: ResourceCardProps) {
    const IconComponent = typeIconMap[resource.type] || BookOpen;
    const badgeStyle = typeBadgeStyles[resource.type] || 'bg-blue-600 text-white';

    // Helper to compute detail link based on resource type
    const detailHref = `/resources/${resource.type === 'blog' ? 'blog' : resource.type === 'guide' ? 'guides' : resource.type === 'tutorial' ? 'tutorials' : resource.type === 'faq' ? 'faqs' : resource.type === 'whitepaper' ? 'whitepapers' : resource.type === 'ebook' ? 'ebooks' : resource.type === 'webinar' ? 'webinars' : 'glossary'}/${resource.slug}`;

    if (variant === 'featured') {
        return (
            <div className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
                {/* Image Column */}
                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto w-full bg-slate-900 overflow-hidden">
                    {resource.coverImage ? (
                        <Image
                            src={resource.coverImage}
                            alt={resource.coverImageAlt || resource.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-blue-400">
                            <IconComponent className="w-16 h-16 opacity-40" />
                        </div>
                    )}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${badgeStyle}`}>
                            {resource.type}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-slate-900/80 text-slate-200 text-xs font-semibold backdrop-blur-md">
                            {resource.category}
                        </span>
                    </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mb-3">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                                {resource.publishedAt}
                            </span>
                            {resource.readingTime && (
                                <>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                                        {resource.readingTime}
                                    </span>
                                </>
                            )}
                        </div>

                        <Link href={detailHref} className="group-hover:text-[#1769FF] transition-colors">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-3">
                                {resource.title}
                            </h2>
                        </Link>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {resource.excerpt || resource.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-6">
                            {resource.topics.map((topic) => (
                                <span key={topic} className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700">
                                    #{topic}
                                </span>
                            ))}
                        </div>
                    </div>

                    <Link
                        href={detailHref}
                        className="inline-flex items-center gap-2 font-bold text-sm text-[#1769FF] hover:text-blue-700 mt-auto"
                    >
                        <span>Read Featured {resource.type}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
                <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    {resource.coverImage ? (
                        <Image
                            src={resource.coverImage}
                            alt={resource.coverImageAlt || resource.title}
                            fill
                            className="object-cover object-top"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                            <IconComponent className="w-6 h-6" />
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                        {resource.type} • {resource.category}
                    </span>
                    <Link href={detailHref} className="group-hover:text-[#1769FF] transition-colors">
                        <h4 className="text-sm font-bold text-slate-900 truncate">
                            {resource.title}
                        </h4>
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                        {resource.excerpt}
                    </p>
                </div>
            </div>
        );
    }

    // Standard Grid Card Variant
    return (
        <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                {resource.coverImage ? (
                    <Image
                        src={resource.coverImage}
                        alt={resource.coverImageAlt || resource.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-blue-400">
                        <IconComponent className="w-10 h-10 opacity-50" />
                    </div>
                )}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide ${badgeStyle}`}>
                        {resource.type}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-md">
                        {resource.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                        <span>{resource.publishedAt}</span>
                        {resource.readingTime && (
                            <>
                                <span>•</span>
                                <span>{resource.readingTime}</span>
                            </>
                        )}
                    </div>

                    <Link href={detailHref} className="group-hover:text-[#1769FF] transition-colors">
                        <h3 className="text-xl font-extrabold text-slate-900 line-clamp-2 mb-2 leading-snug">
                            {resource.title}
                        </h3>
                    </Link>

                    <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-3">
                        {resource.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {resource.topics.slice(0, 3).map((topic) => (
                            <span key={topic} className="px-2.5 py-1 rounded bg-slate-100 text-xs font-medium text-slate-600">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <Link
                        href={detailHref}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1769FF] hover:text-blue-700"
                    >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
