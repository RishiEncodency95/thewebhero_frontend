import { HelpCircle } from 'lucide-react';

const FAQS = [
    {
        q: 'What information should I include in my quote request?',
        a: 'The more detail you provide about your business goals, target platforms, required features, and budget expectations, the more precise our scope and architectural recommendation will be.'
    },
    {
        q: 'Is my project concept kept confidential?',
        a: 'Yes. All project specifications, designs, and business workflows submitted through our quote form are treated with strict confidentiality.'
    },
    {
        q: 'What if I do not have complete technical specifications yet?',
        a: 'That is completely normal. Our team can help convert high-level product ideas into detailed technical architecture and user stories during the initial scoping call.'
    },
    {
        q: 'What happens after I submit this quote request?',
        a: 'Our engineering lead will evaluate your project scope, verify feasibility, and reach out via your preferred contact method to discuss milestone phases and technical recommendations.'
    },
    {
        q: 'Does submitting a quote request bind me to any financial commitment?',
        a: 'No. Quote submissions are entirely free and non-binding inquiry assessments designed to help you plan your project requirements.'
    }
];

export default function QuoteFAQ() {
    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Frequently Asked Questions</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        Got Questions About Requesting a Quote?
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs transition-shadow hover:shadow-md"
                        >
                            <h3 className="text-base font-bold text-slate-900 mb-2">
                                {faq.q}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {faq.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
