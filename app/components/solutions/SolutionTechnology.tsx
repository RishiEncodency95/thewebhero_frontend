'use client';

import React from 'react';
import { SolutionTechItem } from '../../types/solution';
import { Cpu } from 'lucide-react';

type SolutionTechnologyProps = {
    technologies: SolutionTechItem[];
    security: string[];
    scalability: string[];
    title: string;
};

export default function SolutionTechnology({
    technologies,
    security,
    scalability,
    title,
}: SolutionTechnologyProps) {
    return (
        <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Cpu className="h-3.5 w-3.5" />
                        <span>Architecture & Tech Foundation</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Technology & Infrastructure for <span className="text-blue-600">{title}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Technologies Pills */}
                    <div className="lg:col-span-6 space-y-4">
                        <h3 className="text-xl font-extrabold text-slate-900 mb-4">
                            Core Technologies & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800"
                                >
                                    <div className="h-2 w-2 rounded-full bg-blue-600" />
                                    <span>{tech.name}</span>
                                    {tech.category && (
                                        <span className="text-[10px] uppercase font-semibold text-slate-400">
                                            ({tech.category})
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Security & Scalability Controls */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <h4 className="text-base font-extrabold text-slate-900 mb-3 text-blue-600">
                                Security & Governance Considerations
                            </h4>
                            <ul className="space-y-2 text-xs font-semibold text-slate-700">
                                {security.map((sec, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-blue-600 font-bold">•</span>
                                        <span>{sec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <h4 className="text-base font-extrabold text-slate-900 mb-3 text-purple-600">
                                Scalability & High Availability Architecture
                            </h4>
                            <ul className="space-y-2 text-xs font-semibold text-slate-700">
                                {scalability.map((scale, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-purple-600 font-bold">•</span>
                                        <span>{scale}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
