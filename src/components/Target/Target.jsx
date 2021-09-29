import React from 'react';
import './_Target.scss';
import { SectionPicture } from "../SectionPicture";
import { SubTitle } from "../SubTitle";
import { Info } from "../Info";

const titleContent = 'Target Customer';
const subTitleContent = 'In this city alone, there are 1M product managers.';
const subTextContent = [
  {id: 0, title: 'Product Manager', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 1, title: '$200k+ Income', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 2, title: 'Decision Maker', paragraph: 'List an appealing fact about your target customer here.',},
  {id: 3, title: 'Metro Area', paragraph: 'List an appealing fact about your target customer here.',},
];

const Target = () => (
    <section className='target section-with-picture'>
      <SectionPicture className='target__section-picture' />
      <div className='target__section logo'>
        <Info
          content={ subTextContent }
          tittleContent={ titleContent }
          titleClass='target__title'
          subTitleClass='target__sub-title'
          subParagraphClass='target__sub-text'
        />
        <SubTitle content={ subTitleContent } />
      </div>
    </section>
);

export { Target };
