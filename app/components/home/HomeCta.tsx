import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Globe, Smartphone, Cloud, Bot } from 'lucide-react';

/**
 * Closing call to action.
 *
 * A brand-gradient card (violet → purple → magenta, deep enough that white text
 * clears AA) with the logo emblem in a glass orbit on the right, ringed by the
 * services we actually offer.
 */
const chips = [
    { label: 'Web Apps', Icon: Globe, at: 'left-0 top-1' },
    { label: 'Mobile Apps', Icon: Smartphone, at: 'right-0 -top-1' },
    { label: 'AI Solutions', Icon: Bot, at: 'left-4 -bottom-1' },
    { label: 'Cloud', Icon: Cloud, at: 'right-4 bottom-2' },
];

export default function HomeCta() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f7f3ff] to-white py-4 lg:py-6">
            {/* Section wash so the card does not sit on flat white */}
            <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-1/2 h-64 w-[36rem] -translate-y-1/2 rounded-full bg-[#7b24c6]/10 blur-[90px]" />
            <div aria-hidden="true" className="pointer-events-none absolute right-1/4 top-1/2 h-64 w-[30rem] -translate-y-1/2 rounded-full bg-[#f87710]/10 blur-[90px]" />

            <div className="relative w-full px-4 sm:px-6 lg:px-10">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#3b1a8a] via-[#7b24c6] to-[#be185d] shadow-[0_30px_70px_-28px_rgba(123,36,198,0.75)]">

                    {/* Mesh lights */}
                    <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#5b9dff]/40 blur-[90px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#ff6bae]/35 blur-[100px]" />
                    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-[#ffa04d]/40 blur-[90px]" />

                    {/* Diagonal sheen */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_40%,rgba(255,255,255,0.08)_50%,transparent_60%)]" />

                    {/* Grid texture, fading out to the left */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_left,black,transparent_70%)]"
                    />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 px-6 py-2 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:px-14 lg:py-6">
                        {/* Copy */}
                        <div>
                            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#ffa04d] shadow-[0_0_10px_2px_rgba(255,160,77,0.8)]" />
                                Let&apos;s work together
                            </p>

                            <h2 className="mt-3 text-lg lg:text-2xl font-semibold leading-[1.12] tracking-[-0.025em] text-white ">
                                Have an idea?
                                {"  "}
                                Let&apos;s make it{' '}
                                <span className="relative inline-block">
                                    <span className="relative z-10">real.</span>
                                    <span aria-hidden="true" className="absolute inset-x-0 -bottom-1 z-0 h-[5px] rounded-full bg-gradient-to-r from-[#ffa04d] to-[#ff6bae]" />
                                </span>
                            </h2>

                            <p className="mt-2 max-w-lg text-[15px] leading-[1.55] text-white/85">
                                Tell us what you&apos;re building. We&apos;ll help you turn your idea into a
                                scalable digital solution.
                            </p>

                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                {/* Arrow disc sits flush in the pill's right end */}
                                <Link
                                    href="/get-a-quote"
                                    className="group inline-flex h-9 items-center gap-2.5 rounded-full bg-white pl-4 pr-1 text-[13px] font-bold text-[#5b1aa8] shadow-[0_10px_24px_-10px_rgba(0,0,0,0.55)] ring-1 ring-white/60 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(0,0,0,0.6)]"
                                >
                                    Start a Project
                                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7b24c6] to-[#e71a78] text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-rotate-45">
                                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                                    </span>
                                </Link>

                                <Link
                                    href="/contact"
                                    className="group inline-flex h-9 items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 text-[13px] font-semibold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/20"
                                >
                                    <MessageCircle className="h-3.5 w-3.5 transition-transform group-hover:scale-110" aria-hidden="true" />
                                    Talk to an Expert
                                </Link>
                            </div>

                        </div>

                        {/* Visual — logo emblem in a glass orbit */}
                        <div className="relative mx-auto hidden h-40 w-full max-w-sm lg:block" aria-hidden="true">
                            {/* Rings */}
                            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
                            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/25 motion-safe:animate-[spin_40s_linear_infinite]" />

                            {/* Glass disc with emblem */}
                            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/90 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]">
                                <Image src="/logoicon.webp" alt="" width={840} height={840} className="h-16 w-16 object-contain" />
                            </div>

                            {/* Service chips */}
                            {chips.map(({ label, Icon, at }, i) => (
                                <span
                                    key={label}
                                    style={{ animationDelay: `${i * 0.7}s` }}
                                    className={`absolute ${at} inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-2 text-[13px] font-semibold text-white shadow-lg backdrop-blur-md motion-safe:animate-[twhFloat_5s_ease-in-out_infinite]`}
                                >
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#7b24c6]">
                                        <Icon className="h-3.5 w-3.5" />
                                    </span>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
