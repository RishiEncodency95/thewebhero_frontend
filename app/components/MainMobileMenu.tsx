'use client';

import React from 'react';
import Link from 'next/link';
import { X, ChevronRight, ArrowRight } from 'lucide-react';

export type MenuKey =
    | 'services'
    | 'solutions'
    | 'technologies'
    | 'industries'
    | 'resources'
    | 'company';

type NavItem = { name: string; href: string; key?: MenuKey };

interface MainMobileMenuProps {
    isOpen: boolean;
    items: NavItem[];
    onClose: () => void;
    onOpenSection: (key: MenuKey) => void;
}

/**
 * Root mobile navigation drawer.
 *
 * Pehle hamburger button seedha CompanyMobileMenu kholta tha, isliye mobile
 * par Services / Solutions / Technologies / Industries / Portfolio / Resources
 * tak pahunchne ka koi raasta hi nahi tha. Ab yeh drawer saare top-level
 * sections dikhata hai aur dropdown wale items apne existing sub-drawer me
 * le jaate hain.
 */
export default function MainMobileMenu({
    isOpen,
    items,
    onClose,
    onOpenSection,
}: MainMobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm xl:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
        >
            <div
                className="flex h-full w-full max-w-sm flex-col bg-white shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 p-5 text-white">
                    <h2 className="text-base font-bold">Menu</h2>
                    <button
                        onClick={onClose}
                        aria-label="Close navigation menu"
                        className="rounded-lg p-1.5 text-slate-400 transition-colors hover:text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                    <ul className="space-y-1">
                        {items.map((item) =>
                            item.key ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => onOpenSection(item.key as MenuKey)}
                                        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left text-[15px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-blue-600"
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className="h-4 w-4 text-slate-400" />
                                    </button>
                                </li>
                            ) : (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        className="block rounded-xl px-4 py-3.5 text-[15px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-blue-600"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </nav>

                {/* Footer CTA */}
                <div className="space-y-3 border-t border-slate-200 p-4">
                    <Link
                        href="/get-a-quote"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg"
                    >
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="flex items-center justify-center gap-4 text-xs font-medium text-slate-500">
                        <a href="tel:+919876543210" className="hover:text-blue-600">
                            Call us
                        </a>
                        <span aria-hidden="true">•</span>
                        <a href="mailto:hello@thewebhero.in" className="hover:text-blue-600">
                            Email us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
