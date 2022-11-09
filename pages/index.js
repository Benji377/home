import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getLatestPostsData } from '../lib/posts';
import Link from 'next/link';
import Post from '../components/post';

export async function getStaticProps() {
  const latestPostsData = getLatestPostsData();
  return {
    props: {
      latestPostsData
    },
  };
}

export default function Home({ latestPostsData }) {
  return (
    <Layout home location="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.maxwidth}`}>
        <p>Hi, I'm Benjamin and this is my website. The purpose of this website is to help me try out
          and learn <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.JS</a>, but also to represent myself.
          You can read about some of my work in the posts below!
        </p>
        <p>
          (This is my personal blog, you can learn more about me and my story on the {' '}
          <Link href="./about">About page</Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.maxwidth}`}>
        <h2 className={utilStyles.headingLg}>My latest posts</h2>
        <ul className={utilStyles.list}>
          {latestPostsData.map(({ id, title, short, date, rtime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Post 
                title={title}
                short={short}
                date={date}
                rtime={rtime}
                link={`/posts/${id}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}