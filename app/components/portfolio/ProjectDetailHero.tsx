import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Globe, Layers, Cpu, Building, ShieldCheck, Tag } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';
import PortfolioBreadcrumb from './PortfolioBreadcrumb';

interface ProjectDetailHeroProps {
    project: PortfolioItem;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
    return (
        <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-10 pb-16 lg:pb-24 overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Breadcrumb */}
                <div className="text-white/80">
                    <PortfolioBreadcrumb
                        items={[
                            { label: 'Portfolio', href: '/portfolio' },
                            { label: project.title },
                        ]}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
                    {/* Left Info Column */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Category & Industry Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-wide uppercase">
                                {project.projectType}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                                {project.industry}
                            </span>
                            {project.clientVisibility === 'public' && project.clientName && (
                                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                                    Client: {project.clientName}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="text-lg font-medium text-blue-400">
                                {project.subtitle}
                            </p>
                        )}

                        {/* Short Summary */}
                        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                            {project.shortDescription}
                        </p>

                        {/* Metadata Pills */}
                        <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Industry</span>
                                <span className="text-xs font-bold text-slate-200 mt-0.5 block truncate">{project.industry}</span>
                            </div>
                            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Project Type</span>
                                <span className="text-xs font-bold text-slate-200 mt-0.5 block truncate">{project.projectType}</span>
                            </div>
                            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/80">
                                <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platforms</span>
                                <span className="text-xs font-bold text-slate-200 mt-0.5 block truncate">{project.platforms.join(', ')}</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <span>Start a Similar Project</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
                                >
                                    <Globe className="w-4 h-4 text-blue-400" />
                                    <span>Visit Live Project</span>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right Cover Preview */}
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 group">
                            <Image
                                src={project.coverImage}
                                alt={project.coverImageAlt || project.title}
                                fill
                                priority
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
