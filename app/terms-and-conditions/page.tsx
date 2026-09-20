import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ChevronRight, Home, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms & Conditions | TheWebHero',
    description: 'Terms and conditions governing the use of TheWebHero website, quote inquiry workflow, and digital engineering services.',
    alternates: {
        canonical: 'https://thewebhero.com/terms-and-conditions'
    }
};

export default function TermsAndConditionsPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-16">
            {/* Breadcrumb */}
            <div className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
                    <li>
                        <Link href="/" className="inline-flex items-center hover:text-emerald-600 transition-colors">
                            <Home className="w-4 h-4 mr-1" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                    </li>
                    <li>
                        <span className="font-semibold text-slate-900">Terms & Conditions</span>
                    </li>
                </ol>
            </div>

            {/* Header */}
            <header className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Legal Terms of Service</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Terms & Conditions
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Last updated: September 20, 2026. Please read these terms carefully before accessing or using TheWebHero services and website.
                    </p>
                </div>
            </header>

            {/* Content Body */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 text-base leading-relaxed">

                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using TheWebHero website, quote forms, or related services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should refrain from using our website.
                        </p>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-emerald-600" />
                            2. Non-Binding Quote Requests
                        </h2>
                        <p>
                            Submitting a project inquiry or quote request via <Link href="/get-a-quote" className="text-emerald-600 font-bold hover:underline">/get-a-quote</Link> is free and non-binding. A quote submission does not constitute a binding commercial contract until a formal Master Services Agreement (MSA) or Statement of Work (SOW) is executed by both parties.
                        </p>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            3. Intellectual Property Rights
                        </h2>
                        <p>
                            All original content, designs, code samples, graphics, and trademarks published on TheWebHero website are the intellectual property of TheWebHero, protected under international copyright and trademark laws.
                        </p>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-emerald-600" />
                            4. Limitation of Liability & Contact
                        </h2>
                        <p>
                            TheWebHero shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm text-slate-800">
                            Legal Contact: <a href="mailto:legal@thewebhero.com" className="text-emerald-600 font-bold hover:underline">legal@thewebhero.com</a>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
