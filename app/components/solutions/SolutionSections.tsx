import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import {
    AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, CircleDot, MessageSquareText, Plus, Sparkles,
} from 'lucide-react';

/*
 * Sections for the single-solution pages (/solutions/[slug]). Layout follows
 * the blue solutions design: soft blue-white bands, blue accent headings,
 * white cards with tinted icon tiles, and a deep-blue CTA banner.
 */

export const WRAP = 'relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8';

/** Tinted icon tiles + arrow colours, cycled across cards. */
export const TINTS = [
    { tile: 'bg-blue-50 text-blue-600 ring-blue-100', solid: 'from-blue-500 to-blue-600', num: 'bg-blue-50 text-blue-700', line: 'border-blue-300' },
    { tile: 'bg-purple-50 text-purple-600 ring-purple-100', solid: 'from-purple-500 to-violet-600', num: 'bg-purple-50 text-purple-700', line: 'border-purple-300' },
    { tile: 'bg-emerald-50 text-emerald-600 ring-emerald-100', solid: 'from-emerald-400 to-emerald-600', num: 'bg-emerald-50 text-emerald-700', line: 'border-emerald-300' },
    { tile: 'bg-orange-50 text-orange-600 ring-orange-100', solid: 'from-orange-400 to-orange-600', num: 'bg-orange-50 text-orange-700', line: 'border-orange-300' },
];

export type IconItem = { title: string; description: string; Icon: React.ElementType };
export type Chip = { label: string; Icon: React.ElementType };

/* ------------------------------------------------------------ Atoms --- */

export function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <CircleDot className="h-3 w-3" aria-hidden="true" />
            {children}
        </span>
    );
}

export function Accent({ children }: { children: React.ReactNode }) {
    return <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">{children}</span>;
}

export function Heading({
    eyebrow, lead, accent, tail, text, center = true,
}: {
    eyebrow: string;
    lead?: string;
    accent: string;
    tail?: string;
    text?: string;
    center?: boolean;
}) {
    return (
        <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                {lead && <>{lead} </>}
                <Accent>{accent}</Accent>
                {tail && <> {tail}</>}
            </h2>
            {text && <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 sm:text-base lg:text-[16px]">{text}</p>}
        </div>
    );
}

function FloatChip({ label, Icon, className = '' }: Chip & { className?: string }) {
    return (
        <span className={`absolute z-10 flex items-center gap-2.5 rounded-xl bg-white px-3 py-2.5 shadow-[0_14px_34px_-12px_rgba(30,41,99,0.35)] ring-1 ring-slate-100 ${className}`}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="max-w-[96px] text-[12px] font-semibold leading-tight text-slate-800">{label}</span>
        </span>
    );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:shadow-xl hover:shadow-blue-600/35"
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
    );
}

function SecondaryButton({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-slate-800 transition-colors hover:border-indigo-400 hover:text-indigo-700"
        >
            <MessageSquareText className="h-4 w-4" aria-hidden="true" />
            {children}
        </Link>
    );
}

/* ------------------------------------------------------------- Hero --- */

export function SolutionPageHero({
    crumbs, eyebrow, lead, accent, description, trust, image, imageAlt, chips,
}: {
    crumbs: { label: string; href?: string }[];
    eyebrow: string;
    lead: string;
    accent: string;
    description: string;
    trust: { label: string; sub: string; Icon: React.ElementType }[];
    image: StaticImageData;
    imageAlt: string;
    chips: [Chip, Chip];
}) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f7ff] via-white to-[#eef3ff]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-indigo-300/40 via-blue-300/30 to-purple-300/30 blur-3xl" />

            <div className={`${WRAP} pb-6 pt-3 lg:pb-8`}>
                <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500">
                        {crumbs.map((c, i) => (
                            <li key={c.label} className="flex items-center gap-1.5">
                                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
                                {c.href ? (
                                    <Link href={c.href} className="hover:text-blue-700">{c.label}</Link>
                                ) : (
                                    <span aria-current="page" className="font-semibold text-slate-800">{c.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="mt-3 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    <div>
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <h1 className="mt-3 text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            <span className="block">{lead}</span>{' '}
                            <Accent>{accent}</Accent>
                        </h1>
                        <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">{description}</p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <PrimaryButton href="/get-a-quote">Get Free Consultation</PrimaryButton>
                            <SecondaryButton href="/contact">Discuss Your Requirements</SecondaryButton>
                        </div>

                        <ul className="mt-7 grid max-w-2xl grid-cols-2 gap-y-5 sm:grid-cols-4">
                            {trust.map(({ label, sub, Icon }, i) => (
                                <li key={label} className={`flex items-center gap-2.5 sm:px-3 ${i > 0 ? 'sm:border-l sm:border-slate-200' : 'sm:pl-0'}`}>
                                    <Icon className="h-7 w-7 shrink-0 text-blue-600" aria-hidden="true" />
                                    <span className="text-[13px] leading-tight text-slate-500">
                                        <span className="block text-[14px] font-semibold text-slate-800">{label}</span>
                                        {sub}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative mx-auto w-full max-w-[440px] lg:mr-0">
                        <div className="relative overflow-hidden rounded-[28px] bg-slate-900 shadow-[0_40px_80px_-30px_rgba(30,41,99,0.55)] ring-[8px] ring-white">
                            <Image src={image} alt={imageAlt} priority sizes="(max-width: 1024px) 100vw, 440px" className="h-auto w-full" />
                        </div>
                        <FloatChip {...chips[0]} className="-right-3 top-[18%] hidden sm:flex lg:-right-8" />
                        <FloatChip {...chips[1]} className="-right-2 bottom-[14%] hidden sm:flex lg:-right-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* --------------------------------------------------------- Overview --- */

export function SolutionOverview({
    eyebrow, lead, accent, text, image, imageAlt, chips, features,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    text: string;
    image: StaticImageData;
    imageAlt: string;
    chips: [Chip, Chip, Chip];
    features: IconItem[];
}) {
    return (
        <section className="border-t border-slate-100 bg-white py-2 lg:py-6">
            {/* Narrow image column + wide copy column keeps this band short */}
            <div className={`${WRAP} grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12`}>
                <div className="relative mx-auto w-full max-w-[460px] lg:ml-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-900 shadow-[0_30px_60px_-30px_rgba(30,41,99,0.5)]">
                        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 460px" className="object-cover" />
                    </div>
                    <FloatChip {...chips[0]} className="right-3 top-3 hidden sm:flex" />
                    <FloatChip {...chips[1]} className="-left-4 top-[38%] hidden sm:flex" />
                    <FloatChip {...chips[2]} className="bottom-3 right-[10%] hidden sm:flex" />
                </div>

                <div>
                    <Eyebrow>{eyebrow}</Eyebrow>
                    <h2 className="mt-3 text-lg font-semibold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                        {lead} <Accent>{accent}</Accent>
                    </h2>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 sm:text-base lg:text-[16px]">{text}</p>

                    <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {features.map(({ title, description, Icon }, i) => (
                            <li key={title} className="flex items-start gap-3">
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ${TINTS[i % TINTS.length].tile}`}>
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold text-slate-900 sm:text-base">{title}</span>
                                    <span className="mt-0.5 block text-xs font-normal leading-relaxed text-slate-500 sm:text-[13px]">{description}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------- Key areas --- */

export function KeyAreas({
    id, eyebrow, lead, accent, text, items,
}: {
    id?: string;
    eyebrow: string;
    lead: string;
    accent: string;
    text: string;
    items: (IconItem & { href?: string; meta?: string })[];
}) {
    return (
        <section id={id} className="scroll-mt-24 border-t border-slate-100 bg-[#f6f8ff] py-5 lg:py-6">
            <div className={WRAP}>
                <Heading eyebrow={eyebrow} lead={lead} accent={accent} text={text} />

                <ul className={`mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 ${items.length % 4 === 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
                    {items.map(({ title, description, Icon, href, meta }, i) => {
                        const tint = TINTS[i % TINTS.length];
                        // Compact card: icon + title on one row, thin tinted top rule.
                        const cls = 'group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white p-4 shadow-[0_8px_24px_-20px_rgba(30,41,99,0.4)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_16px_32px_-22px_rgba(30,41,99,0.45)]';
                        const body = (
                            <>
                                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${tint.solid}`} />
                                <div className="flex items-center gap-3">
                                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ${tint.tile}`}>
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                    <h3 className="text-sm font-semibold leading-snug text-slate-900 group-hover:text-blue-700 sm:text-base">{title}</h3>
                                    {href && (
                                        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" aria-hidden="true" />
                                    )}
                                </div>
                                <p className="mt-2.5 text-xs font-normal leading-relaxed text-slate-500 sm:text-[13px]">{description}</p>
                                {meta && <span className="mt-3 text-[12px] font-semibold text-slate-400">{meta}</span>}
                            </>
                        );
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

/* ---------------------------------------------------------- Process --- */

export function ProcessRow({
    eyebrow, lead, accent, tail, text, steps,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    tail?: string;
    text: string;
    steps: IconItem[];
}) {
    return (
        <section className="border-t border-slate-100 bg-white py-6 lg:py-8">
            <div className={WRAP}>
                <Heading eyebrow={eyebrow} lead={lead} accent={accent} tail={tail} text={text} />

                <ol className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {steps.map(({ title, description, Icon }, i) => {
                        const tint = TINTS[i % TINTS.length];
                        return (
                            <li key={title} className="relative flex flex-col items-center text-center">
                                {/* Dashed connector to the next step */}
                                {i < steps.length - 1 && (
                                    <span aria-hidden="true" className={`absolute left-[calc(50%+36px)] right-[calc(-50%+36px)] top-7 hidden border-t-2 border-dashed lg:block ${tint.line}`} />
                                )}
                                <span className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${tint.solid} text-white shadow-lg ring-8 ring-white`}>
                                    <Icon className="h-6 w-6" aria-hidden="true" />
                                </span>
                                <span className={`mt-3 rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${tint.num}`}>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
                                <p className="mt-1.5 max-w-[240px] text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">{description}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------- Impact --- */

export function ImpactRow({
    eyebrow, lead, accent, items,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    items: IconItem[];
}) {
    return (
        <section className="border-t border-slate-100 bg-[#f6f8ff] py-6 lg:py-8">
            <div className={WRAP}>
                <Heading eyebrow={eyebrow} lead={lead} accent={accent} />

                <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
                    {items.map(({ title, description, Icon }, i) => (
                        <li key={title} className={`flex items-start gap-3.5 lg:px-6 ${i > 0 ? 'lg:border-l lg:border-slate-200' : 'lg:pl-0'}`}>
                            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${TINTS[i % TINTS.length].tile}`}>
                                <Icon className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <span>
                                <span className="block text-sm font-semibold text-slate-900 sm:text-base">{title}</span>
                                <span className="mt-1 block text-xs font-normal leading-relaxed text-slate-500 sm:text-[13px]">{description}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

/* ------------------------------------------------ Challenge → Solution --- */

/** Problem/answer cards: muted challenge on top, highlighted solution below. */
export function ChallengeSolution({
    eyebrow, lead, accent, text, items,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    text?: string;
    items: { title: string; description: string; solution: string }[];
}) {
    return (
        <section className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-b from-white to-[#f6f8ff] py-6 lg:py-8">
            <div aria-hidden="true" className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
            <div className={`${WRAP} relative`}>
                <Heading eyebrow={eyebrow} lead={lead} accent={accent} text={text} />

                <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map(({ title, description, solution }, i) => (
                        <li
                            key={title}
                            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_8px_24px_-20px_rgba(30,41,99,0.4)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_36px_-22px_rgba(30,41,99,0.45)]"
                        >
                            <div className="flex-1 p-4">
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-rose-600">
                                        <AlertTriangle className="h-3 w-3" aria-hidden="true" />
                                        Challenge
                                    </span>
                                    <span className="text-[12px] font-semibold text-slate-300">{String(i + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="mt-3 text-sm font-semibold leading-snug text-slate-900 sm:text-base">{title}</h3>
                                <p className="mt-1.5 text-xs font-normal leading-relaxed text-slate-500 sm:text-[13px]">{description}</p>
                            </div>
                            <div className="border-t border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-4">
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-blue-700">
                                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                                    Our Solution
                                </span>
                                <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-700 sm:text-[13px]">{solution}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

/* -------------------------------------------------------- Checklists --- */

/** Side-by-side cards, each a titled list of check points. */
export function ChecklistColumns({
    eyebrow, lead, accent, text, columns,
}: {
    eyebrow: string;
    lead: string;
    accent: string;
    text?: string;
    columns: { title: string; points: string[]; Icon: React.ElementType }[];
}) {
    return (
        <section className="border-t border-slate-100 bg-white py-6 lg:py-8">
            <div className={WRAP}>
                <Heading eyebrow={eyebrow} lead={lead} accent={accent} text={text} />

                <div className={`mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 ${columns.length === 3 ? 'lg:grid-cols-3' : ''}`}>
                    {columns.map(({ title, points, Icon }, i) => (
                        <div key={title} className="rounded-2xl border border-slate-200/80 bg-[#f6f8ff] p-5">
                            <div className="flex items-center gap-3">
                                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ${TINTS[i % TINTS.length].tile}`}>
                                    <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{title}</h3>
                            </div>
                            <ul className="mt-4 space-y-2.5">
                                {points.map((point) => (
                                    <li key={point} className="flex items-start gap-2.5 text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------- FAQ + CTA --- */

/**
 * FAQ list and CTA card share one section: questions on the left, the
 * consultation card on the right. Native <details>, so answers are in the
 * HTML without JavaScript.
 */
export function FaqCta({
    faq, cta,
}: {
    faq: { eyebrow: string; lead: string; accent: string; faqs: { question: string; answer: string }[] };
    cta: { eyebrow: string; lead: string; accent: string; text: string; checklist: string[] };
}) {
    return (
        <section className="border-t border-slate-100 bg-[#f6f8ff] py-6 lg:py-8">
            <div className={WRAP}>
                <Heading eyebrow={faq.eyebrow} lead={faq.lead} accent={faq.accent} />

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8">
                    <div className="space-y-2.5">
                        {faq.faqs.map((item, i) => (
                            <details
                                key={item.question}
                                name="solution-faq"
                                open={i === 0}
                                className="group rounded-2xl border border-slate-200/80 bg-white shadow-sm transition open:border-blue-200 open:shadow-[0_14px_30px_-18px_rgba(30,41,99,0.35)]"
                            >
                                <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-3 [&::-webkit-details-marker]:hidden">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition group-open:bg-blue-600 group-open:text-white">
                                        <Plus className="h-4 w-4 transition-transform group-open:rotate-45" aria-hidden="true" />
                                    </span>
                                    <span className="text-sm font-semibold text-slate-900 sm:text-base">{item.question}</span>
                                </summary>
                                <p className="px-5 pb-5 pl-[60px] text-xs font-normal leading-relaxed text-slate-600 sm:text-sm">{item.answer}</p>
                            </details>
                        ))}
                    </div>

                    <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e2a78] via-[#2440c8] to-[#4f2fd6] px-6 py-5 text-white shadow-[0_30px_70px_-30px_rgba(36,64,200,0.7)] sm:px-7 lg:flex lg:flex-col">
                        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-400/25 blur-3xl" />

                        <div className="relative flex flex-1 flex-col">
                            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100">
                                <CircleDot className="h-3 w-3" aria-hidden="true" />
                                {cta.eyebrow}
                            </span>
                            <h2 className="mt-2.5 text-lg font-semibold leading-tight tracking-tight sm:text-2xl">
                                {cta.lead} <span className="text-sky-300">{cta.accent}</span>
                            </h2>
                            <p className="mt-2 text-sm font-normal leading-relaxed text-blue-100/90">{cta.text}</p>

                            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 lg:mt-auto lg:pt-4">
                                {cta.checklist.map((item) => (
                                    <li key={item} className="flex items-center gap-1.5 text-[13px] font-medium text-white">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 fill-blue-500 text-white" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-2.5">
                                <Link
                                    href="/get-a-quote"
                                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-slate-900 shadow-lg transition hover:bg-blue-50"
                                >
                                    Get Free Consultation
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-white/10"
                                >
                                    <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                                    Discuss Your Requirements
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
