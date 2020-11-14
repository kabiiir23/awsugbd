import React from 'react';
import { Link } from 'react-scroll';

import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import styles from './HorizontalScroll.module.scss';

// let data_Languages = [
//   'JAVASCRIPT',
//   'PYTHON',
//   'GOLANG',
//   'JAVA',
//   'REACT',
//   'ANGULAR',
//   'VUE.JS',
// ];

let data = ['>'.repeat(3)];

const HorizontalScroll = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const xRange = useTransform(scrollYProgress, [0, 1.5], [0, 450]);
  const xChange = useSpring(xRange, { stiffness: 600, damping: 100 });
  const shift = {
    translateX: xChange,
  };

  return (
    <Link
      to='userGroup'
      //spy={true}
      smooth={true}
      duration={500}
      offset={-165}
      className={styles.HorizontalScroll}
    >
      {data.map((item) => (
        <motion.span style={shift}>{item}</motion.span>
      ))}
    </Link>
  );
};
export default HorizontalScroll;
