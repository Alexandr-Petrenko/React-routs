import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './_SubParagraph.module.scss';

const { subParagraph } = styles;

const SubParagraph = ({ content, className }) => (
  <p className={classNames(subParagraph, className)}>{content}</p>
);

SubParagraph.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SubParagraph.defaultProps = {
  className: '',
};

export default SubParagraph;
