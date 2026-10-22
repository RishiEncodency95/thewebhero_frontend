'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import { track } from '../lib/track';

/** WhatsApp button pinned to the bottom corner on every page. */
export default function FloatingContact({ whatsapp, phone }: { whatsapp?: string; phone?: string }) {
    if (!whatsapp && !phone) return null;
    return (
        // Phones: sits above the bottom tab bar; calling lives in the header there.
        <div className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom))] right-4 z-30 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6">
            {whatsapp && (
                <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('contact_click', { method: 'whatsapp' })}
                    aria-label="Chat with TheWebHero on WhatsApp"
                    className="group flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.7)] transition-all hover:scale-105 lg:h-14 lg:w-auto lg:px-5"
                >
                    <FaWhatsapp className="h-6 w-6" />
                    <span className="hidden text-[14px] font-semibold lg:inline">Chat with us</span>
                </a>
            )}
        </div>
    );
}
