'use client';

import React, { useState } from 'react';
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
    const [isExpanded, setIsExpanded] = useState(false);

    const industries = [
        {
            name: 'Healthcare',
            description: 'Digital solutions for better patient care.',
            icon: HeartPulse,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
            badgeBg: 'bg-red-50 border-red-100 text-red-500',
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
            badgeBg: 'bg-fuchsia-50 border-fuchsia-100 text-fuchsia-500',
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
            badgeBg: 'bg-indigo-50 border-indigo-100 text-indigo-500',
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
                        {/* Small Category Pill with Linear Gradient Border */}
                        <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                            <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                                INDUSTRIES WE SERVE
                            </div>
                        </div>
                        <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                            Empowering Businesses{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                Across Industries.
                            </span>
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
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1D61FF] hover:bg-[#154ECB] text-white font-semibold text-sm sm:text-base lg:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group shrink-0 cursor-pointer"
                        >
                            <span>{isExpanded ? 'Show Less' : 'View All Industries'}</span>
                            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                        </button>
                    </div>
                </div>

                {/* 5-Column Professional Compact Industry Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
                    {(isExpanded ? industries : industries.slice(0, 10)).map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <Link
                                key={idx}
                                href="/industries"
                                className="group relative rounded-xl bg-slate-950 border border-slate-800/90 shadow-xl overflow-hidden hover:border-blue-500/60 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition-all duration-500 flex flex-col justify-between aspect-[4/4] sm:aspect-[4/3.6]"
                            >
                                {/* Card Top Visual Image */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover opacity-70 group-hover:opacity-100 brightness-[1.02] group-hover:scale-102 transition-all duration-700"
                                    />
                                </div>

                                {/* Card Bottom Content & Controls Banner - 1 Row with Solid/Dark BG */}
                                <div className="relative z-10 px-3 py-2 m-2 mt-auto rounded-xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md flex items-center justify-between gap-2.5 shadow-lg group-hover:bg-slate-900 group-hover:border-blue-500/50 transition-all duration-300">
                                    {/* Left: Icon Pill + Title in 1 row */}
                                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                        {/* Icon Circular Badge */}
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300">
                                            <IconComponent className="w-4 h-4" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-slate-200 text-xs sm:text-[13px] font-medium leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                                            {item.name}
                                        </h3>
                                    </div>

                                    {/* Right: Arrow Circle Button */}
                                    <div className="w-7 h-7 rounded-full border border-slate-700/80 bg-slate-800/90 text-slate-300 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
