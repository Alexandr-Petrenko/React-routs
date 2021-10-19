import classNames from 'classnames';
import Title from '../../shared/Title';
import Benefit from '../../shared/Benefit';
import styles from './_Difference.module.scss';

const BENEFIT_CONTENT = [
  {
    id: 0,
    subTitle: 'Proven Team',
    subParagraph: 'Founding Team with multiple exits.',
    url: '/icons/users.png',
  },
  {
    id: 1,
    subTitle: 'Market traction',
    subParagraph: 'Profitable, growing  userbase.',
    url: '/icons/barchart.png',
  },
  {
    id: 2,
    subTitle: 'Unique tech',
    subParagraph: 'Innovative technology.',
    url: '/icons/code.png',
  },
];

const { difference, differenceTitle, differenceWrapper } = styles;

const Difference = () => (
  <section className={classNames('logo', difference)}>
    <Title content="What makes us different?" className={differenceTitle} />
    <div className={differenceWrapper}>
      {BENEFIT_CONTENT.map((item) => {
        const { id, subTitle, subParagraph, url } = item;

        return (
          <Benefit
            src={url}
            subParagraph={subParagraph}
            subTitle={subTitle}
            imgClassName="difference__img"
            subParagraphClass="difference__sub-paragraph"
            key={id}
          />
        );
      })}
    </div>
  </section>
);

export default Difference;
