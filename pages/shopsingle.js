import Head from 'next/head';

import Layout from '../components/Layout/Layout';
import PageTitle from '../components/ShopSingle/PageTitle/PageTitle';
import ShopSingleSection from '../components/ShopSingle/ShopSingleSection/ShopSingleSection';

export default function ShopSingle() {
  return (
    <>
      <Head>
        <title>IT Restaurant Shop</title>
        {/* <meta name='description' content='Generated by create next app' /> */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <PageTitle />
        <ShopSingleSection />
      </Layout>
    </>
  );
}
