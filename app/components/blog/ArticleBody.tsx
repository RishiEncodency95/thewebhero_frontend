import React from 'react';
import type { TableOfContentsItem } from '../../types/resource';
import CodeBlock from './CodeBlock';

/**
 * Renders the small markdown subset used by blog `content` strings:
 * `##` / `###` headings, `-` and `1.` lists, `>` quotes, ``` fenced code,
 * paragraphs, **bold** and `code`.
 * `##` headings get the id of the table-of-contents entry with the same
 * title so the sidebar links scroll to them.
 */
function renderInline(text: string): React.ReactNode[] {
    return text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
            return (
                <code
                    key={i}
                    className="rounded-md border border-purple-100 bg-purple-50/70 px-1.5 py-0.5 font-mono text-[0.86em] font-medium text-purple-700"
                >
                    {part.slice(1, -1)}
                </code>
            );
        }
        return part;
    });
}

function slugify(text: string) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

interface ArticleBodyProps {
    content: string;
    toc?: TableOfContentsItem[];
}

export default function ArticleBody({ content, toc = [] }: ArticleBodyProps) {
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
        } else if (line.startsWith('### ')) {
            flushAll();
            blocks.push(
                <h3 key={`h3-${blocks.length}`} className="!mt-7 text-[20px] font-bold tracking-tight text-slate-900">
                    {renderInline(line.slice(4))}
                </h3>
            );
        } else if (line.startsWith('## ')) {
            flushAll();
            const title = line.slice(3);
            blocks.push(
                <h2
                    key={`h2-${blocks.length}`}
                    id={toc.find((t) => t.title === title)?.id ?? slugify(title)}
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
