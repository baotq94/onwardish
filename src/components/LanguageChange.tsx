import { motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Transition,
} from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { contentManifest } from 'src/generated/content-manifest';

const supportedLocales = ['vi', 'ja'] as const;
type SupportedLocale = (typeof supportedLocales)[number];

type Manifest = {
    posts: Partial<Record<SupportedLocale, string[]>>;
    pages: Partial<Record<SupportedLocale, string[]>>;
    tags: Partial<Record<SupportedLocale, string[]>>;
};

const manifest = contentManifest as Manifest;

const normalizeLocale = (value: string): SupportedLocale => {
    const short = value.split('-')[0];
    return short === 'ja' ? 'ja' : 'vi';
};

type LanguageChangeProps = {
    isHovered?: boolean;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
};

export default function LanguageChange({
    isHovered,
    onHoverStart,
    onHoverEnd,
}: LanguageChangeProps) {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLocale, setHoveredLocale] = useState<string | null>(null);
    const currentLocale = normalizeLocale(
        router.locale ?? i18n.language ?? 'vi',
    );

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const changeLocale = async (locale: SupportedLocale) => {
        if (locale === currentLocale) {
            closeModal();
            return;
        }
        const slugParam = router.query.slug;
        const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;
        const listFor = (key: keyof Manifest, lang: SupportedLocale) =>
            manifest[key]?.[lang] ?? [];
        const hasSlug = (key: 'posts' | 'pages', value?: string) =>
            !!value && listFor(key, locale).includes(value);
        const hasTag = (value?: string) =>
            !!value && listFor('tags', locale).includes(value);

        let targetPathname = router.pathname;

        if (router.pathname === '/blog/[slug]' && !hasSlug('posts', slug)) {
            targetPathname = '/';
        } else if (router.pathname === '/[slug]' && !hasSlug('pages', slug)) {
            targetPathname = '/';
        } else if (router.pathname === '/tag/[slug]' && !hasTag(slug)) {
            targetPathname = '/';
        }

        await router.push(
            {
                pathname: targetPathname,
                query: targetPathname === '/' ? {} : router.query,
            },
            undefined,
            { locale },
        );
        closeModal();
    };

    const activeLocale = hoveredLocale ?? currentLocale;
    const optionClass = (locale: string) =>
        `inline-block w-5/6 py-2 px-2 m-3 rounded border transition ${
            activeLocale === locale
                ? 'border-iris bg-overlay text-text'
                : 'border-muted text-subtle hover:border-iris hover:text-text hover:bg-overlay'
        }`;

    return (
        <div className='flex items-center justify-center'>
            <button
                aria-label='Switch language'
                type='button'
                onClick={openModal}
                onPointerEnter={onHoverStart}
                onPointerLeave={onHoverEnd}
                className='relative flex items-center justify-center ml-1 p-1 md:p-4 rounded-md text-text outline-none'
            >
                {isHovered ? (
                    <motion.span
                        layoutId='nav-hover'
                        className='absolute inset-0 z-0 w-full h-full rounded-md bg-overlay pointer-events-none'
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 40,
                        }}
                    />
                ) : null}
                <span className='relative z-10'>
                    <IoLanguage />
                </span>
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as='div'
                    className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto'
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='transition ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <DialogBackdrop className='fixed inset-0 bg-black/30' />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter='transition ease-out duration-300'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='transition ease-in duration-200'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                    >
                        <DialogPanel className='dialog-box rounded-lg p-4 shadow-xl relative z-10'>
                            <div className='w-full flex justify-between items-center pb-4 border-b'>
                                <h3 className='text-lg font-medium leading-6'>
                                    {t('language')}
                                </h3>
                                <button
                                    className='focus:outline-none'
                                    aria-label='close'
                                    onClick={closeModal}
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        aria-hidden='true'
                                        className='w-6 h-6 text-gray-600 hover:opacity-80'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                                            clipRule='evenodd'
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div
                                className='flex justify-center text-center pt-4 pb-2'
                                style={{ minWidth: '300px' }}
                            >
                                <div className='flex-1'>
                                    <button
                                        type='button'
                                        onClick={() => changeLocale('vi')}
                                        onPointerEnter={() =>
                                            setHoveredLocale('vi')
                                        }
                                        onPointerLeave={() =>
                                            setHoveredLocale(null)
                                        }
                                        className={optionClass('vi')}
                                    >
                                        {t('vn')}
                                    </button>
                                </div>

                                <div className='flex-1'>
                                    <button
                                        type='button'
                                        onClick={() => changeLocale('ja')}
                                        onPointerEnter={() =>
                                            setHoveredLocale('ja')
                                        }
                                        onPointerLeave={() =>
                                            setHoveredLocale(null)
                                        }
                                        className={optionClass('ja')}
                                    >
                                        {t('jp')}
                                    </button>
                                </div>
                            </div>
                        </DialogPanel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </div>
    );
}
