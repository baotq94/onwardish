const { withContentlayer } = require('next-contentlayer');
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
