'use client';

import React from 'react';

/**
 * Shared frame for every desktop mega menu: a dimmed backdrop over the page
 * and a floating card aligned to the header's gutters, topped with the brand
 * gradient line. Moving the pointer off the card (onto the backdrop) closes it.
 */
export default function MegaMenuShell({
    onClose,
    children,
}: {
    onClose: () => void;
    children: React.ReactNode;
}) {
    return (
        <>
            <div
                aria-hidden="true"
                onClick={onClose}
                className="absolute left-0 top-full h-screen w-full bg-slate-900/25 backdrop-blur-[2px]"
            />

            <div
                onMouseLeave={onClose}
                className="absolute left-0 top-full z-50 w-full px-4 pt-2 sm:px-4 lg:px-10 motion-safe:animate-[twhMenuIn_180ms_ease-out]"
            >
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_28px_70px_-24px_rgba(30,27,75,0.45)]">
                    <div className="h-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
                    {children}
                </div>
            </div>
        </>
    );
}
