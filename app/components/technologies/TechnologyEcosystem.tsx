'use client';

import React from 'react';
import { TechEcosystemItem } from '../../types/technology';
import { Layers } from 'lucide-react';

type TechnologyEcosystemProps = {
    ecosystem: TechEcosystemItem[];
    security: string[];
    scalability: string[];
    name: string;
};

export default function TechnologyEcosystem({
    ecosystem,
    security,
    scalability,
    name,
}: TechnologyEcosystemProps) {
    return (
        <section className="py-16 sm:py-20 bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                        <Layers className="h-3.5 w-3.5" />
                        <span>Ecosystem & Security</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        <span className="text-blue-400">{name}</span> Tooling & Architecture Standards
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-6 space-y-4">
                        <h3 className="text-xl font-extrabold text-white mb-4">
                            Libraries & Development Tooling
                        </h3>
                        <div className="space-y-3">
                            {ecosystem.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl border border-slate-800 bg-slate-800/50 p-4 backdrop-blur-md"
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-sm font-bold text-white">{item.name}</h4>
                                        <span className="text-[10px] font-extrabold uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded-full">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-300 font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md">
                            <h4 className="text-base font-extrabold text-blue-400 mb-3">
                                Security & Code Auditing Standards
                            </h4>
                            <ul className="space-y-2 text-xs font-semibold text-slate-300">
                                {security.map((sec, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-blue-400 font-bold">•</span>
                                        <span>{sec}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md">
                            <h4 className="text-base font-extrabold text-cyan-400 mb-3">
                                Scalability & Deployment Practices
                            </h4>
                            <ul className="space-y-2 text-xs font-semibold text-slate-300">
                                {scalability.map((scale, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-cyan-400 font-bold">•</span>
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
