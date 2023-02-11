/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  compiler: {
    reactRemoveProperties: true,
  },
}

module.exports = nextConfig
