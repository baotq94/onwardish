import giscusConfig from './giscusConfig.json';

const siteMetadata = {
    title: 'Onwardish',
    author: 'miles',
    SEO_author: {
        first_name: 'miles',
        last_name: 'tran',
        username: 'miles',
        gender: 'male',
    },
    headerTitle: 'Onwardish',
    description: 'onwardish',
    siteUrl: 'https://onwardish.com',
    siteRepo: 'https://github.com/backluejapanit',
    siteLogo: '/static/images/logo.png',
    image: '/static/images/avatar.png',
    socialBanner: '/static/images/socialbg.jpg',

    email: 'tranquocbao031094@gmail.com',
    linkedin: 'https://www.linkedin.com/in/backlueinJP/',

    comment: {
        giscusConfig,
    },
};

export default siteMetadata;
