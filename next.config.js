/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
  },
  
  // Webpack optimizations for performance
  webpack: (config, { dev, isServer }) => {
    // Exclude heavy dependencies
    config.externals = config.externals || [];
    if (!isServer) {
      config.externals.push({
        '@splinetool/react-spline': 'spline',
        '@splinetool/runtime': 'splineRuntime'
      });
    }
    
    if (!dev && !isServer) {
      // Aggressive chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 100000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
          },
        },
      };
      
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    return config;
  },
  
  // Compiler options for modern browsers
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;