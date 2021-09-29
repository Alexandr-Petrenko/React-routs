import React from 'react';
import './_Difference.scss';
import { Title } from '../Title';
import { Benefit } from "../Benefit";

const benefitContent = [
  {id: 0, subTitle: 'Proven team', subParagraph: 'Founding team with multiple exits.', url: '/icons/users.png',},
  {id: 1, subTitle: 'Market traction', subParagraph: 'Profitable, growing  userbase.', url: '/icons/barchart.png'},
  {id: 2, subTitle: 'Unique tech', subParagraph: 'Innovative technology.', url: '/icons/code.png'}
];

const Difference = () => (
  <section className='difference logo'>
    <Title content='What makes us different?' className='difference__title' />
    <div className='difference__wrapper'>
      { benefitContent.map(item => {
        const { id, subTitle, subParagraph, url } = item;

        return (
          <Benefit
            src={ url }
            subParagraph={ subParagraph }
            subTitle={ subTitle }
            imgClassName='difference__img'
            subTitleClass='difference__sub-title'
            subParagraphClass='difference__sub-paragraph'
            key={ id }
          />
        );
      })}
    </div>
  </section>
);

export { Difference };