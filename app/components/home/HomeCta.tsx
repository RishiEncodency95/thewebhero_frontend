'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HomeCta() {
    return (
        <section className="bg-white py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl bg-gradient-to-r from-indigo-950 via-purple-900 to-pink-900 border border-purple-700/40 p-8 sm:p-12 overflow-hidden shadow-[0_20px_50px_rgba(147,51,234,0.3)]">

                    {/* Background Glowing Mesh Blobs */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-500/40 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* Left Stylized Logo Mesh Graphic */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 opacity-25 pointer-events-none hidden lg:block">
                        <svg viewBox="0 0 200 200" className="w-80 h-80">
                            <path
                                d="M 30 50 L 65 150 L 100 85 L 135 150 L 170 50"
                                fill="none"
                                stroke="#EC4899"
                                strokeWidth="24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="max-w-2xl space-y-4">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-pink-400/40 bg-pink-500/20 text-pink-200 text-xs font-semibold tracking-wider uppercase">
                                <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-pulse" />
                                <span>LET&apos;S WORK TOGETHER</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                Have an Idea? Let&apos;s Make It <span className="bg-gradient-to-r from-cyan-300 via-pink-300 to-amber-200 bg-clip-text text-transparent">Real.</span>
                            </h2>

                            <p className="text-purple-100 text-sm sm:text-base leading-relaxed font-normal">
                                Tell us what you&apos;re building. We&apos;ll help you turn your idea into a scalable digital solution.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 shrink-0">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-bold text-sm shadow-[0_10px_25px_rgba(236,72,153,0.5)] hover:scale-105 transition-all duration-300"
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 bg-slate-950/60 hover:bg-slate-950/90 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300"
                            >
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
