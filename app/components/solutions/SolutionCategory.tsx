'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { SolutionCategoryGroup } from '../../types/solution';
import SolutionCard from './SolutionCard';

type SolutionCategoryProps = {
    category: SolutionCategoryGroup;
};

export default function SolutionCategory({ category }: SolutionCategoryProps) {
    return (
        <div id={category.slug} className="scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 mb-8 gap-4">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Solution Domain</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                        {category.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-600 max-w-2xl">
                        {category.description}
                    </p>
                </div>

                <Link
                    href={`/solutions/${category.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 shrink-0"
                >
                    <span>Explore All {category.name}</span>
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.solutions.map((solution) => (
                    <SolutionCard
                        key={solution.slug}
                        title={solution.title}
                        slug={solution.slug}
                        shortDescription={solution.shortDescription}
                        categoryName={category.name}
                    />
                ))}
            </div>
        </div>
    );
}
