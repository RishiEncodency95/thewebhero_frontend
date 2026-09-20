'use client';

import React from 'react';
import Link from 'next/link';
import { RelatedIndustryRef } from '../../types/industry';
import { ArrowRight, Building2 } from 'lucide-react';

type RelatedIndustriesProps = {
    relatedIndustries: RelatedIndustryRef[];
};

export default function RelatedIndustries({
    relatedIndustries,
}: RelatedIndustriesProps) {
    if (!relatedIndustries || relatedIndustries.length === 0) return null;

    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Building2 className="h-3.5 w-3.5" />
                            <span>Related Sectors</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                            Explore Related Industries
                        </h2>
                    </div>

                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                    >
                        <span>View All Industries</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedIndustries.map((ind) => (
                        <Link
                            key={ind.slug}
                            href={`/industries/${ind.slug}`}
                            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl shadow-sm"
                        >
                            <div>
                                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {ind.name}
                                </h3>
                                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                    {ind.shortDescription}
                                </p>
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                                <span>Explore Sector</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
