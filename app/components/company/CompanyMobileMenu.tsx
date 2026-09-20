'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Building2, Users, ShieldCheck, Briefcase, Mail, ArrowRight } from 'lucide-react';

interface CompanyMobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CompanyMobileMenu({ isOpen, onClose }: CompanyMobileMenuProps) {
    const [openAccordion, setOpenAccordion] = useState<string | null>('about');

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
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <h2 className="font-bold text-base">Company Navigation</h2>
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
                    {/* About Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('about')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <Building2 className="w-4 h-4 text-[#1769FF]" />
                                About Us & Process
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'about' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'about' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/company" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Company Overview</Link>
                                <Link href="/company/about" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">About Us & Story</Link>
                                <Link href="/company/why-us" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Why Choose Us</Link>
                                <Link href="/company/process" onClick={onClose} className="block py-1.5 hover:text-[#1769FF]">Our 8-Step Process</Link>
                            </div>
                        )}
                    </div>

                    {/* People Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('people')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-purple-600" />
                                People & Culture
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'people' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'people' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/company/team" onClick={onClose} className="block py-1.5 hover:text-purple-600">Our Team</Link>
                                <Link href="/company/culture" onClick={onClose} className="block py-1.5 hover:text-purple-600">Company Culture</Link>
                                <Link href="/company/careers" onClick={onClose} className="block py-1.5 hover:text-purple-600">Careers & Openings</Link>
                            </div>
                        )}
                    </div>

                    {/* Trust Accordion */}
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => toggleAccordion('trust')}
                            className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-900"
                        >
                            <span className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                                Trust & Recognition
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openAccordion === 'trust' ? 'rotate-180' : ''}`} />
                        </button>
                        {openAccordion === 'trust' && (
                            <div className="p-3 bg-white space-y-2 text-xs font-medium text-slate-700">
                                <Link href="/company/testimonials" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Testimonials</Link>
                                <Link href="/company/partners" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Partners</Link>
                                <Link href="/company/awards" onClick={onClose} className="block py-1.5 hover:text-indigo-600">Awards</Link>
                            </div>
                        )}
                    </div>

                    {/* Direct Contact Link */}
                    <div className="pt-2">
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="block p-3.5 border border-blue-200 bg-blue-50/60 rounded-xl font-bold text-slate-900 text-xs text-center"
                        >
                            Contact & Scoping →
                        </Link>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-4 border-t border-slate-200 space-y-2 bg-slate-50">
                    <Link
                        href="/contact"
                        onClick={onClose}
                        className="w-full py-2.5 bg-[#1769FF] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm"
                    >
                        <Mail className="w-4 h-4" />
                        <span>Contact Us</span>
                    </Link>
                    <Link
                        href="/company"
                        onClick={onClose}
                        className="w-full py-2 text-slate-700 text-xs font-semibold rounded-xl flex items-center justify-center gap-2"
                    >
                        <span>View Company Hub</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
