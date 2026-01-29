/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

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
  // Security headers
  async headers() {
    // Em desenvolvimento, permitir todas as conexões para Socket.io (localhost e LAN)
    // Em produção, restringir apenas a HTTPS e WSS
    const connectSrc = isDev
      ? "connect-src *"
      : "connect-src 'self' https: wss:";

    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              connectSrc,
              "frame-ancestors 'none'",
            ].join('; '),
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; 