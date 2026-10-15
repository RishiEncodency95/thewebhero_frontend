import React from 'react';

const CODE_LINES = [
    ['w-10 bg-pink-400', 'w-16 bg-sky-300', 'w-8 bg-slate-500'],
    ['ml-3 w-14 bg-purple-400', 'w-20 bg-emerald-300'],
    ['ml-6 w-8 bg-amber-300', 'w-24 bg-slate-500'],
    ['ml-6 w-16 bg-sky-300', 'w-10 bg-pink-400', 'w-6 bg-slate-500'],
    ['ml-3 w-12 bg-emerald-300'],
    ['ml-6 w-20 bg-purple-400', 'w-12 bg-amber-300'],
    ['ml-9 w-14 bg-slate-500', 'w-16 bg-sky-300'],
    ['ml-6 w-10 bg-pink-400'],
    ['ml-3 w-24 bg-slate-500', 'w-8 bg-emerald-300'],
    ['w-6 bg-purple-400'],
];

/** Decorative laptop-with-code illustration for the blog header. */
export default function BlogHeroArt() {
    return (
        <div className="relative h-full w-full" aria-hidden="true">
            {/* Soft blob backdrop */}
            <div className="absolute right-0 top-1/2 h-[260px] w-[520px] -translate-y-1/2 rounded-[45%_55%_60%_40%/55%_45%_55%_45%] bg-gradient-to-br from-blue-200/70 via-indigo-200/60 to-purple-200/60 blur-[2px]" />
            <div className="absolute right-40 top-4 h-40 w-40 rounded-full bg-blue-400/30 blur-3xl" />

            {/* Laptop */}
            <div className="absolute bottom-10 right-10 w-[320px] -rotate-[4deg] motion-safe:animate-[twhFloat_7s_ease-in-out_infinite]">
                <div className="rounded-t-xl border-[6px] border-slate-800 bg-[#0d1117] p-3 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.6)]">
                    <div className="mb-2 flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="space-y-1.5">
                        {CODE_LINES.map((line, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <span className="w-3 text-right font-mono text-[7px] text-slate-600">{i + 1}</span>
                                {line.map((c, j) => (
                                    <span key={j} className={`h-1.5 rounded-full opacity-80 ${c}`} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-lg" />
            </div>

            {/* Floating chips */}
            <div className="absolute bottom-2 left-0 flex items-center gap-2.5 rounded-xl border border-white bg-white/95 py-2 pl-2 pr-4 shadow-[0_12px_30px_-8px_rgba(30,64,175,0.35)] motion-safe:animate-[twhFloat_6s_ease-in-out_infinite]">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-xs font-bold text-white">
                    {'</>'}
                </span>
                <span>
                    <span className="block text-[10px] font-semibold uppercase tracking-wider text-blue-600">New article</span>
                    <span className="block text-xs font-semibold text-slate-800">Engineering insights</span>
                </span>
            </div>
            <div className="absolute right-2 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-base shadow-lg shadow-blue-500/20 motion-safe:animate-[twhFloat_8s_ease-in-out_infinite]">
                💡
            </div>
        </div>
    );
}
