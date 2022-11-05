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
                    title="Web development"
                    short="I created multiple websites using HTML, CSS, Javascript, PHP and more"
                    progress="80"
                />

                <Skill
                    title="App development"
                    short="I tried out some app development by creating my own Music player with Java and Android"
                    progress="30"
                />

                <Skill
                    title="Game development"
                    short="I created a couple of games especially using Godot, but nothing big or special"
                    progress="50"
                />

                <Skill
                    title="Software development"
                    short="I created multiple software for all kind of stuff, especially in Python and Java"
                    progress="70"
                />

                <Skill
                    title="Scripting and other stuff"
                    short="I made a lot of small handy scripts, especially in Python, C and C++"
                    progress="60"
                />
            </section>
        </Layout>
    );
}