import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
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
    <Layout location="blog">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centeredItems}>
        <h2 className={utilStyles.headingLg}>All Articles</h2>
        <ul className="lg:w-4/5">
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