'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, LayoutDashboard, Users2, Database, BarChart3, Calendar, ShoppingBag, CloudCog, Code } from 'lucide-react';

export default function HomeSolutions() {
    const solutions = [
        {
            icon: LayoutDashboard,
            title: 'Business Management Systems',
            href: '/solutions/business-management',
            color: 'text-amber-600',
            bgColor: 'bg-amber-50 border-amber-200 group-hover:bg-amber-600 group-hover:text-white',
        },
        {
            icon: Users2,
            title: 'CRM Solutions',
            href: '/solutions/crm-solutions',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            icon: Database,
            title: 'ERP Systems',
            href: '/solutions/erp-systems',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
        },
        {
            icon: BarChart3,
            title: 'Admin Dashboards',
            href: '/solutions/admin-dashboards',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
        },
        {
            icon: Calendar,
            title: 'Booking Platforms',
            href: '/solutions/booking-platforms',
            color: 'text-cyan-600',
            bgColor: 'bg-cyan-50 border-cyan-200 group-hover:bg-cyan-600 group-hover:text-white',
        },
        {
            icon: ShoppingBag,
            title: 'eCommerce Platforms',
            href: '/solutions/ecommerce-platforms',
            color: 'text-pink-600',
            bgColor: 'bg-pink-50 border-pink-200 group-hover:bg-pink-600 group-hover:text-white',
        },
        {
            icon: CloudCog,
            title: 'SaaS Products',
            href: '/solutions/saas-products',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 border-blue-200 group-hover:bg-blue-600 group-hover:text-white',
        },
        {
            icon: Code,
            title: 'Custom Software',
            href: '/solutions/custom-software',
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50 border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white',
        },
    ];

    return (
        <section className="bg-slate-50/60 text-slate-900 py-16 lg:py-24 relative border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            OUR SOLUTIONS
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Custom Solutions for Every Business Need
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            We help businesses across industries with powerful and scalable solutions.
                        </p>
                    </div>

                    <Link
                        href="/solutions"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>View All Solutions</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-5">
                    {solutions.map((item, idx) => {
                        const IconComp = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group p-5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4"
                            >
                                <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${item.bgColor} transition-colors duration-300 shadow-sm`}>
                                    <IconComp className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors`} />
                                </div>
                                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                                    {item.title}
                                </h3>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
