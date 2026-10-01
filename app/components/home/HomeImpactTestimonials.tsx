'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, Users, Clock, TrendingUp, ChevronLeft, ChevronRight, Star, Target, Quote } from 'lucide-react';

/* ---------------------------------------------------------------- data ---- */

const impactCards = [
    {
        num: '01',
        Icon: Zap,
        title: 'Faster Operations',
        desc: 'Automate seamless business workflows.',
        tile: 'from-blue-500 to-indigo-600',
        card: 'from-slate-50 via-blue-50/40 to-blue-50/60 border-blue-100/80',
        numText: 'text-blue-300',
        art: 'bars',
        artColor: 'text-blue-400',
    },
    {
        num: '02',
        Icon: Users,
        title: 'Better Customer Experience',
        desc: 'Fast load times and engaging interfaces.',
        tile: 'from-pink-500 to-fuchsia-600',
        card: 'from-pink-50/70 via-pink-50/40 to-white border-pink-100/80',
        numText: 'text-pink-300',
        art: 'wave',
        artColor: 'text-pink-300',
    },
    {
        num: '03',
        Icon: Clock,
        title: 'Reduced Manual Work',
        desc: 'Save time with smart automated systems.',
        tile: 'from-orange-500 to-amber-600',
        card: 'from-orange-50/80 via-orange-50/40 to-white border-orange-100/80',
        numText: 'text-orange-300',
        art: 'gears',
        artColor: 'text-orange-300',
    },
    {
        num: '04',
        Icon: TrendingUp,
        title: 'Scalable Growth',
        desc: 'Built to grow along with your revenue.',
        tile: 'from-emerald-500 to-green-600',
        card: 'from-emerald-50/80 via-emerald-50/40 to-white border-emerald-100/80',
        numText: 'text-emerald-300',
        art: 'growth',
        artColor: 'text-emerald-400',
    },
];

/** Replace these with real, attributable client quotes before launch. */
const testimonials = [
    {
        quote: 'Working with TheWebHero was a smooth experience. Their IT support and cloud migration saved us hundreds of server downtime hours.',
        name: 'Ananya Sharma',
        title: 'CTO, GlobalLogix',
        company: 'GlobalLogix',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        ring: 'border-blue-500',
        chip: 'bg-blue-50 text-blue-700',
        mark: 'text-blue-100',
        stars: 5,
    },
    {
        quote: 'TheWebHero delivered our platform exactly as we envisioned. Professional team, on-time delivery and excellent communication throughout the project.',
        name: 'Rohit Mehta',
        title: 'Founder, TechNova',
        company: 'TechNova',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        ring: 'border-pink-500',
        chip: 'bg-pink-50 text-pink-700',
        mark: 'text-pink-100',
        stars: 5,
    },
];

/* ------------------------------------------------------- decorative art --- */

function CardArt({ kind, className }: { kind: string; className: string }) {
    const common = `pointer-events-none absolute bottom-0 right-0 ${className}`;

    if (kind === 'bars') {
        return (
            <svg className={`${common} h-12 w-20 opacity-60`} viewBox="0 0 96 64" fill="currentColor" aria-hidden="true">
                {[0, 1, 2, 3].map((i) => (
                    <rect key={i} x={10 + i * 20} y={54 - i * 13} width="12" height={10 + i * 13} rx="3" opacity={0.35 + i * 0.18} />
                ))}
            </svg>
        );
    }
    if (kind === 'wave') {
        return (
            <svg className={`${common} h-12 w-24 opacity-50`} viewBox="0 0 112 64" fill="none" stroke="currentColor" aria-hidden="true">
                <path d="M0 44 C 20 18, 40 58, 60 32 S 96 10, 112 30" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
                <path d="M0 58 C 22 34, 44 68, 66 44 S 98 26, 112 44" strokeWidth="6" strokeLinecap="round" opacity="0.28" />
            </svg>
        );
    }
    if (kind === 'gears') {
        return (
            <svg className={`${common} h-16 w-16 opacity-50`} viewBox="0 0 80 80" fill="currentColor" aria-hidden="true">
                <path d="M46 26l2-6h8l2 6 5 3 6-2 4 7-4 5v6l4 5-4 7-6-2-5 3-2 6h-8l-2-6-5-3-6 2-4-7 4-5v-6l-4-5 4-7 6 2z" opacity="0.45" />
                <circle cx="52" cy="42" r="7" fill="#fff" opacity="0.85" />
                <path d="M22 54l1.5-4.5h6L31 54l3.5 2 4.5-1.5 3 5-3 3.5v4.5l3 3.5-3 5-4.5-1.5-3.5 2L29.5 76h-6L22 71.5 18.5 69.5 14 71l-3-5 3-3.5v-4.5L11 54.5l3-5 4.5 1.5z" opacity="0.3" />
            </svg>
        );
    }
    return (
        <svg className={`${common} h-12 w-20 opacity-60`} viewBox="0 0 96 64" fill="none" aria-hidden="true">
            <path d="M6 56 L30 34 L50 44 L88 10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <path d="M70 10 L88 10 L88 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            <rect x="4" y="46" width="10" height="16" rx="3" fill="currentColor" opacity="0.28" />
            <rect x="22" y="38" width="10" height="24" rx="3" fill="currentColor" opacity="0.28" />
            <rect x="40" y="44" width="10" height="18" rx="3" fill="currentColor" opacity="0.28" />
        </svg>
    );
}

/* -------------------------------------------------------------- section --- */

export default function HomeImpactTestimonials() {
    const [idx, setIdx] = useState(0);

    const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    // Two-up on desktop, wrapping round so the pair always fills.
    const visible = [
        testimonials[idx],
        testimonials[(idx + 1) % testimonials.length],
    ];

    return (
        <section className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-br from-white via-slate-50/60 to-indigo-50/40 py-2 lg:py-6 text-slate-900">
            {/* Dotted corner texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-0 h-32 w-28 opacity-[0.18] [background-image:radial-gradient(#6366f1_1.5px,transparent_1.5px)] [background-size:12px_12px]"
            />

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

                    {/* ============ LEFT — Real Business Impact ============ */}
                    <div className="lg:col-span-5">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-blue-700">
                            <Target className="h-4 w-4" aria-hidden="true" />
                            Why Choose Us
                        </div>

                        <h2 className="text-lg lg:text-2xl mt-2 font-semibold tracking-tight text-slate-900 leading-tight">
                            Real Business{' '}
                            <span className="relative inline-block text-[#3b5bfd]">
                                Impact
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#3b5bfd]"
                                />
                            </span>
                        </h2>

                        <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-slate-600 sm:text-[16px]">
                            We don&apos;t just build software, we create solutions that drive
                            measurable results for businesses.
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {impactCards.map((card) => (
                                <article
                                    key={card.num}
                                    className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${card.card} px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                                >
                                    <span className={`absolute right-3 top-3 text-[20px] font-extrabold leading-none ${card.numText}`} aria-hidden="true">
                                        {card.num}
                                    </span>

                                    <div className="flex items-center gap-2.5 pr-7">
                                        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${card.tile} text-white shadow-md transition-transform group-hover:scale-105`}>
                                            <card.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                                        </span>
                                        <h3 className="text-[14px] font-bold leading-tight text-[#0b1020]">
                                            {card.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2.5 max-w-[86%] text-[13px] leading-[1.45] text-slate-600">
                                        {card.desc}
                                    </p>

                                    <CardArt kind={card.art} className={card.artColor} />
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* ============ RIGHT — Testimonials ============ */}
                    <div className="lg:col-span-7">
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-pink-600">
                                <Quote className="h-4 w-4 fill-current" aria-hidden="true" />
                                Testimonials
                            </div>

                        <h2 className="text-lg lg:text-2xl mt-2 font-semibold tracking-tight text-slate-900 leading-tight">
                                What Our Clients{' '}
                                <span className="relative inline-block text-[#ec2c8a]">
                                    Say
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#ec2c8a]"
                                    />
                                </span>
                            </h2>

                            <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-slate-600 sm:text-[16px]">
                                Trusted by businesses worldwide for delivering quality, innovation and
                                measurable results.
                            </p>

                            {/* Handwritten note */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute right-0 top-0 hidden select-none xl:block"
                            >
                                <div className="-rotate-[8deg] text-right font-serif text-[15px] italic leading-tight text-[#3b5bfd]">
                                    <span className="block">Client success</span>
                                    <span className="block">is our success</span>
                                </div>
                                <svg className="ml-auto mt-1 h-8 w-20 text-[#ec2c8a]" viewBox="0 0 80 32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                                    <path d="M4 4 C 10 22, 30 30, 58 22" />
                                    <path d="M50 26 L 60 21 L 56 13" />
                                </svg>
                            </div>
                        </div>

                        {/* Slider */}
                        <div className="relative mt-6">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {visible.map((t, i) => (
                                    <figure
                                        key={`${t.name}-${i}`}
                                        className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_10px_30px_-12px_rgba(20,40,90,0.18)]"
                                    >
                                        <Quote
                                            className={`pointer-events-none absolute -top-1 right-3 h-16 w-16 fill-current ${t.mark}`}
                                            aria-hidden="true"
                                        />

                                        <div className="flex items-center gap-1" aria-label={`${t.stars} out of 5 stars`}>
                                            {Array.from({ length: t.stars }).map((_, s) => (
                                                <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                                            ))}
                                        </div>

                                        <blockquote className="relative mt-4 text-[15px] font-medium italic leading-[1.65] text-slate-700">
                                            &ldquo;{t.quote}&rdquo;
                                        </blockquote>

                                        <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                                            <span className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 ${t.ring}`}>
                                                <Image src={t.avatar} alt="" fill sizes="48px" className="object-cover" />
                                            </span>

                                            <span className="min-w-0">
                                                <cite className="block text-[15px] font-bold not-italic text-[#0b1020]">
                                                    {t.name}
                                                </cite>
                                                <span className="block text-[13px] text-slate-500">{t.title}</span>
                                            </span>

                                            <span className={`ml-auto hidden shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[12px] font-semibold sm:inline-flex ${t.chip}`}>
                                                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                                                    <path d="M12 2l8.66 5v10L12 22 3.34 17V7z" opacity=".85" />
                                                </svg>
                                                {t.company}
                                            </span>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>

                            {/* Arrows — 44px targets, sat just outside the cards */}
                            <button
                                type="button"
                                onClick={prev}
                                aria-label="Previous testimonial"
                                className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:shadow-[0_10px_24px_-6px_rgba(168,85,247,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 lg:-left-5"
                            >
                                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                onClick={next}
                                aria-label="Next testimonial"
                                className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-600 shadow-lg transition-all duration-300 hover:scale-105 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:text-white hover:shadow-[0_10px_24px_-6px_rgba(168,85,247,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 lg:-right-5"
                            >
                                <ChevronRight className="h-5 w-5" aria-hidden="true" />
                            </button>

                            {/* Dots */}
                            <div className="mt-6 flex items-center justify-center gap-2">
                                {testimonials.map((t, i) => (
                                    <button
                                        key={t.name}
                                        type="button"
                                        onClick={() => setIdx(i)}
                                        aria-label={`Show testimonial ${i + 1}`}
                                        aria-current={i === idx}
                                        className="group flex h-6 items-center px-0.5"
                                    >
                                        <span
                                            className={`block h-1.5 rounded-full transition-all ${
                                                i === idx ? 'w-7 bg-[#3b5bfd]' : 'w-5 bg-slate-200 group-hover:bg-slate-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
