'use client';

import { useEffect } from 'react';

/**
 * Makes every link on the site open in a new tab.
 *
 * It runs in the capture phase, before Next's <Link> handler: by tagging the anchor with target="_blank"
 * just before the click is processed, Next skips its client-side navigation and the browser opens the
 * link natively in a new tab (so popup blockers never interfere). Links that should stay put are
 * left alone: same-page #anchors, mailto:/tel:/sms:/javascript: links, downloads, and anything that
 * already has a target or opts out with data-same-tab.
 */
export default function NewTabLinks() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0) return;
            const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null;
            if (!a || a.target || a.hasAttribute('download') || a.dataset.sameTab !== undefined) return;

            const raw = a.getAttribute('href') ?? '';
            if (!raw || raw.startsWith('#') || /^(mailto|tel|sms|javascript):/i.test(raw)) return;

            let url: URL;
            try {
                url = new URL(a.href, window.location.href);
            } catch {
                return;
            }
            if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
            // Same page, only the #hash differs -> normal in-page jump.
            if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

            a.target = '_blank';
            a.rel = Array.from(new Set([...a.rel.split(/\s+/).filter(Boolean), 'noopener'])).join(' ');
        };
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);

    return null;
}
