'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, GraduationCap, Download, Search } from 'lucide-react';

import MegaMenuShell from '../nav/MegaMenuShell';
import { MenuColumn, MenuFeature, primaryBtn, type MenuLink } from '../nav/MegaMenuParts';

// Only routes that exist. Case studies live under /portfolio.
const READ: MenuLink[] = [
    { label: 'Blog', href: '/resources/blog', description: 'Articles on web, mobile & AI.' },
    { label: 'Technology Insights', href: '/resources/technology-insights', description: 'Trends, stacks and comparisons.' },
    { label: 'Industry Insights', href: '/resources/industry-insights', description: 'How tech is reshaping sectors.' },
    { label: 'Company Updates', href: '/resources/company-updates', description: 'News from TheWebHero.' },
];

const LEARN: MenuLink[] = [
    { label: 'Guides', href: '/resources/guides', description: 'Step-by-step buyer & dev guides.' },
    { label: 'Tutorials', href: '/resources/tutorials', description: 'Hands-on code walkthroughs.' },
    { label: 'FAQs', href: '/resources/faqs', description: 'Quick answers to common questions.' },
    { label: 'Tech Glossary', href: '/resources/glossary', description: 'Jargon, explained simply.' },
];

const EXPLORE: MenuLink[] = [
    { label: 'Whitepapers & eBooks', href: '/resources/whitepapers', description: 'In-depth downloadable reports.' },
    { label: 'Webinars', href: '/resources/webinars', description: 'Talks and session recordings.' },
    { label: 'Case Studies', href: '/portfolio', description: 'Real projects we have shipped.' },
];

export default function ResourcesMegaMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;

    return (
        <MegaMenuShell onClose={onClose}>
            <div className="grid grid-cols-12 gap-6 p-6">
                <div className="col-span-3"><MenuColumn title="Read" Icon={BookOpen} tone="pink" links={READ} onClose={onClose} /></div>
                <div className="col-span-3"><MenuColumn title="Learn" Icon={GraduationCap} tone="purple" links={LEARN} onClose={onClose} /></div>
                <div className="col-span-3"><MenuColumn title="Explore" Icon={Download} tone="blue" links={EXPLORE} onClose={onClose} /></div>

                <div className="col-span-3">
                    <MenuFeature
                        eyebrow="Knowledge Hub"
                        title="Learn, build and grow with us"
                        text="Guides, tutorials and insights from our engineering team."
                    >
                        <Link
                            href="/resources/search"
                            onClick={onClose}
                            className="flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-[13px] text-slate-500 ring-1 ring-slate-200 transition-colors hover:text-purple-700 hover:ring-purple-200"
                        >
                            <Search className="h-4 w-4 text-purple-500" aria-hidden="true" />
                            Search all resources…
                        </Link>
                        <Link href="/resources" onClick={onClose} className={primaryBtn}>
                            Explore Resources Hub
                            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                    </MenuFeature>
                </div>
            </div>
        </MegaMenuShell>
    );
}
