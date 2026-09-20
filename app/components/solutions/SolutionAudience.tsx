'use client';

import React from 'react';
import { SolutionAudienceItem } from '../../types/solution';
import { Target, Users } from 'lucide-react';

type SolutionAudienceProps = {
    audience: SolutionAudienceItem[];
    title: string;
};

export default function SolutionAudience({
    audience,
    title,
}: SolutionAudienceProps) {
    return (
        <section className="py-16 sm:py-20 bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                        <Target className="h-3.5 w-3.5 text-blue-400" />
                        <span>Ideal Fit</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Who <span className="text-blue-400">{title}</span> Is Built For
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {audience.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md transition-all hover:border-blue-500/40 hover:bg-slate-800"
                        >
                            <div className="h-12 w-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-white mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
