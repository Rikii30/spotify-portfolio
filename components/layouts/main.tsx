import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from '../content/footer';
import Sidebar from '../content/sidebar';

const backgrounds = {
  purpleGradient: 'bg-gradient-to-b from-purple-dark via-black to-gray-500',
  gray: 'bg-gray-500',
};

const MainLayout = ({ pageTitle, pageBackground, children }: MainLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Rikshitha Ravikumar" />
        {/* <meta name="twitter:site" content="@sjkayle" />
        <meta name="twitter:creator" content="@sjkayle" /> */}
        <meta name="twitter:image" content="/assets/hero.png" />
        <meta property="og:site_name" content="Rikshitha Ravikumar's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/hero.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="mPXrxrXBeMDMAggEfyGlqJTEVtTa4zsXQYg-yDrcSi0" />
      </Head>
      <Sidebar />
      <main className={`${backgrounds[pageBackground]} md:pl-60 pb-24 min-h-screen`}>{children}</main>
      <Footer />
    </div>
  );
};

type MainLayoutProps = {
  children: ReactNode;
  pageTitle: string;
  pageBackground: 'purpleGradient' | 'gray';
};

export default MainLayout;