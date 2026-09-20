'use client';

import React from 'react';
import Link from 'next/link';
import {
    Building2,
    Users,
    ShieldCheck,
    Briefcase,
    Mail,
    ArrowRight,
    Award,
    HeartHandshake,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

interface CompanyMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CompanyMegaMenu({ isOpen, onClose }: CompanyMegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseLeave={onClose}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-6">
                    {/* Column 1: About & Approach */}
                    <div className="col-span-3 space-y-4">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                            <Building2 className="w-4 h-4 text-[#1769FF]" />
                            <Link href="/company" onClick={onClose} className="hover:text-[#1769FF]">
                                About TheWebHero
                            </Link>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                            <li>
                                <Link href="/company" onClick={onClose} className="hover:text-[#1769FF] block py-0.5">
                                    Company Hub Overview
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/about" onClick={onClose} className="hover:text-[#1769FF] block py-0.5">
                                    About Us & Mission
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/why-us" onClick={onClose} className="hover:text-[#1769FF] block py-0.5">
                                    Why Choose Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/process" onClick={onClose} className="hover:text-[#1769FF] block py-0.5">
                                    Our 8-Step Process
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: People & Culture */}
                    <div className="col-span-3 space-y-4">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                            <Users className="w-4 h-4 text-purple-600" />
                            <span>People & Culture</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                            <li>
                                <Link href="/company/team" onClick={onClose} className="hover:text-purple-600 block py-0.5">
                                    Our Engineering Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/culture" onClick={onClose} className="hover:text-purple-600 block py-0.5">
                                    Culture & Principles
                                </Link>
                            </li>
                        </ul>

                        <div className="pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-2">
                                <Briefcase className="w-4 h-4 text-emerald-600" />
                                <Link href="/company/careers" onClick={onClose} className="hover:text-emerald-600">
                                    Careers
                                </Link>
                            </div>
                            <Link href="/company/careers" onClick={onClose} className="text-xs text-slate-600 hover:text-emerald-600 block">
                                Open Engineering Positions →
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Trust & Recognition */}
                    <div className="col-span-3 space-y-4">
                        <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                            <ShieldCheck className="w-4 h-4 text-indigo-600" />
                            <span>Trust & Verification</span>
                        </div>
                        <ul className="space-y-2 text-xs text-slate-600">
                            <li>
                                <Link href="/company/testimonials" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                    Client Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/partners" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                    Technology Partners
                                </Link>
                            </li>
                            <li>
                                <Link href="/company/awards" onClick={onClose} className="hover:text-indigo-600 block py-0.5">
                                    Awards & Recognition
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Actions & Contact */}
                    <div className="col-span-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            GET IN TOUCH
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Have a web application, mobile app, or custom software project to discuss?
                        </p>

                        <div className="pt-2 space-y-2">
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="w-full py-2.5 bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Contact Us</span>
                            </Link>
                            <Link
                                href="/company"
                                onClick={onClose}
                                className="w-full py-2 bg-white border border-slate-200 text-slate-700 hover:text-[#1769FF] font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                            >
                                <span>View Company Hub</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
