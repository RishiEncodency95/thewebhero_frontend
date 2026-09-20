import React from 'react';
import { Code, MessageSquare, Layout, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CompanyValue } from '../../types/company';

interface CompanyValuesProps {
    values: CompanyValue[];
}

const iconMap: Record<string, React.ElementType> = {
    Code,
    MessageSquare,
    Layout,
    ShieldCheck,
};

export default function CompanyValues({ values }: CompanyValuesProps) {
    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        CORE ENGINEERING VALUES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        What Guides Our Work
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, index) => {
                        const Icon = (val.iconName && iconMap[val.iconName]) || ShieldCheck;

                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1769FF] flex items-center justify-center mb-4">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    {val.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {val.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
