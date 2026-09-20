'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ArrowRight, ExternalLink, Layers, Cpu, Tag, Building } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface PortfolioQuickViewProps {
    project: PortfolioItem | null;
    onClose: () => void;
}

export default function PortfolioQuickView({ project, onClose }: PortfolioQuickViewProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (project) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quickview-title"
        >
            {/* Overlay click to close */}
            <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

            {/* Modal Dialog Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 border border-slate-100 transition-all transform scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="Close Quick View Modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                    <Image
                        src={project.coverImage}
                        alt={project.coverImageAlt || project.title}
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#1769FF] text-white text-[11px] font-bold">
                                {project.projectType}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-200 text-[11px] font-medium">
                                {project.industry}
                            </span>
                        </div>
                        <h2 id="quickview-title" className="text-2xl font-bold text-white tracking-tight">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                    {/* Summary */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                            Project Overview
                        </h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            {project.description || project.shortDescription}
                        </p>
                    </div>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                        <div className="flex items-start gap-2.5">
                            <Building className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <span className="block font-bold text-slate-900">Industry</span>
                                <span className="text-slate-600">{project.industry}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                            <Tag className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <span className="block font-bold text-slate-900">Project Type</span>
                                <span className="text-slate-600">{project.projectType}</span>
                            </div>
                        </div>

                        <div className="flex items-start gap-2.5 sm:col-span-2">
                            <Layers className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                                <span className="block font-bold text-slate-900">Services Involved</span>
                                <div className="flex flex-wrap gap-1.5 mt-1">
                                    {project.services.map((s) => (
                                        <span key={s.title} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                                            {s.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5 text-blue-600" />
                            <span>Technologies Used</span>
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((t) => (
                                <span key={t.name} className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100 text-[#1769FF] font-semibold text-xs">
                                    {t.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <span>Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    ) : (
                        <div />
                    )}

                    <Link
                        href={`/portfolio/${project.slug}`}
                        onClick={onClose}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1769FF] hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <span>View Full Details</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
