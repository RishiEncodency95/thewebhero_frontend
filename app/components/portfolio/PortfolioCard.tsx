'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Eye, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { getProjectImage, TECH_ICON, TONE, DEFAULT_TONE } from '../../lib/portfolioMedia';

interface PortfolioCardProps {
    project: PortfolioItem;
    index: number;
    onQuickView: (project: PortfolioItem) => void;
}

export default function PortfolioCard({ project, index, onQuickView }: PortfolioCardProps) {
    const tone = TONE[project.slug] ?? DEFAULT_TONE;
    const href = `/portfolio/${project.slug}`;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white p-2.5 shadow-[0_8px_28px_rgba(35,75,125,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/80 hover:shadow-[0_24px_50px_-12px_rgba(35,75,125,0.22)]">
            {/* Artwork */}
            <div className={`relative aspect-[4/5] overflow-hidden rounded-[20px] bg-gradient-to-br ${tone}`}>
                <Image
                    src={getProjectImage(project)}
                    alt={project.coverImageAlt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Top badges */}
                <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-start justify-between gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-md">
                        {project.projectType}
                    </span>
                    <span className="rounded-full bg-slate-900/80 px-2.5 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>

                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                    <div className="flex w-full items-center gap-2">
                        <button
                            onClick={() => onQuickView(project)}
                            className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-lg transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            aria-label={`Quick view ${project.title}`}
                        >
                            <Eye className="h-3.5 w-3.5" />
                            Quick View
                        </button>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md transition-colors hover:bg-white/25"
                                aria-label={`Visit live website for ${project.title}`}
                            >
                                Live Site
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <p className="text-[12px] font-semibold uppercase tracking-wider text-purple-600">
                    {project.industry}
                </p>

                <div className="mt-1.5 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <h3 className="text-xl font-bold tracking-tight text-slate-900">
                            {/* Stretched link makes the whole card clickable. */}
                            <Link href={href} className="after:absolute after:inset-0 focus:outline-none">
                                {project.title}
                            </Link>
                        </h3>
                        {project.subtitle && (
                            <p className="mt-0.5 truncate text-sm font-medium text-slate-500">{project.subtitle}</p>
                        )}
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-purple-600 group-hover:text-white">
                        <ArrowUpRight className="h-4.5 w-4.5" />
                    </span>
                </div>

                <p className="mt-3 line-clamp-2 text-[14.5px] leading-relaxed text-slate-600">
                    {project.shortDescription}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {project.technologies.map((tech) => {
                        const entry = tech.iconName ? TECH_ICON[tech.iconName] : undefined;
                        const Icon = entry?.Icon;
                        return (
                            <span
                                key={tech.name}
                                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-1 text-[12px] font-semibold text-slate-600"
                            >
                                {Icon && <Icon className={`h-3.5 w-3.5 ${entry?.color}`} aria-hidden="true" />}
                                {tech.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
