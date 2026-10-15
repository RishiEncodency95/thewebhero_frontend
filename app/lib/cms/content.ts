/**
 * Website data layer.
 *
 * Every function reads from the CMS and adapts records to the types the
 * components already use. If the CMS can't be reached, it falls back to the
 * bundled static data in app/lib/*.ts so the site never goes down with the API.
 */
import { cmsFetch, cmsItem, cmsList, cmsSingleton, CmsResult } from './client';
import type { ServiceItem, ServiceCategoryGroup } from '../../types/service';
import type { SolutionItem, SolutionCategoryGroup, BusinessNeedMapping } from '../../types/solution';
import type { TechnologyItem, TechnologyCategoryGroup } from '../../types/technology';
import type { IndustryItem, IndustryCategoryGroup } from '../../types/industry';
import type { PortfolioItem } from '../../types/portfolio';
import type { ResourceItem, TableOfContentsItem } from '../../types/resource';
import type { CompanyInfo, CompanyProcessStep, CulturePrinciple, JobPosition, TeamMember } from '../../types/company';
import * as staticServices from '../services';
import * as staticSolutions from '../solutions';
import * as staticTech from '../technologies';
import * as staticIndustries from '../industries';
import * as staticPortfolio from '../portfolio';
import * as staticResources from '../resources';
import * as staticCompany from '../company';
import * as staticLocations from '../locationsData';
import { SITE, CONTACT, SOCIAL } from '../site';

type Doc = Record<string, unknown>;

export interface SeoData {
    title?: string;
    description?: string;
    focusKeyword?: string;
    keywords?: string[];
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogImageAlt?: string;
    noindex?: boolean;
    nofollow?: boolean;
    structuredData?: string;
}

/** Content plus the CMS SEO block, for metadata. */
export type WithSeo<T> = T & { seo?: SeoData };

// ── Adapters ────────────────────────────────────────────────────────────────

/** CMS record -> legacy frontend shape ("published" -> "active", SEO flattened). */
function adapt<T>(doc: Doc, arrays: string[] = []): WithSeo<T> {
    const seo = (doc.seo ?? {}) as SeoData;
    const out: Doc = {
        ...doc,
        status: doc.status === 'published' ? 'active' : 'draft',
        seoTitle: seo.title ?? '',
        seoDescription: seo.description ?? '',
        ogImage: seo.ogImage || undefined,
        seo,
    };
    // List views return a field subset; give components the arrays they map over.
    for (const key of arrays) if (!Array.isArray(out[key])) out[key] = [];
    return out as WithSeo<T>;
}

const CATALOGUE_ARRAYS = [
    'capabilities', 'subServices', 'technologies', 'deliverables', 'process', 'benefits', 'faqs', 'relatedServices',
    'challenges', 'audience', 'features', 'integrations', 'security', 'scalability', 'relatedSolutions',
    'useCases', 'ecosystem', 'relatedTechnologies', 'compliance', 'relatedIndustries',
];

/** Resolves a by-slug lookup: CMS item, confirmed missing, or static fallback when the CMS is down. */
async function bySlug<T>(result: CmsResult<Doc>, adaptFn: (d: Doc) => WithSeo<T>, fallback: () => T | undefined): Promise<WithSeo<T> | undefined> {
    if (result.status === 'ok') return adaptFn(result.data);
    if (result.status === 'not-found') return undefined;
    // Static items have no CMS SEO block; seo stays undefined.
    return fallback() as WithSeo<T> | undefined;
}

async function list<T>(resource: string, adaptFn: (d: Doc) => WithSeo<T>, fallback: () => T[], query: Record<string, string> = {}, extraTags: string[] = []): Promise<WithSeo<T>[]> {
    const items = await cmsList<Doc>(resource, query, extraTags);
    return items ? items.map(adaptFn) : (fallback() as WithSeo<T>[]);
}

// ── Catalogues: services, solutions, technologies, industries ─────────────

interface CategoryDoc {
    name: string;
    slug: string;
    description?: string;
    iconName?: string;
}

async function categoriesOf(type: string): Promise<CategoryDoc[] | null> {
    return cmsList<CategoryDoc>('categories', { type }, [type]);
}

function group<C extends string>(cats: CategoryDoc[], items: Doc[], childKey: C, titleKey: 'title' | 'name') {
    return cats.map((c) => ({
        id: c.slug,
        name: c.name,
        slug: c.slug,
        description: c.description ?? '',
        iconName: c.iconName ?? 'Layers',
        [childKey]: items
            .filter((i) => i.categorySlug === c.slug)
            .map((i) => ({ [titleKey]: i[titleKey], slug: i.slug, shortDescription: i.shortDescription ?? '' })),
    }));
}

const adaptService = (d: Doc) => adapt<ServiceItem>(d, CATALOGUE_ARRAYS);
const adaptSolution = (d: Doc) => adapt<SolutionItem>(d, CATALOGUE_ARRAYS);
const adaptTech = (d: Doc) => adapt<TechnologyItem>(d, CATALOGUE_ARRAYS);
const adaptIndustry = (d: Doc) => adapt<IndustryItem>(d, CATALOGUE_ARRAYS);

export const getAllServices = () => list('services', adaptService, staticServices.getAllServices, { view: 'summary' });
export const getServiceBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('services', slug, ['services']), adaptService, () => staticServices.getServiceBySlug(slug));
export const getAllServiceSlugs = async () => (await getAllServices()).map((s) => s.slug);
export async function getServiceCategories(): Promise<ServiceCategoryGroup[]> {
    const [cats, items] = await Promise.all([categoriesOf('services'), cmsList<Doc>('services', { view: 'summary' })]);
    if (!cats || !items) return staticServices.SERVICE_CATEGORIES;
    return group(cats, items, 'services', 'title') as unknown as ServiceCategoryGroup[];
}

export const getAllSolutions = () => list('solutions', adaptSolution, staticSolutions.getAllSolutions, { view: 'summary' });
export const getSolutionBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('solutions', slug, ['services', 'solutions']), adaptSolution, () => staticSolutions.getSolutionBySlug(slug));
export const getAllSolutionSlugs = async () => (await getAllSolutions()).map((s) => s.slug);
export async function getSolutionCategories(): Promise<SolutionCategoryGroup[]> {
    const [cats, items] = await Promise.all([categoriesOf('solutions'), cmsList<Doc>('solutions', { view: 'summary' })]);
    if (!cats || !items) return staticSolutions.SOLUTION_CATEGORIES;
    return group(cats, items, 'solutions', 'title') as unknown as SolutionCategoryGroup[];
}
export async function getBusinessNeedMappings(): Promise<BusinessNeedMapping[]> {
    const needs = await cmsList<Doc>('business-needs', { populate: 'true' }, ['solutions']);
    if (!needs) return staticSolutions.getBusinessNeedMappings();
    return needs.map((n) => ({
        needTitle: String(n.needTitle),
        needDescription: String(n.needDescription ?? ''),
        iconName: String(n.iconName ?? 'Target'),
        solutions: ((n.solutions as Doc[]) ?? []).map((s) => ({ title: String(s.title), slug: String(s.slug) })),
    }));
}

export const getAllTechnologies = () => list('technologies', adaptTech, staticTech.getAllTechnologies, { view: 'summary' });
export const getTechnologyBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('technologies', slug, ['services', 'solutions']), adaptTech, () => staticTech.getTechnologyBySlug(slug));
export const getAllTechSlugs = async () => (await getAllTechnologies()).map((t) => t.slug);
export async function getTechCategories(): Promise<TechnologyCategoryGroup[]> {
    const [cats, items] = await Promise.all([categoriesOf('technologies'), cmsList<Doc>('technologies', { view: 'summary' })]);
    if (!cats || !items) return staticTech.TECH_CATEGORIES;
    return group(cats, items, 'technologies', 'name') as unknown as TechnologyCategoryGroup[];
}

export const getAllIndustries = () => list('industries', adaptIndustry, staticIndustries.getAllIndustries, { view: 'summary' });
export const getIndustryBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('industries', slug, ['services', 'solutions', 'technologies']), adaptIndustry, () => staticIndustries.getIndustryBySlug(slug));
export const getAllIndustrySlugs = async () => (await getAllIndustries()).map((i) => i.slug);
export async function getIndustryCategories(): Promise<IndustryCategoryGroup[]> {
    const [cats, items] = await Promise.all([categoriesOf('industries'), cmsList<Doc>('industries', { view: 'summary' })]);
    if (!cats || !items) return staticIndustries.INDUSTRY_CATEGORIES;
    return group(cats, items, 'industries', 'name') as unknown as IndustryCategoryGroup[];
}

// ── Portfolio ──────────────────────────────────────────────────────────────

function adaptProject(d: Doc): WithSeo<PortfolioItem> {
    const p = adapt<PortfolioItem>(d, ['platforms', 'services', 'technologies', 'solutions', 'industries', 'features', 'gallery', 'process', 'integrations']);
    const related = (d.relatedProjects as (Doc | string)[] | undefined) ?? [];
    p.relatedProjectSlugs = related.map((r) => (typeof r === 'string' ? r : String(r.slug)));
    return p;
}

export const getAllProjects = () => list('portfolio', adaptProject, staticPortfolio.getAllProjects, { view: 'summary' });
export const getProjectBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('portfolio', slug), adaptProject, () => staticPortfolio.getProjectBySlug(slug));
export const getAllProjectSlugs = async () => (await getAllProjects()).map((p) => p.slug);

// ── Blog ───────────────────────────────────────────────────────────────────

const slugifyHeading = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Table of contents from the article's "## " headings. */
function tocFrom(markdown: string): TableOfContentsItem[] {
    return markdown
        .split('\n')
        .filter((l) => /^##\s+/.test(l.trim()))
        .map((l) => {
            const title = l.trim().replace(/^##\s+/, '');
            return { id: slugifyHeading(title), title, level: 2 };
        });
}

function adaptPost(d: Doc): WithSeo<ResourceItem> {
    const p = adapt<ResourceItem>(d, ['topics']);
    const content = String(d.content ?? '');
    const words = content.split(/\s+/).filter(Boolean).length;
    p.type = 'blog';
    p.description = String(d.excerpt ?? '');
    p.updatedAt = (d.lastUpdated as string) || undefined;
    p.readingTime = (d.readingTime as string) || (words ? `${Math.max(1, Math.round(words / 220))} min read` : undefined);
    p.tableOfContents = content ? tocFrom(content) : [];
    p.services = ((d.relatedServices as Doc[]) ?? []).map((s) => ({ title: String(s.title), slug: String(s.slug) }));
    p.technologies = ((d.relatedTechnologies as Doc[]) ?? []).map((t) => ({ name: String(t.name), slug: String(t.slug) }));
    return p;
}

export const getBlogPosts = () =>
    list('blog', adaptPost, () => staticResources.getResourcesByType('blog'), { view: 'summary' });
export const getBlogPost = async (slug: string) =>
    bySlug(await cmsItem<Doc>('blog', slug, ['services', 'technologies']), adaptPost, () => {
        const r = staticResources.getResourceBySlug(slug);
        return r?.type === 'blog' ? r : undefined;
    });

// ── Company ────────────────────────────────────────────────────────────────

interface CompanyDoc {
    name?: string;
    tagline?: string;
    story?: string;
    mission?: string;
    vision?: string;
    capabilities?: string[];
    values?: CompanyInfo['values'];
    culture?: CulturePrinciple[];
    process?: CompanyProcessStep[];
}

async function companyDoc(): Promise<CompanyDoc | null> {
    return cmsSingleton<CompanyDoc>('company');
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
    const [c, site] = await Promise.all([companyDoc(), getSiteSettings()]);
    const fallback = staticCompany.getCompanyInfo();
    if (!c) return fallback;
    return {
        ...fallback,
        name: c.name || fallback.name,
        tagline: c.tagline || fallback.tagline,
        story: c.story ?? '',
        mission: c.mission ?? '',
        vision: c.vision ?? '',
        values: c.values ?? [],
        capabilities: c.capabilities ?? [],
        contactEmail: site.contact.email,
        contactPhone: site.contact.phone,
    };
}

export async function getProcessSteps(): Promise<CompanyProcessStep[]> {
    const c = await companyDoc();
    if (!c) return staticCompany.getProcessSteps();
    return (c.process ?? []).map((s, i) => ({ ...s, step: s.step || i + 1, keyActivities: s.keyActivities ?? [], deliverables: s.deliverables ?? [] }));
}

export async function getCulturePrinciples(): Promise<CulturePrinciple[]> {
    const c = await companyDoc();
    return c ? c.culture ?? [] : staticCompany.getCulturePrinciples();
}

const adaptMember = (d: Doc) => adapt<TeamMember>(d, ['expertise', 'responsibilities']);
export const getTeamMembers = () => list('team', adaptMember, staticCompany.getTeamMembers, {}, ['company']);
export const getTeamMemberBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('team', slug), adaptMember, () => staticCompany.getTeamMemberBySlug(slug));

function adaptJob(d: Doc): WithSeo<JobPosition> {
    const j = adapt<JobPosition>(d, ['responsibilities', 'requiredSkills', 'niceToHave', 'benefits']);
    if (d.closed) j.status = 'closed';
    return j;
}
export const getJobPositions = () => list('careers', adaptJob, staticCompany.getJobPositions, {}, ['company']);
export const getJobPositionBySlug = async (slug: string) =>
    bySlug(await cmsItem<Doc>('careers', slug), adaptJob, () => staticCompany.getJobPositionBySlug(slug));

// ── Locations ──────────────────────────────────────────────────────────────

export interface LocationEntry {
    name: string;
    slug: string;
    type: 'city' | 'country';
    intro?: string;
    sections?: { title: string; description?: string }[];
    highlights?: { title: string; description?: string }[];
    faqs?: { question: string; answer: string }[];
    seo?: SeoData;
}

export async function getLocations(type: 'city' | 'country'): Promise<LocationEntry[]> {
    const items = await cmsList<LocationEntry>('locations', { type });
    if (items) return items;
    const src = type === 'city' ? staticLocations.TOP_CITIES : staticLocations.TOP_COUNTRIES;
    return src.map((l) => ({ ...l, type }));
}

export async function getLocation(type: 'city' | 'country', slug: string): Promise<LocationEntry | undefined> {
    const result = await cmsItem<LocationEntry>('locations', slug);
    if (result.status === 'ok') return result.data.type === type ? result.data : undefined;
    if (result.status === 'not-found') return undefined;
    return (await getLocations(type)).find((l) => l.slug === slug);
}

// ── Site settings, home page, FAQs, testimonials ──────────────────────────

export interface SiteSettings {
    name: string;
    tagline: string;
    logo?: string;
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    defaultOgImage: string;
    twitterHandle?: string;
    verification: { google?: string; bing?: string };
    analytics: { gaMeasurementId?: string; gtmId?: string };
    contact: {
        email: string;
        salesEmail: string;
        privacyEmail: string;
        legalEmail: string;
        phone: string;
        whatsapp: string;
        hours: string;
        address: { street: string; locality: string; region: string; postalCode: string; country: string };
    };
    social: Partial<Record<'linkedin' | 'twitter' | 'facebook' | 'instagram' | 'youtube', string>>;
    organization: { legalName: string; founded: string; description: string };
}

const STATIC_SETTINGS: SiteSettings = {
    name: SITE.name,
    tagline: SITE.tagline,
    titleTemplate: `%s | ${SITE.name}`,
    defaultTitle: `${SITE.name} - IT Services Company`,
    defaultDescription: SITE.description,
    defaultOgImage: '/og-image.jpg',
    verification: {},
    analytics: {},
    contact: { ...CONTACT, address: { ...CONTACT.address } },
    social: { ...SOCIAL },
    organization: { legalName: SITE.legalName, founded: SITE.founded, description: SITE.description },
};

/** Merges CMS settings over the static defaults so empty CMS fields never blank the site. */
export async function getSiteSettings(): Promise<SiteSettings> {
    const s = await cmsSingleton<Doc>('settings');
    if (!s) return STATIC_SETTINGS;
    const pick = <T extends Doc>(base: T, over: unknown): T => {
        const o = (over ?? {}) as Doc;
        const merged: Doc = { ...base };
        for (const [k, v] of Object.entries(o)) if (v !== '' && v !== undefined && v !== null) merged[k] = v;
        return merged as T;
    };
    const contact = pick(STATIC_SETTINGS.contact as unknown as Doc, s.contact) as unknown as SiteSettings['contact'];
    contact.address = pick(STATIC_SETTINGS.contact.address as unknown as Doc, (s.contact as Doc | undefined)?.address) as unknown as SiteSettings['contact']['address'];
    return {
        ...pick(STATIC_SETTINGS as unknown as Doc, {
            name: s.siteName,
            tagline: s.tagline,
            logo: s.logo,
            titleTemplate: s.titleTemplate,
            defaultTitle: s.defaultTitle,
            defaultDescription: s.defaultDescription,
            defaultOgImage: s.defaultOgImage,
            twitterHandle: s.twitterHandle,
        }),
        verification: (s.verification as SiteSettings['verification']) ?? {},
        analytics: (s.analytics as SiteSettings['analytics']) ?? {},
        contact,
        social: pick(STATIC_SETTINGS.social as Doc, s.social),
        organization: pick(STATIC_SETTINGS.organization as unknown as Doc, s.organization) as unknown as SiteSettings['organization'],
    } as SiteSettings;
}

export interface HomeContent {
    hero: {
        eyebrow: string;
        titleLine1: string;
        titleLine2: string;
        description: string;
        primaryCtaLabel: string;
        primaryCtaHref: string;
        secondaryCtaLabel: string;
        secondaryCtaHref: string;
    };
    stats: { value: string; label: string }[];
}

const STATIC_HOME: HomeContent = {
    hero: {
        eyebrow: 'Your Technology Partner',
        titleLine1: 'Ideas. Solutions. Real',
        titleLine2: 'Impact.',
        description:
            'We build powerful digital experiences, intelligent software, cutting-edge AI, and scalable cloud & IT solutions designed to accelerate growth and transform modern businesses into market leaders. From concept to execution, we deliver end-to-end technology solutions.',
        primaryCtaLabel: 'Start a Project',
        primaryCtaHref: '/get-a-quote',
        secondaryCtaLabel: 'Explore Services',
        secondaryCtaHref: '/services',
    },
    stats: [
        { value: '50+', label: 'Projects Delivered' },
        { value: '20+', label: 'Technologies' },
        { value: '15+', label: 'Business Solutions' },
        { value: '98%', label: 'Client Satisfaction' },
    ],
};

export async function getHomeContent(): Promise<HomeContent> {
    const h = await cmsSingleton<Partial<HomeContent>>('home-page');
    if (!h) return STATIC_HOME;
    const hero = { ...STATIC_HOME.hero };
    for (const [k, v] of Object.entries(h.hero ?? {})) if (v) (hero as Record<string, string>)[k] = String(v);
    return { hero, stats: h.stats?.length ? h.stats : STATIC_HOME.stats };
}

export interface FaqEntry {
    question: string;
    answer: string;
}

export async function getFaqs(page: 'home' | 'get-a-quote' | 'contact', fallback: FaqEntry[] = []): Promise<FaqEntry[]> {
    const items = await cmsList<FaqEntry>('faqs', { page }, ['home-page']);
    return items ?? fallback;
}

export interface TestimonialEntry {
    quote: string;
    authorName: string;
    authorRole?: string;
    companyName?: string;
    avatar?: string;
    projectTitle?: string;
    rating?: number;
}

/** Only published (approved) testimonials; empty when there are none. */
export async function getTestimonials(): Promise<TestimonialEntry[]> {
    return (await cmsList<TestimonialEntry>('testimonials', {}, ['home-page'])) ?? [];
}

// ── Page SEO ───────────────────────────────────────────────────────────────

export async function getPageSeo(path: string): Promise<SeoData | null> {
    const result = await cmsFetch<{ seo?: SeoData }>(`/seo-pages/by-path?path=${encodeURIComponent(path)}`, ['seo-pages']);
    return result.status === 'ok' ? result.data.seo ?? {} : null;
}

// ── Navigation (mega menus, footer) ───────────────────────────────────────

export interface NavigationData {
    services: ServiceCategoryGroup[];
    solutions: SolutionCategoryGroup[];
    technologies: TechnologyCategoryGroup[];
    industries: IndustryCategoryGroup[];
}

export async function getNavigation(): Promise<NavigationData> {
    const [services, solutions, technologies, industries] = await Promise.all([
        getServiceCategories(),
        getSolutionCategories(),
        getTechCategories(),
        getIndustryCategories(),
    ]);
    return { services, solutions, technologies, industries };
}
