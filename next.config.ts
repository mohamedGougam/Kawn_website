import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** Set `STATIC_EXPORT=1` when building for static hosts (GoDaddy/cPanel → upload `out/`). */
const isStaticExport =
  process.env.STATIC_EXPORT === "1" ||
  process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    root: projectRoot,
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/api/support-proxy",
        destination: "http://20.119.99.223/accounts/support/submit/",
      },
    ];
  },
};

export default nextConfig;
