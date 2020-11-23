import React from 'react';

import style from './TopicCard.module.scss';

const TopicCard = (props) => {
  return (
    <div className={style.TopicCard}>
      <div className={style.TopicCard__icon}>{props.icon}</div>
      <span className={style.TopicCard__text}>{props.text}</span>
    </div>
  );
};
export default TopicCard;
