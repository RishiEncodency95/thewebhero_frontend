import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { TeamMember } from '../../types/company';

/** True for a real profile URL — the data file uses bare site roots
 *  (e.g. "https://linkedin.com/") as placeholders, which we hide. */
export function isProfileUrl(url?: string) {
    if (!url) return false;
    try {
        return new URL(url).pathname.replace(/\/+$/, '').length > 0;
    } catch {
        return false;
    }
}

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    const linkedin = isProfileUrl(member.socialLinks?.linkedin) ? member.socialLinks?.linkedin : undefined;
    const github = isProfileUrl(member.socialLinks?.github) ? member.socialLinks?.github : undefined;

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_22px_44px_-16px_rgba(35,75,125,0.28)]">
            {/* Banner + avatar */}
            <div className="relative h-24 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600">
                <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true" />
            </div>
            <div className="relative -mt-12 px-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-[22px] border-4 border-white bg-white shadow-lg">
                    <Image src={member.photo} alt={member.name} fill sizes="96px" className="object-contain p-2" />
                </div>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-purple-700">
                    <Link href={`/company/team/${member.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                        {member.name}
                    </Link>
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-purple-600">{member.role}</p>

                <p className="mt-3 line-clamp-3 text-[14px] leading-relaxed text-slate-600">{member.bio}</p>

                {member.expertise && member.expertise.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {member.expertise.slice(0, 4).map((exp) => (
                            <span key={exp} className="rounded-full bg-slate-50 px-2.5 py-1 text-[12px] font-semibold text-slate-600 ring-1 ring-slate-200/80">
                                {exp}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4 sm:mt-6">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 transition-colors group-hover:text-purple-600">
                        View profile
                        <ArrowUpRight className="h-4 w-4" />
                    </span>
                    <div className="relative z-10 flex gap-1.5">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-900 hover:text-white">
                                <FaLinkedinIn className="h-3.5 w-3.5" />
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on GitHub`} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:bg-slate-900 hover:text-white">
                                <FaGithub className="h-3.5 w-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
