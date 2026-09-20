'use client';

import React, { useState, useMemo } from 'react';
import { searchResources } from '../../lib/resources';
import { ResourceFilterState } from '../../types/resource';
import ResourcesBreadcrumb from '../../components/resources/ResourcesBreadcrumb';
import ResourceGrid from '../../components/resources/ResourceGrid';
import ResourceFilters from '../../components/resources/ResourceFilters';
import ResourceCTA from '../../components/resources/ResourceCTA';

const initialFilters: ResourceFilterState = {
    searchQuery: '',
    type: 'All',
    topic: 'All',
    technology: 'All',
    industry: 'All',
};

export default function ResourceSearchPage() {
    const [filters, setFilters] = useState<ResourceFilterState>(initialFilters);

    const searchResults = useMemo(() => {
        return searchResources(filters);
    }, [filters]);

    return (
        <main className="min-h-screen bg-slate-50/50">
            <section className="bg-slate-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ResourcesBreadcrumb
                        items={[
                            { label: 'Resources', href: '/resources' },
                            { label: 'Search Resources' },
                        ]}
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
                        Search Resources & Knowledge Base
                    </h1>
                    <p className="text-slate-300 text-base mt-2 max-w-2xl leading-relaxed">
                        Search across all technical articles, developer guides, code tutorials, FAQs, whitepapers, and glossary terms.
                    </p>
                </div>
            </section>

            <ResourceFilters
                filters={filters}
                onFilterChange={setFilters}
                onResetFilters={() => setFilters(initialFilters)}
                totalResults={searchResults.length}
                showTypeFilter={true}
            />

            <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ResourceGrid resources={searchResults} />
            </section>

            <ResourceCTA />
        </main>
    );
}
