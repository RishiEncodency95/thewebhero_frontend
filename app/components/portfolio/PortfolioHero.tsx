import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import PortfolioBreadcrumb from './PortfolioBreadcrumb';

export default function PortfolioHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-16 lg:pb-20">
            {/* Background Decorative Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-white/80">
                    <PortfolioBreadcrumb />
                </div>

                <div className="max-w-3xl mt-4">
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-6">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>OUR WORK & PORTFOLIO</span>
                    </div>

                    {/* H1 Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                        Engineered Web & Mobile Showcase
                    </h1>

                    {/* Supporting Statement */}
                    <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                        Explore our portfolio of verified web applications, custom platforms, mobile applications, and admin systems. Filter by service, technology, industry, or project type to discover how we deliver technical solutions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="/get-a-quote"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <span>Start a Project</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            <Layers className="w-4 h-4 text-blue-400" />
                            <span>Explore Services</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
