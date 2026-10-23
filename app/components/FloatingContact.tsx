'use client';

import React, { useEffect, useState } from 'react';
import { Phone, Share2, X } from 'lucide-react';
import {
    FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaPinterestP, FaThreads, FaWhatsapp, FaXTwitter, FaYoutube,
} from 'react-icons/fa6';
import type { SocialKey } from '../lib/cms/content';
import { track } from '../lib/track';

/*
 * Floating side rails on every page:
 *   left  - WhatsApp, with Call below it
 *   right - every social profile set in Admin → Contact & Social
 * Minimal white circles; the brand colour fills in on hover.
 */

const SOCIALS: { key: SocialKey; label: string; Icon: React.ElementType; tone: string }[] = [
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn, tone: 'text-[#0a66c2] hover:bg-[#0a66c2] hover:border-[#0a66c2]' },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram, tone: 'text-[#e1306c] hover:bg-[#e1306c] hover:border-[#e1306c]' },
    { key: 'facebook', label: 'Facebook', Icon: FaFacebookF, tone: 'text-[#1877f2] hover:bg-[#1877f2] hover:border-[#1877f2]' },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube, tone: 'text-[#ff0000] hover:bg-[#ff0000] hover:border-[#ff0000]' },
    { key: 'twitter', label: 'X', Icon: FaXTwitter, tone: 'text-slate-900 hover:bg-slate-900 hover:border-slate-900' },
    { key: 'github', label: 'GitHub', Icon: FaGithub, tone: 'text-[#24292f] hover:bg-[#24292f] hover:border-[#24292f]' },
    { key: 'pinterest', label: 'Pinterest', Icon: FaPinterestP, tone: 'text-[#e60023] hover:bg-[#e60023] hover:border-[#e60023]' },
    { key: 'threads', label: 'Threads', Icon: FaThreads, tone: 'text-slate-900 hover:bg-slate-900 hover:border-slate-900' },
    { key: 'googleBusiness', label: 'Google reviews', Icon: FaGoogle, tone: 'text-[#4285f4] hover:bg-[#4285f4] hover:border-[#4285f4]' },
];

const circle =
    'group relative flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_4px_14px_-4px_rgba(15,23,42,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-200';

/** Filled, gently floating action button (WhatsApp / Call). */
const action =
    'group relative isolate flex h-[42px] w-[42px] items-center justify-center rounded-full text-white ring-[3px] ring-white transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-purple-300 lg:h-[46px] lg:w-[46px]';

/** Two soft rings that spread out behind a button, one after the other. */
function Ripples({ color, delayed = false }: { color: string; delayed?: boolean }) {
    return (
        <>
            <span className={`twh-ripple absolute inset-0 -z-10 rounded-full ${color} ${delayed ? '[animation-delay:0.7s]' : ''}`} aria-hidden="true" />
            <span className={`twh-ripple absolute inset-0 -z-10 rounded-full ${color} ${delayed ? '[animation-delay:1.9s]' : '[animation-delay:1.2s]'}`} aria-hidden="true" />
        </>
    );
}

/** Pill label that slides out to the right on hover (desktop). */
function Label({ children, dot }: { children: React.ReactNode; dot: string }) {
    return (
        <span className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-x-2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[13px] font-semibold text-slate-800 opacity-0 shadow-[0_10px_24px_-8px_rgba(15,23,42,0.35)] ring-1 ring-slate-200 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:flex">
            <span className={`h-2 w-2 rounded-full ${dot}`} />
            {children}
        </span>
    );
}

function Tip({ children, side }: { children: React.ReactNode; side: 'left' | 'right' }) {
    return (
        <span
            className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-1 text-[12px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 lg:block ${
                side === 'right' ? 'left-full ml-2.5' : 'right-full mr-2.5'
            }`}
        >
            {children}
        </span>
    );
}

interface FloatingContactProps {
    whatsapp?: string;
    phone?: string;
    social: Partial<Record<SocialKey, string>>;
}

export default function FloatingContact({ whatsapp, phone, social }: FloatingContactProps) {
    const [socialOpen, setSocialOpen] = useState(false);
    const socials = SOCIALS.filter((s) => social[s.key]);

    useEffect(() => {
        if (!socialOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSocialOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [socialOpen]);

    return (
        <>
            {/* ── Left: WhatsApp, then Call ──────────────────────────── */}
            {(whatsapp || phone) && (
                <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] left-3 z-30 flex flex-col gap-6 lg:bottom-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2">
                    {whatsapp && (
                        <a
                            href={whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => track('contact_click', { method: 'whatsapp' })}
                            aria-label="Chat with TheWebHero on WhatsApp"
                            className={`${action} twh-bob bg-gradient-to-br from-[#4fe08f] to-[#14a44d] shadow-[0_12px_26px_-8px_rgba(20,164,77,0.8)]`}
                        >
                            <Ripples color="bg-[#25D366]" />
                            <FaWhatsapp className="twh-sway relative h-[21px] w-[21px] lg:h-[23px] lg:w-[23px]" />
                            <Label dot="bg-[#25D366]">Chat on WhatsApp</Label>
                        </a>
                    )}
                    {phone && (
                        <a
                            href={phone}
                            onClick={() => track('contact_click', { method: 'phone' })}
                            aria-label="Call TheWebHero"
                            className={`${action} twh-bob bg-gradient-to-br from-[#7c8cff] to-[#4f46e5] shadow-[0_12px_26px_-8px_rgba(79,70,229,0.8)] [animation-delay:0.7s]`}
                        >
                            <Ripples color="bg-[#6366f1]" delayed />
                            <Phone className="twh-ring relative h-[17px] w-[17px] fill-white/20 lg:h-[19px] lg:w-[19px]" />
                            <Label dot="bg-[#6366f1]">Call us</Label>
                        </a>
                    )}
                </div>
            )}

            {/* ── Right: social profiles ─────────────────────────────── */}
            {socials.length > 0 && (
                <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-3 z-30 flex flex-col items-center lg:bottom-auto lg:right-4 lg:top-1/2 lg:-translate-y-1/2">
                    <div id="social-rail" className={`mb-2.5 flex-col items-center gap-2.5 lg:mb-0 lg:flex ${socialOpen ? 'twh-fade-in flex' : 'hidden'}`}>
                        {socials.map(({ key, label, Icon, tone }) => (
                            <a
                                key={key}
                                href={social[key]}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track('social_click', { network: key })}
                                aria-label={`TheWebHero on ${label}`}
                                className={`h-10 w-10 ${tone} ${circle}`}
                            >
                                <Icon className="h-4 w-4" />
                                <Tip side="left">{label}</Tip>
                            </a>
                        ))}
                    </div>

                    {/* Phones and tablets: one button that opens the social icons */}
                    <button
                        type="button"
                        onClick={() => setSocialOpen((v) => !v)}
                        aria-expanded={socialOpen}
                        aria-controls="social-rail"
                        aria-label={socialOpen ? 'Hide social links' : 'Show social links'}
                        className={`h-11 w-11 text-purple-700 hover:border-purple-600 hover:bg-purple-600 lg:hidden ${circle}`}
                    >
                        {socialOpen ? <X className="h-[18px] w-[18px]" /> : <Share2 className="h-[18px] w-[18px]" />}
                    </button>
                </div>
            )}
        </>
    );
}
