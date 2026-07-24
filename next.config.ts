import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  // Tree-shake large barrel packages so only what each page uses is bundled.
  // lucide-react ships 1000+ icons; framer-motion is heavy — this keeps the
  // initial payload small without changing any code or output.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    // Turbopack's on-disk dev cache (default since Next 16.1) spawns a runaway
    // number of worker processes during cache writes/compaction on this machine,
    // consuming tens of GB of RAM/swap and crashing the system. Disable it.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
