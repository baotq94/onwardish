import moment from 'moment';
import { allProjects } from 'src/lib/content';
import type { Project } from 'src/lib/content-types';
import { pick } from 'src/lib/pick';
import ListProjectLayout from 'src/layouts/ListProjectLayout';
import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function ProjectPage({ projects }: { projects: Project[] }) {
    const { t } = useTranslation();

    return (
        <>
            <NextSeo title='Pet' description='allPets' />
            <ListProjectLayout projects={projects} name={t('pet')} />
        </>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    const projects = allProjects
        .filter((project) => project.draft !== true && project.lang === locale)
        .map((pet) => pick(pet, ['slug', 'title', 'summary', 'date', 'tags']))
        .sort((a, b) => moment(b.date).diff(moment(a.date)));

    return {
        props: {
            projects,
            ...(await serverSideTranslations(locale ?? 'vi', ['common'])),
        },
    };
}
