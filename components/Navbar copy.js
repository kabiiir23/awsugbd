import React, { useState, useEffect } from 'react';
import { RiHome6Line as HomeIcon } from 'react-icons/ri';
import { NavHashLink } from 'react-router-hash-link';
import cx from 'classnames';
import style from './Navbar.module.scss';
import NavSearchbox from './NavSearchbox';

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
          show: true,
        };
      });

    return setState((previousState) => {
      return {
        ...previousState,
        show: false,
      };
    });
  };

  return (
    <>
      <div className={`${style.Nav} ${state.show && style.Nav__scroll}`}>
        <NavHashLink
          smooth
          to={{
            pathname: `/`,
            hash: `#main`,
            state: { fromDashboard: true },
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
        <NavSearchbox changeOnScroll={state.show} />
      </div>
    </>
  );
};

export default NavBar;
