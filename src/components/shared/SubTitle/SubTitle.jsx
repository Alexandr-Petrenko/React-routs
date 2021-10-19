import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './_SubTitle.module.scss';

const SubTitle = ({ content, isDefault, isCentered, isRelative }) => {
  const {
    subTitle,
    subTitleDefault,
    subTitleDefaultCentered,
    subTitleDefaultRelative,
  } = styles;

  return (
    <h3
      className={classNames(subTitle, {
        [subTitleDefault]: isDefault,
        [subTitleDefaultCentered]: isCentered,
        [subTitleDefaultRelative]: isRelative,
      })}
    >
      {content}
    </h3>
  );
};

SubTitle.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  isDefault: PropTypes.bool,
  isCentered: PropTypes.bool,
  isRelative: PropTypes.bool,
};

SubTitle.defaultProps = {
  className: '',
  isDefault: false,
  isCentered: false,
  isRelative: false,
};

export default SubTitle;
