import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // Local assets are content-hashed/stable; cache optimized variants for 31 days.
    minimumCacheTTL: 2678400,
    // Tuned to the real breakpoints and fixed pixel boxes used across the site
    // (avatars 48-64px, logos 80-256px, cards ~320-384px).
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [48, 64, 96, 128, 160, 256, 384],
    qualities: [75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default withNextIntl(nextConfig);
