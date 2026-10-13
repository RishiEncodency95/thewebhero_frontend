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
            <div className="rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
                <Users className="mx-auto mb-3 h-9 w-9 text-slate-400" />
                <h3 className="text-lg font-semibold text-slate-900">Team profiles coming soon</h3>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
                <TeamCard key={member.slug} member={member} />
            ))}
        </div>
    );
}
