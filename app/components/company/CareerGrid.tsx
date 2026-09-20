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
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8">
                <Briefcase className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                    No Current Openings
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    We currently have no open positions. Check back soon or send your resume to contact@thewebhero.ai for future engineering opportunities.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
                <CareerCard key={job.slug} job={job} />
            ))}
        </div>
    );
}
