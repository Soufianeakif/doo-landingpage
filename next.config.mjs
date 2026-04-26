import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

// Target modern browsers to eliminate legacy polyfills (~11KB savings)
const modernBrowsers = [
    'last 2 Chrome versions',
    'last 2 Firefox versions', 
    'last 2 Safari versions',
    'last 2 Edge versions',
    'last 2 iOS versions',
    'Chrome >= 90',
    'Safari >= 14',
    'Edge >= 90',
    'Firefox >= 88'
];

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Production optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    
    // Use SWC with modern browser targets (no legacy polyfills)
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // Reduce bundle size
    webpack: (config, { isServer }) => {
        // Optimize bundle splitting
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                    common: {
                        minChunks: 2,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            };
        }
        return config;
    },
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
                pathname: '/**',
            },
        ],
        // Optimize images
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
    },
    
    // Enable experimental features for optimization
    experimental: {
        optimizePackageImports: ['framer-motion', '@heroicons/react', 'lucide-react'],
    },
};

export default withNextIntl(nextConfig);
