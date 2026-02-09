import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data');
const OUTPUT_FILE = path.join(ROOT, 'src/generated/content.ts');
const MANIFEST_FILE = path.join(ROOT, 'src/generated/content-manifest.ts');

const collections = [
    {
        exportName: 'allPosts',
        componentExportName: 'postComponents',
        typeName: 'Post',
        dir: 'post',
        manifestKey: 'posts',
        defaults: { tags: ['Blog'], draft: false },
        required: ['title', 'date', 'summary', 'lang'],
        fields: [
            'title',
            'date',
            'summary',
            'lang',
            'image',
            'draft',
            'tags',
        ],
    },
    {
        exportName: 'allPages',
        componentExportName: 'pageComponents',
        typeName: 'Page',
        dir: 'pages',
        manifestKey: 'pages',
        defaults: { draft: false },
        required: ['title', 'description', 'lang'],
        fields: ['title', 'description', 'lang'],
    },
];

function addToManifest(map, key, lang, value) {
    if (!map[key]) map[key] = {};
    if (!map[key][lang]) map[key][lang] = [];
    map[key][lang].push(value);
}

function getMdxFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files.push(...getMdxFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.mdx')) {
            files.push(fullPath);
        }
    }
    return files.sort();
}

function toImportName(prefix, key) {
    const safe = key
        .replace(/[^a-zA-Z0-9_]/g, '_')
        .replace(/^\d/, '_$&');
    return `${prefix}_${safe}`;
}

function normalizeTags(value, defaultTags) {
    if (!value) return defaultTags;
    if (Array.isArray(value)) return value;
    return [String(value)];
}

function buildCollection(config) {
    const dirPath = path.join(DATA_DIR, config.dir);
    if (!fs.existsSync(dirPath)) {
        return { imports: [], entries: [], manifestItems: [] };
    }

    const files = getMdxFiles(dirPath);
    const imports = [];
    const entries = [];
    const manifestItems = [];

    for (const filePath of files) {
        const raw = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(raw);
        const slug = path.basename(filePath, '.mdx');
        const relativeKey = path
            .relative(dirPath, filePath)
            .replace(/\\/g, '/')
            .replace(/\.mdx$/, '');
        const importName = toImportName(config.typeName, relativeKey);
        const relativeImport = path
            .relative(path.dirname(OUTPUT_FILE), filePath)
            .replace(/\\/g, '/');

        const missing = config.required.filter((key) => data[key] == null);
        if (missing.length > 0) {
            throw new Error(
                `[content] Missing required frontmatter ${missing.join(', ')} in ${filePath}`,
            );
        }

        const tags = normalizeTags(data.tags, config.defaults.tags || []);
        const draft = data.draft ?? config.defaults.draft ?? false;

        const entry = {
            importName,
            slug,
            componentKey: `${data.lang}/${slug}`,
            data: {
                body: { raw: content },
                readingTime: readingTime(content),
            },
        };

        for (const field of config.fields) {
            if (field === 'tags') {
                entry.data.tags = tags;
            } else if (field === 'draft') {
                entry.data.draft = draft;
            } else {
                entry.data[field] = data[field];
            }
        }

        imports.push(`import ${importName} from '${relativeImport}';`);
        entries.push(entry);
        manifestItems.push({
            lang: data.lang,
            slug,
            tags,
        });
    }

    return { imports, entries, manifestItems };
}

function toObjectLiteral(obj) {
    return JSON.stringify(obj, null, 4);
}

function buildFile() {
    const imports = ["import type { Post, Page } from '../lib/content-types';"];
    const exports = [];
    const manifest = { posts: {}, pages: {}, tags: {} };

    for (const config of collections) {
        const { imports: collImports, entries, manifestItems } = buildCollection(
            config,
        );
        imports.push(...collImports);

        const items = entries.map((entry) => {
            return `{
    ...${toObjectLiteral(entry.data)},
    slug: '${entry.slug}',
}`;
        });

        exports.push(
            `export const ${config.exportName}: ${config.typeName}[] = [\n${items.join(',\n')}\n];`,
        );

        const mapItems = entries.map(
            (entry) => `    '${entry.componentKey}': ${entry.importName}`,
        );

        exports.push(
            `export const ${config.componentExportName}: Record<string, any> = {\n${mapItems.join(
                ',\n',
            )}\n};`,
        );

        for (const item of manifestItems) {
            addToManifest(manifest, config.manifestKey, item.lang, item.slug);
            if (config.manifestKey === 'posts') {
                for (const tag of item.tags) {
                    addToManifest(manifest, 'tags', item.lang, tag);
                }
            }
        }
    }

    const content = `/* eslint-disable */\n${imports.join('\n')}\n\n${exports.join('\n\n')}\n`;

    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, content, 'utf8');

    // Normalize manifest entries (unique + sorted)
    for (const key of Object.keys(manifest)) {
        for (const lang of Object.keys(manifest[key])) {
            manifest[key][lang] = Array.from(new Set(manifest[key][lang])).sort();
        }
    }

    const manifestContent = `/* eslint-disable */\nexport const contentManifest = ${JSON.stringify(
        manifest,
        null,
        4,
    )};\n`;
    fs.writeFileSync(MANIFEST_FILE, manifestContent, 'utf8');
}

buildFile();
