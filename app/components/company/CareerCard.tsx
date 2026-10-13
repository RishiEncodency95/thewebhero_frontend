import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { JobPosition } from '../../types/company';

interface CareerCardProps {
    job: JobPosition;
}

export default function CareerCard({ job }: CareerCardProps) {
    return (
        <article className="group relative flex h-full flex-col rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_22px_44px_-16px_rgba(35,75,125,0.28)]">
            <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-purple-700 ring-1 ring-purple-200/70">
                    {job.department}
                </span>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-200/70">
                    {job.employmentType}
                </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-purple-700">
                <Link href={`/company/careers/${job.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                    {job.title}
                </Link>
            </h3>

            <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-slate-600">{job.description}</p>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] font-medium text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-slate-400" />
                        {job.experience}
                    </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors group-hover:bg-purple-600">
                    View role
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
            </div>
        </article>
    );
}
