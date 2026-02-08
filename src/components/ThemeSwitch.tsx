import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill } from 'react-icons/bs';

type ThemeSwitchProps = {
    isHovered?: boolean;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
};

export default function ThemeSwitch({
    isHovered,
    onHoverStart,
    onHoverEnd,
}: ThemeSwitchProps) {
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
                onPointerEnter={onHoverStart}
                onPointerLeave={onHoverEnd}
                className='relative flex items-center justify-center ml-1 p-1 md:p-4 rounded-md text-text focus:outline-none'
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
                    <BsFillMoonStarsFill />
                </span>
            </button>
        </div>
    );
}
