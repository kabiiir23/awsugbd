import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './CustomThumbnail.module.scss';
import logo from '../assets/AWSUGBD M light.svg';
import { MdPlayCircleFilled as PlayIcon } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function () {
  const [clicked, setClicked] = useState(false);

  const containerRef = useRef(null);
  const thumbRef = useRef(null);

  const initScrollAnimations = useCallback(() => {
    const animationObj = {
      duration: 0.8,
      y: '7vw',
    };
    gsap.to(thumbRef.current, {
      scrollTrigger: {
        trigger: thumbRef.current,
        start: 'center 100%',
        scrub: true,
      },
      backgroundPositionY: '5vh',
      ...animationObj,
    });
  });

  useEffect(() => {
    initScrollAnimations();
  }, [initScrollAnimations]);

  return (
    <div
      className={style.comdayStream}
      ref={containerRef}
      style={{
        backgroundImage: `url(${require('../assets/bg-1.png')})`,
      }}
    >
      <div className={style.comdayStream__thumbnail} ref={thumbRef}>
        <PlayIcon
          onClick={() => {
            setClicked(!clicked);
          }}
          style={clicked ? { display: 'none' } : null}
        />
        <img
          src={logo}
          className={style.logo}
          style={clicked ? { display: 'none' } : null}
        />
        <img
          className={style.thumb}
          style={clicked ? { display: 'none', PointerEvent: 'none' } : null}
          src={require('../assets/videothumb.png')}
          alt=''
        />
        {clicked ? (
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/poRJTphpTiQ?rel=0?autoplay=1&mute=0&start=2'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        ) : null}
      </div>
    </div>
  );
}
