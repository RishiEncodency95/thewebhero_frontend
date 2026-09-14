'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Target, Users, Zap, Headphones, X } from 'lucide-react';

export default function HomeAbout() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const features = [
        {
            icon: Target,
            title: 'Client-Focused Approach',
            description: 'Your goals, Our priority.',
            iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
        },
        {
            icon: Users,
            title: 'Experienced Development Team',
            description: 'Skilled professionals.',
            iconBg: 'bg-purple-50 text-purple-600 border-purple-200',
        },
        {
            icon: Zap,
            title: 'Modern & Scalable Solutions',
            description: 'Future-ready technology.',
            iconBg: 'bg-pink-50 text-pink-600 border-pink-200',
        },
        {
            icon: Headphones,
            title: 'Long Term Support',
            description: "We're with you always.",
            iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
        },
    ];

    return (
        <section className="bg-gray-50 text-slate-900 mt-2 py-2 lg:py-6 relative overflow-hidden border-t border-slate-100">
            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                            ABOUT THEWEBHERO
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                            Technology That Turns Ideas{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Into Impact
                            </span>
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                            TheWebHero is a results-driven IT company focused on building innovative, scalable, and user-centric digital solutions. We help businesses transform their ideas into powerful digital products with the right strategy, technology, and creative execution.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="/about-us"
                                className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_10px_20px_rgba(37,99,235,0.25)] transition-all duration-300"
                            >
                                <span>Know More About Us</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Center Column: Video / Image Card */}
                    <div className="lg:col-span-4 relative group">
                        {/* Outer Glowing Ambient Aura */}
                        <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/20 via-purple-600/30 to-blue-600/20 rounded-[36px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Outer Frame Container */}
                        <div
                            onClick={() => setIsVideoModalOpen(true)}
                            className="relative p-3 rounded-[30px] bg-slate-950 border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-amber-400/60 hover:shadow-[0_25px_60px_rgba(168,85,247,0.35)] transition-all duration-500 cursor-pointer overflow-hidden"
                        >
                            {/* SVG Definitions for Gradients & Ornaments */}
                            <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
                                <defs>
                                    <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#FDE68A" />
                                        <stop offset="40%" stopColor="#F59E0B" />
                                        <stop offset="70%" stopColor="#D97706" />
                                        <stop offset="100%" stopColor="#78350F" />
                                    </linearGradient>
                                    <linearGradient id="themeFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#60A5FA" />
                                        <stop offset="50%" stopColor="#C084FC" />
                                        <stop offset="100%" stopColor="#F472B6" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Inner Card Container */}
                            <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/3]">
                                {/* Workspace Photo Background - Crisp, Vibrant & Clear */}
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                    alt="TheWebHero Team Workspace"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                                />

                                {/* Subtle Edge Vignette Overlay to enhance contrast for ornaments */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none"></div>

                                {/* Outer Card Frame Border Lines with Rounded Corners */}
                                <div className="absolute inset-2 border border-amber-400/40 rounded-[18px] pointer-events-none z-10"></div>
                                <div className="absolute inset-3 border border-purple-500/30 rounded-[14px] pointer-events-none z-10"></div>

                                {/* Top Center Emblem Ornament */}
                                <div className="absolute top-1 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-1 text-amber-300">
                                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-400/60"></div>
                                    <svg className="w-5 h-5 text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                                    </svg>
                                    <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-400/60"></div>
                                </div>

                                {/* Bottom Center Emblem Ornament */}
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-1 text-amber-300">
                                    <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-amber-400/60"></div>
                                    <svg className="w-4 h-4 text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                                        <circle cx="12" cy="12" r="3" />
                                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                    <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-amber-400/60"></div>
                                </div>

                                {/* Corner Ornate Filigree Vector Graphics (Matching Reference Image) */}

                                {/* Top-Left Corner Filigree */}
                                <div className="absolute top-0 left-0 w-24 h-24 z-20 pointer-events-none">
                                    <svg className="w-full h-full text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" viewBox="0 0 100 100" fill="none" stroke="url(#goldFiligree)" strokeWidth="1.5">
                                        <path d="M 5 50 C 5 20, 20 5, 50 5 M 10 50 C 10 25, 25 10, 50 10" />
                                        <path d="M 12 12 C 25 18, 18 25, 12 12 Z" fill="url(#goldFiligree)" />
                                        <path d="M 22 8 C 30 22, 12 35, 5 20 C 10 12, 18 5, 22 8 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <path d="M 8 22 C 22 30, 35 12, 20 5 C 12 10, 5 18, 8 22 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <circle cx="18" cy="18" r="3" fill="#FDE68A" />
                                    </svg>
                                </div>

                                {/* Top-Right Corner Filigree */}
                                <div className="absolute top-0 right-0 w-24 h-24 z-20 pointer-events-none transform scale-x-[-1]">
                                    <svg className="w-full h-full text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" viewBox="0 0 100 100" fill="none" stroke="url(#goldFiligree)" strokeWidth="1.5">
                                        <path d="M 5 50 C 5 20, 20 5, 50 5 M 10 50 C 10 25, 25 10, 50 10" />
                                        <path d="M 12 12 C 25 18, 18 25, 12 12 Z" fill="url(#goldFiligree)" />
                                        <path d="M 22 8 C 30 22, 12 35, 5 20 C 10 12, 18 5, 22 8 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <path d="M 8 22 C 22 30, 35 12, 20 5 C 12 10, 5 18, 8 22 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <circle cx="18" cy="18" r="3" fill="#FDE68A" />
                                    </svg>
                                </div>

                                {/* Bottom-Left Corner Filigree */}
                                <div className="absolute bottom-0 left-0 w-24 h-24 z-20 pointer-events-none transform scale-y-[-1]">
                                    <svg className="w-full h-full text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" viewBox="0 0 100 100" fill="none" stroke="url(#goldFiligree)" strokeWidth="1.5">
                                        <path d="M 5 50 C 5 20, 20 5, 50 5 M 10 50 C 10 25, 25 10, 50 10" />
                                        <path d="M 12 12 C 25 18, 18 25, 12 12 Z" fill="url(#goldFiligree)" />
                                        <path d="M 22 8 C 30 22, 12 35, 5 20 C 10 12, 18 5, 22 8 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <path d="M 8 22 C 22 30, 35 12, 20 5 C 12 10, 5 18, 8 22 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <circle cx="18" cy="18" r="3" fill="#FDE68A" />
                                    </svg>
                                </div>

                                {/* Bottom-Right Corner Filigree */}
                                <div className="absolute bottom-0 right-0 w-24 h-24 z-20 pointer-events-none transform scale-x-[-1] scale-y-[-1]">
                                    <svg className="w-full h-full text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" viewBox="0 0 100 100" fill="none" stroke="url(#goldFiligree)" strokeWidth="1.5">
                                        <path d="M 5 50 C 5 20, 20 5, 50 5 M 10 50 C 10 25, 25 10, 50 10" />
                                        <path d="M 12 12 C 25 18, 18 25, 12 12 Z" fill="url(#goldFiligree)" />
                                        <path d="M 22 8 C 30 22, 12 35, 5 20 C 10 12, 18 5, 22 8 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <path d="M 8 22 C 22 30, 35 12, 20 5 C 12 10, 5 18, 8 22 Z" fill="url(#goldFiligree)" opacity="0.85" />
                                        <circle cx="18" cy="18" r="3" fill="#FDE68A" />
                                    </svg>
                                </div>

                                {/* Inner Nested Transparent Screen Frame so Image displays clearly inside */}
                                <div className="absolute inset-7 rounded-lg border-2 border-amber-400/50 pointer-events-none z-10 flex flex-col items-center justify-center">

                                    {/* Twinkling Ambient Sparkle Stars Across Starry Image Background */}
                                    <div className="absolute top-3 left-6 text-amber-200 text-xs animate-pulse opacity-90">✦</div>
                                    <div className="absolute top-10 right-8 text-blue-200 text-xs animate-pulse opacity-80" style={{ animationDuration: '2.5s' }}>✨</div>
                                    <div className="absolute bottom-6 left-10 text-purple-200 text-xs animate-pulse opacity-90" style={{ animationDuration: '3.5s' }}>✦</div>
                                    <div className="absolute bottom-10 right-12 text-amber-300 text-[10px] animate-pulse opacity-75" style={{ animationDuration: '1.8s' }}>★</div>
                                    <div className="absolute top-16 left-1/3 text-pink-300 text-[9px] animate-ping opacity-60">✦</div>
                                    <div className="absolute bottom-14 right-1/3 text-cyan-200 text-[10px] animate-pulse opacity-80">✦</div>

                                    {/* Shooting Star Line Accent at Bottom */}
                                    <div className="absolute bottom-5 left-8 right-16 h-[1px] bg-gradient-to-r from-transparent via-amber-200/50 to-transparent transform -rotate-6 pointer-events-none"></div>
                                </div>

                                {/* Center Interactive Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                                    <button className="pointer-events-auto relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 via-purple-600 to-blue-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform duration-300">
                                        <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-35"></span>
                                        <Play className="w-7 h-7 fill-white translate-x-0.5 relative z-10" />
                                    </button>
                                </div>

                                {/* Bottom-Left Video Pill Badge (Exact Replica of User Reference Screenshot) */}
                                <div className="absolute bottom-3 left-3 z-30 bg-slate-950/90 border border-amber-400/50 px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white shadow-xl">
                                    <Play className="w-3.5 h-3.5 fill-white text-white" />
                                    <span>Video</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Feature List Cards */}
                    <div className="lg:col-span-3 space-y-4">
                        {features.map((feature, idx) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group"
                                >
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${feature.iconBg} shrink-0 shadow-sm`}>
                                        <IconComponent className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-xs text-slate-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Video Playback Modal Popup */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
                    <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                        {/* Modal Header Bar */}
                        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                            <span className="text-sm font-semibold text-white flex items-center gap-2">
                                <Play className="w-4 h-4 text-blue-500 fill-blue-500" /> Watch Our Story — TheWebHero
                            </span>
                            <button
                                onClick={() => setIsVideoModalOpen(false)}
                                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                                aria-label="Close Video Modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        {/* Video Player */}
                        <div className="relative aspect-video w-full bg-black">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                controls
                                playsInline
                                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-41319-large.mp4"
                            >
                                Your browser does not support video playback.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
