import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { JobPosition } from '../../types/company';

interface CareerCardProps {
    job: JobPosition;
}

export default function CareerCard({ job }: CareerCardProps) {
    return (
        <div className="group bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#1769FF] text-xs font-bold">
                        {job.department}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold">
                        {job.employmentType}
                    </span>
                </div>

                <Link href={`/company/careers/${job.slug}`} className="group-hover:text-[#1769FF] transition-colors">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {job.title}
                    </h3>
                </Link>

                <p className="text-slate-600 text-base leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 mb-6">
                    <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {job.location}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                        <Clock className="w-4 h-4 text-slate-400" />
                        Experience: {job.experience}
                    </span>
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                <Link
                    href={`/company/careers/${job.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1769FF] hover:underline"
                >
                    <span>View Position Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
}
