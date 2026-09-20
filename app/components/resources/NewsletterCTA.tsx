'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        setError('');
        setSubmitted(true);
    };

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 text-blue-400 mb-2">
                        <Mail className="w-6 h-6" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                        Stay Updated with TheWebHero Tech Digest
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                        Get curated articles on web development architecture, Flutter mobile app guides, Next.js updates, and engineering insights directly in your inbox.
                    </p>

                    {submitted ? (
                        <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-sm inline-flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>Thank you for subscribing! You are now subscribed to our tech insights newsletter.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                            <div className="w-full relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your work email address..."
                                    className="w-full px-4 py-3.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-6 py-3.5 bg-[#1769FF] hover:bg-blue-600 text-white font-bold text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center justify-center gap-2"
                            >
                                <span>Subscribe</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    )}

                    {error && (
                        <p className="text-xs text-red-400 font-medium">{error}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
