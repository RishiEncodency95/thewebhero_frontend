import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function QuoteBreadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm text-slate-500">
                <li>
                    <Link
                        href="/"
                        className="inline-flex items-center hover:text-emerald-600 transition-colors"
                    >
                        <Home className="w-4 h-4 mr-1" />
                        Home
                    </Link>
                </li>
                <li>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                </li>
                <li>
                    <span className="font-medium text-slate-900" aria-current="page">
                        Get a Quote
                    </span>
                </li>
            </ol>
        </nav>
    );
}
