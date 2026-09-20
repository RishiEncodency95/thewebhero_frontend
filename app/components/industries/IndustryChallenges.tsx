'use client';

import React from 'react';
import { IndustryChallenge } from '../../types/industry';
import { AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

type IndustryChallengesProps = {
    challenges: IndustryChallenge[];
    name: string;
};

export default function IndustryChallenges({
    challenges,
    name,
}: IndustryChallengesProps) {
    return (
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                        <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                        <span>Industry Challenges & Solutions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Common Operational Challenges in <span className="text-blue-600">{name}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {challenges.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                        >
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-800 font-bold text-xs">
                                        0{idx + 1}
                                    </span>
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                                        Challenge Scenario
                                    </span>
                                </div>

                                <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">
                                    {item.description}
                                </p>

                                <div className="rounded-xl bg-blue-50/70 border border-blue-100 p-3.5 mb-4">
                                    <span className="text-[10px] font-extrabold uppercase text-blue-700 block mb-1">
                                        Required Digital Capability:
                                    </span>
                                    <p className="text-xs font-semibold text-slate-800">
                                        {item.techNeed}
                                    </p>
                                </div>
                            </div>

                            <Link
                                href="/solutions"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                            >
                                <span>Explore Related Software Solutions</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
