'use client';

import { useEffect, useState } from 'react';

/** Thin gradient bar under the navbar showing how far the article has been read. */
export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
        };
        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-16 z-40 h-[3px] bg-transparent" aria-hidden="true">
            <div
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-[width] duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
