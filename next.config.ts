import type { NextConfig } from "next";

// Images uploaded in the admin are served by Cloudinary, or by the API itself
// (/uploads) when Cloudinary isn't configured.
const apiUrl = new URL(process.env.CMS_API_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1");

const nextConfig: NextConfig = {
  images: {
    // AVIF is ~30-50% smaller than WebP; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
    // Lets `next dev` optimise uploads served by the API on localhost.
    // Never enabled in production (it would expose the internal network).
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== "production",
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      {
        protocol: apiUrl.protocol.replace(":", "") as "http" | "https",
        hostname: apiUrl.hostname,
        port: apiUrl.port,
        pathname: "/uploads/**",
      },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Brand logo sprite: cache for a day, refresh in the background after.
        source: "/brand-icons.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
