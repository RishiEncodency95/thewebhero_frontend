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
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white px-4 py-20 text-center">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 text-purple-600">
                    <FolderSearch className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">No projects match those filters</h3>
                <p className="mx-auto mb-7 max-w-md text-sm leading-relaxed text-slate-600">
                    Try removing a filter or searching for a different keyword — or tell us what you want to build.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    <button
                        onClick={onResetFilters}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                        <RotateCcw className="h-4 w-4" />
                        Clear all filters
                    </button>
                    <Link
                        href="/get-a-quote"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                    >
                        Discuss your project
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
                <PortfolioCard key={project.slug} project={project} index={index} onQuickView={onQuickView} />
            ))}
        </div>
    );
}
