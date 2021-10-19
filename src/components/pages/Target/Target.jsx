import classNames from 'classnames';
import SectionPicture from '../../shared/SectionPicture';
import SubTitle from '../../shared/SubTitle';
import Info from '../../shared/Info';
import styles from './_Target.module.scss';

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

const {
  target,
  targetSectionPicture,
  targetSection,
  targetTitle,
  targetSubText,
} = styles;

const Target = () => (
  <section className={classNames('section-with-picture', target)}>
    <SectionPicture className={targetSectionPicture} />
    <div className={classNames('logo', targetSection)}>
      <Info
        content={SUB_TEXT_CONTENT}
        tittleContent={titleContent}
        titleClass={targetTitle}
        isDefault={true}
        subParagraphClass={targetSubText}
      />
      <SubTitle content={subTitleContent} />
    </div>
  </section>
);

export default Target;
