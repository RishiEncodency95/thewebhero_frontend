import React from 'react';
import { ArrowRight } from 'lucide-react';
import ExpandToggle from './ExpandToggle';

/** How many cards show before "View All Projects" is pressed (see .twh-limit-6). */
const INITIAL_COUNT = 6;

/**
 * Header + project grid with a show-all / show-less toggle. Everything is
 * server-rendered; only the toggle button ships as JS.
 */
export default function HomeProjectsGrid({
    intro,
    cards,
    viewAllLabel = 'View All Projects',
}: {
    intro: React.ReactNode;
    cards: React.ReactNode[];
    viewAllLabel?: string;
}) {
    const canToggle = cards.length > INITIAL_COUNT;

    return (
        <div>
            <div className="relative mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                {intro}

                {canToggle && (
                    <ExpandToggle
                        target="home-projects-grid"
                        moreLabel={viewAllLabel}
                        lessLabel="Show Less"
                        moreIcon={<ArrowRight className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />}
                        lessIcon={<ArrowRight className="h-4 w-4 -rotate-90 transition-transform" aria-hidden="true" />}
                        className="group mt-2 inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all md:mt-0 hover:shadow-lg hover:shadow-blue-500/30"
                    />
                )}
            </div>

            <div id="home-projects-grid" className="twh-rail twh-limit-6 scroll-mt-24 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {cards}
            </div>
        </div>
    );
}
