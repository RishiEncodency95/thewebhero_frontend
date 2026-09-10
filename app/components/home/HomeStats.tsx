'use client';

import React from 'react';
import { Rocket, Cpu, ShieldCheck, Award } from 'lucide-react';

export default function HomeStats() {
    const stats = [
        {
            icon: Rocket,
            iconColor: 'text-blue-600',
            bgColor: 'bg-blue-50 border-blue-100',
            value: '50+',
            label: 'Projects Delivered',
        },
        {
            icon: Cpu,
            iconColor: 'text-purple-600',
            bgColor: 'bg-purple-50 border-purple-100',
            value: '20+',
            label: 'Technologies',
        },
        {
            icon: ShieldCheck,
            iconColor: 'text-pink-600',
            bgColor: 'bg-pink-50 border-pink-100',
            value: '15+',
            label: 'Business Solutions',
        },
        {
            icon: Award,
            iconColor: 'text-emerald-600',
            bgColor: 'bg-emerald-50 border-emerald-100',
            value: '98%',
            label: 'Client Satisfaction',
        },
    ];

    return (
        <section className="bg-white relative z-20 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-slate-100 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)]">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                        {stats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className={`flex items-center gap-4 ${index > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${stat.bgColor} shrink-0 shadow-sm`}>
                                        <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs sm:text-sm text-slate-500 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
