'use client';

import React, { useState } from 'react';
import { TechFAQItem } from '../../types/technology';
import { ChevronDown, HelpCircle } from 'lucide-react';

type TechnologyFAQProps = {
    faqs: TechFAQItem[];
    name: string;
};

export default function TechnologyFAQ({ faqs, name }: TechnologyFAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 bg-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                        <HelpCircle className="h-3.5 w-3.5" />
                        <span>Got Questions?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Questions about <span className="text-blue-600">{name}</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all duration-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-5 text-left font-extrabold text-slate-900 hover:text-blue-600 focus:outline-none"
                                >
                                    <span className="text-base sm:text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : ''
                                            }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-slate-600 font-medium border-t border-slate-200/50 pt-3">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
