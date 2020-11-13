import React, { useEffect } from 'react';
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import styles from './HorizontalScroll.module.scss';

const VerticalScroll2 = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const xRange = useTransform(scrollYProgress, [0, 0.7], [-650, 0]);
  const xChange = useSpring(xRange, { stiffness: 900, damping: 300 });
  const shift = {
    translateX: xChange,
  };
  useEffect(() => {
    //OnMount
    console.log('VerticalScroll Rendered');
    return () => {
      //CleanUp
      console.log('VerticalScroll Unmounted');
    };
  }, []);

  return (
    <div className={styles.HorizontalScroll}>
      <motion.span style={shift}>PYTHON</motion.span>
      <motion.span style={shift}>JAVASCRIPT</motion.span>
      <motion.span style={shift}>REACT</motion.span>
      <motion.span style={shift}>VUE.JS</motion.span>
      <motion.span style={shift}>ANGULAR</motion.span>
      <motion.span style={shift}>JAVA</motion.span>
      <motion.span style={shift}>GOLANG</motion.span>
    </div>
  );
};
export default VerticalScroll2;
