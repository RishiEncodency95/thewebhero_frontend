'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuoteFormData, QuoteStep, QuoteSubmissionResponse } from '@/app/types/quote';
import { getPreselectedQuoteOptions } from '@/app/lib/quote-options';
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

export default function QuoteForm() {
    const searchParams = useSearchParams();
    const [currentStep, setCurrentStep] = useState<QuoteStep>(1);
    const [formData, setFormData] = useState<QuoteFormData>(initialFormData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submissionResult, setSubmissionResult] = useState<QuoteSubmissionResponse | null>(null);

    // Read URL query parameters for preselection
    useEffect(() => {
        const serviceParam = searchParams.get('service') || undefined;
        const solutionParam = searchParams.get('solution') || undefined;
        const techParam = searchParams.get('technology') || undefined;
        const indParam = searchParams.get('industry') || undefined;

        if (serviceParam || solutionParam || techParam || indParam) {
            const preselected = getPreselectedQuoteOptions({
                service: serviceParam,
                solution: solutionParam,
                technology: techParam,
                industry: indParam
            });

            setFormData(prev => ({
                ...prev,
                service: preselected.service || prev.service,
                industry: preselected.industry || prev.industry,
                summary: prev.summary || preselected.summary || ''
            }));
        }
    }, [searchParams]);

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

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data: QuoteSubmissionResponse = await res.json();

            if (res.ok && data.success) {
                setSubmissionResult(data);
                window.scrollTo({ top: 200, behavior: 'smooth' });
            } else {
                setErrors({
                    submit: data.message || 'Submission failed. Please check your information and try again.'
                });
                if (data.errors) {
                    setErrors(prev => ({ ...prev, ...data.errors }));
                }
            }
        } catch (err: unknown) {
            console.error('[QuoteForm] Network Error:', err);
            setErrors({
                submit: 'Unable to connect to the server. Please check your internet connection.'
            });
        } finally {
            setIsSubmitting(false);
        }
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
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto my-8">
            <QuoteProgress currentStep={currentStep} onStepClick={handleJumpToStep} />

            <div className="p-6 sm:p-10">
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
