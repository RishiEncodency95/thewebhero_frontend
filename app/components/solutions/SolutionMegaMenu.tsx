'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { SOLUTION_CATEGORIES } from '../../lib/solutions';

type SolutionMegaMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function SolutionMegaMenu({ isOpen, onClose }: SolutionMegaMenuProps) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    if (!isOpen) return null;

    const activeCategory = SOLUTION_CATEGORIES[activeCategoryIndex];

    return (
        <div
            onMouseLeave={onClose}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200/90 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Left Column: Solution Domains */}
                    <div className="col-span-4 border-r border-slate-100 pr-6 space-y-1">
                        <div className="flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                            <span>Business Solutions</span>
                            <span>{SOLUTION_CATEGORIES.length} Domains</span>
                        </div>

                        {SOLUTION_CATEGORIES.map((cat, idx) => {
                            const isActive = activeCategoryIndex === idx;
                            return (
                                <div key={cat.slug} className="group flex items-center">
                                    <Link
                                        href={`/solutions/${cat.slug}`}
                                        onMouseEnter={() => setActiveCategoryIndex(idx)}
                                        onClick={onClose}
                                        className={`flex-1 flex items-center justify-between rounded-xl px-3.5 py-2 text-sm font-bold transition-all ${isActive
                                                ? 'bg-blue-50 text-blue-600 shadow-sm'
                                                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div
                                                className={`h-2 w-2 rounded-full shrink-0 ${isActive ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'
                                                    }`}
                                            />
                                            <span className="truncate">{cat.name}</span>
                                        </div>
                                        <ChevronRight
                                            className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'text-blue-600 translate-x-1' : 'text-slate-300'
                                                }`}
                                        />
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: Active Domain Solutions */}
                    <div className="col-span-8 flex flex-col justify-between pl-2">
                        <div>
                            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 mb-1">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        <span>Target Business Need</span>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900">
                                        <Link
                                            href={`/solutions/${activeCategory.slug}`}
                                            onClick={onClose}
                                            className="hover:text-blue-600 transition-colors"
                                        >
                                            {activeCategory.name}
                                        </Link>
                                    </h3>
                                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                                        {activeCategory.description}
                                    </p>
                                </div>

                                <Link
                                    href={`/solutions/${activeCategory.slug}`}
                                    onClick={onClose}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors shrink-0"
                                >
                                    <span>Domain Overview</span>
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-3 max-h-[340px] overflow-y-auto pr-2 custom-scrollbar">
                                {activeCategory.solutions.map((sub) => (
                                    <Link
                                        key={sub.slug}
                                        href={`/solutions/${sub.slug}`}
                                        onClick={onClose}
                                        className="group rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition-all hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-md"
                                    >
                                        <div className="flex items-center justify-between">
                                            <h4 className="text-xs font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                                                {sub.title}
                                            </h4>
                                            <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-medium">
                                            {sub.shortDescription}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50 rounded-xl px-5 py-3">
                            <div className="flex items-center gap-2 text-xs text-slate-600 font-semibold">
                                <Layers className="h-4 w-4 text-blue-600" />
                                <span>Looking for tailored enterprise or startup software?</span>
                            </div>

                            <Link
                                href="/solutions"
                                onClick={onClose}
                                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                            >
                                <span>View All Solutions Directory</span>
                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
