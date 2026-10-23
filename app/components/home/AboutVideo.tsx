'use client';

import React, { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

/** The clickable video card (rendered on the server as children) plus its popup player. */
export default function AboutVideo({ videoUrl, className, children }: { videoUrl?: string; className: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <>
            <div onClick={() => videoUrl && setOpen(true)} className={className}>
                {children}
            </div>

            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="TheWebHero video"
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
                >
                    <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-2xl">
                        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-4 py-3">
                            <span className="flex items-center gap-2 text-sm font-semibold text-white">
                                <Play className="h-4 w-4 fill-blue-500 text-blue-500" /> Watch Our Story — TheWebHero
                            </span>
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
                                aria-label="Close video"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="relative aspect-video w-full bg-black">
                            <video className="h-full w-full object-cover" autoPlay controls playsInline src={videoUrl}>
                                Your browser does not support video playback.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
