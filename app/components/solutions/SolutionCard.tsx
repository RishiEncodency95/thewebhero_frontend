'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type SolutionCardProps = {
    title: string;
    slug: string;
    categoryName?: string;
    shortDescription: string;
};

export default function SolutionCard({
    title,
    slug,
    categoryName,
    shortDescription,
}: SolutionCardProps) {
    return (
        <Link
            href={`/solutions/${slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
        >
            <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-50/50 transition-transform duration-500 group-hover:scale-150" />

            <div>
                {categoryName && (
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-blue-600 mb-3">
                        {categoryName}
                    </span>
                )}

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                    {title}
                </h3>

                <p className="text-base font-normal text-slate-600 leading-relaxed">
                    {shortDescription}
                </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600">
                <span>View Solution Details</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
        </Link>
    );
}
