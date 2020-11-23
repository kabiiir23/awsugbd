import Branding from '../components/Branding';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import HamburgerMenu from '../components/HamburgerMenu';
const NavbarItems = [
  {
    id: 1,
    item: 'Events',
    link: '/Events',
    hash: '',
  },
  {
    id: 2,
    item: 'Blog',
    link: '/Blog',
    hash: '',
  },
];
const MainLayout = ({ children }) => {
  return (
    <>
      <Branding />
      <HamburgerMenu items={NavbarItems} />
      <Navbar items={NavbarItems} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
