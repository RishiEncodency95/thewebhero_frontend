import Link from 'next/link';
import { CheckCircle2, ArrowRight, Layers, Home, Briefcase, FileText } from 'lucide-react';

type Props = {
    requestId?: string;
    message?: string;
    onResetForm: () => void;
};

export default function QuoteSuccess({ requestId, message, onResetForm }: Props) {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-lg text-center max-w-3xl mx-auto my-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-50">
                <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Inquiry Received
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3 mb-2">
                Thank You for Reaching Out!
            </h2>

            <p className="text-base text-slate-600 max-w-xl mx-auto mb-6 leading-relaxed">
                {message || 'Your project details have been successfully submitted to our solutions team.'}
            </p>

            {requestId && (
                <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-mono mb-8 border border-slate-800 shadow-sm">
                    <span className="text-slate-400">Reference ID:</span>
                    <span className="text-emerald-400 font-bold">{requestId}</span>
                </div>
            )}

            {/* Next Steps Timeline */}
            <div className="text-left bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    What Happens Next?
                </h3>
                <ol className="space-y-4 text-sm text-slate-700">
                    <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            1
                        </span>
                        <div>
                            <span className="font-bold text-slate-900">Technical Scope Review:</span> Our lead engineering team reviews your requirements and technical preferences.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            2
                        </span>
                        <div>
                            <span className="font-bold text-slate-900">Direct Follow-Up:</span> We reach out via your preferred contact method to clarify any ambiguous scope items or schedule a call.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            3
                        </span>
                        <div>
                            <span className="font-bold text-slate-900">Tailored Proposal:</span> You receive a detailed breakdown of milestone phases, architecture recommendation, and timeline estimate.
                        </div>
                    </li>
                </ol>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                    href="/"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-all"
                >
                    <Home className="w-4 h-4" />
                    <span>Return to Home</span>
                </Link>

                <Link
                    href="/services"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-all"
                >
                    <Layers className="w-4 h-4" />
                    <span>Explore Services</span>
                </Link>

                <Link
                    href="/portfolio"
                    className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-lg transition-all border border-slate-300"
                >
                    <Briefcase className="w-4 h-4" />
                    <span>View Portfolio</span>
                </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
                <button
                    type="button"
                    onClick={onResetForm}
                    className="text-xs text-slate-500 hover:text-emerald-600 font-medium underline transition-colors"
                >
                    Submit Another Quote Request
                </button>
            </div>
        </div>
    );
}
