import React from 'react';
import Link from 'next/link';
import { Cpu, ExternalLink } from 'lucide-react';
import { ProjectTechnology } from '../../types/portfolio';

interface ProjectTechnologyStackProps {
    technologies: ProjectTechnology[];
}

export default function ProjectTechnologyStack({ technologies }: ProjectTechnologyStackProps) {
    if (!technologies || technologies.length === 0) return null;

    return (
        <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        TECHNOLOGY STACK
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Technologies & Frameworks Utilized
                    </h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technologies.map((tech) => {
                        const targetSlug = tech.slug || tech.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                        return (
                            <Link
                                key={tech.name}
                                href={`/technologies/${targetSlug}`}
                                className="group p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col items-center text-center justify-center"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1769FF] group-hover:bg-[#1769FF] group-hover:text-white transition-colors flex items-center justify-center mb-2.5">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1769FF] transition-colors">
                                    {tech.name}
                                </span>
                                {tech.category && (
                                    <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                                        {tech.category}
                                    </span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
