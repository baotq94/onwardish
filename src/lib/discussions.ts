import giscusConfig from 'data/giscusConfig.json';
import type { Post } from './content-types';

const DEFAULT_LOCALE = 'vi';

type DiscussionPost = Pick<Post, 'discussionId' | 'lang' | 'slug' | 'title'>;

export function getPostDiscussionTerm(post: Pick<Post, 'discussionId'>) {
    return `${giscusConfig.termPrefix}:${post.discussionId}`;
}

export function getPostPathname(post: Pick<Post, 'lang' | 'slug'>) {
    const basePath = `/blog/${post.slug}`;
    return post.lang === DEFAULT_LOCALE ? basePath : `/${post.lang}${basePath}`;
}

export function getPostDiscussionTitle(post: DiscussionPost) {
    return `${giscusConfig.discussionTitlePrefix}: ${post.title} [${getPostDiscussionTerm(post)}]`;
}
