import React from 'react';

export interface CompanyFeature {
    title: string;
    description: string;
    Icon: React.ElementType;
}

/** Icon tile colour per position, so a row of cards reads as a set. */
const TONES = [
    'from-pink-500 to-purple-600 shadow-pink-500/25',
    'from-purple-500 to-indigo-600 shadow-purple-500/25',
    'from-blue-500 to-cyan-500 shadow-blue-500/25',
    'from-emerald-500 to-teal-600 shadow-emerald-500/25',
    'from-amber-500 to-orange-500 shadow-amber-500/25',
];

interface CompanyFeatureGridProps {
    items: CompanyFeature[];
    columns?: 2 | 3 | 4;
}

/** Grid of numbered feature cards (values, differentiators, culture principles). */
export default function CompanyFeatureGrid({ items, columns = 4 }: CompanyFeatureGridProps) {
    const cols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns];

    return (
        <div className={`grid grid-cols-1 gap-5 ${cols}`}>
            {items.map(({ title, description, Icon }, i) => (
                <div
                    key={title}
                    className="group relative overflow-hidden rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_20px_40px_-16px_rgba(35,75,125,0.25)]"
                >
                    <span className="absolute right-5 top-4 font-mono text-[13px] font-semibold text-slate-500 transition-colors group-hover:text-purple-400">
                        {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${TONES[i % TONES.length]}`}>
                        <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-slate-900">{title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{description}</p>
                </div>
            ))}
        </div>
    );
}
