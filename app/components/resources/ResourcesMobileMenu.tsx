'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, BookOpen, FileText, GraduationCap, HelpCircle, Download, Video, Layers, Search, ArrowRight } from 'lucide-react';

interface ResourcesMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResourcesMobileMenu({ isOpen, onClose }: ResourcesMobileMenuProps) {
    const [openAccordion, setOpenAccordion] = useState<string | null>('blog');

    if (!isOpen) return null;

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-sm flex justify-end xl:hidden">
            <div className="w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto">
                {/* Header */}
                <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-blue-400" />
                        <h2 className="font-bold text-base">Resources Navigation</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                        aria-label="Close Mobile Navigation"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body Accordions */}
                <div className="p-4 space-y-3 flex-1 overflow-y-auto text-sm">
                    {/* Blog Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('blog')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-[#1769FF]" />
                                Blog & Articles
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'blog' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'blog' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/resources/blog" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">All Articles</Link>
                                <Link href="/resources/technology-insights" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Technology Insights</Link>
                                <Link href="/resources/company-updates" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Company Updates</Link>
                                <Link href="/resources/industry-insights" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Industry Insights</Link>
                            </div>
                        )}
                    </div>

                    {/* Guides Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('guides')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-indigo-600" />
                                Guides
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'guides' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'guides' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/resources/guides" onClick={onClose} className="block py-1.5 hover:text-indigo-600">All Guides</Link>
                                <Link href="/resources/guides/web-development" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Web Development</Link>
                                <Link href="/resources/guides/mobile-app-development" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Mobile App Development</Link>
                                <Link href="/resources/guides/software-development" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Software Development</Link>
                                <Link href="/resources/guides/seo" onClick={onClose} className="block py-1.5 hover:text-indigo-600">SEO & Performance</Link>
                            </div>
                        )}
                    </div>

                    {/* Tutorials Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('tutorials')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <GraduationCap className="w-4 h-4 text-emerald-600" />
                                Code Tutorials
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'tutorials' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'tutorials' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/resources/tutorials" onClick={onClose} className="block py-1.5 hover:text-emerald-600">All Tutorials</Link>
                                <Link href="/resources/tutorials/nextjs" onClick={onClose} className="block py-1.5 hover:text-emerald-600">Next.js</Link>
                                <Link href="/resources/tutorials/react" onClick={onClose} className="block py-1.5 hover:text-emerald-600">React</Link>
                                <Link href="/resources/tutorials/nodejs" onClick={onClose} className="block py-1.5 hover:text-emerald-600">Node.js</Link>
                                <Link href="/resources/tutorials/flutter" onClick={onClose} className="block py-1.5 hover:text-emerald-600">Flutter</Link>
                            </div>
                        )}
                    </div>

                    {/* Direct Links */}
                    <div className="space-y-2 pt-2">
                        <Link
                            href="/case-studies"
                            onClick={onClose}
                            className="block p-3 border border-purple-100 bg-purple-50/50 rounded-xl font-bold text-purple-900 text-xs"
                        >
                            Case Studies →
                        </Link>

                        <Link
                            href="/resources/faqs"
                            onClick={onClose}
                            className="block p-3 border border-slate-200 rounded-xl font-bold text-slate-800 text-xs"
                        >
                            FAQs Knowledge Base
                        </Link>

                        <Link
                            href="/resources/whitepapers"
                            onClick={onClose}
                            className="block p-3 border border-slate-200 rounded-xl font-bold text-slate-800 text-xs"
                        >
                            Whitepapers & eBooks
                        </Link>

                        <Link
                            href="/resources/webinars"
                            onClick={onClose}
                            className="block p-3 border border-slate-200 rounded-xl font-bold text-slate-800 text-xs"
                        >
                            Webinars
                        </Link>

                        <Link
                            href="/resources/glossary"
                            onClick={onClose}
                            className="block p-3 border border-slate-200 rounded-xl font-bold text-slate-800 text-xs"
                        >
                            Tech Term Glossary
                        </Link>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 border-t border-slate-200 space-y-2 bg-slate-50">
                    <Link
                        href="/resources/search"
                        onClick={onClose}
                        className="w-full py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                        <Search className="w-4 h-4 text-blue-400" />
                        <span>Search Resources</span>
                    </Link>
                    <Link
                        href="/resources"
                        onClick={onClose}
                        className="w-full py-2.5 bg-[#1769FF] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2"
                    >
                        <span>Go to Resources Hub</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
