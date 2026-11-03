import React from 'react';
import { Mail, Phone, MapPin, Clock, LogIn } from 'lucide-react';
import { mapLink, telHref } from '../lib/contact';
import { ADMIN_LOGIN_URL } from '../lib/site';
import type { SiteSettings } from '../lib/cms/content';

const chip = 'flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 transition-colors group-hover:bg-white/10';
const item = 'group flex min-h-6 items-center gap-2 text-slate-300 transition-colors hover:text-white';

/** Contact strip above the navbar (desktop). Contact details come from Admin → Site settings. */
export default function Topbar({ settings }: { settings: SiteSettings }) {
    const { contact } = settings;
    const place = [contact.address.locality, contact.address.region].filter(Boolean).join(', ');

    return (
        <div className="relative hidden overflow-hidden bg-[#0b1020] text-[13px] lg:block">
            {/* Soft brand glow and a hairline at the bottom */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_120%_at_0%_50%,rgba(59,130,246,0.18),transparent_70%),radial-gradient(35%_120%_at_100%_50%,rgba(168,85,247,0.2),transparent_70%)]"
            />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

            <div className="relative flex h-11 items-center justify-between gap-6 px-4 sm:px-6 lg:px-20">
                <ul className="flex min-w-0 items-center gap-5 xl:gap-7">
                    {contact.email && (
                        <li>
                            <a href={`mailto:${contact.email}`} className={item}>
                                <span className={chip}><Mail className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" /></span>
                                {contact.email}
                            </a>
                        </li>
                    )}
                    {contact.phone && (
                        <li>
                            <a href={telHref(contact.phone)} className={item}>
                                <span className={chip}><Phone className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" /></span>
                                {contact.phone}
                            </a>
                        </li>
                    )}
                    {place && (
                        <li className="hidden xl:block">
                            <a href={mapLink(contact)} target="_blank" rel="noopener noreferrer" className={item}>
                                <span className={chip}><MapPin className="h-3.5 w-3.5 text-pink-400" aria-hidden="true" /></span>
                                {place}, India
                            </a>
                        </li>
                    )}
                </ul>

                <div className="flex shrink-0 items-center gap-5">
                    {contact.hours && (
                        <span className="flex items-center gap-2 text-slate-300">
                            <span className="relative flex h-2 w-2" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                            {contact.hours}
                        </span>
                    )}

                    <a
                        href={ADMIN_LOGIN_URL}
                        rel="nofollow"
                        className="group relative inline-flex h-8 items-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 px-4 font-semibold text-white shadow-[0_6px_18px_-6px_rgba(124,58,237,0.85)] ring-1 ring-white/20 transition-all hover:shadow-[0_8px_24px_-6px_rgba(124,58,237,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                        {/* Shine sweep on hover */}
                        <span
                            aria-hidden="true"
                            className="absolute inset-y-0 -left-8 w-8 -skew-x-12 bg-white/30 blur-sm transition-transform duration-700 group-hover:translate-x-40"
                        />
                        <LogIn className="relative h-3.5 w-3.5" aria-hidden="true" />
                        <span className="relative">Login</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
