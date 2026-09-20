import { QuoteFormData } from '@/app/types/quote';
import { PLATFORM_OPTIONS, TECH_PREFERENCES_OPTIONS } from '@/app/lib/quote-options';
import { FileText, Target, Monitor, Cpu, ExternalLink } from 'lucide-react';

type Props = {
    formData: QuoteFormData;
    onChange: (fields: Partial<QuoteFormData>) => void;
    errors: Record<string, string>;
    onNext: () => void;
    onBack: () => void;
};

export default function QuoteStepDetails({ formData, onChange, errors, onNext, onBack }: Props) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    const togglePlatform = (platform: string) => {
        const current = formData.platforms || [];
        const next = current.includes(platform)
            ? current.filter((p) => p !== platform)
            : [...current, platform];
        onChange({ platforms: next });
    };

    const toggleTechPref = (tech: string) => {
        const current = formData.technologyPreferences || [];
        const next = current.includes(tech)
            ? current.filter((t) => t !== tech)
            : [...current, tech];
        onChange({ technologyPreferences: next });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Step 3: Technical Details & Requirements</h2>
                <p className="text-sm text-slate-600 mt-1">
                    Help us understand what your application needs to do, target users, and key features.
                </p>
            </div>

            <div className="space-y-6">
                {/* Project Summary */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <label htmlFor="summary" className="block text-sm font-semibold text-slate-800">
                            Project Summary & Core Objectives <span className="text-rose-500">*</span>
                        </label>
                        <span className="text-xs text-slate-500">
                            {(formData.summary || '').length} / 3000 chars
                        </span>
                    </div>
                    <div className="relative">
                        <textarea
                            id="summary"
                            name="summary"
                            required
                            rows={4}
                            value={formData.summary}
                            onChange={(e) => onChange({ summary: e.target.value })}
                            placeholder="Describe your project, target audience, core workflow, and key problem you want to solve..."
                            className={`w-full p-3.5 bg-slate-50 border rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                                errors.summary ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                            }`}
                        />
                    </div>
                    {errors.summary ? (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium" id="summary-error">
                            {errors.summary}
                        </p>
                    ) : (
                        <p className="mt-1.5 text-xs text-slate-500">
                            Please provide at least 15 characters describing your project scope.
                        </p>
                    )}
                </div>

                {/* Main Goals */}
                <div>
                    <label htmlFor="goals" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        <span className="inline-flex items-center gap-1.5">
                            <Target className="w-4 h-4 text-emerald-600" />
                            Main Goals & Desired Outcomes
                        </span>
                    </label>
                    <input
                        type="text"
                        id="goals"
                        name="goals"
                        value={formData.goals || ''}
                        onChange={(e) => onChange({ goals: e.target.value })}
                        placeholder="e.g. Increase conversion rate, automate customer onboarding, handle 50k monthly users"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                </div>

                {/* Target Platforms (Multi-select) */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                        <span className="inline-flex items-center gap-1.5">
                            <Monitor className="w-4 h-4 text-emerald-600" />
                            Target Platforms (Select all that apply)
                        </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {PLATFORM_OPTIONS.map((plat) => {
                            const isSelected = (formData.platforms || []).includes(plat);
                            return (
                                <button
                                    key={plat}
                                    type="button"
                                    onClick={() => togglePlatform(plat)}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                                        isSelected
                                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                                    }`}
                                >
                                    {isSelected ? '✓ ' : '+ '}
                                    {plat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Technology Preferences (Multi-select) */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                        <span className="inline-flex items-center gap-1.5">
                            <Cpu className="w-4 h-4 text-emerald-600" />
                            Technology & Stack Preferences
                        </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {TECH_PREFERENCES_OPTIONS.map((tech) => {
                            const isSelected = (formData.technologyPreferences || []).includes(tech);
                            return (
                                <button
                                    key={tech}
                                    type="button"
                                    onClick={() => toggleTechPref(tech)}
                                    className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                                        isSelected
                                            ? 'bg-slate-900 text-emerald-400 border-slate-900 shadow-sm'
                                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                                    }`}
                                >
                                    {isSelected ? '✓ ' : ''}
                                    {tech}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Reference Links */}
                <div>
                    <label htmlFor="referenceLinks" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        <span className="inline-flex items-center gap-1.5">
                            <ExternalLink className="w-4 h-4 text-emerald-600" />
                            Reference Websites / Benchmark Apps
                        </span>
                    </label>
                    <input
                        type="text"
                        id="referenceLinks"
                        name="referenceLinks"
                        value={formData.referenceLinks || ''}
                        onChange={(e) => onChange({ referenceLinks: e.target.value })}
                        placeholder="e.g. Stripe.com for design style, Notion for dashboard UX"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
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
                    Continue to Budget & Timeline →
                </button>
            </div>
        </form>
    );
}
