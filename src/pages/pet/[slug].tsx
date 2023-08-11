import { allProjects, Project } from 'contentlayer/generated';
import siteMetadata from 'data/siteMetadata';
import { useMDXComponent } from 'next-contentlayer/hooks';
import moment from 'moment';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';
import { pick } from 'contentlayer/utils';
import ProjectLayout from 'src/layouts/ProjectLayout';
import components from '../../components/MDXComponents';

export default function ProjectPage({ project }: { project: Project }) {
  const Component = useMDXComponent(project.body.code);
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

export async function getStaticPaths() {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const project = allProjects.find((project) => project.slug === params.slug);
  return { props: { project } };
}
