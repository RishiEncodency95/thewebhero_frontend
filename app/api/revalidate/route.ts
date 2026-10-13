import { timingSafeEqual } from 'crypto';
import { revalidateTag } from 'next/cache';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Called by twh_backend whenever content changes in the admin:
 *   POST /api/revalidate  { "tags": ["services", "services:web-development"] }
 *   header x-revalidate-secret: <REVALIDATE_SECRET>
 * Pages that fetched data with those tags re-render on their next request.
 */
function secretMatches(given: string | null) {
    const expected = process.env.REVALIDATE_SECRET;
    if (!expected || !given) return false;
    const a = Buffer.from(given);
    const b = Buffer.from(expected);
    return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: NextRequest) {
    if (!secretMatches(request.headers.get('x-revalidate-secret'))) {
        return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
    }

    const body = await request.json().catch(() => null);
    const tags: unknown = body?.tags;
    if (!Array.isArray(tags) || tags.length === 0 || tags.length > 64 || !tags.every((t) => typeof t === 'string' && t.length > 0 && t.length <= 256)) {
        return NextResponse.json({ revalidated: false, message: 'tags must be 1–64 non-empty strings' }, { status: 400 });
    }

    // expire: 0 -> the next visitor gets fresh content, not a stale copy.
    for (const tag of new Set(tags as string[])) revalidateTag(tag, { expire: 0 });
    return NextResponse.json({ revalidated: true, tags, now: Date.now() });
}
