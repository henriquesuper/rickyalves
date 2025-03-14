/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable the App Router
  // This is now the default in Next.js 13+ but adding for clarity
  experimental: {
    // Using latest Next.js optimizations
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  // Configure image optimization for sharp
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig; 