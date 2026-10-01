'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type MenuLink = { label: string; href: string; description?: string };

/** Icon tile tint per column, so each group reads at a glance. */
const TONES = {
    pink: 'bg-pink-50 text-pink-600 ring-pink-100',
    purple: 'bg-purple-50 text-purple-600 ring-purple-100',
    blue: 'bg-blue-50 text-blue-600 ring-blue-100',
    emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
} as const;

export function MenuColumn({
    title,
    Icon,
    tone,
    links,
    onClose,
}: {
    title: string;
    Icon: React.ElementType;
    tone: keyof typeof TONES;
    links: MenuLink[];
    onClose: () => void;
}) {
    return (
        <div>
            <div className="mb-2 flex items-center gap-2.5 px-2.5">
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ring-1 ${TONES[tone]}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500">{title}</span>
            </div>

            <ul className="space-y-0.5">
                {links.map((link) => (
                    <li key={link.href + link.label}>
                        <Link
                            href={link.href}
                            onClick={onClose}
                            className="group block rounded-xl px-2.5 py-2 transition-colors hover:bg-gradient-to-r hover:from-pink-50 hover:via-purple-50 hover:to-blue-50"
                        >
                            <span className="flex items-center gap-1 text-[14px] font-semibold text-slate-800 group-hover:text-purple-700">
                                {link.label}
                                <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                            </span>
                            {link.description && (
                                <span className="mt-0.5 block text-[12px] leading-snug text-slate-500">{link.description}</span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/** Right-hand highlight panel shared by the Resources and Company menus. */
export function MenuFeature({
    eyebrow,
    title,
    text,
    children,
}: {
    eyebrow: string;
    title: string;
    text: string;
    children: React.ReactNode;
}) {
    return (
        <div className="relative isolate flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-5 ring-1 ring-purple-100/80">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-300/30 blur-2xl" />
            <div className="relative flex h-full flex-col">
                <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-purple-600">{eyebrow}</span>
                <p className="mt-1.5 text-[17px] font-bold leading-snug text-slate-900">{title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{text}</p>
                <div className="mt-auto space-y-2 pt-4">{children}</div>
            </div>
        </div>
    );
}

export const primaryBtn =
    'flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:shadow-lg hover:shadow-blue-500/30';
export const secondaryBtn =
    'flex w-full items-center justify-center gap-1.5 rounded-xl bg-white py-2.5 text-[13px] font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-purple-700 hover:ring-purple-200';
