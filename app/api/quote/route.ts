import { NextRequest, NextResponse } from 'next/server';
import { QuoteFormData, QuoteSubmissionResponse } from '@/app/types/quote';

// In-memory rate limiting store (IP -> last timestamp)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window

export async function POST(req: NextRequest) {
    try {
        const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
        const lastSubmission = rateLimitMap.get(clientIp);
        const now = Date.now();

        if (lastSubmission && now - lastSubmission < RATE_LIMIT_WINDOW_MS) {
            return NextResponse.json<QuoteSubmissionResponse>(
                {
                    success: false,
                    message: 'Too many requests. Please wait a minute before submitting another quote request.'
                },
                { status: 429 }
            );
        }

        const body: QuoteFormData = await req.json();

        // 1. Anti-Spam Honeypot Check
        if (body.honeypot && body.honeypot.trim().length > 0) {
            // Silently pretend success to baffle automated spam bots
            return NextResponse.json<QuoteSubmissionResponse>(
                {
                    success: true,
                    requestId: `TWH-QT-${Math.floor(100000 + Math.random() * 900000)}`,
                    message: 'Quote request submitted successfully.'
                },
                { status: 200 }
            );
        }

        // 2. Server-side Validation
        const errors: Record<string, string> = {};

        if (!body.fullName || body.fullName.trim().length < 2) {
            errors.fullName = 'Full name is required (minimum 2 characters).';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!body.email || !emailRegex.test(body.email)) {
            errors.email = 'A valid work email address is required.';
        }

        if (!body.service || body.service.trim() === '') {
            errors.service = 'Please select a primary service.';
        }

        if (!body.summary || body.summary.trim().length < 15) {
            errors.summary = 'Please provide a project summary of at least 15 characters.';
        }

        if (body.summary && body.summary.length > 3000) {
            errors.summary = 'Project summary exceeds 3,000 characters limit.';
        }

        if (!body.consent) {
            errors.consent = 'You must agree to the privacy consent to submit a request.';
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json<QuoteSubmissionResponse>(
                {
                    success: false,
                    message: 'Validation failed. Please correct the highlighted errors.',
                    errors
                },
                { status: 400 }
            );
        }

        // Update rate limit timestamp
        rateLimitMap.set(clientIp, now);

        // Generate unique reference ID
        const requestId = `TWH-QT-${Math.floor(100000 + Math.random() * 900000)}`;

        // MongoDB / Lead DB store mock (ready for database insertion)
        const quoteLeadData = {
            requestId,
            fullName: body.fullName.trim(),
            companyName: body.companyName?.trim() || '',
            email: body.email.trim(),
            phone: body.phone?.trim() || '',
            country: body.country?.trim() || '',
            preferredContactMethod: body.preferredContactMethod || 'Email',
            service: body.service,
            projectType: body.projectType || 'Custom Web Application',
            industry: body.industry || 'General',
            existingUrl: body.existingUrl?.trim() || '',
            projectStatus: body.projectStatus || 'New Project',
            summary: body.summary.trim(),
            goals: body.goals?.trim() || '',
            features: body.features || [],
            platforms: body.platforms || [],
            technologyPreferences: body.technologyPreferences || [],
            referenceLinks: body.referenceLinks?.trim() || '',
            budget: body.budget || 'Prefer to discuss',
            timeline: body.timeline || 'Flexible / Undecided',
            priority: body.priority || 'Standard',
            preferredStartDate: body.preferredStartDate || '',
            additionalNotes: body.additionalNotes?.trim() || '',
            attachmentName: body.attachmentName || '',
            consent: body.consent,
            source: 'Website Get a Quote Form',
            status: 'new',
            createdAt: new Date().toISOString()
        };

        // In production, insert `quoteLeadData` into MongoDB collection `quoteRequests`
        console.log('[Get a Quote API] Lead Received:', requestId, quoteLeadData.email, quoteLeadData.service);

        return NextResponse.json<QuoteSubmissionResponse>(
            {
                success: true,
                requestId,
                message: 'Your project inquiry has been received! Our engineering team will review your specifications and get back to you within 24 hours.'
            },
            { status: 200 }
        );
    } catch (err: unknown) {
        console.error('[Get a Quote API] Submission Error:', err);
        return NextResponse.json<QuoteSubmissionResponse>(
            {
                success: false,
                message: 'An unexpected server error occurred while processing your request. Please try again later.'
            },
            { status: 500 }
        );
    }
}
