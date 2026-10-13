import React from 'react';
import { Code2, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';

/**
 * Illustrated cover for a blog post. The `coverImage` paths in the data file
 * point at files that don't exist, so posts get a drawn tech scene picked by
 * their topics instead.
 */
type Scene = 'web' | 'mobile' | 'security' | 'default';

const THEMES: { match: string[]; scene: Scene; gradient: string; Icon: React.ElementType }[] = [
    { match: ['Security'], scene: 'security', gradient: 'from-cyan-500 via-blue-700 to-slate-950', Icon: ShieldCheck },
    { match: ['Flutter', 'Mobile Apps'], scene: 'mobile', gradient: 'from-sky-400 via-blue-600 to-indigo-950', Icon: Smartphone },
    { match: ['Next.js', 'React', 'Web Development'], scene: 'web', gradient: 'from-blue-500 via-indigo-600 to-slate-950', Icon: Code2 },
];
const DEFAULT_THEME = { scene: 'default' as Scene, gradient: 'from-violet-500 via-indigo-700 to-slate-950', Icon: Sparkles };

export function getBlogTheme(post: Pick<ResourceItem, 'topics'>) {
    const topics = post.topics ?? [];
    return THEMES.find((t) => t.match.some((m) => topics.includes(m))) ?? DEFAULT_THEME;
}

const NAVY_BG =
    'bg-[radial-gradient(ellipse_at_50%_115%,#1e4fd8_0%,#0c1a42_48%,#060c1f_100%)]';
const GRID =
    'absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#60a5fa_1px,transparent_1px),linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_50%_60%,#000_20%,transparent_75%)]';

const CODE = [
    ['w-[30%] bg-pink-400', 'w-[40%] bg-sky-300'],
    ['ml-[8%] w-[45%] bg-violet-400'],
    ['ml-[8%] w-[22%] bg-amber-300', 'w-[30%] bg-slate-500'],
    ['ml-[16%] w-[40%] bg-emerald-300'],
    ['ml-[8%] w-[26%] bg-sky-300', 'w-[20%] bg-pink-400'],
];

function WebScene({ label }: { label: string }) {
    return (
        <>
            <div className="absolute bottom-[-30%] left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-blue-500/40 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 w-[72%] max-w-[420px] -translate-x-1/2 -translate-y-[56%] overflow-hidden rounded-lg border border-white/15 bg-slate-950/85 shadow-[0_24px_50px_-12px_rgba(37,99,235,0.7)] transition-transform duration-500 group-hover:-translate-y-[60%]">
                <div className="flex items-center gap-1 border-b border-white/10 px-2.5 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
                    <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
                </div>
                <div className="flex items-center gap-3 p-3">
                    <div className="flex-1 space-y-1.5">
                        {CODE.map((line, i) => (
                            <div key={i} className="flex gap-1">
                                {line.map((c, j) => (
                                    <span key={j} className={`h-1 rounded-full opacity-80 ${c}`} />
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="flex w-[38%] flex-col items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 py-3 shadow-lg shadow-blue-600/40">
                        <Code2 className="h-5 w-5 text-white" />
                        <span className="mt-1 max-w-full truncate px-1 text-[11px] font-bold tracking-tight text-white">{label}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

function MobileScene({ label }: { label: string }) {
    return (
        <>
            <div className="absolute bottom-[-30%] left-1/2 h-[70%] w-[60%] -translate-x-1/2 rounded-full bg-sky-500/40 blur-3xl" />
            {/* Back phone */}
            <div className="absolute left-[56%] top-[20%] aspect-[9/17] h-[72%] rotate-[10deg] rounded-[14px] border-[3px] border-slate-700 bg-gradient-to-b from-indigo-500/60 to-slate-900 opacity-60" />
            {/* Front phone */}
            <div className="absolute left-[38%] top-[12%] aspect-[9/17] h-[80%] -rotate-[6deg] overflow-hidden rounded-[16px] border-[3px] border-slate-600 bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-800 shadow-[0_24px_50px_-10px_rgba(14,165,233,0.7)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:-rotate-3">
                <span className="absolute left-1/2 top-1 h-1 w-[30%] -translate-x-1/2 rounded-full bg-slate-900/70" />
                <div className="flex h-full flex-col items-center justify-center gap-1">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 ring-1 ring-white/30 backdrop-blur">
                        <Smartphone className="h-4 w-4 text-white" />
                    </span>
                    <span className="text-[10px] font-bold text-white">{label}</span>
                </div>
                <div className="absolute inset-x-2 bottom-2 grid grid-cols-3 gap-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <span key={i} className="h-2 rounded-sm bg-white/25" />
                    ))}
                </div>
            </div>
        </>
    );
}

function GlowScene({ Icon, accent }: { Icon: React.ElementType; accent: 'cyan' | 'violet' }) {
    const ring = accent === 'cyan' ? 'border-cyan-300/25' : 'border-violet-300/25';
    const glow = accent === 'cyan' ? 'bg-cyan-400/35' : 'bg-violet-500/40';
    const line = accent === 'cyan' ? 'via-cyan-300/70' : 'via-violet-300/70';
    const dot = accent === 'cyan' ? 'bg-cyan-300 shadow-[0_0_8px_#67e8f9]' : 'bg-violet-300 shadow-[0_0_8px_#c4b5fd]';
    const icon =
        accent === 'cyan'
            ? 'text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]'
            : 'text-violet-200 drop-shadow-[0_0_18px_rgba(167,139,250,0.9)]';

    return (
        <>
            <div className={`absolute left-1/2 top-1/2 h-[60%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${glow}`} />
            {[38, 58, 78].map((s) => (
                <span
                    key={s}
                    className={`absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full border ${ring}`}
                    style={{ height: `${s}%` }}
                />
            ))}
            {/* Circuit traces */}
            {[
                { top: '34%', side: 'left', w: '30%' },
                { top: '62%', side: 'left', w: '24%' },
                { top: '42%', side: 'right', w: '26%' },
                { top: '68%', side: 'right', w: '32%' },
            ].map((t, i) => (
                <span
                    key={i}
                    className={`absolute h-px bg-gradient-to-r from-transparent ${line} to-transparent`}
                    style={{ top: t.top, [t.side]: '4%', width: t.w }}
                >
                    <span className={`absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full ${dot} ${t.side === 'left' ? 'right-0' : 'left-0'}`} />
                </span>
            ))}
            <Icon
                className={`absolute left-1/2 top-1/2 h-[42%] w-auto -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 group-hover:scale-110 ${icon}`}
                strokeWidth={1.4}
            />
        </>
    );
}

interface BlogCoverProps {
    post: ResourceItem;
    /** `card`: illustrated scene. `hero`: large faded icon + topic chips. `thumb`: small square. */
    size?: 'card' | 'hero' | 'thumb';
    className?: string;
}

export default function BlogCover({ post, size = 'card', className = '' }: BlogCoverProps) {
    const { gradient, Icon, scene } = getBlogTheme(post);
    const label = post.topics?.[0] ?? 'Insights';

    if (size === 'thumb') {
        return (
            <div className={`relative flex items-center justify-center overflow-hidden ${NAVY_BG} ${className}`} aria-hidden="true">
                <div className={GRID} />
                <div className="absolute h-8 w-8 rounded-full bg-blue-500/50 blur-xl" />
                <Icon className="relative h-6 w-6 text-sky-200 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]" strokeWidth={1.6} />
            </div>
        );
    }

    if (size === 'hero') {
        return (
            <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`} aria-hidden="true">
                <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]" />
                <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
                <Icon className="absolute -bottom-10 right-6 h-64 w-64 text-white/15" strokeWidth={1.25} />
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-1.5">
                    {(post.topics ?? []).slice(0, 4).map((topic) => (
                        <span
                            key={topic}
                            className="rounded-full border border-white/25 bg-white/15 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
                        >
                            #{topic}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={`relative overflow-hidden ${NAVY_BG} ${className}`} aria-hidden="true">
            <div className={GRID} />
            {scene === 'web' && <WebScene label={label} />}
            {scene === 'mobile' && <MobileScene label={label} />}
            {scene === 'security' && <GlowScene Icon={ShieldCheck} accent="cyan" />}
            {scene === 'default' && <GlowScene Icon={Icon} accent="violet" />}
        </div>
    );
}
