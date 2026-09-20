import { Metadata } from 'next';
import { Suspense } from 'react';
import QuoteBreadcrumb from '../components/quote/QuoteBreadcrumb';
import QuoteHero from '../components/quote/QuoteHero';
import QuoteForm from '../components/quote/QuoteForm';
import QuoteFAQ from '../components/quote/QuoteFAQ';
import Link from 'next/link';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Get a Project Quote | TheWebHero',
    description:
        'Request a custom project quote for web development, mobile apps, SaaS platforms, or enterprise software solutions. Share your requirements and get a detailed scope assessment.',
    alternates: {
        canonical: 'https://thewebhero.com/get-a-quote'
    },
    openGraph: {
        title: 'Get a Project Quote | TheWebHero',
        description:
            'Submit your project requirements, technical scope, budget ranges, and timeline expectations for a custom quote.',
        url: 'https://thewebhero.com/get-a-quote',
        type: 'website'
    }
};

function QuoteFormFallback() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-12 max-w-4xl mx-auto my-8 text-center min-h-[400px] flex items-center justify-center">
            <div className="space-y-4">
                <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-sm font-semibold text-slate-600">Loading Quote Form...</p>
            </div>
        </div>
    );
}

export default function GetAQuotePage() {
    return (
        <main className="min-h-screen bg-slate-100/60 pb-16">
            <QuoteBreadcrumb />
            <QuoteHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
                <Suspense fallback={<QuoteFormFallback />}>
                    <QuoteForm />
                </Suspense>
            </div>

            <QuoteFAQ />

            {/* Alternative Contact Footer CTA */}
            <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Not Ready for a Structured Scope?</h2>
                    <p className="text-slate-400 text-sm max-w-xl mx-auto mb-6">
                        If you have general questions or prefer to talk directly with our tech team before requesting a formal quote, reach out anytime.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg transition-all"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Contact Us Directly</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold text-sm rounded-lg border border-slate-700 transition-all"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Quick Chat on WhatsApp</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
