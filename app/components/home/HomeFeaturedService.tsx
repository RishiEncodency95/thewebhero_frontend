'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Headphones } from 'lucide-react';

export default function HomeFeaturedService() {
    const checklist = [
        'Networking Setup & Management',
        'Server Handling & Implementation',
        'Desktop Support',
        'OS Issue Fixing & Support',
        'Hardware Installation',
        'Data Recovery',
    ];

    return (
        <section className="bg-white text-slate-900 py-16 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
                        FEATURED SERVICE
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        Complete IT Support for Your Business
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                        From networking to data recovery, we keep your business running smoothly.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Column: Image */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3]">
                        <Image
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                            alt="IT Support Specialist at Server Rack"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                    </div>

                    {/* Middle Column: Checklist & CTA */}
                    <div className="lg:col-span-4 space-y-6">
                        <ul className="space-y-3.5">
                            {checklist.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-slate-700 text-sm font-semibold">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <Link
                                href="/services/it-support"
                                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-semibold text-sm shadow-[0_10px_20px_rgba(37,99,235,0.3)] transition-all duration-300"
                            >
                                <span>Explore IT Support</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: 24/7 IT Support Card */}
                    <div className="lg:col-span-3">
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-blue-50/80 to-purple-50/60 border border-blue-200 text-center relative overflow-hidden shadow-lg">
                            <div className="w-16 h-16 rounded-full bg-white border border-blue-200 text-blue-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                                <Headphones className="w-8 h-8 animate-pulse text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-1">
                                24/7
                            </h3>
                            <h4 className="text-base font-bold text-blue-600 mb-2">
                                IT Support
                            </h4>
                            <p className="text-slate-600 text-xs leading-relaxed font-medium">
                                Always here when you need us. Immediate response & minimal downtime guaranteed.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
