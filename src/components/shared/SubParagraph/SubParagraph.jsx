import classNames from 'classnames';
import PropTypes from 'prop-types';
import './_SubParagraph.scss';

const SubParagraph = ({ content, className }) => (
  <p className={classNames('sub-paragraph', className)}>
    {content}
  </p>
);

SubParagraph.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SubParagraph.defaultProps = {
  className: '',
};

export { SubParagraph };
