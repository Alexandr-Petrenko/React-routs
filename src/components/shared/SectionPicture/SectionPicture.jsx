import classNames from 'classnames';
import './_SectionPicture.scss';
import PropTypes from 'prop-types';

const SectionPicture = ({ className }) => (
  <div className={classNames('section-picture', className)} />
);

SectionPicture.propTypes = {
  className: PropTypes.string,
};

SectionPicture.defaultProps = {
  className: '',
};

export { SectionPicture };
