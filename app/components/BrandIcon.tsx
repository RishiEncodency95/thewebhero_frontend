import React from 'react';

/**
 * Brand logos served from one cached sprite (public/brand-icons.svg).
 * To add a logo: put its react-icons name here, then run
 * `node scripts/build-brand-sprite.mjs`.
 */
export const BRAND_ICONS = [
    'SiReact', 'SiNextdotjs', 'SiHtml5', 'SiTailwindcss',
    'SiNodedotjs', 'SiExpress', 'SiPhp', 'SiPython',
    'SiFlutter', 'SiKotlin', 'SiSwift',
    'SiMongodb', 'SiMysql', 'SiPostgresql', 'SiFirebase', 'SiRedis',
    'SiGooglecloud', 'SiDocker', 'SiKubernetes', 'SiPostman', 'SiWoocommerce',
    'SiGraphql', 'SiTypescript', 'SiSocketdotio',
    'FaJava', 'FaAws', 'FaFigma', 'FaGitAlt', 'FaGithub',
    'FaWordpress', 'FaShopify', 'FaDrupal', 'FaBrain', 'FaLink', 'FaCss3Alt', 'FaMagento',
    'VscAzure', 'TbBrandVscode',
] as const;

export type BrandIconName = (typeof BRAND_ICONS)[number];

/** Same props shape as a react-icons component, so it can replace one. */
export function brandIcon(name: BrandIconName) {
    function Icon({ className, ...rest }: React.SVGProps<SVGSVGElement>) {
        return (
            <svg className={className} aria-hidden="true" focusable="false" width="1em" height="1em" {...rest}>
                <use href={`/brand-icons.svg#${name}`} />
            </svg>
        );
    }
    Icon.displayName = name;
    return Icon;
}
