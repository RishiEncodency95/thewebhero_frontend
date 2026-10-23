import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaXTwitter, FaGithub, FaPinterestP, FaThreads, FaGoogle,
    FaPhone, FaEnvelope, FaLocationDot, FaRegClock, FaWhatsapp
} from 'react-icons/fa6';
import { mapLink, telHref, whatsappHref } from '../lib/contact';
import NewsletterForm from './NewsletterForm';
import type { SiteSettings, LocationEntry } from '../lib/cms/content';

interface FooterLink {
    title: string;
    slug: string;
}

interface FooterProps {
    settings: SiteSettings;
    services: FooterLink[];
    solutions: FooterLink[];
    cities: LocationEntry[];
    countries: LocationEntry[];
}

const SOCIAL_BUTTONS = [
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn, className: 'border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white shadow-[0_0_10px_rgba(0,119,181,0.2)] hover:shadow-[0_0_15px_rgba(0,119,181,0.6)]' },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram, className: 'border-[#e1306c] text-[#e1306c] hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#285AEB] hover:border-transparent hover:text-white shadow-[0_0_10px_rgba(225,48,108,0.2)] hover:shadow-[0_0_15px_rgba(225,48,108,0.6)]' },
    { key: 'facebook', label: 'Facebook', Icon: FaFacebookF, className: 'border-[#1877F2] text-[#1877F2] hover:bg-[#1877F2] hover:text-white shadow-[0_0_10px_rgba(24,119,242,0.2)] hover:shadow-[0_0_15px_rgba(24,119,242,0.6)]' },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube, className: 'border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]' },
    { key: 'twitter', label: 'X', Icon: FaXTwitter, className: 'border-slate-300 text-slate-300 hover:bg-white hover:text-black shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
    { key: 'github', label: 'GitHub', Icon: FaGithub, className: 'border-slate-300 text-slate-300 hover:bg-white hover:text-black shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
    { key: 'pinterest', label: 'Pinterest', Icon: FaPinterestP, className: 'border-[#E60023] text-[#E60023] hover:bg-[#E60023] hover:text-white shadow-[0_0_10px_rgba(230,0,35,0.2)] hover:shadow-[0_0_15px_rgba(230,0,35,0.6)]' },
    { key: 'threads', label: 'Threads', Icon: FaThreads, className: 'border-slate-300 text-slate-300 hover:bg-white hover:text-black shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
    { key: 'googleBusiness', label: 'Google', Icon: FaGoogle, className: 'border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4] hover:text-white shadow-[0_0_10px_rgba(66,133,244,0.2)] hover:shadow-[0_0_15px_rgba(66,133,244,0.6)]' },
] as const;

const linkClass = 'text-slate-300 hover:text-white text-[15px] transition-colors';

/** Site footer. Contact details, socials and links all come from the CMS. */
export default function Footer({ settings, services, solutions, cities, countries }: FooterProps) {
    const { contact, social } = settings;
    const place = [contact.address.locality, contact.address.region].filter(Boolean).join(', ');
    return (
        <footer className="bg-[#040914] text-slate-300 relative pt-6 border-t border-blue-900/30">
            <div className="w-full px-4 sm:px-6 lg:px-20 pb-4">
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:flex-row lg:justify-between lg:gap-4 xl:gap-8 mb-4">

                    {/* Brand Column */}
                    <div className="col-span-2 w-full lg:w-3/12 lg:pr-4 xl:pr-6">
                        <Link href="/" className="inline-flex items-center mb-6 bg-white/95 px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">
                            <Image
                                src="/logo.png"
                                alt="TheWebHero"
                                width={180}
                                height={56}
                                className="object-contain h-22 w-auto"
                            />
                        </Link>
                        <p className="text-slate-300 text-[14px] leading-relaxed mb-8 pr-4">
                            {settings.tagline && settings.tagline.length > 40 ? settings.tagline : 'We build powerful digital experiences, intelligent software, and scalable IT solutions that help businesses grow.'}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {SOCIAL_BUTTONS.filter((b) => social[b.key]).map(({ key, label, Icon, className }) => (
                                <a
                                    key={key}
                                    href={social[key]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`TheWebHero on ${label}`}
                                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${className}`}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Individual Link Columns for exact spacing */}
                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Services</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {services.map((item) => (
                                <li key={item.slug}>
                                    <Link href={`/services/${item.slug}`} className={linkClass}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-blue-400 hover:text-blue-300 text-[14px] font-medium transition-colors">
                                    View all services →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Solutions</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {solutions.map((item) => (
                                <li key={item.slug}>
                                    <Link href={`/solutions/${item.slug}`} className={linkClass}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/solutions" className="text-blue-400 hover:text-blue-300 text-[14px] font-medium transition-colors">
                                    View all solutions →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Company</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/company/about" className="text-slate-300 hover:text-white text-[15px] transition-colors">About Us</Link></li>
                            <li><Link href="/company/team" className="text-slate-300 hover:text-white text-[15px] transition-colors">Our Team</Link></li>
                            <li><Link href="/company/careers" className="text-slate-300 hover:text-white text-[15px] transition-colors">Careers</Link></li>
                            <li><Link href="/company/process" className="text-slate-300 hover:text-white text-[15px] transition-colors">Our Process</Link></li>
                            <li><Link href="/portfolio" className="text-slate-300 hover:text-white text-[15px] transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-slate-300 hover:text-white text-[15px] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Insights</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/blog" className="text-slate-300 hover:text-white text-[15px] transition-colors">Blog</Link></li>
                            <li><Link href="/privacy-policy" className="text-slate-300 hover:text-white text-[15px] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="text-slate-300 hover:text-white text-[15px] transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter Column */}
                    <div className="col-span-2 w-full lg:w-3/12">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Get In Touch</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>

                        <ul className="space-y-1.5 mb-3">
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <FaPhone size={11} />
                                </div>
                                <a href={telHref(contact.phone)} className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">{contact.phone}</a>
                            </li>
                            {contact.whatsapp && (
                                <li className="flex items-center gap-2.5 group">
                                    <div className="w-6 h-6 shrink-0 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                                        <FaWhatsapp size={12} />
                                    </div>
                                    <a href={whatsappHref(contact.whatsapp, 'Hi TheWebHero, I would like to discuss a project.')} target="_blank" rel="noopener noreferrer" className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">Chat on WhatsApp</a>
                                </li>
                            )}
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope size={11} />
                                </div>
                                <a href={`mailto:${contact.email}`} className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">{contact.email}</a>
                            </li>
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                    <FaLocationDot size={11} />
                                </div>
                                <a href={mapLink(contact)} target="_blank" rel="noopener noreferrer" className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">{place}, India</a>
                            </li>
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    <FaRegClock size={11} />
                                </div>
                                <span className="text-slate-200 text-[14px] leading-6">{contact.hours}</span>
                            </li>
                        </ul>

                        {/* Gradient hairline border, then a soft white -> lavender card */}
                        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-px shadow-[0_14px_40px_-14px_rgba(168,85,247,0.55)]">
                            <div className="relative overflow-hidden rounded-[15px] bg-gradient-to-br from-white via-[#faf5ff] to-[#eef4ff] px-4 py-1.5 xl:p-2">
                                <div aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 h-24 w-24 rounded-full bg-pink-300/30 blur-2xl" />
                                <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-6 h-24 w-24 rounded-full bg-blue-300/30 blur-2xl" />

                                <div className="relative">
                                    <div className="mb-2.5 flex items-center gap-2.5">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/30">
                                            <FaEnvelope size={12} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <h4 className="text-slate-900 font-semibold text-[14px] leading-tight">Subscribe to Newsletter</h4>
                                            <p className="text-slate-500 text-[12px] leading-snug">Get the latest updates and insights.</p>
                                        </div>
                                    </div>

                                    <NewsletterForm />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Top Cities & Countries Links */}
                <div className="pt-6 border-t border-slate-800/80 space-y-4 text-xs">
                    {/* Top Cities */}
                    <div>
                        <h4 className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-2">
                            TOP CITIES (INDIA)
                        </h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400 text-[12.5px] leading-relaxed">
                            {cities.map((city, index) => (
                                <React.Fragment key={city.slug}>
                                    <Link
                                        href={`/locations/city/${city.slug}`}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {city.name}
                                    </Link>
                                    {index < cities.length - 1 && (
                                        <span className="text-slate-700 pointer-events-none">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Top Countries */}
                    <div className="pt-2">
                        <h4 className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mb-2">
                            TOP COUNTRIES WE SERVE
                        </h4>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400 text-[12.5px] leading-relaxed">
                            {countries.map((country, index) => (
                                <React.Fragment key={country.slug}>
                                    <Link
                                        href={`/locations/country/${country.slug}`}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {country.name}
                                    </Link>
                                    {index < countries.length - 1 && (
                                        <span className="text-slate-700 pointer-events-none">|</span>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-center gap-4 text-[13.5px]">
                    <div className="text-slate-400">
                        © {new Date().getFullYear()} {settings.name}. All rights reserved.
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-400">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-slate-700/80 hidden sm:inline-block">|</span>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <span className="text-slate-700/80 hidden sm:inline-block">|</span>
                        <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
                        <span className="text-slate-700/80 hidden lg:inline-block">|</span>
                        <div className="flex items-center gap-1.5 text-slate-400">
                            Made with <span className="text-red-500 text-[20px] animate-pulse">❤️</span> in India <span className="text-[20px]">🇮🇳</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
