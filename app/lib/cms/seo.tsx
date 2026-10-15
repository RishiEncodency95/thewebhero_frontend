import type { Metadata } from 'next';
import { SITE_URL } from '../site';
import { getPageSeo, getSiteSettings, SeoData, SiteSettings } from './content';

const absolute = (url?: string) => (!url ? undefined : /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`);

interface MetadataInput {
    /** Site path of the page, e.g. "/services/web-development". */
    path: string;
    /** SEO block saved in the CMS for this page/item. */
    seo?: SeoData | null;
    /** Content-derived defaults (item title, short description, hero image). */
    title?: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article' | 'profile';
    /** Small label on the generated share image, e.g. "Service", "Blog". */
    eyebrow?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

/**
 * Builds full Next.js metadata for a page. Precedence for each tag:
 * the editor's SEO field → the content's own title/description → site defaults.
 */
export async function buildMetadata(input: MetadataInput, settings?: SiteSettings): Promise<Metadata> {
    const site = settings ?? (await getSiteSettings());
    const seo = input.seo ?? {};

    const title = seo.title?.trim() || (input.title ? site.titleTemplate.replace('%s', input.title) : site.defaultTitle);
    const description = seo.description?.trim() || input.description || site.defaultDescription;
    const url = `${SITE_URL}${input.path === '/' ? '' : input.path}`;
    // Page's own image → a branded image generated for this page's title
    // (more specific than one site-wide default).
    const image = absolute(
        seo.ogImage || input.image || `/og?${new URLSearchParams({ title: input.title || title.split(' | ')[0], ...(input.eyebrow ? { eyebrow: input.eyebrow } : {}) })}`,
    );
    const ogTitle = seo.ogTitle?.trim() || title;
    const ogDescription = seo.ogDescription?.trim() || description;
    const keywords = [...(seo.focusKeyword ? [seo.focusKeyword] : []), ...(seo.keywords ?? [])];

    return {
        // "absolute" so the root layout can never append a second brand suffix.
        title: { absolute: title },
        description,
        keywords: keywords.length ? [...new Set(keywords)] : undefined,
        alternates: { canonical: seo.canonical?.trim() || url },
        robots: { index: !seo.noindex, follow: !seo.nofollow },
        openGraph: {
            title: ogTitle,
            description: ogDescription,
            url,
            siteName: site.name,
            locale: 'en_IN',
            type: input.type ?? 'website',
            images: image ? [{ url: image, width: 1200, height: 630, alt: seo.ogImageAlt || ogTitle }] : undefined,
            ...(input.type === 'article' ? { publishedTime: input.publishedTime, modifiedTime: input.modifiedTime } : {}),
        },
        twitter: {
            card: 'summary_large_image',
            site: site.twitterHandle || undefined,
            title: ogTitle,
            description: ogDescription,
            images: image ? [image] : undefined,
        },
    };
}

/**
 * Metadata for a fixed page whose SEO lives in Admin → Page SEO. The fallback
 * title is a complete title (brand included), used only if the CMS has none.
 */
export async function pageMetadata(path: string, fallback: { title?: string; description?: string } = {}): Promise<Metadata> {
    const [pageSeo, site] = await Promise.all([getPageSeo(path), getSiteSettings()]);
    const seo = pageSeo ?? {};
    return buildMetadata(
        {
            path,
            seo: { ...seo, title: seo.title?.trim() || fallback.title, description: seo.description?.trim() || fallback.description },
            // The site's social image represents the home page; other pages get their own.
            image: path === '/' ? site.defaultOgImage : undefined,
        },
        site,
    );
}

/** Renders schema.org JSON-LD. Accepts objects or the raw JSON string saved in the CMS. */
export function JsonLd({ data }: { data: unknown }) {
    if (!data) return null;
    let json: string;
    try {
        json = typeof data === 'string' ? JSON.stringify(JSON.parse(data)) : JSON.stringify(data);
    } catch {
        return null; // never ship broken schema
    }
    // Escape "<" so content can't close the script tag.
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json.replace(/</g, '\\u003c') }} />;
}

/** Custom JSON-LD the editor added for a fixed page. */
export async function PageJsonLd({ path }: { path: string }) {
    const seo = await getPageSeo(path);
    return <JsonLd data={seo?.structuredData} />;
}
