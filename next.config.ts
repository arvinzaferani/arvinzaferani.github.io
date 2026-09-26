import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: projectRoot,
  },
  // `app/layout.tsx` is the only layout, so it owns <html lang dir>. Adding a
  // second nested layout would nest <html>/<body> and the browser would drop
  // `dir="rtl"`, breaking the Persian layout (§22).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
