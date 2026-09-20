import React from 'react';
import { CheckCircle2, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { CompanyProcessStep } from '../../types/company';

interface ProcessTimelineProps {
    steps: CompanyProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        SOFTWARE DEVELOPMENT LIFE CYCLE
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Our 8-Step Engineering Process
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        We follow a structured agile workflow to ensure transparency, high code quality, and predictable milestones from scoping to post-launch maintenance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.step}
                            className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-extrabold text-sm flex items-center justify-center">
                                        0{step.step}
                                    </span>
                                    <span className="text-[10px] font-bold text-[#1769FF] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                        Phase {step.step}
                                    </span>
                                </div>

                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                                    {step.description}
                                </p>
                            </div>

                            {step.deliverables && step.deliverables.length > 0 && (
                                <div className="pt-3 border-t border-slate-200/80 mt-auto">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                                        Deliverables:
                                    </span>
                                    <ul className="space-y-1">
                                        {step.deliverables.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
