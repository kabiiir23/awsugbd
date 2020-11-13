import React from 'react';
import { Link } from 'react-router-dom';

import { ImFacebook } from 'react-icons/im';

import styles from './FbInfo.module.scss';

const FbInfo = (props) => {
  return (
    <div className={styles.info}>
      <Link className={styles.info__link} to='/faq'>
        <span>PAGE</span>
        <div className={styles.info__link__logo}>
          <ImFacebook />
        </div>
      </Link>
      <Link className={styles.info__link} to='/manual'>
        <span>GROUP</span>
        <div className={styles.info__link__logo}>
          <ImFacebook />
        </div>
      </Link>
    </div>
  );
};

export default FbInfo;
