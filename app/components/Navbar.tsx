"use client";

import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import ServiceMegaMenu from './services/ServiceMegaMenu';
import ServiceMobileMenu from './services/ServiceMobileMenu';
import SolutionMegaMenu from './solutions/SolutionMegaMenu';
import SolutionMobileMenu from './solutions/SolutionMobileMenu';
import TechnologiesMegaMenu from './technologies/TechnologiesMegaMenu';
import TechnologiesMobileMenu from './technologies/TechnologiesMobileMenu';
import IndustriesMegaMenu from './industries/IndustriesMegaMenu';
import IndustriesMobileMenu from './industries/IndustriesMobileMenu';
import CompanyMegaMenu from './company/CompanyMegaMenu';
import MobileTabBar from './mobile/MobileTabBar';
import MobileMenuSheet, { type MobileSection } from './mobile/MobileMenuSheet';
import type { NavigationData } from '../lib/cms/content';
import { track } from '../lib/track';

interface NavbarProps {
    nav: NavigationData;
    /** Ready-made tel:/wa.me links and email from Admin → Contact & Social. */
    contact: { tel?: string; whatsapp?: string; email?: string };
}

export default function Navbar({ nav, contact }: NavbarProps) {
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
    const [isTechnologiesMenuOpen, setIsTechnologiesMenuOpen] = useState(false);
    const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileMenuType, setMobileMenuType] = useState<MobileSection | 'main' | null>(null);
    const closeMobile = useCallback(() => {
        setIsMobileMenuOpen(false);
        setMobileMenuType(null);
    }, []);
    const openMobile = (type: MobileSection | 'main') => {
        setMobileMenuType(type);
        setIsMobileMenuOpen(true);
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services', hasDropdown: true, isServices: true },
        { name: 'Solutions', href: '/solutions', hasDropdown: true, isSolutions: true },
        { name: 'Technologies', href: '/technologies', hasDropdown: true, isTechnologies: true },
        { name: 'Industries', href: '/industries', hasDropdown: true, isIndustries: true },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
        { name: 'Company', href: '/company', hasDropdown: true, isCompany: true },
    ];

    const pathname = usePathname();

    return (
        <>
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm pt-[env(safe-area-inset-top)]">
            <div className="w-full px-4 sm:px-6 lg:px-20">
                <div className="flex justify-between items-center h-14 lg:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex pr-2 items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="TheWebHero"
                                width={180}
                                height={60}
                                className="object-contain h-14 w-auto lg:h-22"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-1">
                        {navLinks.map((link) => {
                            const isServices = link.isServices;
                            const isSolutions = link.isSolutions;
                            const isTechnologies = link.isTechnologies;
                            const isIndustries = link.isIndustries;
                            const isCompany = link.isCompany;
                            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

                            return (
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => {
                                        if (isServices) {
                                            setIsServicesMenuOpen(true);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isSolutions) {
                                            setIsSolutionsMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isTechnologies) {
                                            setIsTechnologiesMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isIndustries) {
                                            setIsIndustriesMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isCompany) {
                                            setIsCompanyMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                        } else {
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => {
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        }}
                                        className={`px-2.5 2xl:px-3 py-2 text-[15px] 2xl:text-[16px] whitespace-nowrap flex items-center transition-all ${isActive
                                                ? 'font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
                                                : 'font-medium text-slate-700 hover:text-purple-600'
                                            }`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown
                                                size={14}
                                                className={`ml-1 transition-transform ${isActive ? "text-purple-500 " : ""}${((isServices && isServicesMenuOpen) || (isSolutions && isSolutionsMenuOpen) || (isTechnologies && isTechnologiesMenuOpen) || (isIndustries && isIndustriesMenuOpen) || (isCompany && isCompanyMenuOpen))
                                                        ? 'rotate-180 text-purple-600 opacity-100'
                                                        : 'opacity-50 group-hover:opacity-100'
                                                    }`}
                                            />
                                        )}
                                    </Link>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="/get-a-quote"
                            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-5 py-2 whitespace-nowrap rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center group text-sm"
                        >
                            Get a Quote
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Phones and tablets: quick contact (navigation lives in the bottom tab bar) */}
                    <div className="flex items-center gap-2 lg:hidden">
                        {contact.whatsapp && (
                            <a
                                href={contact.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => track('contact_click', { method: 'whatsapp' })}
                                aria-label="Chat on WhatsApp"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 active:scale-95"
                            >
                                <FaWhatsapp className="h-5 w-5" />
                            </a>
                        )}
                        {contact.tel && (
                            <a
                                href={contact.tel}
                                onClick={() => track('contact_click', { method: 'phone' })}
                                aria-label="Call us"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 active:scale-95"
                            >
                                <Phone className="h-[18px] w-[18px]" />
                            </a>
                        )}
                    </div>

                    {/* Small laptops: the desktop nav does not fit yet */}
                    <div className="hidden lg:flex xl:hidden items-center">
                        <button
                            onClick={() => openMobile('main')}
                            aria-label="Open Navigation Menu"
                            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Services Desktop Mega Menu */}
            <ServiceMegaMenu
                categories={nav.services}
                isOpen={isServicesMenuOpen}
                onClose={() => setIsServicesMenuOpen(false)}
            />

            {/* Solutions Desktop Mega Menu */}
            <SolutionMegaMenu
                categories={nav.solutions}
                isOpen={isSolutionsMenuOpen}
                onClose={() => setIsSolutionsMenuOpen(false)}
            />

            {/* Technologies Desktop Mega Menu */}
            <TechnologiesMegaMenu
                categories={nav.technologies}
                isOpen={isTechnologiesMenuOpen}
                onClose={() => setIsTechnologiesMenuOpen(false)}
            />

            {/* Industries Desktop Mega Menu */}
            <IndustriesMegaMenu
                categories={nav.industries}
                isOpen={isIndustriesMenuOpen}
                onClose={() => setIsIndustriesMenuOpen(false)}
            />

            {/* Company Desktop Mega Menu */}
            <CompanyMegaMenu
                isOpen={isCompanyMenuOpen}
                onClose={() => setIsCompanyMenuOpen(false)}
            />
        </header>

            {/* Mobile Navigation: outside <header>, whose backdrop-filter would trap fixed overlays */}
            <MobileMenuSheet
                isOpen={isMobileMenuOpen && mobileMenuType === 'main'}
                onClose={closeMobile}
                onOpenSection={(section) => openMobile(section)}
                contact={contact}
            />
            <ServiceMobileMenu categories={nav.services} isOpen={isMobileMenuOpen && mobileMenuType === 'services'} onClose={closeMobile} />
            <SolutionMobileMenu categories={nav.solutions} isOpen={isMobileMenuOpen && mobileMenuType === 'solutions'} onClose={closeMobile} />
            <TechnologiesMobileMenu categories={nav.technologies} isOpen={isMobileMenuOpen && mobileMenuType === 'technologies'} onClose={closeMobile} />
            <IndustriesMobileMenu categories={nav.industries} isOpen={isMobileMenuOpen && mobileMenuType === 'industries'} onClose={closeMobile} />
            <MobileTabBar menuOpen={isMobileMenuOpen} onMenu={() => (isMobileMenuOpen ? closeMobile() : openMobile('main'))} />
        </>
    );
}



