import React from 'react';

/** "TheWebHero Engineering Team" -> "TE". */
function initials(name: string) {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0]!.toUpperCase())
        .join('');
}

interface AuthorAvatarProps {
    name: string;
    size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
    sm: 'h-7 w-7 text-[10px]',
    md: 'h-11 w-11 text-sm',
    lg: 'h-14 w-14 text-base',
};

/** Initials avatar on the brand gradient (posts don't ship author photos). */
export default function AuthorAvatar({ name, size = 'md' }: AuthorAvatarProps) {
    return (
        <span
            className={`inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 font-bold text-white ring-2 ring-white ${SIZES[size]}`}
            aria-hidden="true"
        >
            {initials(name)}
        </span>
    );
}
