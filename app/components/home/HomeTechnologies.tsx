'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Settings, Monitor, Server, Smartphone, Database, Cloud, Wrench, ShoppingCart, LayoutGrid, ShieldCheck, Zap, Users, Clock } from 'lucide-react';
import {
    SiReact, SiNextdotjs, SiHtml5, SiTailwindcss,
    SiNodedotjs, SiExpress, SiPhp, SiPython,
    SiFlutter, SiKotlin, SiSwift,
    SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis,
    SiGooglecloud, SiDocker, SiKubernetes,
    SiPostman,
    SiWoocommerce,
    SiGraphql, SiTypescript, SiSocketdotio
} from 'react-icons/si';

import {
    FaJava, FaAws, FaFigma, FaGitAlt, FaGithub,
    FaWordpress, FaShopify, FaDrupal, FaBrain, FaLink, FaCss3Alt, FaMagento
} from 'react-icons/fa';

import { VscAzure } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';

export default function HomeTechnologies() {
    const [showAll, setShowAll] = useState(false);

    const categories = [
        {
            title: 'Frontend',
            subtitle: 'Modern & interactive UI',
            Icon: Monitor,
            iconBg: 'bg-blue-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-blue-400',
            cardBg: 'bg-blue-50/60 border-blue-100/90 hover:bg-blue-50',
            techs: [
                { name: 'React', Icon: SiReact, color: 'text-[#61DAFB]' },
                { name: 'Next.js', Icon: SiNextdotjs, color: 'text-black' },
                { name: 'HTML', Icon: SiHtml5, color: 'text-[#E34F26]' },
                { name: 'CSS', Icon: FaCss3Alt, color: 'text-[#1572B6]' },
                { name: 'Tailwind', Icon: SiTailwindcss, color: 'text-[#06B6D4]' },
            ]
        },
        {
            title: 'Backend',
            subtitle: 'Powerful & scalable APIs',
            Icon: Server,
            iconBg: 'bg-emerald-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-emerald-400',
            cardBg: 'bg-emerald-50/60 border-emerald-100/90 hover:bg-emerald-50',
            techs: [
                { name: 'Node.js', Icon: SiNodedotjs, color: 'text-[#339933]' },
                { name: 'Express', Icon: SiExpress, color: 'text-gray-700' },
                { name: 'PHP', Icon: SiPhp, color: 'text-[#777BB4]' },
                { name: 'Python', Icon: SiPython, color: 'text-[#3776AB]' },
                { name: 'Java', Icon: FaJava, color: 'text-[#007396]' },
            ]
        },
        {
            title: 'Mobile Development',
            subtitle: 'Native & cross-platform',
            Icon: Smartphone,
            iconBg: 'bg-rose-500',
            iconText: 'text-white',
            borderGlow: 'hover:border-rose-400',
            cardBg: 'bg-rose-50/60 border-rose-100/90 hover:bg-rose-50',
            techs: [
                { name: 'Flutter', Icon: SiFlutter, color: 'text-[#02569B]' },
                { name: 'React Native', Icon: SiReact, color: 'text-[#61DAFB]' },
                { name: 'Kotlin', Icon: SiKotlin, color: 'text-[#7F52FF]' },
                { name: 'Swift', Icon: SiSwift, color: 'text-[#F05138]' },
                { name: 'Java', Icon: FaJava, color: 'text-[#007396]' },
            ]
        },
        {
            title: 'Databases',
            subtitle: 'Secure & reliable data',
            Icon: Database,
            iconBg: 'bg-indigo-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-indigo-400',
            cardBg: 'bg-indigo-50/60 border-indigo-100/90 hover:bg-indigo-50',
            techs: [
                { name: 'MongoDB', Icon: SiMongodb, color: 'text-[#47A248]' },
                { name: 'MySQL', Icon: SiMysql, color: 'text-[#4479A1]' },
                { name: 'PostgreSQL', Icon: SiPostgresql, color: 'text-[#4169E1]' },
                { name: 'Firebase', Icon: SiFirebase, color: 'text-[#FFCA28]' },
                { name: 'Redis', Icon: SiRedis, color: 'text-[#DC382D]' },
            ]
        },
        {
            title: 'Cloud & DevOps',
            subtitle: 'Scale without limits',
            Icon: Cloud,
            iconBg: 'bg-amber-500',
            iconText: 'text-white',
            borderGlow: 'hover:border-amber-400',
            cardBg: 'bg-amber-50/60 border-amber-100/90 hover:bg-amber-50',
            techs: [
                { name: 'AWS', Icon: FaAws, color: 'text-[#232F3E]' },
                { name: 'Google Cloud', Icon: SiGooglecloud, color: 'text-[#4285F4]' },
                { name: 'Azure', Icon: VscAzure, color: 'text-[#0078D4]' },
                { name: 'Docker', Icon: SiDocker, color: 'text-[#2496ED]' },
                { name: 'Kubernetes', Icon: SiKubernetes, color: 'text-[#326CE5]' },
            ]
        },
        {
            title: 'Tools & Platforms',
            subtitle: 'Design, collaboration & productivity',
            Icon: Wrench,
            iconBg: 'bg-sky-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-sky-400',
            cardBg: 'bg-sky-50/60 border-sky-100/90 hover:bg-sky-50',
            techs: [
                { name: 'Figma', Icon: FaFigma, color: 'text-[#F24E1E]' },
                { name: 'Git', Icon: FaGitAlt, color: 'text-[#F05032]' },
                { name: 'GitHub', Icon: FaGithub, color: 'text-black' },
                { name: 'VS Code', Icon: TbBrandVscode, color: 'text-[#007ACC]' },
                { name: 'Postman', Icon: SiPostman, color: 'text-[#FF6C37]' },
            ]
        },
        {
            title: 'CMS & eCommerce',
            subtitle: 'Flexible content & online stores',
            Icon: ShoppingCart,
            iconBg: 'bg-pink-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-pink-400',
            cardBg: 'bg-pink-50/60 border-pink-100/90 hover:bg-pink-50',
            techs: [
                { name: 'WordPress', Icon: FaWordpress, color: 'text-[#21759B]' },
                { name: 'Shopify', Icon: FaShopify, color: 'text-[#7AB55C]' },
                { name: 'Magento', Icon: FaMagento, color: 'text-[#EE672F]' },
                { name: 'WooCommerce', Icon: SiWoocommerce, color: 'text-[#96588A]' },
                { name: 'Drupal', Icon: FaDrupal, color: 'text-[#0678BE]' },
            ]
        },
        {
            title: 'Other Technologies',
            subtitle: 'More possibilities',
            Icon: LayoutGrid,
            iconBg: 'bg-purple-600',
            iconText: 'text-white',
            borderGlow: 'hover:border-purple-400',
            cardBg: 'bg-purple-50/60 border-purple-100/90 hover:bg-purple-50',
            techs: [
                { name: 'GraphQL', Icon: SiGraphql, color: 'text-[#E10098]' },
                { name: 'TypeScript', Icon: SiTypescript, color: 'text-[#3178C6]' },
                { name: 'WebSocket', Icon: SiSocketdotio, color: 'text-black' },
                { name: 'AI/ML', Icon: FaBrain, color: 'text-blue-600' },
                { name: 'Blockchain', Icon: FaLink, color: 'text-blue-500' },
            ]
        }
    ];

    return (
        <section className="bg-gradient-to-br from-[#F4F7FB] via-[#EBF2F9] to-[#E3ECF5] text-slate-900 lg:py-6 py-2 relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-400/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="w-full px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative mb-8">
                    <div className="max-w-3xl">
                        {/* Small Category Pill with Linear Gradient Border */}
                        <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                                <Settings className="w-3.5 h-3.5" />
                                <span>TECHNOLOGIES</span>
                            </div>
                        </div>
                        <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                            Technologies{' '}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                We Work With
                            </span>
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] mt-2 max-w-2xl font-normal leading-relaxed">
                            We use modern technologies to build fast, secure, and scalable solutions
                            that help businesses grow in the digital world.
                        </p>
                    </div>

                    {/* Handwritten text decoration */}
                    <div className="hidden lg:flex flex-col items-center absolute right-[350px] top-4 -rotate-6 transform pointer-events-none select-none">
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide">Build</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2">Innovate</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2 relative">
                            Grow
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#1D61FF]" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5C15 2 35 1.5 59 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </div>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D61FF] hover:bg-[#154ECB] text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all group shrink-0 mt-2 md:mt-0 cursor-pointer"
                    >
                        <span>{showAll ? 'Show Less' : 'View All Technologies'}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>
                </div>

                {/* Tech Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 mt-4">
                    {(showAll ? categories : categories.slice(0, 6)).map((category, idx) => {
                        const CategoryIcon = category.Icon;
                        return (
                            <div
                                key={idx}
                                className={`rounded-[24px] p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border backdrop-blur-md transition-all duration-400 ${category.cardBg} ${category.borderGlow} group hover:-translate-y-1.5`}
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center shadow-lg ${category.iconBg} ${category.iconText} group-hover:scale-105 transition-transform duration-300`}>
                                            <CategoryIcon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-slate-900 text-[19px] leading-tight group-hover:text-[#1D61FF] transition-colors">
                                                {category.title}
                                            </h3>
                                            <p className="text-[13.5px] font-medium text-slate-600 mt-1 line-clamp-1">
                                                {category.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-blue-600 bg-white group-hover:bg-[#1D61FF] group-hover:border-[#1D61FF] group-hover:text-white transition-colors shrink-0 shadow-xs">
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-2">
                                    {category.techs.map((tech, tIdx) => (
                                        <div key={tIdx} className="flex flex-col items-center gap-3 group/tech cursor-pointer">
                                            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-sm border border-slate-200/80 flex items-center justify-center group-hover/tech:-translate-y-2 group-hover/tech:shadow-md transition-all duration-300">
                                                <tech.Icon className={`w-6 h-6 lg:w-7 lg:h-7 opacity-90 group-hover/tech:opacity-100 ${tech.color} transition-opacity`} />
                                            </div>
                                            <span className="text-[11px] lg:text-[12px] font-bold text-slate-700 truncate max-w-[65px] text-center group-hover/tech:text-[#1D61FF] transition-colors">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Section */}
                <div className="mt-4 flex flex-col lg:flex-row items-center justify-between border-t border-slate-200/60 pt-4 gap-6">
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-8">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-blue-600" />
                            <span className="text-[16px] font-semibold text-slate-700">Reliable & Secure</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-blue-600" />
                            <span className="text-[16px] font-semibold text-slate-700">High Performance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span className="text-[16px] font-semibold text-slate-700">Scalable Solutions</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span className="text-[16px] font-semibold text-slate-700">Future Ready</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block w-16 h-[2px] bg-slate-300"></div>
                        <span className="text-[16px] font-semibold text-slate-700 tracking-[0.15em] uppercase text-center sm:text-right">
                            Modern Technologies For A Brighter Tomorrow
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
}
