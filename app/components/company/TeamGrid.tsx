import React from 'react';
import { Users } from 'lucide-react';
import { TeamMember } from '../../types/company';
import TeamCard from './TeamCard';

interface TeamGridProps {
    members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
    if (!members || members.length === 0) {
        return (
            <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 p-8">
                <Users className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                    No Team Profiles Published
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                    Approved team member profiles will be listed here as company disclosures are updated.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {members.map((member) => (
                <TeamCard key={member.slug} member={member} />
            ))}
        </div>
    );
}
