import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ramtrucks.com",
        pathname: "/mediaserver/**",
      },
      {
        protocol: "https",
        hostname: "live.dealer-asset.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "portalgoverno.com.br",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
