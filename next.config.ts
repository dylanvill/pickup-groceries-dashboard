import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/**",
      },
    ],
    // Disable image optimization for local development
    unoptimized: process.env.NODE_ENV === "development",
    // Allow private IPs for local development
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    minimumCacheTTL: 0,
  },
  // Disable SSR globally
  experimental: {
    appDir: true,
  },
  // Force client-side rendering
  output: "export",
  trailingSlash: true,
  distDir: "out",
};

export default nextConfig;
