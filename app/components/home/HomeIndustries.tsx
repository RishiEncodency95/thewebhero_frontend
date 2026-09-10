'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HeartPulse, GraduationCap, Landmark, ShoppingBag, Building, Plane, Truck, Factory, Code, Rocket, Building2 } from 'lucide-react';

export default function HomeIndustries() {
    const industries = [
        { name: 'Healthcare', icon: HeartPulse, color: 'text-red-600', bg: 'bg-red-50 border-red-200' },
        { name: 'Education', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
        { name: 'Finance', icon: Landmark, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-200' },
        { name: 'eCommerce', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-50 border-pink-200' },
        { name: 'Real Estate', icon: Building, color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200' },
        { name: 'Travel', icon: Plane, color: 'text-cyan-600', bg: 'bg-cyan-50 border-cyan-200' },
        { name: 'Logistics', icon: Truck, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
        { name: 'Manufacturing', icon: Factory, color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' },
        { name: 'Software', icon: Code, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
        { name: 'Startups', icon: Rocket, color: 'text-pink-600', bg: 'bg-pink-50 border-pink-200' },
        { name: 'Corporate', icon: Building2, color: 'text-slate-700', bg: 'bg-slate-100 border-slate-200' },
    ];

    return (
        <section className="bg-white text-slate-900 py-16 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-3">
                            INDUSTRIES WE SERVE
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                            Empowering Businesses Across Industries
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                            We understand your industry and build solutions tailored to your goals.
                        </p>
                    </div>

                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group shrink-0"
                    >
                        <span>View All Industries</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {industries.map((ind, idx) => {
                        const IconComp = ind.icon;
                        return (
                            <div
                                key={idx}
                                className="group p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${ind.bg} shadow-sm group-hover:rotate-6 transition-transform`}>
                                    <IconComp className={`w-6 h-6 ${ind.color}`} />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                    {ind.name}
                                </span>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
