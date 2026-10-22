import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import CompanyBreadcrumb from './CompanyBreadcrumb';

interface CompanyHeroProps {
    /** Small label above the title. */
    eyebrow?: string;
    title: string;
    /** Trailing words of the title, rendered in the brand gradient. */
    highlight?: string;
    description: string;
    breadcrumbItems?: { label: string; href?: string }[];
    image?: StaticImageData;
    imageAlt?: string;
    /** Hide the default "Contact / Get a Quote" buttons. */
    hideActions?: boolean;
}

/** Shared light hero used across all company pages. */
export default function CompanyHero({
    eyebrow = 'Company',
    title,
    highlight,
    description,
    breadcrumbItems,
    image,
    imageAlt = '',
    hideActions = false,
}: CompanyHeroProps) {
    return (
        <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-purple-50/70 via-white to-[#f8fbff]">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_40%,transparent_100%)]"
                aria-hidden="true"
            />
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-10 top-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[110px]" aria-hidden="true" />

            <div className="relative w-full px-4 pb-10 pt-6 lg:px-10 lg:pb-12">
                <CompanyBreadcrumb items={breadcrumbItems} />

                <div className="-mt-2 grid grid-cols-1 items-center gap-10 md:grid-cols-12">
                    <div className={image ? 'md:col-span-7' : 'md:col-span-12 lg:col-span-9'}>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1 shadow-sm">
                            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">{eyebrow}</span>
                        </div>

                        <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[48px]">
                            {title}
                            {highlight && (
                                <>
                                    {' '}
                                    <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                        {highlight}
                                    </span>
                                </>
                            )}
                        </h1>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>

                        {!hideActions && (
                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(236,72,153,0.45)]"
                                >
                                    Talk to Our Team
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-slate-50"
                                >
                                    See Our Work
                                </Link>
                            </div>
                        )}
                    </div>

                    {image && (
                        <div className="relative mx-auto hidden w-full max-w-[400px] md:col-span-5 md:block lg:mr-4">
                            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-blue-200/60 via-purple-200/50 to-pink-200/60 blur-2xl" aria-hidden="true" />
                            <div className="relative overflow-hidden rounded-[26px] border-4 border-white shadow-[0_30px_60px_-20px_rgba(30,41,99,0.45)] lg:rotate-[1.5deg]">
                                <Image src={image} alt={imageAlt} sizes="400px" className="h-auto w-full" loading="eager" fetchPriority="high" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
