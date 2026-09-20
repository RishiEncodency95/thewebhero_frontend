import { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, ChevronRight, Home, Lock, Eye, FileText, Server, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | TheWebHero',
    description: 'Learn how TheWebHero collects, uses, protects, and handles your personal data and project inquiry information.',
    alternates: {
        canonical: 'https://thewebhero.com/privacy-policy'
    }
};

export default function PrivacyPolicyPage() {
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
                        <span className="font-semibold text-slate-900">Privacy Policy</span>
                    </li>
                </ol>
            </div>

            {/* Header */}
            <header className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                <div className="max-w-5xl mx-auto">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Data Protection & Privacy</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
                        Last updated: September 20, 2026. This Privacy Policy describes our practices regarding the collection, storage, and protection of information submitted to TheWebHero.
                    </p>
                </div>
            </header>

            {/* Content Body */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 text-base leading-relaxed">
                    
                    <section className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Eye className="w-5 h-5 text-emerald-600" />
                            1. Information We Collect
                        </h2>
                        <p>
                            We collect information you provide directly to us when requesting a project quote, filling out contact forms, or communicating with our engineering team:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-slate-900">Contact Data:</strong> Full name, work email address, phone number, company name, and region.</li>
                            <li><strong className="text-slate-900">Project Requirements:</strong> Project summaries, technical specifications, platform preferences, budget ranges, and attached documents.</li>
                            <li><strong className="text-slate-900">Technical Logs:</strong> IP address, browser type, and submission timestamps for rate-limiting and security verification.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Server className="w-5 h-5 text-emerald-600" />
                            2. How We Use Your Information
                        </h2>
                        <p>
                            The information we collect is strictly used to evaluate your technical scope and deliver project inquiries:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To prepare project scope estimates, milestone proposals, and technical architecture recommendations.</li>
                            <li>To communicate directly regarding your quote request or technical consultation.</li>
                            <li>To prevent fraudulent submissions, spam, and malicious API requests.</li>
                            <li>We do <strong className="text-slate-900">NOT</strong> sell, rent, or trade your personal or project data to third-party advertisers.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-emerald-600" />
                            3. Data Security & Storage
                        </h2>
                        <p>
                            We employ industry-standard technical and organizational security measures to protect your data against unauthorized access, loss, or misuse:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encrypted data transmission over HTTPS (SSL/TLS).</li>
                            <li>Server-side validation and file type restriction for uploaded project attachments.</li>
                            <li>Strict access controls restricting lead data to authorized solutions architects and project managers.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-6 border-t border-slate-200">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <UserCheck className="w-5 h-5 text-emerald-600" />
                            4. Your Privacy Rights & Contact
                        </h2>
                        <p>
                            You have the right to request access to, correction of, or deletion of your personal data stored in our systems.
                        </p>
                        <p>
                            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact our team at:
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 font-mono text-sm text-slate-800">
                            Email: <a href="mailto:privacy@thewebhero.com" className="text-emerald-600 font-bold hover:underline">privacy@thewebhero.com</a>
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
