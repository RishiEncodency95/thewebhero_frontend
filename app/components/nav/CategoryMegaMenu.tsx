'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight, ChevronRight,
    // Category icons, keyed by the `iconName` strings in lib/*.ts
    Activity, Briefcase, Building, Building2, Car, Cloud, CloudLightning, Code, Compass,
    Cpu, Database, Factory, Film, Gamepad2, Globe, GraduationCap, HardHat, HeartPulse,
    Layers, Layout, Monitor, RefreshCw, Rocket, Scale, Server, Shield, ShieldCheck,
    ShoppingCart, Smartphone, Sparkles, Sprout, Store, Trophy, Truck, Users, Utensils,
    Wallet, Wrench, Zap,
} from 'lucide-react';

import MegaMenuShell from './MegaMenuShell';

const ICONS: Record<string, React.ElementType> = {
    Activity, Briefcase, Building, Building2, Car, Cloud, CloudLightning, Code, Compass,
    Cpu, Database, Factory, Film, Gamepad2, Globe, GraduationCap, HardHat, HeartPulse,
    Layers, Layout, Monitor, RefreshCw, Rocket, Scale, Server, Shield, ShieldCheck,
    ShoppingCart, Smartphone, Sparkles, Sprout, Store, Trophy, Truck, Users, Utensils,
    Wallet, Wrench, Zap,
};

export type MegaMenuCategory = {
    slug: string;
    name: string;
    description: string;
    iconName: string;
    items: { slug: string; title: string; description: string }[];
};

type Props = {
    isOpen: boolean;
    onClose: () => void;
    /** Route prefix, e.g. "/services" */
    basePath: string;
    /** Rail heading, e.g. "Service Domains" */
    railLabel: string;
    categories: MegaMenuCategory[];
    /** Footer link to the listing page */
    allLabel: string;
    footerText: string;
};

export default function CategoryMegaMenu({
    isOpen, onClose, basePath, railLabel, categories, allLabel, footerText,
}: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!isOpen) return null;

    const active = categories[activeIndex] ?? categories[0];
    const ActiveIcon = ICONS[active.iconName] ?? Layers;

    return (
        <MegaMenuShell onClose={onClose}>
            <div className="grid grid-cols-12">
                {/* ---------- Left rail: categories ---------- */}
                <div className="col-span-4 border-r border-slate-100 bg-slate-50/70 p-4 xl:col-span-3">
                    <div className="mb-2 flex items-center justify-between px-2">
                        <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-500">
                            {railLabel}
                        </span>
                        <span className="rounded-full bg-white px-2 py-0.5 text-[12px] font-semibold text-purple-600 ring-1 ring-purple-100">
                            {categories.length}
                        </span>
                    </div>

                    <ul className="custom-scrollbar max-h-[400px] space-y-0.5 overflow-y-auto pr-1">
                        {categories.map((cat, idx) => {
                            const isActive = idx === activeIndex;
                            const Icon = ICONS[cat.iconName] ?? Layers;
                            return (
                                <li key={cat.slug}>
                                    <Link
                                        href={`${basePath}/${cat.slug}`}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onFocus={() => setActiveIndex(idx)}
                                        onClick={onClose}
                                        className={`group relative flex items-center gap-3 rounded-xl px-2.5 py-1.5 text-[14px] transition-all ${isActive
                                            ? 'bg-white font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70'
                                            : 'font-medium text-slate-600 hover:bg-white/70 hover:text-slate-900'
                                            }`}
                                    >
                                        {isActive && (
                                            <span aria-hidden="true" className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500" />
                                        )}
                                        <span
                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${isActive
                                                ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/25'
                                                : 'bg-white text-slate-500 ring-1 ring-slate-200 group-hover:text-purple-600'
                                                }`}
                                        >
                                            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                                        </span>
                                        <span className="min-w-0 flex-1 truncate">{cat.name}</span>
                                        <ChevronRight
                                            className={`h-4 w-4 shrink-0 transition-all ${isActive ? 'translate-x-0.5 text-purple-500' : 'text-slate-300 group-hover:text-slate-400'}`}
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* ---------- Right: active category ---------- */}
                <div className="col-span-8 flex flex-col p-6 xl:col-span-9">
                    <div className="flex items-start justify-between gap-6 border-b border-slate-100 pb-4">
                        <div className="flex min-w-0 items-start gap-3.5">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25">
                                <ActiveIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                            <div className="min-w-0">
                                <p className="text-[18px] font-bold leading-tight text-slate-900">
                                    <Link href={`${basePath}/${active.slug}`} onClick={onClose} className="hover:text-purple-700">
                                        {active.name}
                                    </Link>
                                </p>
                                <p className="mt-1 line-clamp-1 text-[13px] text-slate-500">{active.description}</p>
                            </div>
                        </div>

                        <Link
                            href={`${basePath}/${active.slug}`}
                            onClick={onClose}
                            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50/60 px-4 py-2 text-[13px] font-semibold text-purple-700 transition-colors hover:border-purple-300 hover:bg-purple-50"
                        >
                            Overview
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                    </div>

                    {/* Items. Scrolls inside a fixed height so long categories
                        never push the menu past the fold. */}
                    <ul className="custom-scrollbar mt-3 grid max-h-[300px] grid-cols-2 content-start gap-1 overflow-y-auto pr-1 xl:grid-cols-3">
                        {active.items.map((item) => (
                            <li key={item.slug}>
                                <Link
                                    href={`${basePath}/${item.slug}`}
                                    onClick={onClose}
                                    className="group flex items-start gap-2.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-gradient-to-r hover:from-pink-50 hover:via-purple-50 hover:to-blue-50"
                                >
                                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-purple-500" />
                                    <span className="min-w-0">
                                        <span className="flex items-center gap-1 text-[14px] font-semibold text-slate-800 group-hover:text-purple-700">
                                            <span className="truncate">{item.title}</span>
                                            <ArrowRight className="h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true" />
                                        </span>
                                        <span className="mt-0.5 line-clamp-1 text-[12px] text-slate-500">{item.description}</span>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Footer strip */}
                    <div className="mt-auto pt-4">
                        <div className="flex items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 px-4 py-3 ring-1 ring-purple-100/70">
                            <p className="text-[13px] font-medium text-slate-600">{footerText}</p>
                            <div className="flex shrink-0 items-center gap-2">
                                <Link
                                    href={basePath}
                                    onClick={onClose}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[13px] font-semibold text-slate-700 ring-1 ring-slate-200 transition-colors hover:text-purple-700 hover:ring-purple-200"
                                >
                                    {allLabel}
                                </Link>
                                <Link
                                    href="/get-a-quote"
                                    onClick={onClose}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-4 py-1.5 text-[13px] font-semibold text-white shadow-sm transition-all hover:shadow-lg hover:shadow-blue-500/30"
                                >
                                    Get a Quote
                                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MegaMenuShell>
    );
}
