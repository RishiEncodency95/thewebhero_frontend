'use client';

import React, { useEffect, useState } from 'react';
import type { TableOfContentsItem } from '../../types/resource';

/** Sticky "On this page" list that highlights the section currently in view. */
export default function BlogToc({ items }: { items?: TableOfContentsItem[] }) {
    const [active, setActive] = useState(items?.[0]?.id ?? '');

    useEffect(() => {
        if (!items?.length) return;
        const headings = items
            .map((i) => document.getElementById(i.id))
            .filter((el): el is HTMLElement => el !== null);
        if (!headings.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter((e) => e.isIntersecting);
                if (visible.length) {
                    visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                    setActive(visible[0].target.id);
                }
            },
            // Trigger when a heading crosses the upper part of the viewport.
            { rootMargin: '-96px 0px -65% 0px' }
        );
        headings.forEach((h) => observer.observe(h));
        return () => observer.disconnect();
    }, [items]);

    if (!items?.length) return null;

    return (
        <nav aria-label="Table of contents">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">On this page</p>
            <ul className="space-y-0.5 border-l border-slate-200">
                {items.map((item) => {
                    const isActive = item.id === active;
                    return (
                        <li key={item.id}>
                            <a
                                href={`#${item.id}`}
                                onClick={() => setActive(item.id)}
                                aria-current={isActive ? 'location' : undefined}
                                style={{ paddingLeft: `${12 + (item.level - 2) * 12}px` }}
                                className={`-ml-px block border-l-2 py-1 pr-2 text-[13px] leading-snug transition-colors ${
                                    isActive
                                        ? 'border-purple-600 font-semibold text-purple-700'
                                        : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-900'
                                }`}
                            >
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
