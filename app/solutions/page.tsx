import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    SOLUTION_CATEGORIES,
    getAllSolutions,
    getBusinessNeedMappings,
} from '../lib/solutions';
import SolutionGrid from '../components/solutions/SolutionGrid';
import SolutionBreadcrumb from '../components/solutions/SolutionBreadcrumb';
import SolutionCTA from '../components/solutions/SolutionCTA';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Cpu,
    Globe,
    Layers,
    Rocket,
    ShieldCheck,
    Sparkles,
    Store,
    Users,
    Zap,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Business Solutions Directory | TheWebHero Enterprise Solutions',
    description:
        'Explore digital transformation, business automation, startup MVPs, SaaS development, enterprise software, CRM, ERP, and eCommerce solutions by TheWebHero.',
    openGraph: {
        title: 'Business Solutions Directory | TheWebHero Digital Products',
        description:
            'Discover end-to-end software solutions tailored for startups, growing enterprises, B2B marketplaces, and automated operations.',
    },
};

export default function SolutionsHubPage() {
    const allSolutions = getAllSolutions();
    const featuredSolutions = allSolutions.filter((s) => s.featured).slice(0, 6);
    const businessNeedMappings = getBusinessNeedMappings();

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Page Hero */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a122c] to-[#0d1d4d] text-white pt-8 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-slate-300">
                        <SolutionBreadcrumb title="All Solutions" />
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md mb-6">
                            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                            <span>TheWebHero Digital Business Solutions</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                            Purpose-Built <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Software Solutions</span> for Growth
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                            From startup MVPs and multi-tenant SaaS to enterprise ERPs and automated workflows, discover software engineering designed to solve real business challenges.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                            >
                                <span>Get a Solution Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                                href="#needs"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                            >
                                <span>Find Solution by Need</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Business Challenge -> Solution Mapping Section */}
            <section id="needs" className="py-16 sm:py-20 bg-white border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Zap className="h-3.5 w-3.5" />
                            <span>Challenge → Solution Matchmaker</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Find the Right Solution for Your Specific Need
                        </h2>
                        <p className="mt-3 text-base text-slate-600 font-medium">
                            Select your primary business objective to explore matching engineering capabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {businessNeedMappings.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-all hover:border-blue-300 hover:bg-white hover:shadow-lg"
                            >
                                <div>
                                    <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                                        {item.needTitle}
                                    </h3>
                                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                        {item.needDescription}
                                    </p>
                                </div>

                                <div className="space-y-2 pt-4 border-t border-slate-200/80">
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                                        Recommended Solutions:
                                    </span>
                                    {item.solutions.map((sol) => (
                                        <Link
                                            key={sol.slug}
                                            href={`/solutions/${sol.slug}`}
                                            className="flex items-center justify-between text-xs font-bold text-blue-600 hover:underline"
                                        >
                                            <span>{sol.title}</span>
                                            <ArrowRight className="h-3 w-3 shrink-0 text-blue-500" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Main Solution Categories Grid with Live Search */}
            <div id="directory">
                <SolutionGrid categories={SOLUTION_CATEGORIES} />
            </div>

            {/* 4. Featured Business Solutions */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Featured Platforms</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            High-Impact Digital Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredSolutions.map((sol) => (
                            <Link
                                key={sol.slug}
                                href={`/solutions/${sol.slug}`}
                                className="group rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1"
                            >
                                <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-400 mb-3">
                                    {sol.category}
                                </span>
                                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors mb-2">
                                    {sol.title}
                                </h3>
                                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                                    {sol.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                                    <span>Explore Solution</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Implementation Approach */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Layers className="h-3.5 w-3.5" />
                            <span>Agile Implementation</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Our Proven Solution Delivery Roadmap
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Strategy & Scope</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Aligning technical architecture with business milestones and ROI parameters.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                02
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Rapid Prototyping</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Designing modular UI/UX wireframes and database architecture blueprints.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                03
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Sprint Engineering</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Agile development cycles with automated testing, CI/CD, and security checks.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                04
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">SLA Maintenance</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                24/7 server monitoring, performance tuning, and technical updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Why TheWebHero */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>Why TheWebHero</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Reliable Software Partners for Enterprise & Startups
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">API-First Modular Architecture</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Modular software components designed for easy integration and horizontal scaling.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Dedicated Product Engineering</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Senior software developers working in sync with your product team goals.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Enterprise Security Standards</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Data encryption, role-based access control, and OWASP security practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final Call to Action */}
            <SolutionCTA title="Software Solutions" />
        </main>
    );
}
