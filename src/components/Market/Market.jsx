import React from 'react';
import './_Market.scss';
import { Info } from '../Info';

const titleContent = 'Marketing strategy';
const subTextContent = [
  {id: 0, title: 'Advertising', paragraph: 'Reach COOs quickly',},
  {id: 1, title: 'Organic search', paragraph: 'With a focus on long-tail keywords',},
  {id: 2, title: 'Content marketing', paragraph: 'Providing useful, niche content',},
];

const Market = () => (
  <section className='market logo'>
    <Info
      tittleContent={ titleContent }
      content={ subTextContent }
      className='market__info'
      titleClass='market__title'
      subTitleClass='market__sub-title'
      subParagraphClass='market__sub-paragraph'
      containerClass='market__text'
    />
  </section>
);

export { Market };
