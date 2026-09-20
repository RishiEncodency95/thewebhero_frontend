import React from 'react';
import { List } from 'lucide-react';
import { TableOfContentsItem } from '../../types/resource';

interface ArticleTableOfContentsProps {
    items?: TableOfContentsItem[];
}

export default function ArticleTableOfContents({ items }: ArticleTableOfContentsProps) {
    if (!items || items.length === 0) return null;

    return (
        <aside className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 sticky top-24">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-3">
                <List className="w-4 h-4 text-[#1769FF]" />
                <h3>Table of Contents</h3>
            </div>
            <nav>
                <ul className="space-y-2 text-xs font-medium text-slate-600">
                    {items.map((item) => (
                        <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
                            <a
                                href={`#${item.id}`}
                                className="hover:text-[#1769FF] transition-colors block py-0.5"
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
