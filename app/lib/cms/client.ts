/**
 * Server-side client for the TheWebHero CMS (twh_backend).
 *
 * Every request is cached by Next.js with tags. When an editor saves in the
 * admin, the backend calls /api/revalidate with those tags and the affected
 * pages refresh within seconds. `REVALIDATE_FALLBACK` is a safety net in case
 * a revalidation call is ever missed.
 */
const API_URL = (process.env.CMS_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000/api/v1').replace(/\/+$/, '');

const REVALIDATE_FALLBACK = 3600; // seconds
const TIMEOUT_MS = 8000;

/** Result of a CMS call: data, a confirmed "doesn't exist", or "CMS unavailable". */
export type CmsResult<T> = { status: 'ok'; data: T } | { status: 'not-found' } | { status: 'error' };

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    // A timer instead of an AbortSignal: passing a signal to fetch opts the
    // request out of Next.js request memoization.
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => reject(new Error(`CMS request timed out after ${ms}ms`)), ms);
        promise.then(
            (v) => {
                clearTimeout(t);
                resolve(v);
            },
            (e) => {
                clearTimeout(t);
                reject(e);
            },
        );
    });
}

export async function cmsFetch<T>(path: string, tags: string[]): Promise<CmsResult<T>> {
    try {
        const res = await withTimeout(
            fetch(`${API_URL}${path}`, {
                headers: {
                    Accept: 'application/json',
                    // Identifies this server to the API (exempts it from per-IP rate limits).
                    ...(process.env.REVALIDATE_SECRET ? { 'x-site-secret': process.env.REVALIDATE_SECRET } : {}),
                },
                next: { revalidate: REVALIDATE_FALLBACK, tags: ['cms', ...tags] },
            }),
            TIMEOUT_MS,
        );
        if (res.status === 404) return { status: 'not-found' };
        if (!res.ok) throw new Error(`CMS ${res.status} for ${path}`);
        const json = await res.json();
        return { status: 'ok', data: json.data as T };
    } catch (err) {
        console.error(`[cms] ${path}:`, (err as Error).message);
        return { status: 'error' };
    }
}

interface Paginated<T> {
    items: T[];
}

/** All published items of a collection (up to 500), or null if the CMS is unreachable. */
export async function cmsList<T>(resource: string, query: Record<string, string> = {}, extraTags: string[] = []): Promise<T[] | null> {
    const qs = new URLSearchParams({ limit: '500', ...query }).toString();
    const result = await cmsFetch<Paginated<T>>(`/${resource}?${qs}`, [resource, ...extraTags]);
    return result.status === 'ok' ? result.data.items : null;
}

/** One published item by slug, with related items populated. */
export function cmsItem<T>(resource: string, slug: string, refResources: string[] = []): Promise<CmsResult<T>> {
    return cmsFetch<T>(`/${resource}/slug/${encodeURIComponent(slug)}`, [resource, `${resource}:${slug}`, ...refResources]);
}

/** A single-record content type (settings, company, home-page). */
export async function cmsSingleton<T>(resource: string): Promise<T | null> {
    const result = await cmsFetch<T>(`/${resource}`, [resource]);
    return result.status === 'ok' ? result.data : null;
}
