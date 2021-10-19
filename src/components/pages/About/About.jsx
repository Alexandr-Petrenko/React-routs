import classNames from 'classnames';
import SectionPicture from '../../shared/SectionPicture';
import Title from '../../shared/Title';
import Paragraph from '../../shared/Paragraph';
import Links from '../../shared/Links';
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

const About = () => {
  const {
    about,
    aboutSectionPicture,
    aboutSectionMain,
    aboutTitle,
    aboutParagraph,
    aboutSocialLink,
  } = styles;

  return (
    <section className={classNames(about, 'section-with-picture')}>
      <SectionPicture className={aboutSectionPicture} />
      <div className={aboutSectionMain}>
        <Title content={title} className={aboutTitle} />
        <Paragraph content={paragraph} className={aboutParagraph} />
        <Links
          content={SOCIAL_LINKS}
          classForChild={aboutSocialLink}
          className="about__links"
        />
      </div>
    </section>
  );
};

export default About;
