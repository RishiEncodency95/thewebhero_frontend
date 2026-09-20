'use client';

import React from 'react';
import { FolderSearch, RotateCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PortfolioItem } from '../../types/portfolio';
import PortfolioCard from './PortfolioCard';

interface PortfolioGridProps {
    projects: PortfolioItem[];
    onQuickView: (project: PortfolioItem) => void;
    onResetFilters: () => void;
}

export default function PortfolioGrid({ projects, onQuickView, onResetFilters }: PortfolioGridProps) {
    if (projects.length === 0) {
        return (
            <div className="py-20 px-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#1769FF] mb-4">
                    <FolderSearch className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                    No Projects Found
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm mb-6 leading-relaxed">
                    No portfolio projects match your selected filter criteria. Try clearing some filters or searching for another keyword.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={onResetFilters}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1769FF] text-white font-semibold text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-md"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span>Clear All Filters</span>
                    </button>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-colors"
                    >
                        <span>Explore Our Services</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
                <PortfolioCard
                    key={project.slug}
                    project={project}
                    onQuickView={onQuickView}
                />
            ))}
        </div>
    );
}
