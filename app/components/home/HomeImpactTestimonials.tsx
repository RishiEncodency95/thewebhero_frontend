import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import { Zap, Users, Clock, TrendingUp, Target, Quote } from 'lucide-react';
import type { TestimonialEntry } from '../../lib/cms/content';
import { splitHighlight, type HomeSections } from '../../lib/home-sections';

/* ---------------------------------------------------------------- data ---- */

// Icon, colours and artwork follow the card order.
const IMPACT_STYLES = [
    { Icon: Zap, tile: 'from-blue-500 to-indigo-600', card: 'from-slate-50 via-blue-50/40 to-blue-50/60 border-blue-100/80', numText: 'text-blue-300', art: 'bars', artColor: 'text-blue-400' },
    { Icon: Users, tile: 'from-pink-500 to-fuchsia-600', card: 'from-pink-50/70 via-pink-50/40 to-white border-pink-100/80', numText: 'text-pink-300', art: 'wave', artColor: 'text-pink-300' },
    { Icon: Clock, tile: 'from-orange-500 to-amber-600', card: 'from-orange-50/80 via-orange-50/40 to-white border-orange-100/80', numText: 'text-orange-300', art: 'gears', artColor: 'text-orange-300' },
    { Icon: TrendingUp, tile: 'from-emerald-500 to-green-600', card: 'from-emerald-50/80 via-emerald-50/40 to-white border-emerald-100/80', numText: 'text-emerald-300', art: 'growth', artColor: 'text-emerald-400' },
] as const;

/** Replace these with real, attributable client quotes before launch. */
// Card accents cycle through these so any number of testimonials looks designed.
const TESTIMONIAL_STYLES = [
    { ring: 'border-blue-500', chip: 'bg-blue-50 text-blue-700', mark: 'text-blue-100' },
    { ring: 'border-pink-500', chip: 'bg-pink-50 text-pink-700', mark: 'text-pink-100' },
    { ring: 'border-emerald-500', chip: 'bg-emerald-50 text-emerald-700', mark: 'text-emerald-100' },
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

/** Impact cards + client testimonials. Only published testimonials from the CMS are shown. */
export default function HomeImpactTestimonials({
    testimonials: entries,
    why,
    heading,
}: {
    testimonials: TestimonialEntry[];
    why: HomeSections['why'];
    heading: HomeSections['testimonials'];
}) {
    const impactCards = why.items.map((item, i) => ({
        num: String(i + 1).padStart(2, '0'),
        title: item.title,
        desc: item.description,
        ...IMPACT_STYLES[i % IMPACT_STYLES.length],
    }));
    const testimonials = entries.map((t, i) => ({
        quote: t.quote,
        name: t.authorName,
        title: [t.authorRole, t.companyName].filter(Boolean).join(', '),
        company: t.companyName ?? '',
        avatar: t.avatar ?? '',
        stars: Math.min(5, Math.max(1, t.rating ?? 5)),
        ...TESTIMONIAL_STYLES[i % TESTIMONIAL_STYLES.length],
    }));
    const hasTestimonials = testimonials.length > 0;

    return (
        <section className="relative overflow-hidden border-t border-slate-100 bg-gradient-to-br from-white via-slate-50/60 to-indigo-50/40 py-2 lg:py-6 text-slate-900">
            {/* Dotted corner texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-10 left-0 h-32 w-28 opacity-[0.18] [background-image:radial-gradient(#6366f1_1.5px,transparent_1.5px)] [background-size:12px_12px]"
            />

            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">

                    {/* ============ LEFT — Real Business Impact ============ */}
                    <div className={hasTestimonials ? 'lg:col-span-5' : 'lg:col-span-12'}>
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-blue-700">
                            <Target className="h-4 w-4" aria-hidden="true" />
                            {why.eyebrow}
                        </div>

                        <h2 className="text-lg lg:text-2xl mt-2 font-semibold tracking-tight text-slate-900 leading-tight">
                            {splitHighlight(why.title).map((part, i) =>
                                part.hl ? (
                                    <span key={i} className="relative inline-block text-[#3b5bfd]">
                                        {part.text}
                                        <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#3b5bfd]" />
                                    </span>
                                ) : (
                                    part.text
                                ),
                            )}
                        </h2>

                        <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-slate-600 sm:text-[16px]">
                            {why.description}
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
                    {hasTestimonials && (
                    <div className="lg:col-span-7">
                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-pink-600">
                                <Quote className="h-4 w-4 fill-current" aria-hidden="true" />
                                {heading.eyebrow}
                            </div>

                        <h2 className="text-lg lg:text-2xl mt-2 font-semibold tracking-tight text-slate-900 leading-tight">
                                {splitHighlight(heading.title).map((part, i) =>
                                    part.hl ? (
                                        <span key={i} className="relative inline-block text-[#ec2c8a]">
                                            {part.text}
                                            <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[5px] w-full rounded-full bg-[#ec2c8a]" />
                                        </span>
                                    ) : (
                                        part.text
                                    ),
                                )}
                            </h2>

                            <p className="mt-3 max-w-xl text-[15px] leading-[1.6] text-slate-600 sm:text-[16px]">
                                {heading.description}
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

                        <TestimonialSlider testimonials={testimonials} />
                    </div>
                    )}

                </div>
            </div>
        </section>
    );
}
