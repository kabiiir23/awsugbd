import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import style from './NavSearchbox.module.scss';
import { CgSearch } from 'react-icons/cg';

const NavSearchbox = ({ changeOnScroll }) => {
  const searchRef = useRef(null);
  const searchClickHandler = () => {};

  return (
    <div className={style.searchbox}>
      <input
        className={cx(style.searchbox__input, {
          [style.searchbox__input__scroll]: changeOnScroll,
        })}
        type='text'
        placeholder='Search'
      />
      <Link
        className={cx(style.searchbox__icon, {
          [style.searchbox__icon__scroll]: changeOnScroll,
        })}
        onClick={searchClickHandler}
        ref={searchRef}
      >
        <CgSearch />
      </Link>
    </div>
  );
};
export default NavSearchbox;
