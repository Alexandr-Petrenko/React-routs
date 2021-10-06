import './_Competitive.scss';
import { Info } from '../../shared/Info';

const titleContent = 'The Competition';
const SUB_TEXT_CONTENT = [
  {
    id: 0,
    title: 'Product Manager',
    paragraph: 'List an appealing fact About your Target customer here.',
  },
  {
    id: 1,
    title: '$200k+ Income',
    paragraph: 'List an appealing fact About your Target customer here.',
  },
  {
    id: 2,
    title: 'Decision Maker',
    paragraph: 'List an appealing fact About your Target customer here.',
  },
  {
    id: 3,
    title: 'Metro Area',
    paragraph: 'List an appealing fact About your Target customer here.',
  },
];

const Competitive = () => (
  <section className="competitive logo">
    <Info
      tittleContent={titleContent}
      content={SUB_TEXT_CONTENT}
      className="competitive__info"
      titleClass="competitive__title"
      subTitleClass="competitive__sub-title"
      subParagraphClass="competitive__sub-paragraph"
    />
  </section>
);

export { Competitive };
