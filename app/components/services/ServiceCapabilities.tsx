'use client';

import React from 'react';
import { ServiceCapability } from '../../types/service';
import { CheckCircle2, Zap } from 'lucide-react';

type ServiceCapabilitiesProps = {
    capabilities: ServiceCapability[];
    title: string;
};

export default function ServiceCapabilities({
    capabilities,
    title,
}: ServiceCapabilitiesProps) {
    return (
        <section id="capabilities" className="py-16 sm:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Zap className="h-3.5 w-3.5" />
                        <span>Core Competencies</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Key Capabilities of Our <span className="text-blue-600">{title}</span> Services
                    </h2>
                    <p className="mt-4 text-base text-slate-600 font-medium">
                        Comprehensive solutions engineered with precision, efficiency, and industry-leading standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((item, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="h-6 w-6" />
                            </div>

                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-sm font-medium leading-relaxed text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
