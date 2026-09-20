'use client';

import React, { useState } from 'react';
import { Search, X, Filter, RotateCcw, ChevronDown } from 'lucide-react';
import { PortfolioFilterState } from '../../types/portfolio';

interface PortfolioFiltersProps {
    filters: PortfolioFilterState;
    availableFilters: {
        services: string[];
        technologies: string[];
        industries: string[];
        projectTypes: string[];
    };
    onFilterChange: (newFilters: PortfolioFilterState) => void;
    onResetFilters: () => void;
    totalResults: number;
}

export default function PortfolioFilters({
    filters,
    availableFilters,
    onFilterChange,
    onResetFilters,
    totalResults,
}: PortfolioFiltersProps) {
    const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

    // Active filters counter (excluding default 'All' and empty search)
    const activeFiltersCount =
        (filters.searchQuery.trim() !== '' ? 1 : 0) +
        (filters.service !== 'All' ? 1 : 0) +
        (filters.technology !== 'All' ? 1 : 0) +
        (filters.industry !== 'All' ? 1 : 0) +
        (filters.projectType !== 'All' ? 1 : 0);

    const handleSelectChange = (key: keyof PortfolioFilterState, value: string) => {
        onFilterChange({
            ...filters,
            [key]: value,
        });
    };

    return (
        <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    {/* Search Input Bar */}
                    <div className="relative flex-1 max-w-lg">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Search className="h-4 w-4" />
                        </div>
                        <input
                            type="text"
                            value={filters.searchQuery}
                            onChange={(e) => handleSelectChange('searchQuery', e.target.value)}
                            placeholder="Search by project name, tech, or industry..."
                            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white transition-all"
                        />
                        {filters.searchQuery && (
                            <button
                                onClick={() => handleSelectChange('searchQuery', '')}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                                aria-label="Clear search input"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        )}
                    </div>

                    {/* Mobile Filter Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={() => setIsMobileDrawerOpen(true)}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors"
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filter Projects</span>
                            {activeFiltersCount > 0 && (
                                <span className="ml-1.5 px-2 py-0.5 text-xs bg-[#1769FF] text-white font-bold rounded-full">
                                    {activeFiltersCount}
                                </span>
                            )}
                        </button>
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={onResetFilters}
                                className="p-2.5 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold"
                                title="Clear all filters"
                            >
                                <RotateCcw className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Desktop Horizontal Filters */}
                    <div className="hidden md:flex items-center flex-wrap gap-3">
                        {/* Service Filter */}
                        <div className="relative">
                            <select
                                value={filters.service}
                                onChange={(e) => handleSelectChange('service', e.target.value)}
                                className={`appearance-none pl-3.5 pr-8 py-2 bg-slate-50 border rounded-xl text-xs font-medium cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#1769FF] ${filters.service !== 'All'
                                        ? 'border-[#1769FF] bg-blue-50/50 text-[#1769FF] font-semibold'
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                    }`}
                                aria-label="Filter by Service"
                            >
                                <option value="All">All Services</option>
                                {availableFilters.services.map((service) => (
                                    <option key={service} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>

                        {/* Technology Filter */}
                        <div className="relative">
                            <select
                                value={filters.technology}
                                onChange={(e) => handleSelectChange('technology', e.target.value)}
                                className={`appearance-none pl-3.5 pr-8 py-2 bg-slate-50 border rounded-xl text-xs font-medium cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#1769FF] ${filters.technology !== 'All'
                                        ? 'border-[#1769FF] bg-blue-50/50 text-[#1769FF] font-semibold'
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                    }`}
                                aria-label="Filter by Technology"
                            >
                                <option value="All">All Technologies</option>
                                {availableFilters.technologies.map((tech) => (
                                    <option key={tech} value={tech}>
                                        {tech}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>

                        {/* Industry Filter */}
                        <div className="relative">
                            <select
                                value={filters.industry}
                                onChange={(e) => handleSelectChange('industry', e.target.value)}
                                className={`appearance-none pl-3.5 pr-8 py-2 bg-slate-50 border rounded-xl text-xs font-medium cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#1769FF] ${filters.industry !== 'All'
                                        ? 'border-[#1769FF] bg-blue-50/50 text-[#1769FF] font-semibold'
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                    }`}
                                aria-label="Filter by Industry"
                            >
                                <option value="All">All Industries</option>
                                {availableFilters.industries.map((ind) => (
                                    <option key={ind} value={ind}>
                                        {ind}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>

                        {/* Project Type Filter */}
                        <div className="relative">
                            <select
                                value={filters.projectType}
                                onChange={(e) => handleSelectChange('projectType', e.target.value)}
                                className={`appearance-none pl-3.5 pr-8 py-2 bg-slate-50 border rounded-xl text-xs font-medium cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-[#1769FF] ${filters.projectType !== 'All'
                                        ? 'border-[#1769FF] bg-blue-50/50 text-[#1769FF] font-semibold'
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                                    }`}
                                aria-label="Filter by Project Type"
                            >
                                <option value="All">All Types</option>
                                {availableFilters.projectTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="w-3.5 h-3.5 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        </div>

                        {/* Clear All Button */}
                        {activeFiltersCount > 0 && (
                            <button
                                onClick={onResetFilters}
                                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Clear All</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Active Filter Badges Display */}
                {activeFiltersCount > 0 && (
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center flex-wrap gap-2 text-xs">
                        <span className="text-slate-500 font-medium">Active Filters:</span>

                        {filters.service !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 text-[#1769FF] font-medium border border-blue-200">
                                Service: {filters.service}
                                <button
                                    onClick={() => handleSelectChange('service', 'All')}
                                    className="hover:text-blue-800"
                                    aria-label={`Remove ${filters.service} filter`}
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}

                        {filters.technology !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-medium border border-indigo-200">
                                Tech: {filters.technology}
                                <button
                                    onClick={() => handleSelectChange('technology', 'All')}
                                    className="hover:text-indigo-900"
                                    aria-label={`Remove ${filters.technology} filter`}
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}

                        {filters.industry !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-medium border border-emerald-200">
                                Industry: {filters.industry}
                                <button
                                    onClick={() => handleSelectChange('industry', 'All')}
                                    className="hover:text-emerald-900"
                                    aria-label={`Remove ${filters.industry} filter`}
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}

                        {filters.projectType !== 'All' && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 font-medium border border-amber-200">
                                Type: {filters.projectType}
                                <button
                                    onClick={() => handleSelectChange('projectType', 'All')}
                                    className="hover:text-amber-950"
                                    aria-label={`Remove ${filters.projectType} filter`}
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </span>
                        )}

                        <span className="ml-auto text-slate-400 font-normal">
                            Showing <strong className="text-slate-800 font-semibold">{totalResults}</strong> project{totalResults !== 1 ? 's' : ''}
                        </span>
                    </div>
                )}
            </div>

            {/* Mobile Filter Drawer Modal */}
            {isMobileDrawerOpen && (
                <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-sm flex justify-end md:hidden">
                    <div className="w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
                        <div className="p-5 border-b border-slate-200 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Filter className="w-5 h-5 text-[#1769FF]" />
                                <h3 className="font-bold text-slate-900 text-base">Filter Projects</h3>
                            </div>
                            <button
                                onClick={() => setIsMobileDrawerOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg"
                                aria-label="Close filters"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-5 space-y-5 flex-1 overflow-y-auto">
                            {/* Service */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Service
                                </label>
                                <select
                                    value={filters.service}
                                    onChange={(e) => handleSelectChange('service', e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                                >
                                    <option value="All">All Services</option>
                                    {availableFilters.services.map((s) => (
                                        <option key={s} value={s}>
                                            {s}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Technology */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Technology
                                </label>
                                <select
                                    value={filters.technology}
                                    onChange={(e) => handleSelectChange('technology', e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                                >
                                    <option value="All">All Technologies</option>
                                    {availableFilters.technologies.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Industry */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Industry
                                </label>
                                <select
                                    value={filters.industry}
                                    onChange={(e) => handleSelectChange('industry', e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                                >
                                    <option value="All">All Industries</option>
                                    {availableFilters.industries.map((ind) => (
                                        <option key={ind} value={ind}>
                                            {ind}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Project Type */}
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                    Project Type
                                </label>
                                <select
                                    value={filters.projectType}
                                    onChange={(e) => handleSelectChange('projectType', e.target.value)}
                                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800"
                                >
                                    <option value="All">All Project Types</option>
                                    {availableFilters.projectTypes.map((type) => (
                                        <option key={type} value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="p-5 border-t border-slate-200 space-y-2 bg-slate-50">
                            <button
                                onClick={() => setIsMobileDrawerOpen(false)}
                                className="w-full py-3 bg-[#1769FF] text-white text-sm font-semibold rounded-xl hover:bg-blue-600 transition-colors"
                            >
                                Apply Filters ({totalResults} found)
                            </button>
                            {activeFiltersCount > 0 && (
                                <button
                                    onClick={() => {
                                        onResetFilters();
                                        setIsMobileDrawerOpen(false);
                                    }}
                                    className="w-full py-2.5 text-slate-600 text-xs font-semibold hover:text-slate-900 transition-colors"
                                >
                                    Reset All Filters
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
