import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CgMenuLeft, CgClose } from 'react-icons/cg';

import gsap from 'gsap';

import style from './HamburgerMenu.module.scss';

export default function HamburgerMenu({ items }) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) document.querySelector('body').classList.add('noscroll');
    return () => {
      document.querySelector('body').classList.remove('noscroll');
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
            <Link href={items.link} key={items.id}>
              <a
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
