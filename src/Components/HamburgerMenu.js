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

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

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
          <NavHashLink
            smooth
            to={{
              pathname: `/`,
              hash: 'userGroup',
            }}
            scroll={(el) => {
              scrollWithOffset(el);
            }}
            className={style.HamburgerMenu__link}
            onClick={() => {
              setClicked((state) => !state);
            }}
          >
            About Us
          </NavHashLink>
        </div>
      ) : null}
    </div>
  );
}
