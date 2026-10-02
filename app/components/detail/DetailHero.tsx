import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronRight, MessageSquare, Rocket, Layers, ShieldCheck, Clock } from 'lucide-react';

import { Accent, Eyebrow, splitTitle } from './SectionHeading';

export type Crumb = { label: string; href?: string };
export type FloatIcon = { name: string; Icon: React.ElementType; color: string };

const TRUST = [
    { label: 'Modern Technologies', Icon: Rocket },
    { label: 'Scalable Solutions', Icon: Layers },
    { label: 'Secure & Reliable', Icon: ShieldCheck },
    { label: 'On-Time Delivery', Icon: Clock },
];

/** Positions for up to six floating tech tiles around the hero image. */
const SPOTS = [
    'left-[-14px] top-[12%]',
    'left-[30%] -top-5',
    'right-[-14px] top-[6%]',
    'right-[-18px] top-[44%]',
    'right-[8%] -bottom-5',
    'left-[-18px] bottom-[18%]',
];

export default function DetailHero({
    crumbs,
    eyebrow,
    title,
    description,
    image,
    imageAlt,
    icons,
}: {
    crumbs: Crumb[];
    eyebrow: string;
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    icons: FloatIcon[];
}) {
    const [lead, accent] = splitTitle(title);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#faf5ff] via-white to-[#eef4ff]">
            <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-purple-200/50 to-blue-200/40 blur-3xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

            <div className="relative w-full px-4 py-2 sm:px-6 lg:px-10 lg:py-8">
                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb">
                    <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-500">
                        {crumbs.map((c, i) => (
                            <li key={c.label} className="flex items-center gap-1.5">
                                {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
                                {c.href ? (
                                    <Link href={c.href} className="hover:text-purple-700">{c.label}</Link>
                                ) : (
                                    <span aria-current="page" className="font-semibold text-slate-800">{c.label}</span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="mt-4 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                    {/* Copy */}
                    <div>
                        <Eyebrow>{eyebrow}</Eyebrow>
                        <h1 className="mt-3 text-[36px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900 sm:text-[42px] lg:text-[48px]">
                            {lead && <span className="block">{lead}</span>}
                            <Accent>{accent}</Accent>
                        </h1>
                        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-slate-600">{description}</p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
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
                                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                                Discuss Your Project
                            </Link>
                        </div>

                        <ul className="mt-6 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
                            {TRUST.map(({ label, Icon }) => (
                                <li key={label} className="flex items-center gap-2.5">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-purple-600 shadow-sm ring-1 ring-purple-100">
                                        <Icon className="h-4 w-4" aria-hidden="true" />
                                    </span>
                                    <span className="text-[13px] font-semibold leading-tight text-slate-700">{label}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual */}
                    <div className="relative mx-auto w-full max-w-[440px]">
                        <div className="relative overflow-hidden rounded-[24px] bg-slate-900 shadow-[0_30px_60px_-28px_rgba(76,29,149,0.55)] ring-[6px] ring-white">
                            <Image
                                src={image}
                                alt={imageAlt}
                                priority
                                sizes="(max-width: 1024px) 100vw, 440px"
                                className="h-auto w-full"
                            />
                        </div>

                        {icons.slice(0, SPOTS.length).map(({ name, Icon, color }, i) => (
                            <span
                                key={name}
                                title={name}
                                style={{ animationDelay: `${i * 0.6}s` }}
                                className={`absolute ${SPOTS[i]} hidden h-11 w-11 items-center justify-center rounded-xl bg-white shadow-[0_14px_30px_-10px_rgba(30,27,75,0.35)] ring-1 ring-slate-100 sm:flex motion-safe:animate-[twhFloat_6s_ease-in-out_infinite]`}
                            >
                                <Icon className={`h-6 w-6 ${color}`} aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
