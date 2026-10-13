import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquareText, Sparkles } from 'lucide-react';

interface CompanyCTAProps {
    title?: string;
    description?: string;
}

/** Compact dark call-to-action strip shown at the bottom of company pages. */
export default function CompanyCTA({
    title = 'Have a web or mobile product in mind?',
    description = "Tell us your idea — we'll shape the scope, pick the stack and ship it.",
}: CompanyCTAProps) {
    return (
        <section className="w-full px-4 pb-14 pt-4 lg:px-10 lg:pb-16">
            <div className="relative flex flex-col items-start gap-5 overflow-hidden rounded-[24px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div
                    className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_left,#000_20%,transparent_70%)]"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-[480px] rounded-full bg-gradient-to-r from-pink-500/35 via-purple-500/35 to-blue-500/35 blur-[90px]" aria-hidden="true" />

                <div className="relative flex items-center gap-4">
                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-[0_8px_24px_rgba(168,85,247,0.45)] sm:flex">
                        <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{title}</h2>
                        <p className="mt-1 text-sm text-slate-300">{description}</p>
                    </div>
                </div>

                <div className="relative flex w-full shrink-0 items-center gap-3 sm:w-auto">
                    <Link
                        href="/get-a-quote"
                        className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] sm:flex-none"
                    >
                        Request a Quote
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:flex-none"
                    >
                        <MessageSquareText className="h-4 w-4" />
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
