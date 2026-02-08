const loadPlugin = (mod) =>
    mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod;

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [
            loadPlugin(require('remark-frontmatter')),
            loadPlugin(require('remark-gfm')),
            loadPlugin(require('remark-math')),
            require('./src/lib/remark-img-to-jsx.cjs'),
        ],
        rehypePlugins: [
            loadPlugin(require('rehype-slug')),
            loadPlugin(require('rehype-code-titles')),
            loadPlugin(require('rehype-prism-plus')),
            loadPlugin(require('rehype-katex')),
            [
                loadPlugin(require('rehype-autolink-headings')),
                {
                    properties: {
                        className: ['anchor'],
                    },
                },
            ],
        ],
    },
});
const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: true,
    i18n,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
