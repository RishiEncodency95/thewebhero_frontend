'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Rocket } from 'lucide-react';

type ServiceCTAProps = {
    title: string;
};

export default function ServiceCTA({ title }: ServiceCTAProps) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white py-16 lg:py-20">
            {/* Background Light Bubbles */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md mb-6">
                    <Rocket className="h-3.5 w-3.5 text-yellow-300" />
                    <span>Ready To Scale?</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight mb-6">
                    Accelerate Your Business With Premier <span className="underline decoration-yellow-400 underline-offset-8">{title}</span>
                </h2>

                <p className="text-base sm:text-lg text-blue-100 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                    Partner with our elite engineering team to design, build, and deploy robust digital solutions tailored to your technical requirements.
                </p>

                <div className="flex flex-wrap justify-center items-center gap-4">
                    <Link
                        href="/get-a-quote"
                        className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-sm font-extrabold text-blue-900 shadow-xl transition-all hover:bg-blue-50 hover:scale-[1.03]"
                    >
                        <span>Request a Quote</span>
                        <ArrowRight className="h-4 w-4 text-blue-700" />
                    </Link>

                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                    >
                        <MessageSquare className="h-4 w-4" />
                        <span>Schedule a Consultation</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
