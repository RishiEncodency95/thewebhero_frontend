import React from 'react';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { getCompanyInfo } from '../lib/company';
import CompanyBreadcrumb from '../components/company/CompanyBreadcrumb';
import ContactForm from '../components/company/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us | Start Your Web or Mobile Project | TheWebHero',
    description: 'Get in touch with TheWebHero engineering team to discuss custom web applications, Flutter mobile apps, or backend REST APIs.',
    alternates: {
        canonical: 'https://thewebhero.ai/contact',
    },
};

export default function ContactPage() {
    const company = getCompanyInfo();

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Contact Hero */}
            <section className="bg-slate-900 text-white pt-10 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CompanyBreadcrumb items={[{ label: 'Contact Us' }]} />

                    <div className="max-w-3xl mt-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-4">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>PROJECT SCOPING & INQUIRIES</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Contact TheWebHero Engineering Team
                        </h1>

                        <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                            Have a web application, mobile app, or enterprise platform to build? Reach out directly to discuss your project scope, architecture, and timeline estimates.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Contact Form */}
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>

                    {/* Right Column: Verified Contact Details */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 bg-slate-900 text-white rounded-3xl shadow-xl space-y-6">
                            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                                Direct Contact Information
                            </h3>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</span>
                                        <a href={`mailto:${company.contactEmail}`} className="text-base font-bold text-white hover:text-blue-400 transition-colors">
                                            {company.contactEmail}
                                        </a>
                                    </div>
                                </div>

                                {company.contactPhone && (
                                    <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Telephone</span>
                                            <span className="text-base font-bold text-white">{company.contactPhone}</span>
                                        </div>
                                    </div>
                                )}

                                {company.address && (
                                    <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                                        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Operating Hub</span>
                                            <span className="text-xs text-slate-300 font-medium leading-relaxed block mt-0.5">{company.address}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Engineering Guarantees */}
                        <div className="p-6 bg-white rounded-3xl border border-slate-200/80 shadow-sm space-y-3">
                            <div className="flex items-center gap-2 text-[#1769FF] font-bold text-xs uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4" />
                                <span>Communication Commitment</span>
                            </div>
                            <h4 className="text-base font-bold text-slate-900">
                                Rapid Response & Technical Review
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Our senior engineering team reviews every incoming inquiry to provide technical feasibility advice, tech stack selection guidance, and milestone estimates within 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
