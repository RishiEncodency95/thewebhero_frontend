'use client';

import React, { useState } from 'react';
import { Search, X, SlidersHorizontal, RotateCcw, ChevronDown } from 'lucide-react';
import { PortfolioFilterState } from '../../types/portfolio';

type SelectKey = 'service' | 'technology' | 'industry';

interface PortfolioFiltersProps {
    filters: PortfolioFilterState;
    availableFilters: {
        services: string[];
        technologies: string[];
        industries: string[];
        projectTypes: string[];
    };
    /** Number of projects per project type, used for the tab counts. */
    typeCounts: Record<string, number>;
    totalProjects: number;
    onFilterChange: (newFilters: PortfolioFilterState) => void;
    onResetFilters: () => void;
    totalResults: number;
}

/** Shorter tab labels for the long project-type names in the data file. */
const TYPE_LABEL: Record<string, string> = {
    'Admin Panel / Internal Tool': 'Admin Panels',
    'Web Application': 'Web Apps',
    'Mobile Application': 'Mobile Apps',
};

export default function PortfolioFilters({
    filters,
    availableFilters,
    typeCounts,
    totalProjects,
    onFilterChange,
    onResetFilters,
    totalResults,
}: PortfolioFiltersProps) {
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    const selects: { key: SelectKey; label: string; allLabel: string; options: string[] }[] = [
        { key: 'service', label: 'Service', allLabel: 'All Services', options: availableFilters.services },
        { key: 'technology', label: 'Technology', allLabel: 'All Technologies', options: availableFilters.technologies },
        { key: 'industry', label: 'Industry', allLabel: 'All Industries', options: availableFilters.industries },
    ];

    const activeSelects = selects.filter((s) => filters[s.key] !== 'All');
    const activeFiltersCount =
        (filters.searchQuery.trim() !== '' ? 1 : 0) +
        (filters.projectType !== 'All' ? 1 : 0) +
        activeSelects.length;

    const update = (key: keyof PortfolioFilterState, value: string) => {
        onFilterChange({ ...filters, [key]: value });
    };

    const tabs = [
        { value: 'All', label: 'All Work', count: totalProjects },
        ...availableFilters.projectTypes.map((type) => ({
            value: type,
            label: TYPE_LABEL[type] ?? type,
            count: typeCounts[type] ?? 0,
        })),
    ];

    return (
        <div className="sticky  z-30 border-y border-slate-200/80 bg-white/85 backdrop-blur-xl">
            <div className="w-full px-4 py-3 sm:px-6 lg:px-20">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    {/* Project-type tabs */}
                    <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:shrink-0 [&::-webkit-scrollbar]:hidden">
                        <div role="tablist" aria-label="Filter by project type" className="inline-flex min-w-max gap-1 rounded-full border border-slate-200 bg-slate-100/80 p-1">
                            {tabs.map((tab) => {
                                const active = filters.projectType === tab.value;
                                return (
                                    <button
                                        key={tab.value}
                                        role="tab"
                                        aria-selected={active}
                                        onClick={() => update('projectType', tab.value)}
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${active
                                                ? 'bg-slate-900 text-white shadow-md'
                                                : 'text-slate-600 hover:bg-white hover:text-slate-900'
                                            }`}
                                    >
                                        {tab.label}
                                        <span
                                            className={`rounded-full px-1.5 py-px text-[11px] font-bold ${active ? 'bg-white/20 text-white' : 'bg-white text-slate-500'
                                                }`}
                                        >
                                            {tab.count}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Search + refine */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1 lg:w-60 2xl:w-52 lg:flex-none">
                            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="search"
                                value={filters.searchQuery}
                                onChange={(e) => update('searchQuery', e.target.value)}
                                placeholder="Search projects, tech…"
                                aria-label="Search projects"
                                className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-100 [&::-webkit-search-cancel-button]:hidden"
                            />
                            {filters.searchQuery && (
                                <button
                                    onClick={() => update('searchQuery', '')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    aria-label="Clear search"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Desktop selects */}
                        <div className="hidden items-center gap-2 2xl:flex">
                            {selects.map((s) => {
                                const active = filters[s.key] !== 'All';
                                return (
                                    <div key={s.key} className="relative">
                                        <select
                                            value={filters[s.key]}
                                            onChange={(e) => update(s.key, e.target.value)}
                                            aria-label={`Filter by ${s.label}`}
                                            className={`max-w-[150px] cursor-pointer appearance-none truncate rounded-full border py-2.5 pl-4 pr-9 text-[13px] font-semibold transition-all focus:outline-none focus:ring-4 focus:ring-purple-100 ${active
                                                    ? 'border-purple-300 bg-purple-50 text-purple-700'
                                                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                                }`}
                                        >
                                            <option value="All">{s.allLabel}</option>
                                            {s.options.map((o) => (
                                                <option key={o} value={o}>{o}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Drawer trigger below 2xl */}
                        <button
                            type="button"
                            onClick={() => setIsMobileDrawerOpen(true)}
                            aria-label={activeSelects.length > 0 ? `Filters (${activeSelects.length} active)` : 'Filters'}
                            className="relative inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:border-slate-300 2xl:hidden"
                        >
                            <SlidersHorizontal className="h-4 w-4" />
                            <span className="hidden sm:inline">Filters</span>
                            {activeSelects.length > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-[10px] font-bold text-white">
                                    {activeSelects.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Active filters */}
                {activeFiltersCount > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3 text-xs">
                        <span className="font-medium text-slate-500">
                            Showing <strong className="font-semibold text-slate-900">{totalResults}</strong> of {totalProjects}
                        </span>
                        {activeSelects.map((s) => (
                            <span key={s.key} className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 font-medium text-purple-700">
                                {s.label}: {filters[s.key]}
                                <button onClick={() => update(s.key, 'All')} className="hover:text-purple-900" aria-label={`Remove ${s.label} filter`}>
                                    <X className="h-3 w-3" />
                                </button>
                            </span>
                        ))}
                        <button
                            onClick={onResetFilters}
                            className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        >
                            <RotateCcw className="h-3.5 w-3.5" />
                            Clear all
                        </button>
                    </div>
                )}
            </div>

            {/* Filter drawer (below xl) */}
            {isMobileDrawerOpen && (
                <div
                    className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm 2xl:hidden"
                    onClick={() => setIsMobileDrawerOpen(false)}
                >
                    <div
                        className="flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Filter projects"
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 p-5">
                            <div className="flex items-center gap-2">
                                <SlidersHorizontal className="h-5 w-5 text-purple-600" />
                                <h3 className="text-base font-bold text-slate-900">Filter Projects</h3>
                            </div>
                            <button
                                onClick={() => setIsMobileDrawerOpen(false)}
                                className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                                aria-label="Close filters"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="flex-1 space-y-6 overflow-y-auto p-5">
                            {selects.map((s) => (
                                <fieldset key={s.key}>
                                    <legend className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500">{s.label}</legend>
                                    <div className="flex flex-wrap gap-2">
                                        {['All', ...s.options].map((o) => {
                                            const active = filters[s.key] === o;
                                            return (
                                                <button
                                                    key={o}
                                                    onClick={() => update(s.key, o)}
                                                    className={`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${active
                                                            ? 'border-slate-900 bg-slate-900 text-white'
                                                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                                                        }`}
                                                >
                                                    {o === 'All' ? s.allLabel : o}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </fieldset>
                            ))}
                        </div>

                        <div className="space-y-2 border-t border-slate-200 bg-slate-50 p-5">
                            <button
                                onClick={() => setIsMobileDrawerOpen(false)}
                                className="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-3 text-sm font-semibold text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/30"
                            >
                                Show {totalResults} project{totalResults !== 1 ? 's' : ''}
                            </button>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={() => {
                                        onResetFilters();
                                        setIsMobileDrawerOpen(false);
                                    }}
                                    className="w-full py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:text-slate-900"
                                >
                                    Reset all filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
