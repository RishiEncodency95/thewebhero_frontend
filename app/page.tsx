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

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 flex flex-col font-sans">
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <HomeHero />

        {/* 2. Key Stats Counter */}
        <HomeStats />

        {/* 3. About Company Section */}
        <HomeAbout />

        {/* 4. Core Services Grid */}
        <HomeServices />

        {/* 5. Featured IT Support Showcase */}
        <HomeFeaturedService />

        {/* 6. Custom Solutions */}
        <HomeSolutions />

        {/* 7. Industries We Serve */}
        <HomeIndustries />

        {/* 8. Technologies We Work With */}
        <HomeTechnologies />

        {/* 9. Featured Projects Showcase */}
        <HomeProjects />

        {/* 10. Development Process Pipeline */}
        <HomeProcess />

        {/* 11. Business Impact & Client Testimonials */}
        <HomeImpactTestimonials />

        {/* 12. Resources Articles, FAQ & Partners */}
        <HomeArticlesFaqPartners />

        {/* 13. Call to Action Banner */}
        <HomeCta />
      </main>
    </div>
  );
}
