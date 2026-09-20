'use client';

import React, { useState } from 'react';
import { SolutionCategoryGroup } from '../../types/solution';
import SolutionCategory from './SolutionCategory';
import { Search } from 'lucide-react';

type SolutionGridProps = {
    categories: SolutionCategoryGroup[];
};

export default function SolutionGrid({ categories }: SolutionGridProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredCategories = categories
        .map((cat) => {
            if (selectedCategory !== 'all' && cat.slug !== selectedCategory) {
                return null;
            }

            const matchingSolutions = cat.solutions.filter(
                (s) =>
                    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (matchingSolutions.length === 0 && searchQuery) {
                return null;
            }

            return {
                ...cat,
                solutions: searchQuery ? matchingSolutions : cat.solutions,
            };
        })
        .filter(Boolean) as SolutionCategoryGroup[];

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Search & Category Filters */}
                <div className="mb-14 space-y-6">
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search solutions (e.g. SaaS, MVP, CRM, Automation, ERP, On-Demand...)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border border-slate-300 bg-slate-50 py-3.5 pl-12 pr-4 text-sm font-medium text-slate-900 shadow-sm focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${selectedCategory === 'all'
                                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            All Solution Domains ({categories.length})
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setSelectedCategory(cat.slug)}
                                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${selectedCategory === cat.slug
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {filteredCategories.length > 0 ? (
                    <div className="space-y-20">
                        {filteredCategories.map((cat) => (
                            <SolutionCategory key={cat.slug} category={cat} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50">
                        <p className="text-lg font-bold text-slate-700">No solutions match &quot;{searchQuery}&quot;</p>
                        <p className="text-sm text-slate-500 mt-1">Try searching for keywords like SaaS, ERP, Automation, or eCommerce.</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('all');
                            }}
                            className="mt-4 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-700"
                        >
                            Clear Search Filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
