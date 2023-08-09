import classNames from 'classnames';
import { allPosts, Post } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import moment from 'moment';
import viLocale from 'src/lib/vilocale';
import Link from 'next/link';
import GoodRead from 'src/components/Goodread';
import TopTrackSpotify from 'src/components/TopTrackSpotify';
import ViewCounter from 'src/components/ViewCounter';
import useSWR from 'swr';

export default function Home({ posts }: { posts: Post[] }) {
  // Set the custom Vietnamese locale
  moment.updateLocale('vi', viLocale);

  return (
    <div className='space-y-10'>
      <div className='border-b-[1px] pb-5 border-muted'>
        <h1 className='text-3xl font-bold tracking-wide md:text-4xl text-text sm:leading-10 md:leading-14'>
          blog chia sẻ về công việc và cuộc sống ở Nhật Bản
        </h1>
        <div className='mt-3 font-mono md:text-lg text-subtle'>
          <Link href='/about' className='hover-underline-animation text-rose'>
            Một chút về bản thân mình
          </Link>
        </div>
      </div>
      <p className='px-5 py-3 border-l-8 border-green-400 text-gl bg-green-600/50'>
        <b>Tips chuyển việc trái ngành sang IT:&nbsp;&nbsp; </b>{' '}
        <Link href='/roadmap' className='hover-underline-animation text-rose'>
          {' '}
          Roadmap &nbsp; &nbsp;
        </Link>
        <span className='mx-auto whitespace-nowrap'>☆(❁´◡`❁)☆</span>
      </p>
      <NewestPost posts={posts} />
      <GoodRead />
      <TopTrackSpotify />
    </div>
  );
}

function NewestPost({ posts }: { posts: Post[] }) {
  return (
    <div>
      <h3 className='mb-6 text-2xl font-bold'>Bài viết mới nhất</h3>
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
                <div>{moment(post.date).locale('vi').format('LL')}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href='/blog'
        className='flex items-center mt-5 transition-all hover:text-text text-subtle'
      >
        Xem tất cả
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

export async function getStaticProps() {
  const posts = allPosts
    .filter((post) => post.draft !== true)
    .map((post) => pick(post, ['slug', 'title', 'summary', 'date']))
    .sort((a, b) => moment(b.date).diff(moment(a.date)))
    .slice(0, 6);
  return { props: { posts } };
}
