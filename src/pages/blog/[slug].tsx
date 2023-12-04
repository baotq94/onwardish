import { allPosts, Post } from 'contentlayer/generated';
import siteMetadata from 'data/siteMetadata';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NewsArticleJsonLd, NextSeo } from 'next-seo';
import PostLayout from 'src/layouts/PostLayout';
import components from '../../components/MDXComponents';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { InferGetServerSidePropsType } from 'next';

export default function BlogDetailPage({
    post,
}: {
    post: Post;
    locale: InferGetServerSidePropsType<typeof getStaticProps>;
}) {
    const Component = useMDXComponent(post.body.code);
    return (
        <PostLayout post={post}>
            <SEO post={post} />
            <Component
                components={{
                    ...components,
                }}
            />
        </PostLayout>
    );
}

function SEO({ post }: { post: Post }) {
    const image_url = `${siteMetadata.siteUrl}/${post.image}`;
    return (
        <>
            <NextSeo
                title={post.title}
                description={post.summary}
                openGraph={{
                    type: 'article',
                    images: post.image
                        ? [
                              {
                                  url: image_url,
                              },
                          ]
                        : [],
                    article: {
                        publishedTime: post.date,
                        tags: post.tags,
                        section: post.tags[0],
                    },
                }}
            />
            <NewsArticleJsonLd
                url={`${siteMetadata.siteUrl}/blog/${post.slug}`}
                title={post.title}
                images={post.image ? [image_url] : []}
                section={post.tags[0]}
                keywords={post.tags.join(',')}
                authorName={siteMetadata.author}
                description={post.summary}
                body={post.body.raw.slice(0, 200)}
                datePublished={post.date}
                dateCreated={post.date}
                publisherName={siteMetadata.author}
                publisherLogo={siteMetadata.siteUrl + siteMetadata.siteLogo}
            />
        </>
    );
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
    const paths: any = [];
    allPosts.map((p) => {
        return locales.map((locale) => {
            paths.push({ params: { slug: p.slug }, locale });
        });
    });

    return {
        paths,
        fallback: false, // blocking, true, false
    };
}

export async function getStaticProps({
    params,
    locale,
}: {
    params: { slug: string };
    locale: string;
}) {
    const post = allPosts.find((post) => post.slug === params.slug);

    return {
        props: {
            post,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
            locale,
        },
    };
}
