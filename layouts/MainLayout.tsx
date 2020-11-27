import Head from 'next/head';
import Branding from '../components/Branding';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';

const NavbarItems = [
  {
    id: 1,
    item: 'Events',
    link: '/events',
    hash: '',
  },
  {
    id: 2,
    item: 'Blog',
    link: '/blog',
    hash: '',
  },
];
const MainLayout = ({ children, pageTitle, description }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta property='og:title' content={pageTitle} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{pageTitle}</title>
      </Head>
      <Branding />
      <HamburgerMenu items={NavbarItems} />
      <Navbar items={NavbarItems} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
