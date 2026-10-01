import React from 'react';

type Tone = 'plain' | 'muted' | 'sunken' | 'brand-wash';

const TONE: Record<Tone, string> = {
    plain: 'bg-surface',
    muted: 'bg-surface-muted',
    sunken: 'bg-surface-sunken',
    // Faint tint of the logo gradient — used sparingly, for accent bands only.
    'brand-wash': 'bg-linear-to-b from-brand-violet/6 via-surface to-surface',
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    tone?: Tone;
    /** Shorter rhythm for dense strips (stats, logo rows). */
    compact?: boolean;
    /** Hairline top border — use to separate two same-tone bands. */
    divided?: boolean;
    children: React.ReactNode;
}

/**
 * The single vertical rhythm for every home section.
 *
 * Before this, section padding ranged from py-2 (8px) to py-24 (96px) with no
 * pattern, so the page read as a pile of unrelated blocks. `section-y` is one
 * fluid token — clamp(56px, …, 96px) — shared by all of them.
 */
export function Section({
    tone = 'plain',
    compact = false,
    divided = false,
    className = '',
    children,
    ...rest
}: SectionProps) {
    return (
        <section
            className={[
                'relative overflow-hidden',
                TONE[tone],
                compact ? 'section-y-sm' : 'section-y',
                divided ? 'border-t border-hairline' : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            {...rest}
        >
            {children}
        </section>
    );
}

interface SectionHeadingProps {
    /** Small uppercase kicker above the title. */
    eyebrow?: string;
    title: React.ReactNode;
    /** Supporting sentence. Capped at a readable measure. */
    lead?: React.ReactNode;
    align?: 'center' | 'left';
    /** Heading level. Home sections are h2; nested groups pass h3. */
    as?: 'h2' | 'h3';
    className?: string;
}

/**
 * Section title block.
 *
 * Fixes the heading sizes that were hand-set per section (text-3xl, text-4xl,
 * text-[42px], text-[50px]…) down to one `text-h2` token, and keeps the
 * document outline as h1 → h2 → h3 with no skipped levels.
 */
export function SectionHeading({
    eyebrow,
    title,
    lead,
    align = 'center',
    as: Tag = 'h2',
    className = '',
}: SectionHeadingProps) {
    const centred = align === 'center';

    return (
        <div
            className={[
                'flex flex-col gap-4',
                centred ? 'items-center text-center mx-auto' : 'items-start text-left',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {eyebrow && (
                <p className="eyebrow">
                    <span className="h-px w-6 brand-sweep-bg" aria-hidden="true" />
                    {eyebrow}
                </p>
            )}

            <Tag className={Tag === 'h2' ? 'text-h2 font-semibold' : 'text-h3 font-semibold'}>
                {title}
            </Tag>

            {lead && (
                <p className={`text-lead text-ink-muted measure ${centred ? 'mx-auto' : ''}`}>
                    {lead}
                </p>
            )}
        </div>
    );
}
