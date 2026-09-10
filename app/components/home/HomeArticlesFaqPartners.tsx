'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Calendar, Clock } from 'lucide-react';

export default function HomeArticlesFaqPartners() {
    const articles = [
        {
            title: 'Top 10 Web Development Trends in 2026',
            date: 'Aug 20, 2025',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
            href: '/blog/top-web-dev-trends',
        },
        {
            title: 'How AI is Transforming Businesses',
            date: 'Aug 18, 2025',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=600&q=80',
            href: '/blog/ai-transforming-businesses',
        },
        {
            title: 'Why IT Support is Essential for Growing Businesses',
            date: 'Aug 15, 2025',
            readTime: '4 min read',
            image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
            href: '/blog/why-it-support-is-essential',
        },
    ];

    const faqs = [
        {
            q: 'What services do you provide?',
            a: 'We provide web development, mobile app development, custom software, cloud & DevOps, UI/UX design, and 24/7 IT support solutions.',
        },
        {
            q: 'How much does a project cost?',
            a: 'Costs depend on scope, complexity, and timelines. We offer flexible engagement models tailored to startups and enterprises.',
        },
        {
            q: 'How long does a project take?',
            a: 'Small projects take 2-4 weeks, while comprehensive enterprise software or custom platforms take 2-3 months.',
        },
        {
            q: 'Do you provide maintenance and support?',
            a: 'Yes, we offer ongoing 24/7 technical support, server maintenance, security patches, and feature updates.',
        },
        {
            q: 'Do you work with startups?',
            a: 'Absolutely! We help startups build MVPs, scale infrastructure, and grow rapidly from ground up.',
        },
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const partners = ['Google', 'Microsoft', 'AWS', 'Meta', 'Shopify', 'Stripe'];

    return (
        <section className="bg-slate-50/60 text-slate-900 py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Column: Resources / Latest Insights */}
                    <div className="lg:col-span-6 space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-2">
                                    RESOURCES
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                                    Latest Insights & Resources
                                </h2>
                            </div>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                            >
                                <span>View All Articles</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {articles.map((art, idx) => (
                                <Link
                                    key={idx}
                                    href={art.href}
                                    className="group rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-md overflow-hidden transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src={art.image}
                                            alt={art.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-3.5 flex flex-col justify-between flex-grow">
                                        <h3 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                                            {art.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-[10px] text-slate-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3 text-slate-400" />
                                                {art.date}
                                            </span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-slate-400" />
                                                {art.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: FAQ & Partners */}
                    <div className="lg:col-span-6 space-y-8">

                        {/* FAQ Section */}
                        <div className="space-y-4">
                            <div>
                                <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-2">
                                    FAQ
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                                    Frequently Asked Questions
                                </h2>
                            </div>

                            <div className="space-y-2.5">
                                {faqs.map((faq, idx) => {
                                    const isOpen = openFaq === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className="rounded-xl bg-white border border-slate-200/80 overflow-hidden transition-all shadow-sm"
                                        >
                                            <button
                                                onClick={() => setOpenFaq(isOpen ? null : idx)}
                                                className="w-full px-4 py-3 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                                            >
                                                <span>{faq.q}</span>
                                                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-4 pb-3.5 text-xs text-slate-600 border-t border-slate-100 pt-2 leading-relaxed font-medium">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Partners Section */}
                        <div className="pt-4 border-t border-slate-200/80 space-y-3">
                            <div className="text-xs font-bold text-slate-500 tracking-wider uppercase">
                                OUR CLIENTS & PARTNERS
                            </div>
                            <p className="text-xs text-slate-500">
                                Trusted by Businesses Building for Tomorrow.
                            </p>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-2">
                                {partners.map((partner, pIdx) => (
                                    <div
                                        key={pIdx}
                                        className="py-2.5 px-3 rounded-lg bg-white border border-slate-200 text-center text-xs font-bold text-slate-700 hover:text-slate-900 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer"
                                    >
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
