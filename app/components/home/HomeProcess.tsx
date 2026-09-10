'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Search, Lightbulb, Palette, Code, CheckCircle, Rocket, Headphones } from 'lucide-react';

export default function HomeProcess() {
    const steps = [
        {
            num: '01',
            title: 'Discovery',
            desc: 'Understand vision & goals',
            icon: Search,
            color: 'text-purple-600',
            bg: 'bg-purple-50 border-purple-200',
        },
        {
            num: '02',
            title: 'Strategy',
            desc: 'Plan the right solution',
            icon: Lightbulb,
            color: 'text-blue-600',
            bg: 'bg-blue-50 border-blue-200',
        },
        {
            num: '03',
            title: 'Design',
            desc: 'Create user-centric UI/UX',
            icon: Palette,
            color: 'text-pink-600',
            bg: 'bg-pink-50 border-pink-200',
        },
        {
            num: '04',
            title: 'Development',
            desc: 'Build with modern tech',
            icon: Code,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-200',
        },
        {
            num: '05',
            title: 'Testing',
            desc: 'Ensure quality & speed',
            icon: CheckCircle,
            color: 'text-cyan-600',
            bg: 'bg-cyan-50 border-cyan-200',
        },
        {
            num: '06',
            title: 'Deployment',
            desc: 'Launch and go live',
            icon: Rocket,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 border-indigo-200',
        },
        {
            num: '07',
            title: 'Support',
            desc: 'Ongoing growth & maintenance',
            icon: Headphones,
            color: 'text-amber-600',
            bg: 'bg-amber-50 border-amber-200',
        },
    ];

    return (
        <section className="bg-slate-50/60 text-slate-900 py-16 lg:py-24 relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            OUR PROCESS
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            A Transparent Development Process
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            From idea to launch, we follow a clear and collaborative process.
                        </p>
                    </div>

                    <Link
                        href="/process"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>Learn More About Our Process</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Horizontal 7-Step Process Pipeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
                    {steps.map((step, idx) => {
                        const IconComp = step.icon;
                        return (
                            <div
                                key={idx}
                                className="group relative p-4 rounded-xl bg-white border border-slate-200/80 hover:border-purple-300 hover:shadow-md transition-all duration-300 flex flex-col items-start gap-3"
                            >
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-xs font-bold text-slate-400 tracking-wider">
                                        {step.num}
                                    </span>
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${step.bg} shadow-sm`}>
                                        <IconComp className={`w-4.5 h-4.5 ${step.color}`} />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">
                                        {step.title}
                                    </h4>
                                    <p className="text-[11px] text-slate-500 leading-tight">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
