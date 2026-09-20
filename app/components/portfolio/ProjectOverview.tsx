import React from 'react';
import { Target, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface ProjectOverviewProps {
    project: PortfolioItem;
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        PROJECT OVERVIEW
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        About {project.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Detailed Summary */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg">
                            <p>{project.description}</p>
                        </div>

                        {project.solutionDetails?.summary && (
                            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#1769FF]" />
                                    <span>The Delivery Strategy</span>
                                </h3>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    {project.solutionDetails.summary}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Scope & Deliverables Sidebar */}
                    <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/80 space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Layers className="w-4 h-4 text-[#1769FF]" />
                                <span>Project Scope</span>
                            </h3>

                            <ul className="space-y-3">
                                {project.solutionDetails?.deliverables ? (
                                    project.solutionDetails.deliverables.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    project.services.map((service, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>{service.title}</span>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-slate-200">
                            <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                                Supported Platforms
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {project.platforms.map((platform) => (
                                    <span
                                        key={platform}
                                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-semibold text-slate-800"
                                    >
                                        {platform}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
