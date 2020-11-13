import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Branding from './Components/Branding';
import Home from './Pages/Home';

import './App.scss';
import ACDBD2020 from './Pages/ACDBD2020';
import Footer from './Components/Footer';
import Events from './Pages/Events';
import Blog from './Pages/Blog';
import useWindowSize from './hooks/useWIndowsSize';
import HambugerMenu from './Components/HamburgerMenu';

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
  {
    id: 3,
    item: 'About Us',
    link: '/',
    hash: '#userGroup',
  },
];

function App() {
  return (
    <Router>
      <div className='App'>
        <Branding />
        <HambugerMenu items={NavbarItems} />
        <Navbar items={NavbarItems} />
        <Route
          exact
          path='/'
          render={(props) => (
            <>
              <Home />
            </>
          )}
        />
        <Route
          exact
          path='/acdbd2020'
          render={(props) => (
            <>
              <ACDBD2020 />
            </>
          )}
        />
        <Route
          exact
          path='/events'
          render={(props) => (
            <>
              <Events />
            </>
          )}
        />
        <Route
          exact
          path='/blog'
          render={(props) => (
            <>
              <Blog />
            </>
          )}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
