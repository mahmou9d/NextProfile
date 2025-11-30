import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'links.papareact.com','i.pravatar.cc'],
    unoptimized: true,  
  },
  // output:'export',
  typescript:{
    ignoreBuildErrors:true
  }
};

export default nextConfig;
