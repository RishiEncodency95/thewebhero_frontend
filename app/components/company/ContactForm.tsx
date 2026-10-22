'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { submitLead } from '../../lib/api';

const SERVICES = [
    'Web Development',
    'Mobile App Development',
    'Custom Software',
    'E-commerce Development',
    'UI/UX Design',
    'AI & Automation',
    'Cloud & DevOps',
    'IT Support & Maintenance',
    'General Inquiry',
];

const EMPTY = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICES[0],
    message: '',
    consent: false,
    honeypot: '',
};

const label = 'mb-1.5 block text-[13px] font-semibold text-slate-700';
const field =
    'w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors focus:border-purple-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-purple-100';

export default function ContactForm() {
    const [formData, setFormData] = useState(EMPTY);
    const [submitted, setSubmitted] = useState(false);
    const [referenceId, setReferenceId] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        if (formData.name.trim().length < 2) return setError('Please enter your full name.');
        if (!formData.email.trim() || !formData.email.includes('@')) return setError('Please enter a valid email address.');
        if (formData.message.trim().length < 5) return setError('Please tell us a little about your project.');
        if (!formData.consent) return setError('Please accept the privacy consent before submitting.');

        setError('');
        setSubmitting(true);
        const result = await submitLead('/contact-enquiries', { ...formData, source: 'contact-page' });
        setSubmitting(false);

        if (result.ok) {
            setReferenceId(result.referenceId);
            setSubmitted(true);
        } else {
            setError(Object.values(result.fieldErrors)[0] ?? result.message);
        }
    };

    if (submitted) {
        return (
            <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-gradient-to-b from-emerald-50 to-white px-6 py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                </span>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">Thanks, {formData.name.split(' ')[0]}!</h2>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-600">
                    We have received your enquiry about <strong className="text-slate-900">{formData.service}</strong>. Our team will reply within 24 hours.
                </p>
                {referenceId && (
                    <p className="mt-3 rounded-full bg-white px-4 py-1.5 text-[13px] text-slate-500 ring-1 ring-slate-200">
                        Reference ID: <strong className="font-mono text-slate-800">{referenceId}</strong>
                    </p>
                )}
                <button
                    type="button"
                    onClick={() => {
                        setSubmitted(false);
                        setFormData(EMPTY);
                        setReferenceId('');
                    }}
                    className="mt-6 rounded-xl bg-slate-900 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-slate-700"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} noValidate className="relative rounded-3xl border border-slate-200/80 bg-white px-5 py-2 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_-20px_rgba(35,75,125,0.25)] sm:p-7">
            <div className="mb-5">
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Send us a message</h2>
                <p className="mt-1 text-[14px] text-slate-500">Tell us what you need. We reply within 24 hours.</p>
            </div>

            {error && (
                <div role="alert" className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] font-medium text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="cf-name" className={label}>Full name *</label>
                    <input id="cf-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={field} required />
                </div>
                <div>
                    <label htmlFor="cf-email" className={label}>Email *</label>
                    <input id="cf-email" type="email" name="email" autoComplete="email" inputMode="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" className={field} required />
                </div>
                <div>
                    <label htmlFor="cf-phone" className={label}>
                        Phone / WhatsApp <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <input id="cf-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" value={formData.phone} onChange={handleChange} placeholder="+91" className={field} />
                </div>
                <div>
                    <label htmlFor="cf-company" className={label}>
                        Company <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <input id="cf-company" type="text" name="company" autoComplete="organization" value={formData.company} onChange={handleChange} placeholder="Company name" className={field} />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="cf-service" className={label}>What do you need? *</label>
                    <select id="cf-service" name="service" value={formData.service} onChange={handleChange} className={field}>
                        {SERVICES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="cf-message" className={label}>Project details *</label>
                    <textarea
                        id="cf-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Goals, features, timeline or budget - anything that helps us understand your project."
                        className={`${field} resize-none`}
                        required
                    />
                </div>
            </div>

            <label htmlFor="cf-consent" className="mt-4 flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-slate-600">
                <input
                    type="checkbox"
                    id="cf-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-purple-600"
                />
                I agree that TheWebHero may store my details to reply to this enquiry.
            </label>

            {/* Honeypot: hidden from people, bots fill it in. */}
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website-field">Website</label>
                <input id="website-field" type="text" name="honeypot" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={handleChange} />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-[15px] font-bold text-white shadow-[0_12px_24px_-12px_rgba(124,58,237,0.8)] transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:cursor-wait disabled:opacity-70"
            >
                {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {submitting ? 'Sending…' : 'Send message'}
            </button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-[12px] text-slate-400">
                <Lock className="h-3.5 w-3.5" /> Your details are safe with us. No spam, ever.
            </p>
        </form>
    );
}
