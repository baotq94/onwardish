import moment from 'moment';
import { allPosts, Post } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import ListPostLayout from 'src/layouts/ListPostLayout';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LocaleType } from 'src/lib/types';

export default function BlogPage({ posts }: { posts: Post[] }) {
  console.log('co vo day khong ta 123');
  return (
    <>
      <NextSeo title='Blog' description='tất cả bài viết' />
      <ListPostLayout posts={posts} name='Blog' />
    </>
  );
}

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => post.draft !== true)
    .map((blog) => pick(blog, ['slug', 'title', 'summary', 'date', 'tags']))
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return {
    props: { posts },
  };
}
