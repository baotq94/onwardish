import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
import matter from 'gray-matter';

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, 'data', 'post');
const GISCUS_CONFIG_FILE = path.join(ROOT, 'data', 'giscusConfig.json');
const GITHUB_GRAPHQL_ENDPOINT = 'https://api.github.com/graphql';
const require = createRequire(import.meta.url);

function printUsage() {
    console.log(`Usage:
  node scripts/sync-giscus-discussions.mjs [--dry-run] [--write] [--lang=<locale>] [--slug=<slug>]

Options:
  --dry-run     Preview changes without mutating GitHub Discussions (default)
  --write       Create/update GitHub Discussions
  --lang=vi     Limit sync to one locale
  --slug=ddd    Limit sync to one post slug
  --help        Show this message
`);
}

function parseArgs(argv) {
    const options = {
        write: false,
        lang: null,
        slug: null,
    };

    for (const arg of argv) {
        if (arg === '--write') {
            options.write = true;
        } else if (arg === '--dry-run') {
            options.write = false;
        } else if (arg.startsWith('--lang=')) {
            options.lang = arg.slice('--lang='.length).trim() || null;
        } else if (arg.startsWith('--slug=')) {
            options.slug = arg.slice('--slug='.length).trim() || null;
        } else if (arg === '--help') {
            printUsage();
            process.exit(0);
        } else {
            throw new Error(`Unknown argument: ${arg}`);
        }
    }

    return options;
}

function loadGiscusConfig() {
    if (!fs.existsSync(GISCUS_CONFIG_FILE)) {
        throw new Error(
            `Missing config file: ${path.relative(ROOT, GISCUS_CONFIG_FILE)}.\n` +
                'Create data/giscusConfig.json before running this script.',
        );
    }

    const config = JSON.parse(fs.readFileSync(GISCUS_CONFIG_FILE, 'utf8'));
    const missing = ['repo', 'categoryId', 'termPrefix'].filter(
        (key) => !config[key],
    );

    if (missing.length > 0) {
        throw new Error(
            `data/giscusConfig.json is missing required key(s): ${missing.join(', ')}`,
        );
    }

    return config;
}

function loadDefaultLocale() {
    try {
        const nextI18NextConfig = require(path.join(ROOT, 'next-i18next.config.js'));
        return nextI18NextConfig?.i18n?.defaultLocale || 'vi';
    } catch {
        return 'vi';
    }
}

function splitRepo(repo) {
    const [owner, name] = String(repo).split('/');
    if (!owner || !name) {
        throw new Error(
            `Invalid repo value "${repo}". Expected "owner/name" in data/giscusConfig.json.`,
        );
    }
    return { owner, name };
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

function loadPosts({ langFilter, slugFilter, termPrefix, defaultLocale }) {
    if (!fs.existsSync(POSTS_DIR)) {
        throw new Error(`Missing posts directory: ${path.relative(ROOT, POSTS_DIR)}`);
    }

    return getMdxFiles(POSTS_DIR)
        .map((filePath) => {
            const source = fs.readFileSync(filePath, 'utf8');
            const { data } = matter(source);
            const slug = path.basename(filePath, '.mdx');
            const lang = String(data.lang || '').trim();
            const title = String(data.title || '').trim();
            const summary = String(data.summary || '').trim();
            const discussionId = String(data.discussionId || '').trim();

            const missing = [];
            if (!lang) missing.push('lang');
            if (!title) missing.push('title');
            if (!discussionId) missing.push('discussionId');
            if (missing.length > 0) {
                throw new Error(
                    `[content] Missing required frontmatter ${missing.join(', ')} in ${path.relative(
                        ROOT,
                        filePath,
                    )}`,
                );
            }

            const pathname =
                lang === defaultLocale ? `/blog/${slug}` : `/${lang}/blog/${slug}`;

            return {
                filePath,
                slug,
                lang,
                title,
                summary,
                discussionId,
                term: `${termPrefix}:${discussionId}`,
                pathname,
                legacyTitles: Array.from(
                    new Set([
                        pathname,
                        pathname.replace(/^\//, ''),
                        `/blog/${slug}`,
                        `blog/${slug}`,
                        `/${lang}/blog/${slug}`,
                        `${lang}/blog/${slug}`,
                    ]),
                ),
            };
        })
        .filter((post) => (langFilter ? post.lang === langFilter : true))
        .filter((post) => (slugFilter ? post.slug === slugFilter : true));
}

function buildCanonicalDiscussionTitle(post, discussionTitlePrefix) {
    return `${discussionTitlePrefix}: ${post.title} [${post.term}]`;
}

function buildDiscussionBody(post) {
    const lines = [
        'This discussion thread is managed by giscus for the blog post below.',
        '',
        `- Title: ${post.title}`,
        `- Language: ${post.lang}`,
        `- Slug: ${post.slug}`,
        `- Path: ${post.pathname}`,
        `- Discussion ID: ${post.discussionId}`,
        `- Discussion term: ${post.term}`,
    ];

    if (post.summary) {
        lines.push(`- Summary: ${post.summary}`);
    }

    return lines.join('\n');
}

async function githubGraphql(token, query, variables) {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${token}`,
            'user-agent': 'onwardish-giscus-sync',
        },
        body: JSON.stringify({ query, variables }),
    });

    const payload = await response.json();

    if (!response.ok || payload.errors?.length) {
        const errors = payload.errors?.map((error) => error.message).join('; ');
        throw new Error(
            `GitHub GraphQL request failed (${response.status}): ${errors || response.statusText}`,
        );
    }

    return payload.data;
}

async function fetchRepositoryDiscussions({ token, owner, name, categoryId }) {
    const query = `
        query RepositoryDiscussions($owner: String!, $name: String!, $categoryId: ID!, $after: String) {
            repository(owner: $owner, name: $name) {
                id
                discussions(first: 100, after: $after, categoryId: $categoryId) {
                    nodes {
                        id
                        number
                        title
                        url
                    }
                    pageInfo {
                        hasNextPage
                        endCursor
                    }
                }
            }
        }
    `;

    const discussions = [];
    let after = null;
    let repositoryId = null;

    while (true) {
        const data = await githubGraphql(token, query, {
            owner,
            name,
            categoryId,
            after,
        });

        const repository = data?.repository;
        if (!repository) {
            throw new Error(`Repository not found: ${owner}/${name}`);
        }

        repositoryId = repository.id;
        discussions.push(...(repository.discussions?.nodes || []));

        const pageInfo = repository.discussions?.pageInfo;
        if (!pageInfo?.hasNextPage) break;
        after = pageInfo.endCursor;
    }

    return { repositoryId, discussions };
}

async function createDiscussion({ token, repositoryId, categoryId, title, body }) {
    const mutation = `
        mutation CreateDiscussion($repositoryId: ID!, $categoryId: ID!, $title: String!, $body: String!) {
            createDiscussion(input: {
                repositoryId: $repositoryId
                categoryId: $categoryId
                title: $title
                body: $body
            }) {
                discussion {
                    id
                    number
                    title
                    url
                }
            }
        }
    `;

    const data = await githubGraphql(token, mutation, {
        repositoryId,
        categoryId,
        title,
        body,
    });

    return data.createDiscussion.discussion;
}

async function updateDiscussion({ token, discussionId, title }) {
    const mutation = `
        mutation UpdateDiscussion($discussionId: ID!, $title: String!) {
            updateDiscussion(input: {
                discussionId: $discussionId
                title: $title
            }) {
                discussion {
                    id
                    number
                    title
                    url
                }
            }
        }
    `;

    const data = await githubGraphql(token, mutation, {
        discussionId,
        title,
    });

    return data.updateDiscussion.discussion;
}

function matchDiscussionsForPost(discussions, post) {
    const normalizedLegacyTitles = post.legacyTitles.map((value) => value.toLowerCase());

    const termMatches = discussions.filter((discussion) =>
        String(discussion.title || '').includes(post.term),
    );

    const legacyMatches = discussions.filter((discussion) => {
        const title = String(discussion.title || '').toLowerCase();
        return normalizedLegacyTitles.some((legacyTitle) => title.includes(legacyTitle));
    });

    return { termMatches, legacyMatches };
}

async function main() {
    const options = parseArgs(process.argv.slice(2));
    const token = process.env.GITHUB_TOKEN || process.env.GISCUS_GITHUB_TOKEN;
    if (!token) {
        throw new Error(
            'Missing GITHUB_TOKEN or GISCUS_GITHUB_TOKEN. This script needs an authenticated GitHub token.',
        );
    }

    const giscusConfig = loadGiscusConfig();
    const defaultLocale = loadDefaultLocale();
    const posts = loadPosts({
        langFilter: options.lang,
        slugFilter: options.slug,
        termPrefix: giscusConfig.termPrefix,
        defaultLocale,
    });

    if (posts.length === 0) {
        console.log('No posts matched the provided filters.');
        return;
    }

    const { owner, name } = splitRepo(giscusConfig.repo);
    const { repositoryId, discussions } = await fetchRepositoryDiscussions({
        token,
        owner,
        name,
        categoryId: giscusConfig.categoryId,
    });

    console.log(
        `${options.write ? 'WRITE' : 'DRY RUN'}: syncing ${posts.length} post(s) against ${discussions.length} existing discussion(s) in ${owner}/${name}.`,
    );

    const stats = {
        unchanged: 0,
        created: 0,
        updated: 0,
        skipped: 0,
    };

    for (const post of posts) {
        const canonicalTitle = buildCanonicalDiscussionTitle(
            post,
            giscusConfig.discussionTitlePrefix || 'Comments',
        );
        const body = buildDiscussionBody(post);
        const { termMatches, legacyMatches } = matchDiscussionsForPost(
            discussions,
            post,
        );

        if (termMatches.length > 1) {
            stats.skipped += 1;
            console.warn(
                `[skip] ${post.lang}/${post.slug}: multiple discussions already match term "${post.term}".`,
            );
            continue;
        }

        if (termMatches.length === 1) {
            const existing = termMatches[0];
            if (existing.title === canonicalTitle) {
                stats.unchanged += 1;
                console.log(
                    `[ok] ${post.lang}/${post.slug}: discussion #${existing.number} already uses stable term.`,
                );
                continue;
            }

            if (!options.write) {
                stats.updated += 1;
                console.log(
                    `[plan:update] ${post.lang}/${post.slug}: #${existing.number} -> ${canonicalTitle}`,
                );
                continue;
            }

            const updated = await updateDiscussion({
                token,
                discussionId: existing.id,
                title: canonicalTitle,
            });

            existing.title = updated.title;
            stats.updated += 1;
            console.log(
                `[update] ${post.lang}/${post.slug}: discussion #${updated.number} title updated.`,
            );
            continue;
        }

        if (legacyMatches.length > 1) {
            stats.skipped += 1;
            console.warn(
                `[skip] ${post.lang}/${post.slug}: multiple legacy pathname discussions found (${legacyMatches
                    .map((discussion) => `#${discussion.number}`)
                    .join(', ')}).`,
            );
            continue;
        }

        if (legacyMatches.length === 1) {
            const legacy = legacyMatches[0];
            if (!options.write) {
                stats.updated += 1;
                console.log(
                    `[plan:migrate] ${post.lang}/${post.slug}: #${legacy.number} -> ${canonicalTitle}`,
                );
                continue;
            }

            const updated = await updateDiscussion({
                token,
                discussionId: legacy.id,
                title: canonicalTitle,
            });

            legacy.title = updated.title;
            stats.updated += 1;
            console.log(
                `[migrate] ${post.lang}/${post.slug}: migrated legacy discussion #${updated.number}.`,
            );
            continue;
        }

        if (!options.write) {
            stats.created += 1;
            console.log(
                `[plan:create] ${post.lang}/${post.slug}: ${canonicalTitle}`,
            );
            continue;
        }

        const created = await createDiscussion({
            token,
            repositoryId,
            categoryId: giscusConfig.categoryId,
            title: canonicalTitle,
            body,
        });

        discussions.push(created);
        stats.created += 1;
        console.log(
            `[create] ${post.lang}/${post.slug}: discussion #${created.number} created.`,
        );
    }

    console.log(
        `Done. unchanged=${stats.unchanged} updated=${stats.updated} created=${stats.created} skipped=${stats.skipped}`,
    );
}

main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
});
