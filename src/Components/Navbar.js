import React, { useState, useEffect } from 'react';
import { RiHome6Line as HomeIcon } from 'react-icons/ri';
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import cx from 'classnames';
import style from './Navbar.module.scss';

const NavBar = ({ items }) => {
  const [state, setState] = useState(() => {
    return {
      show: false,
    };
  });

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY > 180)
      return setState((previousState) => {
        return {
          ...previousState,
          show: false,
        };
      });

    return setState((previousState) => {
      return {
        ...previousState,
        show: false,
      };
    });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -150;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <>
      <div className={`${style.Nav} ${state.show && style.Nav__scroll}`}>
        <NavHashLink
          smooth
          to={{
            pathname: `/`,
          }}
          className={`${style.Nav__icon} ${
            state.show && style.Nav__item__scroll
          }`}
        >
          <HomeIcon className={style.logo} />
        </NavHashLink>
        {items.map((items) => (
          <NavHashLink
            to={{
              pathname: `${items.link}`,
              hash: `${items.hash}`,
              state: { fromDashboard: false },
            }}
            smooth
            key={items.id}
            className={`${style.Nav__item} ${
              state.show && style.Nav__item__scroll
            }`}
          >
            {items.item}
          </NavHashLink>
        ))}
        <NavHashLink
          smooth
          to={{
            pathname: `/`,
            hash: 'userGroup',
          }}
          scroll={(el) => {
            scrollWithOffset(el);
          }}
          className={`${style.Nav__item} ${
            state.show && style.Nav__item__scroll
          }`}
        >
          About Us
        </NavHashLink>
        {/* <Link
          to='userGroup'
          //spy={true}
          smooth={true}
          duration={500}
          offset={-165}
          className={`${style.Nav__item} ${
            state.show && style.Nav__item__scroll
          }`}
        >
          About Us
        </Link> */}
      </div>
    </>
  );
};

export default NavBar;
