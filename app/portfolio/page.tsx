import type { Metadata } from 'next';
import { getAllProjects } from '../lib/cms/content';
import { pageMetadata, PageJsonLd } from '../lib/cms/seo';
import PortfolioView from './PortfolioView';

export function generateMetadata(): Promise<Metadata> {
    return pageMetadata('/portfolio', {
        title: 'Portfolio | Web & Mobile Apps Built by TheWebHero',
        description: 'See live web platforms, booking apps, admin dashboards and Flutter mobile apps designed and built end to end by TheWebHero.',
    });
}

export default async function PortfolioPage() {
    const projects = await getAllProjects();
    return (
        <>
            <PageJsonLd path="/portfolio" />
            <PortfolioView projects={projects} />
        </>
    );
}
