/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'upload.wikimedia.org', 'cdn.jsdelivr.net'],
  },
}

module.exports = nextConfig
