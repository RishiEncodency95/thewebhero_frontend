import React from 'react';
import type { TableOfContentsItem } from '../../types/resource';
import Link from 'next/link';
import CodeBlock from './CodeBlock';

/**
 * Renders the Markdown written in the admin's rich text editor:
 * `##` / `###` headings, `-` and `1.` lists, `>` quotes, ``` fenced code,
 * `---` dividers, paragraphs, **bold**, *italic*, ~~strike~~, `code` and
 * [links](url).
 * `##` headings get stable ids so the "On this page" list can link to them.
 */
const INLINE = /(\*\*[^*]+\*\*|~~[^~]+~~|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*|_[^_\s][^_]*_)/g;

function renderInline(text: string, keyPrefix = ''): React.ReactNode[] {
    return text.split(INLINE).map((part, i) => {
        const key = `${keyPrefix}${i}`;
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
            return <strong key={key} className="font-semibold text-slate-900">{renderInline(part.slice(2, -2), `${key}-`)}</strong>;
        }
        if (part.startsWith('~~') && part.endsWith('~~') && part.length > 4) {
            return <s key={key}>{renderInline(part.slice(2, -2), `${key}-`)}</s>;
        }
        if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
            return (
                <code
                    key={key}
                    className="rounded-md border border-purple-100 bg-purple-50/70 px-1.5 py-0.5 font-mono text-[0.86em] font-medium text-purple-700"
                >
                    {part.slice(1, -1)}
                </code>
            );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
            const [, label, href] = link;
            const cls = 'font-medium text-purple-700 underline decoration-purple-300 underline-offset-2 hover:decoration-purple-600';
            return href.startsWith('/') ? (
                <Link key={key} href={href} className={cls}>{renderInline(label, `${key}-`)}</Link>
            ) : (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{renderInline(label, `${key}-`)}</a>
            );
        }
        if (part.length > 2 && ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_')))) {
            return <em key={key}>{renderInline(part.slice(1, -1), `${key}-`)}</em>;
        }
        return part;
    });
}

export function slugify(text: string) {
    return text.toLowerCase().replace(/[*_`~]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** "On this page" entries built from the article's `##` and `###` headings. */
export function extractToc(content: string): TableOfContentsItem[] {
    const items: TableOfContentsItem[] = [];
    let inCode = false;
    for (const raw of content.split('\n')) {
        const line = raw.trim();
        if (line.startsWith('```')) inCode = !inCode;
        if (inCode) continue;
        const m = line.match(/^(##|###) (.+)$/);
        if (m) {
            const title = m[2].replace(/[*_`~]/g, '').trim();
            items.push({ id: slugify(title), title, level: m[1].length });
        }
    }
    return items;
}

interface ArticleBodyProps {
    content: string;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
    const blocks: React.ReactNode[] = [];
    let list: string[] = [];
    let ordered = false;
    let para: string[] = [];
    let quote: string[] = [];
    let code: string[] | null = null;
    let codeLang = '';

    const flushList = () => {
        if (!list.length) return;
        const key = `list-${blocks.length}`;
        blocks.push(
            ordered ? (
                <ol key={key} className="space-y-2">
                    {list.map((item, i) => (
                        <li key={i} className="flex gap-3.5">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-50 text-xs font-bold text-purple-700 ring-1 ring-purple-200">
                                {i + 1}
                            </span>
                            <span>{renderInline(item)}</span>
                        </li>
                    ))}
                </ol>
            ) : (
                <ul key={key} className="space-y-2">
                    {list.map((item, i) => (
                        <li key={i} className="flex gap-3.5">
                            <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                            <span>{renderInline(item)}</span>
                        </li>
                    ))}
                </ul>
            )
        );
        list = [];
    };
    const flushPara = () => {
        if (!para.length) return;
        blocks.push(<p key={`p-${blocks.length}`}>{renderInline(para.join(' '))}</p>);
        para = [];
    };
    const flushQuote = () => {
        if (!quote.length) return;
        blocks.push(
            <blockquote
                key={`q-${blocks.length}`}
                className="rounded-r-2xl border-l-4 border-purple-500 bg-purple-50/50 py-3 pl-5 pr-4 text-[17px] italic text-slate-800"
            >
                {renderInline(quote.join(' '))}
            </blockquote>
        );
        quote = [];
    };
    const flushAll = () => {
        flushList();
        flushPara();
        flushQuote();
    };

    for (const raw of content.split('\n')) {
        const line = raw.trim();
        if (code) {
            if (line.startsWith('```')) {
                blocks.push(<CodeBlock key={`pre-${blocks.length}`} language={codeLang} code={code.join('\n')} />);
                code = null;
            } else {
                code.push(raw);
            }
        } else if (line.startsWith('```')) {
            flushAll();
            code = [];
            codeLang = line.slice(3).trim();
        } else if (!line) {
            flushAll();
        } else if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
            flushAll();
            blocks.push(<hr key={`hr-${blocks.length}`} className="!my-10 border-slate-200" />);
        } else if (line.startsWith('### ')) {
            flushAll();
            const title = line.slice(4);
            blocks.push(
                <h3 key={`h3-${blocks.length}`} id={slugify(title)} className="!mt-7 scroll-mt-28 text-[20px] font-bold tracking-tight text-slate-900">
                    {renderInline(title)}
                </h3>
            );
        } else if (line.startsWith('## ')) {
            flushAll();
            const title = line.slice(3);
            blocks.push(
                <h2
                    key={`h2-${blocks.length}`}
                    id={slugify(title)}
                    className="!mt-10 scroll-mt-28 border-t border-slate-100 pt-7 text-[24px] font-bold leading-tight tracking-tight text-slate-950 first:!mt-0 first:border-0 first:pt-0 sm:text-[27px]"
                >
                    {renderInline(title)}
                </h2>
            );
        } else if (line.startsWith('> ')) {
            flushList();
            flushPara();
            quote.push(line.slice(2));
        } else if (line.startsWith('- ') || /^\d+\.\s/.test(line)) {
            const isOrdered = !line.startsWith('- ');
            if (list.length && isOrdered !== ordered) flushList();
            flushPara();
            flushQuote();
            ordered = isOrdered;
            list.push(isOrdered ? line.replace(/^\d+\.\s/, '') : line.slice(2));
        } else {
            flushList();
            flushQuote();
            para.push(line);
        }
    }
    flushAll();

    return <div className="space-y-4 text-[16px] leading-[1.75] text-slate-700 sm:text-[17px] [&_p]:text-pretty">{blocks}</div>;
}
