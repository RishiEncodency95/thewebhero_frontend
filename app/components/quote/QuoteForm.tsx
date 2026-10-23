'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuoteFormData, QuoteStep, QuoteSubmissionResponse } from '@/app/types/quote';
import { getPreselectedQuoteOptions, type QuoteCatalog } from '@/app/lib/quote-options';
import { submitLead } from '@/app/lib/api';
import QuoteProgress from './QuoteProgress';
import QuoteStepContact from './QuoteStepContact';
import QuoteStepProject from './QuoteStepProject';
import QuoteStepDetails from './QuoteStepDetails';
import QuoteStepBudget from './QuoteStepBudget';
import QuoteStepReview from './QuoteStepReview';
import QuoteSuccess from './QuoteSuccess';

const initialFormData: QuoteFormData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    preferredContactMethod: 'Email',

    service: '',
    projectType: 'Custom Web Application',
    industry: 'General / Cross-Industry',
    existingUrl: '',
    projectStatus: 'New Project',

    summary: '',
    goals: '',
    features: [],
    platforms: ['Web Desktop', 'Web Mobile (Responsive)'],
    technologyPreferences: ['Next.js / React', 'Node.js / Express', 'TypeScript'],
    referenceLinks: '',

    budget: '₹1–5 Lakh',
    timeline: '1 – 2 Months',
    priority: 'Standard',
    preferredStartDate: '',

    additionalNotes: '',
    attachmentName: undefined,
    consent: false,
    honeypot: ''
};

/** Which wizard step each field lives on, for routing server-side errors. */
const FIELD_STEP: Partial<Record<keyof QuoteFormData, QuoteStep>> = {
    fullName: 1, companyName: 1, email: 1, phone: 1, country: 1, preferredContactMethod: 1,
    service: 2, projectType: 2, industry: 2, existingUrl: 2, projectStatus: 2,
    summary: 3, goals: 3, features: 3, platforms: 3, technologyPreferences: 3, referenceLinks: 3,
    budget: 4, timeline: 4, priority: 4, preferredStartDate: 4,
    additionalNotes: 5, consent: 5,
};

export default function QuoteForm({ catalog }: { catalog: QuoteCatalog }) {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState<QuoteStep>(1);
    // ?service=, ?solution=, ?technology=, ?industry= preselect fields on first render.
    const [formData, setFormData] = useState<QuoteFormData>(() => {
        const params = {
            service: searchParams.get('service') || undefined,
            solution: searchParams.get('solution') || undefined,
            technology: searchParams.get('technology') || undefined,
            industry: searchParams.get('industry') || undefined,
        };
        if (!params.service && !params.solution && !params.technology && !params.industry) return initialFormData;
        const preselected = getPreselectedQuoteOptions(params, catalog);
        return {
            ...initialFormData,
            service: preselected.service || initialFormData.service,
            industry: preselected.industry || initialFormData.industry,
            summary: preselected.summary || '',
        };
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submissionResult, setSubmissionResult] = useState<QuoteSubmissionResponse | null>(null);


    const updateFields = (fields: Partial<QuoteFormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
        // Clear errors for modified fields
        const updatedKeys = Object.keys(fields);
        setErrors(prev => {
            const next = { ...prev };
            updatedKeys.forEach(k => delete next[k]);
            return next;
        });
    };

    // Step Validation Logic
    const validateStep = (step: QuoteStep): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.fullName || formData.fullName.trim().length < 2) {
                newErrors.fullName = 'Full Name is required (minimum 2 characters).';
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!formData.email || !emailRegex.test(formData.email)) {
                newErrors.email = 'Please provide a valid work email address.';
            }
        }

        if (step === 2) {
            if (!formData.service || formData.service.trim() === '') {
                newErrors.service = 'Please select a primary service.';
            }
        }

        if (step === 3) {
            if (!formData.summary || formData.summary.trim().length < 15) {
                newErrors.summary = 'Please describe your project summary (minimum 15 characters).';
            }
        }

        if (step === 5) {
            if (!formData.consent) {
                newErrors.consent = 'You must accept the privacy consent to submit a request.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => (prev < 5 ? ((prev + 1) as QuoteStep) : prev));
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setCurrentStep(prev => (prev > 1 ? ((prev - 1) as QuoteStep) : prev));
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    const handleJumpToStep = (step: QuoteStep) => {
        setCurrentStep(step);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    // Submit handler
    const handleSubmit = async () => {
        if (!validateStep(5)) return;

        setIsSubmitting(true);
        setErrors({});

        const result = await submitLead('/quote-requests', formData);

        if (result.ok) {
            setSubmissionResult({
                success: true,
                requestId: result.referenceId,
                message: 'Thank you! Your project request has been received. Our team will review it and get back to you shortly.',
            });
            window.scrollTo({ top: 200, behavior: 'smooth' });
        } else {
            setErrors({ ...result.fieldErrors, submit: result.message });
            // Send the visitor back to the earliest step with a rejected field.
            const steps = Object.keys(result.fieldErrors)
                .map((field) => FIELD_STEP[field as keyof QuoteFormData])
                .filter((step): step is QuoteStep => Boolean(step));
            if (steps.length) setCurrentStep(Math.min(...steps) as QuoteStep);
        }
        setIsSubmitting(false);
    };

    const handleResetForm = () => {
        setFormData(initialFormData);
        setSubmissionResult(null);
        setCurrentStep(1);
        setErrors({});
    };

    if (submissionResult?.success) {
        return (
            <QuoteSuccess
                requestId={submissionResult.requestId}
                message={submissionResult.message}
                onResetForm={handleResetForm}
            />
        );
    }

    return (
        <div className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(35,75,125,0.25)]">
            <QuoteProgress currentStep={currentStep} onStepClick={handleJumpToStep} />

            <div className="p-6 sm:p-8 lg:p-10">
                {currentStep === 1 && (
                    <QuoteStepContact
                        formData={formData}
                        onChange={updateFields}
                        errors={errors}
                        onNext={handleNext}
                    />
                )}

                {currentStep === 2 && (
                    <QuoteStepProject
                        formData={formData}
                        onChange={updateFields}
                        errors={errors}
                        onNext={handleNext}
                        onBack={handleBack}
                        serviceOptions={catalog.services.map((s) => s.title)}
                        industryOptions={catalog.industries.map((i) => i.name)}
                    />
                )}

                {currentStep === 3 && (
                    <QuoteStepDetails
                        formData={formData}
                        onChange={updateFields}
                        errors={errors}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                )}

                {currentStep === 4 && (
                    <QuoteStepBudget
                        formData={formData}
                        onChange={updateFields}
                        errors={errors}
                        onNext={handleNext}
                        onBack={handleBack}
                    />
                )}

                {currentStep === 5 && (
                    <QuoteStepReview
                        formData={formData}
                        onChange={updateFields}
                        onJumpToStep={handleJumpToStep}
                        onSubmit={handleSubmit}
                        onBack={handleBack}
                        isSubmitting={isSubmitting}
                        errors={errors}
                    />
                )}
            </div>
        </div>
    );
}
