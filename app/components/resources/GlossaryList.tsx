'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Layers, ArrowRight } from 'lucide-react';
import { ResourceItem } from '../../types/resource';

interface GlossaryListProps {
    terms: ResourceItem[];
}

const alphabet = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

export default function GlossaryList({ terms }: GlossaryListProps) {
    const [selectedLetter, setSelectedLetter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTerms = terms.filter((item) => {
        const itemTerm = item.term || item.title;
        const letterMatch =
            selectedLetter === 'All' ||
            itemTerm[0].toUpperCase() === selectedLetter;
        const searchMatch =
            searchQuery.trim() === '' ||
            itemTerm.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.definition?.toLowerCase().includes(searchQuery.toLowerCase());

        return letterMatch && searchMatch;
    });

    return (
        <div className="space-y-8">
            {/* Search & Alphabet Filter */}
            <div className="space-y-4">
                <div className="relative max-w-md">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search tech terms or definitions..."
                        className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                    />
                </div>

                {/* A-Z Alphabet Filter */}
                <div className="flex flex-wrap gap-1">
                    {alphabet.map((letter) => (
                        <button
                            key={letter}
                            onClick={() => setSelectedLetter(letter)}
                            className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${selectedLetter === letter
                                    ? 'bg-[#1769FF] text-white shadow-sm'
                                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                                }`}
                        >
                            {letter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Terms List */}
            {filteredTerms.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 text-slate-600 text-sm">
                    No glossary terms found matching your selection.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredTerms.map((term) => (
                        <div
                            key={term.slug}
                            className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {term.term || term.title}
                                    </h3>
                                    <span className="w-6 h-6 rounded-md bg-blue-50 text-[#1769FF] text-xs font-extrabold flex items-center justify-center">
                                        {(term.term || term.title)[0].toUpperCase()}
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                                    {term.definition || term.excerpt}
                                </p>
                            </div>

                            {term.relatedTerms && term.relatedTerms.length > 0 && (
                                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-xs">
                                    <span className="text-slate-400 font-medium">Related:</span>
                                    {term.relatedTerms.map((rel) => (
                                        <span key={rel} className="px-2 py-0.5 bg-slate-100 rounded text-slate-700 font-medium">
                                            {rel}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
