import { allPages, pageComponents } from 'src/lib/content';
import type { Page } from 'src/lib/content-types';
import components from 'src/components/MDXComponents';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Pages({ page }: { page: Page }) {
    const Component = pageComponents[`${page.lang}/${page.slug}`];
    if (!Component) {
        return null;
    }

    return (
        <article>
            <NextSeo title={page.title} description={page.description} />
            <h1 className='mb-4 text-3xl font-bold tracking-tight uppercase md:text-5xl text-text'>
                {page.title}
            </h1>
            <p className='mt-2 mb-8 text-subtle'>{page.description}</p>
            <div className='mt-8 prose max-w-none'>
                <Component components={components as any} />
            </div>
        </article>
    );
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
    const paths: any = [];
    allPages.map((p) => {
        return locales
            .filter((locale) => locale === p.lang)
            .map((locale) => {
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
    const page = allPages.find(
        (page) => page.slug === params.slug && page.lang === locale,
    );
    if (!page) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            page,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
            locale,
        },
    };
}
