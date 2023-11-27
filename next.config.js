/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: {
    resolve: {
      alias: {
        "hls.js": "hls.js/dist/hls.js",
      },
    },
  },
  images: {
    domains: ["utfs.io"],
  },
};

module.exports = nextConfig;
