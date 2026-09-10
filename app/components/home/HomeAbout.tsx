'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Target, Users, Zap, Headphones } from 'lucide-react';

export default function HomeAbout() {
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
        <section className="bg-white text-slate-900 py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                            ABOUT THEWEBHERO
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-slate-900">
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
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-[0_10px_20px_rgba(37,99,235,0.25)] transition-all duration-300"
                            >
                                <span>Know More About Us</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Center Column: Video / Image Card */}
                    <div className="lg:col-span-4 relative group">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 aspect-[4/3]">
                            {/* Realistic Workspace Photo */}
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="TheWebHero Team Workspace"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                                <button className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.8)] group-hover:scale-110 transition-transform duration-300">
                                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                                </button>
                                <span className="text-xs font-semibold text-white tracking-wide bg-slate-900/80 px-3.5 py-1 rounded-full border border-slate-700 backdrop-blur-sm">
                                    Watch Our Story
                                </span>
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
        </section>
    );
}
