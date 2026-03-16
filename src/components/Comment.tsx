import siteMetadata from 'data/siteMetadata';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

const COMMENTS_ID = 'comments-container';
const GISCUS_HOST = 'https://giscus.app';
const GISCUS_SCRIPT_SRC = `${GISCUS_HOST}/client.js`;

function getGiscusTheme(theme?: string) {
    if (theme === 'theme-second') return 'light';
    if (theme === 'theme-first') return 'dark';
    return 'preferred_color_scheme';
}

export default function Comment({ term }: { term: string }) {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const {
        repo,
        repositoryId,
        category,
        categoryId,
        mapping,
        strict,
        reactions,
        metadata,
        inputPosition,
        lang,
    } = siteMetadata?.comment?.giscusConfig || {};
    const sectionRef = useRef<HTMLDivElement>(null);
    const loadedTermRef = useRef<string | null>(null);
    const [shouldLoadComments, setShouldLoadComments] = useState(false);
    const giscusTheme = getGiscusTheme(theme);

    useEffect(() => {
        if (shouldLoadComments) return;

        const section = sectionRef.current;
        if (!section || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return;
                setShouldLoadComments(true);
                observer.disconnect();
            },
            { rootMargin: '320px 0px' },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, [shouldLoadComments]);

    useEffect(() => {
        if (!shouldLoadComments) return;

        const script = document.createElement('script');
        const comments = document.getElementById(COMMENTS_ID);
        if (!comments) return;

        if (
            !repo ||
            !repositoryId ||
            !category ||
            !categoryId ||
            !mapping ||
            !strict ||
            !term
        ) {
            return;
        }

        const hasMountedWidget =
            comments.querySelector('iframe.giscus-frame') ||
            comments.querySelector(`script[src="${GISCUS_SCRIPT_SRC}"]`);

        if (hasMountedWidget && loadedTermRef.current === term) {
            return;
        }

        comments.innerHTML = '';

        script.src = GISCUS_SCRIPT_SRC;
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repositoryId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-term', term);
        script.setAttribute('data-strict', strict);
        script.setAttribute('data-reactions-enabled', reactions);
        script.setAttribute('data-emit-metadata', metadata);
        script.setAttribute('data-input-position', inputPosition);
        script.setAttribute('data-lang', lang);
        script.setAttribute('data-theme', giscusTheme);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;

        comments.appendChild(script);
        loadedTermRef.current = term;
    }, [
        category,
        categoryId,
        giscusTheme,
        inputPosition,
        lang,
        mapping,
        metadata,
        reactions,
        repo,
        repositoryId,
        shouldLoadComments,
        strict,
        term,
    ]);

    useEffect(() => {
        if (!shouldLoadComments) return;

        const iframe = document.querySelector<HTMLIFrameElement>(
            `#${COMMENTS_ID} iframe.giscus-frame`,
        );

        iframe?.contentWindow?.postMessage(
            {
                giscus: {
                    setConfig: {
                        theme: giscusTheme,
                    },
                },
            },
            GISCUS_HOST,
        );
    }, [giscusTheme, shouldLoadComments]);

    return (
        <div className='scroll-mt-24' id='comment' ref={sectionRef}>
            <div className='flex items-center justify-between gap-4 mb-4'>
                <h2 className='text-2xl font-bold text-rose'>{t('comment')}</h2>
                {!shouldLoadComments && (
                    <button
                        type='button'
                        onClick={() => setShouldLoadComments(true)}
                        className='px-4 py-2 text-base font-semibold transition-colors rounded-full bg-iris text-[rgb(var(--color-base))] hover:bg-foam'
                    >
                        {t('loadComments')}
                    </button>
                )}
            </div>
            {!shouldLoadComments && (
                <div className='p-5 border rounded-2xl border-muted/30 bg-overlay/60'>
                    <p className='max-w-2xl text-sm leading-6 text-subtle'>
                        {t('commentNotice')}
                    </p>
                </div>
            )}
            <div
                className={shouldLoadComments ? 'giscus' : 'giscus hidden'}
                id={COMMENTS_ID}
            ></div>
        </div>
    );
}
