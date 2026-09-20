'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type TechnologyBreadcrumbProps = {
    categoryName?: string;
    categorySlug?: string;
    title: string;
};

export default function TechnologyBreadcrumb({
    categoryName,
    categorySlug,
    title,
}: TechnologyBreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="w-full py-4 text-xs">
            <ol className="flex items-center space-x-2 flex-wrap text-slate-500 font-medium">
                <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                    >
                        <Home className="h-3.5 w-3.5" />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </li>
                <li>
                    <Link
                        href="/technologies"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Technologies
                    </Link>
                </li>
                {categoryName && categorySlug && (
                    <>
                        <li>
                            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                        </li>
                        <li>
                            <Link
                                href={`/technologies/${categorySlug}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {categoryName}
                            </Link>
                        </li>
                    </>
                )}
                <li>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                </li>
                <li className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                    {title}
                </li>
            </ol>
        </nav>
    );
}
