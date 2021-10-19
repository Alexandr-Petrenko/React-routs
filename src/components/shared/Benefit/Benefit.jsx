import PropTypes from 'prop-types';
import SubTitle from '../SubTitle';
import SubParagraph from '../SubParagraph';
import styles from './_Benefit.module.scss';

const { benefit, benefitImg, benefitSubParagraph } = styles;

const Benefit = ({ src, subTitle, subParagraph }) => (
  <div className={benefit}>
    <img
      src={process.env.PUBLIC_URL + src}
      alt={subTitle}
      className={benefitImg}
    />
    <SubTitle content={subTitle} isCentered={true} />
    <SubParagraph content={subParagraph} className={benefitSubParagraph} />
  </div>
);

Benefit.propTypes = {
  src: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subParagraph: PropTypes.string.isRequired,
};

export default Benefit;
