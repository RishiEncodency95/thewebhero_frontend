import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, BookOpen, GraduationCap, FileText, HelpCircle } from 'lucide-react';
import { getAllResources, getFeaturedResources } from '../lib/resources';
import ResourcesHero from '../components/resources/ResourcesHero';
import ResourceCategoryGrid from '../components/resources/ResourceCategoryGrid';
import ResourceCard from '../components/resources/ResourceCard';
import ResourceGrid from '../components/resources/ResourceGrid';
import NewsletterCTA from '../components/resources/NewsletterCTA';
import ResourceCTA from '../components/resources/ResourceCTA';

export const metadata: Metadata = {
    title: 'Resources, Insights & Developer Knowledge | TheWebHero',
    description: 'Explore web architecture guides, Next.js tutorials, Flutter mobile insights, FAQs, and developer whitepapers from TheWebHero engineering team.',
    openGraph: {
        title: 'Resources, Insights & Developer Knowledge | TheWebHero',
        description: 'Explore technical articles, guides, code tutorials, FAQs, and whitepapers.',
        url: 'https://thewebhero.ai/resources',
        siteName: 'TheWebHero',
        type: 'website',
    },
    alternates: {
        canonical: 'https://thewebhero.ai/resources',
    },
};

export default function ResourcesHubPage() {
    const allResources = getAllResources();
    const featuredResources = getFeaturedResources();
    const primaryFeatured = featuredResources[0] || allResources[0];
    const latestResources = allResources.filter((r) => r.slug !== primaryFeatured?.slug).slice(0, 6);

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Resources Hero */}
            <ResourcesHero />

            {/* Featured Article Section */}
            {primaryFeatured && (
                <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                            FEATURED ARTICLE
                        </span>
                        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                            Highlight Insights
                        </h2>
                    </div>

                    <ResourceCard resource={primaryFeatured} variant="featured" />
                </section>
            )}

            {/* Resource Category Grid */}
            <ResourceCategoryGrid />

            {/* Latest Resources */}
            <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                        <span className="text-xs font-bold text-[#1769FF] uppercase tracking-wider block mb-1">
                            LATEST PUBLICATIONS
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                            Recent Articles & Guides
                        </h2>
                    </div>

                    <Link
                        href="/resources/blog"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1769FF] hover:underline"
                    >
                        <span>View All Blog Articles</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <ResourceGrid resources={latestResources} />
            </section>

            {/* Newsletter CTA */}
            <NewsletterCTA />

            {/* Final Conversion CTA */}
            <ResourceCTA />
        </main>
    );
}
