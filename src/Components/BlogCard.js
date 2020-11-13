import React from 'react';

import style from './BlogCard.module.scss';
export default function BlogCard({
  thumbnail,
  link,
  title,
  author,
  description,
  date,
}) {
  return (
    <a
      className={style.BlogCard}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className={style.BlogCard__thumbnail}>
        {/* <div className={style.BlogCard__thumbnail__img}></div> */}
        <img src={thumbnail} alt='Thumbnail' />
      </div>
      <div className={style.BlogCard__textContainer}>
        <p className={style.BlogCard__textContainer__title}>{title}</p>
        <p className={style.BlogCard__textContainer__author}>{author}</p>
        <p className={style.BlogCard__textContainer__description}>
          {description}
        </p>
        {/* dangerouslySetInnerHTML={{ __html: description }} */}
        <div className={style.BlogCard__textContainer__date}>{date}</div>
      </div>
    </a>
  );
}
