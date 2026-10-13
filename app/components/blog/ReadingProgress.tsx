'use client';

import React, { useEffect, useState } from 'react';

/** Thin bar under the sticky navbar showing how far through the article the reader is. */
export default function ReadingProgress({ targetId }: { targetId: string }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const el = document.getElementById(targetId);
            if (!el) return;
            const { top, height } = el.getBoundingClientRect();
            const total = height - window.innerHeight;
            const pct = total > 0 ? (-top / total) * 100 : 100;
            setProgress(Math.min(100, Math.max(0, pct)));
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [targetId]);

    return (
        <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
            <div
                className="h-full origin-left bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 transition-[width] duration-100"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
