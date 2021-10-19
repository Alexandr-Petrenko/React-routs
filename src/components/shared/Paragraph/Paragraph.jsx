import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './_Paragraph.scss';

const { paragraph } = styles;
const Paragraph = ({ content, className }) => (
  <p className={classNames(paragraph, className)}>{content}</p>
);

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export default Paragraph;
