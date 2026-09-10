import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaXTwitter,
    FaPhone, FaEnvelope, FaLocationDot, FaRegClock
} from 'react-icons/fa6';
import { ArrowRight } from 'lucide-react';

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
                            <li><Link href="/about-us" className="text-slate-300 hover:text-white text-[15px] transition-colors">About Us</Link></li>
                            <li><Link href="/our-team" className="text-slate-300 hover:text-white text-[15px] transition-colors">Our Team</Link></li>
                            <li><Link href="/careers" className="text-slate-300 hover:text-white text-[15px] transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-slate-300 hover:text-white text-[15px] transition-colors">Blog</Link></li>
                            <li><Link href="/case-studies" className="text-slate-300 hover:text-white text-[15px] transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact-us" className="text-slate-300 hover:text-white text-[15px] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="w-full lg:w-auto">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Resources</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>
                        <ul className="space-y-3.5">
                            <li><Link href="/articles" className="text-slate-300 hover:text-white text-[15px] transition-colors">Articles</Link></li>
                            <li><Link href="/guides" className="text-slate-300 hover:text-white text-[15px] transition-colors">Guides</Link></li>
                            <li><Link href="/faqs" className="text-slate-300 hover:text-white text-[15px] transition-colors">FAQs</Link></li>
                            <li><Link href="/privacy-policy" className="text-slate-300 hover:text-white text-[15px] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-and-conditions" className="text-slate-300 hover:text-white text-[15px] transition-colors">Terms & Conditions</Link></li>
                            <li><Link href="/sitemap" className="text-slate-300 hover:text-white text-[15px] transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Newsletter Column */}
                    <div className="w-full lg:w-3/12">
                        <div className="inline-block mb-6">
                            <h3 className="text-white font-semibold mb-2 text-base">Get In Touch</h3>
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-500 to-pink-500"></div>
                        </div>

                        <ul className="space-y-1 mb-2">
                            <li className="flex items-center gap-3.5 group">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                                    <FaPhone size={13} />
                                </div>
                                <span className="text-slate-200 text-[14px] hover:text-white transition-colors">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3.5 group">
                                <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope size={13} />
                                </div>
                                <span className="text-slate-200 text-[14px] hover:text-white transition-colors">hello@thewebhero.com</span>
                            </li>
                            <li className="flex items-center gap-3.5 group">
                                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                    <FaLocationDot size={13} />
                                </div>
                                <span className="text-slate-200 text-[14px] hover:text-white transition-colors">Jaipur, Rajasthan, India</span>
                            </li>
                            <li className="flex items-center gap-3.5 group">
                                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                                    <FaRegClock size={13} />
                                </div>
                                <span className="text-slate-200 text-[14px] hover:text-white transition-colors">Mon - Sat, 9:00 AM - 7:00 PM</span>
                            </li>
                        </ul>

                        <div className="bg-[#0c1322] px-4 py-1.5 xl:p-4 rounded-xl border border-slate-800/60 shadow-lg">
                            <h4 className="text-white font-medium mb-1 text-[14px]">Subscribe to Newsletter</h4>
                            <p className="text-slate-400 text-[12px] mb-2">Get the latest updates and insights.</p>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-slate-500 text-xs" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#070b14] text-[13px] text-white placeholder-slate-500 border border-slate-700/60 rounded-lg py-2 pl-8 pr-10 xl:pr-12 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    className="absolute inset-y-1 right-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-md w-7 xl:w-8 flex items-center justify-center transition-colors"
                                    aria-label="Subscribe"
                                >
                                    <ArrowRight size={14} />
                                </button>
                            </div>
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
