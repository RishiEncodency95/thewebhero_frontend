'use client';

import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

/** How many cards show before "View All Projects" is pressed. */
const INITIAL_COUNT = 6;

/**
 * Header + project grid with a show-all / show-less toggle. The cards are
 * rendered on the server and passed in, so only the toggle ships as JS.
 */
export default function HomeProjectsGrid({
    intro,
    cards,
}: {
    intro: React.ReactNode;
    cards: React.ReactNode[];
}) {
    const [expanded, setExpanded] = useState(false);
    const topRef = useRef<HTMLDivElement>(null);
    const canToggle = cards.length > INITIAL_COUNT;
    const visible = expanded ? cards : cards.slice(0, INITIAL_COUNT);

    const toggle = () => {
        // When collapsing, bring the section back into view so the user is
        // not left staring at whatever sat below the removed cards.
        if (expanded) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setExpanded((v) => !v);
    };

    return (
        <div ref={topRef} className="scroll-mt-24">
            <div className="relative mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                {intro}

                {canToggle && (
                    <button
                        type="button"
                        onClick={toggle}
                        aria-expanded={expanded}
                        aria-controls="home-projects-grid"
                        className="group mt-2 inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all md:mt-0 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <span>{expanded ? 'Show Less' : 'View All Projects'}</span>
                        <ArrowRight
                            className={`h-4 w-4 transition-transform ${expanded ? '-rotate-90' : 'rotate-90 group-hover:translate-y-0.5'}`}
                            aria-hidden="true"
                        />
                    </button>
                )}
            </div>

            <div id="home-projects-grid" className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {visible}
            </div>
        </div>
    );
}
