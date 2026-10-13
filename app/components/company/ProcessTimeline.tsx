import React from 'react';
import { Check } from 'lucide-react';
import { CompanyProcessStep } from '../../types/company';

interface ProcessTimelineProps {
    steps: CompanyProcessStep[];
}

/** Numbered process steps on a connecting rail (vertical on mobile, 4-up grid on desktop). */
export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
                <li
                    key={step.step}
                    className="group relative flex flex-col rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_20px_40px_-16px_rgba(35,75,125,0.25)]"
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 font-mono text-sm font-bold text-white transition-colors group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500">
                            {String(step.step).padStart(2, '0')}
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden="true" />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Step {step.step}</span>
                    </div>

                    <h3 className="mt-5 text-[17px] font-semibold leading-snug tracking-tight text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{step.description}</p>

                    {step.deliverables && step.deliverables.length > 0 && (
                        <div className="mt-auto pt-5">
                            <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">You get</p>
                            <ul className="space-y-1.5">
                                {step.deliverables.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                            <Check className="h-3 w-3" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    );
}
