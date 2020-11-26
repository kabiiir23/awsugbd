import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//@ts-ignore
import LeftStyle from '../assets/Left Pattern.svg';
//@ts-ignore
import RightStyle from '../assets/Right Pattern.svg';
// import logoXL from '../assets/AWSUGBD XL - dark.svg';
// import logoM from '../assets/AWSUGBD M.svg';
import styles from './Branding.module.scss';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const Branding = (props) => {
  // const revealRefs = useRef([]);
  // //revealRefs.current = [];
  // useEffect(() => {
  //   gsap.from([revealRefs.current], 0.8, {
  //     delay: 0.5,
  //     ease: 'power3.out',
  //     y: 20,
  //     opacity: 0,
  //   });
  //   return () => {};
  // }, [revealRefs]);

  // const addtoRef = (el) => {
  //   if (el && !revealRefs.current.includes(el)) {
  //     revealRefs.current.push(el);
  //   }
  // };
  return (
    <div className={styles.BrandingContainer}>
      <div className={styles.brand}>
        <div
          className={styles.leftStyle}
          // src='/assets/Left Pattern.svg'
        >
          <LeftStyle />
        </div>
        <Link href='/'>
          <motion.a
            //ref={addtoRef}
            className={styles.brandlogo}
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                opacity: 0,
                y: 64,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delayChildren: 0.15,
                },
              },
            }}
          >
            <img
              className={styles.brandlogoXL}
              src='/assets/AWSUGBD XL - dark.svg'
              alt=''
            />
            <img
              className={styles.brandlogoM}
              src='/assets/AWSUGBD M.svg'
              alt=''
            />
          </motion.a>
        </Link>

        <div
          className={styles.rightStyle}
          //  src='/assets/Right Pattern.svg'
        >
          <RightStyle />
        </div>
      </div>
    </div>
  );
};
export default Branding;
