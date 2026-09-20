'use client';

import React from 'react';
import { TechItem } from '../../types/service';
import { Cpu } from 'lucide-react';

type ServiceTechStackProps = {
    technologies: TechItem[];
    title: string;
};

export default function ServiceTechStack({
    technologies,
    title,
}: ServiceTechStackProps) {
    return (
        <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                        <Cpu className="h-3.5 w-3.5" />
                        <span>Technology Stack</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                        Technologies We Leverage for <span className="text-blue-400">{title}</span>
                    </h2>
                    <p className="mt-4 text-base text-slate-400 font-medium">
                        Proven frameworks, robust tools, and modern languages to guarantee peak speed and reliability.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-800/60 px-5 py-3.5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1"
                        >
                            <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                            <div>
                                <span className="text-sm font-bold text-white block">
                                    {tech.name}
                                </span>
                                {tech.category && (
                                    <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                                        {tech.category}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
