'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import {
    LayoutGrid,
    UserCheck,
    Database,
    BarChart3,
    Calendar,
    ShoppingBag,
    Cloud,
    Code2,
    ArrowRight,
    Grid2X2
} from 'lucide-react';

export default function HomeSolutions() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const solutions = [
        {
            icon: Grid2X2,
            title: 'Business Management Systems',
            description: 'Streamline your operations with custom business management software.',
            href: '/solutions/business-management',
            cardBg: 'bg-[#FFFBF5] border-[#FEEED6] hover:border-[#F59E0B]',
            iconBg: 'bg-[#FFF3E0] border-[#FFE0B2] text-[#D97706]',
            btnBorder: 'border-[#FFE0B2] text-[#D97706] group-hover:bg-[#D97706]',
        },
        {
            icon: UserCheck,
            title: 'CRM Solutions',
            description: 'Build stronger customer relationships and boost productivity.',
            href: '/solutions/crm-solutions',
            cardBg: 'bg-[#F5F8FF] border-[#D6E4FF] hover:border-[#2563EB]',
            iconBg: 'bg-[#E8F0FE] border-[#D2E3FC] text-[#2563EB]',
            btnBorder: 'border-[#D2E3FC] text-[#2563EB] group-hover:bg-[#2563EB]',
        },
        {
            icon: Database,
            title: 'ERP Systems',
            description: 'Integrated solutions to manage your core business processes efficiently.',
            href: '/solutions/erp-systems',
            cardBg: 'bg-[#F4FBF7] border-[#D1F2D9] hover:border-[#10B981]',
            iconBg: 'bg-[#E6F4EA] border-[#CEEAD6] text-[#059669]',
            btnBorder: 'border-[#CEEAD6] text-[#059669] group-hover:bg-[#059669]',
        },
        {
            icon: BarChart3,
            title: 'Admin Dashboards',
            description: 'Get powerful, data-driven dashboards for better decision making.',
            href: '/solutions/admin-dashboards',
            cardBg: 'bg-[#FAF5FF] border-[#F3E8FF] hover:border-[#9333EA]',
            iconBg: 'bg-[#F3E8FF] border-[#E9D5FF] text-[#9333EA]',
            btnBorder: 'border-[#E9D5FF] text-[#9333EA] group-hover:bg-[#9333EA]',
        },
        {
            icon: Calendar,
            title: 'Booking Platforms',
            description: 'Smart booking solutions for appointments, events, and services.',
            href: '/solutions/booking-platforms',
            cardBg: 'bg-[#F0FDFB] border-[#CFFAFE] hover:border-[#06B6D4]',
            iconBg: 'bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7]',
            btnBorder: 'border-[#BAE6FD] text-[#0284C7] group-hover:bg-[#0284C7]',
        },
        {
            icon: ShoppingBag,
            title: 'eCommerce Platforms',
            description: 'Scalable and secure eCommerce solutions to grow your online business.',
            href: '/solutions/ecommerce-platforms',
            cardBg: 'bg-[#FFF5F7] border-[#FFE4E6] hover:border-[#F43F5E]',
            iconBg: 'bg-[#FFE4E6] border-[#FECDD3] text-[#E11D48]',
            btnBorder: 'border-[#FECDD3] text-[#E11D48] group-hover:bg-[#E11D48]',
        },
        {
            icon: Cloud,
            title: 'SaaS Products',
            description: 'Custom SaaS products built for scalability and long-term success.',
            href: '/solutions/saas-products',
            cardBg: 'bg-[#F5F8FF] border-[#DBEAFE] hover:border-[#3B82F6]',
            iconBg: 'bg-[#E0F2FE] border-[#BAE6FD] text-[#0284C7]',
            btnBorder: 'border-[#BAE6FD] text-[#0284C7] group-hover:bg-[#0284C7]',
        },
        {
            icon: Code2,
            title: 'Custom Software',
            description: 'Tailored software solutions designed to fit your unique business needs.',
            href: '/solutions/custom-software',
            cardBg: 'bg-[#F5F3FF] border-[#DDD6FE] hover:border-[#6366F1]',
            iconBg: 'bg-[#EDE9FE] border-[#DDD6FE] text-[#6D28D9]',
            btnBorder: 'border-[#DDD6FE] text-[#6D28D9] group-hover:bg-[#6D28D9]',
        },
    ];

    const row1Solutions = solutions.slice(0, 4);
    const row2Solutions = solutions.slice(4, 8);

    return (
        <section ref={sectionRef} className="bg-[#F8FAFC] text-slate-900 py-2 lg:py-6 relative overflow-hidden border-y border-slate-200/60">
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-6">
                    {/* Header Left */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FF] border border-[#D0E2FF] text-[#2563EB] text-xs sm:text-sm lg:text-[12px] font-semibold tracking-wider uppercase mb-2 shadow-2xs">
                            <LayoutGrid className="w-4 h-4 text-[#2563EB]" />
                            <span>OUR SOLUTIONS</span>
                        </div>
                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#0F172A] leading-tight">
                            <span className="text-[#2563EB]">Custom Solutions</span> for Every Business Need
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] mt-2 max-w-2xl font-normal leading-relaxed">
                            We help businesses across industries with powerful and scalable solutions designed for real growth.
                        </p>
                    </div>

                    {/* Middle Handwritten Sketch Note & CTA Right */}
                    <div className="flex items-center gap-6 self-start lg:self-auto">
                        {/* Sketched 'Ideas to Impact' Note */}
                        <div className="hidden sm:flex flex-col items-center -rotate-6 transform select-none">
                            <span className="text-[#475569] font-serif italic text-base sm:text-lg lg:text-xl font-semibold tracking-wide">
                                Ideas to
                            </span>
                            <span className="text-[#475569] font-serif italic text-base sm:text-lg lg:text-xl font-semibold tracking-wide relative -mt-1">
                                Impact
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
                            href="/solutions"
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#1D61FF] hover:bg-[#154ECB] text-white font-semibold text-sm sm:text-base lg:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group shrink-0"
                        >
                            <span>View All Solutions</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Row 1: Cards Slide in from LEFT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4">
                    {row1Solutions.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                style={{ transitionDelay: `${idx * 120}ms` }}
                                className={`group p-4.5 sm:p-5 rounded-2xl border ${item.cardBg} shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-700 ease-out relative overflow-hidden flex flex-col justify-between ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-12 sm:-translate-x-20'
                                }`}
                            >
                                {/* Inner Radial Ambient Light Glow on Hover */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Top Row: Icon Badge (Left) & Circular Arrow Action (Right) */}
                                <div className="flex items-center justify-between mb-3 relative z-10">
                                    <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                                        <IconComp className="w-5 h-5" />
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-white/90 border ${item.btnBorder} shadow-2xs flex items-center justify-center group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300`}>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom Row: Title & Description */}
                                <div className="relative z-10 pt-1">
                                    <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-[#2563EB] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal group-hover:text-slate-600 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                {/* Row 2: Cards Slide in from RIGHT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {row2Solutions.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                style={{ transitionDelay: `${idx * 120}ms` }}
                                className={`group p-4.5 sm:p-5 rounded-2xl border ${item.cardBg} shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-700 ease-out relative overflow-hidden flex flex-col justify-between ${
                                    isVisible
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 translate-x-12 sm:translate-x-20'
                                }`}
                            >
                                {/* Inner Radial Ambient Light Glow on Hover */}
                                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Top Row: Icon Badge (Left) & Circular Arrow Action (Right) */}
                                <div className="flex items-center justify-between mb-3 relative z-10">
                                    <div className={`w-10 h-10 rounded-xl border ${item.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-2xs`}>
                                        <IconComp className="w-5 h-5" />
                                    </div>
                                    <div className={`w-8 h-8 rounded-full bg-white/90 border ${item.btnBorder} shadow-2xs flex items-center justify-center group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300`}>
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                                    </div>
                                </div>

                                {/* Bottom Row: Title & Description */}
                                <div className="relative z-10 pt-1">
                                    <h3 className="text-slate-900 font-bold text-sm sm:text-base leading-snug mb-1 group-hover:text-[#2563EB] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed font-normal group-hover:text-slate-600 transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}


