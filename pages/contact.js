import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Social from '../components/social';


// Linkedin, Email, Twitter, Discord, Instagram, Reddit
export default function Projects() {
    return (
        <Layout location="contact">
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.centeredItems}>
                <h2 className={utilStyles.headingLg}>Contact me</h2>
                <div class="flex flex-col">
                    <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">

                        <Social
                            name="Linkedin"
                            link="https://www.linkedin.com/in/benjamin-demetz"
                            description="Everything work related"
                        />

                        <Social
                            name="Email"
                            link="mailto:demetzbenjamin@duck.com"
                            description="Personal email"
                        />

                        <Social
                            name="Twitter"
                            link="https://twitter.com/Benben377"
                            description="Bots and automation"
                        />

                        <Social
                            name="Discord"
                            link="http://discordapp.com/users/271323150208335872"
                            description="Gaming & Friends"
                        />

                        <Social
                            name="Instagram"
                            link="https://www.instagram.com/the.only_benji"
                            description="Landscapes and Relax"
                        />

                        <Social
                            name="Reddit"
                            link="https://www.reddit.com/user/Benben377"
                            description="Funny memes collection"
                        />

                        <Social
                            name="Github"
                            link="https://github.com/Benji377"
                            description="My projects collection"
                        />

                        <Social
                            name="BuyMeCoffee"
                            link="https://www.buymeacoffee.com/theonlybenji"
                            description="If you kindly want to donate"
                        />

                    </div>
                </div>
            </section>
        </Layout>
    );
}