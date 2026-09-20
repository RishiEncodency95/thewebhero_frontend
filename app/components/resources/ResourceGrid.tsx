'use client';

import React from 'react';
import { BookOpen, RotateCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ResourceItem } from '../../types/resource';
import ResourceCard from './ResourceCard';

interface ResourceGridProps {
    resources: ResourceItem[];
    onResetFilters?: () => void;
}

export default function ResourceGrid({ resources, onResetFilters }: ResourceGridProps) {
    if (resources.length === 0) {
        return (
            <div className="py-20 px-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#1769FF] mb-4">
                    <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                    No Resources Found
                </h3>
                <p className="text-slate-600 max-w-md mx-auto text-sm mb-6 leading-relaxed">
                    No articles, guides, or tutorials match your current filter parameters. Try clearing your search query or selecting a different category.
                </p>

                {onResetFilters && (
                    <button
                        onClick={onResetFilters}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1769FF] text-white font-semibold text-xs sm:text-sm hover:bg-blue-600 transition-colors shadow-md"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span>Clear All Filters</span>
                    </button>
                )}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {resources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} variant="standard" />
            ))}
        </div>
    );
}
