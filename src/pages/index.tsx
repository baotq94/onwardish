import classNames from 'classnames';
import { allPosts, Post, allProjects, Project } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import moment from 'moment';
import { timeLocale } from 'src/lib/timeLocale';
import Link from 'next/link';
import ViewCounter from 'src/components/ViewCounter';
import getIconByName from 'src/lib/get-icon-by-name';
import { IconArrowRight } from '@tabler/icons-react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home({
  posts,
  projects,
}: {
  posts: Post[];
  projects: Project[];
}) {
  const { t } = useTranslation();
  const time = timeLocale(t('localeTime'));
  moment.updateLocale(t('localeTime'), time);

  return (
    <div className='space-y-10'>
      <div className='border-b-[1px] pb-5 border-muted'>
        <h1 className='text-3xl font-bold tracking-wide md:text-4xl text-text sm:leading-10 md:leading-14'>
          {t('h1')}
        </h1>
        <div className='mt-3 font-mono md:text-lg text-subtle'>
          <Link
            href={t('/about')}
            className='hover-underline-animation text-rose'
          >
            {t('author')}
          </Link>
        </div>
      </div>
      <p className='px-5 py-3 border-l-8 border-green-400 text-gl bg-green-600/50'>
        <b>{t('tips')}&nbsp;&nbsp; </b>{' '}
        <Link
          href={t('/roadmap')}
          className='hover-underline-animation text-rose'
        >
          {' '}
          {t('Roadmap')} &nbsp; &nbsp;
        </Link>
        <span className='mx-auto whitespace-nowrap'>☆(❁´◡`❁)☆</span>
      </p>
      <NewestPost posts={posts} />
      <NewestProject projects={projects} />
    </div>
  );
}

function NewestPost({ posts }: { posts: Post[] }) {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className='mb-6 text-2xl font-bold'>{t('newestblog')}</h3>
      <div className='flex flex-wrap justify-between'>
        {posts.map((post, i) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={classNames(
              'transform hover:scale-105 duration-300 transition-all rounded-xl w-full custom-md-width bg-gradient-to-r p-1 mb-5',
              {
                'from-[#D8B4FE] to-[#818CF8]': i == 0,
                'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]': i == 1,
                'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]': i == 2,
                'from-[#F472B6] via-[#DB2777] to-[#B91C1C]': i == 3,
                'from-[#FBBF24] via-[#F59E0B] to-[#B45309]': i == 4,
                'from-[#34D399] via-[#10B981] to-[#059669]': i == 5,
              }
            )}
          >
            <div className='flex flex-col justify-between h-full p-4 rounded-lg bg-surface '>
              <div className='flex flex-col justify-between md:flex-row'>
                <h4 className='w-full mb-6 text-lg font-medium text-text md:text-lg sm:mb-10 '>
                  {post.title}
                </h4>
              </div>
              <div>
                <div className='text-subtle'>
                  <ViewCounter slug={post.slug} />
                </div>
                <div>
                  {moment(post.date).locale(t('localeTime')).format('LL')}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href='/blog'
        className='flex items-center mt-5 transition-all hover:text-text text-subtle'
      >
        {t('viewAll')}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-5 h-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </Link>
    </div>
  );
}

function NewestProject({ projects }: { projects: Project[] }) {
  const { t } = useTranslation('common');
  return (
    <div className='my-16 flex flex-col'>
      <h2 className='mb-8 text-3xl font-bold'>{t('newestproject')}</h2>
      <div className='flex flex-col gap-8'>
        {projects.map((project) => {
          const Icon = getIconByName(project.icon);
          return (
            <Link
              key={project.slug}
              href={`/pet/${project.slug}`}
              className='flex w-full flex-1 items-center justify-start rounded-lg border border-gray-600 p-4 transition-colors duration-150 hover:border-accent-fg sm:px-6'
            >
              <Icon />
              <div className='px-4'>
                <div>{project.title}</div>
                <p className='text-subtle'>{project.summary}</p>
                <div className='text-subtle'>
                  <ViewCounter slug={project.slug} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className='flex'>
        <Link
          href='/pet'
          className='group my-8 flex items-center gap-4 text-lg font-medium'
        >
          {t('viewAll')}
          <IconArrowRight className='h-4 w-4 transition duration-200 group-hover:translate-x-1' />
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
  const projects = allProjects
    .filter((project) => project.draft !== true && project.lang === locale)
    .map((project) =>
      pick(project, ['slug', 'title', 'summary', 'date', 'icon'])
    )
    .sort((a, b) => moment(b.date).diff(moment(a.date)))
    .slice(0, 2);
  return {
    props: {
      posts,
      projects,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
