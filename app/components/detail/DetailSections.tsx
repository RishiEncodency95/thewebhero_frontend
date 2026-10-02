import React from 'react';
import Link from 'next/link';
import {
    ArrowRight, BarChart3, CheckCircle2, ClipboardList, Code2, Layers, PenTool, Rocket,
    ShieldCheck, UserRound,
} from 'lucide-react';

import { Eyebrow, SectionHeading, Accent } from './SectionHeading';

const WRAP = 'relative w-full px-4 sm:px-6 lg:px-10';

/* ------------------------------------------------------------- Why --- */

const WHY_STYLE = [
    { Icon: BarChart3, tile: 'bg-white text-blue-600 ring-blue-100', card: 'from-blue-50 via-blue-50/40 to-white border-blue-100 hover:border-blue-200' },
    { Icon: ShieldCheck, tile: 'bg-white text-emerald-600 ring-emerald-100', card: 'from-emerald-50 via-emerald-50/40 to-white border-emerald-100 hover:border-emerald-200' },
    { Icon: UserRound, tile: 'bg-white text-purple-600 ring-purple-100', card: 'from-purple-50 via-purple-50/40 to-white border-purple-100 hover:border-purple-200' },
    { Icon: Layers, tile: 'bg-white text-orange-600 ring-orange-100', card: 'from-orange-50 via-orange-50/40 to-white border-orange-100 hover:border-orange-200' },
];

export function WhySection({
    eyebrow, lead, accent, text, linkHref, cards,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    text: string;
    linkHref: string;
    cards: { title: string; description: string }[];
}) {
    return (
        <section className="bg-white py-2 lg:py-6">
            <div className={`${WRAP} grid grid-cols-1 items-center gap-10 lg:grid-cols-2`}>
                <div>
                    <Eyebrow>{eyebrow}</Eyebrow>
                    <h2 className="mt-3 text-[26px] font-bold leading-tight tracking-[-0.02em] text-slate-900 sm:text-3xl lg:text-[34px]">
                        {lead}<br className="hidden sm:block" /> <Accent>{accent}</Accent>
                    </h2>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">{text}</p>
                    <Link href={linkHref} className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-purple-700 hover:text-purple-800">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {cards.slice(0, 4).map((card, i) => {
                        const { Icon, tile, card: cardBg } = WHY_STYLE[i % WHY_STYLE.length];
                        return (
                            <div key={card.title} className={`rounded-2xl border bg-gradient-to-br ${cardBg} px-5 py-2 shadow-[0_10px_30px_-18px_rgba(30,27,75,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(30,27,75,0.3)]`}>
                                <span className={`flex h-9 w-9 items-center justify-center rounded-xl shadow-sm ring-1 ${tile}`}>
                                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                                </span>
                                <h3 className="mt-2 text-[16px] font-bold text-slate-900">{card.title}</h3>
                                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{card.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ------------------------------------------------------- Offerings --- */

/** Soft tints the offering cards cycle through, so a long grid doesn't read as one flat block. */
const OFFER_TONES = [
    'from-blue-50 via-blue-50/30 to-white border-blue-100 hover:border-blue-200',
    'from-purple-50 via-purple-50/30 to-white border-purple-100 hover:border-purple-200',
    'from-emerald-50 via-emerald-50/30 to-white border-emerald-100 hover:border-emerald-200',
    'from-orange-50 via-orange-50/30 to-white border-orange-100 hover:border-orange-200',
    'from-pink-50 via-pink-50/30 to-white border-pink-100 hover:border-pink-200',
    'from-sky-50 via-sky-50/30 to-white border-sky-100 hover:border-sky-200',
];

export type Offering = {
    title: string;
    description: string;
    href?: string;
    Icon: React.ElementType;
    color: string;
};

export function OfferingsGrid({
    id, eyebrow, lead, accent, tail, text, items,
}: {
    id?: string;
    eyebrow: string;
    lead?: string;
    accent: string;
    tail?: string;
    text?: string;
    items: Offering[];
}) {
    return (
        <section id={id} className="scroll-mt-24 bg-gradient-to-b from-[#f7f5ff] to-[#f4f8ff] py-2 lg:py-6">
            <div className={WRAP}>
                <SectionHeading eyebrow={eyebrow} lead={lead} accent={accent} tail={tail} text={text} center />

                <ul className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map(({ title, description, href, Icon, color }, i) => {
                        const body = (
                            <>
                                <div className="flex items-start justify-between">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                                        <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
                                    </span>
                                    {href && (
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-500 group-hover:text-white">
                                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                        </span>
                                    )}
                                </div>
                                <h3 className="mt-4 text-[16px] font-bold leading-snug text-slate-900 group-hover:text-purple-700">{title}</h3>
                                <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">{description}</p>
                            </>
                        );
                        const cls = `group block h-full rounded-2xl border bg-gradient-to-br ${OFFER_TONES[i % OFFER_TONES.length]} p-5 shadow-[0_10px_30px_-20px_rgba(30,27,75,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(76,29,149,0.35)]`;
                        return (
                            <li key={title}>
                                {href ? <Link href={href} className={cls}>{body}</Link> : <div className={cls}>{body}</div>}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

/* --------------------------------------------------------- Process --- */

const STEP_STYLE = [
    { Icon: ClipboardList, tile: 'from-blue-400 to-blue-600', num: 'bg-blue-50 text-blue-700' },
    { Icon: PenTool, tile: 'from-fuchsia-400 to-purple-600', num: 'bg-purple-50 text-purple-700' },
    { Icon: Code2, tile: 'from-emerald-400 to-teal-600', num: 'bg-emerald-50 text-emerald-700' },
    { Icon: Rocket, tile: 'from-sky-400 to-indigo-600', num: 'bg-indigo-50 text-indigo-700' },
];

export function ProcessSteps({
    lead, accent, steps,
}: {
    lead: string;
    accent: string;
    steps: { title: string; description: string }[];
}) {
    return (
        <section className="bg-white py-2 lg:py-6">
            <div className={WRAP}>
                <SectionHeading
                    eyebrow="Our Process"
                    lead={lead}
                    accent={accent}
                    text="A simple, transparent process that delivers quality work on time."
                    center
                />

                <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {/* Connector line behind the icons */}
                    <span aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[repeating-linear-gradient(90deg,#c4b5fd_0_6px,transparent_6px_12px)] lg:block" />
                    {steps.slice(0, 4).map((step, i) => {
                        const { Icon, tile, num } = STEP_STYLE[i % STEP_STYLE.length];
                        return (
                            <li key={step.title} className="relative flex flex-col items-center text-center">
                                <span className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${tile} text-white shadow-lg ring-8 ring-white`}>
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <span className={`mt-3 rounded-full px-2.5 py-0.5 text-[12px] font-bold ${num}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-2 text-[16px] font-semibold text-slate-900">{step.title}</h3>
                                <p className="mt-1.5 max-w-[260px] text-[14px] leading-relaxed text-slate-600">{step.description}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

/* ------------------------------------------------------ Tech strip --- */

export function TechStrip({
    lead, accent, items,
}: {
    lead: string;
    accent: string;
    items: { name: string; Icon: React.ElementType; color: string }[];
}) {
    return (
        <section className="bg-gradient-to-b from-[#f4f8ff] to-[#f7f5ff] py-2 lg:py-6">
            <div className={WRAP}>
                <SectionHeading
                    eyebrow="Technologies We Work With"
                    lead={lead}
                    accent={accent}
                    text="We use proven, modern technologies to build fast, secure and scalable solutions."
                    center
                />
                <ul className="mt-10 flex flex-wrap justify-center gap-4">
                    {items.map(({ name, Icon, color }) => (
                        <li key={name} className="flex w-[96px] flex-col items-center gap-2">
                            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white shadow-[0_10px_24px_-14px_rgba(30,27,75,0.35)] ring-1 ring-slate-200/70 transition hover:-translate-y-1">
                                <Icon className={`h-8 w-8 ${color}`} aria-hidden="true" />
                            </span>
                            <span className="text-center text-[13px] font-semibold text-slate-700">{name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------- Value --- */

const STATS = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '20+', label: 'Technologies' },
    { value: '24/7', label: 'Support' },
];

export function ValueSection({
    accent, text, checklist,
}: {
    accent: string;
    text: string;
    checklist: string[];
}) {
    return (
        <section className="bg-white py-2 lg:py-6">
            <div className={`${WRAP} grid grid-cols-1 items-center gap-10 lg:grid-cols-2`}>
                <div>
                    <Eyebrow>Business Value</Eyebrow>
                    <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-3xl lg:text-[34px]">
                        Delivering Real Value<br className="hidden sm:block" /> Through <Accent>{accent}</Accent>
                    </h2>
                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">{text}</p>

                    <dl className="mt-8 grid max-w-xl grid-cols-2 gap-y-6 sm:grid-cols-4">
                        {STATS.map((s, i) => (
                            <div key={s.label} className={`px-4 ${i > 0 ? 'sm:border-l sm:border-slate-200' : 'sm:pl-0'}`}>
                                <dt className="sr-only">{s.label}</dt>
                                <dd>
                                    <span className="block bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-[28px] font-extrabold leading-none text-transparent">{s.value}</span>
                                    <span className="mt-1.5 block text-[13px] font-medium text-slate-500">{s.label}</span>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* What you get */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3b1a8a] via-[#7b24c6] to-[#be185d] p-7 text-white shadow-[0_30px_70px_-28px_rgba(123,36,198,0.7)] sm:p-9">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#ffa04d]/30 blur-3xl" />
                    <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#5b9dff]/30 blur-3xl" />
                    <div className="relative">
                        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/80">What you get</p>
                        <p className="mt-2 text-[22px] font-bold leading-snug">Everything you need to launch with confidence</p>
                        <ul className="mt-6 space-y-3.5">
                            {checklist.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#ffd29e]" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
