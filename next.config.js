/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
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
