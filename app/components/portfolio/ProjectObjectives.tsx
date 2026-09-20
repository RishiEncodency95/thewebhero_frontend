import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { ProjectObjective } from '../../types/portfolio';

interface ProjectObjectivesProps {
    objectives?: ProjectObjective;
}

export default function ProjectObjectives({ objectives }: ProjectObjectivesProps) {
    if (!objectives || !objectives.items || objectives.items.length === 0) return null;

    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        GOALS & OBJECTIVES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
                        {objectives.title || 'Key Project Goals'}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {objectives.items.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
                            >
                                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1769FF] flex items-center justify-center shrink-0 mt-0.5">
                                    <Target className="w-4 h-4" />
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
