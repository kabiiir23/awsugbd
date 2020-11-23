import {
  GrGithub as GithubIcon,
  GrLinkedin as LinkedinIcon,
} from 'react-icons/gr';
import style from './Footer.module.scss';

const Footer = (props) => {
  return (
    <div className={style.Footer}>
      <span>Copyright &#169; 2020 All Rights Reserved</span>
      <div>
        <span>@kabiiir23 &nbsp; </span>
        <a
          className={style.social__icon}
          href='https://www.github.com/kabiiir23'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>
            <GithubIcon />
          </span>
        </a>
        <a
          className={style.social__icon}
          href='https://www.linkedin.com/in/solaiman-kabir/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span>
            <LinkedinIcon />
          </span>
        </a>
        <a href='https://github.com/kabiiir23'>
          <img src='/K.svg' alt='developed by Kabir' height='50px' />
        </a>
      </div>
    </div>
  );
};
export default Footer;
