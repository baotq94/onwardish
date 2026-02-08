import { allPosts, allProjects } from 'src/lib/content';
import type { Post, Project } from 'src/lib/content-types';
import { pick } from 'src/lib/pick';
import moment from 'moment';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import React from 'react';
import ListTagLayout from 'src/layouts/ListTagLayout';
import { allTags } from 'src/lib/tags';

type Path = {
    params: {
        slug: string;
    };
    locale: string;
};

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
    const projects = allProjects
        .filter(
            (project) =>
                project.draft !== true &&
                project.lang === locale &&
                project.tags.includes(slug),
        )
        .map((pet) => pick(pet, ['slug', 'title', 'summary', 'date', 'tags']))
        .sort((a, b) => moment(b.date).diff(moment(a.date)));
    const postnprojects = [...posts, ...projects];
    return {
        props: {
            postnprojects,
            tagName: slug,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
        },
    };
}
