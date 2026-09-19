'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    Crown,
    ExternalLink,
    Layers,
    MapPin,
    Home,
    Flower2,
    LayoutDashboard,
    Smartphone,
    Store,
    Gamepad2,
    Rocket,
    UsersRound,
    ShieldCheck,
} from 'lucide-react';

import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiFlutter,
    SiMysql,
} from 'react-icons/si';

type Tech = {
    name: string;
    Icon: React.ElementType;
    color: string;
};

type Project = {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
    icon: React.ElementType;
    iconBg: string;
    accent: string;
    softGradient: string;
    platform: string;
    stack: string;
    liveUrl?: string;
    featured?: boolean;
    techs: Tech[];
};

const MERN: Tech[] = [
    { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
    { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'Express.js', Icon: SiExpress, color: 'text-slate-900' },
    { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
];

const MOBILE: Tech[] = [
    { name: 'Flutter', Icon: SiFlutter, color: 'text-cyan-500' },
    { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
];

const featuredProjects: Project[] = [
    {
        title: 'CityCalls',
        subtitle: 'Multi-Service Platform',
        description:
            'A complete on-demand service platform connecting users with trusted service providers for everyday needs.',
        image: '/projects/citycalls.png',
        imageAlt: 'CityCalls website and mobile interface',
        icon: MapPin,
        iconBg: 'bg-[#1769FF]',
        accent: 'bg-[#1769FF]',
        softGradient: 'from-blue-100 via-blue-50 to-white',
        platform: 'Web Platform',
        stack: 'MERN Stack',
        liveUrl: 'https://citycalls.in/',
        featured: true,
        techs: MERN,
    },
    {
        title: 'HelpNow',
        subtitle: 'by CityCalls • Home Maid & Cleaning Services',
        description:
            'A dedicated platform to book verified home maid and cleaning services with ease and trust.',
        image: '/projects/helpnow.png',
        imageAlt: 'HelpNow website and mobile interface',
        icon: Home,
        iconBg: 'bg-emerald-500',
        accent: 'bg-emerald-500',
        softGradient: 'from-emerald-100 via-emerald-50 to-white',
        platform: 'Web Platform',
        stack: 'MERN Stack',
        liveUrl: 'https://helpnow.citycalls.in/',
        featured: true,
        techs: MERN,
    },
    {
        title: 'CityCalls Salon',
        subtitle: 'Salon & Beauty Services',
        description:
            'A modern salon booking platform that connects users with salons and beauty professionals.',
        image: '/projects/citycalls-salon.png',
        imageAlt: 'CityCalls Salon website and mobile interface',
        icon: Flower2,
        iconBg: 'bg-pink-500',
        accent: 'bg-pink-500',
        softGradient: 'from-pink-100 via-pink-50 to-white',
        platform: 'Web Platform',
        stack: 'MERN Stack',
        liveUrl: 'https://salon.citycalls.in/',
        featured: true,
        techs: MERN,
    },
];

const projects: Project[] = [
    {
        title: 'CityCalls Admin',
        subtitle: 'Administration Dashboard',
        description:
            'A powerful admin panel to manage users, services, bookings, and operations across the CityCalls ecosystem.',
        image: '/projects/citycalls-admin.png',
        imageAlt: 'CityCalls admin dashboard',
        icon: LayoutDashboard,
        iconBg: 'bg-[#1769FF]',
        accent: 'bg-[#1769FF]',
        softGradient: 'from-blue-100 via-blue-50 to-white',
        platform: 'Web Platform',
        stack: 'MERN Stack',
        liveUrl: 'https://admin.citycalls.in/dashboard',
        techs: MERN,
    },
    {
        title: 'CityCalls Customer App',
        subtitle: 'On-Demand Service App',
        description:
            'A feature-rich mobile app for customers to easily book services anytime, anywhere.',
        image: '/projects/citycalls-customer-app.png',
        imageAlt: 'CityCalls customer mobile app',
        icon: Smartphone,
        iconBg: 'bg-[#F59E0B]',
        accent: 'bg-[#F59E0B]',
        softGradient: 'from-amber-100 via-orange-50 to-white',
        platform: 'Mobile App',
        stack: 'Flutter + Node.js + MongoDB',
        techs: MOBILE,
    },
    {
        title: 'CityCalls Vendor App',
        subtitle: 'For Service Providers',
        description:
            'A dedicated app for vendors to manage bookings, track earnings, and manage their services.',
        image: '/projects/citycalls-vendor-app.png',
        imageAlt: 'CityCalls vendor mobile app',
        icon: Store,
        iconBg: 'bg-violet-600',
        accent: 'bg-violet-600',
        softGradient: 'from-violet-100 via-purple-50 to-white',
        platform: 'Mobile App',
        stack: 'Flutter + Node.js + MongoDB',
        techs: MOBILE,
    },
    {
        title: 'Wingame11',
        subtitle: 'Quiz & Game Platform',
        description:
            'A web application built for an interactive quiz and game experience.',
        image: '/projects/wingame11.png',
        imageAlt: 'Wingame11 web application',
        icon: Gamepad2,
        iconBg: 'bg-indigo-600',
        accent: 'bg-indigo-600',
        softGradient: 'from-indigo-100 via-purple-50 to-white',
        platform: 'Web App',
        stack: 'MERN Stack + MySQL',
        liveUrl: 'https://wingame11.com/',
        techs: [
            { name: 'React', Icon: SiReact, color: 'text-cyan-500' },
            { name: 'Node.js', Icon: SiNodedotjs, color: 'text-green-600' },
            { name: 'MongoDB', Icon: SiMongodb, color: 'text-green-600' },
            { name: 'MySQL', Icon: SiMysql, color: 'text-blue-600' },
        ],
    },
];

function TechPills({
    techs,
    compact = false,
}: {
    techs: Tech[];
    compact?: boolean;
}) {
    return (
        <div className={`flex flex-wrap ${compact ? 'gap-1.5' : 'gap-2'}`}>
            {techs.map(({ name, Icon, color }) => (
                <span
                    key={name}
                    className={`inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 font-semibold text-slate-600 shadow-sm ${compact
                        ? 'px-2 py-1 text-[9px]'
                        : 'px-2.5 py-1.5 text-[10px]'
                        }`}
                >
                    <Icon
                        className={`${compact ? 'h-3 w-3' : 'h-3.5 w-3.5'} ${color}`}
                    />
                    {name}
                </span>
            ))}
        </div>
    );
}

function LiveProjectLink({
    project,
    compact = false,
}: {
    project: Project;
    compact?: boolean;
}) {
    if (!project.liveUrl) return null;

    return (
        <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-semibold text-[#1769FF] hover:underline ${compact ? 'text-[9px]' : 'text-[10px]'
                }`}
        >
            Live Project
            <span className="text-slate-300">|</span>
            <span className="max-w-[150px] truncate">
                {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
            <ExternalLink className="h-3 w-3 shrink-0" />
        </a>
    );
}

export default function HomeProjects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden border-t border-slate-200 bg-[#f8fbff] py-14 sm:py-16 lg:py-20"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-indigo-100/40 blur-3xl" />
            <div className="pointer-events-none absolute left-[42%] top-[25%] h-[260px] w-[260px] rounded-full bg-cyan-100/30 blur-3xl" />

            <div className="relative mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-8">
                {/* ================= HEADER ================= */}
                <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_250px_250px] lg:items-end">
                    <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-[#1769FF]">
                            <Layers className="h-3.5 w-3.5" />
                            OUR WORK
                        </div>

                        <h2 className="text-[42px] font-black leading-[1.03] tracking-[-0.04em] text-[#07112f] sm:text-[50px] lg:text-[54px]">
                            Featured{' '}
                            <span className="text-[#1769FF]">Projects</span>
                        </h2>

                        <p className="mt-4 max-w-[670px] text-[15px] font-medium leading-6 text-[#61739a] sm:text-[16px]">
                            We build powerful digital solutions that solve real problems and create
                            meaningful impact. Explore some of our latest work across web and mobile platforms.
                        </p>
                    </div>

                    {/* Handwritten heading accent */}
                    <div className="hidden lg:block -rotate-[8deg] pb-4">
                        <div className="font-serif text-[25px] font-semibold italic leading-[0.95] text-[#111b3d]">
                            <span className="block">Ideas</span>
                            <span className="ml-4 block">Develop</span>
                            <span className="relative ml-8 block">
                                Real Solutions
                                <svg
                                    className="absolute -bottom-4 left-5 h-3 w-[140px] text-[#1769FF]"
                                    viewBox="0 0 140 12"
                                    fill="none"
                                >
                                    <path
                                        d="M2 8C40 0 95 1 137 8"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 lg:items-end">
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-3 rounded-full bg-[#1769FF] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(23,105,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1257d7]"
                        >
                            View All Projects
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <div className="hidden text-right text-[9px] font-bold uppercase leading-[1.8] tracking-[0.24em] text-slate-400 lg:block">
                            Trusted
                            <br />
                            Technology
                            <br />
                            Real Impact
                        </div>
                    </div>
                </div>

                {/* ================= 3 FEATURED CARDS ================= */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <article
                                key={project.title}
                                className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(35,75,125,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(35,75,125,0.14)]"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.softGradient}`}
                                />
                                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/60 blur-3xl" />

                                {/* Decorative image panel */}
                                <div className="absolute bottom-10 right-0 h-[75%] w-[54%] overflow-hidden pointer-events-none">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${project.softGradient} opacity-60`}
                                    />
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 33vw"
                                        className="relative z-10 object-contain object-bottom drop-shadow-[-14px_12px_25px_rgba(15,23,42,0.15)] transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>

                                {/* Featured badge */}
                                <div
                                    className={`absolute left-4 top-4 z-30 inline-flex items-center gap-1.5 rounded-full ${project.accent} px-3.5 py-1.5 text-[11px] font-bold text-white shadow-md`}
                                >
                                    <Crown className="h-3.5 w-3.5" />
                                    Featured Project
                                </div>

                                {/* Content */}
                                <div className="relative z-20 flex flex-1 flex-col justify-between w-[60%] p-5 pt-[62px] sm:p-6 sm:pt-[64px]">
                                    <div>
                                        <div className="mb-3.5 flex items-start gap-3">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${project.iconBg} text-white shadow-lg`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="text-[19px] font-black leading-tight tracking-[-0.02em] text-[#07112f]">
                                                    {project.title}
                                                </h3>
                                                <p className="mt-1 text-[11px] font-semibold leading-tight text-[#687a9d]">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-4 text-[12px] font-medium leading-[1.6] text-[#40567e]">
                                            {project.description}
                                        </p>

                                        <TechPills techs={project.techs} />
                                    </div>

                                    <div className="mt-5 flex items-center gap-2 pb-10">
                                        <Link
                                            href="/projects"
                                            className={`inline-flex items-center gap-2 rounded-full ${project.accent} px-4 py-2 text-[11px] font-bold text-white shadow-md transition hover:brightness-95`}
                                        >
                                            View Case Study
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${project.title}`}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1769FF] shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom metadata */}
                                <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-2 border-t border-slate-200/70 bg-white/90 px-5 py-2.5 text-[10px] font-bold text-[#7183a4] backdrop-blur-md">
                                    {project.liveUrl ? (
                                        <LiveProjectLink project={project} />
                                    ) : (
                                        <span>{project.platform}</span>
                                    )}

                                    <span className="ml-auto hidden items-center gap-2 sm:flex">
                                        <span>{project.platform}</span>
                                        <span className="h-3 w-px bg-slate-300" />
                                        <span>{project.stack}</span>
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* ================= 4 OTHER CARDS ================= */}
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        const Icon = project.icon;

                        return (
                            <article
                                key={project.title}
                                className="group relative flex h-full min-h-[420px] flex-col justify-between overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(35,75,125,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(35,75,125,0.14)]"
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.softGradient} opacity-75`}
                                />
                                <div className="absolute -right-16 -top-14 h-48 w-48 rounded-full bg-white/70 blur-3xl" />

                                {/* Product visual */}
                                <div className="absolute bottom-10 right-0 h-[75%] w-[54%] overflow-hidden pointer-events-none">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(max-width: 1024px) 50vw, 33vw"
                                        className="object-contain object-bottom drop-shadow-[-12px_12px_22px_rgba(15,23,42,0.14)] transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative z-20 flex flex-1 flex-col justify-between w-[60%] p-5 sm:p-6">
                                    <div>
                                        <div className="mb-3.5 flex items-start gap-3">
                                            <div
                                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] ${project.iconBg} text-white shadow-lg`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <h3 className="text-[19px] font-black leading-tight tracking-[-0.02em] text-[#07112f]">
                                                    {project.title}
                                                </h3>
                                                <p className="mt-1 text-[11px] font-semibold leading-tight text-[#687a9d]">
                                                    {project.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mb-4 text-[12px] font-medium leading-[1.6] text-[#40567e]">
                                            {project.description}
                                        </p>

                                        <TechPills techs={project.techs} />
                                    </div>

                                    <div className="mt-5 flex items-center gap-2 pb-10">
                                        <Link
                                            href="/projects"
                                            className={`inline-flex items-center gap-2 rounded-full ${project.accent} px-4 py-2 text-[11px] font-bold text-white shadow-md transition hover:brightness-95`}
                                        >
                                            View Case Study
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </Link>

                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Open ${project.title}`}
                                                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1769FF] shadow-sm transition hover:border-blue-200 hover:bg-blue-50"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom metadata */}
                                <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center gap-2 border-t border-slate-200/70 bg-white/90 px-5 py-2.5 text-[10px] font-bold text-[#7183a4] backdrop-blur-md">
                                    {project.liveUrl ? (
                                        <LiveProjectLink project={project} />
                                    ) : (
                                        <span>{project.platform}</span>
                                    )}

                                    <span className="ml-auto hidden items-center gap-2 sm:flex">
                                        <span>{project.platform}</span>
                                        <span className="h-3 w-px bg-slate-300" />
                                        <span>{project.stack}</span>
                                    </span>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* ================= CTA ================= */}
                <div className="relative mt-5 overflow-hidden border-t border-blue-100 bg-gradient-to-r from-[#edf6ff] via-white to-[#eef4ff] px-6 py-7 sm:px-10 sm:py-8">
                    <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/80 blur-3xl" />
                    <div className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                        <div>
                            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#1769FF]">
                                LET&apos;S WORK TOGETHER
                            </p>

                            <h3 className="text-[23px] font-black tracking-[-0.025em] text-[#07112f] sm:text-[26px]">
                                Let&apos;s Build Something Amazing{' '}
                                <span className="text-[#1769FF]">Together</span>
                            </h3>

                            <p className="mt-1 text-[11px] font-medium text-[#687a9d] sm:text-[12px]">
                                From web platforms to mobile apps, we turn ideas into powerful digital products.
                            </p>
                        </div>

                        <div className="hidden items-center gap-5 lg:flex">
                            <div className="flex items-center gap-2">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <Rocket className="h-5 w-5" />
                                </span>
                                <span className="text-[10px] font-semibold leading-tight text-[#526789]">
                                    Innovative
                                    <br />
                                    Solutions
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <UsersRound className="h-5 w-5" />
                                </span>
                                <span className="text-[10px] font-semibold leading-tight text-[#526789]">
                                    Experienced
                                    <br />
                                    Team
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <ShieldCheck className="h-5 w-5" />
                                </span>
                                <span className="text-[10px] font-semibold leading-tight text-[#526789]">
                                    On-Time
                                    <br />
                                    Delivery
                                </span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#1769FF] px-8 py-3.5 text-[12px] font-bold text-white shadow-[0_12px_26px_rgba(23,105,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1257d7]"
                        >
                            Start Your Project
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}