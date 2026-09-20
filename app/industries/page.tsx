import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    INDUSTRY_CATEGORIES,
    getAllIndustries,
} from '../lib/industries';
import IndustryGrid from '../components/industries/IndustryGrid';
import IndustryBreadcrumb from '../components/industries/IndustryBreadcrumb';
import IndustryCTA from '../components/industries/IndustryCTA';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Cpu,
    Globe,
    HeartPulse,
    Layers,
    Rocket,
    ShieldCheck,
    ShoppingCart,
    Sparkles,
    Truck,
    Zap,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Industries We Serve | TheWebHero Software Solutions',
    description:
        'Explore software engineering solutions tailored for Healthcare, FinTech, Education, eCommerce, Real Estate, Logistics, SaaS, and Enterprise sectors by TheWebHero.',
    openGraph: {
        title: 'Industries We Serve | TheWebHero Digital Solutions',
        description:
            'Discover custom web, mobile app, and cloud software engineering for Healthcare, FinTech, Retail, Real Estate, and Logistics sectors.',
    },
};

export default function IndustriesHubPage() {
    const allIndustries = getAllIndustries();
    const featuredIndustries = allIndustries.filter((i) => i.featured).slice(0, 8);

    const industryChallengeMappings = [
        { industry: 'Healthcare', challenge: 'Patient data security & EHR fragmentation', techSolution: 'HIPAA-aligned portals & HL7/FHIR EHR integration' },
        { industry: 'FinTech', challenge: 'High transaction volume & fraud risks', techSolution: 'Encrypted payment microservices & automated auditing' },
        { industry: 'eCommerce & Retail', challenge: 'Cart abandonment & slow page load speed', techSolution: 'Headless PWA storefronts & instant checkout APIs' },
        { industry: 'Real Estate', challenge: 'Manual lead follow-ups & property tracking', techSolution: 'Automated Real Estate CRM & tenant portals' },
        { industry: 'Logistics', challenge: 'Inefficient fleet dispatch & delayed packages', techSolution: 'Live GPS dispatching & automated route planning' },
        { industry: 'Education', challenge: 'Low virtual student engagement', techSolution: 'Interactive LMS platforms & gamified learning modules' },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#07132b] to-[#0c224a] text-white pt-8 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-slate-300">
                        <IndustryBreadcrumb title="All Target Industries" />
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md mb-6">
                            <Building2 className="h-3.5 w-3.5 text-blue-400" />
                            <span>TheWebHero Sector Expertise</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                            Domain-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Software Solutions</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                            Discover custom web platforms, mobile applications, and automated workflows engineered to address the operational demands of your industry.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                            >
                                <span>Get Industry Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                                href="#directory"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                            >
                                <span>Browse Industry Sectors</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Main Industry Categories Grid with Live Search */}
            <div id="directory">
                <IndustryGrid categories={INDUSTRY_CATEGORIES} />
            </div>

            {/* 3. Industry Challenges -> Solution Mapping */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                            <Zap className="h-3.5 w-3.5" />
                            <span>Challenge → Technology Mapping</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Addressing Sector Operational Drag with Tech
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industryChallengeMappings.map((item, idx) => (
                            <div
                                key={idx}
                                className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md transition-all hover:border-blue-500/40 hover:bg-slate-800"
                            >
                                <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-400 mb-3">
                                    {item.industry}
                                </span>
                                <h3 className="text-base font-extrabold text-white mb-2">
                                    {item.challenge}
                                </h3>
                                <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                                    <strong className="text-blue-300">Software Solution:</strong> {item.techSolution}
                                </p>
                                <Link href="/solutions" className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:underline">
                                    <span>Explore Matching Solutions</span>
                                    <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Featured Industry Solutions */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Featured Sectors</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Target Industries We Serve
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredIndustries.map((ind) => (
                            <Link
                                key={ind.slug}
                                href={`/industries/${ind.slug}`}
                                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:border-blue-300 hover:bg-white hover:shadow-xl shadow-sm"
                            >
                                <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[10px] font-extrabold uppercase text-blue-600 mb-3">
                                    {ind.category}
                                </span>
                                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {ind.name}
                                </h3>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                    {ind.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                                    <span>View Industry Details</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Final Call to Action */}
            <IndustryCTA name="Target Industry" />
        </main>
    );
}
