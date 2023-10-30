/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "www.notion.so"]
  },
  i18n: {
    locales: ["en", "pt"],
    defaultLocale: "en"
  }
};

module.exports = nextConfig;
