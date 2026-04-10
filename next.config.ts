import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Swastik-Dental-Care",
  assetPrefix: "/Swastik-Dental-Care",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
