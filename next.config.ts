import type { NextConfig } from "next";

/**
 * Export estático para GitHub Pages.
 * - Em Pages o site vive em /portfolio, então o workflow define NEXT_PUBLIC_BASE_PATH=/portfolio.
 * - Localmente (e na Vercel) a variável fica vazia e o site responde na raiz.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  // O lint do projeto é o Oxlint (`npm run lint`); o build não depende de ESLint.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
