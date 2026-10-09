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
        <article className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white shadow-[0_30px_80px_-30px_rgba(30,58,138,0.25)]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Showcase panel */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 px-6 pb-10 pt-16 sm:px-10 lg:px-12 lg:py-14">
                    <div
                        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]"
                        aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-pink-500/40 blur-[90px]" aria-hidden="true" />
                    <div className="pointer-events-none absolute -left-16 -top-20 h-72 w-72 rounded-full bg-cyan-400/30 blur-[90px]" aria-hidden="true" />

                    <span className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md sm:left-6 sm:top-6">
                        <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
                        Featured Case Study
                    </span>

                    <Link
                        href={href}
                        className="group relative mx-auto block max-w-[380px] overflow-hidden rounded-[22px] border-[5px] border-white/90 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.6)] transition-transform duration-500 hover:-translate-y-1 lg:rotate-[-2deg] lg:hover:rotate-0"
                        aria-label={`${project.title} case study`}
                    >
                        <Image
                            src={getProjectImage(project)}
                            alt={project.coverImageAlt || project.title}
                            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                            sizes="(max-width: 1024px) 90vw, 380px"
                            priority
                        />
                    </Link>

                    {/* Floating chips */}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 left-5 z-10 inline-flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 shadow-xl transition-transform hover:-translate-y-0.5 sm:left-8"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>
                            <span className="text-left">
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600">Live now</span>
                                <span className="block text-[13px] font-bold text-slate-900">{domain}</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 text-slate-400" />
                        </a>
                    )}
                    {project.platforms.length > 0 && (
                        <span className="absolute right-5 top-1/2 z-10 hidden items-center gap-2 rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-xl backdrop-blur-md sm:inline-flex lg:right-6">
                            <MonitorSmartphone className="h-4 w-4 text-indigo-600" />
                            <span className="text-[12px] font-bold text-slate-800">{project.platforms.join(' · ')}</span>
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col p-6 sm:p-10 lg:p-12">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-purple-600">
                        {project.industry} <span className="text-slate-300">/</span> {project.projectType}
                    </p>

                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{project.title}</h2>
                    {project.subtitle && (
                        <p className="mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-lg font-semibold text-transparent">
                            {project.subtitle}
                        </p>
                    )}

                    <p className="mt-5 text-[15px] leading-relaxed text-slate-600 sm:text-base">{project.shortDescription}</p>

                    {/* Key features */}
                    {features.length > 0 && (
                        <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = (feature.iconName && FEATURE_ICON[feature.iconName]) || Sparkles;
                                return (
                                    <li
                                        key={feature.title}
                                        className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 transition-colors hover:border-indigo-200 hover:bg-indigo-50/50"
                                    >
                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/80">
                                            <Icon className="h-4.5 w-4.5" />
                                        </span>
                                        <span className="text-[13.5px] font-semibold leading-snug text-slate-800">{feature.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {/* Stack */}
                    <div className="mt-7 flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">Built with</span>
                        {project.technologies.map((tech) => {
                            const entry = tech.iconName ? TECH_ICON[tech.iconName] : undefined;
                            const Icon = entry?.Icon;
                            return (
                                <span
                                    key={tech.name}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-2.5 py-1 text-[12px] font-semibold text-slate-600 shadow-sm"
                                >
                                    {Icon && <Icon className={`h-3.5 w-3.5 ${entry?.color}`} aria-hidden="true" />}
                                    {tech.name}
                                </span>
                            );
                        })}
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-slate-100 pt-7 lg:mt-9">
                        <Link
                            href={href}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(168,85,247,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_14px_32px_rgba(168,85,247,0.45)]"
                        >
                            Read Case Study
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <button
                            onClick={() => onQuickView(project)}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
                        >
                            <Eye className="h-4 w-4" />
                            Quick View
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
