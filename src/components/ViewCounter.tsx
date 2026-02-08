import { useTranslation } from 'next-i18next';

export default function ViewCounter({
    slug,
    update = false,
}: {
    slug: string;
    update?: boolean;
}) {
    const { t } = useTranslation();

    return (
        <span>
            {t('noView')} {t('view')}
        </span>
    );
}
