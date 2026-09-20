import { QuoteFormData, QuoteStep } from '@/app/types/quote';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE_BYTES } from '@/app/lib/quote-options';
import { Edit2, Paperclip, Upload, X, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

type Props = {
    formData: QuoteFormData;
    onChange: (fields: Partial<QuoteFormData>) => void;
    onJumpToStep: (step: QuoteStep) => void;
    onSubmit: () => void;
    onBack: () => void;
    isSubmitting: boolean;
    errors: Record<string, string>;
};

export default function QuoteStepReview({
    formData,
    onChange,
    onJumpToStep,
    onSubmit,
    onBack,
    isSubmitting,
    errors
}: Props) {
    const [fileError, setFileError] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFileError(null);
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file size
        if (file.size > MAX_FILE_SIZE_BYTES) {
            setFileError('File size exceeds the 10MB limit. Please upload a smaller file.');
            return;
        }

        // Check file extension
        const ext = '.' + file.name.split('.').pop()?.toLowerCase();
        if (!ALLOWED_FILE_TYPES.includes(ext)) {
            setFileError(`Invalid file format (${ext}). Allowed formats: ${ALLOWED_FILE_TYPES.join(', ')}`);
            return;
        }

        onChange({ attachmentName: file.name });
    };

    const removeFile = () => {
        onChange({ attachmentName: undefined });
        setFileError(null);
    };

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmitForm} className="space-y-6">
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Step 5: Review & Submit Quote Request</h2>
                <p className="text-sm text-slate-600 mt-1">
                    Please review your information below before sending your project inquiry to our team.
                </p>
            </div>

            {/* Structured Summary Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-6">
                {/* Section 1: Contact Info */}
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 1 — Contact Info</span>
                        <h3 className="text-base font-bold text-slate-900">{formData.fullName || 'Not provided'}</h3>
                        <p className="text-sm text-slate-600">
                            {formData.email} • {formData.phone || 'No phone'} • {formData.companyName || 'Individual'} ({formData.country || 'Global'})
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Preferred Contact: {formData.preferredContactMethod}</p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onJumpToStep(1)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-2.5 py-1.5 rounded-md hover:bg-emerald-50 transition-colors"
                    >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </button>
                </div>

                {/* Section 2: Project Scope */}
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 2 — Project Scope</span>
                        <h3 className="text-base font-bold text-slate-900">{formData.service || 'Not selected'}</h3>
                        <p className="text-sm text-slate-600">
                            Type: {formData.projectType} • Industry: {formData.industry} • Nature: {formData.projectStatus}
                        </p>
                        {formData.existingUrl && (
                            <p className="text-xs text-slate-500 mt-1">Existing URL: {formData.existingUrl}</p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onJumpToStep(2)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-2.5 py-1.5 rounded-md hover:bg-emerald-50 transition-colors"
                    >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </button>
                </div>

                {/* Section 3: Details */}
                <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                    <div className="max-w-xl">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 3 — Technical Details</span>
                        <p className="text-sm font-medium text-slate-900 mt-1 line-clamp-3">
                            "{formData.summary || 'No summary provided'}"
                        </p>
                        {formData.platforms && formData.platforms.length > 0 && (
                            <p className="text-xs text-slate-600 mt-1">Platforms: {formData.platforms.join(', ')}</p>
                        )}
                        {formData.technologyPreferences && formData.technologyPreferences.length > 0 && (
                            <p className="text-xs text-slate-600 mt-0.5">Stack: {formData.technologyPreferences.join(', ')}</p>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => onJumpToStep(3)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-2.5 py-1.5 rounded-md hover:bg-emerald-50 transition-colors shrink-0 ml-4"
                    >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </button>
                </div>

                {/* Section 4: Budget & Timeline */}
                <div className="flex items-start justify-between">
                    <div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Step 4 — Budget & Timeline</span>
                        <p className="text-sm font-bold text-slate-900 mt-1">
                            Budget: {formData.budget} | Timeline: {formData.timeline}
                        </p>
                        <p className="text-xs text-slate-600 mt-0.5">
                            Priority: {formData.priority} {formData.preferredStartDate ? `• Start: ${formData.preferredStartDate}` : ''}
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => onJumpToStep(4)}
                        className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 bg-white border border-slate-200 px-2.5 py-1.5 rounded-md hover:bg-emerald-50 transition-colors"
                    >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                    </button>
                </div>
            </div>

            {/* Optional File Attachment */}
            <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-800">
                    <span className="inline-flex items-center gap-1.5">
                        <Paperclip className="w-4 h-4 text-emerald-600" />
                        Attach Project Specification / Wireframe (Optional)
                    </span>
                </label>

                {formData.attachmentName ? (
                    <div className="flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <div className="flex items-center space-x-2 text-emerald-900 text-sm font-medium">
                            <Paperclip className="w-4 h-4 text-emerald-600" />
                            <span>{formData.attachmentName}</span>
                        </div>
                        <button
                            type="button"
                            onClick={removeFile}
                            className="p-1 text-emerald-700 hover:text-rose-600 transition-colors"
                            aria-label="Remove attachment"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ) : (
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center hover:border-emerald-500 transition-colors bg-slate-50">
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-600">
                            Upload RFP, BRD, Wireframe, or PDF specs (Max 10MB)
                        </p>
                        <label className="mt-2 inline-block px-3 py-1.5 bg-white border border-slate-300 text-slate-700 font-semibold text-xs rounded-md shadow-xs cursor-pointer hover:bg-slate-100">
                            Select File
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept={ALLOWED_FILE_TYPES.join(',')}
                                className="sr-only"
                            />
                        </label>
                        <p className="text-[11px] text-slate-400 mt-1">
                            Supported: PDF, DOCX, XLSX, PPTX, PNG, JPG, WEBP, ZIP
                        </p>
                    </div>
                )}

                {fileError && (
                    <p className="text-xs text-rose-600 font-medium">{fileError}</p>
                )}
            </div>

            {/* Additional Notes */}
            <div>
                <label htmlFor="additionalNotes" className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Additional Notes or Comments (Optional)
                </label>
                <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    rows={2}
                    value={formData.additionalNotes || ''}
                    onChange={(e) => onChange({ additionalNotes: e.target.value })}
                    placeholder="Any preferred timezone for discussions, NDA requirements, or specific tools..."
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                />
            </div>

            {/* Consent Checkbox */}
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => onChange({ consent: e.target.checked })}
                        className="h-4 h-4 mt-0.5 text-emerald-600 border-slate-300 rounded focus:ring-emerald-500"
                    />
                    <label htmlFor="consent" className="text-xs text-slate-700 leading-relaxed cursor-pointer">
                        <span className="font-bold text-slate-900">Consent & Privacy Agreement:</span> I agree to allow TheWebHero team to store and process my submitted project information for quote evaluation and communication purposes.
                    </label>
                </div>
                {errors.consent && (
                    <p className="mt-2 text-xs text-rose-600 font-medium pl-7">
                        {errors.consent}
                    </p>
                )}
            </div>

            {/* Hidden Honeypot Input for Anti-Spam */}
            <input
                type="text"
                name="honeypot"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot || ''}
                onChange={(e) => onChange({ honeypot: e.target.value })}
                className="hidden"
                aria-hidden="true"
            />

            {/* Submission Error Banner */}
            {errors.submit && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-lg flex items-center space-x-3 text-rose-700 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                    <span>{errors.submit}</span>
                </div>
            )}

            <div className="pt-6 flex items-center justify-between border-t border-slate-200">
                <button
                    type="button"
                    onClick={onBack}
                    disabled={isSubmitting}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg transition-all text-sm disabled:opacity-50"
                >
                    ← Back
                </button>

                <button
                    type="submit"
                    disabled={isSubmitting || !formData.consent}
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-base"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Submitting Quote Request...</span>
                        </>
                    ) : (
                        <>
                            <ShieldCheck className="w-5 h-5" />
                            <span>Submit Quote Request</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
