import './_Target.scss';
import SectionPicture from '../../shared/SectionPicture';
import SubTitle from '../../shared/SubTitle';
import Info from '../../shared/Info';

const titleContent = 'Target Customer';
const subTitleContent = 'In this city alone, there are 1M product managers.';
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

const Target = () => (
  <section className="target section-with-picture">
    <SectionPicture className="target__section-picture" />
    <div className="target__section logo">
      <Info
        content={SUB_TEXT_CONTENT}
        tittleContent={titleContent}
        titleClass="target__title"
        subTitleClass="target__sub-title"
        subParagraphClass="target__sub-text"
      />
      <SubTitle content={subTitleContent} />
    </div>
  </section>
);

export default Target;
