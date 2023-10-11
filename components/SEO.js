// components/SEO.js
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

export default function SEO({ title, description }) {
  return (
    <>
      <Head>
        <title>hello</title>
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        // Add other SEO-related configuration here if needed
      />
    </>
  );
}