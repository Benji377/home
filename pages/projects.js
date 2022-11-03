import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedProjectsData } from '../lib/projects';
import Link from 'next/link';
import Date from '../components/date';

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
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>Public Github projects</h2>
                <ul className={utilStyles.plist}>
                    {allProjectsData.map(({ id, title, content, link, language, status, startdate, enddate }) => (
                        <li key={id}>
                                <section>
                                    <section class="body-font text-gray-600">
                                        <div class="container mx-auto px-5 py-24">
                                            <div class="mx-auto mb-10 flex flex-col items-center rounded-lg border-b border-gray-200 bg-white p-5 sm:flex-row">
                                                <div class="inline-flex h-20 w-20 flex-shrink-0 items-center justify-center sm:mr-10 sm:h-32 sm:w-32">
                                                    <img src="/images/block.png" />
                                                </div>
                                                <div class="mt-6 flex-grow text-center sm:mt-0 sm:text-left">
                                                    <h1 class="title-font mb-2 text-2xl font-bold text-black">{title}</h1>
                                                    <p class="text-base leading-relaxed">{content}</p>
                                                    <div class="font-bold text-gray-800 md:flex">
                                                        <div class="flex w-full space-x-3 md:w-1/2">
                                                            <div class="w-1/2">
                                                                <h2 class="text-gray-500">Start</h2>
                                                                <p><Date dateString={startdate} /></p>
                                                            </div>
                                                            <div class="w-1/2">
                                                                <h2 class="text-gray-500">End</h2>
                                                                <p><Date dateString={enddate} /></p>
                                                            </div>
                                                        </div>
                                                        <div class="flex w-full space-x-3 md:w-1/2">
                                                            <div class="w-1/2">
                                                                <h2 class="text-gray-500">Language</h2>
                                                                <p>{language}</p>
                                                            </div>
                                                            <div class="w-1/2">
                                                                <h2 class="text-gray-500">Status</h2>
                                                                <p>{status}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link href={link} class="mt-3 inline-flex items-center text-indigo-500">
                                                    Learn More
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="ml-2 h-4 w-4" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}