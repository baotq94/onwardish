import siteMetadata from 'data/siteMetadata';
import { useTheme } from 'next-themes';
import { useCallback, useEffect } from 'react';

export default function Comment() {
    const { theme } = useTheme();

    const COMMENTS_ID = 'comments-container';

    const LoadComments = useCallback(() => {
        const {
            repo,
            repositoryId,
            category,
            categoryId,
            mapping,
            reactions,
            metadata,
            inputPosition,
            lang,
        } = siteMetadata?.comment?.giscusConfig || {}; // Fallback to an empty object
        const giscusTheme =
            theme === 'theme-second'
                ? 'light'
                : theme === 'theme-first'
                  ? 'dark'
                  : 'preferred_color_scheme';
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', repo);
        script.setAttribute('data-repo-id', repositoryId);
        script.setAttribute('data-category', category);
        script.setAttribute('data-category-id', categoryId);
        script.setAttribute('data-mapping', mapping);
        script.setAttribute('data-reactions-enabled', reactions);
        script.setAttribute('data-emit-metadata', metadata);
        script.setAttribute('data-input-position', inputPosition);
        script.setAttribute('data-lang', lang);
        script.setAttribute('data-theme', giscusTheme);
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        const comments = document.getElementById(COMMENTS_ID);
        if (comments) {
            comments.innerHTML = '';
            comments.appendChild(script);
        }

        return () => {
            const comments = document.getElementById(COMMENTS_ID);
            if (comments) comments.innerHTML = '';
        };
    }, [theme]);
    useEffect(() => {
        return LoadComments();
    }, [LoadComments]);

    return (
        <div id='comment'>
            <div className='giscus' id={COMMENTS_ID}></div>
        </div>
    );
}
