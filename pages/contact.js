import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects() {
    return (
        <Layout location="contact">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>Contact me</h2>
                <h1>COMING SOON</h1>
            </section>
        </Layout>
    );
}