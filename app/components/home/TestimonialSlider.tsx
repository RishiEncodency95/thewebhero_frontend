'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

export interface SlideTestimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    avatar: string;
    stars: number;
    mark: string;
    ring: string;
    chip: string;
}

/** Two-up testimonial carousel (one card per swipe on phones). */
export default function TestimonialSlider({ testimonials }: { testimonials: SlideTestimonial[] }) {
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));

    // Two-up on desktop, wrapping round so the pair always fills.
    const visible = testimonials.length > 1 ? [testimonials[idx], testimonials[(idx + 1) % testimonials.length]] : testimonials;

    return (
        <div className="relative mt-6">
            <div className="twh-rail grid grid-cols-1 gap-5 md:grid-cols-2">
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
                                {t.avatar ? (
                                    <Image src={t.avatar} alt="" fill sizes="48px" className="object-cover" />
                                ) : (
                                    <span className="flex h-full w-full items-center justify-center bg-slate-100 text-sm font-bold text-slate-600">
                                        {t.name.split(' ').map((w) => w[0]).join('').slice(0, 2)}
                                    </span>
                                )}
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
    );
}
