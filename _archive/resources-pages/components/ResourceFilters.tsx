'use client';

import React from 'react';
import { Search, X, RotateCcw } from 'lucide-react';
import { ResourceFilterState } from '../../types/resource';

interface ResourceFiltersProps {
    filters: ResourceFilterState;
    onFilterChange: (newFilters: ResourceFilterState) => void;
    onResetFilters: () => void;
    totalResults: number;
    showTypeFilter?: boolean;
}

export default function ResourceFilters({
    filters,
    onFilterChange,
    onResetFilters,
    totalResults,
    showTypeFilter = true,
}: ResourceFiltersProps) {
    const activeCount =
        (filters.searchQuery.trim() !== '' ? 1 : 0) +
        (filters.type !== 'All' ? 1 : 0) +
        (filters.topic !== 'All' ? 1 : 0);

    const handleChange = (key: keyof ResourceFilterState, value: string) => {
        onFilterChange({
            ...filters,
            [key]: value,
        });
    };

    return (
        <div className="bg-white border-b border-slate-200 py-4 mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-lg">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Search className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            value={filters.searchQuery}
                            onChange={(e) => handleChange('searchQuery', e.target.value)}
                            placeholder="Search resources, topics, or keywords..."
                            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white transition-all"
                        />
                        {filters.searchQuery && (
                            <button
                                onClick={() => handleChange('searchQuery', '')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                                aria-label="Clear search input"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center flex-wrap gap-3">
                        {showTypeFilter && (
                            <select
                                value={filters.type}
                                onChange={(e) => handleChange('type', e.target.value)}
                                className="pl-3.5 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                                aria-label="Filter by Resource Type"
                            >
                                <option value="All">All Resource Types</option>
                                <option value="blog">Blog Articles</option>
                                <option value="guide">Guides</option>
                                <option value="tutorial">Code Tutorials</option>
                                <option value="faq">FAQs</option>
                                <option value="whitepaper">Whitepapers</option>
                                <option value="ebook">eBooks</option>
                                <option value="webinar">Webinars</option>
                                <option value="glossary">Glossary Terms</option>
                            </select>
                        )}

                        {activeCount > 0 && (
                            <button
                                onClick={onResetFilters}
                                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Reset Filters</span>
                            </button>
                        )}

                        <span className="text-xs text-slate-400 ml-auto">
                            Found <strong className="text-slate-800 font-bold">{totalResults}</strong> result{totalResults !== 1 ? 's' : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
