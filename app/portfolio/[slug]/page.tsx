import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '../../lib/cms/content';
import { buildMetadata, JsonLd } from '../../lib/cms/seo';
import { breadcrumbSchema } from '../../lib/cms/schema';
import { SITE_URL } from '../../lib/site';
import { getProjectImage } from '../../lib/portfolioMedia';
import ProjectDetailHero from '../../components/portfolio/ProjectDetailHero';
import ProjectOverview from '../../components/portfolio/ProjectOverview';
import ProjectChallenge from '../../components/portfolio/ProjectChallenge';
import ProjectObjectives from '../../components/portfolio/ProjectObjectives';
import ProjectFeatures from '../../components/portfolio/ProjectFeatures';
import ProjectGallery from '../../components/portfolio/ProjectGallery';
import ProjectTechnologyStack from '../../components/portfolio/ProjectTechnologyStack';
import ProjectRelatedSection from '../../components/portfolio/ProjectRelatedSection';
import ProjectCTA from '../../components/portfolio/ProjectCTA';

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return { title: 'Project not found', robots: { index: false } };
    const image = getProjectImage(project);
    return buildMetadata({
        eyebrow: 'Case Study',
        path: `/portfolio/${project.slug}`,
        seo: project.seo,
        title: `${project.title} — ${project.subtitle ?? 'Case Study'}`,
        description: project.shortDescription,
        image: typeof image === 'string' ? image : image.src,
        type: 'article',
    });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const cover = getProjectImage(project);

    return (
        <main className="min-h-screen bg-white">
            <JsonLd
                data={[
                    breadcrumbSchema([{ name: 'Portfolio', path: '/portfolio' }, { name: project.title }]),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'CreativeWork',
                        name: project.title,
                        headline: project.subtitle,
                        description: project.shortDescription,
                        url: `${SITE_URL}/portfolio/${project.slug}`,
                        image: typeof cover === 'string' ? cover : `${SITE_URL}${cover.src}`,
                        creator: { '@id': `${SITE_URL}/#organization` },
                        keywords: project.technologies.map((t) => t.name).join(', '),
                    },
                ]}
            />
            <JsonLd data={project.seo?.structuredData} />
            {/* Project Hero */}
            <ProjectDetailHero project={project} />

            {/* Project Overview & Delivery Strategy */}
            <ProjectOverview project={project} />

            {/* Project Challenge (Conditioned inside component) */}
            <ProjectChallenge challenge={project.challenge} />

            {/* Project Objectives (Conditioned inside component) */}
            <ProjectObjectives objectives={project.objectives} />

            {/* Core Features & Functionality */}
            <ProjectFeatures features={project.features} />

            {/* UI/UX Gallery Showcase */}
            <ProjectGallery
                gallery={project.gallery}
                coverImage={getProjectImage(project)}
                projectTitle={project.title}
            />

            {/* Technology Stack */}
            <ProjectTechnologyStack technologies={project.technologies} />

            {/* Related Services, Industries & Solutions */}
            <ProjectRelatedSection project={project} />

            {/* Conversion CTA Banner */}
            <ProjectCTA projectTitle={project.title} />
        </main>
    );
}
