import React, { useEffect, useState } from 'react';
//import { Link } from 'react-scroll';
import Link from 'next/link';
import { CgMenuLeft, CgClose } from 'react-icons/cg';
//import { NavHashLink } from 'react-router-hash-link';

import { gsap } from 'gsap';

import style from './HamburgerMenu.module.scss';

export default function HamburgerMenu({ items }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) document.querySelector('body').classList.add('noscroll');
    return () => {
      document.querySelector('body').classList.remove('noscroll');
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
            <Link href={items.link} key={items.id}>
              <a
                scroll={(el) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={style.HamburgerMenu__link}
                onClick={() => {
                  setClicked((state) => !state);
                }}
              >
                {items.item}
              </a>
            </Link>
          ))}

          <Link href='/#userGroup'>
            <a
              scroll={(el) => {
                scrollWithOffset(el);
              }}
              className={style.HamburgerMenu__link}
              onClick={() => {
                setClicked((state) => !state);
              }}
            >
              About Us
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
