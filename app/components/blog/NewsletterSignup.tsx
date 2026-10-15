'use client';

import React, { useState } from 'react';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';

type Status = { state: 'idle' | 'loading' | 'success' | 'error'; message?: string };

/** Sidebar newsletter box; posts to /api/newsletter. */
export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<Status>({ state: 'idle' });

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ state: 'loading' });
        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data: { success: boolean; message: string } = await res.json();
            setStatus({ state: data.success ? 'success' : 'error', message: data.message });
            if (data.success) setEmail('');
        } catch {
            setStatus({ state: 'error', message: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,40,90,0.04)]">
            <div className="flex gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Mail className="h-5 w-5" />
                </span>
                <div>
                    <h3 className="text-[15px] font-semibold text-slate-900">Subscribe to Our Newsletter</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        Get the latest articles, tips and resources delivered to your inbox.
                    </p>
                </div>
            </div>

            {status.state === 'success' ? (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-50 px-3 py-2.5 text-sm text-emerald-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    {status.message}
                </p>
            ) : (
                <form onSubmit={submit} className="mt-4 flex gap-2">
                    <label className="sr-only" htmlFor="newsletter-email">Email address</label>
                    <input
                        id="newsletter-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address..."
                        className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                    />
                    <button
                        type="submit"
                        disabled={status.state === 'loading'}
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-70"
                    >
                        {status.state === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                        Subscribe
                    </button>
                </form>
            )}
            {status.state === 'error' && <p className="mt-2 text-xs text-red-600">{status.message}</p>}
        </div>
    );
}
