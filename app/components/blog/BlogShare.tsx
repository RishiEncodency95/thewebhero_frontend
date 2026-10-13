'use client';

import React, { useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaWhatsapp } from 'react-icons/fa6';

interface BlogShareProps {
    title: string;
    url: string;
    /** Show a text label before the buttons. */
    label?: boolean;
}

/** Social share + copy-link buttons for an article. */
export default function BlogShare({ title, url, label = false }: BlogShareProps) {
    const [copied, setCopied] = useState(false);
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);

    const links = [
        { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: FaLinkedinIn },
        { name: 'X', href: `https://twitter.com/intent/tweet?url=${u}&text=${t}`, Icon: FaXTwitter },
        { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: FaFacebookF },
        { name: 'WhatsApp', href: `https://wa.me/?text=${t}%20${u}`, Icon: FaWhatsapp },
    ];

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable (e.g. insecure context) — nothing to do.
        }
    };

    const btn =
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700';

    return (
        <div className="flex flex-wrap items-center gap-2">
            {label && <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">Share</span>}
            {links.map(({ name, href, Icon }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${name}`}
                    title={`Share on ${name}`}
                    className={btn}
                >
                    <Icon className="h-3.5 w-3.5" />
                </a>
            ))}
            <button type="button" onClick={copy} aria-label="Copy article link" title="Copy link" className={btn}>
                {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Link2 className="h-4 w-4" />}
            </button>
            <span className="sr-only" aria-live="polite">
                {copied ? 'Link copied' : ''}
            </span>
        </div>
    );
}
