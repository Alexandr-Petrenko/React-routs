import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubTitle from './SubTitle';
import SubParagraph from './SubParagraph';

const SubText = ({
  className,
  title,
  text,
  paragraphClass,
  isDefault,
  isCentered,
  isRelative,
}) => (
  <div className={classNames('sub-text', className)}>
    <SubTitle
      content={title}
      isDefault={isDefault}
      isRelative={isRelative}
      isCentered={isCentered}
    />
    <SubParagraph content={text} className={paragraphClass} />
  </div>
);

SubText.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  isDefault: PropTypes.bool,
  paragraphClass: PropTypes.string,
  isCentered: PropTypes.bool,
  isRelative: PropTypes.bool,
};

SubText.defaultProps = {
  className: '',
  titleClass: '',
  paragraphClass: '',
  isDefault: false,
  isCentered: false,
  isRelative: false,
};

export default SubText;
