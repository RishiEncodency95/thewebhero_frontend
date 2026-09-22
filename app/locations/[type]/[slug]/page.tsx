import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TOP_CITIES, TOP_COUNTRIES } from '@/app/lib/locationsData';
import {
    Code2,
    Smartphone,
    Globe,
    ShieldCheck,
    Cpu,
    Sparkles,
    CheckCircle2,
    ArrowRight,
    Building2,
    MapPin,
    Clock,
    PhoneCall
} from 'lucide-react';

interface PageProps {
    params: Promise<{
        type: string;
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const cityParams = TOP_CITIES.map((city) => ({
        type: 'city',
        slug: city.slug,
    }));

    const countryParams = TOP_COUNTRIES.map((country) => ({
        type: 'country',
        slug: country.slug,
    }));

    return [...cityParams, ...countryParams];
}

export async function generateMetadata({ params }: PageProps) {
    const { type, slug } = await params;
    const isCity = type === 'city';
    const list = isCity ? TOP_CITIES : TOP_COUNTRIES;
    const item = list.find((loc) => loc.slug === slug);

    if (!item) return { title: 'Location Not Found - TheWebHero' };

    const locName = item.name;
    const pageUrl = `https://thewebhero.in/locations/${type}/${slug}`;

    return {
        title: `Best Web Development & IT Solutions in ${locName} | TheWebHero`,
        description: `Top-rated Custom Web Development, Mobile App Development, UI/UX Design, and Software Solutions services in ${locName}. Scale your business with TheWebHero.`,
        keywords: [
            `Web Development in ${locName}`,
            `Software Company ${locName}`,
            `Mobile App Development ${locName}`,
            `IT Services ${locName}`,
            `UI UX Design ${locName}`,
            `TheWebHero ${locName}`
        ],
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            title: `Best Web Development & IT Solutions in ${locName} | TheWebHero`,
            description: `Top-rated Custom Web Development, Mobile App Development, and Software Solutions services in ${locName}.`,
            url: pageUrl,
            siteName: 'TheWebHero',
            type: 'website',
            images: [
                {
                    url: 'https://thewebhero.in/logo.png',
                    width: 1200,
                    height: 630,
                    alt: `TheWebHero Services in ${locName}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `Best Web Development & IT Solutions in ${locName} | TheWebHero`,
            description: `Top-rated Custom Web Development, Mobile App Development, and IT Services in ${locName}.`,
            images: ['https://thewebhero.in/logo.png'],
        },
    };
}

export default async function LocationSlugPage({ params }: PageProps) {
    const { type, slug } = await params;
    const isCity = type === 'city';
    const list = isCity ? TOP_CITIES : TOP_COUNTRIES;
    const location = list.find((loc) => loc.slug === slug);

    if (!location) {
        notFound();
    }

    const locName = location.name;

    const services = [
        {
            icon: Code2,
            title: `Web Development in ${locName}`,
            description: `Custom, modern, and high-performance website development tailored for businesses in ${locName}.`
        },
        {
            icon: Smartphone,
            title: `Mobile App Development`,
            description: `Native and cross-platform iOS & Android mobile apps built to give your ${locName} business a competitive edge.`
        },
        {
            icon: Cpu,
            title: `Custom Software & CRM Solutions`,
            description: `Enterprise ERPs, CRM systems, and admin dashboards designed to streamline workflows.`
        },
        {
            icon: Globe,
            title: `Cloud & DevOps Services`,
            description: `Scalable cloud architecture, continuous deployment, and 99.9% uptime infrastructure.`
        },
        {
            icon: Sparkles,
            title: `UI/UX Design`,
            description: `User-centric design systems, interactive wireframes, and intuitive user experiences.`
        },
        {
            icon: ShieldCheck,
            title: `IT Consulting & Support`,
            description: `24/7 technical support and IT consultancy to ensure continuous business performance.`
        }
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: `TheWebHero - Web & IT Solutions in ${locName}`,
        description: `Top-rated Custom Web Development, Mobile App Development, UI/UX Design, and Software Solutions services in ${locName}.`,
        url: `https://thewebhero.in/locations/${type}/${slug}`,
        telephone: '+919876543210',
        areaServed: locName,
        provider: {
            '@type': 'Organization',
            name: 'TheWebHero',
            url: 'https://thewebhero.in',
            logo: 'https://thewebhero.in/logo.png',
        },
    };

    return (
        <main className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-slate-50 text-slate-900 font-sans">
            {/* Schema.org Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative py-2 md:py-4 lg:py-6 overflow-hidden border-b border-slate-200/80">
                {/* Background Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-blue-200/30 to-pink-200/30 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-[90px] pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-100/50 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                        <MapPin size={14} className="text-blue-600" />
                        Serving Businesses in {locName}
                    </div>

                    <h1 className="text-sm sm:text-lg lg:text-3xl font-semibold text-slate-900 tracking-tight mb-2 leading-tight">
                        Leading Web & Software Development Services in{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                            {locName}
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-base sm:text-[16px] text-slate-600 leading-relaxed mb-4 font-normal">
                        Transforming companies in {locName} with cutting-edge web applications, scalable mobile apps, and robust custom software solutions. Partner with TheWebHero to accelerate your digital growth.
                    </p>

                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Link
                            href="/get-a-quote"
                            className="inline-flex items-center gap-2.5 px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-medium text-sm sm:text-base shadow-[0_10px_25px_rgba(236,72,153,0.35)] hover:shadow-[0_15px_35px_rgba(236,72,153,0.5)] hover:scale-[1.02] transition-all duration-300"
                        >
                            <span>Get Free Consultation</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
                        <Sparkles size={14} />
                        Our Local Expertise
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
                        Services We Provide in <span className="text-purple-600">{locName}</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-base font-medium">
                        End-to-end digital solutions crafted specifically to address unique market opportunities in {locName}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((srv, idx) => {
                        const IconComp = srv.icon;
                        return (
                            <div
                                key={idx}
                                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-100 to-blue-50 border border-purple-200/60 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all mb-5">
                                        <IconComp size={22} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                                        {srv.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                        {srv.description}
                                    </p>
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-purple-600">
                                    <span>Learn More</span>
                                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why Choose Us for this Location */}
            <section className="py-16 bg-white border-y border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
                                <ShieldCheck size={14} />
                                Proven Quality & Reliability
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-6 leading-tight">
                                Why Businesses in {locName} Choose{' '}
                                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                    TheWebHero
                                </span>
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-base font-medium">
                                We combine international tech standards with local business understanding to deliver software that drives real revenue, operational efficiency, and long-term client growth.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Tailored Strategies</h4>
                                        <p className="text-xs text-slate-600 mt-0.5">Aligned with {locName}&apos;s target market dynamics.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Agile Development</h4>
                                        <p className="text-xs text-slate-600 mt-0.5">Transparent updates and daily sprint communication.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">Enterprise Security</h4>
                                        <p className="text-xs text-slate-600 mt-0.5">High performance, scalability & clean code.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm">24/7 Dedicated Support</h4>
                                        <p className="text-xs text-slate-600 mt-0.5">Continuous hosting, updates & maintenance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white shadow-2xl relative overflow-hidden border border-purple-500/20">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2.5">
                                    <Building2 className="text-pink-400" size={24} />
                                    Ready to grow in {locName}?
                                </h3>
                                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                                    Let&apos;s discuss your project requirements. Our engineering team is ready to build your custom web or mobile platform.
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-slate-200 text-sm">
                                        <PhoneCall size={18} className="text-purple-400" />
                                        <span>+91 98765 43210</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-200 text-sm">
                                        <Clock size={18} className="text-pink-400" />
                                        <span>Fast Turnaround & Daily Updates</span>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold text-center block shadow-lg shadow-pink-500/25 transition-all"
                                >
                                    Schedule a Call
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
