import React from 'react';
import { Briefcase } from 'lucide-react';
import { JobPosition } from '../../types/company';
import CareerCard from './CareerCard';

interface CareerGridProps {
    jobs: JobPosition[];
}

export default function CareerGrid({ jobs }: CareerGridProps) {
    if (!jobs || jobs.length === 0) {
        return (
            <div className="rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <Briefcase className="mx-auto mb-3 h-9 w-9 text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-900">No open positions right now</h3>
                <p className="mx-auto mt-1 max-w-md text-sm text-slate-600">
                    We&apos;re always happy to hear from great engineers — get in touch and tell us about yourself.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {jobs.map((job) => (
                <CareerCard key={job.slug} job={job} />
            ))}
        </div>
    );
}
