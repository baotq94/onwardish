import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function ViewCounter({
    slug,
    path,
    update: _update = false,
}: {
    slug?: string;
    path?: string;
    update?: boolean;
}) {
    const router = useRouter();
    const { t } = useTranslation();

    const baseUrl = (process.env.NEXT_PUBLIC_GOATCOUNTER_URL || '').replace(
        /\/+$/,
        '',
    );

    const ensureLeadingSlash = (value: string) =>
        value.startsWith('/') ? value : `/${value}`;

    const stripQueryAndHash = (value: string) =>
        value.split('#')[0].split('?')[0];

    const normalizePath = (value: string) => {
        const cleaned = stripQueryAndHash(value);
        return ensureLeadingSlash(cleaned || '/');
    };

    const withLocale = (value: string) => {
        const normalized = normalizePath(value);
        const locale = router.locale;
        const defaultLocale = router.defaultLocale;

        if (!locale || !defaultLocale || locale === defaultLocale) {
            return normalized;
        }

        if (
            normalized === `/${locale}` ||
            normalized.startsWith(`/${locale}/`)
        ) {
            return normalized;
        }

        if (
            normalized === `/${defaultLocale}` ||
            normalized.startsWith(`/${defaultLocale}/`)
        ) {
            return normalized;
        }

        return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`;
    };

    const rawPath = path ?? slug ?? router.asPath ?? '/';
    const resolvedPath = withLocale(rawPath);

    const countUrl = baseUrl
        ? `${baseUrl}/counter/${encodeURIComponent(resolvedPath)}.json`
        : null;

    const { data } = useSWR<{ count?: string }>(
        countUrl,
        async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) return { count: undefined };
            return res.json();
        },
    );

    return (
        <span>
            {data?.count ?? t('noView')} {t('view')}
        </span>
    );
}
