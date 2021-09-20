import React from "react";
import {SectionPicture} from "../SectionPicture";
import {Title} from "../Title";
import {Paragraph} from "../Paragraph";
import {Links} from "../Links";
import './About.scss';

export const About = () => {
  const [title, setTitle] = React.useState('Company Name');
  const [paragraph, setParagraph] = React.useState(
    `Intriguing summary goes here. Keep it short & sweet. 
    Describe the problem you are solving. Focus on the pain point.`
  );
  const [links, setLinks] = React.useState(
    [
      {id: 0, linkSrc: '/icons/chain.svg', linkContent: 'website.com', linkHref: '#',},
      {id: 1, linkSrc: '/icons/twitter.svg', linkContent: '@companyhandle', linkHref: '#',},
      {id: 2, linkSrc: '/icons/facebook.svg', linkContent: '@handle', linkHref: '#',},
    ]
  );

  return (
    <section className='about'>
      <SectionPicture className='about__section-picture'/>
      <div className="about__section-main logo">
        <Title content={ title } className='about__title'/>
        <Paragraph content={ paragraph } className='about__paragraph'/>
        <Links
          content={ links }
          classForChild='about__social-link'
          className='about__links'
        />
      </div>
    </section>
  );
};
