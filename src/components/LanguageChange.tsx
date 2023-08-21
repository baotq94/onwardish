import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function LanguageChange() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex items-center justify-center'>
      <button
        aria-label='Switch language'
        type='button'
        onClick={openModal}
        className='flex flex-col items-center justify-center w-10 h-10 ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-md sm:p-4 text-text hover:bg-overlay focus:outline-none'
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <IoLanguage />
          </motion.div>
        </AnimatePresence>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 flex items-center justify-center overflow-y-auto'
          onClose={closeModal}
        >
          <div
            className='fixed inset-0 bg-black opacity-30'
            onClick={closeModal}
          />

          <Transition.Child
            as={Fragment}
            enter='transition ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='dialog-box rounded-lg p-4 shadow-xl'>
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
                  <Link
                    href='/'
                    locale='vi'
                    onClick={closeModal}
                    className='inline-block w-3/4 py-2 px-4 m-3 rounded border border-gray-400 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800 hover:bg-overlay'
                  >
                    {t('VN')}
                  </Link>
                </div>

                <div className='flex-1'>
                  <Link
                    href='/'
                    locale='ja'
                    onClick={closeModal}
                    className='inline-block w-3/4 py-2 px-4 m-3 rounded border border-gray-400 bg-opacity-0 text-600 hover:border-opacity-60 hover:border-gray-800 hover:text-800 hover:bg-overlay'
                  >
                    {t('JP')}
                  </Link>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
