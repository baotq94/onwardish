import { allProjects, projectComponents } from 'src/lib/content';
import type { Project } from 'src/lib/content-types';
import siteMetadata from 'data/siteMetadata';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';
import ProjectLayout from 'src/layouts/ProjectLayout';
import components from '../../components/MDXComponents';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ProjectPage({ project }: { project: Project }) {
    const Component = projectComponents[`${project.lang}/${project.slug}`];
    if (!Component) {
        return null;
    }
    return (
        <ProjectLayout project={project}>
            <SEO project={project} />
            <Component
                components={{
                    ...components,
                }}
            />
        </ProjectLayout>
    );
}

function SEO({ project }: { project: Project }) {
    const image_url = `${siteMetadata.siteUrl}/${project.image}`;
    return (
        <>
            <NextSeo
                title={project.title}
                description={project.summary}
                openGraph={{
                    type: 'article',
                    images: project.image
                        ? [
                              {
                                  url: image_url,
                              },
                          ]
                        : [],
                    article: {
                        publishedTime: project.date,
                        tags: project.tags,
                        section: project.tags[0],
                    },
                }}
            />
            <NewsArticleJsonLd
                url={`${siteMetadata.siteUrl}/pet/${project.slug}`}
                title={project.title}
                images={project.image ? [image_url] : []}
                section={project.tags[0]}
                keywords={project.tags.join(',')}
                authorName={siteMetadata.author}
                description={project.summary}
                body={project.body.raw.slice(0, 200)}
                datePublished={project.date}
                dateCreated={project.date}
                publisherName={siteMetadata.author}
                publisherLogo={siteMetadata.siteUrl + siteMetadata.siteLogo}
            />
        </>
    );
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
    return {
        paths: allProjects.flatMap((p) =>
            locales
                .filter((locale) => locale === p.lang)
                .map((locale) => ({
                    params: { slug: p.slug },
                    locale: locale,
                })),
        ),
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
    const project = allProjects.find(
        (project) => project.slug === params.slug && project.lang === locale,
    );
    if (!project) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            project,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
        },
    };
}
