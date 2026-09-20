import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICE_CATEGORIES, getAllServices } from '../lib/services';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceBreadcrumb from '../components/services/ServiceBreadcrumb';
import ServiceCTA from '../components/services/ServiceCTA';
import {
    ArrowRight,
    CheckCircle2,
    Cpu,
    Globe,
    Layers,
    ShieldCheck,
    Sparkles,
    Users,
    Zap,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Services Directory | TheWebHero IT & Software Engineering',
    description:
        'Explore complete software development, mobile apps, cloud DevOps, database solutions, custom software, and IT infrastructure support services by TheWebHero.',
    openGraph: {
        title: 'Services Directory | TheWebHero Technical Solutions',
        description:
            'Discover end-to-end technical engineering services from web and mobile development to enterprise IT infrastructure.',
    },
};

export default function ServicesPage() {
    const allServices = getAllServices();
    const featuredServices = allServices.filter((s) => s.featured).slice(0, 6);

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#07112f] to-[#0a1945] text-white pt-8 pb-16 lg:pb-24">
                <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[140px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-slate-300">
                        <ServiceBreadcrumb title="All Services" />
                    </div>

                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 backdrop-blur-md mb-6">
                            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                            <span>TheWebHero Engineering Capabilities</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6">
                            Full-Spectrum <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">IT & Software</span> Services
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium mb-8">
                            From custom web platforms and native mobile apps to cloud DevOps and enterprise IT infrastructure support, we build software solutions that scale.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02]"
                            >
                                <span>Get a Custom Quote</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <a
                                href="#directory"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-7 py-4 text-sm font-semibold text-slate-200 transition-all hover:bg-slate-700 hover:text-white"
                            >
                                <span>Browse All Categories</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Main Services Grid with Search & Filters */}
            <div id="directory">
                <ServiceGrid categories={SERVICE_CATEGORIES} />
            </div>

            {/* 3. Featured Core Services Highlight */}
            <section className="py-16 sm:py-20 bg-slate-900 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300 mb-3">
                            <Zap className="h-3.5 w-3.5" />
                            <span>Popular Solutions</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            Featured Engineering Capabilities
                        </h2>
                        <p className="mt-3 text-base text-slate-400 font-medium">
                            High-demand digital services trusted by growing companies and enterprise businesses.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredServices.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group rounded-2xl border border-slate-800 bg-slate-800/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800 hover:-translate-y-1"
                            >
                                <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-blue-400 mb-3">
                                    {service.category}
                                </span>
                                <h3 className="text-xl font-extrabold text-white group-hover:text-blue-400 transition-colors mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                                    {service.shortDescription}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                                    <span>Explore Service</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Development & Implementation Process */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <Layers className="h-3.5 w-3.5" />
                            <span>Structured Delivery</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Our End-to-End Service Delivery Model
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                01
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Discovery</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Detailed consultation and requirements gathering to align technical architecture with business goals.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                02
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Engineering</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Iterative sprint development adhering to strict code standards, security protocols, and CI/CD pipelines.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                03
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Quality QA</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Automated regression, performance stress testing, and vulnerability audits prior to release.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                            <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center text-base mb-4">
                                04
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Deployment & Support</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Seamless production rollout with technical documentation, SLA retainers, and 24/7 monitoring support.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Why Choose Service Team */}
            <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            <span>Why Work With Us</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Engineering Excellence Built on Reliability
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                                <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Modern Technology Stack</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                We utilize modern frameworks like Next.js, React, Node, Flutter, and AWS to ensure fast, maintainable applications.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">Dedicated Engineering Talent</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Work directly with senior software architects and developers dedicated to your project success.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                                <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">End-to-End SLA Retainers</h3>
                            <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                Long-term maintenance, infrastructure monitoring, and security backups so your operations run uninterrupted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final Call To Action */}
            <ServiceCTA title="Engineering & IT Services" />
        </main>
    );
}
