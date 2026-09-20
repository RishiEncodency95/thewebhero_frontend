'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import TechnologyBreadcrumb from './TechnologyBreadcrumb';

type TechnologyHeroProps = {
    name: string;
    categoryName: string;
    categorySlug: string;
    shortDescription: string;
    description: string;
};

export default function TechnologyHero({
    name,
    categoryName,
    categorySlug,
    shortDescription,
    description,
}: TechnologyHeroProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#06152d] to-[#092248] text-white pt-8 pb-16 lg:pb-24">
            <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
            <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/15 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-6 text-slate-300">
                    <TechnologyBreadcrumb
                        categoryName={categoryName}
                        categorySlug={categorySlug}
                        title={name}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-6">
                            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{categoryName} Stack</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white mb-6">
                            {name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Development</span>
                        </h1>

                        <p className="text-lg sm:text-xl font-semibold text-blue-100/90 mb-4 leading-relaxed">
                            {shortDescription}
                        </p>

                        <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-2xl">
                            {description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                            >
                                <span>Get a Tech Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                                href="#capabilities"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                            >
                                <span>Explore Ecosystem & Use Cases</span>
                            </a>
                        </div>

                        <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                                <span>Strict Coding Standards</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
                                <span>Security Audited</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                                <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                                <span>Scalable Architecture</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl">
                            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                                <div className="flex items-center gap-2">
                                    <div className="h-3 w-3 rounded-full bg-red-500" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                                    <div className="h-3 w-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-xs font-mono text-slate-400">TheWebHero // {categorySlug}</span>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                                    <h4 className="text-sm font-bold text-cyan-300 mb-1">Production-Ready Integration</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        Engineered using industry best practices for optimal speed, security, and developer maintainability.
                                    </p>
                                </div>

                                <div className="space-y-2.5">
                                    <div className="flex justify-between items-center text-xs text-slate-400">
                                        <span>Code Reliability & Testing</span>
                                        <span className="font-bold text-emerald-400">100% Verified</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-slate-800">
                                        <div className="h-2 rounded-full bg-emerald-500 w-full" />
                                    </div>

                                    <div className="flex justify-between items-center text-xs text-slate-400 pt-2">
                                        <span>Continuous Integration</span>
                                        <span className="font-bold text-cyan-400">Automated Pipeline</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-slate-800">
                                        <div className="h-2 rounded-full bg-cyan-500 w-full" />
                                    </div>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                                    <span>Engineering Handoff</span>
                                    <span className="font-bold text-blue-300">Complete IP Ownership</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
