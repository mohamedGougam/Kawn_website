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
};

export default nextConfig;
