'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Terminal, Palette, Sparkles, ShoppingBag, Cloud, Headphones } from 'lucide-react';

export default function HomeServices() {
    const services = [
        {
            icon: Code2,
            title: 'Web Development',
            description: 'Modern, responsive web applications built for speed and growth.',
            href: '/services/web-development',
            iconColor: 'text-purple-600',
            bgColor: 'bg-purple-50 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'iOS & Android apps that deliver seamless user experiences.',
            href: '/services/mobile-app-development',
            iconColor: 'text-emerald-600',
            bgColor: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
        },
        {
            icon: Terminal,
            title: 'Software Development',
            description: 'Custom software tailored precisely to your unique business needs.',
            href: '/services/software-development',
            iconColor: 'text-blue-600',
            bgColor: 'bg-blue-50 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Beautiful, intuitive, and user-centric digital product designs.',
            href: '/services/ui-ux-design',
            iconColor: 'text-amber-600',
            bgColor: 'bg-amber-50 border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
        },
        {
            icon: Sparkles,
            title: 'AI Solutions',
            description: 'Intelligent AI-driven software for a smarter automated future.',
            href: '/services/ai-solutions',
            iconColor: 'text-purple-600',
            bgColor: 'bg-purple-50 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
        },
        {
            icon: ShoppingBag,
            title: 'eCommerce Development',
            description: 'Powerful online stores with seamless payment & inventory flows.',
            href: '/services/ecommerce-development',
            iconColor: 'text-pink-600',
            bgColor: 'bg-pink-50 border-pink-200 group-hover:bg-pink-600 group-hover:text-white',
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps',
            description: 'Scalable cloud infrastructure, CI/CD pipelines, and migration.',
            href: '/services/cloud-devops',
            iconColor: 'text-cyan-600',
            bgColor: 'bg-cyan-50 border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white',
        },
        {
            icon: Headphones,
            title: 'IT Support',
            description: 'Complete IT infrastructure, network security, and maintenance.',
            href: '/services/it-support',
            iconColor: 'text-blue-600',
            bgColor: 'bg-blue-50 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
        },
    ];

    return (
        <section className="bg-slate-50/60 text-slate-900 py-16 lg:py-24 relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            OUR SERVICES
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Everything You Need to Grow Digitally
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            From web and mobile apps to cloud and AI, we provide end-to-end IT solutions for your business.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.bgColor} transition-colors duration-300 mb-5 shadow-sm`}>
                                        <IconComponent className={`w-6 h-6 ${service.iconColor} group-hover:text-white transition-colors`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 text-xs leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
