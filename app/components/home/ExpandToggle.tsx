'use client';

import React, { useState } from 'react';

/**
 * Shows or hides the `.twh-more` items of the list with id `target`.
 * The list itself is server-rendered; only this button runs in the browser.
 */
export default function ExpandToggle({
    target,
    moreLabel,
    lessLabel,
    moreIcon,
    lessIcon,
    className,
}: {
    target: string;
    moreLabel: string;
    lessLabel: string;
    moreIcon?: React.ReactNode;
    lessIcon?: React.ReactNode;
    className?: string;
}) {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        const list = document.getElementById(target);
        const next = !open;
        list?.toggleAttribute('data-expanded', next);
        setOpen(next);
        // When collapsing, bring the list back into view.
        if (!next) list?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <button type="button" onClick={toggle} aria-expanded={open} aria-controls={target} className={className}>
            <span>{open ? lessLabel : moreLabel}</span>
            {open ? lessIcon : moreIcon}
        </button>
    );
}
