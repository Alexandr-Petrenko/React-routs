import classNames from 'classnames';
import { SectionPicture } from '../../shared/SectionPicture';
import { Title } from '../../shared/Title';
import { Paragraph } from '../../shared/Paragraph';
import { Links } from '../../shared/Links';
import './_About.scss';
import styles from './_About.module.scss';

const title = 'Company Name';
const paragraph = `Intriguing summary goes here. Keep it short & sweet. 
                     Describe the problem you are solving. Focus on the pain point.`;
const SOCIAL_LINKS = [
  {
    id: 0,
    linkSrc: '/icons/chain.svg',
    linkContent: 'website.com',
    linkHref: 'https://google.com',
  },
  {
    id: 1,
    linkSrc: '/icons/twitter.svg',
    linkContent: '@companyhandle',
    linkHref: 'https://twitter.com',
  },
  {
    id: 2,
    linkSrc: '/icons/facebook.svg',
    linkContent: '@handle',
    linkHref: 'https://facebook.com',
  },
];

const About = () => (
  <section className={classNames(styles.about, 'section-with-picture')}>
    <SectionPicture className="about__section-picture" />
    <div className="about__section-main logo">
      <Title content={title} className="about__title" />
      <Paragraph content={paragraph} className="about__paragraph" />
      <Links content={SOCIAL_LINKS} classForChild="about__social-link" className="about__links" />
    </div>
  </section>
);

export { About };
