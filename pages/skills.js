import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Skill from '../components/skill';

export default function Skills() {
    return (
        <Layout location="skills">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>My Skillset</h2>
                    <Skill
                        title="Web programming"
                        short="A bit of all web related"
                        progress="60"
                    />
            </section>
        </Layout>
    );
}