import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './EventCard.module.scss';

export default function EventCard({
  title,
  date,
  venue,
  description,
  image,
  active,
}) {
  return (
    <div className={style.Event}>
      <div
        className={style.Event__ImageContainer}
        style={{
          backgroundImage: `url(../assets/events/${image})`,
        }}
      ></div>
      <div className={style.Event__Details}>
        <h2>{title}</h2>
        <p className={style.Event__Details__date}>DATE: {date}</p>
        <p className={style.Event__Details__date}>VENUE: {venue}</p>
        <p className={style.Event__Details__description}>{description}</p>
      </div>
      <button
        className={cx(style.Event__Button, {
          [style.Event__Button__active]: active,
        })}
      >
        Register
      </button>
    </div>
  );
}
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  active: PropTypes.bool,
};
