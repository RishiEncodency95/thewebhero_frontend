import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface ProjectCTAProps {
    projectTitle: string;
}

export default function ProjectCTA({ projectTitle }: ProjectCTAProps) {
    return (
        <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20 text-white">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>HAVE A SIMILAR VISION?</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
                    Ready to Build Your Project With TheWebHero?
                </h2>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Partner with our team of engineers to build scalable web applications, mobile software, and custom platforms tailored to your business objectives.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                        href="/get-a-quote"
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm sm:text-base transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                    >
                        <span>View All Portfolio Projects</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
