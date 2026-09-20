import { FileText, ShieldCheck, Zap } from 'lucide-react';

export default function QuoteHero() {
    return (
        <section className="relative overflow-hidden bg-slate-900 text-white py-12 lg:py-16">
            {/* Dark mode mesh gradient background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Start Your Project</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                        Get a Tailored Project <span className="text-emerald-400">Quote</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
                        Share your vision, project goals, and technical requirements with our engineering team. We evaluate your scope and deliver a structured project proposal.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400 border-t border-slate-800 pt-6">
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Confidential & Safe Inquiry</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Comprehensive Scope Review</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
