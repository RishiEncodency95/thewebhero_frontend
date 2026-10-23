import { Metadata } from 'next';
import { Suspense } from 'react';
import { BadgeCheck, Clock, Lock, Mail, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { pageMetadata, PageJsonLd, JsonLd } from '../lib/cms/seo';
import { getFaqs, getSiteSettings } from '../lib/cms/content';
import { faqSchema } from '../lib/cms/schema';
import { getQuoteCatalog } from '../lib/cms/quote-catalog';
import CompanyHero from '../components/company/CompanyHero';
import QuoteForm from '../components/quote/QuoteForm';
import QuoteFAQ, { QUOTE_FAQS } from '../components/quote/QuoteFAQ';
import heroArt from '../assets/home/service/app-dev.webp';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/get-a-quote', {
        title: 'Get a Project Quote | TheWebHero',
        description: 'Request a custom project quote for web development, mobile apps, SaaS platforms, or enterprise software solutions. Share your requirements and get a detailed scope assessment.',
    });
}

function QuoteFormFallback() {
    return (
        <div className="flex min-h-[420px] items-center justify-center rounded-[26px] border border-slate-200/80 bg-white">
            <div className="h-9 w-9 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" aria-label="Loading form" />
        </div>
    );
}

// Promises the FAQ already makes - kept in sync with it, no new claims.
const ASSURANCES = [
    { Icon: BadgeCheck, title: 'Free & non-binding', text: 'A quote request never commits you to anything.' },
    { Icon: Lock, title: 'Confidential', text: 'Your idea, designs and workflows stay private.' },
    { Icon: Sparkles, title: 'No spec? No problem', text: 'We help turn a rough idea into a clear scope.' },
    { Icon: Clock, title: 'About 5 minutes', text: 'Five short steps — only name, email, service and a summary are required.' },
];

export default async function GetAQuotePage() {
    const [settings, faqs, catalog] = await Promise.all([getSiteSettings(), getFaqs('get-a-quote', QUOTE_FAQS), getQuoteCatalog()]);
    const { contact } = settings;
    const whatsapp = contact.whatsapp?.replace(/\D/g, '');

    return (
        <main className="min-h-screen bg-[#f8fbff]">
            <PageJsonLd path="/get-a-quote" />
            <JsonLd data={faqSchema(faqs)} />

            <CompanyHero
                eyebrow="Free project quote"
                title="Tell us about your"
                highlight="next project"
                description="Share your goals, features and budget. Our engineering team reviews every request and comes back with a clear scope, tech recommendation and timeline."
                breadcrumbItems={[{ label: 'Get a Quote' }]}
                image={heroArt}
                imageAlt="Mobile app screens designed by TheWebHero"
                hideActions
            />

            <section className="w-full px-4 pb-4 pt-10 lg:px-20 lg:pt-12">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                    <div className="min-w-0 lg:col-span-8">
                        <Suspense fallback={<QuoteFormFallback />}>
                            <QuoteForm catalog={catalog} />
                        </Suspense>
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="space-y-5 lg:sticky lg:top-24">
                            <div className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                                <p className="text-xs font-bold uppercase tracking-wider text-purple-600">What to expect</p>
                                <ul className="mt-4 space-y-4">
                                    {ASSURANCES.map(({ Icon, title, text }) => (
                                        <li key={title} className="flex gap-3">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                                                <Icon className="h-4.5 w-4.5" />
                                            </span>
                                            <span>
                                                <span className="block text-[14px] font-semibold text-slate-900">{title}</span>
                                                <span className="block text-[13px] leading-relaxed text-slate-500">{text}</span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-indigo-950 via-slate-950 to-purple-950 p-6 text-white">
                                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500/40 to-blue-500/40 blur-3xl" aria-hidden="true" />
                                <div className="relative">
                                    <p className="text-lg font-semibold">Prefer to talk first?</p>
                                    <p className="mt-1 text-[13.5px] text-slate-300">Reach the team directly — no form needed.</p>
                                    <div className="mt-5 space-y-2.5">
                                        {whatsapp && (
                                            <a
                                                href={`https://wa.me/${whatsapp}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-[14px] font-semibold ring-1 ring-white/15 transition-colors hover:bg-white/15"
                                            >
                                                <MessageCircle className="h-4 w-4 text-emerald-400" />
                                                Chat on WhatsApp
                                            </a>
                                        )}
                                        {contact.phone && (
                                            <a
                                                href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                                                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-[14px] font-semibold ring-1 ring-white/15 transition-colors hover:bg-white/15"
                                            >
                                                <Phone className="h-4 w-4 text-blue-300" />
                                                {contact.phone}
                                            </a>
                                        )}
                                        {(contact.salesEmail || contact.email) && (
                                            <a
                                                href={`mailto:${contact.salesEmail || contact.email}`}
                                                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-[14px] font-semibold ring-1 ring-white/15 transition-colors hover:bg-white/15"
                                            >
                                                <Mail className="h-4 w-4 text-pink-300" />
                                                {contact.salesEmail || contact.email}
                                            </a>
                                        )}
                                    </div>
                                    {contact.hours && <p className="mt-4 text-[12px] text-slate-400">{contact.hours}</p>}
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <QuoteFAQ faqs={faqs} />
        </main>
    );
}
