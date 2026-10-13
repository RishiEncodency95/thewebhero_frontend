import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_URL } from "./lib/site";
import { getAllServices, getAllSolutions, getLocations, getNavigation, getSiteSettings } from "./lib/cms/content";
import { JsonLd } from "./lib/cms/seo";
import { organizationSchema, websiteSchema } from "./lib/cms/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const s = await getSiteSettings();
  return {
    metadataBase: new URL(SITE_URL),
    title: s.defaultTitle,
    description: s.defaultDescription,
    applicationName: s.name,
    verification: {
      google: s.verification.google || undefined,
      other: s.verification.bing ? { "msvalidate.01": s.verification.bing } : undefined,
    },
  };
}

/** Featured items first, then by the admin's sort order. */
function footerLinks(items: { title: string; slug: string; featured?: boolean }[], count = 6) {
  return [...items].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, count);
}

// Only well-formed IDs are ever written into a script tag.
const GA_ID = /^G-[A-Z0-9]{4,20}$/;
const GTM_ID = /^GTM-[A-Z0-9]{4,12}$/;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, nav, services, solutions, cities, countries] = await Promise.all([
    getSiteSettings(),
    getNavigation(),
    getAllServices(),
    getAllSolutions(),
    getLocations("city"),
    getLocations("country"),
  ]);
  const ga = settings.analytics.gaMeasurementId && GA_ID.test(settings.analytics.gaMeasurementId) ? settings.analytics.gaMeasurementId : null;
  const gtm = settings.analytics.gtmId && GTM_ID.test(settings.analytics.gtmId) ? settings.analytics.gtmId : null;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={organizationSchema(settings)} />
        <JsonLd data={websiteSchema(settings)} />
        <Topbar settings={settings} />
        <Navbar nav={nav} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer
          settings={settings}
          services={footerLinks(services)}
          solutions={footerLinks(solutions)}
          cities={cities}
          countries={countries}
        />

        {gtm && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
          </Script>
        )}
        {ga && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
