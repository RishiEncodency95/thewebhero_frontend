'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function HomeProjects() {
    const projects = [
        {
            title: 'Wingame11',
            category: 'Real Money Quiz Platform',
            tags: ['Next.js', 'Node.js', 'MongoDB'],
            gradient: 'from-purple-950 via-indigo-900 to-slate-950 border-purple-800/40 text-white',
            image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'CityCells',
            category: 'Online Concept Mobile App',
            tags: ['React Native', 'Firebase'],
            gradient: 'from-indigo-950 via-purple-900 to-slate-950 border-indigo-800/40 text-white',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
        },
        {
            title: '9154m',
            category: 'Online Service Platform',
            tags: ['React', 'Node.js'],
            gradient: 'from-blue-950 via-cyan-900 to-slate-950 border-blue-800/40 text-white',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <section className="bg-white text-slate-900 py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            OUR WORK
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Featured Projects
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            A look at some of the amazing products we&apos;ve built.
                        </p>
                    </div>

                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>View All Projects</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Projects Showcase Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className={`group rounded-2xl bg-gradient-to-b ${project.gradient} border p-6 shadow-xl hover:shadow-[0_15px_35px_rgba(147,51,234,0.3)] transition-all duration-500 flex flex-col justify-between`}
                        >
                            <div>
                                {/* Project Title & Category */}
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ExternalLink className="w-4 h-4" />
                                    </div>
                                </div>

                                <p className="text-slate-300 text-xs font-medium mb-4">
                                    {project.category}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] text-slate-200 font-medium backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Preview Image */}
                            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/20 shadow-inner">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
