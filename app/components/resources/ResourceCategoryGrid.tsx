import React from 'react';
import Link from 'next/link';
import {
    BookOpen,
    FileText,
    GraduationCap,
    HelpCircle,
    Download,
    Video,
    Layers,
    ArrowRight,
    Trophy
} from 'lucide-react';

const categories = [
    {
        title: 'Blog & Engineering Insights',
        description: 'Articles on software architecture, Next.js, React, Node.js, and industry insights.',
        icon: BookOpen,
        color: 'text-blue-600 bg-blue-50 border-blue-100',
        href: '/resources/blog',
        badge: 'Articles'
    },
    {
        title: 'Developer & Buyer Guides',
        description: 'Comprehensive guides for tech stack selection, web development, and mobile apps.',
        icon: FileText,
        color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
        href: '/resources/guides',
        badge: 'Guides'
    },
    {
        title: 'Code Tutorials',
        description: 'Step-by-step technical tutorials with code snippets and production setup workflows.',
        icon: GraduationCap,
        color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        href: '/resources/tutorials',
        badge: 'Tutorials'
    },
    {
        title: 'FAQs Knowledge Base',
        description: 'Answers to common questions regarding development services, timelines, and technology.',
        icon: HelpCircle,
        color: 'text-amber-600 bg-amber-50 border-amber-100',
        href: '/resources/faqs',
        badge: 'Knowledge'
    },
    {
        title: 'Whitepapers & eBooks',
        description: 'Technical blueprints and downloadable PDF guides for software modernization.',
        icon: Download,
        color: 'text-purple-600 bg-purple-50 border-purple-100',
        href: '/resources/whitepapers',
        badge: 'Downloads'
    },
    {
        title: 'Webinars & Recordings',
        description: 'Recorded engineering workshops and video walkthroughs on modern web tech.',
        icon: Video,
        color: 'text-rose-600 bg-rose-50 border-rose-100',
        href: '/resources/webinars',
        badge: 'Videos'
    },
    {
        title: 'Tech Terms Glossary',
        description: 'Definitions of software engineering, cloud, frontend, and backend development terms.',
        icon: Layers,
        color: 'text-slate-800 bg-slate-100 border-slate-200',
        href: '/resources/glossary',
        badge: 'Terms A-Z'
    },
    {
        title: 'Case Studies Showcase',
        description: 'Explore real-world client success stories and technical project breakdowns.',
        icon: Trophy,
        color: 'text-purple-700 bg-purple-100 border-purple-200',
        href: '/case-studies',
        badge: 'Case Studies'
    }
];

export default function ResourceCategoryGrid() {
    return (
        <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-10">
                    <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-2">
                        DISCOVER BY CONTENT TYPE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Explore Resource Categories
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => {
                        const Icon = cat.icon;

                        return (
                            <Link
                                key={cat.title}
                                href={cat.href}
                                className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${cat.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider">
                                            {cat.badge}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1769FF] transition-colors mb-2">
                                        {cat.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                                        {cat.description}
                                    </p>
                                </div>

                                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1769FF] group-hover:text-blue-700 pt-2 border-t border-slate-100 mt-auto">
                                    <span>Browse Category</span>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
