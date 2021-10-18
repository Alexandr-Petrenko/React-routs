import classNames from 'classnames';
import PropTypes from 'prop-types';
import './_SubTitle.scss';

const SubTitle = ({ content, className }) => (
  <h3 className={classNames('sub-title', className)}>{content}</h3>
);

SubTitle.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SubTitle.defaultProps = {
  className: '',
};

export default SubTitle;
