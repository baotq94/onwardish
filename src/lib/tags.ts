import { allPosts, allProjects } from 'src/lib/content';

export type Tag = {
    name: string;
    count: number;
    lang: string;
};

export function allTags(locale: string) {
    const posts = allPosts;
    const projects = allProjects;
    const tags: Tag[] = [];
    for (const post of posts) {
        if ((post.draft === true || post.lang !== locale) && locale !== 'all') {
            continue;
        }
        for (const tag of post.tags) {
            const existingTag = tags.find((t) => t.name === tag);
            if (existingTag) {
                existingTag.count++;
            } else {
                tags.push({ name: tag, count: 1, lang: locale });
            }
        }
    }
    for (const project of projects) {
        if (
            (project.draft === true || project.lang !== locale) &&
            locale !== 'all'
        ) {
            continue;
        }
        for (const tag of project.tags) {
            const existingTag = tags.find((t) => t.name === tag);
            if (existingTag) {
                existingTag.count++;
            } else {
                tags.push({ name: tag, count: 1, lang: locale });
            }
        }
    }
    return tags;
}
