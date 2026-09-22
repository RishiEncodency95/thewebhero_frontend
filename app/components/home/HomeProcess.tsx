'use client';

import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    Search,
    Lightbulb,
    Palette,
    Code2,
    ShieldCheck,
    Rocket,
    Headphones,
    Settings,
    Users,
    TrendingUp
} from 'lucide-react';

export default function HomeProcess() {
    const steps = [
        {
            num: '01',
            title: 'Discovery',
            desc: 'Understand your vision, goals, and requirements.',
            tag: 'Ideas to Insights',
            Icon: Search,
            numColor: 'bg-purple-100 text-purple-700 border-purple-200',
            iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
            tagBg: 'bg-purple-50/80 text-purple-700 border-purple-100',
            glow: 'group-hover:border-purple-300 group-hover:shadow-purple-500/10'
        },
        {
            num: '02',
            title: 'Strategy',
            desc: 'Plan the right solution with clear roadmap and timeline.',
            tag: 'Plan for Success',
            Icon: Lightbulb,
            numColor: 'bg-blue-100 text-blue-700 border-blue-200',
            iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
            tagBg: 'bg-blue-50/80 text-blue-700 border-blue-100',
            glow: 'group-hover:border-blue-300 group-hover:shadow-blue-500/10'
        },
        {
            num: '03',
            title: 'Design',
            desc: 'Create user-centric UI/UX that delivers great experiences.',
            tag: 'Design with Purpose',
            Icon: Palette,
            numColor: 'bg-pink-100 text-pink-700 border-pink-200',
            iconBg: 'bg-pink-50 text-pink-600 border-pink-100',
            tagBg: 'bg-pink-50/80 text-pink-700 border-pink-100',
            glow: 'group-hover:border-pink-300 group-hover:shadow-pink-500/10'
        },
        {
            num: '04',
            title: 'Development',
            desc: 'Bring ideas to life with modern and scalable technology.',
            tag: 'Build with Quality',
            Icon: Code2,
            numColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
            iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
            tagBg: 'bg-emerald-50/80 text-emerald-700 border-emerald-100',
            glow: 'group-hover:border-emerald-300 group-hover:shadow-emerald-500/10'
        },
        {
            num: '05',
            title: 'Testing',
            desc: 'Ensure performance, security, and a bug-free experience.',
            tag: 'Test for Excellence',
            Icon: ShieldCheck,
            numColor: 'bg-sky-100 text-sky-700 border-sky-200',
            iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
            tagBg: 'bg-sky-50/80 text-sky-700 border-sky-100',
            glow: 'group-hover:border-sky-300 group-hover:shadow-sky-500/10'
        },
        {
            num: '06',
            title: 'Deployment',
            desc: 'Launch your product smoothly and make it live.',
            tag: 'Go Live with Confidence',
            Icon: Rocket,
            numColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
            iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
            tagBg: 'bg-indigo-50/80 text-indigo-700 border-indigo-100',
            glow: 'group-hover:border-indigo-300 group-hover:shadow-indigo-500/10'
        },
        {
            num: '07',
            title: 'Support',
            desc: 'Provide ongoing maintenance and continuous growth.',
            tag: 'Always Here for You',
            Icon: Headphones,
            numColor: 'bg-amber-100 text-amber-700 border-amber-200',
            iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
            tagBg: 'bg-amber-50/80 text-amber-700 border-amber-100',
            glow: 'group-hover:border-amber-300 group-hover:shadow-amber-500/10'
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FE] via-[#F0F4FD] to-[#E9F0FA] text-slate-900 py-16 lg:py-24 border-t border-blue-100/60 shadow-inner">
            {/* Dotted Grid Atmosphere Background */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        {/* Pill Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-purple-200 bg-purple-100/80 text-purple-700 text-xs font-extrabold tracking-wider uppercase mb-4 shadow-2xs">
                            <Settings className="w-3.5 h-3.5 text-purple-600" />
                            <span>OUR PROCESS</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            A Transparent{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Development Process
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base sm:text-lg mt-3 font-normal leading-relaxed">
                            From idea to launch, we follow a clear, collaborative, and result-driven process to turn your vision into a successful digital product.
                        </p>
                    </div>

                    {/* Right side CTA & Handwritten script */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0 lg:self-end">
                        {/* Handwritten Annotation */}
                        <div className="hidden sm:flex flex-col items-end relative -rotate-3 text-right">
                            <span className="font-serif italic font-bold text-slate-800 text-xl tracking-tight leading-none">
                                Your Idea
                            </span>
                            <span className="font-serif italic font-bold text-slate-800 text-xl tracking-tight leading-none">
                                Our Process
                            </span>
                            <span className="font-serif italic font-bold text-[#1D61FF] text-xl tracking-tight leading-none">
                                Real Results
                            </span>

                            {/* Curved Arrow pointing right to button */}
                            <svg className="w-12 h-8 text-[#1D61FF] absolute -right-14 top-2 pointer-events-none" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M5 25 C 20 5, 35 5, 45 15" />
                                <path d="M38 12 L 45 15 L 42 22" />
                            </svg>
                        </div>

                        <div className="flex flex-col items-center sm:items-end gap-2">
                            <Link
                                href="/company/process"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1D61FF] hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
                            >
                                <span>Learn More About Our Process</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <span className="text-[11px] font-extrabold tracking-widest text-slate-400 uppercase">
                                SIMPLE STEPS. BIG RESULTS.
                            </span>
                        </div>
                    </div>
                </div>

                {/* 7-Step Horizontal Process Pipeline */}
                <div className="relative">
                    {/* Sinusoidal Connecting Wavy Line Behind Step Pills */}
                    <div className="hidden lg:block absolute top-[16px] inset-x-8 h-8 pointer-events-none z-0">
                        <svg className="w-full h-full text-blue-200/80" viewBox="0 0 1200 30" fill="none" preserveAspectRatio="none">
                            <path d="M0 15 Q 100 0, 200 15 T 400 15 T 600 15 T 800 15 T 1000 15 T 1200 15" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
                        {steps.map((step, idx) => {
                            const StepIcon = step.Icon;
                            return (
                                <div key={idx} className="flex flex-col items-center group">
                                    {/* Number Pill Top Badge */}
                                    <div className={`w-8 h-8 rounded-full border ${step.numColor} font-black text-xs flex items-center justify-center shadow-xs mb-3 z-10 bg-white group-hover:scale-110 transition-transform`}>
                                        {step.num}
                                    </div>

                                    {/* Card Container */}
                                    <div className={`w-full bg-white/95 rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all duration-300 ${step.glow} hover:-translate-y-1.5 flex flex-col justify-between text-center min-h-[260px]`}>
                                        <div>
                                            {/* Icon Container */}
                                            <div className={`w-12 h-12 rounded-2xl ${step.iconBg} border flex items-center justify-center mx-auto mb-4 shadow-xs transition-transform group-hover:scale-110`}>
                                                <StepIcon className="w-6 h-6" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                                {step.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Tag Pill */}
                                        <div className="mt-4 pt-3 border-t border-slate-100">
                                            <span className={`inline-block w-full py-1.5 px-2 rounded-xl border text-[11px] font-bold ${step.tagBg}`}>
                                                {step.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Highlights Bar inside Section */}
                <div className="mt-14 pt-6 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-600">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-blue-600" />
                            <span>Transparent Communication</span>
                        </div>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-blue-600" />
                            <span>Collaborative Approach</span>
                        </div>
                        <span className="hidden sm:inline text-slate-300">|</span>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-blue-600" />
                            <span>On-Time Delivery</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:block w-12 h-[2px] bg-slate-300" />
                        <span className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
                            FROM IDEAS TO IMPACT
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
