import { useEffect, useRef } from 'react';
import fetcher from 'src/lib/fetcher';
import { Views } from 'src/lib/types';
import useSWR from 'swr';
import { useTranslation } from 'next-i18next';

export default function ViewCounter({
  slug,
  update = false,
}: {
  slug: string;
  update?: boolean;
}) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = new Number(data?.total);
  const { t } = useTranslation();

  useEffect(() => {
    if (update)
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      });
  }, [slug, update]);

  return (
    <span>
      {views.valueOf() > 0 ? views.toLocaleString() : t('notviewyet')}{' '}
      {t('view')}
    </span>
  );
}
