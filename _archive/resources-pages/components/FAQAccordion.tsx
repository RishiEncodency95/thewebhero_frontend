'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ResourceItem } from '../../types/resource';

interface FAQAccordionProps {
    faqs: ResourceItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const questionText = faq.question || faq.title;
                const answerText = faq.answer || faq.description;

                return (
                    <div
                        key={faq.slug || index}
                        className="rounded-2xl bg-white border border-slate-200/80 shadow-sm overflow-hidden transition-all"
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#1769FF]"
                            aria-expanded={isOpen}
                        >
                            <span className="flex items-center gap-3">
                                <HelpCircle className="w-5 h-5 text-[#1769FF] shrink-0" />
                                <span>{questionText}</span>
                            </span>
                            <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#1769FF]' : ''}`} />
                        </button>

                        {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-100">
                                <p>{answerText}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
