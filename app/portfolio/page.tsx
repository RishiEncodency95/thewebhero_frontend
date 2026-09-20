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
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioQuickView from '../components/portfolio/PortfolioQuickView';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

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

    const availableFilters = useMemo(() => getAvailableFilters(), []);
    const filteredProjects = useMemo(() => getFilteredProjects(filters), [filters]);

    const handleResetFilters = () => {
        setFilters(initialFilters);
    };

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Hero Section */}
            <PortfolioHero />

            {/* Filter & Search Bar */}
            <PortfolioFilters
                filters={filters}
                availableFilters={availableFilters}
                onFilterChange={setFilters}
                onResetFilters={handleResetFilters}
                totalResults={filteredProjects.length}
            />

            {/* Main Portfolio Project Grid */}
            <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PortfolioGrid
                    projects={filteredProjects}
                    onQuickView={setQuickViewProject}
                    onResetFilters={handleResetFilters}
                />
            </section>

            {/* Portfolio CTA Section */}
            <section className="bg-white border-t border-slate-200/80 py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1769FF] text-xs font-semibold mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>NEED CUSTOM SOFTWARE SOLUTIONS?</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 max-w-2xl mx-auto">
                        Have a Web or Mobile Project in Mind?
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        Let us discuss your project scope, select the optimal tech stack, and deliver customized software solutions tailored to your business goals.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/get-a-quote"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-semibold text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <span>Request a Quote</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
                        >
                            <span>Explore Our Services</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick View Modal */}
            <PortfolioQuickView
                project={quickViewProject}
                onClose={() => setQuickViewProject(null)}
            />
        </main>
    );
}
