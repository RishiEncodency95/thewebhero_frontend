'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Eye,
    ArrowUpRight,
    Star,
    Layers,
    Users,
    MapPin,
    Smartphone,
    Sparkles,
    MonitorSmartphone,
} from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { getProjectImage, TECH_ICON } from '../../lib/portfolioMedia';

interface PortfolioSpotlightProps {
    project: PortfolioItem;
    onQuickView: (project: PortfolioItem) => void;
}

/** `iconName` strings used by features in the data file. */
const FEATURE_ICON: Record<string, React.ElementType> = { Layers, Users, MapPin, Smartphone };

/** Large editorial card for the lead featured project. */
export default function PortfolioSpotlight({ project, onQuickView }: PortfolioSpotlightProps) {
    const href = `/portfolio/${project.slug}`;
    const features = project.features.slice(0, 4);
    const domain = project.liveUrl?.replace(/^https?:\/\//, '').replace(/\/$/, '');

    return (
        <article className="group/spot relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_24px_60px_-30px_rgba(30,58,138,0.3)]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Content */}
                <div className="relative flex flex-col p-6 sm:p-8 lg:col-span-7 lg:p-10">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700 ring-1 ring-amber-200/70">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            Featured
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            {project.industry} · {project.projectType}
                        </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{project.title}</h2>
                        {project.subtitle && (
                            <p className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-base font-semibold text-transparent sm:text-lg">
                                {project.subtitle}
                            </p>
                        )}
                    </div>

                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">{project.shortDescription}</p>

                    {/* Key features */}
                    {features.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {features.map((feature) => {
                                const Icon = (feature.iconName && FEATURE_ICON[feature.iconName]) || Sparkles;
                                return (
                                    <li
                                        key={feature.title}
                                        className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-100 bg-indigo-50/60 px-2.5 py-1.5 text-[12.5px] font-semibold text-indigo-900"
                                    >
                                        <Icon className="h-3.5 w-3.5 text-indigo-500" />
                                        {feature.title}
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {/* Footer: stack + actions */}
                    <div className="mt-6 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-auto">
                        <div className="flex items-center gap-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Stack</span>
                            <div className="flex -space-x-1.5">
                                {project.technologies.map((tech) => {
                                    const entry = tech.iconName ? TECH_ICON[tech.iconName] : undefined;
                                    const Icon = entry?.Icon;
                                    return (
                                        <span
                                            key={tech.name}
                                            title={tech.name}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-50 shadow-sm ring-1 ring-slate-200"
                                        >
                                            {Icon ? (
                                                <Icon className={`h-4 w-4 ${entry?.color}`} aria-label={tech.name} />
                                            ) : (
                                                <span className="text-[10px] font-bold text-slate-600">{tech.name.slice(0, 2)}</span>
                                            )}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={() => onQuickView(project)}
                                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2.5 sm:flex-none text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                            >
                                <Eye className="h-4 w-4" />
                                Quick View
                            </button>
                            <Link
                                href={href}
                                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-5 py-2.5 sm:flex-none text-sm font-semibold text-white transition-all hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:shadow-[0_10px_25px_rgba(168,85,247,0.35)]"
                            >
                                Read Case Study
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Showcase panel */}
                <div className="relative order-first h-[420px] overflow-hidden bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 sm:h-[460px] lg:order-none lg:col-span-5 lg:h-auto lg:min-h-[420px]">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,#000_15%,transparent_70%)]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-pink-500/40 blur-[80px]" aria-hidden="true" />

                    {/* Artwork at its native portrait ratio (1108x1419): height
                        comes from the panel, width from the aspect ratio, so
                        nothing is cropped. */}
                    <Link
                        href={href}
                        aria-label={`${project.title} case study`}
                        className="absolute inset-y-6 left-1/2 aspect-[1108/1419] -translate-x-1/2 overflow-hidden rounded-[18px] border-4 border-white/90 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.6)] transition-transform duration-500 group-hover/spot:-translate-y-1 lg:inset-y-8"
                    >
                        <Image
                            src={getProjectImage(project)}
                            alt={project.coverImageAlt || project.title}
                            fill
                            sizes="(max-width: 1024px) 360px, 340px"
                            className="object-cover"
                            loading="eager"
                            fetchPriority="high"
                        />
                    </Link>

                    <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/95 py-1.5 pl-3 pr-2.5 text-[12.5px] font-semibold text-slate-900 shadow-lg backdrop-blur-md transition-transform hover:-translate-y-0.5"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                </span>
                                {domain}
                                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                            </a>
                        ) : (
                            <span />
                        )}
                        {project.platforms.length > 0 && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/70 px-3 py-1.5 text-[11.5px] font-semibold text-white backdrop-blur-md">
                                <MonitorSmartphone className="h-3.5 w-3.5" />
                                {project.platforms.join(' · ')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
