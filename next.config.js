/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyimage.com", "picsum.photos"],
  },
  experimental: {
    instrumentationHook: true
  }
};

module.exports = nextConfig;
