import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miever.s3.ap-east-1.amazonaws.com',
        port: '',
        pathname: '/static/**',
        search: '',
      },
    ],
    formats: ['image/webp']
  },
};

export default nextConfig;
