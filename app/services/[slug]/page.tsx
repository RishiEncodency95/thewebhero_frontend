import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '../../lib/services';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceCapabilities from '../../components/services/ServiceCapabilities';
import ServiceTechStack from '../../components/services/ServiceTechStack';
import ServiceProcess from '../../components/services/ServiceProcess';
import ServiceDeliverables from '../../components/services/ServiceDeliverables';
import ServiceBenefits from '../../components/services/ServiceBenefits';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedServices from '../../components/services/RelatedServices';
import ServiceCTA from '../../components/services/ServiceCTA';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// Generate static params for all services so pages build fast
export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: 'Service Not Found | TheWebHero',
        };
    }

    const canonicalUrl = `https://thewebhero.in/services/${service.slug}`;

    return {
        title: service.seoTitle,
        description: service.seoDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: service.seoTitle,
            description: service.seoDescription,
            url: canonicalUrl,
            type: 'website',
            images: [
                {
                    url: service.ogImage || '/logo.png',
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* 1. Service Hero */}
            <ServiceHero
                title={service.title}
                categoryName={service.category}
                categorySlug={service.categorySlug}
                shortDescription={service.shortDescription}
                description={service.description}
            />

            {/* 2. Problem / Business Need Section */}
            {service.problemStatement && (
                <section className="py-14 bg-white border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-white p-6 sm:p-10 shadow-sm">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                <div className="lg:col-span-4">
                                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3.5 py-1.5 rounded-full mb-3">
                                        <AlertCircle className="h-4 w-4 text-blue-600" />
                                        <span>Industry Problem & Solution</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                                        Why Modern Organizations Require <span className="text-blue-600">{service.title}</span>
                                    </h2>
                                </div>
                                <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">
                                    <p className="text-base text-slate-700 leading-relaxed font-medium">
                                        {service.problemStatement}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 3. Sub-services / Child Services Grid (if category level) */}
            {service.subServices && service.subServices.length > 0 && (
                <section className="py-16 bg-slate-100 border-b border-slate-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-black text-slate-900">
                                Dedicated <span className="text-blue-600">{service.title}</span> Offerings
                            </h2>
                            <p className="mt-2 text-sm text-slate-600 font-medium">
                                Select a specific specialized service stream within our {service.title} domain.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.subServices.map((sub) => (
                                <Link
                                    key={sub.slug}
                                    href={`/services/${sub.slug}`}
                                    className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                                >
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                                            {sub.title}
                                        </h3>
                                        <p className="text-sm font-medium text-slate-600 leading-relaxed">
                                            {sub.description}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-blue-600">
                                        <span>View {sub.title} Page</span>
                                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 4. Core Capabilities */}
            <ServiceCapabilities
                capabilities={service.capabilities}
                title={service.title}
            />

            {/* 5. Tech Stack */}
            <ServiceTechStack
                technologies={service.technologies}
                title={service.title}
            />

            {/* 6. Deliverables */}
            <ServiceDeliverables
                deliverables={service.deliverables}
                title={service.title}
            />

            {/* 7. Development Process */}
            <ServiceProcess
                process={service.process}
                title={service.title}
            />

            {/* 8. Benefits & Business Value */}
            <ServiceBenefits
                benefits={service.benefits}
                title={service.title}
            />

            {/* 9. FAQs */}
            <ServiceFAQ faqs={service.faqs} title={service.title} />

            {/* 10. Related Services */}
            <RelatedServices relatedServices={service.relatedServices} />

            {/* 11. Final CTA */}
            <ServiceCTA title={service.title} />
        </main>
    );
}
