import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: 'export' as const,
        basePath: '/trattoria-verde-sample',
        assetPrefix: '/trattoria-verde-sample/',
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
