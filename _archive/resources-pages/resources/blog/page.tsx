'use client';

import React, { useState, useMemo } from 'react';
import { getResourcesByType, searchResources } from '../../lib/resources';
import { ResourceFilterState } from '../../types/resource';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceCard from '../../components/resources/ResourceCard';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceFilters from '../../components/resources/ResourceFilters';
import NewsletterCTA from '../../components/resources/NewsletterCTA';

const initialFilters: ResourceFilterState = {
    searchQuery: '',
    type: 'blog',
    topic: 'All',
    technology: 'All',
    industry: 'All',
};

export default function BlogListingPage() {
    const [filters, setFilters] = useState<ResourceFilterState>(initialFilters);

    const blogPosts = useMemo(() => {
        return searchResources({
            ...filters,
            type: 'blog',
        });
    }, [filters]);

    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    return (
        <main className="min-h-screen bg-slate-50/50">
            {/* Blog Header */}
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-white/80">
                        <ResourcesBreadcrumb
                            items={[
                                { label: 'Resources', href: '/resources' },
                                { label: 'Blog & Articles' },
                            ]}
                        />
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Blog & Technical Articles
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Technical insights, engineering best practices, web architecture, and mobile development updates from TheWebHero.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <ResourceFilters
                filters={filters}
                onFilterChange={setFilters}
                onResetFilters={() => setFilters(initialFilters)}
                totalResults={blogPosts.length}
                showTypeFilter={false}
            />

            {/* Content Container */}
            <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {featuredPost && filters.searchQuery === '' && (
                    <div className="mb-12">
                        <h2 className="text-xs font-bold text-[#1769FF] uppercase tracking-wider mb-4">
                            Latest Blog Article
                        </h2>
                        <ResourceCard resource={featuredPost} variant="featured" />
                    </div>
                )}

                <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-6">
                        All Articles
                    </h2>
                    <ResourceGrid resources={filters.searchQuery !== '' ? blogPosts : regularPosts} />
                </div>
            </section>

            {/* Newsletter CTA */}
            <NewsletterCTA />
        </main>
    );
}
