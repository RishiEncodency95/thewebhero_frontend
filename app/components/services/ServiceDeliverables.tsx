'use client';

import React from 'react';
import { CheckCircle2, PackageCheck } from 'lucide-react';

type ServiceDeliverablesProps = {
    deliverables: string[];
    title: string;
};

export default function ServiceDeliverables({
    deliverables,
    title,
}: ServiceDeliverablesProps) {
    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-4">
                            <PackageCheck className="h-3.5 w-3.5" />
                            <span>Concrete Outputs</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                            Tangible Deliverables You Receive
                        </h2>
                        <p className="text-base text-slate-600 font-medium leading-relaxed">
                            Every {title} engagement produces documented, production-ready assets backed by full IP ownership and technical handoff.
                        </p>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 sm:p-8 space-y-4">
                            {deliverables.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 rounded-xl border border-slate-200/60 bg-white p-4 transition-all hover:border-blue-300 shadow-sm"
                                >
                                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800 leading-snug">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
