import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'links.papareact.com'],
  },
  output:'export',
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
