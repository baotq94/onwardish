import { allPosts } from 'src/lib/content';
import type { Post } from 'src/lib/content-types';
import { pick } from 'src/lib/pick';
import moment from 'moment';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import ListTagLayout from 'src/layouts/ListTagLayout';
import { allTags } from 'src/lib/tags';

type Path = {
    params: {
        slug: string;
    };
    locale: string;
};

export default function TagViewPage({
    posts,
    tagName,
}: {
    posts: Post[];
    tagName: string;
}) {
    return (
        <>
            <NextSeo
                title={tagName.toUpperCase()}
                description={`All the blog with ${tagName} tag`}
            />
            <ListTagLayout posts={posts} name={tagName} />
        </>
    );
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
    const paths: Path[] = [];
    allTags('all').map((t) => {
        return locales.map((locale) => {
            paths.push({ params: { slug: t.name }, locale });
        });
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params,
    locale,
}: {
    params: { slug: string };
    locale: string;
}) {
    const slug = params.slug;
    const posts = allPosts
        .filter(
            (post) =>
                post.draft !== true &&
                post.lang === locale &&
                post.tags.includes(slug),
        )
        .map((blog) => pick(blog, ['slug', 'title', 'summary', 'date', 'tags']))
        .sort((a, b) => moment(b.date).diff(moment(a.date)));
    return {
        props: {
            posts,
            tagName: slug,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
        },
    };
}
