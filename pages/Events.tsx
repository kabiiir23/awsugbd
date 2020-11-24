import React from 'react';

import EventCard from '../components/EventCard';
import style from './Events.module.scss';

export default function Events(props) {
  return (
    <div className={style.Events}>
      <h1>Upcoming Events</h1>
      <div className={style.Events__Upcoming}>
        <p>There are no upcoming events.</p>
      </div>
      <h1>Previous Events</h1>
      <div className={style.Events__Previous}>
        <EventCard
          title='AWS Community Day Bangladesh'
          date='31 October 2020'
          venue='Virtual Event'
          description='The first ever AWS Community Day help in Bangladesh organized by Amazon User group Bangladesh.'
          image='comday.png'
        />
        <EventCard
          title='AWS User Group Bangladesh September Meetup'
          date='26 September 2020'
          venue='Virtual Event'
          description='September installment of the Monthly AWS User Group Meetup.'
          image='Sept2020.jpg'
          active={false}
        />
      </div>
    </div>
  );
}
