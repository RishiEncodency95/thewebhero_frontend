import React from 'react';
import { Metadata } from 'next';
import { MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { getTestimonials } from '../../lib/company';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Client Testimonials & Feedback | TheWebHero',
    description: 'Approved client feedback and testimonials regarding web development and software engineering projects by TheWebHero.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/testimonials',
    },
};

export default function TestimonialsPage() {
    const testimonials = getTestimonials();

    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Client Testimonials & Verification"
                subtitle="Approved Feedback • Real Project Reviews"
                description="Read verified feedback from client partners regarding our custom web development, mobile app delivery, and software engineering services."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Testimonials' },
                ]}
            />

            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {testimonials.length === 0 ? (
                    <div className="py-16 px-6 text-center bg-white rounded-3xl border border-slate-200 shadow-sm max-w-2xl mx-auto space-y-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#1769FF] flex items-center justify-center mx-auto">
                            <MessageSquareQuote className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">
                            Testimonials Verification in Progress
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            We publish client testimonials only after formal authorization and verification. Check back soon for updated project feedback reviews.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.id} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                                <p className="text-slate-700 text-sm italic">"{t.quote}"</p>
                                <div className="pt-3 border-t border-slate-100">
                                    <h4 className="font-bold text-slate-900 text-sm">{t.authorName}</h4>
                                    {t.authorRole && <p className="text-xs text-slate-500">{t.authorRole}, {t.companyName}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <CompanyCTA />
        </main>
    );
}
