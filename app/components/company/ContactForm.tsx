'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitLead } from '../../lib/api';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: 'Web Development',
        message: '',
        consent: false,
        honeypot: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [referenceId, setReferenceId] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        if (!formData.name.trim()) {
            setError('Please enter your full name.');
            return;
        }
        if (!formData.email.trim() || !formData.email.includes('@')) {
            setError('Please enter a valid work email address.');
            return;
        }
        if (!formData.message.trim()) {
            setError('Please describe your project requirements.');
            return;
        }
        if (!formData.consent) {
            setError('Please accept the privacy consent before submitting.');
            return;
        }

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
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                    Message Sent Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our engineering team has received your inquiry regarding <strong className="text-slate-900">{formData.service}</strong> and will get back to you shortly.
                </p>
                {referenceId && (
                    <p className="text-xs text-slate-500">
                        Reference ID: <strong className="font-mono text-slate-800">{referenceId}</strong>
                    </p>
                )}
                <button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({
                            name: '',
                            email: '',
                            company: '',
                            service: 'Web Development',
                            message: '',
                            consent: false,
                            honeypot: '',
                        });
                        setReferenceId('');
                    }}
                    className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-semibold text-xs rounded-xl hover:bg-slate-800 transition-colors"
                >
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Start a Scoping Conversation
            </h3>

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-xs font-semibold text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{error}</span>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Your Full Name *
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white"
                        required
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Work Email Address *
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white"
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company / Organization
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name (Optional)"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white"
                    />
                </div>

                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Service Category *
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white"
                    >
                        <option value="Web Development">Web Development (React / Next.js)</option>
                        <option value="Mobile App Development">Mobile App Development (Flutter)</option>
                        <option value="Custom Software">Custom Software Engineering</option>
                        <option value="Backend & REST API">Backend & REST API Development</option>
                        <option value="UI/UX Design">UI/UX Interface Design</option>
                        <option value="General Inquiry">General Technical Inquiry</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Overview / Message *
                </label>
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timelines, or technology requirements..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1769FF] focus:bg-white resize-none"
                    required
                />
            </div>

            <div className="flex items-start gap-2.5 pt-2">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-[#1769FF] rounded border-slate-300 focus:ring-[#1769FF]"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
                    I agree to allow TheWebHero to store and process my contact details to respond to this inquiry.
                </label>
            </div>

            {/* Honeypot: hidden from people, bots fill it in. */}
            <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website-field">Website</label>
                <input
                    id="website-field"
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={handleChange}
                />
            </div>

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:shadow-lg hover:shadow-blue-500/30 disabled:cursor-wait disabled:opacity-70"
            >
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>{submitting ? 'Sending…' : 'Submit Inquiry'}</span>
            </button>
        </form>
    );
}
