import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { RiHome6Line as HomeIcon } from 'react-icons/ri';
import { NavHashLink } from 'react-router-hash-link';
import cx from 'classnames';
import style from './Navbar.module.scss';

const NavBar = ({ items }) => {
  const [state, setState] = useState(() => {
    return {
      show: false,
    };
  });

  const searchRef = useRef('');

  // useEffect(() => {
  //   window.addEventListener('scroll', changeNavbarColor);

  //   return () => window.removeEventListener('scroll', changeNavbarColor);
  // }, []);

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

  const searchClickHandler = () => {};
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
            state.show && style.Nav__itemscroll
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
              state.show && style.Nav__itemscroll
            }`}
          >
            {items.item}
          </NavHashLink>
        ))}
        <div className={style.searchbox}>
          <input
            className={cx(style.searchbox__input, {
              [style.searchbox__input__scroll]: state.show,
            })}
            type='text'
            placeholder='Search'
          />
          <Link
            className={cx(style.Nav__icon__search, {
              [style.Nav__icon__search__scroll]: state.show,
            })}
            onClick={searchClickHandler}
            ref={searchRef}
          >
            <CgSearch />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
