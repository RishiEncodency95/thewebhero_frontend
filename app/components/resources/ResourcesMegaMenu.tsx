'use client';

import React from 'react';
import Link from 'next/link';
import {
    BookOpen,
    FileText,
    GraduationCap,
    HelpCircle,
    Download,
    Video,
    Search,
    Layers,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

interface ResourcesMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResourcesMegaMenu({ isOpen, onClose }: ResourcesMegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-6">
                    {/* Column 1: Blog & Guides */}
                    <div className="col-span-3 space-y-6">
                        {/* Blog Group */}
                        <div>
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                                <BookOpen className="w-4 h-4 text-[#1769FF]" />
                                <Link href="/resources/blog" onClick={onClose} className="hover:text-[#1769FF]">
                                    Blog & Insights
                                </Link>
                            </div>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                                <li>
                                    <Link href="/resources/blog" onClick={onClose} className="hover:text-[#1769FF] block py-1">
                                        All Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/technology-insights" onClick={onClose} className="hover:text-[#1769FF] block py-1">
                                        Technology Insights
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/company-updates" onClick={onClose} className="hover:text-[#1769FF] block py-1">
                                        Company Updates
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/industry-insights" onClick={onClose} className="hover:text-[#1769FF] block py-1">
                                        Industry Insights
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Case Studies Link */}
                        <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                <FileText className="w-4 h-4 text-purple-600" />
                                <Link href="/case-studies" onClick={onClose} className="hover:text-purple-600">
                                    Case Studies
                                </Link>
                            </div>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                                <li>
                                    <Link href="/case-studies" onClick={onClose} className="hover:text-purple-600 block py-1">
                                        All Case Studies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/case-studies/featured" onClick={onClose} className="hover:text-purple-600 block py-1">
                                        Featured Case Studies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Guides & Tutorials */}
                    <div className="col-span-3 space-y-6">
                        {/* Guides Group */}
                        <div>
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                                <FileText className="w-4 h-4 text-indigo-600" />
                                <Link href="/resources/guides" onClick={onClose} className="hover:text-indigo-600">
                                    Developer & Buyer Guides
                                </Link>
                            </div>
                            <ul className="space-y-1 text-xs text-slate-600">
                                <li>
                                    <Link href="/resources/guides" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        All Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/web-development" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        Web Development Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/mobile-app-development" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        Mobile App Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/software-development" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        Software Development Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/seo" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        SEO & Performance Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/ecommerce" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        eCommerce Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/guides/it-support" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                        IT Support Guides
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Tutorials & FAQs */}
                    <div className="col-span-3 space-y-6">
                        {/* Tutorials Group */}
                        <div>
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                                <GraduationCap className="w-4 h-4 text-emerald-600" />
                                <Link href="/resources/tutorials" onClick={onClose} className="hover:text-emerald-600">
                                    Code Tutorials
                                </Link>
                            </div>
                            <ul className="space-y-1 text-xs text-slate-600">
                                <li>
                                    <Link href="/resources/tutorials" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        All Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/tutorials/nextjs" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        Next.js Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/tutorials/react" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        React Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/tutorials/nodejs" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        Node.js Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/tutorials/flutter" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        Flutter Tutorials
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resources/tutorials/mongodb" onClick={onClose} className="hover:text-emerald-600 block py-0.5">
                                        MongoDB Tutorials
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* FAQs Group */}
                        <div className="pt-2 border-t border-slate-100">
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                <HelpCircle className="w-4 h-4 text-amber-600" />
                                <Link href="/resources/faqs" onClick={onClose} className="hover:text-amber-600">
                                    Knowledge FAQs
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                                <Link href="/resources/faqs/general" onClick={onClose} className="hover:text-amber-600">General</Link>
                                <Link href="/resources/faqs/services" onClick={onClose} className="hover:text-amber-600">Services</Link>
                                <Link href="/resources/faqs/technology" onClick={onClose} className="hover:text-amber-600">Technology</Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Whitepapers, Webinars, Glossary & Search */}
                    <div className="col-span-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-4">
                        <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                                SPECIAL CONTENT
                            </span>
                            <ul className="space-y-2 text-xs">
                                <li>
                                    <Link
                                        href="/resources/whitepapers"
                                        onClick={onClose}
                                        className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#1769FF]"
                                    >
                                        <Download className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Whitepapers & eBooks</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/resources/webinars"
                                        onClick={onClose}
                                        className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#1769FF]"
                                    >
                                        <Video className="w-3.5 h-3.5 text-[#1769FF]" />
                                        <span>Webinars & Recordings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/resources/glossary"
                                        onClick={onClose}
                                        className="flex items-center gap-2 font-semibold text-slate-800 hover:text-[#1769FF]"
                                    >
                                        <Layers className="w-3.5 h-3.5 text-indigo-600" />
                                        <span>Tech Terms Glossary</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Search Resources Bar CTA */}
                        <div className="pt-3 border-t border-slate-200">
                            <Link
                                href="/resources/search"
                                onClick={onClose}
                                className="flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:border-blue-400 hover:text-[#1769FF] transition-all shadow-sm"
                            >
                                <span className="flex items-center gap-1.5">
                                    <Search className="w-3.5 h-3.5 text-[#1769FF]" />
                                    Search All Resources
                                </span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        {/* View All Resources Hub */}
                        <div className="pt-2">
                            <Link
                                href="/resources"
                                onClick={onClose}
                                className="w-full py-2.5 bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                            >
                                <span>Explore Resources Hub</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
