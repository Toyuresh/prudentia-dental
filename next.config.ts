import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // For static export
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true,// Required for static export
    domains: ['ik.imagekit.io'], // Add the hostname here
  },
};

export default nextConfig;
