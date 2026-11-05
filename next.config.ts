import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['outstatic', 'transliteration'],
  async redirects() {
    return [
      {
        source: '/ngo',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ngo/:path*',
        destination: '/services/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
