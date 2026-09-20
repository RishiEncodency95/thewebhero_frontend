'use client';

import React from 'react';
import Link from 'next/link';
import { RelatedSolutionRef } from '../../types/solution';
import { ArrowRight, Layers } from 'lucide-react';

type RelatedSolutionsProps = {
    relatedSolutions: RelatedSolutionRef[];
};

export default function RelatedSolutions({
    relatedSolutions,
}: RelatedSolutionsProps) {
    if (!relatedSolutions || relatedSolutions.length === 0) return null;

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Layers className="h-3.5 w-3.5" />
                            <span>Complementary Solutions</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                            Related Business Solutions
                        </h2>
                    </div>

                    <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                        <span>View All Solutions</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedSolutions.map((sol) => (
                        <Link
                            key={sol.slug}
                            href={`/solutions/${sol.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl shadow-sm"
                        >
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {sol.title}
                                </h3>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                    {sol.shortDescription}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                                <span>Explore Solution</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
