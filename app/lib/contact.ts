// Links built from Admin → Site settings → Contact, so the phone, WhatsApp,
// email and map are edited in one place and every page follows.
import type { SiteSettings } from './cms/content';

type Contact = SiteSettings['contact'];

/** "+91 98765 43210" -> "tel:+919876543210". */
export const telHref = (phone?: string) => (phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : undefined);

/** WhatsApp chat link with an optional pre-filled message. */
export function whatsappHref(number?: string, text?: string) {
    const digits = number?.replace(/\D/g, '');
    if (!digits) return undefined;
    return `https://wa.me/${digits}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

/** One-line postal address. */
export function fullAddress(contact: Contact) {
    const a = contact.address;
    return [a.street, a.locality, a.region, a.postalCode].filter(Boolean).join(', ');
}

/** "Get directions" link: the saved Google Maps link, else a search for the address. */
export function mapLink(contact: Contact) {
    if (contact.mapUrl) return contact.mapUrl;
    const address = fullAddress(contact);
    return address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : undefined;
}

/** Embeddable map: the saved embed URL, else one drawn from the address (no API key needed). */
export function mapEmbed(contact: Contact) {
    if (contact.mapEmbedUrl && /^https:\/\/(www\.)?google\.[a-z.]+\/maps/.test(contact.mapEmbedUrl)) return contact.mapEmbedUrl;
    const address = fullAddress(contact);
    return address ? `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed` : undefined;
}
