import React from 'react';
import type { TableOfContentsItem } from '../../types/resource';

/**
 * Renders the small markdown subset used by blog `content` strings:
 * `##` / `###` headings, `-` lists, ``` fenced code, paragraphs, **bold**
 * and `code`.
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
                <code key={i} className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.88em] text-purple-700">
                    {part.slice(1, -1)}
                </code>
            );
        }
        return part;
    });
}

interface ArticleBodyProps {
    content: string;
    toc?: TableOfContentsItem[];
}

export default function ArticleBody({ content, toc = [] }: ArticleBodyProps) {
    const blocks: React.ReactNode[] = [];
    let list: string[] = [];
    let para: string[] = [];
    let code: string[] | null = null;
    let codeLang = '';

    const flushList = () => {
        if (!list.length) return;
        blocks.push(
            <ul key={`ul-${blocks.length}`} className="space-y-2.5">
                {list.map((item, i) => (
                    <li key={i} className="flex gap-3">
                        <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                        <span>{renderInline(item)}</span>
                    </li>
                ))}
            </ul>
        );
        list = [];
    };
    const flushPara = () => {
        if (!para.length) return;
        blocks.push(<p key={`p-${blocks.length}`}>{renderInline(para.join(' '))}</p>);
        para = [];
    };

    for (const raw of content.split('\n')) {
        const line = raw.trim();
        if (code) {
            if (line.startsWith('```')) {
                blocks.push(
                    <pre
                        key={`pre-${blocks.length}`}
                        className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-[13.5px] leading-relaxed text-slate-200 ring-1 ring-slate-800"
                    >
                        {codeLang && (
                            <span className="mb-3 block text-[11px] font-bold uppercase tracking-wider text-slate-500">{codeLang}</span>
                        )}
                        <code className="font-mono">{code.join('\n')}</code>
                    </pre>
                );
                code = null;
            } else {
                code.push(raw);
            }
        } else if (line.startsWith('```')) {
            flushList();
            flushPara();
            code = [];
            codeLang = line.slice(3).trim();
        } else if (!line) {
            flushList();
            flushPara();
        } else if (line.startsWith('### ')) {
            flushList();
            flushPara();
            blocks.push(
                <h3 key={`h3-${blocks.length}`} className="pt-2 text-xl font-semibold tracking-tight text-slate-900">
                    {renderInline(line.slice(4))}
                </h3>
            );
        } else if (line.startsWith('## ')) {
            flushList();
            flushPara();
            const title = line.slice(3);
            blocks.push(
                <h2
                    key={`h2-${blocks.length}`}
                    id={toc.find((t) => t.title === title)?.id}
                    className="scroll-mt-28 pt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-[28px]"
                >
                    {renderInline(title)}
                </h2>
            );
        } else if (line.startsWith('- ')) {
            flushPara();
            list.push(line.slice(2));
        } else {
            flushList();
            para.push(line);
        }
    }
    flushList();
    flushPara();

    return <div className="space-y-5 text-base leading-[1.8] text-slate-700 sm:text-[17px]">{blocks}</div>;
}
