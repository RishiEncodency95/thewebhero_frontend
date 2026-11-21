'use client';

import React, { useState } from 'react';
import { PhoneCall, CheckCircle2, AlertCircle, Loader2, Lock, Clock, ShieldCheck, BadgeIndianRupee } from 'lucide-react';
import { submitLead } from '../../lib/api';

const field =
    'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-100';

const digits = (v: string) => v.replace(/\D/g, '').length;

/**
 * Short "call me back" form: name + phone only, so visitors who won't type an
 * email or a project brief can still reach us. Saved as a contact enquiry
 * with source "callback".
 */
export default function CallbackForm({ service, context }: { service: string; context?: string }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [consent, setConsent] = useState(false);
    const [honeypot, setHoneypot] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [done, setDone] = useState(false);

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        if (name.trim().length < 2) return setError('Please enter your name.');
        if (digits(phone) < 10 || digits(phone) > 15) return setError('Please enter a valid mobile number.');
        if (!consent) return setError('Please tick the box so we can call you.');

        setError('');
        setSubmitting(true);
        const result = await submitLead('/contact-enquiries', {
            name,
            phone,
            service,
            subject: 'Callback request',
            message: `Please call me back about ${service}${context ? ` (${context})` : ''}.`,
            consent,
            honeypot,
            source: 'callback',
        });
        setSubmitting(false);
        if (result.ok) setDone(true);
        else setError(Object.values(result.fieldErrors)[0] ?? result.message);
    };

    if (done) {
        return (
            <div role="status" className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-white px-6 py-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
                <p className="mt-3 text-lg font-bold text-slate-900">Thanks, {name.split(' ')[0]}! We&apos;ll call you shortly.</p>
                <p className="mt-1 text-[14px] text-slate-600">Our team calls back Mon–Sat, 10 AM – 7 PM.</p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} noValidate className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_16px_40px_-20px_rgba(35,75,125,0.35)] sm:p-6">
            {error && (
                <div role="alert" className="mb-3 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-[13px] font-medium text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{error}</span>
                </div>
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                    <label htmlFor="cb-name" className="sr-only">Your name</label>
                    <input id="cb-name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
                </div>
                <div>
                    <label htmlFor="cb-phone" className="sr-only">Mobile number</label>
                    <input id="cb-phone" type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Mobile / WhatsApp number" className={field} />
                </div>
            </div>
            <label htmlFor="cb-consent" className="mt-3 flex cursor-pointer items-start gap-2.5 text-[12.5px] leading-relaxed text-slate-600">
                <input id="cb-consent" type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-purple-600" />
                I agree that TheWebHero may call or WhatsApp me about this request.
            </label>
            {/* Honeypot: hidden from people, bots fill it in. */}
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="cb-website">Website</label>
                <input id="cb-website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>
            <button
                type="submit"
                disabled={submitting}
                className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-[15px] font-bold text-white shadow-[0_12px_24px_-12px_rgba(124,58,237,0.8)] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:cursor-wait disabled:opacity-70"
            >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <PhoneCall className="h-4 w-4" aria-hidden="true" />}
                {submitting ? 'Sending…' : 'Get a Free Callback'}
            </button>
            <p className="mt-2.5 flex items-center justify-center gap-1.5 text-[12px] text-slate-500">
                <Lock className="h-3.5 w-3.5" aria-hidden="true" /> No spam. Your number is only used to call you back.
            </p>
        </form>
    );
}

/** Section wrapper: pitch on the left, the callback form on the right. */
export function CallbackSection({ service, context, heading }: { service: string; context?: string; heading?: string }) {
    const points = [
        { Icon: Clock, text: 'Same-day callback, Mon–Sat' },
        { Icon: BadgeIndianRupee, text: 'Free consultation and clear pricing' },
        { Icon: ShieldCheck, text: 'No obligation, no spam' },
    ];
    return (
        <section className="bg-gradient-to-br from-[#f7f5ff] via-white to-[#eef5ff] py-10 lg:py-14">
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-purple-700">Free callback</p>
                    <h2 className="mt-2 text-[26px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-3xl">
                        {heading ?? `Talk to a ${service} expert`}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                        Leave your name and number. We&apos;ll call you to understand what you need and share an honest estimate.
                    </p>
                    <ul className="mt-5 space-y-2.5">
                        {points.map(({ Icon, text }) => (
                            <li key={text} className="flex items-center gap-2.5 text-[14.5px] font-medium text-slate-700">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-purple-600 shadow-sm ring-1 ring-slate-200">
                                    <Icon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                {text}
                            </li>
                        ))}
                    </ul>
                </div>
                <CallbackForm service={service} context={context} />
            </div>
        </section>
    );
}
