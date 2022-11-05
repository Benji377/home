import '../styles/global.css';
import Navbar from '../components/navbar';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
    <Analytics />
  </>
}