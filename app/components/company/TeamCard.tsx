import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { TeamMember } from '../../types/company';

/** True for a real profile URL — bare site roots (e.g. "https://linkedin.com/") are placeholders and get hidden. */
export function isProfileUrl(url?: string) {
    if (!url) return false;
    try {
        return new URL(url).pathname.replace(/\/+$/, '').length > 0;
    } catch {
        return false;
    }
}

const socialBtn =
    'flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors hover:border-transparent hover:bg-gradient-to-br hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500';

function Socials({ member }: { member: TeamMember }) {
    const items = [
        { url: member.socialLinks?.linkedin, label: 'LinkedIn', Icon: FaLinkedinIn },
        { url: member.socialLinks?.github, label: 'GitHub', Icon: FaGithub },
        { url: member.socialLinks?.twitter, label: 'X', Icon: FaXTwitter },
    ].filter((s) => isProfileUrl(s.url));
    if (items.length === 0) return null;
    return (
        <div className="flex gap-2">
            {items.map(({ url, label, Icon }) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on ${label}`} className={socialBtn}>
                    <Icon className="h-3.5 w-3.5" />
                </a>
            ))}
        </div>
    );
}

/** The frame takes the photo's own proportions: the whole picture, edge to edge — no cropping, no empty bars. */
function Photo({ member, sizes, className }: { member: TeamMember; sizes: string; className: string }) {
    return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 ${className}`}>
            <Image
                src={member.photo}
                alt={member.name}
                width={0}
                height={0}
                sizes={sizes}
                className="block h-auto w-full"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    );
}

interface TeamCardProps {
    member: TeamMember;
    /** Wide spotlight layout, used when there is only one (or the lead) member. */
    featured?: boolean;
    /** Small label under the photo, e.g. "Founder". */
    badge?: string;
}

/** Team member card. There are no individual profile pages — everything is shown right here. */
export default function TeamCard({ member, featured = false, badge }: TeamCardProps) {
    if (featured) {
        return (
            <article className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_24px_60px_-28px_rgba(76,29,149,0.35)]">
                <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-blue-300/30 blur-3xl" />
                <div className="relative grid gap-0 md:grid-cols-[minmax(0,320px)_1fr]">
                    <div className="p-5 pb-0 md:p-6 md:pr-0">
                        <div className="rounded-[24px] bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 p-1">
                            <Photo member={member} sizes="(min-width: 768px) 320px, 90vw" className="aspect-square rounded-[20px]" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                        <span className="inline-flex w-fit items-center rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-700 ring-1 ring-purple-200">
                            Leadership
                        </span>
                        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{member.name}</h3>
                        <p className="mt-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-base font-semibold text-transparent">{member.role}</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">{member.bio}</p>

                        {member.expertise?.length > 0 && (
                            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                                {member.expertise.map((exp) => (
                                    <li key={exp} className="flex items-center gap-2 text-[14px] font-medium text-slate-700">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                            <Check className="h-3 w-3" strokeWidth={3} />
                                        </span>
                                        {exp}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-6">
                            <Socials member={member} />
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-18px_rgba(76,29,149,0.35)]">
            <div className="relative p-3 pb-0">
                <div className="rounded-[20px] bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 p-0.5">
                    <Photo member={member} sizes="(min-width: 1024px) 270px, (min-width: 640px) 45vw, 90vw" className="rounded-[18px]" />
                </div>
                {badge && (
                    <span className="absolute left-5 top-5 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg ring-2 ring-white">
                        {badge}
                    </span>
                )}
            </div>
            <div className="flex flex-1 flex-col items-center p-3 text-center">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">{member.name}</h3>
                <p className="mt-1 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-sm font-semibold text-transparent">{member.role}</p>
                <div aria-hidden="true" className="my-4 h-px w-12 bg-gradient-to-r from-pink-400 to-blue-400" />
                <p className="text-[14px] leading-relaxed text-slate-600">{member.bio}</p>
                {/* <div className="mt-auto pt-4">
                    <Socials member={member} />
                </div> */}
            </div>
        </article>
    );
}
