import React from 'react';
import { Code, MessageSquare, Layout, ShieldCheck } from 'lucide-react';
import { CompanyValue } from '../../types/company';
import CompanySectionHeader from './CompanySectionHeader';
import CompanyFeatureGrid from './CompanyFeatureGrid';

interface CompanyValuesProps {
    values: CompanyValue[];
}

const iconMap: Record<string, React.ElementType> = {
    Code,
    MessageSquare,
    Layout,
    ShieldCheck,
};

export default function CompanyValues({ values }: CompanyValuesProps) {
    return (
        <section className="w-full px-4 py-12 lg:px-20 lg:py-16">
            <CompanySectionHeader
                eyebrow="Our values"
                title="What guides"
                highlight="our work"
                description="The principles behind every project, from the first call to long after launch."
            />
            <CompanyFeatureGrid
                items={values.map((v) => ({
                    title: v.title,
                    description: v.description,
                    Icon: (v.iconName && iconMap[v.iconName]) || ShieldCheck,
                }))}
            />
        </section>
    );
}
