import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CompanySectionHeaderProps {
    eyebrow: string;
    title: string;
    /** Trailing words of the title, rendered in the brand gradient. */
    highlight?: string;
    description?: string;
    /** Optional "view all" style link on the right. */
    action?: { label: string; href: string };
    center?: boolean;
}

/** Consistent heading block for sections on company pages. */
export default function CompanySectionHeader({ eyebrow, title, highlight, description, action, center = false }: CompanySectionHeaderProps) {
    return (
        <div className={`mb-8 flex flex-col gap-4 sm:mb-10 ${center ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'}`}>
            <div className={center ? 'max-w-2xl' : 'max-w-3xl'}>
                <p className="text-xs font-bold uppercase tracking-wider text-purple-600">{eyebrow}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[34px]">
                    {title}
                    {highlight && (
                        <>
                            {' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                {highlight}
                            </span>
                        </>
                    )}
                </h2>
                {description && <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{description}</p>}
            </div>
            {action && (
                <Link
                    href={action.href}
                    className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-slate-200 bg-white px-4 py-2 sm:self-auto text-sm font-semibold text-slate-800 shadow-sm transition-colors hover:border-purple-300 hover:text-purple-700"
                >
                    {action.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
            )}
        </div>
    );
}
