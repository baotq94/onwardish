import moment from 'moment';
import { allPosts, Post } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import ListPostLayout from 'src/layouts/ListPostLayout';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function BlogPage({ posts }: { posts: Post[] }) {
    const { t } = useTranslation();

    return (
        <>
            <NextSeo title='Blog' description='allBlog' />
            <ListPostLayout posts={posts} name={t('blog')} />
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    const posts = allPosts
        .filter((post) => post.draft !== true && post.lang === locale)
        .map((blog) => pick(blog, ['slug', 'title', 'summary', 'date', 'tags']))
        .sort((a, b) => moment(b.date).diff(moment(a.date)));

    return {
        props: {
            posts,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
        },
    };
}
