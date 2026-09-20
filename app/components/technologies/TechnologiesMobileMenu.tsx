'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, X, Cpu, ArrowRight } from 'lucide-react';
import { TECH_CATEGORIES } from '../../lib/technologies';

type TechnologiesMobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function TechnologiesMobileMenu({ isOpen, onClose }: TechnologiesMobileMenuProps) {
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const toggleCategory = (slug: string) => {
        setExpandedCategory(expandedCategory === slug ? null : slug);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="absolute inset-0" onClick={onClose} />

            <div className="relative w-full max-w-sm bg-white h-full flex flex-col shadow-2xl z-10 animate-in slide-in-from-right duration-300">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 bg-slate-50">
                    <div className="flex items-center gap-2 font-black text-slate-900 text-base">
                        <Cpu className="h-5 w-5 text-blue-600" />
                        <span>Technologies Directory</span>
                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="rounded-full p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-900 focus:outline-none"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    <Link
                        href="/technologies"
                        onClick={onClose}
                        className="flex items-center justify-between rounded-xl bg-blue-600 p-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 mb-4"
                    >
                        <span>Explore All Technologies</span>
                        <ArrowRight className="h-4 w-4" />
                    </Link>

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-1">
                        Tech Domains ({TECH_CATEGORIES.length})
                    </div>

                    {TECH_CATEGORIES.map((cat) => {
                        const isExpanded = expandedCategory === cat.slug;
                        return (
                            <div
                                key={cat.slug}
                                className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleCategory(cat.slug)}
                                    className="w-full flex items-center justify-between p-3.5 text-left font-bold text-slate-900 hover:text-blue-600"
                                >
                                    <span className="text-sm">{cat.name}</span>
                                    <ChevronDown
                                        className={`h-4 w-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : ''
                                            }`}
                                    />
                                </button>

                                {isExpanded && (
                                    <div className="bg-white border-t border-slate-200/60 p-3 space-y-2">
                                        <Link
                                            href={`/technologies/${cat.slug}`}
                                            onClick={onClose}
                                            className="block text-xs font-extrabold text-blue-600 hover:underline mb-2 px-2"
                                        >
                                            View {cat.name} Overview →
                                        </Link>

                                        {cat.technologies.map((sub) => (
                                            <Link
                                                key={sub.slug}
                                                href={`/technologies/${sub.slug}`}
                                                onClick={onClose}
                                                className="flex items-center justify-between rounded-lg p-2 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                <span className="truncate">{sub.name}</span>
                                                <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="border-t border-slate-200 p-4 bg-slate-50">
                    <Link
                        href="/get-a-quote"
                        onClick={onClose}
                        className="block w-full text-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-xs font-bold text-white shadow-md"
                    >
                        Get a Tech Consultation →
                    </Link>
                </div>
            </div>
        </div>
    );
}
