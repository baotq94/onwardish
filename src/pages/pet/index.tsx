import moment from 'moment';
import { allProjects, Project } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import ListProjectLayout from 'src/layouts/ListProjectLayout';
import { NextSeo } from 'next-seo';

export default function ProjectPage({ projects }: { projects: Project[] }) {
  return (
    <>
      <NextSeo title='Pet' description='tất cả dự án' />
      <ListProjectLayout projects={projects} name='Pet' />
    </>
  );
}

export async function getStaticProps() {
  const projects = allProjects
    .filter((project) => project.draft !== true)
    .map((pet) => pick(pet, ['slug', 'title', 'summary', 'date', 'tags']))
    .sort((a, b) => moment(b.date).diff(moment(a.date)));

  return { props: { projects } };
}
