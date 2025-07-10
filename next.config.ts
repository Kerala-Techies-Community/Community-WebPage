import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true, // required for full static export :contentReference[oaicite:1]{index=1}
  },

  typescript: {
    ignoreBuildErrors: false,
  },

  eslint: {
    ignoreDuringBuilds: false,
  },

  reactStrictMode: true,

  compiler: {
    styledComponents: true, // enables styled‑components optimizations via SWC :contentReference[oaicite:2]{index=2}
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error"] }
        : false, // removes console logs except console.error :contentReference[oaicite:3]{index=3}
  },

  // New in Next.js 15: caching behavior for Route Handlers can be opted-in
 

  // Optional: adjust trailing slash or output directory if needed
  // trailingSlash: true,
  // distDir: 'out',
};

export default nextConfig;
