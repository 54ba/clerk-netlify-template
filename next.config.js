/** @type {import('next').Config} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable static generation to prevent build-time Clerk errors
  experimental: {
    // This helps with Clerk authentication during build
    esmExternals: 'loose',
  },
  // Disable static generation for all pages
  trailingSlash: true,
}

module.exports = nextConfig
