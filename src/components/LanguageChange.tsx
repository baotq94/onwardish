import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { Dialog, Transition } from '@headlessui/react';

export default function LanguageChange() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    closeModal();
  };

  return (
    <div className='flex items-center justify-center'>
      <button
        aria-label='Switch language'
        type='button'
        onClick={openModal}
        className='flex flex-col items-center justify-center w-10 h-10 ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-md sm:p-4 text-text hover:bg-overlay'
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
              <div className='space-y-2'>
                <button
                  className='dialog-box-option hover:bg-orange-400 py-2 px-4 rounded w-full transition duration-200 ease-in-out'
                  onClick={() => handleOptionClick('option1')}
                >
                  Tiếng Việt
                </button>
                <button
                  className='dialog-box-option hover:bg-orange-400 py-2 px-4 rounded w-full transition duration-200 ease-in-out'
                  onClick={() => handleOptionClick('option2')}
                >
                  日本語
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}
