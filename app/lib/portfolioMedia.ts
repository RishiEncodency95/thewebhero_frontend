import type React from 'react';
import type { StaticImageData } from 'next/image';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiFlutter, SiMysql } from 'react-icons/si';

import type { PortfolioItem } from '@/app/types/portfolio';

import citycallsImg from '@/app/assets/home/Featured-Projects/web/citycalls.webp';
import helpnowImg from '@/app/assets/home/Featured-Projects/web/helpnow.webp';
import salonImg from '@/app/assets/home/Featured-Projects/web/cc_salonn.webp';
import adminImg from '@/app/assets/home/Featured-Projects/web/cc_admin.webp';
import customerAppImg from '@/app/assets/home/Featured-Projects/web/customer_app.webp';
import vendorAppImg from '@/app/assets/home/Featured-Projects/web/vendor_app.webp';
import wingameImg from '@/app/assets/home/Featured-Projects/web/wingame11.webp';

/**
 * Card artwork per project, keyed by slug. These are 640px WebP copies of the
 * PNGs in assets/home/Featured-Projects (12.5 MB -> 0.5 MB): images are not
 * optimised at build time here (output: 'export'), so what we import is what
 * the browser downloads. The artwork is portrait (1108x1419).
 */
export const PROJECT_IMAGE: Record<string, StaticImageData> = {
    'citycalls-multi-service-platform': citycallsImg,
    'helpnow-home-cleaning-services': helpnowImg,
    'citycalls-salon-beauty-booking': salonImg,
    'citycalls-admin-dashboard': adminImg,
    'citycalls-customer-mobile-app': customerAppImg,
    'citycalls-vendor-partner-app': vendorAppImg,
    'wingame11-quiz-gaming-platform': wingameImg,
};

/** Bundled artwork when we have it, else the data file's `coverImage` path. */
export function getProjectImage(project: Pick<PortfolioItem, 'slug' | 'coverImage'>): StaticImageData | string {
    return PROJECT_IMAGE[project.slug] ?? project.coverImage;
}

/** `iconName` strings from the data file -> icon component + brand colour. */
export const TECH_ICON: Record<string, { Icon: React.ElementType; color: string }> = {
    SiReact: { Icon: SiReact, color: 'text-cyan-500' },
    SiNodedotjs: { Icon: SiNodedotjs, color: 'text-green-600' },
    SiExpress: { Icon: SiExpress, color: 'text-slate-900' },
    SiMongodb: { Icon: SiMongodb, color: 'text-green-600' },
    SiFlutter: { Icon: SiFlutter, color: 'text-cyan-500' },
    SiMysql: { Icon: SiMysql, color: 'text-blue-600' },
};

/** Card tint per project. Keyed by slug, with a fallback so adding a project
 *  to lib/portfolio.ts renders rather than crashes. */
export const TONE: Record<string, string> = {
    'citycalls-multi-service-platform': 'from-blue-100 via-blue-50 to-white',
    'helpnow-home-cleaning-services': 'from-emerald-100 via-emerald-50 to-white',
    'citycalls-salon-beauty-booking': 'from-pink-100 via-pink-50 to-white',
    'citycalls-admin-dashboard': 'from-blue-100 via-blue-50 to-white',
    'citycalls-customer-mobile-app': 'from-amber-100 via-orange-50 to-white',
    'citycalls-vendor-partner-app': 'from-violet-100 via-purple-50 to-white',
    'wingame11-quiz-gaming-platform': 'from-indigo-100 via-purple-50 to-white',
};
export const DEFAULT_TONE = 'from-slate-100 via-slate-50 to-white';
