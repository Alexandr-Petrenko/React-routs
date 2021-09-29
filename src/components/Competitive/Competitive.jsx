import React from 'react';
import './_Competitive.scss';
import {Info} from "../Info";

const titleContent = 'The Competition';
const subTextContent = [
  {id: 0, title: 'Product Manager', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 1, title: '$200k+ Income', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 2, title: 'Decision Maker', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 3, title: 'Metro Area', paragraph: 'List an appealing fact about your target customer here.',},
];

const Competitive = () => (
  <section className='competitive logo'>
    <Info
      tittleContent={ titleContent }
      content={ subTextContent }
      className='competitive__info'
      titleClass='competitive__title'
      subTitleClass='competitive__sub-title'
      subParagraphClass='competitive__sub-paragraph'
    />
  </section>
);

export { Competitive };