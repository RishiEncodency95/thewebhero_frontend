import React from 'react';
import { Code2, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';

/**
 * Illustrated cover for a blog post. The `coverImage` paths in the data file
 * point at files that don't exist, so posts get a gradient cover tinted by
 * their first matching topic instead.
 */
const THEMES: { match: string[]; gradient: string; glow: string; Icon: React.ElementType }[] = [
    { match: ['Security'], gradient: 'from-emerald-500 via-teal-700 to-slate-950', glow: 'bg-emerald-300/40', Icon: ShieldCheck },
    { match: ['Flutter', 'Mobile Apps'], gradient: 'from-sky-500 via-blue-700 to-slate-950', glow: 'bg-sky-300/40', Icon: Smartphone },
    { match: ['Next.js', 'React', 'Web Development'], gradient: 'from-fuchsia-500 via-violet-700 to-slate-950', glow: 'bg-fuchsia-300/40', Icon: Code2 },
];
const DEFAULT_THEME = { gradient: 'from-pink-500 via-purple-700 to-slate-950', glow: 'bg-pink-300/40', Icon: Sparkles };

export function getBlogTheme(post: Pick<ResourceItem, 'topics'>) {
    const topics = post.topics ?? [];
    return THEMES.find((t) => t.match.some((m) => topics.includes(m))) ?? DEFAULT_THEME;
}

interface BlogCoverProps {
    post: ResourceItem;
    size?: 'card' | 'hero' | 'thumb';
    className?: string;
}

export default function BlogCover({ post, size = 'card', className = '' }: BlogCoverProps) {
    const { gradient, glow, Icon } = getBlogTheme(post);
    const hero = size === 'hero';
    const thumb = size === 'thumb';

    return (
        <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`} aria-hidden="true">
            {/* Soft light + dot texture */}
            <div className={`absolute -left-1/4 -top-1/3 h-[120%] w-[80%] rounded-full ${glow} blur-3xl`} />
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_65%)]" />

            {/* Concentric rings around the icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`rounded-full border border-white/10 ${hero ? 'h-[360px] w-[360px]' : thumb ? 'h-28 w-28' : 'h-52 w-52'}`} />
                <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 ${
                        hero ? 'h-[230px] w-[230px]' : thumb ? 'h-16 w-16' : 'h-32 w-32'
                    }`}
                />
            </div>

            {/* Glass icon tile */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                    className={`flex items-center justify-center bg-white/10 text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/25 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 ${
                        hero ? 'h-24 w-24 rounded-3xl' : thumb ? 'h-8 w-8 rounded-lg' : 'h-14 w-14 rounded-2xl'
                    }`}
                >
                    <Icon className={hero ? 'h-11 w-11' : thumb ? 'h-4 w-4' : 'h-7 w-7'} strokeWidth={1.75} />
                </div>
            </div>

            {hero && (
                <div className="absolute bottom-5 left-5 flex flex-wrap gap-1.5">
                    {(post.topics ?? []).slice(0, 4).map((topic) => (
                        <span
                            key={topic}
                            className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
