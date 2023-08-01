import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function onThemeChange() {
    setTheme(theme === 'theme-second' ? 'theme-first' : 'theme-second');
  }
  return (
    <div className='flex items-center justify-center'>
      <button
        aria-label='Switch theme'
        type='button'
        onClick={onThemeChange}
        className='flex flex-col items-center justify-center w-10 h-10 ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-md sm:p-4 text-text hover:bg-overlay'
      >
        <AnimatePresence>
          {theme === 'theme-first' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              key='theme1'
            >
              <BsFillMoonStarsFill />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              key='theme2'
            >
              <BsFillSunFill />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
