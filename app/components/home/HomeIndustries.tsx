'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    HeartPulse,
    GraduationCap,
    Landmark,
    ShoppingBag,
    Building,
    Plane,
    Truck,
    Factory,
    Rocket,
    Code2,
    Building2,
    Sprout,
    ArrowRight,
    Award,
    BarChart2
} from 'lucide-react';

export default function HomeIndustries() {
    const industries = [
        {
            name: 'Healthcare',
            description: 'Digital solutions for better patient care.',
            icon: HeartPulse,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-pink-50 border-pink-100 text-pink-600',
            btnColor: 'group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            name: 'Education',
            description: 'Smarter learning for a brighter future.',
            icon: GraduationCap,
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-blue-50 border-blue-100 text-blue-600',
            btnColor: 'group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            name: 'Finance',
            description: 'Secure and scalable financial solutions.',
            icon: Landmark,
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
            btnColor: 'group-hover:bg-emerald-600 group-hover:text-white',
        },
        {
            name: 'eCommerce',
            description: 'Powering online business growth.',
            icon: ShoppingBag,
            image: 'https://images.unsplash.com/photo-1556742049-0a67cf80b727?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-pink-50 border-pink-100 text-pink-600',
            btnColor: 'group-hover:bg-pink-600 group-hover:text-white',
        },
        {
            name: 'Real Estate',
            description: 'Digital experiences for modern real estate.',
            icon: Building,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-purple-50 border-purple-100 text-purple-600',
            btnColor: 'group-hover:bg-purple-600 group-hover:text-white',
        },
        {
            name: 'Travel',
            description: 'Seamless travel solutions for everyone.',
            icon: Plane,
            image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-cyan-50 border-cyan-100 text-cyan-600',
            btnColor: 'group-hover:bg-cyan-600 group-hover:text-white',
        },
        {
            name: 'Logistics',
            description: 'Efficient supply chain and delivery solutions.',
            icon: Truck,
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-orange-50 border-orange-100 text-orange-600',
            btnColor: 'group-hover:bg-orange-600 group-hover:text-white',
        },
        {
            name: 'Manufacturing',
            description: 'Streamline operations with smart technology.',
            icon: Factory,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-purple-50 border-purple-100 text-purple-600',
            btnColor: 'group-hover:bg-purple-600 group-hover:text-white',
        },
        {
            name: 'Startups',
            description: 'Turning ideas into successful businesses.',
            icon: Rocket,
            image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-pink-50 border-pink-100 text-pink-600',
            btnColor: 'group-hover:bg-pink-600 group-hover:text-white',
        },
        {
            name: 'Software',
            description: 'Custom software for unique needs.',
            icon: Code2,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-blue-50 border-blue-100 text-blue-600',
            btnColor: 'group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            name: 'Corporate',
            description: 'Enterprise solutions for long-term growth.',
            icon: Building2,
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-slate-100 border-slate-200 text-slate-700',
            btnColor: 'group-hover:bg-slate-700 group-hover:text-white',
        },
        {
            name: 'NGOs & Social Impact',
            description: 'Technology for a better tomorrow.',
            icon: Sprout,
            image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
            btnColor: 'group-hover:bg-emerald-600 group-hover:text-white',
        },
    ];

    return (
        <section className="bg-white text-slate-900 py-4 lg:py-8 relative overflow-hidden border-t border-slate-100">
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header (Matches HomeSolutions Section Layout) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-6">
                    {/* Header Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#2563EB] text-xs sm:text-sm lg:text-[12px] font-semibold tracking-wider uppercase mb-2 shadow-2xs">
                            <Building2 className="w-4 h-4 text-[#2563EB]" />
                            <span>INDUSTRIES WE SERVE</span>
                        </div>
                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#0F172A] leading-tight">
                            Empowering Businesses <span className="text-[#2563EB]">Across Industries</span>
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] mt-2 max-w-2xl font-normal leading-relaxed">
                            We understand your industry&apos;s unique challenges and build tailored digital solutions to help you grow faster, work smarter, and achieve your goals.
                        </p>
                    </div>

                    {/* Middle Handwritten Sketch Note & CTA Right */}
                    <div className="flex items-center gap-6 self-start lg:self-auto">
                        {/* Sketched Note Accent */}
                        <div className="hidden sm:flex flex-col items-center -rotate-6 transform select-none">
                            <span className="text-[#475569] font-serif italic text-base sm:text-lg lg:text-xl font-semibold tracking-wide">
                                Different
                            </span>
                            <span className="text-[#475569] font-serif italic text-base sm:text-lg lg:text-xl font-semibold tracking-wide relative -mt-1">
                                Industries
                                {/* Sketched Underline Accent */}
                                <svg
                                    className="absolute -bottom-2 left-0 w-full h-2 text-[#2563EB]"
                                    viewBox="0 0 60 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 5.5C15 2 35 1.5 59 6.5"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </div>

                        {/* Top Right CTA Button */}
                        <Link
                            href="/industries"
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1D61FF] hover:bg-[#154ECB] text-white font-semibold text-sm sm:text-base lg:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group shrink-0"
                        >
                            <span>View All Industries</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* 5-Column Professional Compact Industry Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 ">
                    {industries.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <Link
                                key={idx}
                                href="/industries"
                                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/90 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                {/* Top Image Banner */}
                                <div className="relative h-28 sm:h-30 w-full overflow-hidden bg-slate-900 shrink-0">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-108"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                                </div>

                                <div className="p-3.5 pt-2 flex flex-col justify-between flex-1 bg-white">
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-[#2563EB] transition-colors line-clamp-1">
                                            {item.name}
                                        </h3>
                                        <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed font-normal mt-1 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="mt-1 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500 group-hover:text-[#2563EB] transition-colors">
                                        <span>Explore</span>
                                        <div className="w-5.5 h-5.5 rounded-full bg-slate-100 border border-slate-200/60 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs">
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
