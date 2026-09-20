'use client';

import React from 'react';
import { IndustryFeature } from '../../types/industry';
import { Layers } from 'lucide-react';

type IndustryFeaturesProps = {
    features: IndustryFeature[];
    name: string;
};

export default function IndustryFeatures({
    features,
    name,
}: IndustryFeaturesProps) {
    return (
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Functional Modules</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Standard Modules & Features for <span className="text-blue-600">{name}</span> Software
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all hover:border-blue-300 hover:shadow-md shadow-sm"
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
