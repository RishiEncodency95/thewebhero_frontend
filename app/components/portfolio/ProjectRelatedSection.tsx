import React from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Cpu, Building, ShieldCheck, Folder } from 'lucide-react';
import { PortfolioItem } from '../../types/portfolio';

interface ProjectRelatedSectionProps {
    project: PortfolioItem;
}

export default function ProjectRelatedSection({ project }: ProjectRelatedSectionProps) {
    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Related Services */}
                    {project.services && project.services.length > 0 && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                                <Layers className="w-5 h-5 text-[#1769FF]" />
                                <h3>Related Services</h3>
                            </div>
                            <ul className="space-y-2.5">
                                {project.services.map((service) => (
                                    <li key={service.slug}>
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="group flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1769FF] transition-colors"
                                        >
                                            <span>{service.title}</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1769FF] transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Related Industry */}
                    {project.industry && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                                <Building className="w-5 h-5 text-[#1769FF]" />
                                <h3>Industry Domain</h3>
                            </div>
                            <p className="text-xs text-slate-600">
                                Built specifically for requirements in the <strong className="text-slate-800">{project.industry}</strong> sector.
                            </p>
                            <Link
                                href={`/industries/${project.industrySlug || project.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="inline-flex items-center gap-2 text-xs font-bold text-[#1769FF] hover:underline"
                            >
                                <span>Explore {project.industry} Solutions</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    )}

                    {/* Related Solutions */}
                    {project.solutions && project.solutions.length > 0 && (
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
                                <Folder className="w-5 h-5 text-[#1769FF]" />
                                <h3>Enterprise Solutions</h3>
                            </div>
                            <ul className="space-y-2.5">
                                {project.solutions.map((sol) => (
                                    <li key={sol.slug}>
                                        <Link
                                            href={`/solutions/${sol.slug}`}
                                            className="group flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#1769FF] transition-colors"
                                        >
                                            <span>{sol.title}</span>
                                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1769FF] transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
