import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    TECH_CATEGORIES,
    getAllTechnologies,
} from '../lib/technologies';
import TechnologyGrid from '../components/technologies/TechnologyGrid';
import TechnologyBreadcrumb from '../components/technologies/TechnologyBreadcrumb';
import TechnologyCTA from '../components/technologies/TechnologyCTA';
import {
    ArrowRight,
    CheckCircle2,
    Cloud,
    Cpu,
    Database,
    Globe,
    Layers,
    Rocket,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Store,
    Zap,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Technologies Directory | TheWebHero Engineering Ecosystem',
    description:
        'Explore the complete technology stack used by TheWebHero: React, Next.js, Node.js, Flutter, MongoDB, AWS, Docker, Kubernetes, AI, and Shopify.',
    openGraph: {
        title: 'Technologies Directory | TheWebHero Modern Tech Stack',
        description:
            'Discover frontend, backend, mobile, database, cloud, DevOps, AI, and CMS technologies used to engineer scalable web and mobile software.',
    },
};

export default function TechnologiesHubPage() {
    const allTech = getAllTechnologies();
    const featuredTech = allTech.filter((t) => t.featured).slice(0, 8);

    const techToServiceMappings = [
        { tech: 'React / Next.js', services: ['Web Development', 'Web Application Development', 'UI/UX Design', 'SEO & Digital Growth'] },
        { tech: 'Node.js / Express', services: ['Backend Development', 'API Development', 'Web Application Development', 'Microservices'] },
        { tech: 'Flutter / React Native', services: ['Mobile App Development', 'Cross-Platform App Development', 'iOS/Android Apps'] },
        { tech: 'MongoDB / PostgreSQL', services: ['Database Solutions', 'Backend Development', 'Custom Software'] },
        { tech: 'AWS / Docker / Kubernetes', services: ['Cloud & DevOps', 'Server Management', 'Enterprise IT Support'] },
        { tech: 'AI & Generative AI', services: ['AI & Automation', 'Business Automation', 'Custom Software'] },
    ];

    const techToSolutionMappings = [
        { tech: 'React / Next.js', solutions: ['Digital Transformation', 'SaaS Solutions', 'eCommerce Solutions'] },
        { tech: 'Node.js / Express', solutions: ['SaaS Solutions', 'Enterprise Solutions', 'Marketplace Solutions', 'Business Automation'] },
        { tech: 'Flutter / React Native', solutions: ['Startup Solutions (MVP)', 'On-Demand Solutions', 'Marketplace Solutions'] },
        { tech: 'MongoDB / PostgreSQL', solutions: ['SaaS Solutions', 'CRM Solutions', 'ERP Solutions', 'Enterprise Solutions'] },
        { tech: 'AWS / Azure / GCP', solutions: ['Enterprise Solutions', 'SaaS Solutions', 'Digital Transformation'] },
        { tech: 'AI & Machine Learning', solutions: ['Business Automation', 'Digital Transformation', 'SaaS Products'] },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#06152d] to-[#092248] text-white pt-8 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/15 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-slate-300">
                        <TechnologyBreadcrumb title="All Technologies" />
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md mb-6">
                            <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                            <span>TheWebHero Engineering Stack</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                            Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Technology Ecosystem</span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                            Explore the frameworks, cloud platforms, programming languages, databases, and AI technologies we use to engineer production-ready digital products.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                            >
                                <span>Get a Tech Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                                href="#directory"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                            >
                                <span>Browse Tech Categories</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Main Tech Categories Grid with Live Search & Filter */}
            <div id="directory">
                <TechnologyGrid categories={TECH_CATEGORIES} />
            </div>

            {/* 3. Technology Domain Overviews (Frontend / Backend / Mobile / Cloud) */}
            <section className="py-16 sm:py-20 bg-white border-t border-b border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Layers className="h-3.5 w-3.5" />
                            <span>Full-Stack Overview</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            End-to-End Technology Stacks We Support
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Frontend Stack</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                React, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS for interactive, responsive interfaces.
                            </p>
                            <Link href="/technologies/frontend" className="text-xs font-bold text-blue-600 hover:underline">
                                Explore Frontend →
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <div className="h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Backend & APIs</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                Node.js, Express.js, PHP, Laravel, REST APIs, and GraphQL for high-throughput server logic.
                            </p>
                            <Link href="/technologies/backend" className="text-xs font-bold text-blue-600 hover:underline">
                                Explore Backend →
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <div className="h-12 w-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                                <Smartphone className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Mobile Apps</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                Flutter, React Native, Kotlin, Swift, Android, and iOS for cross-platform and native smartphone apps.
                            </p>
                            <Link href="/technologies/mobile-development" className="text-xs font-bold text-blue-600 hover:underline">
                                Explore Mobile →
                            </Link>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                            <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                                <Cloud className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Cloud & DevOps</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD, and Linux for automated cloud deployment.
                            </p>
                            <Link href="/technologies/cloud" className="text-xs font-bold text-blue-600 hover:underline">
                                Explore Cloud →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Technology -> Service & Solution Mapping */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                            <Zap className="h-3.5 w-3.5 text-cyan-400" />
                            <span>Ecosystem Relationships</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            How Our Tech Stack Connects With Services & Solutions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Technology -> Service Mapping */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-md">
                            <h3 className="text-xl font-extrabold text-blue-400 mb-6 flex items-center gap-2">
                                <Globe className="h-5 w-5" />
                                <span>Technology → Service Alignment</span>
                            </h3>
                            <div className="space-y-4">
                                {techToServiceMappings.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-800 pb-3">
                                        <span className="text-sm font-bold text-white block mb-1">{item.tech}</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.services.map((s, i) => (
                                                <span key={i} className="text-[11px] font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technology -> Solution Mapping */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-md">
                            <h3 className="text-xl font-extrabold text-cyan-400 mb-6 flex items-center gap-2">
                                <Rocket className="h-5 w-5" />
                                <span>Technology → Solution Alignment</span>
                            </h3>
                            <div className="space-y-4">
                                {techToSolutionMappings.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-800 pb-3">
                                        <span className="text-sm font-bold text-white block mb-1">{item.tech}</span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.solutions.map((s, i) => (
                                                <span key={i} className="text-[11px] font-semibold text-slate-300 bg-slate-800 px-2.5 py-1 rounded-md">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Featured Technologies Grid */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>Core Frameworks</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Featured Engineering Technologies
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredTech.map((tech) => (
                            <Link
                                key={tech.slug}
                                href={`/technologies/${tech.slug}`}
                                className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:border-blue-300 hover:bg-white hover:shadow-xl shadow-sm"
                            >
                                <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[10px] font-extrabold uppercase text-blue-600 mb-3">
                                    {tech.category}
                                </span>
                                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                    {tech.name}
                                </h3>
                                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                                    {tech.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Final Call to Action */}
            <TechnologyCTA name="Modern Technologies" />
        </main>
    );
}
