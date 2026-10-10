import React from 'react';
import { Code2, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';
import type { ResourceItem } from '../../types/resource';

/**
 * Illustrated cover for a blog post. The `coverImage` paths in the data file
 * point at files that don't exist, so posts get a gradient cover tinted by
 * their first topic instead.
 */
const THEMES: { match: string[]; gradient: string; Icon: React.ElementType }[] = [
    { match: ['Security'], gradient: 'from-emerald-500 via-teal-600 to-slate-900', Icon: ShieldCheck },
    { match: ['Flutter', 'Mobile Apps'], gradient: 'from-sky-400 via-blue-600 to-indigo-900', Icon: Smartphone },
    { match: ['Next.js', 'React', 'Web Development'], gradient: 'from-fuchsia-500 via-purple-600 to-indigo-900', Icon: Code2 },
];
const DEFAULT_THEME = { gradient: 'from-pink-500 via-purple-600 to-blue-700', Icon: Sparkles };

export function getBlogTheme(post: Pick<ResourceItem, 'topics'>) {
    const topics = post.topics ?? [];
    return THEMES.find((t) => t.match.some((m) => topics.includes(m))) ?? DEFAULT_THEME;
}

interface BlogCoverProps {
    post: ResourceItem;
    size?: 'card' | 'hero';
    className?: string;
}

export default function BlogCover({ post, size = 'card', className = '' }: BlogCoverProps) {
    const { gradient, Icon } = getBlogTheme(post);
    const hero = size === 'hero';

    return (
        <div className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`} aria-hidden="true">
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_70%_40%,#000_10%,transparent_70%)]" />
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />

            <Icon
                className={`absolute text-white/15 ${hero ? '-bottom-10 right-6 h-64 w-64' : '-bottom-6 -right-4 h-36 w-36'}`}
                strokeWidth={1.25}
            />

            <div className={`absolute flex flex-wrap gap-1.5 ${hero ? 'bottom-6 left-6' : 'bottom-4 left-4'}`}>
                {(post.topics ?? []).slice(0, hero ? 4 : 3).map((topic) => (
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
