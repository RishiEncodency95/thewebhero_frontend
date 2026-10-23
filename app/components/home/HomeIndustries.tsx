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
import { splitHighlight, type HomeSections } from '../../lib/home-sections';
import ExpandToggle from './ExpandToggle';

// Icons follow the card order.
const ICONS = [HeartPulse, GraduationCap, Landmark, ShoppingBag, Building, Plane, Truck, Factory, Rocket, Code2, Building2, Sprout];
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80';

export default function HomeIndustries({ content }: { content: HomeSections['industries'] }) {
    const industries = content.items.map((item, i) => ({
        name: item.title,
        description: item.description,
        href: item.link || '/industries',
        image: item.image || FALLBACK_IMAGE,
        icon: ICONS[i % ICONS.length],
    }));

    return (
        <section className="bg-white text-slate-900 py-4 lg:py-8 relative overflow-hidden border-t border-slate-100">
            {/* Soft Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

            <div className="w-full px-4 sm:px-6 lg:px-20 relative z-10">

                {/* Section Header (Matches HomeSolutions Section Layout) */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-6">
                    {/* Header Left */}
                    <div>
                        {/* Small Category Pill with Linear Gradient Border */}
                        <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                            <div className="inline-flex items-center px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                                {content.eyebrow}
                            </div>
                        </div>
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
                        <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] mt-2 max-w-2xl font-normal leading-relaxed">
                            {content.description}
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

                        {/* Top Right CTA: expands the grid when there are more than 10 cards */}
                        {industries.length > 10 ? (
                        <ExpandToggle
                            target="home-industries-list"
                            moreLabel={content.buttonLabel || 'View All Industries'}
                            lessLabel="Show Less"
                            moreIcon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
                            lessIcon={<ArrowRight className="w-4 h-4 transition-transform duration-300 -rotate-90" />}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-sm sm:text-base lg:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group shrink-0 cursor-pointer hover:shadow-lg hover:shadow-blue-500/30"
                        />
                        ) : (
                            content.buttonLabel && (
                                <Link href={content.buttonHref || '/industries'} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold text-sm sm:text-base lg:text-sm shadow-md shadow-blue-500/25 transition-all duration-200 group shrink-0 cursor-pointer hover:shadow-lg hover:shadow-blue-500/30">
                                    <span>{content.buttonLabel}</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            )
                        )}
                    </div>
                </div>

                {/* 5-Column Professional Compact Industry Cards Grid */}
                <div id="home-industries-list" className="twh-rail scroll-mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {industries.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className={`${idx >= 10 ? 'twh-more ' : ''}group relative rounded-xl bg-slate-950 border border-slate-800/90 shadow-xl overflow-hidden hover:border-blue-500/60 hover:shadow-[0_15px_30px_rgba(37,99,235,0.25)] transition-all duration-500 flex flex-col justify-between aspect-[4/4] sm:aspect-[4/3.6]`}
                            >
                                {/* Card Top Visual Image */}
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        fill
                                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
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
