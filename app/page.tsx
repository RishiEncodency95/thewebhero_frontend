import type { Metadata } from "next";
import { Suspense } from "react";
import HomeHero from "./components/home/HomeHero";
import HomeStats from "./components/home/HomeStats";
import HomeAbout from "./components/home/HomeAbout";
import HomeServices from "./components/home/HomeServices";
import HomeFeaturedService from "./components/home/HomeFeaturedService";
import HomeSolutions from "./components/home/HomeSolutions";
import HomeIndustries from "./components/home/HomeIndustries";
import HomeTechnologies from "./components/home/HomeTechnologies";
import HomeProjects from "./components/home/HomeProjects";
import HomeProcess from "./components/home/HomeProcess";
import HomeImpactTestimonials from "./components/home/HomeImpactTestimonials";
import HomeArticlesFaqPartners from "./components/home/HomeArticlesFaqPartners";
import HomeCta from "./components/home/HomeCta";
import { getAllProjects, getBlogPosts, getFaqs, getHomeContent, getTestimonials } from "./lib/cms/content";
import { JsonLd, pageMetadata, PageJsonLd } from "./lib/cms/seo";
import { faqSchema } from "./lib/cms/schema";

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/", {
    title: "TheWebHero | Web, Mobile App & Custom Software Development Company",
    description:
      "TheWebHero builds custom websites, web apps, mobile apps and business software for startups and growing companies. Get a free project consultation.",
  });
}

export default async function Home() {
  const [content, projects, testimonials, faqs, posts] = await Promise.all([
    getHomeContent(),
    getAllProjects(),
    getTestimonials(),
    getFaqs("home"),
    getBlogPosts(),
  ]);
  const latestPosts = [...posts].sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));

  return (
    <div className="bg-white min-h-screen text-slate-900 flex flex-col font-sans">
      <PageJsonLd path="/" />
      <JsonLd data={faqSchema(faqs)} />
      {/* Below-the-fold sections skip layout until scrolled near (twh-defer-sections), and each
          sits in its own Suspense boundary so React hydrates them in small chunks. */}
      <main className="twh-defer-sections flex-1 w-full">
        {/* 1. Hero Section */}
        <HomeHero hero={content.hero} />

        {/* 2. Key Stats Counter */}
        <HomeStats stats={content.stats} />

        {/* 3. About Company Section */}
        <Suspense><HomeAbout content={content.sections.about} /></Suspense>

        {/* 4. Core Services Grid */}
        <Suspense><HomeServices content={content.sections.services} /></Suspense>

        {/* 5. Featured IT Support Showcase */}
        <Suspense><HomeFeaturedService content={content.sections.featured} /></Suspense>

        {/* 6. Custom Solutions */}
        <Suspense><HomeSolutions content={content.sections.solutions} /></Suspense>

        {/* 7. Industries We Serve */}
        <Suspense><HomeIndustries content={content.sections.industries} /></Suspense>

        {/* 8. Technologies We Work With */}
        <Suspense><HomeTechnologies content={content.sections.technologies} /></Suspense>

        {/* 9. Featured Projects Showcase */}
        <Suspense><HomeProjects projects={projects} content={content.sections.projects} /></Suspense>

        {/* 10. Development Process Pipeline */}
        <Suspense><HomeProcess content={content.sections.process} /></Suspense>

        {/* 11. Business Impact & Client Testimonials */}
        <Suspense><HomeImpactTestimonials testimonials={testimonials} why={content.sections.why} heading={content.sections.testimonials} /></Suspense>

        {/* 12. Latest articles & FAQ */}
        <Suspense><HomeArticlesFaqPartners posts={latestPosts} faqs={faqs} insights={content.sections.insights} faqHeading={content.sections.faq} /></Suspense>

        {/* 13. Call to Action Banner */}
        <Suspense><HomeCta content={content.sections.cta} /></Suspense>
      </main>
    </div>
  );
}
