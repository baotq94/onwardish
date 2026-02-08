const path = require('path');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true,
    i18n,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    webpack(config, options) {
        config.module.rules.push({
            test: /\.mdx?$/,
            exclude: /node_modules/,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: path.join(__dirname, 'scripts', 'mdx-loader.cjs'),
                },
            ],
        });

        return config;
    },
};

module.exports = withBundleAnalyzer(nextConfig);
