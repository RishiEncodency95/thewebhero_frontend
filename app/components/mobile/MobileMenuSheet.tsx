'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight, BookOpen, Briefcase, Building2, ChevronRight, Cpu, Factory, HeartHandshake, Lightbulb,
    LayoutGrid, Mail, Phone, Route, Sparkles, Users, X,
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { track } from '../../lib/track';

export type MobileSection = 'services' | 'solutions' | 'technologies' | 'industries';

interface MobileMenuSheetProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenSection: (section: MobileSection) => void;
    contact: { tel?: string; whatsapp?: string; email?: string };
}

const SECTIONS: { key: MobileSection; label: string; hint: string; Icon: React.ElementType; tone: string }[] = [
    { key: 'services', label: 'Services', hint: 'Web, mobile, AI & IT', Icon: LayoutGrid, tone: 'from-violet-500 to-indigo-500' },
    { key: 'solutions', label: 'Solutions', hint: 'CRM, ERP, SaaS & more', Icon: Lightbulb, tone: 'from-pink-500 to-rose-500' },
    { key: 'technologies', label: 'Technologies', hint: 'React, Node, Flutter…', Icon: Cpu, tone: 'from-sky-500 to-blue-600' },
    { key: 'industries', label: 'Industries', hint: 'Healthcare, retail…', Icon: Factory, tone: 'from-emerald-500 to-teal-600' },
];

const PAGES = [
    { href: '/portfolio', label: 'Portfolio', Icon: Briefcase },
    { href: '/blog', label: 'Blog', Icon: BookOpen },
    { href: '/company/about', label: 'About us', Icon: Building2 },
    { href: '/company/why-us', label: 'Why choose us', Icon: Sparkles },
    { href: '/company/process', label: 'Our process', Icon: Route },
    { href: '/company/team', label: 'Our team', Icon: Users },
    { href: '/company/culture', label: 'Culture', Icon: HeartHandshake },
    { href: '/company/careers', label: 'Careers', Icon: Briefcase },
];

/** Full-height bottom sheet with every section of the site, styled like an app menu. */
export default function MobileMenuSheet({ isOpen, onClose, onOpenSection, contact }: MobileMenuSheetProps) {
    useEffect(() => {
        if (!isOpen) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const quick = [
        contact.tel && { href: contact.tel, label: 'Call', Icon: Phone, className: 'bg-blue-50 text-blue-700', method: 'phone' },
        contact.whatsapp && { href: contact.whatsapp, label: 'WhatsApp', Icon: FaWhatsapp, className: 'bg-emerald-50 text-emerald-700', method: 'whatsapp' },
        contact.email && { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail, className: 'bg-pink-50 text-pink-700', method: 'email' },
    ].filter(Boolean) as { href: string; label: string; Icon: React.ElementType; className: string; method: string }[];

    return (
        <div className="fixed inset-0 z-[60] xl:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
            <button type="button" aria-label="Close menu" onClick={onClose} className="twh-fade-in absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />

            <div className="twh-sheet-up absolute inset-x-0 bottom-0 flex max-h-[92dvh] flex-col rounded-t-[28px] bg-[#f6f7fb] shadow-[0_-20px_60px_-20px_rgba(15,23,42,0.45)] sm:inset-x-auto sm:right-4 sm:bottom-4 sm:w-[420px] sm:rounded-[28px]">
                {/* Grab handle + header */}
                <div className="shrink-0 px-5 pt-2.5">
                    <div className="mx-auto h-1.5 w-10 rounded-full bg-slate-300 sm:hidden" />
                    <div className="mt-3 flex items-center justify-between">
                        <Link href="/" onClick={onClose} className="flex items-center">
                            <Image src="/logo.webp" alt="TheWebHero" width={150} height={50} className="h-10 w-auto object-contain" />
                        </Link>
                        <button type="button" onClick={onClose} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm ring-1 ring-slate-200">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-4">
                    {quick.length > 0 && (
                        <div className="grid grid-cols-3 gap-2.5">
                            {quick.map(({ href, label, Icon, className, method }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={method === 'whatsapp' ? '_blank' : undefined}
                                    rel={method === 'whatsapp' ? 'noopener noreferrer' : undefined}
                                    onClick={() => track('contact_click', { method })}
                                    className={`flex flex-col items-center gap-1.5 rounded-2xl py-3 text-[12.5px] font-semibold ${className}`}
                                >
                                    <Icon className="h-5 w-5" />
                                    {label}
                                </a>
                            ))}
                        </div>
                    )}

                    <p className="mb-2.5 mt-6 px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Explore</p>
                    <div className="grid grid-cols-2 gap-2.5">
                        {SECTIONS.map(({ key, label, hint, Icon, tone }) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => onOpenSection(key)}
                                className="flex flex-col items-start rounded-2xl bg-white p-3.5 text-left shadow-sm ring-1 ring-slate-200/70 transition-transform active:scale-[0.97]"
                            >
                                <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${tone} text-white shadow-sm`}>
                                    <Icon className="h-5 w-5" />
                                </span>
                                <span className="mt-2.5 text-[14.5px] font-bold text-slate-900">{label}</span>
                                <span className="text-[12px] text-slate-500">{hint}</span>
                            </button>
                        ))}
                    </div>

                    <p className="mb-2.5 mt-6 px-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">Company</p>
                    <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/70">
                        {PAGES.map(({ href, label, Icon }) => (
                            <li key={href}>
                                <Link href={href} onClick={onClose} className="flex h-12 items-center gap-3 px-4 text-[14.5px] font-medium text-slate-800 active:bg-slate-50">
                                    <Icon className="h-[18px] w-[18px] text-slate-400" />
                                    <span className="flex-1">{label}</span>
                                    <ChevronRight className="h-4 w-4 text-slate-300" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 grid grid-cols-2 gap-2.5">
                        <Link href="/contact" onClick={onClose} className="flex h-12 items-center justify-center rounded-2xl bg-white text-[14px] font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200/70">
                            Contact us
                        </Link>
                        <Link
                            href="/get-a-quote"
                            onClick={onClose}
                            className="flex h-12 items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-[14px] font-bold text-white shadow-[0_10px_22px_-10px_rgba(124,58,237,0.8)]"
                        >
                            Get a Quote <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
