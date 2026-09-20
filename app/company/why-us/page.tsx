import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Code2, Cpu, Lock, Clock, CheckCircle2 } from 'lucide-react';
import CompanyHero from '../../components/company/CompanyHero';
import CompanyCTA from '../../components/company/CompanyCTA';

export const metadata: Metadata = {
    title: 'Why Choose TheWebHero | Technical Differentiators & Quality Practices',
    description: 'Discover why ambitious companies partner with TheWebHero for custom web applications, Flutter mobile apps, and enterprise software engineering.',
    alternates: {
        canonical: 'https://thewebhero.ai/company/why-us',
    },
};

const differentiators = [
    {
        title: 'Modern Full-Stack Engineering',
        description: 'We specialize in Next.js 15, React, Node.js, and Flutter — avoiding outdated monolithic frameworks in favor of high-performance modern architectures.',
        icon: Code2
    },
    {
        title: 'Rigorous Code & Security Standards',
        description: 'Every pull request undergoes strict peer reviews, TypeScript type validation, API security checks, and OWASP vulnerability mitigations.',
        icon: Lock
    },
    {
        title: 'Predictable Sprint Delivery',
        description: 'We operate in clear agile sprints with transparent milestone demos, staging application deployments, and progress tracking.',
        icon: Clock
    },
    {
        title: 'Cross-Platform Ecosystem Support',
        description: 'Whether web portals, administrative control panels, or iOS/Android native mobile apps, we maintain unified data and API standards.',
        icon: Cpu
    }
];

export default function WhyUsPage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <CompanyHero
                title="Why Choose TheWebHero"
                subtitle="Factual Differentiators • Quality Code • Technical Security"
                description="We combine modern full-stack web architectures with clear agile delivery, transparent scoping, and production-tested code practices."
                breadcrumbItems={[
                    { label: 'Company', href: '/company' },
                    { label: 'Why Us' },
                ]}
            />

            <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {differentiators.map((diff, index) => {
                            const Icon = diff.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1769FF] flex items-center justify-center">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {diff.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {diff.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CompanyCTA title="Experience Production Software Engineering" />
        </main>
    );
}
