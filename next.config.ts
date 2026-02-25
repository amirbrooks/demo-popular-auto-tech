import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lead/popular-auto-tech",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
