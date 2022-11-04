import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

// Blog author name
const name = 'Benjamin';
// Title of the website
export const siteTitle = 'Benjis Blog';

/*
 * Defines a layout that each page can use. This means that anything in here will
 * be shown on all pages. In this case we especially included the head of the website
 */
export default function Layout({ children, home, location }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {getImage(location)}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}

/*
 * A function that determines which image should be loaded on the top of the page
 * The decision depends on what page we are on, each page has its own image/logo
 */
export function getImage(location) {
  switch (location) {
    case 'home': return <><Image priority src="/images/profile_page.png" height={144} width={144} alt="" /><h1 className={[utilStyles.heading2Xl, styles.nameColor].join(" ")}>{name}</h1></>;
    case 'projects': return <Image priority src="/images/projects_page.png" height={108} width={108} alt="" />;
    case 'skills': return <Image priority src="/images/skills_page.png" height={108} width={108} alt="" />;
    case 'about': return <Image priority src="/images/about_page.png" height={108} width={108} alt="" />;
    case 'contact': return <Image priority src="/images/contact_page.png" height={108} width={108} alt="" />;
    default: return <><Image priority src="/images/profile_page.png" height={144} width={144} alt="" /><h1 className={[utilStyles.heading2Xl, styles.nameColor].join(" ")}>{name}</h1></>;
  }
}