/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/(.*).map',
          destination: '/404'
        }
      ]
    };
  }
};

module.exports = nextConfig;
