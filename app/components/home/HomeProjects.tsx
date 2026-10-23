import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers, Rocket, UsersRound, ShieldCheck } from 'lucide-react';
import { getProjectImage, TECH_ICON, TONE, DEFAULT_TONE } from '@/app/lib/portfolioMedia';
import type { PortfolioItem } from '@/app/types/portfolio';
import HomeProjectsGrid from './HomeProjectsGrid';
import { splitHighlight, type HomeSections } from '../../lib/home-sections';

/** Cards show at most four chips so the pill block stays two rows. */
const MAX_TECHS = 4;

function TechPills({ techs }: { techs: PortfolioItem['technologies'] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {techs.slice(0, MAX_TECHS).map((tech) => {
                const entry = tech.iconName ? TECH_ICON[tech.iconName] : undefined;
                const Icon = entry?.Icon;

                return (
                    <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-1 text-[12px] font-semibold text-slate-600 shadow-sm"
                    >
                        {Icon && <Icon className={`h-3.5 w-3.5 ${entry?.color}`} aria-hidden="true" />}
                        {tech.name}
                    </span>
                );
            })}
        </div>
    );
}

function ProjectCard({ project }: { project: PortfolioItem }) {
    const tone = TONE[project.slug] ?? DEFAULT_TONE;

    return (
        <article className="group relative flex h-full overflow-hidden rounded-[20px] border border-slate-200/80 bg-white shadow-[0_8px_28px_rgba(35,75,125,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(35,75,125,0.14)]">
            <div className={`absolute inset-0 bg-gradient-to-br ${tone}`} aria-hidden="true" />

            <div className="relative z-10 flex w-full items-stretch">
                {/* Left 50% — text */}
                <div className="flex w-1/2 flex-col p-3 sm:p-5">
                    <h3 className="text-[18px] font-bold leading-snug tracking-[-0.01em] text-[#07112f]">
                        {/* The whole card is clickable via this link's overlay,
                            which also gives each project a real internal link. */}
                        <Link href={`/portfolio/${project.slug}`} className="after:absolute after:inset-0">
                            {project.title}
                        </Link>
                    </h3>
                    <p className="mt-1 text-[13px] font-semibold leading-snug text-[#687a9d]">
                        {project.subtitle}
                    </p>

                    <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[#40567e]">
                        {project.shortDescription}
                    </p>

                    <div className="mt-4">
                        <TechPills techs={project.technologies} />
                    </div>
                </div>

                {/* Right 50% — image. The box uses the artwork's own ratio
                    (1108x1419) so the full mockup shows with nothing cropped. */}
                <div className="flex w-1/2 items-center p-2">
                    <div className="relative aspect-[1108/1419] w-full overflow-hidden rounded-[14px] shadow-[0_8px_20px_-10px_rgba(15,23,42,0.35)]">
                        <Image
                            src={getProjectImage(project)}
                            alt={project.coverImageAlt ?? project.title}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 17vw"
                            className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
}


export default function HomeProjects({ projects, content }: { projects: PortfolioItem[]; content: HomeSections['projects'] }) {

    return (
        <section
            id="projects"
            className="relative overflow-hidden border-t border-slate-200 bg-[#f8fbff] py-2 lg:py-6"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-indigo-100/40 blur-3xl" />
            <div className="pointer-events-none absolute left-[42%] top-[25%] h-[260px] w-[260px] rounded-full bg-cyan-100/30 blur-3xl" />

            <div className="relative w-full px-4 sm:px-7 lg:px-20">
                {/* ================= HEADER ================= */}
               
                <HomeProjectsGrid
                    viewAllLabel={content.buttonLabel || 'View All Projects'}
                    intro={
                        <>
                    <div className="max-w-3xl">
                        {/* Gradient-bordered category pill */}
                        <div className="inline-flex items-center justify-center p-[1.5px] rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 mb-3 shadow-sm">
                            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wider uppercase">
                                <Layers className="w-3.5 h-3.5" />
                                <span>{content.eyebrow}</span>
                            </div>
                        </div>

                        <h2 className="text-lg lg:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                            {splitHighlight(content.title).map((part, i) =>
                                part.hl ? (
                                    <span key={i} className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                                        {part.text}
                                    </span>
                                ) : (
                                    part.text
                                ),
                            )}
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base lg:text-[16px] mt-2 max-w-2xl font-normal leading-relaxed">
                            {content.description}
                        </p>
                    </div>

                    {/* Handwritten text decoration */}
                    <div className="hidden lg:flex flex-col items-center absolute right-[350px] top-4 -rotate-6 transform pointer-events-none select-none">
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide">Ideas</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2">Develop</span>
                        <span className="text-slate-800 font-serif italic text-2xl font-bold tracking-wide -mt-2 relative">
                            Real Solutions
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#1D61FF]" viewBox="0 0 60 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5C15 2 35 1.5 59 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                    </div>
                        </>
                    }
                    cards={projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                />

                {/* ================= CTA ================= */}
                <div className="relative mt-5 rounded-lg overflow-hidden border-t border-blue-100 bg-gradient-to-r from-[#edf6ff] via-white to-[#eef4ff] px-5 py-2 sm:px-8 sm:py-2">
                    <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-blue-100/80 blur-3xl" />
                    <div className="pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto_auto] lg:items-center">
                        <div>
                            <p className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#1769FF]">
                                LET&apos;S WORK TOGETHER
                            </p>

                            <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#07112f] sm:text-[20px]">
                                Let&apos;s Build Something Amazing{' '}
                                <span className="text-[#1769FF]">Together</span>
                            </h3>

                            <p className="mt-1.5 text-[14px] font-normal leading-[1.55] text-[#687a9d]">
                                From web platforms to mobile apps, we turn ideas into powerful digital products.
                            </p>
                        </div>

                        <div className="hidden items-center gap-4 lg:flex">
                            <div className="flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <Rocket className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="text-[12px] font-semibold leading-tight text-[#526789]">
                                    Innovative
                                    <br />
                                    Solutions
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <UsersRound className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="text-[12px] font-semibold leading-tight text-[#526789]">
                                    Experienced
                                    <br />
                                    Team
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-white text-[#1769FF] shadow-sm">
                                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="text-[12px] font-semibold leading-tight text-[#526789]">
                                    On-Time
                                    <br />
                                    Delivery
                                </span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-2 text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(23,105,255,0.22)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30"
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