import { QuoteFormData } from '@/app/types/quote';
import { CONTACT_METHODS } from '@/app/lib/quote-options';
import { User, Building2, Mail, Phone, Globe, MessageSquare } from 'lucide-react';

type Props = {
    formData: QuoteFormData;
    onChange: (fields: Partial<QuoteFormData>) => void;
    errors: Record<string, string>;
    onNext: () => void;
};

export default function QuoteStepContact({ formData, onChange, errors, onNext }: Props) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="text-xl font-bold text-slate-900">Step 1: Contact Information</h2>
                <p className="text-sm text-slate-600 mt-1">
                    Please provide your contact details so our scope review team can connect with you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <User className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={(e) => onChange({ fullName: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                                errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                            }`}
                        />
                    </div>
                    {errors.fullName && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium" id="fullName-error">
                            {errors.fullName}
                        </p>
                    )}
                </div>

                {/* Company Name */}
                <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Company / Organization Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName || ''}
                            onChange={(e) => onChange({ companyName: e.target.value })}
                            placeholder="e.g. Acme Innovations"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                {/* Work Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Work Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={(e) => onChange({ email: e.target.value })}
                            placeholder="alex@company.com"
                            className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all ${
                                errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                            }`}
                        />
                    </div>
                    {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-600 font-medium" id="email-error">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone Number */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Phone Number
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Phone className="w-5 h-5" />
                        </div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone || ''}
                            onChange={(e) => onChange({ phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                {/* Country / Region */}
                <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Country / Region
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <Globe className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country || ''}
                            onChange={(e) => onChange({ country: e.target.value })}
                            placeholder="e.g. India, United States, UAE"
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {CONTACT_METHODS.map((method) => (
                            <button
                                key={method}
                                type="button"
                                onClick={() => onChange({ preferredContactMethod: method })}
                                className={`flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg border text-sm font-medium transition-all ${
                                    formData.preferredContactMethod === method
                                        ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-2 ring-emerald-500/20'
                                        : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                                }`}
                            >
                                <MessageSquare className="w-4 h-4" />
                                <span>{method}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-6 flex justify-end">
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer"
                >
                    Continue to Project Scope →
                </button>
            </div>
        </form>
    );
}
