'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import { getProjectImage, TECH_ICON, TONE, DEFAULT_TONE } from '../../lib/portfolioMedia';

interface PortfolioCardProps {
    project: PortfolioItem;
    index: number;
    onQuickView: (project: PortfolioItem) => void;
}

/** Shorter labels for the long project-type names in the data file. */
const TYPE_LABEL: Record<string, string> = {
    'Admin Panel / Internal Tool': 'Admin Panel',
};

export default function PortfolioCard({ project, onQuickView }: PortfolioCardProps) {
    const tone = TONE[project.slug] ?? DEFAULT_TONE;
    const href = `/portfolio/${project.slug}`;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(35,75,125,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_22px_48px_-16px_rgba(35,75,125,0.25)] sm:flex-row">
            {/* Artwork — on sm+ the panel takes the artwork's own portrait
                ratio (1108x1419), so the image fills it with nothing cropped. */}
            <div className={`relative h-60 shrink-0 overflow-hidden bg-gradient-to-br ${tone} sm:order-last sm:h-auto sm:w-[40%] sm:aspect-[1108/1419]`}>
                <div className="absolute inset-y-4 left-1/2 aspect-[1108/1419] -translate-x-1/2 overflow-hidden rounded-xl border-[3px] border-white shadow-lg sm:inset-0 sm:translate-x-0 sm:rounded-none sm:border-0 sm:shadow-none">
                    <Image
                        src={getProjectImage(project)}
                        alt={project.coverImageAlt || project.title}
                        fill
                        sizes="(max-width: 640px) 200px, 280px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">
                        {TYPE_LABEL[project.projectType] ?? project.projectType}
                    </span>
                    <span className="truncate text-[11px] font-semibold uppercase tracking-wider text-purple-600">
                        {project.industry}
                    </span>
                </div>

                <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-900">
                    {/* Stretched link makes the whole card clickable. */}
                    <Link href={href} className="after:absolute after:inset-0 focus:outline-none">
                        {project.title}
                    </Link>
                </h3>
                {project.subtitle && (
                    <p className="mt-0.5 text-[13.5px] font-medium text-slate-500">{project.subtitle}</p>
                )}

                <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">{project.shortDescription}</p>

                {/* Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => {
                        const entry = tech.iconName ? TECH_ICON[tech.iconName] : undefined;
                        const Icon = entry?.Icon;
                        return (
                            <span
                                key={tech.name}
                                className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2 py-0.5 text-[11.5px] font-semibold text-slate-600 ring-1 ring-slate-200/80"
                            >
                                {Icon && <Icon className={`h-3 w-3 ${entry?.color}`} aria-hidden="true" />}
                                {tech.name}
                            </span>
                        );
                    })}
                </div>

                {/* Actions */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-purple-600">
                        View case study
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>

                    <div className="relative z-10 flex items-center gap-1.5">
                        <button
                            onClick={() => onQuickView(project)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            aria-label={`Quick view ${project.title}`}
                            title="Quick view"
                        >
                            <Eye className="h-4 w-4" />
                        </button>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                                aria-label={`Visit live website for ${project.title}`}
                                title="Live site"
                            >
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
