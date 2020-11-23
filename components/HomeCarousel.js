import React, { useEffect } from 'react';

import { CgArrowLeftO as Left, CgArrowRightO as Right } from 'react-icons/cg';
import styles from './HomeCarousel.module.scss';

let folder = require.context('../assets/images', false, /\.webp$/);
let images = folder.keys().map((file) => file.match(/[^/]+$/)[0]);

const HomeCarousel = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftArrow}>
        <Left />
      </div>
      <div className={styles.Carousel}>
        {images.map((filename) => (
          <img
            className={styles.Carousel__image}
            src={require(`../assets/images/${filename}`)}
            alt='AWS User Group Bangladesh'
          />
        ))}
      </div>
      <div className={styles.RightArrow}>
        <Right />
      </div>
    </div>
  );
};
export default HomeCarousel;
