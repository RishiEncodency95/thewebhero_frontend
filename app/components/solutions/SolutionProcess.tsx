'use client';

import React from 'react';
import { ProcessStep } from '../../types/solution';
import { Workflow } from 'lucide-react';

type SolutionProcessProps = {
    process: ProcessStep[];
    title: string;
};

export default function SolutionProcess({
    process,
    title,
}: SolutionProcessProps) {
    return (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Workflow className="h-3.5 w-3.5" />
                        <span>Execution Roadmap</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Our Implementation Process for <span className="text-blue-600">{title}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {process.map((step) => (
                        <div
                            key={step.step}
                            className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-all hover:bg-white hover:border-blue-300 hover:shadow-lg"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-black text-white text-base">
                                    0{step.step}
                                </span>
                                <span className="text-xs font-bold uppercase text-slate-400">
                                    Phase {step.step}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {step.title}
                            </h3>

                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
