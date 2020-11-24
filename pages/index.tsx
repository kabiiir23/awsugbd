import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

import TopicCard from '../components/TopicCard';
import HorizontalScroll from '../components/HorizontalScroll';
import ImageSlider from '../components/ImageSlider';
import TeamMember from '../components/TeamMember';
import CustomThumbnail from '../components/CustomThumbnail';
import RandomQuote from '../components/RandomQuote';

import {
  CgAttribution as Connect,
  CgAwards as Learn,
  CgArrowsShrinkH as Grow,
  CgFacebook as FacebookIcon,
} from 'react-icons/cg';
import {
  FaLinkedinIn as LinkedinIcon,
  FaYoutube as YoutubeIcon,
} from 'react-icons/fa';

import style from './Home.module.scss';

gsap.registerPlugin(ScrollTrigger);

const quoteAPI = 'https://type.fit/api/quotes';

export const getStaticProps = async (context) => {
  //@ts-ignore
  const fs = require('fs');
  const folder = './assets/images';
  const images = fs.readdirSync(folder);

  const res = await fetch(quoteAPI);
  const data = await res.json();
  const n = Math.floor(Math.random() * (data.length - 1));
  const quote = data[n].text;
  const author = data[n].author;

  return {
    props: {
      imageNames: images,
      quotes: {
        quote: quote,
        author: author,
      },
    },
  };
};
export default function Home(props) {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  useEffect(() => {
    gsap.from([revealRefs.current], 0.8, {
      delay: 0.8,
      ease: 'circ.out',
      y: 64,
      opacity: 0,
      stagger: {
        amount: 0.15,
      },
    });
    return () => {};
  }, [revealRefs]);

  const addtoRef = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scrollRefs = useRef([]);
  scrollRefs.current = [];
  const addtoScrollRef = (el) => {
    if (el && !scrollRefs.current.includes(el)) {
      scrollRefs.current.push(el);
    }
  };

  const bottomTextRef = useRef(null);

  useEffect(() => {
    gsap.to([scrollRefs.current], 0.8, {
      scrollTrigger: {
        //@ts-ignore
        trigger: scrollRefs.current,
        start: 'top 70%',
        scrub: true,
      },
      y: '-20vh',
      opacity: 1,
      ease: 'back.out',
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from(bottomTextRef.current, 0.5, {
      scrollTrigger: {
        trigger: bottomTextRef.current,
        scrub: true,
        start: 'top 100%',
        //end: 'bottom bottom-=250',
      },
      //ease: 'power3.in',
      //opacity: 0,
      y: '-100px',
      duration: 0.5,
    });
  });

  return (
    <main className={style.home}>
      <section className={style.heroSection} id='main'>
        <div className={style.heroSection__sideText}>
          <p ref={addtoRef}>
            THE <br />
            FIRST EVER <br />
            <b>
              <i> AWS COMMUNITY DAY</i>
            </b>
            <br />
            IN BANGLADESH
          </p>

          <div ref={addtoRef} className={style.heroSection__sideText__social}>
            <a
              className={style.heroSection__sideText__social__icon}
              href='https://www.facebook.com/AWSUGBD'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FacebookIcon />
              </span>
            </a>
            <a
              className={style.heroSection__sideText__social__icon}
              href='https://www.linkedin.com/showcase/amazon-web-services-aws-bangladesh/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <LinkedinIcon />
              </span>
            </a>
            <a
              className={style.heroSection__sideText__social__icon}
              href='https://www.youtube.com/watch?v=poRJTphpTiQ&list=PLRshKEiuRVLtykE0sYcJk-QeSUKgQbHqC'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <YoutubeIcon
                  style={{ paddingTop: '5px', paddingLeft: '5px' }}
                />
              </span>
            </a>
          </div>
        </div>

        <div className={style.heroSection__sideImage}>
          <iframe
            ref={addtoRef}
            width='560'
            height='315'
            src='https://www.youtube.com/embed/poRJTphpTiQ?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
          <img
            ref={addtoRef}
            src='/assets/AWS SIDE IMAGE 1.svg'
            alt='AWS Community Day'
          />
        </div>
        <div className={style.heroSection__scroller}>
          <HorizontalScroll />
        </div>
      </section>
      <CustomThumbnail />
      <section className={style.userGroup} id='userGroup'>
        <div
          className={style.userGroup__story}
          style={{ opacity: 0.8 }}
          ref={addtoScrollRef}
        >
          <h1>AWS User Group Bangladesh</h1>
          <p>
            AWS User Group Bangladesh is to extend the professional network of
            Amazon Web Services (AWS) professionals in order to share and create
            knowledge and mutual benefit. This is the only Amazon approved AWS
            user group in Bangladesh. Also we'd like to help people out with
            their queries about cloud platform for their practical uses. We are
            mainly focusing on Amazon Web Services for now. With time, there
            might be other cloud platforms to discuss, explore and experience.
            But for now we are here with a view to help cloud service seekers to
            find a common platform much more convenient than the conventional
            manner.
          </p>
        </div>
        <div className={style.userGroup__carousel} ref={addtoScrollRef}>
          <ImageSlider images={props.imageNames} />

          <div className={style.teamMembers}>
            <h1>Team Members</h1>
            <TeamMember
              avatar='Tisha.jpg'
              name='Farzana Afrin Tisha'
              details='AWS Community Leader, Bangladesh \n Director, Women in Big Data Bangladesh'
              facebook='https://www.facebook.com/tishafarzanaafrin5.6'
              linkedin='https://www.linkedin.com/in/farzana-afrin-tisha/'
            />
            <TeamMember
              avatar='Protik.jpg'
              name='Shamiul Haque Protik'
              details='AWS Community Manager, Bangladesh'
              facebook='https://www.facebook.com/kabiiir23/'
              linkedin='https://www.linkedin.com/in/farzana-afrin-tisha/'
            />
            <TeamMember
              avatar='Kabir.jpg'
              name='Solaiman Kabir Showrav'
              details='AWS Community Organizer, Bangladesh \n Freelance Web Developer'
              facebook='https://www.facebook.com/protik1993'
              linkedin='https://www.linkedin.com/in/farzana-afrin-tisha/'
            />
          </div>
          <div
            className={style.userGroup__carousel__sideText}
            ref={bottomTextRef}
          >
            <p>
              <b>36+ &nbsp;</b>
              <i>Meetups</i> |<b>2700+ &nbsp;</b>
              <i>Members</i> <br />
            </p>
            <p>
              AWS <i>Experts</i> | Industry <i>Leaders</i> | Cloud
              <i>Enthusiasts</i>
              <br />
            </p>
            <a
              className={style.userGroup__carousel__sideText__link}
              href='https://www.facebook.com/AWSUGBD'
              target='_blank'
              rel='noopener noreferrer'
            >
              <hr />
              <span>
                <FacebookIcon />
              </span>
            </a>
            <a
              className={style.userGroup__carousel__sideText__link}
              href='https://www.linkedin.com/showcase/amazon-web-services-aws-bangladesh/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <LinkedinIcon />
              </span>
            </a>
            <a
              className={style.userGroup__carousel__sideText__link}
              href='https://www.linkedin.com/showcase/amazon-web-services-aws-bangladesh/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <YoutubeIcon
                  style={{ paddingTop: '5px', paddingLeft: '5px' }}
                />
              </span>
            </a>
          </div>
          <div className={style.userGroup__tagLines}>
            <TopicCard icon={<Connect />} text='Connect' />
            <TopicCard icon={<Learn />} text='Learn' />
            <TopicCard icon={<Grow />} text='Grow' />
          </div>
          <RandomQuote data={props.quotes} />
        </div>
      </section>
    </main>
  );
}
