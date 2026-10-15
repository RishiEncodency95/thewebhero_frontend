import { NextRequest, NextResponse } from 'next/server';

type NewsletterResponse = { success: boolean; message: string };

// In-memory rate limiting store (IP -> last timestamp)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 30 * 1000;

export async function POST(req: NextRequest) {
    try {
        const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
        const now = Date.now();
        const last = rateLimitMap.get(clientIp);

        if (last && now - last < RATE_LIMIT_WINDOW_MS) {
            return NextResponse.json<NewsletterResponse>(
                { success: false, message: 'Too many requests. Please wait a moment and try again.' },
                { status: 429 }
            );
        }

        const body: { email?: string } = await req.json();
        const email = body.email?.trim().toLowerCase() ?? '';

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json<NewsletterResponse>(
                { success: false, message: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        rateLimitMap.set(clientIp, now);

        // In production, insert into the `newsletterSubscribers` collection / mailing-list provider.
        console.log('[Newsletter API] Subscriber received:', email);

        return NextResponse.json<NewsletterResponse>(
            { success: true, message: 'Thanks for subscribing! You’ll hear from us soon.' },
            { status: 200 }
        );
    } catch (err: unknown) {
        console.error('[Newsletter API] Error:', err);
        return NextResponse.json<NewsletterResponse>(
            { success: false, message: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
