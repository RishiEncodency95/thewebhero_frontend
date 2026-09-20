'use client';

import React, { useState } from 'react';
import { IndustryCategoryGroup } from '../../types/industry';
import IndustryCategory from './IndustryCategory';
import { Search } from 'lucide-react';

type IndustryGridProps = {
    categories: IndustryCategoryGroup[];
};

export default function IndustryGrid({ categories }: IndustryGridProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredCategories = categories
        .map((cat) => {
            if (selectedCategory !== 'all' && cat.slug !== selectedCategory) {
                return null;
            }

            const matchingIndustries = cat.industries.filter(
                (i) =>
                    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    i.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (matchingIndustries.length === 0 && searchQuery) {
                return null;
            }

            return {
                ...cat,
                industries: searchQuery ? matchingIndustries : cat.industries,
            };
        })
        .filter(Boolean) as IndustryCategoryGroup[];

    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Search & Category Filter Controls */}
                <div className="mb-14 space-y-6">
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search industries (e.g. Healthcare, FinTech, Real Estate, Logistics, SaaS...)"
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
                            All Industry Sectors ({categories.length})
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
                            <IndustryCategory key={cat.slug} category={cat} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 rounded-2xl border border-dashed border-slate-300 bg-slate-50">
                        <p className="text-lg font-bold text-slate-700">No industries match &quot;{searchQuery}&quot;</p>
                        <p className="text-sm text-slate-500 mt-1">Try searching for keywords like Healthcare, FinTech, Retail, or Legal.</p>
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
