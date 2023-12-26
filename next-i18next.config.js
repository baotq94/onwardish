// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
    // https://www.i18next.com/overview/configuration-options#logging
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'vi',
        locales: ['vi', 'ja'],
        fallbackLng: 'vi',
        localeDetection: false,
    },
    /** To avoid issues when deploying to some paas (vercel...) */
    localePath: path.resolve('./public/locales'),
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};
