'use client';

import React from 'react';
import { SolutionChallenge } from '../../types/solution';
import { AlertTriangle } from 'lucide-react';

type SolutionChallengesProps = {
    challenges: SolutionChallenge[];
    title: string;
};

export default function SolutionChallenges({
    challenges,
    title,
}: SolutionChallengesProps) {
    return (
        <section className="py-14 bg-white border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                        <span>Core Operational Challenges</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Business Problems Solved by <span className="text-blue-600">{title}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {challenges.map((challenge, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm transition-all hover:border-amber-300 hover:bg-white hover:shadow-md"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-bold text-sm">
                                0{idx + 1}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {challenge.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
