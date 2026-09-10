'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Zap, TrendingUp, Clock, ShieldCheck, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function HomeImpactTestimonials() {
    const impactCards = [
        {
            icon: Zap,
            title: 'Faster Operations',
            desc: 'Automate with seamless business workflows.',
            color: 'text-blue-600',
            bg: 'bg-blue-50 border-blue-200',
        },
        {
            icon: TrendingUp,
            title: 'Better Customer Experience',
            desc: 'Deliver fast load times and engaging web interfaces.',
            color: 'text-purple-600',
            bg: 'bg-purple-50 border-purple-200',
        },
        {
            icon: Clock,
            title: 'Reduced Manual Work',
            desc: 'Save time with smart automated systems.',
            color: 'text-pink-600',
            bg: 'bg-pink-50 border-pink-200',
        },
        {
            icon: ShieldCheck,
            title: 'Scalable Growth',
            desc: 'Solutions built to grow effortlessly with your revenue.',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 border-emerald-200',
        },
    ];

    const testimonials = [
        {
            quote: 'TheWebHero delivered our project beyond expectations. Their team is professional, responsive, and highly skilled in modern tech stacks.',
            name: 'Rahul Mehta',
            title: 'CEO, TechNova',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            stars: 5,
        },
        {
            quote: 'Working with TheWebHero was a smooth experience. Their IT support and cloud migration saved us hundreds of server downtime hours.',
            name: 'Ananya Sharma',
            title: 'CTO, GlobalLogix',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
            stars: 5,
        },
    ];

    const [currentIdx, setCurrentIdx] = useState(0);

    const prevTestimonial = () => {
        setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-white text-slate-900 py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Why Choose Us / Real Business Impact */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
                                WHY CHOOSE US
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                                Real Business Impact
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base mt-2">
                                We don&apos;t just build software, we create solutions that drive measurable results.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {impactCards.map((card, idx) => {
                                const IconComp = card.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col gap-3"
                                    >
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${card.bg} shadow-sm`}>
                                            <IconComp className={`w-5 h-5 ${card.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900 mb-1">
                                                {card.title}
                                            </h4>
                                            <p className="text-xs text-slate-600 leading-relaxed">
                                                {card.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: Testimonials */}
                    <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-3">
                                    TESTIMONIALS
                                </div>

                                {/* Slider Controls */}
                                <div className="flex items-center gap-2 mb-3">
                                    <button
                                        onClick={prevTestimonial}
                                        aria-label="Previous Testimonial"
                                        className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={nextTestimonial}
                                        aria-label="Next Testimonial"
                                        className="w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:border-slate-400 flex items-center justify-center transition-colors shadow-sm"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                                What Our Clients Say
                            </h2>
                            <p className="text-slate-600 text-sm sm:text-base mt-2">
                                Trusting businesses worldwide for delivering quality and results.
                            </p>
                        </div>

                        {/* Quote Card */}
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-slate-200 relative shadow-lg space-y-6">
                            {/* Stars */}
                            <div className="flex items-center gap-1">
                                {[...Array(testimonials[currentIdx].stars)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="text-slate-800 text-sm sm:text-base italic leading-relaxed font-medium">
                                &ldquo;{testimonials[currentIdx].quote}&rdquo;
                            </p>

                            {/* Author Profile */}
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-600 shadow-md">
                                    <Image
                                        src={testimonials[currentIdx].avatar}
                                        alt={testimonials[currentIdx].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">
                                        {testimonials[currentIdx].name}
                                    </h4>
                                    <p className="text-xs text-slate-500 font-medium">
                                        {testimonials[currentIdx].title}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
