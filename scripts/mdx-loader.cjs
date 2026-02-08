const path = require('node:path');
const { Buffer } = require('node:buffer');
const { createHash } = require('node:crypto');
const { SourceMapGenerator } = require('source-map');
const { createFormatAwareProcessors } = require('@mdx-js/mdx/internal-create-format-aware-processors');

const loadPlugin = (mod) =>
    mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod;

const remarkFrontmatter = loadPlugin(require('remark-frontmatter'));
const remarkGfm = loadPlugin(require('remark-gfm'));
const remarkMath = loadPlugin(require('remark-math'));
const rehypeSlug = loadPlugin(require('rehype-slug'));
const rehypeCodeTitles = loadPlugin(require('rehype-code-titles'));
const rehypePrismPlus = loadPlugin(require('rehype-prism-plus'));
const rehypeKatex = loadPlugin(require('rehype-katex'));
const rehypeAutolinkHeadings = loadPlugin(
    require('rehype-autolink-headings'),
);
const remarkImgToJsx = require(path.join(__dirname, '..', 'src', 'lib', 'remark-img-to-jsx.cjs'));

const BASE_OPTIONS = {
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkFrontmatter, remarkGfm, remarkMath, remarkImgToJsx],
    rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrismPlus,
        rehypeKatex,
        [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    ],
};

const marker = {};
const cache = new WeakMap();

module.exports = function mdxLoader(value) {
    const callback = this.async();

    const options = {
        SourceMapGenerator: this.sourceMap ? SourceMapGenerator : undefined,
        development: this.mode === 'development',
        ...BASE_OPTIONS,
    };

    const hash = getOptionsHash(options);
    const compiler = this._compiler || marker;

    let map = cache.get(compiler);
    if (!map) {
        map = new Map();
        cache.set(compiler, map);
    }

    let process = map.get(hash);
    if (!process) {
        process = createFormatAwareProcessors(options).process;
        map.set(hash, process);
    }

    const context = this.context;
    const filePath = this.resourcePath;

    process({ value, path: filePath }).then(
        (file) => {
            callback(undefined, Buffer.from(file.value), file.map || undefined);
        },
        (error) => {
            const fpath = path.relative(context, filePath);
            error.message = `${fpath}:${error.name}: ${error.message}`;
            callback(error);
        },
    );
};

function getOptionsHash(options) {
    const hash = createHash('sha256');

    for (const [key, value] of Object.entries(options)) {
        if (value !== undefined) {
            const valueString = JSON.stringify(value);
            hash.update(key + valueString);
        }
    }

    return hash.digest('hex').slice(0, 16);
}
