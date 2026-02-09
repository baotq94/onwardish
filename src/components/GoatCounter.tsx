import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const GOATCOUNTER_URL = process.env.NEXT_PUBLIC_GOATCOUNTER_URL || '';
const GOATCOUNTER_ALLOW_LOCAL =
    process.env.NEXT_PUBLIC_GOATCOUNTER_ALLOW_LOCAL === 'true';

function normalizeBaseUrl(url: string) {
    return url.trim().replace(/\/+$/, '');
}

function normalizePath(path: string) {
    const withoutHash = path.split('#')[0];
    const withoutQuery = withoutHash.split('?')[0];
    if (!withoutQuery) return '/';
    return withoutQuery.startsWith('/') ? withoutQuery : `/${withoutQuery}`;
}

function stripTrailingSlash(path: string) {
    if (path === '/') return path;
    return path.replace(/\/+$/, '');
}

function stripLocalePrefix(path: string, locales: readonly string[] = []) {
    for (const locale of locales) {
        const prefix = `/${locale}`;
        if (path === prefix) return '/';
        if (path.startsWith(`${prefix}/`)) {
            return path.slice(prefix.length) || '/';
        }
    }
    return path;
}

function isCountablePath(path: string) {
    const trimmed = stripTrailingSlash(path);
    return (
        trimmed.startsWith('/blog/')
    );
}

function countWithRetry(path: string) {
    const tryCount = () => {
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({ path });
            return true;
        }
        return false;
    };

    if (tryCount()) return;

    const startedAt = Date.now();
    const timer = window.setInterval(() => {
        if (tryCount() || Date.now() - startedAt > 2000) {
            window.clearInterval(timer);
        }
    }, 100);
}

export default function GoatCounter() {
    const router = useRouter();
    const baseUrl = normalizeBaseUrl(GOATCOUNTER_URL);

    useEffect(() => {
        if (!baseUrl) return;

        const handleRouteChange = (url: string) => {
            const normalized = normalizePath(url);
            const checkPath = stripLocalePrefix(normalized, router.locales || []);
            if (!isCountablePath(checkPath)) return;
            countWithRetry(normalized);
        };

        handleRouteChange(router.asPath);
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router, baseUrl]);

    if (!baseUrl) return null;

    const extraAttrs = GOATCOUNTER_ALLOW_LOCAL
        ? { 'data-goatcounter-settings': '{"allow_local": true}' }
        : {};

    return (
        <>
            <Script id='goatcounter-init' strategy='beforeInteractive'>
                {`window.goatcounter = window.goatcounter || {}; window.goatcounter.no_onload = true;`}
            </Script>
            <Script
                data-goatcounter={`${baseUrl}/count`}
                {...extraAttrs}
                src='https://gc.zgo.at/count.js'
                strategy='afterInteractive'
            />
        </>
    );
}
