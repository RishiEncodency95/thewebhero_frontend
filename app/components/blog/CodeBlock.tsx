'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

/** Dark code panel with a language label and copy button. */
export default function CodeBlock({ code, language }: { code: string; language?: string }) {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard unavailable — ignore.
        }
    };

    return (
        <div className="overflow-hidden rounded-2xl bg-[#0d1117] ring-1 ring-slate-800 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-3">
                    <span className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </span>
                    {language && (
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{language}</span>
                    )}
                </div>
                <button
                    type="button"
                    onClick={copy}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] font-medium text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>
            <pre className="overflow-x-auto p-5 text-[13.5px] leading-relaxed text-slate-200">
                <code className="font-mono">{code}</code>
            </pre>
        </div>
    );
}
