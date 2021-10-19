import classNames from 'classnames';
import Info from '../../shared/Info';
import styles from './_Market.module.scss';

const titleContent = 'Marketing strategy';
const SUB_TEXT_CONTENT = [
  { id: 0, title: 'Advertising', paragraph: 'Reach COOs quickly' },
  {
    id: 1,
    title: 'Organic search',
    paragraph: 'With a focus on long-tail keywords',
  },
  {
    id: 2,
    title: 'Content marketing',
    paragraph: 'Providing useful, niche content',
  },
];

const { market, marketInfo, marketTitle, marketText, marketSubParagraph } =
  styles;

const Market = () => (
  <section className={classNames('logo', market)}>
    <Info
      tittleContent={titleContent}
      content={SUB_TEXT_CONTENT}
      className={marketInfo}
      titleClass={marketTitle}
      isRelative={true}
      subParagraphClass={marketSubParagraph}
      containerClass={marketText}
    />
  </section>
);

export default Market;
