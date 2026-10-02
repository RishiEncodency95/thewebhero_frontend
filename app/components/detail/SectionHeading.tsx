import React from 'react';

/** Small gradient-bordered pill used above every section heading. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-px">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-purple-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-pink-500 to-blue-500" />
                {children}
            </span>
        </span>
    );
}

/** Text with the brand gradient, for the highlighted part of a heading. */
export function Accent({ children }: { children: React.ReactNode }) {
    return (
        <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {children}
        </span>
    );
}

/** Splits "Web Application Development" into ["Web Application", "Development"]
 *  so the last word can carry the accent. */
export function splitTitle(title: string): [string, string] {
    const words = title.trim().split(/\s+/);
    if (words.length === 1) return ['', words[0]];
    return [words.slice(0, -1).join(' '), words[words.length - 1]];
}

export function SectionHeading({
    eyebrow,
    lead,
    accent,
    tail,
    text,
    center = false,
}: {
    eyebrow: string;
    lead?: string;
    accent: string;
    tail?: string;
    text?: string;
    center?: boolean;
}) {
    return (
        <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="mt-3 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-3xl">
                {lead && <>{lead} </>}
                <Accent>{accent}</Accent>
                {tail && <> {tail}</>}
            </h2>
            {text && <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{text}</p>}
        </div>
    );
}
