'use client';

import React, { useState } from 'react';
import { Share2, Copy, Check } from 'lucide-react';

interface ArticleShareProps {
    title: string;
    url?: string;
}

export default function ArticleShare({ title, url }: ArticleShareProps) {
    const [copied, setCopied] = useState(false);
    const targetUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    const handleCopy = () => {
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(targetUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex items-center gap-3 py-4 border-y border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Share2 className="w-3.5 h-3.5 text-[#1769FF]" />
                Share Article:
            </span>

            <div className="flex items-center gap-2">
                <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                    aria-label="Copy article link"
                >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Link'}</span>
                </button>
            </div>
        </div>
    );
}
