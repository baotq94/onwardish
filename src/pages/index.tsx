import { allPosts } from 'src/lib/content';
import type { Post } from 'src/lib/content-types';
import { pick } from 'src/lib/pick';
import moment from 'moment';
import { timeLocale } from 'src/lib/timeLocale';
import Link from 'next/link';
import ViewCounter from 'src/components/ViewCounter';
import { IconArrowRight } from '@tabler/icons-react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home({ posts }: { posts: Post[] }) {
    const { t } = useTranslation();
    const time = timeLocale(t('localeTime'));
    moment.updateLocale(t('localeTime'), time);

    return (
        <div className='space-y-10'>
            <div className='border-b-[1px] pb-5 border-muted'>
                <h1 className='text-3xl font-bold tracking-wide md:text-4xl text-text sm:leading-10 md:leading-14'>
                    {t('welcome')}
                </h1>
                <div className='mt-3 font-mono md:text-lg text-subtle'>
                    <Link
                        href={t('/about')}
                        className='hover-underline-animation text-text'
                    >
                        {t('author')}
                    </Link>
                </div>
            </div>
            <p className='px-5 py-3 border-l-8 border-green-400 text-gl bg-green-600/50'>
                <b>{t('tips')}&nbsp;&nbsp; </b>{' '}
                <Link
                    href={t('/roadmap')}
                    className='hover-underline-animation text-text'
                >
                    {' '}
                    {t('roadmap')} &nbsp; &nbsp;
                </Link>
            </p>
            <NewestPost posts={posts} />
        </div>
    );
}

function NewestPost({ posts }: { posts: Post[] }) {
    const { t } = useTranslation();
    return (
        <div>
            <h3 className='mb-6 text-2xl font-bold'>{t('newestBlog')}</h3>
            <div className='flex flex-wrap justify-between gap-4'>
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className='transform hover:scale-105 duration-300 transition-all rounded-xl w-full custom-md-width bg-gray-600 p-1'
                    >
                        <div className='flex flex-col justify-between h-full p-4 rounded-lg bg-surface '>
                            <div className='flex flex-col justify-between md:flex-row'>
                                <h4 className='w-full mb-6 text-lg font-medium text-text md:text-lg sm:mb-10 '>
                                    {post.title}
                                </h4>
                            </div>
                            <div>
                                <div className='text-subtle'>
                                    <ViewCounter path={`/blog/${post.slug}`} />
                                </div>
                                <div>
                                    {moment(post.date)
                                        .locale(t('localeTime'))
                                        .format('LL')}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex'>
                <Link
                    href='/blog'
                    className='group mt-4 flex items-center gap-2 text-lg font-medium'
                >
                    {t('viewAll')}
                    <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-2' />
                </Link>
            </div>
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    const posts = allPosts
        .filter((post) => post.draft !== true && post.lang === locale)
        .map((post) => pick(post, ['slug', 'title', 'summary', 'date']))
        .sort((a, b) => moment(b.date).diff(moment(a.date)))
        .slice(0, 3);
    return {
        props: {
            posts,
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}
