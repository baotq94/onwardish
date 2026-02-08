export type ReadingTime = {
    text: string;
    minutes: number;
    time: number;
    words: number;
};

export type Body = {
    raw: string;
};

export type Post = {
    title: string;
    date: string;
    summary: string;
    lang: string;
    image?: string;
    draft?: boolean;
    tags: string[];
    slug: string;
    body: Body;
    readingTime: ReadingTime;
};

export type Project = {
    title: string;
    icon: string;
    date: string;
    summary: string;
    lang: string;
    image?: string;
    draft?: boolean;
    tags: string[];
    slug: string;
    body: Body;
    readingTime: ReadingTime;
};

export type Page = {
    title: string;
    description: string;
    lang: string;
    slug: string;
    body: Body;
    readingTime: ReadingTime;
};
