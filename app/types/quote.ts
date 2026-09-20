export type QuoteStep = 1 | 2 | 3 | 4 | 5;

export type QuoteFormData = {
    // Step 1: Contact Info
    fullName: string;
    companyName?: string;
    email: string;
    phone?: string;
    country?: string;
    preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';

    // Step 2: Project Type & Domain
    service: string;
    projectType: string;
    industry: string;
    existingUrl?: string;
    projectStatus: 'New Project' | 'Existing Product Modernization' | 'Maintenance / Support';

    // Step 3: Detailed Requirements
    summary: string;
    goals?: string;
    features?: string[];
    platforms?: string[];
    technologyPreferences?: string[];
    referenceLinks?: string;

    // Step 4: Budget & Timeline
    budget: string;
    timeline: string;
    priority: 'Standard' | 'Urgent' | 'Flexible';
    preferredStartDate?: string;

    // Step 5: Attachments, Consent & Honeypot
    additionalNotes?: string;
    attachmentName?: string;
    consent: boolean;
    honeypot?: string; // Hidden spam prevention field
};

export type QuoteSubmissionResponse = {
    success: boolean;
    requestId?: string;
    message?: string;
    errors?: Record<string, string>;
};
