import classNames from 'classnames';
import styles from './_Competitive.module.scss';
import Info from '../../shared/Info';

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
const {
  competitive,
  competitiveInfo,
  competitiveSubParagraph,
  competitiveTitle,
} = styles;

const Competitive = () => (
  <section className={classNames('logo', competitive)}>
    <Info
      tittleContent={titleContent}
      content={SUB_TEXT_CONTENT}
      className={competitiveInfo}
      titleClass={competitiveTitle}
      isDefault={true}
      subParagraphClass={competitiveSubParagraph}
    />
  </section>
);

export default Competitive;
