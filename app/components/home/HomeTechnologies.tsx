'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Cpu, Globe, Server, Database, Cloud, FileCode, Layers } from 'lucide-react';

export default function HomeTechnologies() {
    const techStack = [
        { name: 'React', icon: Globe, color: 'text-cyan-600', tag: 'Frontend' },
        { name: 'Next.js', icon: Code2, color: 'text-slate-900', tag: 'Fullstack' },
        { name: 'TypeScript', icon: FileCode, color: 'text-blue-600', tag: 'Language' },
        { name: 'Node.js', icon: Server, color: 'text-emerald-600', tag: 'Backend' },
        { name: 'Express.js', icon: Cpu, color: 'text-slate-700', tag: 'Backend' },
        { name: 'GraphQL', icon: Layers, color: 'text-pink-600', tag: 'API' },
        { name: 'PostgreSQL', icon: Database, color: 'text-blue-700', tag: 'Database' },
        { name: 'AWS', icon: Cloud, color: 'text-amber-600', tag: 'Cloud' },
        { name: 'React Native', icon: Globe, color: 'text-cyan-600', tag: 'Mobile' },
        { name: 'Git', icon: Code2, color: 'text-orange-600', tag: 'DevOps' },
        { name: 'Figma', icon: Layers, color: 'text-purple-600', tag: 'Design' },
        { name: 'Docker', icon: Cloud, color: 'text-blue-600', tag: 'DevOps' },
    ];

    return (
        <section className="bg-slate-50/60 text-slate-900 py-16 relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            TECHNOLOGIES
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Technologies We Work With
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            We use modern technologies to build fast, secure, and scalable solutions.
                        </p>
                    </div>

                    <Link
                        href="/technologies"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>View All Technologies</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {techStack.map((tech, idx) => {
                        const IconComponent = tech.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <IconComponent className={`w-5 h-5 ${tech.color}`} />
                                </div>
                                <div className="truncate">
                                    <h4 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                                        {tech.name}
                                    </h4>
                                    <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">
                                        {tech.tag}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
