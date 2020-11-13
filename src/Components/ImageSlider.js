import React, { useEffect } from 'react';
//import Slider from 'react-slick';
import styles from './ImageSlider.module.scss';

import Carousel from '@brainhubeu/react-carousel';

import '@brainhubeu/react-carousel/lib/style.css';

// import { CgArrowLeftO as Left, CgArrowRightO as Right } from 'react-icons/cg';

let folder = require.context(
  '../assets/images'
  //false, /\.webp$/
);
let images = folder.keys().map((file) => file.match(/[^/]+$/)[0]);

const ImageSlider = (props) => {
  useEffect(() => {
    //OnMount
    console.log('ImageSlider Rendered');
    return () => {
      //CleanUp
      console.log('ImageSlider Unmounted');
    };
  }, []);

  return (
    <div className={styles.ImageSlider}>
      <Carousel autoPlay={5000} infinite animationSpeed={2000}>
        {images.map((filename) => (
          <img
            className={styles.Carousel__image}
            src={require(`../assets/images/${filename}`)}
            alt='AWS User Group Bangladesh'
          />
        ))}
      </Carousel>
    </div>
  );
};
export default ImageSlider;
