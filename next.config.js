/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*.map',
          destination: '/404'
        }
      ]
    };
  }
};

module.exports = nextConfig;
