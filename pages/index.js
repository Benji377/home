import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Post from '../components/post';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home location="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.maxwidth}`}>
        <p>Hi, I'm Benji, a curious developer learning Next.JS</p>
        <p>
          (This is my personal blog, you can learn more about me and my story on the {' '}
          <Link href="./about">About page</Link>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.maxwidth}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, short, date, rtime }) => (
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