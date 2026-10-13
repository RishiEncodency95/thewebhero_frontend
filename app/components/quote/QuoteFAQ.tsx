import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FaqEntry } from '../../lib/cms/content';

/** Default questions, used when none are published in Admin → FAQs (Get a Quote page). */
export const QUOTE_FAQS: FaqEntry[] = [
    {
        question: 'What information should I include in my quote request?',
        answer: 'The more detail you provide about your business goals, target platforms, required features, and budget expectations, the more precise our scope and architectural recommendation will be.',
    },
    {
        question: 'Is my project concept kept confidential?',
        answer: 'Yes. All project specifications, designs, and business workflows submitted through our quote form are treated with strict confidentiality.',
    },
    {
        question: 'What if I do not have complete technical specifications yet?',
        answer: 'That is completely normal. Our team can help convert high-level product ideas into detailed technical architecture and user stories during the initial scoping call.',
    },
    {
        question: 'What happens after I submit this quote request?',
        answer: 'Our engineering lead will evaluate your project scope, verify feasibility, and reach out via your preferred contact method to discuss milestone phases and technical recommendations.',
    },
    {
        question: 'Does submitting a quote request bind me to any financial commitment?',
        answer: 'No. Quote submissions are entirely free and non-binding inquiry assessments designed to help you plan your project requirements.',
    },
];

/** Accordion of quote FAQs. Native <details>, so it works without JavaScript. */
export default function QuoteFAQ({ faqs }: { faqs: FaqEntry[] }) {
    if (!faqs.length) return null;

    return (
        <section className="w-full px-4 py-14 lg:px-10 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700">
                        <HelpCircle className="h-3.5 w-3.5" />
                        FAQ
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                        Questions about{' '}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">getting a quote</span>
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                        Everything you need to know before you send your project details.
                    </p>
                </div>

                <div className="space-y-3 lg:col-span-8">
                    {faqs.map((faq, i) => (
                        <details
                            key={faq.question}
                            open={i === 0}
                            className="group rounded-2xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] open:shadow-[0_12px_30px_-16px_rgba(35,75,125,0.25)]"
                        >
                            <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-50 font-mono text-[11px] font-bold text-violet-600 group-open:bg-gradient-to-br group-open:from-pink-500 group-open:to-purple-600 group-open:text-white">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <span className="flex-1 text-[15px] font-semibold text-slate-900">{faq.question}</span>
                                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180 group-open:text-violet-600" />
                            </summary>
                            <p className="px-5 pb-5 pl-[3.75rem] text-[14.5px] leading-relaxed text-slate-600">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
