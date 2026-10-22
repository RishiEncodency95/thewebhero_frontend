import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CircleCheck, Rocket } from 'lucide-react';
import PortfolioBreadcrumb from './PortfolioBreadcrumb';
import type { PortfolioItem } from '../../types/portfolio';
import { getProjectImage } from '../../lib/portfolioMedia';

export default function PortfolioHero({ projects }: { projects: PortfolioItem[] }) {

    const stats = [
        { value: `${projects.length}+`, label: 'Products shipped' },
        { value: `${new Set(projects.map((p) => p.industry)).size}`, label: 'Industries served' },
        { value: `${new Set(projects.flatMap((p) => p.technologies.map((t) => t.name))).size}`, label: 'Core technologies' },
        { value: `${projects.filter((p) => p.liveUrl).length}`, label: 'Live websites' },
    ];

    // Three pieces of artwork for the collage: the first featured web project
    // in front, flanked by a mobile app and another web project.
    const [front, left, right] = [
        projects.find((p) => p.projectType === 'Web Application'),
        projects.find((p) => p.projectType === 'Mobile Application'),
        projects.filter((p) => p.projectType === 'Web Application')[1],
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/70 via-white to-white py-2 lg:py-6">
            {/* Ambient background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]"
                aria-hidden="true"
            />
            <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/40 blur-[110px]" aria-hidden="true" />
            <div className="pointer-events-none absolute top-20 right-0 h-[420px] w-[420px] rounded-full bg-pink-200/40 blur-[120px]" aria-hidden="true" />

            <div className="relative z-10 w-full lg:px-10">
                {/* <PortfolioBreadcrumb /> */}

                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
                    {/* Copy */}
                    <div className="lg:col-span-6">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
                            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                                Our Work &amp; Portfolio
                            </span>
                        </div>

                        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[56px]">
                            Products we&apos;ve{' '}
                            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                designed, built
                            </span>{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                                &amp; shipped.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                            Real, live platforms — on-demand marketplaces, booking apps,
                            admin systems and mobile apps. Explore how we turn business goals into fast,
                            scalable software.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(236,72,153,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(236,72,153,0.45)] sm:text-base"
                            >
                                Start a Project
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-slate-400 hover:bg-slate-50 sm:text-base"
                            >
                                Browse Projects
                            </a>
                        </div>

                        {/* Stats */}
                        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mt-2  sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <dt className="sr-only">{stat.label}</dt>
                                    <dd className="text-lg lg:text-2xl font-semibold tracking-tight text-slate-900">{stat.value}</dd>
                                    <dd className="mt-1 text-xs font-medium text-slate-500 sm:text-[13px]">{stat.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Collage */}
                    <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px] lg:col-span-6 lg:h-[540px]" aria-hidden="true">
                        <div className="absolute inset-x-8 bottom-6 top-10 rounded-[40px] bg-gradient-to-tr from-blue-200/60 via-purple-200/50 to-pink-200/60 blur-2xl" />

                        {left && (
                            <div className="absolute left-0 top-12 w-[46%] -rotate-[7deg] overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] motion-safe:animate-[twhFloat_6s_ease-in-out_infinite]">
                                <Image src={getProjectImage(left)} alt="" className="h-auto w-full" sizes="240px" />
                            </div>
                        )}
                        {right && (
                            <div className="absolute right-0 top-16 w-[46%] rotate-[7deg] overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.35)] motion-safe:animate-[twhFloat_7s_ease-in-out_infinite_1s]">
                                <Image src={getProjectImage(right)} alt="" className="h-auto w-full" sizes="240px" />
                            </div>
                        )}
                        {front && (
                            <div className="absolute left-1/2 top-0 z-10 w-[56%] -translate-x-1/2 overflow-hidden rounded-[26px] border-4 border-white bg-white shadow-[0_30px_70px_-20px_rgba(30,41,99,0.5)]">
                                <Image src={getProjectImage(front)} alt="" className="h-auto w-full" sizes="300px" loading="eager" fetchPriority="high" />
                            </div>
                        )}

                        {/* Floating chips */}
                        <div className="absolute bottom-4 left-0 z-20 flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:bottom-10 lg:-left-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                                <CircleCheck className="h-4.5 w-4.5" />
                            </span>
                            <span className="text-left">
                                <span className="block text-[13px] font-bold text-slate-900">Live in production</span>
                                <span className="block text-[11px] font-medium text-slate-500">Visit the real products</span>
                            </span>
                        </div>
                        <div className="absolute right-0 bottom-16 z-20 hidden items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md sm:flex lg:-right-4">
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                                <Rocket className="h-4.5 w-4.5" />
                            </span>
                            <span className="text-left">
                                <span className="block text-[13px] font-bold text-slate-900">Web + Mobile</span>
                                <span className="block text-[11px] font-medium text-slate-500">React · Node · Flutter</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
