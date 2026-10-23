/*
 * Builds public/brand-icons.svg: one cached SVG sprite with every brand logo
 * the site shows (tech stacks, project cards). Pages then reference a logo
 * with <use href="/brand-icons.svg#id"> instead of inlining its long path data
 * into every HTML page.
 *
 * Run after adding a logo to BRAND_ICONS in app/components/BrandIcon.tsx:
 *   node scripts/build-brand-sprite.mjs
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as si from 'react-icons/si';
import * as fa from 'react-icons/fa';
import * as vsc from 'react-icons/vsc';
import * as tb from 'react-icons/tb';

const packs = { ...si, ...fa, ...vsc, ...tb };
const source = readFileSync(new URL('../app/components/BrandIcon.tsx', import.meta.url), 'utf8');
const list = source.match(/BRAND_ICONS = \[([\s\S]*?)\] as const/)[1];
const names = [...list.matchAll(/'([A-Za-z0-9]+)'/g)].map((m) => m[1]);

const symbols = names.map((name) => {
    const Icon = packs[name];
    if (!Icon) throw new Error(`Unknown react-icons name: ${name}`);
    const svg = renderToStaticMarkup(createElement(Icon));
    const viewBox = svg.match(/viewBox="([^"]+)"/)[1];
    const inner = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    return `<symbol id="${name}" viewBox="${viewBox}"><g fill="currentColor" stroke="currentColor" stroke-width="0">${inner}</g></symbol>`;
});

const out = `<svg xmlns="http://www.w3.org/2000/svg">${symbols.join('')}</svg>\n`;
writeFileSync(new URL('../public/brand-icons.svg', import.meta.url), out);
console.log(`public/brand-icons.svg: ${names.length} icons, ${(out.length / 1024).toFixed(1)} KB`);
