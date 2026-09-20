'use client';

import React from 'react';
import { TechUseCase } from '../../types/technology';
import { Target } from 'lucide-react';

type TechnologyUseCasesProps = {
    useCases: TechUseCase[];
    name: string;
};

export default function TechnologyUseCases({
    useCases,
    name,
}: TechnologyUseCasesProps) {
    return (
        <section className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <Target className="h-3.5 w-3.5" />
                        <span>Development Scenarios</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Common Use Cases for <span className="text-blue-600">{name}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 transition-all hover:border-blue-300 hover:bg-white hover:shadow-md"
                        >
                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
