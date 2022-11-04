import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Project from '../components/Project';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

export default function Projects({ allProjectsData }) {
    return (
        <Layout location="projects">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>Public Github projects</h2>
                <ul className={utilStyles.plist}>
                    {allProjectsData.map(({ id, title, content, link, language, status, startdate, enddate }) => (
                        <li key={id}>
                            <Project
                                id={id}
                                title={title}
                                content={content}
                                link={link}
                                language={language}
                                status={status}
                                startdate={startdate}
                                enddate={enddate}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}