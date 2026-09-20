import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, ArrowRight } from 'lucide-react';
import { TeamMember } from '../../types/company';

interface TeamCardProps {
    member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
    return (
        <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all overflow-hidden flex flex-col justify-between">
            <div className="p-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-slate-900 mb-4 border border-slate-200">
                    <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-contain p-2 bg-slate-900"
                    />
                </div>

                <Link href={`/company/team/${member.slug}`} className="group-hover:text-[#1769FF] transition-colors">
                    <h3 className="text-xl font-extrabold text-slate-900">
                        {member.name}
                    </h3>
                </Link>

                <p className="text-sm font-semibold text-[#1769FF] mt-0.5 mb-3">
                    {member.role}
                </p>

                <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-3">
                    {member.bio}
                </p>

                {member.expertise && member.expertise.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.expertise.slice(0, 3).map((exp) => (
                            <span key={exp} className="px-2.5 py-1 rounded bg-slate-100 text-xs font-medium text-slate-700">
                                {exp}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <Link
                    href={`/company/team/${member.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1769FF] hover:underline"
                >
                    <span>View Profile</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>

                {member.socialLinks?.linkedin && (
                    <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors text-xs font-semibold"
                        aria-label={`${member.name} LinkedIn Profile`}
                    >
                        LinkedIn
                    </a>
                )}
            </div>
        </div>
    );
}
