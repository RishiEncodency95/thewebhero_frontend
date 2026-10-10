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
                    <div className=" mb-2 lg:mb-6">
                        <PortfolioSpotlight project={spotlight} onQuickView={setQuickViewProject} />
                    </div>
                )}

                {gridProjects.length > 0 && (
                    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
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
            <section className="w-full px-4 pb-2 lg:px-10 lg:pb-6">
                <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[24px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:py-6">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_left,#000_20%,transparent_70%)]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-[480px] rounded-full bg-gradient-to-r from-pink-500/35 via-purple-500/35 to-blue-500/35 blur-[90px]" aria-hidden="true" />

                    <div className="relative flex items-center gap-4">
                        <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-[0_8px_24px_rgba(168,85,247,0.45)] sm:flex">
                            <Sparkles className="h-5 w-5" />
                        </span>
                        <div>
                            <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                Have a web or mobile product in mind?
                            </h2>
                            <p className="mt-1 text-sm text-slate-300">
                                Tell us your idea — we&apos;ll shape the scope, pick the stack and ship it.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex w-full shrink-0 flex-wrap items-center gap-3 sm:w-auto">
                        <Link
                            href="/get-a-quote"
                            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(168,85,247,0.55)] sm:flex-none"
                        >
                            Request a Quote
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:flex-none"
                        >
                            <MessageSquareText className="h-4 w-4" />
                            Our Services
                        </Link>
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
