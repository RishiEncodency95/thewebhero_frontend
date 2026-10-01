import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaXTwitter,
    FaPhone, FaEnvelope, FaLocationDot, FaRegClock
} from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';
import { TOP_CITIES, TOP_COUNTRIES } from '@/app/lib/locationsData';

export default function Footer() {
    return (
        <footer className="bg-[#040914] text-slate-300 relative pt-6 border-t border-blue-900/30">
            <div className="w-full px-4 sm:px-6 lg:px-6 pb-4">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 xl:gap-8 mb-4">

                    {/* Brand Column */}
                    <div className="w-full lg:w-3/12 lg:pr-4 xl:pr-6">
                        <Link href="/" className="inline-flex items-center mb-6 bg-white/95 px-4 py-2.5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-shadow">
                            <Image
                                src="/logo.png"
                                alt="TheWebHero"
                                width={180}
                                height={56}
                                className="object-contain h-22 w-auto"
                                priority
                            />
                        </Link>
                        <p className="text-slate-300 text-[14px] leading-relaxed mb-8 pr-4">
                            We build powerful digital experiences, intelligent software, and scalable IT solutions that help businesses grow.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-[#0077b5] text-[#0077b5] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(0,119,181,0.2)] hover:shadow-[0_0_15px_rgba(0,119,181,0.6)]">
                                <FaLinkedinIn size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#e1306c] text-[#e1306c] flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#285AEB] hover:border-transparent hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(225,48,108,0.2)] hover:shadow-[0_0_15px_rgba(225,48,108,0.6)]">
                                <FaInstagram size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#1877F2] text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(24,119,242,0.2)] hover:shadow-[0_0_15px_rgba(24,119,242,0.6)]">
                                <FaFacebookF size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-[#FF0000] text-[#FF0000] flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]">
                                <FaYoutube size={16} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-300 text-slate-300 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                                <FaXTwitter size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Individual Link Columns for exact spacing */}
                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Services</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/services/web-development" className="text-slate-300 hover:text-white text-[15px] transition-colors">Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="text-slate-300 hover:text-white text-[15px] transition-colors">Mobile App Development</Link></li>
                            <li><Link href="/services/software-development" className="text-slate-300 hover:text-white text-[15px] transition-colors">Software Development</Link></li>
                            <li><Link href="/services/ui-ux-design" className="text-slate-300 hover:text-white text-[15px] transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services/cloud-devops" className="text-slate-300 hover:text-white text-[15px] transition-colors">Cloud & DevOps</Link></li>
                            <li><Link href="/services/it-support" className="text-slate-300 hover:text-white text-[15px] transition-colors">IT Support</Link></li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Solutions</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/solutions/business-management" className="text-slate-300 hover:text-white text-[15px] transition-colors">Business Management</Link></li>
                            <li><Link href="/solutions/crm-solutions" className="text-slate-300 hover:text-white text-[15px] transition-colors">CRM Solutions</Link></li>
                            <li><Link href="/solutions/erp-systems" className="text-slate-300 hover:text-white text-[15px] transition-colors">ERP Systems</Link></li>
                            <li><Link href="/solutions/admin-dashboards" className="text-slate-300 hover:text-white text-[15px] transition-colors">Admin Dashboards</Link></li>
                            <li><Link href="/solutions/ecommerce-platforms" className="text-slate-300 hover:text-white text-[15px] transition-colors">eCommerce Platforms</Link></li>
                            <li><Link href="/solutions/custom-software" className="text-slate-300 hover:text-white text-[15px] transition-colors">Custom Software</Link></li>
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
                            <h3 className="text-white font-semibold mb-2 text-base">Resources</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/resources/blog" className="text-slate-300 hover:text-white text-[15px] transition-colors">Blog Articles</Link></li>
                            <li><Link href="/resources/guides" className="text-slate-300 hover:text-white text-[15px] transition-colors">Guides</Link></li>
                            <li><Link href="/resources/tutorials" className="text-slate-300 hover:text-white text-[15px] transition-colors">Tutorials</Link></li>
                            <li><Link href="/resources/faqs" className="text-slate-300 hover:text-white text-[15px] transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy-policy" className="text-slate-300 hover:text-white text-[15px] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="text-slate-300 hover:text-white text-[15px] transition-colors">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter Column */}
                    <div className="w-full lg:w-3/12">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Get In Touch</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>

                        <ul className="space-y-1.5 mb-3">
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <FaPhone size={11} />
                                </div>
                                <span className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope size={11} />
                                </div>
                                <span className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">hello@thewebhero.com</span>
                            </li>
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                    <FaLocationDot size={11} />
                                </div>
                                <span className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">Jaipur, Rajasthan, India</span>
                            </li>
                            <li className="flex items-center gap-2.5 group">
                                <div className="w-6 h-6 shrink-0 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    <FaRegClock size={11} />
                                </div>
                                <span className="text-slate-200 text-[14px] leading-6 hover:text-white transition-colors">Mon - Sat, 9:00 AM - 7:00 PM</span>
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

                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            aria-label="Email address"
                                            className="w-full bg-white text-[13px] text-slate-900 placeholder-slate-400 border border-purple-100 rounded-lg py-1.5 pl-3 pr-10 xl:pr-12 shadow-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-colors"
                                        />
                                        <button
                                            className="absolute inset-y-1 right-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-md w-7 xl:w-8 flex items-center justify-center transition-all hover:shadow-md hover:shadow-purple-500/40"
                                            aria-label="Subscribe"
                                        >
                                            <ArrowRight size={13} />
                                        </button>
                                    </div>
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
                            {TOP_CITIES.map((city, index) => (
                                <React.Fragment key={city.slug}>
                                    <Link
                                        href={`/locations/city/${city.slug}`}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {city.name}
                                    </Link>
                                    {index < TOP_CITIES.length - 1 && (
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
                            {TOP_COUNTRIES.map((country, index) => (
                                <React.Fragment key={country.slug}>
                                    <Link
                                        href={`/locations/country/${country.slug}`}
                                        className="hover:text-blue-400 transition-colors"
                                    >
                                        {country.name}
                                    </Link>
                                    {index < TOP_COUNTRIES.length - 1 && (
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
                        © {new Date().getFullYear()} TheWebHero. All rights reserved.
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-slate-400">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-slate-700/80 hidden sm:inline-block">|</span>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <span className="text-slate-700/80 hidden sm:inline-block">|</span>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
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
