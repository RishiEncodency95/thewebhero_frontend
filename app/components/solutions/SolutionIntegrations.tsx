'use client';

import React from 'react';
import { SolutionIntegrationItem } from '../../types/solution';
import { Network } from 'lucide-react';

type SolutionIntegrationsProps = {
    integrations: SolutionIntegrationItem[];
    title: string;
};

export default function SolutionIntegrations({
    integrations,
    title,
}: SolutionIntegrationsProps) {
    return (
        <section className="py-16 bg-slate-50 border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Network className="h-3.5 w-3.5" />
                        <span>Connected Ecosystem</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Integrations for <span className="text-blue-600">{title}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {integrations.map((item, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300"
                        >
                            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-[10px] font-extrabold uppercase text-blue-600 mb-3">
                                {item.type}
                            </span>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                                {item.name}
                            </h3>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
