import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { NavHashLink } from 'react-router-hash-link';

import { gsap } from 'gsap';

import style from './HamburgerMenu.module.scss';

export default function HamburgerMenu({ items }) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) document.querySelector('body').style.overflowY = 'hidden';
    return () => {
      document.querySelector('body').style.overflowY = 'auto';
    };
  }, [clicked]);

  return (
    <div className={style.HamburgerMenu}>
      <div
        className={style.HamburgerMenu__icon}
        onClick={() => {
          setClicked((state) => !state);
        }}
      >
        {clicked ? <CgClose /> : <CgMenuLeft />}
      </div>
      {clicked ? (
        <div
          className={style.HamburgerMenu__linkContainer}
          style={clicked ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
          {items.map((items) => (
            <NavHashLink
              to={{
                pathname: `${items.link}`,
                hash: `${items.hash}`,
                state: { fromDashboard: false },
              }}
              smooth
              key={items.id}
              className={style.HamburgerMenu__link}
              onClick={() => {
                setClicked((state) => !state);
              }}
            >
              {items.item}
            </NavHashLink>
          ))}
          <Link
            to='userGroup'
            //spy={true}
            smooth={true}
            duration={500}
            offset={-165}
            className={style.HamburgerMenu__link}
            onClick={() => {
              setClicked((state) => !state);
            }}
          >
            About Us
          </Link>
        </div>
      ) : null}
    </div>
  );
}
