import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { ProjectChallenge as ProjectChallengeType } from '../../types/portfolio';

interface ProjectChallengeProps {
    challenge?: ProjectChallengeType;
}

export default function ProjectChallenge({ challenge }: ProjectChallengeProps) {
    if (!challenge) return null;

    return (
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        THE CHALLENGE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                        {challenge.title}
                    </h2>
                    <p className="text-base text-slate-700 leading-relaxed mb-8">
                        {challenge.description}
                    </p>

                    {challenge.keyPoints && challenge.keyPoints.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {challenge.keyPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between"
                                >
                                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 font-bold text-xs">
                                        0{index + 1}
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
