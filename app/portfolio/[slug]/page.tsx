import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '../../lib/portfolio';
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
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Project Not Found | TheWebHero',
            description: 'The requested portfolio project could not be found.',
        };
    }

    return {
        title: project.seoTitle || `${project.title} - Portfolio | TheWebHero`,
        description: project.seoDescription || project.shortDescription,
        openGraph: {
            title: project.seoTitle || `${project.title} | TheWebHero Portfolio`,
            description: project.seoDescription || project.shortDescription,
            url: `https://thewebhero.ai/portfolio/${project.slug}`,
            siteName: 'TheWebHero',
            images: [
                {
                    url: project.ogImage || project.coverImage,
                    width: 1200,
                    height: 630,
                    alt: project.coverImageAlt || project.title,
                },
            ],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.seoTitle || project.title,
            description: project.seoDescription || project.shortDescription,
            images: [project.ogImage || project.coverImage],
        },
        alternates: {
            canonical: `https://thewebhero.ai/portfolio/${project.slug}`,
        },
    };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
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
                coverImage={project.coverImage}
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
