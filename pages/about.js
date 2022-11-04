import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import TimeStep from '../components/TimeStep';
import utilStyles from '../styles/utils.module.css';
import { getSortedTimelineData } from '../lib/timeline';

export async function getStaticProps() {
    const allTimelineData = getSortedTimelineData();
    return {
        props: {
            allTimelineData,
        },
    };
}

export default function Projects({allTimelineData}) {
    return (
        <Layout location="about">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>About me</h2>
                <p>I'm a simple guy that likes complex things. Next.JS as an example</p>


                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-400">
                                <h3 className="text-3xl font-semibold">Timeline</h3>
                                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">Some important events</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                                {allTimelineData.map(({ title, date, content }) => (
                                    <TimeStep
                                        title={title}
                                        time={date}
                                        description={content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}