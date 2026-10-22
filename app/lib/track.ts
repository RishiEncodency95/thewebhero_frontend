// Conversion events for Google Analytics 4 / Tag Manager. Safe to call when
// neither is installed: the events just wait in window.dataLayer.

type Params = Record<string, string | number | undefined>;

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function track(event: string, params: Params = {}) {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...params });
    window.gtag?.('event', event, params);
}

/** A form lead was submitted successfully (GA4 recommended event name). */
export const trackLead = (form: string, params: Params = {}) => track('generate_lead', { form, ...params });
