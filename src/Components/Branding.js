import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LeftStyle } from '../assets/Left Pattern.svg';
import { ReactComponent as RightStyle } from '../assets/Right Pattern.svg';
import logoXL from '../assets/AWSUGBD XL - dark.svg';
import logoM from '../assets/AWSUGBD M.svg';
import styles from './Branding.module.scss';
import gsap from 'gsap/gsap-core';

const Branding = (props) => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    gsap.from([revealRefs.current], 0.8, {
      delay: 0.5,
      ease: 'power3.out',
      y: 20,
      opacity: 0,
    });
    return () => {};
  }, [revealRefs]);

  const addtoRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  return (
    <div className={styles.BrandingContainer}>
      <div className={styles.brand}>
        <div className={styles.leftStyle}>
          <LeftStyle />
        </div>
        <Link ref={addtoRef} to='/' className={styles.brandlogo}>
          <img className={styles.brandlogoXL} src={logoXL} alt='' />
          <img className={styles.brandlogoM} src={logoM} alt='' />
        </Link>

        <div className={styles.rightStyle}>
          <RightStyle />
        </div>
      </div>
    </div>
  );
};
export default Branding;
