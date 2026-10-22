import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronRight, Clock, Home, Mail, MapPin, MessageSquare, Navigation, Phone } from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube, FaGithub, FaPinterestP, FaThreads, FaGoogle } from 'react-icons/fa6';
import type { SocialKey } from '../lib/cms/content';
import { fullAddress, mapEmbed, mapLink, telHref, whatsappHref } from '../lib/contact';
import { getFaqs, getSiteSettings } from '../lib/cms/content';
import { JsonLd, pageMetadata, PageJsonLd } from '../lib/cms/seo';
import { faqSchema } from '../lib/cms/schema';
import ContactForm from '../components/company/ContactForm';

const SOCIALS: { key: SocialKey; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn },
    { key: 'twitter', label: 'X', Icon: FaXTwitter },
    { key: 'facebook', label: 'Facebook', Icon: FaFacebookF },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube },
    { key: 'github', label: 'GitHub', Icon: FaGithub },
    { key: 'pinterest', label: 'Pinterest', Icon: FaPinterestP },
    { key: 'threads', label: 'Threads', Icon: FaThreads },
    { key: 'googleBusiness', label: 'Google', Icon: FaGoogle },
];

const NEXT_STEPS = [
    { title: 'We read your message', text: 'A senior engineer reviews it, not a bot.' },
    { title: 'We reply within 24 hours', text: 'With questions or a short call slot.' },
    { title: 'You get a clear plan', text: 'Scope, timeline and a fixed estimate.' },
];

const WHATSAPP_TEXT = 'Hi TheWebHero, I would like to discuss a project.';
const card = 'rounded-3xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_32px_-18px_rgba(35,75,125,0.22)]';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/contact', {
        title: 'Contact Us | Start Your Web or Mobile Project | TheWebHero',
        description: 'Get in touch with TheWebHero engineering team to discuss custom web applications, Flutter mobile apps, or backend REST APIs.',
    });
}

export default async function ContactPage() {
    const [settings, faqs] = await Promise.all([getSiteSettings(), getFaqs('contact')]);
    const { contact } = settings;
    const address = fullAddress(contact);
    const directions = mapLink(contact);
    const embed = mapEmbed(contact);
    const socials = SOCIALS.filter((s) => settings.social[s.key]);

    // Big tap targets at the top: the fastest ways to reach us.
    const quick = [
        { key: 'phone', label: 'Call us', value: contact.phone, href: telHref(contact.phone), Icon: Phone, tone: 'bg-blue-50 text-blue-600 ring-blue-100', external: false },
        { key: 'whatsapp', label: 'WhatsApp', value: 'Chat with us now', href: whatsappHref(contact.whatsapp, WHATSAPP_TEXT), Icon: FaWhatsapp, tone: 'bg-emerald-50 text-emerald-600 ring-emerald-100', external: true },
        { key: 'email', label: 'Email', value: contact.email, href: contact.email ? `mailto:${contact.email}` : undefined, Icon: Mail, tone: 'bg-pink-50 text-pink-600 ring-pink-100', external: false },
    ].filter((q) => q.href);

    return (
        <main className="min-h-screen bg-[#f7f8fc]">
            <PageJsonLd path="/contact" />
            {faqs.length > 0 && <JsonLd data={faqSchema(faqs)} />}

            {/* ── Hero ─────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-[#f4f0ff] via-[#f8f9ff] to-[#f7f8fc]">
                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-200/50 blur-[110px]" aria-hidden="true" />
                <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-200/50 blur-[110px]" aria-hidden="true" />

                <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-6 sm:px-6 lg:px-8 lg:pb-6 lg:pt-8">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[13px] text-slate-500">
                        <Link href="/" className="inline-flex items-center gap-1 hover:text-purple-700">
                            <Home className="h-3.5 w-3.5" /> Home
                        </Link>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                        <span className="font-semibold text-slate-800" aria-current="page">Contact Us</span>
                    </nav>

                    <div className="mt-5 max-w-3xl">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-white px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-purple-700 shadow-sm">
                            <MessageSquare className="h-3.5 w-3.5" /> Contact us
                        </span>
                        <h1 className="mt-4 text-[32px] font-extrabold leading-[1.1] tracking-tight text-slate-950 sm:text-[42px] lg:text-[48px]">
                            Let&apos;s talk about{' '}
                            <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">your project</span>
                        </h1>
                        <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-slate-600 sm:text-lg">
                            Web app, mobile app or custom software - tell us what you are building. You will hear back from an engineer within 24 hours.
                        </p>
                    </div>

                    {quick.length > 0 && (
                        <div className="mt-6 grid grid-cols-3 gap-2.5 sm:mt-7 sm:gap-3">
                            {quick.map(({ key, label, value, href, Icon, tone, external }) => (
                                <a
                                    key={key}
                                    href={href}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    className="group flex flex-col items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/90 px-2 py-3 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md sm:flex-row sm:gap-3.5 sm:p-3.5 sm:text-left"
                                >
                                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${tone}`}>
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <span className="min-w-0 sm:flex-1">
                                        <span className="block text-[13px] font-bold text-slate-800 sm:text-[12px] sm:font-semibold sm:uppercase sm:tracking-wider sm:text-slate-400">{label}</span>
                                        <span className="hidden truncate text-[15px] font-bold text-slate-900 sm:block">{value}</span>
                                    </span>
                                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-600 sm:block" />
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ── Form + details ───────────────────────────────────────── */}
            <section className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 lg:py-6">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-7">
                        <ContactForm />
                    </div>

                    <aside className="space-y-5 lg:col-span-5">
                        <div className={`p-5 sm:p-6 ${card}`}>
                            <h2 className="text-lg font-bold text-slate-900">Contact details</h2>
                            <ul className="mt-4 space-y-4 text-[14.5px]">
                                {contact.hours && (
                                    <li className="flex gap-3">
                                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
                                        <span>
                                            <span className="block font-semibold text-slate-900">Working hours</span>
                                            <span className="text-slate-600">{contact.hours}</span>
                                        </span>
                                    </li>
                                )}
                                {address && (
                                    <li className="flex gap-3">
                                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-purple-600" />
                                        <span>
                                            <span className="block font-semibold text-slate-900">Office</span>
                                            <span className="text-slate-600">{address}</span>
                                            {directions && (
                                                <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-1 flex items-center gap-1 text-[13.5px] font-semibold text-purple-700 hover:underline">
                                                    <Navigation className="h-3.5 w-3.5" /> Get directions
                                                </a>
                                            )}
                                        </span>
                                    </li>
                                )}
                            </ul>

                            {socials.length > 0 && (
                                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
                                    <span className="mr-1 text-[12px] font-semibold uppercase tracking-wider text-slate-400">Follow us</span>
                                    {socials.map(({ key, label, Icon }) => (
                                        <a
                                            key={key}
                                            href={settings.social[key]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`TheWebHero on ${label}`}
                                            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-purple-600 hover:text-white"
                                        >
                                            <Icon className="h-4 w-4" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1b1145] via-[#24135c] to-[#3a1670] p-5 text-white sm:p-6">
                            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-500/30 blur-3xl" aria-hidden="true" />
                            <h2 className="relative text-lg font-bold">What happens next</h2>
                            <ol className="relative mt-4 space-y-4">
                                {NEXT_STEPS.map((step, i) => (
                                    <li key={step.title} className="flex gap-3">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-[13px] font-bold ring-1 ring-white/25">{i + 1}</span>
                                        <span>
                                            <span className="block text-[15px] font-semibold">{step.title}</span>
                                            <span className="text-[13.5px] text-purple-100/80">{step.text}</span>
                                        </span>
                                    </li>
                                ))}
                            </ol>
                            <Link
                                href="/get-a-quote"
                                className="relative mt-5 flex h-11 items-center justify-center gap-1.5 rounded-xl bg-white text-[14px] font-bold text-slate-900 transition-transform hover:-translate-y-0.5"
                            >
                                Need a detailed estimate? Get a quote <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ── FAQs (shown when added in Admin → FAQs for the Contact page) ── */}
            {faqs.length > 0 && (
                <section className="mx-auto max-w-3xl px-4 pb-6 sm:px-6 lg:pb-6">
                    <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Frequently asked questions</h2>
                    <div className="mt-6 space-y-3">
                        {faqs.map((faq) => (
                            <details key={faq.question} className={`group px-5 py-4 ${card}`}>
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15.5px] font-semibold text-slate-900">
                                    {faq.question}
                                    <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            )}

            {/* ── Map ─────────────────────────────────────────────────── */}
            {embed && (
                <section className="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8 lg:pb-6">
                    <div className={`overflow-hidden ${card}`}>
                        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                            <div className="min-w-0">
                                <h2 className="text-lg font-bold text-slate-900">Visit our office</h2>
                                <p className="truncate text-[14px] text-slate-500">{address}</p>
                            </div>
                            {directions && (
                                <a
                                    href={directions}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-[13.5px] font-semibold text-white hover:bg-slate-700"
                                >
                                    <Navigation className="h-4 w-4" /> Get directions
                                </a>
                            )}
                        </div>
                        <iframe
                            src={embed}
                            title={`Map of TheWebHero office, ${address}`}
                            className="block h-[260px] w-full border-0 sm:h-[340px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </section>
            )}
        </main>
    );
}
