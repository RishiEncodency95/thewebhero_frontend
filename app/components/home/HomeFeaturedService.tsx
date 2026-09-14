'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Headphones,
    Globe,
    Server,
    Monitor,
    Settings,
    Scissors,
    Disc,
    ArrowRight,
    ChevronRight,
    ShieldCheck,
    TrendingUp,
    Users,
    Zap
} from 'lucide-react';

export default function HomeFeaturedService() {
    const services = [
        {
            icon: Globe,
            title: 'Networking Setup & Management',
            description: 'Secure, high-speed & scalable network infrastructure for modern enterprises.',
        },
        {
            icon: Server,
            title: 'Server Handling & Implementation',
            description: 'Expert cloud & on-premise server deployment, configuration, and maintenance.',
        },
        {
            icon: Monitor,
            title: '24/7 Desktop & Endpoint Support',
            description: 'Fast, reliable remote & on-site technical user assistance guaranteed.',
        },
        {
            icon: Settings,
            title: 'OS Issue Fixing & Optimization',
            description: 'Comprehensive maintenance for Windows, macOS, and Linux systems.',
        },
        {
            icon: Scissors,
            title: 'Hardware Installation & Upgrades',
            description: 'Certified technical setup for workstations, server racks, and network gear.',
        },
        {
            icon: Disc,
            title: 'Data Recovery & Backup Solutions',
            description: 'Proactive disaster recovery & secure business data restoration.',
        },
    ];

    // Structured Data for Google Rich Snippets & Search Engine Indexing (SEO)
    const jsonLdSchema = {
        '@context': 'https://schema.org',
        '@type': 'ITService',
        'name': 'Managed IT Support Services & Infrastructure Solutions',
        'serviceType': 'Managed IT Support Services',
        'provider': {
            '@type': 'Organization',
            'name': 'The Web Hero',
        },
        'description':
            'Complete managed IT support, server infrastructure, endpoint management, networking setup, and 24/7 disaster recovery services for growing businesses.',
        'areaServed': 'Global',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'IT Support & Infrastructure Catalog',
            'itemListElement': services.map((service) => ({
                '@type': 'Offer',
                'itemOffered': {
                    '@type': 'Service',
                    'name': service.title,
                    'description': service.description,
                },
            })),
        },
    };

    return (
        <section
            id="featured-it-support-services"
            aria-labelledby="featured-it-support-heading"
            className="bg-white text-slate-900 py-2 lg:py-6 relative overflow-hidden"
            itemScope
            itemType="https://schema.org/ITService"
        >
            {/* JSON-LD Schema Injection for Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />

            {/* Background Decorative Soft Glows */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-7 gap-3">
                    {/* Header Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3FF] border border-blue-100 text-[#2563EB] text-[11px] font-semibold tracking-wider uppercase mb-2 shadow-xs">
                            <Headphones className="w-3.5 h-3.5 text-[#2563EB]" aria-hidden="true" />
                            <span>FEATURED SERVICE</span>
                        </div>
                        <h2
                            id="featured-it-support-heading"
                            className="text-lg lg:text-3xl font-semibold tracking-tight text-[#0F172A]"
                            itemProp="name"
                        >
                            Complete <span className="text-[#2563EB]">IT Support</span> for Your Business
                        </h2>
                        <p
                            className="text-slate-500 text-md mt-1 max-w-2xl font-normal leading-relaxed"
                            itemProp="description"
                        >
                            From networking to data recovery, we keep your business running smoothly with proactive managed IT support and quick solutions.
                        </p>
                    </div>

                    {/* Header Right Bullets */}
                    <div className="hidden md:flex items-center gap-2 text-[#64748B] text-[10px] sm:text-[11px] lg:text-[14px] font-semibold tracking-wider uppercase pb-0.5">
                        <span>FAST RESPONSE</span>
                        <span className="text-slate-300" aria-hidden="true">•</span>
                        <span>RELIABLE SUPPORT</span>
                        <span className="text-slate-300" aria-hidden="true">•</span>
                        <span>BUSINESS CONTINUITY</span>
                    </div>
                </div>

                {/* Main Content 3-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">

                    {/* Column 1: Image Showcase Box (5 cols) */}
                    <article className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-[380px] flex flex-col justify-between p-5 sm:p-6 shadow-xl border border-slate-100 group">
                        {/* Background Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                            alt="Enterprise Managed IT Support & Server Room Infrastructure Setup"
                            title="Enterprise Managed IT Support & Server Room Infrastructure Setup"
                            fill
                            priority
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#07132B]/90 via-[#07132B]/70 to-[#07132B]/40" />

                        {/* Top Content on Image */}
                        <div className="relative z-10 pt-1">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-3 backdrop-blur-xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
                                <span>LESS DOWNTIME</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2.5 tracking-tight drop-shadow-md">
                                More Productivity,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-100 to-white">Zero Interruption</span>
                            </h3>
                            <p className="text-slate-200/90 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-sm font-normal">
                                Enterprise-grade IT infrastructure &amp; 24/7 expert support to keep your business operating smoothly every single day.
                            </p>
                        </div>

                        {/* Bottom Glassmorphic Stats Bar inside Image */}
                        <div className="relative z-10 mt-4 bg-[#0B1E3D]/80 backdrop-blur-md border border-white/15 rounded-xl p-3 grid grid-cols-3 gap-2 shadow-2xl">
                            {/* Stat 1 */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
                                    <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                                </div>
                                <span className="text-[12px] font-normal text-white leading-tight">
                                    Secure Infrastructure
                                </span>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
                                    <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                                </div>
                                <span className="text-[12px] font-normal text-white leading-tight">
                                    Stronger Performance
                                </span>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-400/30">
                                    <Users className="w-3.5 h-3.5" aria-hidden="true" />
                                </div>
                                <span className="text-[12px] font-normal text-white leading-tight">
                                    Happier Teams
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* Column 2: Service Checklist & Buttons (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-3.5 py-1">
                        {/* Services List */}
                        <div className="space-y-3" role="list" aria-label="IT Support Services List">
                            {services.map((item, idx) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={idx} role="listitem" className="flex items-start gap-3 group/item cursor-pointer">
                                        <div className="w-8 h-8 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-[#2563EB] group-hover/item:text-white transition-colors duration-200 shadow-xs">
                                            <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-semibold text-xs sm:text-sm lg:text-[16px] leading-tight group-hover/item:text-[#2563EB] transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-slate-500 text-[14px] font-normal mt-0.5">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Action Buttons */}
                        <div className="flex items-center gap-3 pt-1">
                            <Link
                                href="/services/it-support"
                                aria-label="Explore IT Support Services"
                                title="Explore Managed IT Support Services"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group"
                            >
                                <span>Explore IT Support</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                            </Link>

                            {/* <Link
                                href="/contact"
                                aria-label="Learn More about IT Infrastructure Solutions"
                                title="Learn More about IT Infrastructure Solutions"
                                className="inline-flex items-center gap-1 text-slate-700 hover:text-[#2563EB] font-semibold text-xs sm:text-sm transition-colors py-1.5 px-1 group"
                            >
                                <span>Learn More</span>
                                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#2563EB] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link> */}
                        </div>
                    </div>

                    {/* Column 3: 24/7 IT Support Featured Card (3 cols) */}
                    <aside aria-label="24/7 IT Support Highlights" className="lg:col-span-3">
                        <div className="h-full rounded-2xl p-5 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#F0F5FF] via-white to-[#F6F9FF] border border-blue-100 shadow-xl shadow-blue-900/5 text-center flex flex-col justify-between group">
                            {/* Radial Glow Behind Icon */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />

                            {/* Top Card Section */}
                            <div className="relative z-10">
                                {/* Live Status Badge */}
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold mb-3 shadow-2xs">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span>24/7 Live Desk</span>
                                </div>

                                {/* Circular Icon Container */}
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2563EB] to-indigo-600 text-white flex items-center justify-center mx-auto mb-3.5 shadow-lg shadow-blue-500/30 border border-blue-400/30 transition-transform duration-300 group-hover:scale-105">
                                    <Headphones className="w-8 h-8 text-white" aria-hidden="true" />
                                </div>

                                {/* Stat Number */}
                                <h3 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-0.5">
                                    24/7
                                </h3>
                                <h4 className="text-base font-bold text-[#2563EB] mb-2">
                                    Enterprise IT Support
                                </h4>

                                {/* Paragraph */}
                                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[220px] mx-auto font-normal mb-4">
                                    Always here when you need us. Immediate response &amp; zero downtime guarantee.
                                </p>

                                {/* Key Highlights Box inside Card */}
                                <div className="space-y-2 text-left bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-blue-100/90 shadow-2xs">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                        <div className="w-4 h-4 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                                        <span>&lt; 15 Min Average Response</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                        <div className="w-4 h-4 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                                        <span>99.99% Uptime Guarantee</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                        <div className="w-4 h-4 rounded-full bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                                        <span>Dedicated Certified Team</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Metric Pills */}
                            <div className="relative z-10 mt-4 pt-3 border-t border-slate-200/80">
                                <div className="grid grid-cols-3 gap-1.5 text-center">
                                    {/* Sub-item 1 */}
                                    <div className="flex flex-col items-center p-1.5 rounded-lg bg-blue-50/70 border border-blue-100/60">
                                        <Zap className="w-4 h-4 text-[#2563EB] mb-1" aria-hidden="true" />
                                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight">
                                            Fast SLA
                                        </span>
                                    </div>

                                    {/* Sub-item 2 */}
                                    <div className="flex flex-col items-center p-1.5 rounded-lg bg-blue-50/70 border border-blue-100/60">
                                        <ShieldCheck className="w-4 h-4 text-[#2563EB] mb-1" aria-hidden="true" />
                                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight">
                                            Certified
                                        </span>
                                    </div>

                                    {/* Sub-item 3 */}
                                    <div className="flex flex-col items-center p-1.5 rounded-lg bg-blue-50/70 border border-blue-100/60">
                                        <TrendingUp className="w-4 h-4 text-[#2563EB] mb-1" aria-hidden="true" />
                                        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight">
                                            99.9% Uptime
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>

            </div>
        </section>
    );
}


