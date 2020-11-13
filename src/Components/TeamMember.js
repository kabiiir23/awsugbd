import React from 'react';

import { CgFacebook as FacebookIcon } from 'react-icons/cg';
import { FaLinkedinIn as LinkedinIcon } from 'react-icons/fa';
import style from './TeamMember.module.scss';

export default function ({ avatar, name, details, facebook, linkedin }) {
  return (
    <div className={style.Container}>
      <div
        className={style.avatar}
        style={{
          backgroundImage: `url(${require(`../assets/team/${avatar}`)})`,
        }}
      ></div>
      <div className={style.textContainer}>
        <p className={style.name}>{name}</p>
        {details.split('\\n').map((i) => (
          <p className={style.details}>{i}</p>
        ))}
        <div className={style.social}>
          {facebook ? (
            <a
              className={style.social__icon}
              href={facebook}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <FacebookIcon />
              </span>
            </a>
          ) : null}
          {linkedin ? (
            <a
              className={style.social__icon}
              href={linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <span>
                <LinkedinIcon />
              </span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
