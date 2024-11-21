import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
        pathname: '/images/products/thumbnails/**', // Adjust the pathname as needed
      },
    ],
  },
};

export default nextConfig;
