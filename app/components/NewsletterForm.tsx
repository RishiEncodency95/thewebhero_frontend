'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { API_URL } from '../lib/api';

/** Footer newsletter signup -> twh_backend /newsletter/subscribe. */
export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (state === 'sending') return;
        setState('sending');
        try {
            const res = await fetch(`${API_URL}/newsletter/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const json = await res.json().catch(() => null);
            if (res.ok || res.status === 409) {
                setState('done');
                setMessage(res.status === 409 ? 'You are already subscribed.' : 'Thanks! You are subscribed.');
                setEmail('');
            } else {
                setState('error');
                setMessage(json?.message === 'Validation failed' ? 'Please enter a valid email.' : json?.message ?? 'Could not subscribe. Try again.');
            }
        } catch {
            setState('error');
            setMessage('Could not reach the server. Try again.');
        }
    };

    return (
        <form onSubmit={submit} className="relative" noValidate>
            <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    if (state !== 'sending') setState('idle');
                }}
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full bg-white text-[13px] text-slate-900 placeholder-slate-400 border border-purple-100 rounded-lg py-1.5 pl-3 pr-10 xl:pr-12 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-colors"
            />
            <button
                type="submit"
                disabled={state === 'sending'}
                className="absolute inset-y-1 right-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-md w-7 xl:w-8 flex items-center justify-center transition-all hover:shadow-md hover:shadow-purple-500/40 disabled:opacity-70"
                aria-label="Subscribe"
            >
                {state === 'sending' ? <Loader2 size={13} className="animate-spin" /> : state === 'done' ? <Check size={13} /> : <ArrowRight size={13} />}
            </button>
            {(state === 'done' || state === 'error') && (
                <p role="status" className={`mt-1.5 text-[11.5px] ${state === 'done' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}
        </form>
    );
}
