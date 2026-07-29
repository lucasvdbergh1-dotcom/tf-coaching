import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  outputFileTracingRoot: __dirname,
  experimental: { useTypeScriptCli: true },
};

export default nextConfig;
