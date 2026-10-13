import { QuoteStep } from '@/app/types/quote';
import { Check } from 'lucide-react';

type QuoteProgressProps = {
    currentStep: QuoteStep;
    onStepClick: (step: QuoteStep) => void;
};

const STEPS: { number: QuoteStep; label: string }[] = [
    { number: 1, label: 'Contact' },
    { number: 2, label: 'Project' },
    { number: 3, label: 'Details' },
    { number: 4, label: 'Budget' },
    { number: 5, label: 'Review' },
];

/** 5-step progress. Completed steps are clickable to go back and edit. */
export default function QuoteProgress({ currentStep, onStepClick }: QuoteProgressProps) {
    const percent = ((currentStep - 1) / (STEPS.length - 1)) * 100;

    return (
        <div className="border-b border-slate-100 bg-gradient-to-r from-purple-50/60 via-white to-blue-50/60 px-5 py-5 sm:px-8">
            {/* Desktop / tablet */}
            <ol className="relative hidden grid-cols-5 sm:grid">
                {/* Rail behind the dots */}
                <div className="absolute left-[10%] right-[10%] top-4 h-0.5 rounded-full bg-slate-200" aria-hidden="true">
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                    />
                </div>
                {STEPS.map((step) => {
                    const done = step.number < currentStep;
                    const current = step.number === currentStep;
                    return (
                        <li key={step.number} className="relative flex justify-center">
                            <button
                                type="button"
                                onClick={() => done && onStepClick(step.number)}
                                disabled={!done}
                                aria-current={current ? 'step' : undefined}
                                className="group flex flex-col items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:cursor-default"
                            >
                                <span
                                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold transition-all ${
                                        done
                                            ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-sm group-hover:scale-110'
                                            : current
                                              ? 'bg-white text-violet-700 shadow-md ring-4 ring-violet-200'
                                              : 'border border-slate-300 bg-white text-slate-400'
                                    }`}
                                >
                                    {done ? <Check className="h-4 w-4" /> : step.number}
                                </span>
                                <span className={`text-[12.5px] font-semibold ${current ? 'text-violet-700' : done ? 'text-slate-700 group-hover:text-violet-700' : 'text-slate-400'}`}>
                                    {step.label}
                                </span>
                            </button>
                        </li>
                    );
                })}
            </ol>

            {/* Mobile */}
            <div className="sm:hidden">
                <div className="mb-2 flex items-center justify-between text-[12px] font-semibold">
                    <span className="text-violet-700">
                        Step {currentStep} of {STEPS.length}
                    </span>
                    <span className="text-slate-700">{STEPS[currentStep - 1].label}</span>
                </div>
                <div
                    className="h-2 w-full overflow-hidden rounded-full bg-slate-100"
                    role="progressbar"
                    aria-valuenow={currentStep}
                    aria-valuemin={1}
                    aria-valuemax={STEPS.length}
                    aria-label={`Step ${currentStep} of ${STEPS.length}: ${STEPS[currentStep - 1].label}`}
                >
                    <div
                        className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 transition-all duration-300"
                        style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
