"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import ServiceMegaMenu from './services/ServiceMegaMenu';
import ServiceMobileMenu from './services/ServiceMobileMenu';
import SolutionMegaMenu from './solutions/SolutionMegaMenu';
import SolutionMobileMenu from './solutions/SolutionMobileMenu';
import TechnologiesMegaMenu from './technologies/TechnologiesMegaMenu';
import TechnologiesMobileMenu from './technologies/TechnologiesMobileMenu';
import IndustriesMegaMenu from './industries/IndustriesMegaMenu';
import IndustriesMobileMenu from './industries/IndustriesMobileMenu';
import ResourcesMegaMenu from './resources/ResourcesMegaMenu';
import ResourcesMobileMenu from './resources/ResourcesMobileMenu';
import CompanyMegaMenu from './company/CompanyMegaMenu';
import CompanyMobileMenu from './company/CompanyMobileMenu';

export default function Navbar() {
    const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
    const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
    const [isTechnologiesMenuOpen, setIsTechnologiesMenuOpen] = useState(false);
    const [isIndustriesMenuOpen, setIsIndustriesMenuOpen] = useState(false);
    const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
    const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileMenuType, setMobileMenuType] = useState<'services' | 'solutions' | 'technologies' | 'industries' | 'resources' | 'company' | null>(null);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services', hasDropdown: true, isServices: true },
        { name: 'Solutions', href: '/solutions', hasDropdown: true, isSolutions: true },
        { name: 'Technologies', href: '/technologies', hasDropdown: true, isTechnologies: true },
        { name: 'Industries', href: '/industries', hasDropdown: true, isIndustries: true },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Resources', href: '/resources', hasDropdown: true, isResources: true },
        { name: 'Company', href: '/company', hasDropdown: true, isCompany: true },
    ];

    const pathname = usePathname();

    return (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full px-4 sm:px-4 lg:px-10">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex pr-2 items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="TheWebHero"
                                width={180}
                                height={60}
                                className="object-contain h-22 w-auto"
                                priority
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
                            const isResources = link.isResources;
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
                                            setIsResourcesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isSolutions) {
                                            setIsSolutionsMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsResourcesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isTechnologies) {
                                            setIsTechnologiesMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsResourcesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isIndustries) {
                                            setIsIndustriesMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsResourcesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isResources) {
                                            setIsResourcesMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        } else if (isCompany) {
                                            setIsCompanyMenuOpen(true);
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsResourcesMenuOpen(false);
                                        } else {
                                            setIsServicesMenuOpen(false);
                                            setIsSolutionsMenuOpen(false);
                                            setIsTechnologiesMenuOpen(false);
                                            setIsIndustriesMenuOpen(false);
                                            setIsResourcesMenuOpen(false);
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
                                            setIsResourcesMenuOpen(false);
                                            setIsCompanyMenuOpen(false);
                                        }}
                                        className={`px-3 py-2 text-[16px] flex items-center transition-all ${isActive
                                                ? 'font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
                                                : 'font-medium text-slate-700 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.name}
                                        {link.hasDropdown && (
                                            <ChevronDown
                                                size={14}
                                                className={`ml-1 transition-transform ${((isServices && isServicesMenuOpen) || (isSolutions && isSolutionsMenuOpen) || (isTechnologies && isTechnologiesMenuOpen) || (isIndustries && isIndustriesMenuOpen) || (isResources && isResourcesMenuOpen) || (isCompany && isCompanyMenuOpen))
                                                        ? 'rotate-180 text-blue-600 opacity-100'
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
                            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-1.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center group text-sm"
                        >
                            Get a Quote
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex xl:hidden items-center space-x-2">
                        <button
                            onClick={() => {
                                setMobileMenuType('company');
                                setIsMobileMenuOpen(true);
                            }}
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
                isOpen={isServicesMenuOpen}
                onClose={() => setIsServicesMenuOpen(false)}
            />

            {/* Solutions Desktop Mega Menu */}
            <SolutionMegaMenu
                isOpen={isSolutionsMenuOpen}
                onClose={() => setIsSolutionsMenuOpen(false)}
            />

            {/* Technologies Desktop Mega Menu */}
            <TechnologiesMegaMenu
                isOpen={isTechnologiesMenuOpen}
                onClose={() => setIsTechnologiesMenuOpen(false)}
            />

            {/* Industries Desktop Mega Menu */}
            <IndustriesMegaMenu
                isOpen={isIndustriesMenuOpen}
                onClose={() => setIsIndustriesMenuOpen(false)}
            />

            {/* Resources Desktop Mega Menu */}
            <ResourcesMegaMenu
                isOpen={isResourcesMenuOpen}
                onClose={() => setIsResourcesMenuOpen(false)}
            />

            {/* Company Desktop Mega Menu */}
            <CompanyMegaMenu
                isOpen={isCompanyMenuOpen}
                onClose={() => setIsCompanyMenuOpen(false)}
            />

            {/* Mobile Navigation Drawers */}
            <ServiceMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'services'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />

            <SolutionMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'solutions'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />

            <TechnologiesMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'technologies'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />

            <IndustriesMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'industries'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />

            <ResourcesMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'resources'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />

            <CompanyMobileMenu
                isOpen={isMobileMenuOpen && mobileMenuType === 'company'}
                onClose={() => {
                    setIsMobileMenuOpen(false);
                    setMobileMenuType(null);
                }}
            />
        </header>
    );
}



