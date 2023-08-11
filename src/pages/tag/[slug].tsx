import { allPosts, Post, allProjects, Project } from 'contentlayer/generated';
import { pick } from 'contentlayer/utils';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import React from 'react';
import ListTagLayout from 'src/layouts/ListTagLayout';
import { allTags } from 'src/lib/tags';

export default function TagViewPage({
  postnprojects,
  tagName,
}: {
  postnprojects: Post[];
  tagName: string;
}) {
  return (
    <>
      <NextSeo
        title={tagName.toUpperCase()}
        description={`All the blog with ${tagName} tag`}
      />
      <ListTagLayout postnprojects={postnprojects} name={tagName} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: allTags().map((tag) => ({
      params: { slug: tag.name },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const posts = allPosts
    .filter((post) => post.draft !== true && post.tags.includes(slug))
    .map((blog) => pick(blog, ['slug', 'title', 'summary', 'date', 'tags']))
    .sort((a, b) => moment(b.date).diff(moment(a.date)));
  const projects = allProjects
    .filter((project) => project.draft !== true && project.tags.includes(slug))
    .map((pet) => pick(pet, ['slug', 'title', 'summary', 'date', 'tags']))
    .sort((a, b) => moment(b.date).diff(moment(a.date)));
  const postnprojects = [...posts, ...projects];
  return { props: { postnprojects, tagName: slug } };
}
