/**
 * Thin client for the TheWebHero backend (twh_backend).
 * Set NEXT_PUBLIC_API_URL in .env.local, e.g. https://api.thewebhero.in/api/v1
 */
export const API_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1').replace(/\/+$/, '');

export type LeadResult =
    | { ok: true; referenceId: string }
    | { ok: false; message: string; fieldErrors: Record<string, string> };

/** POSTs a public form (quote, contact, ...) and normalises the backend reply. */
export async function submitLead(path: string, body: Record<string, unknown>): Promise<LeadResult> {
    let res: Response;
    try {
        res = await fetch(`${API_URL}${path}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...body,
                pageUrl: typeof window !== 'undefined' ? window.location.href : undefined,
            }),
        });
    } catch {
        return {
            ok: false,
            message: 'Unable to reach our server. Please check your connection and try again.',
            fieldErrors: {},
        };
    }

    const json = await res.json().catch(() => null);

    if (res.ok && json?.success) {
        return { ok: true, referenceId: String(json.data?.referenceId ?? '') };
    }

    // Validation errors come back as { field: ["message", ...] }.
    const fieldErrors: Record<string, string> = {};
    if (json?.data && typeof json.data === 'object') {
        for (const [key, value] of Object.entries(json.data as Record<string, unknown>)) {
            if (Array.isArray(value) && value.length) fieldErrors[key] = String(value[0]);
        }
    }

    return {
        ok: false,
        message:
            res.status === 429
                ? 'Too many submissions from your network. Please try again in a little while.'
                : json?.message && json.message !== 'Validation failed'
                  ? json.message
                  : 'Please check the highlighted fields and try again.',
        fieldErrors,
    };
}
