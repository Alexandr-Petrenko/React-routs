import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './_Title.module.scss';

const { title } = styles;

const Title = ({ content, className }) => (
  <h2 className={classNames(title, className)}>{content}</h2>
);

Title.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};

export default Title;
