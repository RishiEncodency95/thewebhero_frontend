import React from 'react';
import Image, { type StaticImageData } from 'next/image';
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
import { splitHighlight, type HomeSections } from '../../lib/home-sections';
import ExpandToggle from './ExpandToggle';

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


// Icon, colour and stock image per service page; cards for other links cycle through FALLBACK.
const VISUALS: Record<string, { icon: React.ElementType; iconGradient: string; image: StaticImageData }> = {
    '/services/web-development': { icon: Globe, iconGradient: 'from-blue-500 to-indigo-600', image: webDevImg },
    '/services/mobile-app-development': { icon: Smartphone, iconGradient: 'from-purple-500 to-pink-600', image: appDevImg },
    '/services/custom-software-development': { icon: Code2, iconGradient: 'from-amber-500 to-orange-600', image: softDevImg },
    '/services/ui-ux-design': { icon: Palette, iconGradient: 'from-pink-500 to-rose-600', image: uiUxImg },
    '/services/ai-automation': { icon: Brain, iconGradient: 'from-indigo-500 to-purple-600', image: aiSoluImg },
    '/services/ecommerce-development': { icon: ShoppingBag, iconGradient: 'from-emerald-500 to-teal-600', image: ecommerceImg },
    '/services/cloud-devops': { icon: Cloud, iconGradient: 'from-sky-500 to-blue-600', image: cloudDevImg },
    '/services/managed-it-support': { icon: Headphones, iconGradient: 'from-teal-500 to-cyan-600', image: itSupportImg },
    '/services/backend-development': { icon: Server, iconGradient: 'from-violet-500 to-purple-700', image: backendApiImg },
    '/services/seo-digital-growth': { icon: TrendingUp, iconGradient: 'from-orange-500 to-amber-600', image: seoGrowthImg },
    '/services/qa-testing': { icon: ShieldCheck, iconGradient: 'from-rose-500 to-pink-600', image: qaTestingImg },
};
const FALLBACK = [
    { icon: Globe, iconGradient: 'from-blue-500 to-indigo-600', image: webDevImg },
    { icon: Smartphone, iconGradient: 'from-purple-500 to-pink-600', image: appDevImg },
    { icon: Code2, iconGradient: 'from-amber-500 to-orange-600', image: softDevImg },
    { icon: Palette, iconGradient: 'from-pink-500 to-rose-600', image: uiUxImg },
    { icon: Brain, iconGradient: 'from-indigo-500 to-purple-600', image: aiSoluImg },
    { icon: ShoppingBag, iconGradient: 'from-emerald-500 to-teal-600', image: ecommerceImg },
    { icon: Cloud, iconGradient: 'from-sky-500 to-blue-600', image: cloudDevImg },
    { icon: Headphones, iconGradient: 'from-teal-500 to-cyan-600', image: itSupportImg },
    { icon: Server, iconGradient: 'from-violet-500 to-purple-700', image: backendApiImg },
    { icon: TrendingUp, iconGradient: 'from-orange-500 to-amber-600', image: seoGrowthImg },
    { icon: ShieldCheck, iconGradient: 'from-rose-500 to-pink-600', image: qaTestingImg },
];

export default function HomeServices({ content }: { content: HomeSections['services'] }) {
    const services = content.items.map((item, i) => {
        const look = VISUALS[item.link] ?? FALLBACK[i % FALLBACK.length];
        return {
            id: `${item.link}-${i}`,
            icon: look.icon,
            title: item.title,
            href: item.link || '/services',
            iconGradient: look.iconGradient,
            image: item.image || look.image,
            overlayText: item.tag,
        };
    });

    return (
        <section className="bg-slate-50 text-slate-900 py-2 lg:py-6 relative overflow-hidden border-t border-slate-200/80">
            <div className="w-full px-4 sm:px-6 lg:px-20 relative z-10">

                {/* Top Section Header */}
                <div className="text-center max-w-5xl mx-auto mb-6 relative">

                    {/* Small Category Pill with Linear Gradient Border */}
                    <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                        <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                            {content.eyebrow}
                        </div>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                        {splitHighlight(content.title).map((part, i) =>
                            part.hl ? (
                                <span key={i} className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                    {part.text}
                                </span>
                            ) : (
                                part.text
                            ),
                        )}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed mt-1">
                        {content.description}
                    </p>
                </div>

                {/* Services Grid Layout - 5 cards per row on large screens */}
                <div id="home-services-list" className="twh-rail scroll-mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                    {services.map((service, i) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={`${i >= 10 ? 'twh-more ' : ''}group relative rounded-xl bg-slate-950 border border-slate-800/90 shadow-xl overflow-hidden hover:border-blue-500/60 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition-all duration-500 flex flex-col justify-between aspect-[4/4] sm:aspect-[4/3.6]`}
                            >
                                {/* Card Top Visual Image */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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

                {/* Centered "View All Services": expands the grid when there are more than 10 cards */}
                <div className="mt-6 text-center">
                    {services.length > 10 ? (
                        <ExpandToggle
                            target="home-services-list"
                            moreLabel={content.buttonLabel || 'View All Services'}
                            lessLabel="Show Fewer Services"
                            moreIcon={<ArrowRight className="w-5 h-5" />}
                            lessIcon={<ChevronUp className="w-5 h-5" />}
                            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium text-sm sm:text-base shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer"
                        />
                    ) : (
                        content.buttonLabel && (
                            <Link href={content.buttonHref || '/services'} className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-medium text-sm sm:text-base shadow-[0_10px_30px_rgba(99,102,241,0.35)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.55)] hover:scale-105 transition-all duration-300 cursor-pointer">
                                <span>{content.buttonLabel}</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        )
                    )}
                </div>

            </div>
        </section>
    );
}



