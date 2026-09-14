'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Globe,
    Smartphone,
    Code2,
    Palette,
    Brain,
    ShoppingBag,
    Cloud,
    Headphones,
    Server,
    TrendingUp,
    ShieldCheck,
    ChevronUp
} from 'lucide-react';

// Import local image assets from app/assets/home/service/
import webDevImg from '../../assets/home/service/web-dev.png';
import appDevImg from '../../assets/home/service/app-dev.png';
import softDevImg from '../../assets/home/service/soft-dev.png';
import uiUxImg from '../../assets/home/service/ui-ux-des.png';
import aiSoluImg from '../../assets/home/service/ai-solu.png';
import ecommerceImg from '../../assets/home/service/e-commerce.png';
import cloudDevImg from '../../assets/home/service/cloud-dev.png';
import itSupportImg from '../../assets/home/service/it-support.png';
import backendApiImg from '../../assets/home/service/backkend-api-dev.png';
import seoGrowthImg from '../../assets/home/service/seo-growth.png';
import qaTestingImg from '../../assets/home/service/qa-testing.png';

export default function HomeServices() {
    const [showAll, setShowAll] = useState(false);

    const services = [
        {
            id: 'web-dev',
            icon: Globe,
            title: 'Web Development',
            href: '/services/web-development',
            iconGradient: 'from-blue-500 to-indigo-600',
            barColor: 'bg-blue-500',
            image: webDevImg,
            overlayText: 'Ideas into Websites',
        },
        {
            id: 'mobile-dev',
            icon: Smartphone,
            title: 'Mobile App Development',
            href: '/services/mobile-app-development',
            iconGradient: 'from-purple-500 to-pink-600',
            barColor: 'bg-purple-500',
            image: appDevImg,
            overlayText: 'Better Solutions Brighter Tomorrow',
        },
        {
            id: 'software-dev',
            icon: Code2,
            title: 'Software Development',
            href: '/services/software-development',
            iconGradient: 'from-amber-500 to-orange-600',
            barColor: 'bg-amber-500',
            image: softDevImg,
            overlayText: '</>',
        },
        {
            id: 'ui-ux',
            icon: Palette,
            title: 'UI/UX Design',
            href: '/services/ui-ux-design',
            iconGradient: 'from-pink-500 to-rose-600',
            barColor: 'bg-pink-500',
            image: uiUxImg,
            overlayText: 'Design Beyond Expectations',
        },
        {
            id: 'ai-solutions',
            icon: Brain,
            title: 'AI Solutions',
            href: '/services/ai-solutions',
            iconGradient: 'from-indigo-500 to-purple-600',
            barColor: 'bg-indigo-500',
            image: aiSoluImg,
            overlayText: 'Smarter Ideas Bigger Possibilities',
        },
        {
            id: 'ecommerce',
            icon: ShoppingBag,
            title: 'eCommerce Development',
            href: '/services/ecommerce-development',
            iconGradient: 'from-emerald-500 to-teal-600',
            barColor: 'bg-emerald-500',
            image: ecommerceImg,
            overlayText: 'Global Online Stores',
        },
        {
            id: 'cloud-devops',
            icon: Cloud,
            title: 'Cloud & DevOps',
            href: '/services/cloud-devops',
            iconGradient: 'from-sky-500 to-blue-600',
            barColor: 'bg-sky-500',
            image: cloudDevImg,
            overlayText: 'AWS • Azure • Cloud',
        },
        {
            id: 'it-support',
            icon: Headphones,
            title: 'IT Support',
            href: '/services/it-support',
            iconGradient: 'from-teal-500 to-cyan-600',
            barColor: 'bg-teal-500',
            image: itSupportImg,
            overlayText: '24/7 Always Here',
        },
        {
            id: 'backend-api',
            icon: Server,
            title: 'Backend & API Development',
            href: '/services/backend-api-development',
            iconGradient: 'from-violet-500 to-purple-700',
            barColor: 'bg-violet-500',
            image: backendApiImg,
            overlayText: 'API Integration',
        },
        {
            id: 'seo-growth',
            icon: TrendingUp,
            title: 'SEO & Digital Growth',
            href: '/services/seo-digital-growth',
            iconGradient: 'from-orange-500 to-amber-600',
            barColor: 'bg-orange-500',
            image: seoGrowthImg,
            overlayText: 'Higher Reach More Growth',
        },
        {
            id: 'qa-testing',
            icon: ShieldCheck,
            title: 'QA & Testing',
            href: '/services/qa-testing',
            iconGradient: 'from-rose-500 to-pink-600',
            barColor: 'bg-rose-500',
            image: qaTestingImg,
            overlayText: 'Quality Builds Trust',
        },
    ];

    const visibleServices = showAll ? services : services.slice(0, 10);

    return (
        <section className="bg-slate-50 text-slate-900 py-2 lg:py-6 relative overflow-hidden border-t border-slate-200/80">
            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Top Section Header */}
                <div className="text-center max-w-5xl mx-auto mb-6 relative">

                    {/* Small Category Pill with Linear Gradient Border */}
                    <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                            OUR SERVICES
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                        Transforming Ideas Into{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                            Digital Reality.
                        </span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed mt-1">
                        We deliver end-to-end IT solutions, enterprise software, and scalable digital products to help modern businesses innovate, accelerate growth, and lead in a competitive digital landscape with a creative &amp; tech-forward approach.
                    </p>
                </div>

                {/* Services Grid Layout - 5 cards per row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                    {visibleServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group relative rounded-xl bg-slate-950 border border-slate-800/90 shadow-xl overflow-hidden hover:border-blue-500/60 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition-all duration-500 flex flex-col justify-between aspect-[4/4] sm:aspect-[4/3.6]"
                            >
                                {/* Card Top Visual Image */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover opacity-70 group-hover:opacity-100 brightness-[1.02] group-hover:scale-102 transition-all duration-700"
                                    />
                                </div>

                                {/* Floating Ambient Overlay Text on Image */}
                                {service.overlayText && (
                                    <div className="relative z-10 p-3">
                                        <span className="inline-block px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-700/60 text-[10px] font-semibold text-slate-200 tracking-wide uppercase shadow-sm">
                                            {service.overlayText}
                                        </span>
                                    </div>
                                )}

                                {/* Card Bottom Content & Controls Banner - 1 Row with Solid/Dark BG */}
                                <div className="relative z-10 px-3 py-2 m-2 mt-auto rounded-xl bg-slate-950/90 border border-slate-800/90 backdrop-blur-md flex items-center justify-between gap-2.5 shadow-lg group-hover:bg-slate-900 group-hover:border-blue-500/50 transition-all duration-300">
                                    {/* Left: Icon Pill + Title in 1 row */}
                                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                                        {/* Icon Circular Badge */}
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${service.iconGradient} flex items-center justify-center text-white shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                                            <IconComponent className="w-4 h-4" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-slate-200 text-xs sm:text-[13px] font-medium leading-snug group-hover:text-blue-300 transition-colors line-clamp-2">
                                            {service.title}
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

                {/* Centered Expandable "View All Services" Button */}
                <div className="mt-6 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 hover:from-blue-500 hover:to-pink-600 text-white font-medium text-sm sm:text-base shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <span>{showAll ? 'Show Fewer Services' : 'View All Services'}</span>
                        {showAll ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ArrowRight className="w-5 h-5" />
                        )}
                    </button>
                </div>

            </div>
        </section>
    );
}



