'use client';

import React, { useState, useMemo } from 'react';
import {
    getAllProjects,
    getFilteredProjects,
    getAvailableFilters,
} from '../lib/portfolio';
import { PortfolioItem, PortfolioFilterState } from '../types/portfolio';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioFilters from '../components/portfolio/PortfolioFilters';
import PortfolioSpotlight from '../components/portfolio/PortfolioSpotlight';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioQuickView from '../components/portfolio/PortfolioQuickView';
import Link from 'next/link';
import { ArrowRight, Sparkles, MessageSquareText } from 'lucide-react';

const initialFilters: PortfolioFilterState = {
    searchQuery: '',
    service: 'All',
    technology: 'All',
    industry: 'All',
    projectType: 'All',
};

export default function PortfolioPage() {
    const [filters, setFilters] = useState<PortfolioFilterState>(initialFilters);
    const [quickViewProject, setQuickViewProject] = useState<PortfolioItem | null>(null);

    const allProjects = useMemo(() => getAllProjects(), []);
    const availableFilters = useMemo(() => getAvailableFilters(), []);
    const filteredProjects = useMemo(() => getFilteredProjects(filters), [filters]);

    const typeCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        allProjects.forEach((p) => {
            counts[p.projectType] = (counts[p.projectType] ?? 0) + 1;
        });
        return counts;
    }, [allProjects]);

    const isUnfiltered =
        filters.searchQuery.trim() === '' &&
        filters.service === 'All' &&
        filters.technology === 'All' &&
        filters.industry === 'All' &&
        filters.projectType === 'All';

    // With no filters, lead with the first featured project as a spotlight
    // and list the rest below it.
    const spotlight = isUnfiltered ? allProjects.find((p) => p.featured) : undefined;
    const gridProjects = spotlight
        ? filteredProjects.filter((p) => p.slug !== spotlight.slug)
        : filteredProjects;

    const handleResetFilters = () => {
        setFilters(initialFilters);
    };

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PortfolioHero />

            <PortfolioFilters
                filters={filters}
                availableFilters={availableFilters}
                typeCounts={typeCounts}
                totalProjects={allProjects.length}
                onFilterChange={setFilters}
                onResetFilters={handleResetFilters}
                totalResults={filteredProjects.length}
            />

            <section id="projects" className="w-full px-4 py-2 lg:px-10 lg:py-6">
                {spotlight && (
                    <div className="mb-16 lg:mb-20">
                        <PortfolioSpotlight project={spotlight} onQuickView={setQuickViewProject} />
                    </div>
                )}

                {gridProjects.length > 0 && (
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 sm:mb-10">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                {spotlight ? (
                                    <>
                                        More{' '}
                                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                            selected work
                                        </span>
                                    </>
                                ) : (
                                    'Matching projects'
                                )}
                            </h2>
                            <p className="mt-2 text-sm text-slate-500 sm:text-base">
                                Web platforms, mobile apps and internal tools — each one designed and built end to end.
                            </p>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600">
                            {gridProjects.length} project{gridProjects.length !== 1 ? 's' : ''}
                        </span>
                    </div>
                )}

                <PortfolioGrid
                    projects={gridProjects}
                    onQuickView={setQuickViewProject}
                    onResetFilters={handleResetFilters}
                />
            </section>

            {/* CTA */}
            <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
                <div className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 px-6 py-14 text-center sm:px-12 sm:py-20">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-blue-500/40 blur-[100px]" aria-hidden="true" />

                    <div className="relative">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-200">
                            <Sparkles className="h-3.5 w-3.5" />
                            Your project could be next
                        </div>

                        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Have a web or mobile product in mind?
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                            Tell us about your idea. We&apos;ll help shape the scope, pick the right tech stack
                            and ship a product your customers love.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(168,85,247,0.55)] sm:text-base"
                            >
                                Request a Quote
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:text-base"
                            >
                                <MessageSquareText className="h-4 w-4" />
                                Explore Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <PortfolioQuickView
                project={quickViewProject}
                onClose={() => setQuickViewProject(null)}
            />
        </main>
    );
}
