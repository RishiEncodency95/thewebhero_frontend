import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface CompanyBreadcrumbProps {
    items?: BreadcrumbItem[];
}

export default function CompanyBreadcrumb({ items }: CompanyBreadcrumbProps) {
    const list = items || [{ label: 'Company' }];

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
                <li>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1 hover:text-[#1769FF] transition-colors focus:outline-none focus:underline"
                    >
                        <Home className="w-3.5 h-3.5" />
                        <span>Home</span>
                    </Link>
                </li>
                {list.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-[#1769FF] transition-colors focus:outline-none focus:underline"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
