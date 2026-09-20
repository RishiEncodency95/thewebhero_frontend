'use client';

import React from 'react';
import { ServiceBenefit } from '../../types/service';
import { Award, ShieldCheck } from 'lucide-react';

type ServiceBenefitsProps = {
    benefits: ServiceBenefit[];
    title: string;
};

export default function ServiceBenefits({
    benefits,
    title,
}: ServiceBenefitsProps) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-[#07112f] text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                        <Award className="h-3.5 w-3.5" />
                        <span>Business Value</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Key Advantages of Our <span className="text-blue-400">{title}</span> Solutions
                    </h2>
                    <p className="mt-4 text-base text-slate-300 font-medium">
                        Designed to deliver measurable impact, operational security, and seamless engineering quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-slate-800/80"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                                    <ShieldCheck className="h-5 w-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white">
                                    {benefit.title}
                                </h3>
                            </div>
                            <p className="text-sm text-slate-300 leading-relaxed font-medium">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
