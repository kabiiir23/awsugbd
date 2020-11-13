import React, { useEffect, useState } from 'react';

import { CgMenuLeft, CgClose } from 'react-icons/cg';
import { NavHashLink } from 'react-router-hash-link';

import style from './HamburgerMenu.module.scss';

export default function HamburgerMenu({ items }) {
  const [clicked, setClicked] = useState(false);
  //   useEffect(() => {
  //     if (clicked) showMenu();
  //   }, [clicked]);
  //   const showMenu = () => {
  //     console.log('Menu Clicked');
  //   };
  return (
    <div className={style.HamburgerMenu}>
      <div
        className={style.HamburgerMenu__icon}
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {clicked ? <CgClose /> : <CgMenuLeft />}
      </div>
      {clicked ? (
        <div className={style.HamburgerMenu__linkContainer}>
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
            >
              {items.item}
            </NavHashLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}
