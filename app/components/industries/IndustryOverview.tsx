'use client';

import React from 'react';
import { Building2 } from 'lucide-react';

type IndustryOverviewProps = {
    name: string;
    overview: string;
};

export default function IndustryOverview({
    name,
    overview,
}: IndustryOverviewProps) {
    return (
        <section className="py-14 bg-white border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white p-6 sm:p-10 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-4">
                            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3.5 py-1.5 rounded-full mb-3">
                                <Building2 className="h-4 w-4 text-blue-600" />
                                <span>Industry Context</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                                Digital Transformation in <span className="text-blue-600">{name}</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
                            <p className="text-base text-slate-700 leading-relaxed font-medium">
                                {overview}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
