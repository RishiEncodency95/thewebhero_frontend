'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Home, LayoutGrid, Menu, Send } from 'lucide-react';

const TABS = [
    { label: 'Home', href: '/', Icon: Home },
    { label: 'Services', href: '/services', Icon: LayoutGrid },
    { label: 'Work', href: '/portfolio', Icon: Briefcase },
] as const;

/** App-style bottom navigation for phones and tablets (hidden from `lg` up). */
export default function MobileTabBar({ menuOpen, onMenu }: { menuOpen: boolean; onMenu: () => void }) {
    const pathname = usePathname();
    const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

    const tab = (active: boolean) =>
        `flex flex-1 flex-col items-center justify-center gap-0.5 pt-1.5 text-[10.5px] font-semibold transition-colors ${
            active ? 'text-purple-700' : 'text-slate-500 active:text-slate-900'
        }`;
    const icon = (active: boolean) => `h-[22px] w-[22px] transition-transform ${active ? 'scale-110 stroke-[2.4]' : 'stroke-2'}`;

    return (
        <nav
            aria-label="Primary"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl lg:hidden"
        >
            <div className="mx-auto flex h-16 max-w-xl items-stretch px-2">
                {TABS.slice(0, 2).map(({ label, href, Icon }) => {
                    const active = isActive(href) && !menuOpen;
                    return (
                        <Link key={href} href={href} className={tab(active)} aria-current={active ? 'page' : undefined}>
                            <Icon className={icon(active)} />
                            {label}
                            <span className={`mt-0.5 h-1 w-1 rounded-full ${active ? 'bg-purple-600' : 'bg-transparent'}`} />
                        </Link>
                    );
                })}

                {/* Raised centre action */}
                <Link href="/get-a-quote" className="relative flex flex-1 flex-col items-center justify-end pb-2 text-[10.5px] font-bold text-slate-800">
                    <span className="absolute -top-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white shadow-[0_10px_22px_-6px_rgba(124,58,237,0.7)] ring-4 ring-white">
                        <Send className="h-6 w-6 -translate-x-px translate-y-px" />
                    </span>
                    Get Quote
                </Link>

                {TABS.slice(2).map(({ label, href, Icon }) => {
                    const active = isActive(href) && !menuOpen;
                    return (
                        <Link key={href} href={href} className={tab(active)} aria-current={active ? 'page' : undefined}>
                            <Icon className={icon(active)} />
                            {label}
                            <span className={`mt-0.5 h-1 w-1 rounded-full ${active ? 'bg-purple-600' : 'bg-transparent'}`} />
                        </Link>
                    );
                })}

                <button type="button" onClick={onMenu} className={tab(menuOpen)} aria-expanded={menuOpen} aria-label="Open menu">
                    <Menu className={icon(menuOpen)} />
                    Menu
                    <span className={`mt-0.5 h-1 w-1 rounded-full ${menuOpen ? 'bg-purple-600' : 'bg-transparent'}`} />
                </button>
            </div>
        </nav>
    );
}
