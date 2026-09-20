import { QuoteFormData } from '@/app/types/quote';
import { BUDGET_RANGES, TIMELINE_RANGES, PRIORITY_OPTIONS } from '@/app/lib/quote-options';
import { Wallet, Clock, AlertTriangle, Calendar } from 'lucide-react';

type Props = {
    formData: QuoteFormData;
    onChange: (fields: Partial<QuoteFormData>) => void;
    errors: Record<string, string>;
    onNext: () => void;
    onBack: () => void;
};

export default function QuoteStepBudget({ formData, onChange, errors, onNext, onBack }: Props) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Step 4: Budget & Timeline Expectations</h2>
                <p className="text-sm text-slate-600 mt-1">
                    Providing estimated ranges helps us structure suitable development phases and team composition.
                </p>
            </div>

            <div className="space-y-6">
                {/* Budget Range */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                        <span className="inline-flex items-center gap-1.5">
                            <Wallet className="w-4 h-4 text-emerald-600" />
                            Estimated Project Budget
                        </span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {BUDGET_RANGES.map((range) => {
                            const isSelected = formData.budget === range;
                            return (
                                <button
                                    key={range}
                                    type="button"
                                    onClick={() => onChange({ budget: range })}
                                    className={`py-3 px-3.5 rounded-lg border text-xs sm:text-sm font-semibold text-center transition-all ${
                                        isSelected
                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20 shadow-sm'
                                            : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                                    }`}
                                >
                                    {range}
                                </button>
                            );
                        })}
                    </div>
                    <p className="mt-2 text-xs text-slate-500">
                        * Note: Selecting a range is for scope estimation only and does not commit you to final pricing.
                    </p>
                </div>

                {/* Timeline Range */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                        <span className="inline-flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-emerald-600" />
                            Expected Delivery Timeline
                        </span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {TIMELINE_RANGES.map((tRange) => {
                            const isSelected = formData.timeline === tRange;
                            return (
                                <button
                                    key={tRange}
                                    type="button"
                                    onClick={() => onChange({ timeline: tRange })}
                                    className={`py-3 px-3.5 rounded-lg border text-xs sm:text-sm font-medium text-center transition-all ${
                                        isSelected
                                            ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20 shadow-sm'
                                            : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                                    }`}
                                >
                                    {tRange}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Project Priority */}
                    <div>
                        <label className="block text-sm font-semibold text-slate-800 mb-2">
                            <span className="inline-flex items-center gap-1.5">
                                <AlertTriangle className="w-4 h-4 text-emerald-600" />
                                Project Urgency / Priority
                            </span>
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {PRIORITY_OPTIONS.map((p) => {
                                const isSelected = formData.priority === p;
                                return (
                                    <button
                                        key={p}
                                        type="button"
                                        onClick={() => onChange({ priority: p })}
                                        className={`py-2 px-3 rounded-lg border text-xs font-semibold transition-all ${
                                            isSelected
                                                ? 'bg-slate-900 text-emerald-400 border-slate-900 shadow-sm'
                                                : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                                        }`}
                                    >
                                        {p}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Target Start Date */}
                    <div>
                        <label htmlFor="preferredStartDate" className="block text-sm font-semibold text-slate-800 mb-1.5">
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                Target Start Date (Optional)
                            </span>
                        </label>
                        <input
                            type="date"
                            id="preferredStartDate"
                            name="preferredStartDate"
                            value={formData.preferredStartDate || ''}
                            onChange={(e) => onChange({ preferredStartDate: e.target.value })}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                    </div>
                </div>
            </div>

            <div className="pt-6 flex items-center justify-between border-t border-slate-200">
                <button
                    type="button"
                    onClick={onBack}
                    className="px-5 py-2.5 border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg transition-all text-sm"
                >
                    ← Back
                </button>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer text-sm"
                >
                    Review & Attach Files →
                </button>
            </div>
        </form>
    );
}
