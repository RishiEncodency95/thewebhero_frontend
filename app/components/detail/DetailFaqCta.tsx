import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MessageCircle, Plus } from 'lucide-react';

import faqArt from '@/app/assets/home/Resources/resources.webp';
import { Eyebrow, SectionHeading, Accent } from './SectionHeading';

const WRAP = 'relative w-full px-4 sm:px-6 lg:px-10';

/**
 * FAQ with native <details>, so it works without JavaScript and every answer
 * is in the HTML for search engines. Pairs with the FAQPage JSON-LD the page emits.
 */
export function FaqSection({
    accent, faqs,
}: {
    accent: string;
    faqs: { question: string; answer: string }[];
}) {
    return (
        <section className="bg-gradient-to-b from-white to-[#f7f5ff] py-2 lg:py-6">
            <div className={`${WRAP} grid grid-cols-1 gap-10 lg:grid-cols-12`}>
                <div className="lg:col-span-8">
                    <SectionHeading
                        eyebrow="FAQ"
                        lead="Frequently Asked"
                        accent="Questions"
                        text={`Answers to common questions about our ${accent.toLowerCase()} services.`}
                    />

                    <div className="mt-8 space-y-3">
                        {faqs.map((faq, i) => (
                            <details
                                key={faq.question}
                                name="detail-faq"
                                open={i === 0}
                                className="group rounded-2xl border border-slate-200/80 bg-white shadow-sm transition open:border-purple-200 open:shadow-[0_14px_30px_-18px_rgba(76,29,149,0.35)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-50 text-purple-600 transition group-open:bg-gradient-to-r group-open:from-pink-500 group-open:via-purple-500 group-open:to-blue-500 group-open:text-white">
                                        <Plus className="h-4 w-4 transition-transform group-open:rotate-45" aria-hidden="true" />
                                    </span>
                                    <span className="text-[15px] font-medium text-slate-900">{faq.question}</span>
                                </summary>
                                <p className="px-5 pb-5 pl-[60px] text-[15px] leading-relaxed text-slate-600">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>

                {/* Still have questions — text on top, illustration on its own
                    spotlight below. Fixed sizes, so opening a FAQ never resizes it. */}
                <aside className="flex justify-center lg:col-span-4 lg:self-center">
                    <div className="relative isolate w-full max-w-[340px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#f5efff] via-[#eef2ff] to-[#e6f0ff] shadow-[0_24px_60px_-30px_rgba(76,29,149,0.45)] ring-1 ring-purple-100">
                        <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />

                        <div className="px-7 pt-7 text-center">
                            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30">
                                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <p className="mt-4 text-[22px] font-semibold leading-snug text-slate-900">Still have questions?</p>
                            <p className="mx-auto mt-2 max-w-[280px] text-[14px] leading-relaxed text-slate-600">
                                Our team is here to help. Get in touch for a free, no-obligation consultation.
                            </p>

                            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex-col xl:flex-row">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-blue-500/30"
                                >
                                    Contact Us
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/get-a-quote"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-slate-800 ring-1 ring-purple-200 transition-colors hover:text-purple-700 hover:ring-purple-300"
                                >
                                    Get a Quote
                                </Link>
                            </div>
                        </div>

                        {/* Illustration */}
                        <div className="relative mt-4 flex h-[250px] items-end justify-center">
                            <div aria-hidden="true" className="absolute -bottom-24 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-white/70 ring-1 ring-white" />
                            <div aria-hidden="true" className="absolute -bottom-36 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full border border-dashed border-purple-200/80" />
                            <div aria-hidden="true" className="absolute bottom-10 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-purple-300/30 blur-2xl" />

                            <span className="absolute bottom-12 left-3 z-10 rounded-full bg-white px-2.5 py-1.5 text-[12px] font-semibold text-slate-700 shadow-md ring-1 ring-slate-100">
                                Free consultation
                            </span>
                            <span className="absolute bottom-28 right-3 z-10 rounded-full bg-white px-2.5 py-1.5 text-[12px] font-semibold text-slate-700 shadow-md ring-1 ring-slate-100">
                                Expert team
                            </span>

                            <Image
                                src={faqArt}
                                alt=""
                                sizes="100px"
                                className="pointer-events-none relative h-[235px] w-auto drop-shadow-[0_18px_24px_rgba(30,27,75,0.25)]"
                            />
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export function CtaBand({ lead, accent }: { lead: string; accent: string }) {
    return (
        <section className="bg-[#f7f5ff] pb-6">
            <div className={WRAP}>
                <div className="relative isolate overflow-hidden rounded-xl bg-gradient-to-r from-[#eef2ff] via-[#f5f3ff] to-[#fdf2f8] py-3 ring-1 ring-purple-100 sm:px-10">
                    <div aria-hidden="true" className="pointer-events-none absolute left-16 -top-28 h-48 w-48 rounded-full bg-blue-300/30 blur-3xl" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 right-10 h-48 w-48 rounded-full bg-pink-300/30 blur-3xl" />

                    <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                        <div className="max-w-2xl">
                            <Eyebrow>Ready to build</Eyebrow>
                            <h2 className="mt-3 text-lg lg:text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900 ">
                                {lead} <Accent>{accent}</Accent>
                            </h2>
                            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                                Partner with our team to build modern, high-performance solutions that drive real business growth.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link
                                href="/get-a-quote"
                                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30"
                            >
                                Get Free Quote
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-6 py-3 text-[14px] font-semibold text-slate-800 transition-colors hover:border-purple-300 hover:text-purple-700"
                            >
                                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
