import { QuoteStep } from '@/app/types/quote';
import { Check } from 'lucide-react';

type QuoteProgressProps = {
    currentStep: QuoteStep;
    onStepClick: (step: QuoteStep) => void;
};

const STEPS: { number: QuoteStep; label: string; shortLabel: string }[] = [
    { number: 1, label: 'Contact Information', shortLabel: 'Contact' },
    { number: 2, label: 'Project Scope', shortLabel: 'Project' },
    { number: 3, label: 'Technical Details', shortLabel: 'Details' },
    { number: 4, label: 'Budget & Timeline', shortLabel: 'Budget' },
    { number: 5, label: 'Review & Submit', shortLabel: 'Review' },
];

export default function QuoteProgress({ currentStep, onStepClick }: QuoteProgressProps) {
    return (
        <div className="bg-white border-b border-slate-200 py-4 px-4 sm:px-6 lg:px-8 mb-8 sticky top-0 z-20 shadow-sm">
            <div className="max-w-4xl mx-auto">
                {/* Desktop Stepper */}
                <ol className="hidden md:flex items-center justify-between w-full">
                    {STEPS.map((step, idx) => {
                        const isCompleted = step.number < currentStep;
                        const isCurrent = step.number === currentStep;

                        return (
                            <li key={step.number} className="flex items-center relative">
                                <button
                                    type="button"
                                    onClick={() => isCompleted && onStepClick(step.number)}
                                    disabled={!isCompleted}
                                    aria-current={isCurrent ? 'step' : undefined}
                                    className={`flex items-center space-x-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${
                                        isCurrent
                                            ? 'text-emerald-600'
                                            : isCompleted
                                            ? 'text-slate-800 hover:text-emerald-600 cursor-pointer'
                                            : 'text-slate-400 cursor-not-allowed'
                                    }`}
                                >
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                                            isCompleted
                                                ? 'bg-emerald-600 text-white shadow-sm'
                                                : isCurrent
                                                ? 'bg-emerald-500 text-white ring-4 ring-emerald-100 shadow-md'
                                                : 'bg-slate-100 text-slate-500 border border-slate-300'
                                        }`}
                                    >
                                        {isCompleted ? <Check className="w-4 h-4" /> : step.number}
                                    </span>
                                    <span>{step.label}</span>
                                </button>

                                {idx < STEPS.length - 1 && (
                                    <div
                                        className={`h-0.5 w-8 lg:w-16 mx-2 transition-colors ${
                                            step.number < currentStep ? 'bg-emerald-500' : 'bg-slate-200'
                                        }`}
                                        aria-hidden="true"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ol>

                {/* Mobile Stepper Header & Progress Bar */}
                <div className="md:hidden">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 mb-2">
                        <span className="text-emerald-600 font-bold">
                            Step {currentStep} of {STEPS.length}
                        </span>
                        <span className="text-slate-900 font-medium">
                            {STEPS[currentStep - 1].label}
                        </span>
                    </div>

                    <div
                        className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={currentStep}
                        aria-valuemin={1}
                        aria-valuemax={5}
                        aria-label={`Form Step ${currentStep} of 5: ${STEPS[currentStep - 1].label}`}
                    >
                        <div
                            className="bg-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
