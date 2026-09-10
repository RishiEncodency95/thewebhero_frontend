'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Smartphone, Cloud, Globe, Code2 } from 'lucide-react';

export default function HomeHero() {
    return (
        <section className="relative bg-gradient-to-b from-purple-50/50 via-white to-white text-slate-900 py-6 overflow-hidden">
            {/* Smooth Floating Animation Styles */}
            <style jsx>{`
                @keyframes floatGentle {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes blobGlow {
                    0%, 100% { transform: scale(1); opacity: 0.7; }
                    50% { transform: scale(1.05); opacity: 0.9; }
                }
                .animate-float-1 { animation: floatGentle 4s ease-in-out infinite; }
                .animate-float-2 { animation: floatSlow 5s ease-in-out infinite 1s; }
                .animate-float-3 { animation: floatGentle 4.5s ease-in-out infinite 0.5s; }
                .animate-float-4 { animation: floatSlow 6s ease-in-out infinite 1.5s; }
                .animate-blob-glow { animation: blobGlow 6s ease-in-out infinite; }
            `}</style>

            {/* Subtle Ambient Background Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-purple-200/40 via-blue-200/30 to-pink-200/30 rounded-full blur-[120px] pointer-events-none animate-blob-glow"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-[90px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-100/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Text Content Column */}
                    <div className="lg:col-span-6 space-y-6 text-left">
                        {/* Top Pill Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200/80 bg-blue-50/60 shadow-sm backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                            <span className="text-xs font-semibold text-blue-700 tracking-wider uppercase">
                                YOUR TECHNOLOGY PARTNER
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900">
                            <span className="block">Ideas. <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Solutions.</span></span>
                            <span className="block mt-1">Real <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">Impact.</span></span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-slate-600 text-base sm:text-lg max-w-lg font-normal leading-relaxed">
                            We build powerful digital experiences, intelligent software, and scalable IT solutions that help businesses grow.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-1">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2.5 px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_10px_25px_rgba(236,72,153,0.35)] hover:shadow-[0_15px_35px_rgba(236,72,153,0.5)] hover:scale-[1.02] transition-all duration-300"
                            >
                                <span>Start a Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 px-8 py-2 rounded-full border border-slate-300 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent text-slate-800 font-semibold text-sm sm:text-base shadow-sm hover:shadow-[0_10px_25px_rgba(147,51,234,0.3)] transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </div>

                        {/* Social Proof Trust Stack */}
                        <div className="flex items-center gap-4 pt-4 border-t border-slate-200 max-w-md">
                            <div className="flex -space-x-3">
                                <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-800 flex items-center justify-center font-bold text-xs text-white shadow-md">
                                    TH
                                </div>
                                <div className="w-9 h-9 rounded-full border-2 border-white bg-purple-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
                                    WH
                                </div>
                                <div className="w-9 h-9 rounded-full border-2 border-white bg-pink-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
                                    IT
                                </div>
                                <div className="w-9 h-9 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center font-bold text-xs text-white shadow-md">
                                    AI
                                </div>
                            </div>
                            <div>
                                <p className="text-xs text-slate-600 font-medium">
                                    Trusted by <span className="text-slate-900 font-bold">100+</span> businesses worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual Column */}
                    <div className="lg:col-span-6 relative flex justify-center items-center py-4">

                        {/* Outer Glow Circle Backdrop */}
                        <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] bg-gradient-to-tr from-purple-200/50 via-pink-200/40 to-blue-200/40 rounded-full blur-[70px]"></div>

                        {/* Clean Hero Graphic Orbit Container */}
                        <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">

                            {/* Rotating Dotted Linear Gradient Border Ring */}
                            <svg className="absolute h-[340px] sm:w-[460px] sm:h-[460px] animate-[spin_20s_linear_infinite] pointer-events-none z-10" viewBox="0 0 200 200">
                                <defs>
                                    <linearGradient id="dottedLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#EC4899" />
                                        <stop offset="33%" stopColor="#8B5CF6" />
                                        <stop offset="66%" stopColor="#3B82F6" />
                                        <stop offset="100%" stopColor="#06B6D4" />
                                    </linearGradient>
                                </defs>
                                <circle
                                    cx="100"
                                    cy="100"
                                    r="94"
                                    fill="none"
                                    stroke="url(#dottedLogoGrad)"
                                    strokeWidth="1.2"
                                    strokeDasharray="2.5 4.5"
                                    strokeLinecap="round"
                                />
                            </svg>

                            {/* Central 3D Logo Image */}
                            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
                                <Image
                                    src="/logoicon.png"
                                    alt="TheWebHero 3D Logo Icon"
                                    width={420}
                                    height={420}
                                    priority
                                    className="object-contain drop-shadow-[0_20px_40px_rgba(168,85,247,0.3)] transition-transform duration-500 hover:scale-102"
                                />
                            </div>

                            {/* Badge 1: Web Development (Top Center/Left) */}
                            <div className="absolute top-10 left-8 sm:left-12 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(59,130,246,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-1 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <Globe className="w-3.5 h-3.5" />
                                </div>
                                <span>Web Development</span>
                            </div>

                            {/* Badge 2: Mobile Apps (Mid-Left) */}
                            <div className="absolute top-1/3 -left-20 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(168,85,247,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-2 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                                    <Smartphone className="w-3.5 h-3.5" />
                                </div>
                                <span>Mobile Apps</span>
                            </div>

                            {/* Badge 3: Mobile Apps (Mid-Left) */}
                            <div className="absolute top-2/3 -left-18 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(168,85,247,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-2 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                                    <Smartphone className="w-3.5 h-3.5" />
                                </div>
                                <span>UI/UX Design</span>
                            </div>

                            {/* Badge 4: Cloud & DevOps (Top-Right) */}
                            <div className="absolute top-10 right-0 sm:right-0 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(236,72,153,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-3 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center">
                                    <Cloud className="w-3.5 h-3.5" />
                                </div>
                                <span>Cloud & DevOps</span>
                            </div>

                            {/* Badge 4: Custom Software (Bottom-Left) */}
                            <div className="absolute bottom-6 left-0 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-4 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span>Custom Software</span>
                            </div>

                            {/* Badge 5: IT Support (Top-Right) */}
                            <div className="absolute top-1/3 -right-20 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-4 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span>IT Support</span>
                            </div>

                            {/* Badge 6: Ecommerence (Bottom-Right) */}
                            <div className="absolute top-2/3 -right-20 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-4 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span> Ecommerence</span>
                            </div>

                            {/* Badge 7: AI & Automation (Bottom-Right) */}
                            <div className="absolute bottom-6 -right-2 bg-white/95 border border-slate-200/90 px-4 py-2 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.15)] flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 animate-float-4 backdrop-blur-md z-20">
                                <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                                    <Code2 className="w-3.5 h-3.5" />
                                </div>
                                <span>AI & Automation</span>
                            </div>

                            {/* Handwritten Text Script at Bottom Right */}
                            <div className="absolute -bottom-8 right-18  flex flex-col items-end animate-float-3 z-20">
                                <span className="font-serif italic text-sm sm:text-base text-slate-700 tracking-wide font-medium">
                                    Turning ideas into real impact
                                </span>
                                <svg className="w-24 h-6 text-purple-500 -mt-1 opacity-80" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <path d="M10 5 Q 50 25, 90 10 M 80 15 L 90 10 L 85 3" />
                                </svg>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
