/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en'
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/(.*).map',
          destination: 'https://vercel.com',
          locale: false
        }
      ]
    };
  }
};

module.exports = nextConfig;
