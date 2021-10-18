import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubTitle from './SubTitle';
import SubParagraph from './SubParagraph';

const SubText = ({ className, title, text, titleClass, paragraphClass }) => (
  <div className={classNames('sub-text', className)}>
    <SubTitle content={title} className={titleClass} />
    <SubParagraph content={text} className={paragraphClass} />
  </div>
);

SubText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  paragraphClass: PropTypes.string,
};

SubText.defaultProps = {
  className: '',
  titleClass: '',
  paragraphClass: '',
};

export default SubText;
