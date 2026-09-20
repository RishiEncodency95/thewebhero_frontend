'use client';

import React from 'react';
import { SolutionFeature } from '../../types/solution';
import { Layers } from 'lucide-react';

type SolutionFeaturesProps = {
    features: SolutionFeature[];
    title: string;
};

export default function SolutionFeatures({
    features,
    title,
}: SolutionFeaturesProps) {
    return (
        <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Functional Modules</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Key Features Included in <span className="text-blue-600">{title}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-8 transition-all hover:border-blue-300 hover:bg-white hover:shadow-md"
                        >
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
