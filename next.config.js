/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.notion.so", "drive.google.com"]
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "pt"
  }
};

module.exports = nextConfig;
