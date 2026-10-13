'use client';

import React, { useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

interface BlogShareProps {
    title: string;
    /** Stack the buttons vertically (sidebar) instead of in a row. */
    vertical?: boolean;
}

const btn =
    'flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-0.5 hover:border-transparent hover:bg-slate-900 hover:text-white';

export default function BlogShare({ title, vertical = false }: BlogShareProps) {
    const [copied, setCopied] = useState(false);

    // Built at click time so the page can stay statically rendered.
    const share = (base: string) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(title);
        window.open(base.replace('{url}', url).replace('{text}', text), '_blank', 'noopener,noreferrer');
    };

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard can be blocked (insecure context / permissions); nothing to do.
        }
    };

    return (
        <div className={`flex gap-2 ${vertical ? 'flex-row lg:flex-col' : 'flex-row'}`}>
            <button onClick={() => share('https://www.linkedin.com/sharing/share-offsite/?url={url}')} className={btn} aria-label="Share on LinkedIn" title="LinkedIn">
                <FaLinkedinIn className="h-3.5 w-3.5" />
            </button>
            <button onClick={() => share('https://twitter.com/intent/tweet?url={url}&text={text}')} className={btn} aria-label="Share on X" title="X">
                <FaXTwitter className="h-3.5 w-3.5" />
            </button>
            <button onClick={() => share('https://wa.me/?text={text}%20{url}')} className={btn} aria-label="Share on WhatsApp" title="WhatsApp">
                <FaWhatsapp className="h-4 w-4" />
            </button>
            <button onClick={copy} className={btn} aria-label="Copy article link" title={copied ? 'Copied!' : 'Copy link'}>
                {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Link2 className="h-4 w-4" />}
            </button>
        </div>
    );
}
