import { Project } from 'contentlayer/generated';
import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import React, { useState } from 'react';
import Tag from 'src/components/Tag';
import ViewCounter from 'src/components/ViewCounter';
import viLocale from 'src/lib/vilocale';

export default function ListProjectLayout({
  projects,
  name,
}: {
  projects: Project[];
  name: string;
}) {
  const [search, setsearch] = useState('');
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );
  moment.updateLocale('vi', viLocale);

  return (
    <div>
      <div className='border-b-[1px] pb-8 mb-8 border-muted'>
        <div className='max-w-xl '>
          <h1 className='mb-4 text-3xl font-bold uppercase md:text-5xl text-text'>
            {name}
          </h1>

          <p className='mb-4 text-subtle'>
            Có {projects.length} bài viết liên quan đến chủ đề này
          </p>
          <div className='relative w-full'>
            <input
              aria-label='Search articles'
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              type='text'
              placeholder='Tìm kiếm'
              className='block w-full px-4 py-2 border rounded-md border-hightlight-med bg-surface focus:ring-rose focus:border-rose'
            />
            <svg
              className='absolute w-5 h-5 right-3 top-3 text-subtle'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <motion.ul layout='position' transition={{ duration: 0.5 }}>
        {filteredProjects.map((project) => (
          <motion.li layout='position' key={project.slug} className='py-4'>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline'>
              <dl>
                <dt className='sr-only'>Published on</dt>
                <dd className='font-medium leading-6 text-subtle'>
                  <time dateTime={project.date}>
                    {moment(project.date).locale('vi').format('LL')}
                  </time>
                </dd>
                <div className='font-medium leading-6 text-muted'>
                  <ViewCounter slug={project.slug} />
                </div>
              </dl>
              <div className='space-y-3 xl:col-span-3'>
                <div>
                  <h3 className='text-2xl font-bold leading-8'>
                    <Link
                      href={`/pet/${project.slug}`}
                      className='text-text'
                      legacyBehavior
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <div className='flex flex-wrap gap-3 mt-2 text-sm'>
                    {project.tags?.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
                <div className='prose text-subtle'>{project.summary}</div>
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
