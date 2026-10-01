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
            desc: 'Understand your vision, goals and needs.',
            tag: 'Ideas to Insights',
            Icon: Search,
            numColor: 'bg-purple-100 text-purple-700 border-purple-200',
            iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
            tagBg: 'bg-purple-50/80 text-purple-700 border-purple-100',
            glow: 'group-hover:border-purple-300 group-hover:shadow-purple-500/10',
            cardBg: 'from-purple-50 via-white to-white'
        },
        {
            num: '02',
            title: 'Strategy',
            desc: 'Plan the solution with a clear roadmap.',
            tag: 'Plan for Success',
            Icon: Lightbulb,
            numColor: 'bg-blue-100 text-blue-700 border-blue-200',
            iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
            tagBg: 'bg-blue-50/80 text-blue-700 border-blue-100',
            glow: 'group-hover:border-blue-300 group-hover:shadow-blue-500/10',
            cardBg: 'from-blue-50 via-white to-white'
        },
        {
            num: '03',
            title: 'Design',
            desc: 'Craft user-centric UI/UX that delights.',
            tag: 'Design with Purpose',
            Icon: Palette,
            numColor: 'bg-pink-100 text-pink-700 border-pink-200',
            iconBg: 'bg-pink-50 text-pink-600 border-pink-100',
            tagBg: 'bg-pink-50/80 text-pink-700 border-pink-100',
            glow: 'group-hover:border-pink-300 group-hover:shadow-pink-500/10',
            cardBg: 'from-pink-50 via-white to-white'
        },
        {
            num: '04',
            title: 'Development',
            desc: 'Build with modern, scalable technology.',
            tag: 'Build with Quality',
            Icon: Code2,
            numColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
            iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
            tagBg: 'bg-emerald-50/80 text-emerald-700 border-emerald-100',
            glow: 'group-hover:border-emerald-300 group-hover:shadow-emerald-500/10',
            cardBg: 'from-emerald-50 via-white to-white'
        },
        {
            num: '05',
            title: 'Testing',
            desc: 'Verify performance, security and speed.',
            tag: 'Test for Excellence',
            Icon: ShieldCheck,
            numColor: 'bg-sky-100 text-sky-700 border-sky-200',
            iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
            tagBg: 'bg-sky-50/80 text-sky-700 border-sky-100',
            glow: 'group-hover:border-sky-300 group-hover:shadow-sky-500/10',
            cardBg: 'from-sky-50 via-white to-white'
        },
        {
            num: '06',
            title: 'Deployment',
            desc: 'Launch your product smoothly and safely.',
            tag: 'Go Live Confidently',
            Icon: Rocket,
            numColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
            iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
            tagBg: 'bg-indigo-50/80 text-indigo-700 border-indigo-100',
            glow: 'group-hover:border-indigo-300 group-hover:shadow-indigo-500/10',
            cardBg: 'from-indigo-50 via-white to-white'
        },
        {
            num: '07',
            title: 'Support',
            desc: 'Ongoing maintenance and steady growth.',
            tag: 'Always Here for You',
            Icon: Headphones,
            numColor: 'bg-amber-100 text-amber-700 border-amber-200',
            iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
            tagBg: 'bg-amber-50/80 text-amber-700 border-amber-100',
            glow: 'group-hover:border-amber-300 group-hover:shadow-amber-500/10',
            cardBg: 'from-amber-50 via-white to-white'
        }
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FE] via-[#F0F4FD] to-[#E9F0FA] text-slate-900 py-2 lg:py-6 border-t border-blue-100/60 shadow-inner">
            {/* Dotted Grid Atmosphere Background */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3" />

            <div className="relative w-full px-4 sm:px-6 lg:px-10 z-10">

                {/* Header — same structure as HomeTechnologies / HomeProjects */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative mb-6">
                    <div className="max-w-3xl">
                        {/* Gradient-bordered category pill */}
                        <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                                <Settings className="w-3.5 h-3.5" />
                                <span>OUR PROCESS</span>
                            </div>
                        </div>

                        <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                            A Transparent{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Development Process
                            </span>
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] mt-2 max-w-2xl font-normal leading-relaxed">
                            From idea to launch, we follow a clear, collaborative, and result-driven
                            process to turn your vision into a successful digital product.
                        </p>
                    </div>

                    {/* Handwritten text decoration */}
                    <div className="hidden lg:flex flex-col items-center absolute right-[350px] top-4 -rotate-6 transform pointer-events-none select-none">
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide">Your Idea</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2">Our Process</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2 relative">
                            Real Results
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#1D61FF]" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5C15 2 35 1.5 59 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-2 shrink-0 mt-2 md:mt-0">
                        <Link
                            href="/company/process"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all group hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            <span>Learn More About Our Process</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                        <span className="text-[12px] font-bold tracking-[0.12em] text-slate-400 uppercase">
                            Simple steps. Big results.
                        </span>
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
                                <div key={idx} className="flex h-full flex-col items-center group">
                                    {/* Number Pill Top Badge */}
                                    <div className={`w-8 h-8 rounded-full border ${step.numColor} font-black text-xs flex items-center justify-center shadow-xs mb-3 z-10 bg-white group-hover:scale-110 transition-transform`}>
                                        {step.num}
                                    </div>

                                    {/* Card Container */}
                                    <div className={`w-full flex-1 bg-gradient-to-b ${step.cardBg} rounded-2xl p-4 border border-slate-200/80 shadow-sm transition-all duration-300 ${step.glow} hover:-translate-y-1.5 hover:shadow-md flex flex-col text-center`}>
                                        <div>
                                            {/* Icon Container */}
                                            <div className={`w-12 h-12 rounded-2xl ${step.iconBg} border flex items-center justify-center mx-auto mb-4 shadow-xs transition-transform group-hover:scale-110`}>
                                                <StepIcon className="w-6 h-6" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                                {step.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                                {step.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Tag Pill */}
                                        <div className="mt-auto pt-3 border-t border-slate-100">
                                            <span className={`inline-block w-full py-1.5 px-2 rounded-xl border text-[12px] font-bold ${step.tagBg}`}>
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
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-600">
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
