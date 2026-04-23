import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Swastik-Dental-Care" : "",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
