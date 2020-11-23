import React, { useEffect } from 'react';
//import Slider from 'react-slick';
import styles from './ImageSlider.module.scss';

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

// import { CgArrowLeftO as Left, CgArrowRightO as Right } from 'react-icons/cg';

const ImageSlider = ({ images }) => {
  return (
    <div className={styles.ImageSlider}>
      <Carousel autoPlay={5000} infinite animationSpeed={2000}>
        {images.map((filename, index) => (
          <img
            key={index}
            className={styles.Carousel__image}
            src={`/assets/images/${filename}`}
            alt='AWS User Group Bangladesh'
          />
        ))}
      </Carousel>
    </div>
  );
};
export default ImageSlider;
