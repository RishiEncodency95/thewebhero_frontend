import { QuoteFormData } from '@/app/types/quote';
import { SERVICE_OPTIONS, PROJECT_TYPES, INDUSTRY_OPTIONS } from '@/app/lib/quote-options';
import { Code2, Layers, Building, Link2, Sparkles } from 'lucide-react';

type Props = {
    formData: QuoteFormData;
    onChange: (fields: Partial<QuoteFormData>) => void;
    errors: Record<string, string>;
    onNext: () => void;
    onBack: () => void;
};

export default function QuoteStepProject({ formData, onChange, errors, onNext, onBack }: Props) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Step 2: Project Scope & Domain</h2>
                <p className="text-sm text-slate-600 mt-1">
                    Select your primary service interest and business classification.
                </p>
            </div>

            <div className="space-y-6">
                {/* Primary Service */}
                <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Primary Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Code2 className="w-5 h-5" />
                        </div>
                        <select
                            id="service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={(e) => onChange({ service: e.target.value })}
                            className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                                errors.service ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                            }`}
                        >
                            <option value="">-- Select Primary Service --</option>
                            {SERVICE_OPTIONS.map((srv) => (
                                <option key={srv} value={srv}>
                                    {srv}
                                </option>
                            ))}
                        </select>
                    </div>
                    {errors.service && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium" id="service-error">
                            {errors.service}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-slate-800 mb-1.5">
                            Project Deliverable Type
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Layers className="w-5 h-5" />
                            </div>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={(e) => onChange({ projectType: e.target.value })}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                            >
                                {PROJECT_TYPES.map((pt) => (
                                    <option key={pt} value={pt}>
                                        {pt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Business / Industry */}
                    <div>
                        <label htmlFor="industry" className="block text-sm font-semibold text-slate-800 mb-1.5">
                            Industry / Vertical
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Building className="w-5 h-5" />
                            </div>
                            <select
                                id="industry"
                                name="industry"
                                value={formData.industry}
                                onChange={(e) => onChange({ industry: e.target.value })}
                                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                            >
                                <option value="General / Cross-Industry">General / Cross-Industry</option>
                                {INDUSTRY_OPTIONS.map((ind) => (
                                    <option key={ind} value={ind}>
                                        {ind}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Project Status radio selection */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                        Project Nature
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {(
                            [
                                { id: 'New Project', title: 'New Greenfield Project', desc: 'Building from scratch' },
                                { id: 'Existing Product Modernization', title: 'Product Modernization', desc: 'Redesign / rebuild' },
                                { id: 'Maintenance / Support', title: 'Support & Scale', desc: 'Ongoing maintenance' },
                            ] as const
                        ).map((statusItem) => (
                            <button
                                key={statusItem.id}
                                type="button"
                                onClick={() => onChange({ projectStatus: statusItem.id })}
                                className={`text-left p-3.5 rounded-lg border transition-all ${
                                    formData.projectStatus === statusItem.id
                                        ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20'
                                        : 'bg-slate-50 border-slate-300 hover:bg-slate-100'
                                }`}
                            >
                                <div className="flex items-center space-x-2">
                                    <Sparkles className={`w-4 h-4 ${formData.projectStatus === statusItem.id ? 'text-emerald-600' : 'text-slate-400'}`} />
                                    <span className="font-semibold text-sm text-slate-900">{statusItem.title}</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-1">{statusItem.desc}</p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Existing URL */}
                <div>
                    <label htmlFor="existingUrl" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Existing Website or Application URL (Optional)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Link2 className="w-5 h-5" />
                        </div>
                        <input
                            type="url"
                            id="existingUrl"
                            name="existingUrl"
                            value={formData.existingUrl || ''}
                            onChange={(e) => onChange({ existingUrl: e.target.value })}
                            placeholder="https://example.com"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
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
                    Continue to Details →
                </button>
            </div>
        </form>
    );
}
