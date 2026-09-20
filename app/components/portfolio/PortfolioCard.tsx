'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, ExternalLink, Layers } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioCardProps {
    project: PortfolioItem;
    onQuickView: (project: PortfolioItem) => void;
}

export default function PortfolioCard({ project, onQuickView }: PortfolioCardProps) {
    return (
        <div className="group relative flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
            {/* Project Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                <Image
                    src={project.coverImage}
                    alt={project.coverImageAlt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-bold tracking-wide uppercase">
                        {project.projectType}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold tracking-wide">
                        {project.industry}
                    </span>
                </div>

                {/* Quick View Button on Image */}
                <button
                    onClick={() => onQuickView(project)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 text-xs font-semibold shadow-md transition-all opacity-95 md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                    aria-label={`Quick View ${project.title}`}
                >
                    <Eye className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Quick View</span>
                </button>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
                <div>
                    {/* Title & Subtitle */}
                    <div className="mb-2">
                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="group-hover:text-[#1769FF] transition-colors focus:outline-none focus:underline"
                        >
                            <h3 className="text-xl font-extrabold text-slate-900 line-clamp-1">
                                {project.title}
                            </h3>
                        </Link>
                        {project.subtitle && (
                            <p className="text-sm font-semibold text-blue-600 mt-0.5 line-clamp-1">
                                {project.subtitle}
                            </p>
                        )}
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-3">
                        {project.shortDescription}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech.name}
                                className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-xs font-medium text-slate-700"
                            >
                                {tech.name}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-500">
                                +{project.technologies.length - 4} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                    <Link
                        href={`/portfolio/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1769FF] hover:text-blue-700 group/link"
                    >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                            aria-label={`Visit live website for ${project.title}`}
                        >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
