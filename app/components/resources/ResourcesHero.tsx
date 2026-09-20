import React from 'react';
import Link from 'next/link';
import { Sparkles, Search, ArrowRight, BookOpen, GraduationCap, FileText } from 'lucide-react';
import ResourcesBreadcrumb from './ResourcesBreadcrumb';

interface ResourcesHeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
    showSearchLink?: boolean;
}

export default function ResourcesHero({
    title = 'Resources, Insights & Developer Knowledge',
    subtitle = 'Engineered Guides, Technology Insights, Tutorials & Knowledge Base',
    description = 'Explore technical articles, software engineering guides, code tutorials, FAQs, and developer whitepapers curated by TheWebHero engineering team.',
    showSearchLink = true,
}: ResourcesHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-16 lg:pb-20">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-white/80">
                    <ResourcesBreadcrumb />
                </div>

                <div className="max-w-3xl mt-4">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>KNOWLEDGE & ENGINEERING HUB</span>
                    </div>

                    {/* H1 Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-base sm:text-lg font-medium text-blue-400 mb-4">
                            {subtitle}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                        {description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        {showSearchLink && (
                            <Link
                                href="/resources/search"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <Search className="w-4 h-4" />
                                <span>Search All Resources</span>
                            </Link>
                        )}
                        <Link
                            href="/resources/blog"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            <BookOpen className="w-4 h-4 text-blue-400" />
                            <span>Browse Blog Articles</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
