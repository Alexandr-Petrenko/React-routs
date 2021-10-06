import PropTypes from 'prop-types';
import './_Benefit.scss';
import { SubTitle } from '../SubTitle';
import { SubParagraph } from '../SubParagraph';

const Benefit = ({ src, subTitle, subParagraph }) => (
  <div className="benefit">
    <img src={process.env.PUBLIC_URL + src} alt={subTitle} className="benefit__img" />
    <SubTitle content={subTitle} className="benefit__sub-title" />
    <SubParagraph content={subParagraph} className="benefit__sub-paragraph" />
  </div>
);

Benefit.propTypes = {
  src: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  subParagraph: PropTypes.string.isRequired,
};

export { Benefit };
