"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Solutions', href: '/solutions', hasDropdown: true },
        { name: 'Technologies', href: '/technologies', hasDropdown: true },
        { name: 'Industries', href: '/industries', hasDropdown: true },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Resources', href: '/resources', hasDropdown: true },
        { name: 'Company', href: '/company', hasDropdown: true },
    ];

    const pathname = usePathname();

    return (
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full px-4 sm:px-4 lg:px-10">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
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
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`px-3 py-2 text-[16px] flex items-center transition-all ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                                        ? 'font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500'
                                        : 'font-medium text-slate-700 hover:text-blue-600'
                                        }`}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:opacity-100" />}
                                </Link>
                            </div>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center space-x-4">

                        <Link
                            href="/get-a-quote"
                            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-1.5 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center group"
                        >
                            Get a Quote
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex xl:hidden items-center">
                        <button className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
